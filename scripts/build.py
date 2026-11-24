#!/usr/bin/env python3
"""Bouwt de statische, vindbare versie van de site.

Voor elke pagina (NL + EN) en elke case wordt een echte HTML-pagina gemaakt met
volledige tekst, titel, beschrijving, canonical, hreflang, Open Graph en
structured data. Daarnaast: sitemap.xml, robots.txt, llms.txt, llms-full.txt,
404.html en og-image.jpg.

Gebruik (vanuit de hoofdmap van de repository):
    pip install playwright && playwright install chromium
    python3 scripts/build.py

Draai dit opnieuw na elke inhoudelijke wijziging in js/ of css/.
"""
import asyncio, html, json, os, re, socketserver, threading, http.server, subprocess, sys, datetime
from playwright.async_api import async_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://www.brampeulers.com'
TEMPLATE = open(os.path.join(ROOT, 'scripts/template.html'), encoding='utf-8').read()
CHROME = os.environ.get('CHROME') or ('/usr/bin/google-chrome' if os.path.exists('/usr/bin/google-chrome') else None)

SEG = {'nl': {'home': '', 'portfolio': 'portfolio', 'artikelen': 'artikelen', 'about': 'over-mij', 'contact': 'contact'},
       'en': {'home': '', 'portfolio': 'portfolio', 'artikelen': 'articles', 'about': 'about', 'contact': 'contact'}}

def path_of(l, h):
    p = 'cases/' + h[5:] if h.startswith('case-') else (SEG[l]['artikelen'] + '/' + h[4:] if h.startswith('art-') else SEG[l][h])
    return '/' + ('en/' if l == 'en' else '') + (p + '/' if p else '')

def case_data():
    js = ("global.window={};require('./js/cases.js');require('./js/cases-en.js');require('./js/articles.js');"
          "console.log(JSON.stringify({nl:window.CASEDATA,en:window.CASEDATA_EN,arts:window.ARTICLES}))")
    return json.loads(subprocess.check_output(['node', '-e', js], cwd=ROOT))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k): super().__init__(*a, directory=ROOT, **k)
    def log_message(self, *a): pass
    def do_GET(self):
        f = os.path.join(ROOT, self.path.split('?')[0].lstrip('/'))
        if self.path.startswith(('/js/', '/css/', '/media/')) and os.path.isfile(f):
            return super().do_GET()
        body = TEMPLATE.replace('{{LANG}}', 'nl').encode()
        self.send_response(200); self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', str(len(body))); self.end_headers(); self.wfile.write(body)

def strip_runtime(h):
    h = re.sub(r'\sstyle="transform:[^"]*"', '', h)
    h = re.sub(r'\sstyle="border-radius:[^"]*"', '', h)
    return h

async def render_all(routes):
    srv = socketserver.ThreadingTCPServer(('127.0.0.1', 0), Handler); port = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    out = {}
    async with async_playwright() as p:
        b = await p.chromium.launch(**({'executable_path': CHROME} if CHROME else {}))
        pg = await b.new_page(viewport={'width': 1440, 'height': 900})
        errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
        for l, h in routes:
            await pg.goto(f'http://127.0.0.1:{port}{path_of(l, h)}', wait_until='domcontentloaded')
            await pg.wait_for_function('window.__route!==undefined')
            await pg.wait_for_timeout(150)
            out[(l, h)] = await pg.evaluate("""()=>{
              const keep=[...document.head.querySelectorAll('meta[name="description"],link[rel="canonical"],link[rel="alternate"][hreflang],meta[property^="og:"],meta[name^="twitter:"],script#ld-page')].map(e=>e.outerHTML);
              return {lang:document.documentElement.lang,title:document.title,head:keep,
                header:document.querySelector('header').outerHTML.replace(/ (solid|hide)/g,''),
                menu:document.querySelector('.mmenu').outerHTML,
                app:document.getElementById('app').innerHTML,route:window.__route}}""")
        await b.close()
    srv.shutdown()
    if errs: print('JS errors:', errs); sys.exit(1)
    return out

VER = datetime.datetime.now().strftime('%Y%m%d%H%M')

def page_html(r, noindex=False):
    t = TEMPLATE.replace('{{LANG}}', r['lang'])
    t = re.sub(r'(href="/css/[^"?]+|src="/js/[^"?]+)"', lambda m: m.group(1) + '?v=' + VER + '"', t)
    head = f"<title>{html.escape(r['title'])}</title>\n" + '\n'.join(r['head'])
    if noindex: head += '\n<meta name="robots" content="noindex">'
    t = t.replace('<!--HEAD-->', head, 1)
    t = re.sub(r'<header class="hdr" id="hdr">.*?</header>', lambda m: r['header'], t, count=1, flags=re.S)
    t = re.sub(r'<nav class="mmenu".*?</nav>', lambda m: r['menu'], t, count=1, flags=re.S)
    t = t.replace('<!--APP-->', strip_runtime(r['app']), 1)
    return t

def write(rel, text):
    f = os.path.join(ROOT, rel); os.makedirs(os.path.dirname(f) or ROOT, exist_ok=True)
    open(f, 'w', encoding='utf-8').write(text)

def txt(h):
    h = re.sub(r'<br\s*/?>', '\n', h); h = re.sub(r'</(p|h[1-6]|li)>', '\n', h)
    h = re.sub(r'<li>', '- ', h); h = re.sub(r'<h[1-6]>', '### ', h)
    h = re.sub(r'<[^>]+>', '', h); return html.unescape(re.sub(r'\n{3,}', '\n\n', h)).strip()

def main():
    cd = case_data()
    slugs = [c['slug'] for c in cd['nl']]
    pages = ['home', 'portfolio', 'artikelen', 'about', 'contact']
    arts = ['art-' + a['slug'] for a in cd['arts']['nl']]
    routes = [(l, h) for l in ('nl', 'en') for h in pages + ['case-' + s for s in slugs] + arts]
    res = asyncio.run(render_all(routes))

    for (l, h), r in res.items():
        write(path_of(l, h).lstrip('/') + 'index.html', page_html(r))
    write('404.html', page_html(res[('nl', 'home')], noindex=True))

    today = datetime.date.today().isoformat()
    urls = []
    for h in pages + ['case-' + s for s in slugs] + arts:
        for l in ('nl', 'en'):
            alt = ''.join(f'<xhtml:link rel="alternate" hreflang="{x}" href="{SITE}{path_of(x, h)}"/>' for x in ('nl', 'en'))
            alt += f'<xhtml:link rel="alternate" hreflang="x-default" href="{SITE}{path_of("nl", h)}"/>'
            pr = '1.0' if h == 'home' else ('0.8' if h in pages else '0.7')
            urls.append(f'<url><loc>{SITE}{path_of(l, h)}</loc><lastmod>{today}</lastmod><priority>{pr}</priority>{alt}</url>')
    write('sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + '\n'.join(urls) + '\n</urlset>\n')

    write('robots.txt', 'User-agent: *\nAllow: /\n\n'
          '# AI-zoekmachines en assistenten zijn welkom\n'
          + ''.join(f'User-agent: {a}\nAllow: /\n\n' for a in ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot'])
          + f'Sitemap: {SITE}/sitemap.xml\n')

    def case_line(c, l): return f"- [{c['client']} — {c['title']}]({SITE}{path_of(l, 'case-' + c['slug'])}): {c['role']}, {c['period']}."
    llms = f"""# Bram Peulers — Product designer & facilitator

> Freelance product designer and facilitator based in the Netherlands. He takes teams and decision-makers from a vague idea to a tested prototype, using AI to make ideas tangible fast and validating with real users. 10+ years of product design. Domain experience in energy (home base: Essent, Eneco), finance, insurance, healthcare, e-commerce and retail. Available for short sprints and long-term engagements (e.g. a year), embedded in one or more teams. The site is available in Dutch (default) and English.

## Services
- Product design: end-to-end UX and UI for apps, websites and portals, built on scalable design systems and tested with real users.
- UX design: user research, customer needs and interaction design.
- Service design: the full customer journey across channels, including processes and systems behind it.
- From idea to prototype: a clickable prototype tested with real users within a few weeks, using AI prototyping.
- Facilitation & AI products: workshops towards shared decisions; designing trust, errors and control into AI features.

## Key pages
- [Home (EN)]({SITE}/en/) · [Home (NL)]({SITE}/)
- [About (EN)]({SITE}/en/about/) · [Over mij (NL)]({SITE}/over-mij/)
- [Portfolio (EN)]({SITE}/en/portfolio/) · [Portfolio (NL)]({SITE}/portfolio/)
- [Contact (EN)]({SITE}/en/contact/) · [Contact (NL)]({SITE}/contact/)
- [Articles (EN)]({SITE}/en/articles/) · [Artikelen (NL)]({SITE}/artikelen/)
- [Full text of all cases and articles]({SITE}/llms-full.txt)

## Case studies
""" + '\n'.join(case_line(c, 'en') for c in cd['en']) + '\n\n## Articles\n' + '\n'.join(f"- [{a['title']}]({SITE}{path_of('en', 'art-' + a['slug'])}): {a['summary']}" for a in cd['arts']['en']) + f"""

## Contact
- Email: info@demerkenstudio.nl
- LinkedIn: https://www.linkedin.com/in/brampeulers/
- Dribbble: https://www.dribbble.com/brampeulers
"""
    write('llms.txt', llms)

    full = ['# Bram Peulers — case studies (full text)\n', f'Source: {SITE}/  ·  English version; Dutch originals at {SITE}/cases/<slug>/\n']
    for c in cd['en']:
        full.append(f"\n## {c['client']} — {c['title']}\n\nURL: {SITE}{path_of('en', 'case-' + c['slug'])}\nRole: {c['role']} · Period: {c['period']}\n\n{txt(c['intro'])}\n")
        for b in c['blocks']:
            if b[0] == 't': full.append(txt(b[1]) + '\n')
            elif b[0] == 'q': full.append('> ' + txt(b[1]).replace('\n', '\n> ') + f'\n> — {b[2]}\n')
            elif b[0] == 'c': full.extend(f"### {x[1]}\n{txt(x[2])}\n" for x in b[1])
    for a in cd['arts']['en']:
        full.append(f"\n## Article: {a['title']}\n\nURL: {SITE}{path_of('en', 'art-' + a['slug'])}\n\n{txt(a['body'])}\n")
    write('llms-full.txt', '\n'.join(full))
    print(f'Gebouwd: {len(res)} pagina\'s, sitemap ({len(urls)} URL\'s), robots.txt, llms.txt, llms-full.txt, 404.html')

if __name__ == '__main__':
    main()
