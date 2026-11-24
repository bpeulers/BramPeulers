# Bram Peulers — portfolio website

Statische website (HTML, CSS en JavaScript), gehost via Vercel op https://www.brampeulers.com.

## Vindbaarheid (SEO en AI)

Elke pagina en elke case heeft een eigen adres met volledige, vooraf gegenereerde HTML, zodat Google, Bing en AI-zoekmachines (ChatGPT, Claude, Perplexity) alle tekst kunnen lezen:

- NL: `/`, `/portfolio/`, `/artikelen/`, `/over-mij/`, `/contact/`, `/cases/<slug>/`
- EN: `/en/`, `/en/portfolio/`, `/en/articles/`, `/en/about/`, `/en/contact/`, `/en/cases/<slug>/`

Per pagina: titel, beschrijving, canonical, hreflang (nl/en), Open Graph en structured data (Person, ProfessionalService, WebSite, WebPage, BreadcrumbList, CreativeWork). Verder: `sitemap.xml`, `robots.txt` (ook AI-crawlers toegestaan), `llms.txt` en `llms-full.txt` voor AI-assistenten, en `og-image.jpg` voor het delen op LinkedIn.

### Na een wijziging opnieuw bouwen

De pagina's in `cases/`, `en/`, `portfolio/` enz. worden gegenereerd. Pas de inhoud aan in `js/` of `scripts/template.html` en draai daarna:

```bash
pip install playwright && playwright install chromium
python3 scripts/build.py
```

## Structuur

```
bram-peulers-website/
├── index.html        # Gegenereerde homepage (NL)
├── scripts/
│   ├── template.html # Bron-template voor alle pagina's
│   └── build.py      # Genereert pagina's, sitemap, robots, llms.txt
├── vercel.json       # Vercel-instellingen (trailing slash, caching)
├── css/
│   └── style.css     # Alle opmaak, kleuren, typografie en animaties
├── js/
│   ├── main.js       # Routing, NL/EN-schakelaar, pagina's, animaties, carrousel, sliders
│   ├── cases.js      # Inhoud van de 18 casepagina's (Nederlands)
│   ├── cases-en.js   # Inhoud van de 18 casepagina's (Engels)
│   └── dims.js       # Afmetingen van de afbeeldingen (voor de juiste verhoudingen)
├── media/            # Afbeeldingen (WebP) en de Essent-video (MP4)
├── sitemap.xml, robots.txt, llms.txt, llms-full.txt, og-image.jpg, 404.html
└── cases/, en/, portfolio/, artikelen/, over-mij/, contact/   # Gegenereerde pagina's
```

## Online zetten met GitHub Pages

1. Maak op GitHub een nieuwe repository aan, bijvoorbeeld `bram-peulers-website`.
2. Upload de inhoud van deze map naar de hoofdmap van de repository (via **Add file → Upload files**, of met `git push`). Let op dat de mappen `css`, `js` en `media` meekomen.
3. Ga naar **Settings → Pages**, kies bij *Source* **Deploy from a branch**, selecteer `main` en `/ (root)`, en klik **Save**.
4. Na een minuut staat de site op `https://<gebruikersnaam>.github.io/bram-peulers-website/`.

Met git:

```bash
git init
git add .
git commit -m "Eerste versie website"
git branch -M main
git remote add origin https://github.com/<gebruikersnaam>/bram-peulers-website.git
git push -u origin main
```

### Eigen domein (optioneel)

Vul bij **Settings → Pages → Custom domain** je domein in (bijv. `brampeulers.nl`) en zet bij Mijndomein een `CNAME`-record voor `www` naar `<gebruikersnaam>.github.io`. Voor het kale domein gebruik je de A-records van GitHub Pages: 185.199.108.153, 185.199.109.153, 185.199.110.153 en 185.199.111.153.

## Lokaal bekijken

Dubbelklik op `index.html`, of start een webserver in deze map:

```bash
python3 -m http.server 8000
```

en open `http://localhost:8000`.

## Inhoud aanpassen

- **Teksten van pagina's (NL en EN):** `js/main.js`, in het blok `BUNDLE` (`nl:` en `en:`).
- **Casepagina's:** `js/cases.js` (NL) en `js/cases-en.js` (EN). Elke case heeft `intro` en een lijst `blocks`:
  `['t', html, breedte]` tekst · `['i', [beelden], kolommen]` beeldraster · `['s', [beelden]]` slider · `['v', video, bijschrift]` video · `['c', [[beeld, titel, tekst]]]` kaarten · `['q', citaat, naam]` citaat.
- **Nieuwe afbeelding:** zet een `.webp` in `media/` en voeg de afmetingen toe aan `js/dims.js`.
- **Kleuren en lettertypen:** bovenaan `css/style.css` (`--bg`, `--ink`, `--a1`, `--a2`).

## Adressen

- Nederlands: `#home`, `#portfolio`, `#artikelen`, `#about`, `#contact`, `#case-essent` …
- Engels: dezelfde adressen met `en-` ervoor, bijv. `#en-home`, `#en-case-essent`.

## Externe bronnen

- Lettertypen: Google Fonts (Source Serif 4, Hanken Grotesk)
- Soepel scrollen: Lenis 1.1.13 via jsDelivr

## Aandachtspunt

Het contactformulier verstuurt nog niets; het toont een melding met een verwijzing naar LinkedIn. Koppel het later aan bijvoorbeeld Formspree als je berichten wilt ontvangen.
