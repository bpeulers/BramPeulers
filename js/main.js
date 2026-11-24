/* Bram Peulers — site logic: routing, NL/EN, animations */
{
const MAIL='info@demerkenstudio.nl';
const LI='https://www.linkedin.com/in/brampeulers/', DR='https://www.dribbble.com/brampeulers';

const DIMS=window.DIMS||{};
const CLINK={'Essent':'essent','Achmea':'achmea','Centraal Beheer':'achmea','Eneco':'eneco-app','Oxxio':'eneco-app','Interpolis':'interpolis','de Volksbank':'sns','Univé':'unive','VGZ':'salut','KNVB':'mdt'};
const marq=()=>[...CLIENTS,...CLIENTS].map((c,i)=>CLINK[c]?`<a class="mq" href="#case-${CLINK[c]}" data-c="link"${i>=CLIENTS.length?' tabindex="-1" aria-hidden="true"':''}>${c}</a>`:`<span${i>=CLIENTS.length?' aria-hidden="true"':''}>${c}</span>`).join('');
const CLIENTS=['Essent','Achmea','Eneco','Interpolis','Centraal Beheer','Rabobank','ABN AMRO','de Volksbank','Univé','VGZ','Aegon','PGGM','KNVB','UMC Utrecht','Energiedirect','Oxxio','Heijmans','Kempen'];
const ext=u=>u?` href="${u}" target="_blank" rel="noopener"`:'';
const media=(img,ratio,par=true,alt='')=>`<div class="media ${ratio}">${par?'<div class="par">':''}<img src="/media/${img}.webp" alt="${alt}" loading="lazy" decoding="async">${par?'</div>':''}</div>`;
const L=(lines)=>lines.map(l=>`<span class="ln"><span>${l}</span></span>`).join('');
const BUNDLE={
nl:()=>{
const CD=window.CASEDATA||[];
const FEAT=[['essent','Energie-inzicht en betaalprocessen helder gemaakt in de Essent-omgeving: live meterdata, zonnepanelen en uitbetalingen.',['UX design','Prototyping','User research']],
 ['achmea','Eén generieke schademeldflow voor Centraal Beheer, Interpolis en FBTO — op web én in de native apps.',['Multi-brand','Design system','App & web']],
 ['eneco-app','Nieuwe app-producten voor Eneco en Oxxio, van dynamische tarieven tot de "app van de toekomst".',['App design','Multi-brand','UX-lab']],
 ['ockto-ds','Eén centrale Figma-bibliotheek voor alle Ockto-ontwerpen: white-label, iOS, Android en dark mode.',['Design system','Figma','iOS & Android']]];
const CASES=FEAT.map(([slug,short,tags])=>{const c=CD.find(x=>x.slug===slug)||{};return {slug,client:c.client,title:c.title,year:c.period,img:c.thumb,short,tags}}).filter(c=>c.client);
const HOMECASES=[...CASES,...CD.filter(c=>!CASES.some(x=>x.slug===c.slug)).map(c=>({slug:c.slug,client:c.client,title:c.title,year:c.period,img:c.thumb,short:c.intro.replace(/<[^>]+>/g,'').replace(/&amp;/g,'&'),tags:[]}))];
const HERO=[['2310-tussenstand-dashboard-3','eneco-app','Eneco — App team'],['2307-sns-large','sns','SNS — Redesign'],['2306-screens','unive','Univé — Digitale producten'],['2210-triodos-3','triodos','Triodos — Hypotheekstraat'],['2310-oxxio','eneco-app','Oxxio — Dynamic pricing app']];
const PF=[...CD.map(c=>[c.thumb,c.client,c.title,c.cat,'case:'+c.slug]),
 ['2402-knab','Knab','App concept','apps',''],
 ['2402-rabobank-intermediair-portal-1','Rabobank','Intermediair portal','portal','']];
const CAT={all:'Alle',apps:'Apps',web:'Websites',portal:'Portalen & dashboards',ds:'Design systems',brand:'Branding'};

const SVC=[['Product design','End-to-end UX en UI voor apps, websites en portalen: van user flows en wireframes tot schermen die klaar zijn voor development, gebouwd op een schaalbaar design system en getest met echte gebruikers.'],
 ['UX design','Gebruikersonderzoek, klantbehoeften en interactieontwerp. Ik maak complexe processen begrijpelijk en toegankelijk, zodat gebruikers zonder nadenken hun doel bereiken.'],
 ['Service design','Ik kijk verder dan het scherm: de hele klantreis over kanalen heen, inclusief de processen en systemen erachter. Zo sluiten app, website, klantenservice en backoffice op elkaar aan.'],
 ['Van idee naar prototype','In een paar weken van een vaag idee naar een klikbaar prototype dat met echte gebruikers is getest. Met AI maak ik meerdere richtingen razendsnel tastbaar.'],
 ['Facilitatie & AI-producten','Ik leid teams en beslissers door workshops naar gedragen keuzes, en help AI-functies ontwerpen die gebruikers begrijpen, vertrouwen en kunnen bijsturen.'],
 ['Sectoren & domeinen','Energie is mijn thuisbasis: verbruiksinzicht, dynamische tarieven, zonnepanelen en betaalprocessen. Daarnaast ervaring in finance, verzekeringen, zorg, e-commerce en retail.']];

const QUOTES=[['Bram is sterk in het vertalen van onze requirements naar mobile designs en heeft een goed oog voor ons product en visie.','Ockto','Opdrachtgever'],
 ['Bram denkt erg goed mee en komt met ideeën. Ook de nazorg is erg goed te noemen. Met andere woorden een aanrader!','Huygens & Groenevelt','Financieel advies'],
 ['Bram luistert goed naar je wensen en komt met een duidelijk plan. Wij zijn zeer tevreden met het resultaat.','E3DV','Opdrachtgever']];


const ARTS=[['1512-fonts-1','UX, UI of visual design: wat zijn de verschillen?','','De termen worden vaak door elkaar gebruikt. Een heldere uitleg van drie verschillende vakgebieden.',''],
 ['2208-design-system-ockto-2x','De voordelen van een design system','','Hoe een design system organisaties helpt hun digitale producten consistent te houden.',''],
 ['1607-brandguid-melrose-2','Waarom is een consistente huisstijl belangrijk?','','Herkenbaarheid bouwt vertrouwen. Waarom consistentie loont voor elk merk.',''],
 ['2203-merkenstudio','Een slimme navigatie voor meer conversie','','Een duidelijke navigatiestructuur helpt bezoekers vinden wat ze zoeken — en verhoogt de conversie.',''],
 ['1612-brainstorm2','Hoe breng je een customer journey in kaart?','','Een tutorial om de reis van je klant vóór, tijdens en na de aankoop zichtbaar te maken.',''],
 ['1608-persona','Hoe ontwikkel je een persona?','','Zo zet je de klant écht centraal in je project, met een persona als vertrekpunt.','']];


const closer=(cs)=>`<section class="closer"><p class="label rv">Laten we samenwerken</p><a class="big" href="#contact" data-c="link">Plan een kennismaking <em>→</em></a></section>
<footer class="ftr"><div class="soc"><a${ext(LI)}>LinkedIn</a><a${ext(DR)}>Dribbble</a></div></footer>`;

const card=(c,i)=>`<a class="card rv ${i%2?'d2':''}" href="#case-${c.slug}" data-c="view">${media(c.img,'r45',true,c.client+' — '+c.title)}<div class="meta"><b>${c.client} — ${c.title}</b><span class="mute">${c.year}</span></div><p>${c.short}</p><div class="tags">${c.tags.map(t=>`<span>${t}</span>`).join('')}</div></a>`;

const V={
home:()=>`
<section class="hero">
  <h1 class="h1 split-in">${L(['Van vaag idee naar','<span class="grad">getest prototype</span>,','met AI en echte gebruikers.'])}</h1>
  <div class="facts">
    <div class="rv d1"><span class="label">Rol</span>Product designer, regisseur én snelle bouwer</div>
    <div class="rv d2"><span class="label">Aanpak</span>Facilitatie + AI-prototyping</div>
    <div class="rv d3"><span class="label">Sectoren</span>Energie, finance, verzekeringen, zorg, e-commerce & retail</div>
    <div class="rv d4"><span class="label">Ervaring</span>10+ jaar product design</div>
    <a class="go rv d4" href="#portfolio" data-c="link"><i>↘</i>Bekijk mijn werk</a>
  </div>
  <div class="pic rv d2">${media('2408-brampeulers-portret','r45 pf',true,'Portret van Bram Peulers').replace('loading="lazy"','loading="eager" fetchpriority="high"')}</div>
</section>
<section class="grow"><div class="media ok gcar" id="grow" aria-roledescription="carrousel" aria-label="Uitgelicht werk"><div class="gstack">${HERO.map((h,i)=>`<a class="gs${i?'':' on'}" href="#case-${h[1]}" tabindex="${i?-1:0}" data-c="view"><img src="/media/${h[0]}.webp" alt="${h[2]}" ${i?'loading="lazy"':'fetchpriority="high"'} decoding="async"></a>`).join('')}</div>
<div class="gbar"><span class="gcap" id="gcap">${HERO[0][2]}</span></div></div><div class="snav gnav"><span class="label"><b class="sn" id="gn">1</b> / ${HERO.length}</span><button class="sp" id="gp" aria-label="Vorig project">←</button><button class="sx" id="gx" aria-label="Volgend project">→</button></div></section>
<section class="sec">
  <div class="head"><h2 class="h2">${L(['Geselecteerd werk'])}</h2><a class="ulink rv" href="#portfolio">Alle cases →</a></div>
  <div class="slider wsl rv"><div class="strack" tabindex="0" aria-label="Geselecteerde cases">${HOMECASES.map((c,i)=>card(c,i).replace('class="card rv','class="card wcard')).join('')}</div><div class="snav"><span class="label"><b class="sn">1</b> / ${HOMECASES.length}</span><button class="sp" aria-label="Vorige case">←</button><button class="sx" aria-label="Volgende case">→</button></div></div>
</section>
<section class="marq" aria-label="Opdrachtgevers"><div class="tr">${marq()}</div></section>
<section class="sec">
  <h2 class="h2 center" style="margin-bottom:clamp(40px,5vw,72px)">${L(['Wat ik doe'])}</h2>
  <div class="svc">${SVC.map((s,i)=>`<div class="rv d${i%3+1}"><span class="label">0${i+1}</span><h3 class="h3">${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div>
  <div class="cta rv"><p class="h3" style="margin:0">Een vaag idee dat je snel getest wilt hebben? <span class="grad">Laten we praten.</span></p><a class="btn" href="#contact" data-c="link">Neem contact op</a></div>
</section>
<section class="sec">
  <h2 class="h2" style="margin-bottom:56px">${L(['Wat klanten zeggen'])}</h2>
  <div class="quote rv"><p class="qt serif" id="qt"></p><div><div class="qa" id="qa"></div><div class="qnav"><button id="qp" aria-label="Vorige">←</button><button id="qn" aria-label="Volgende">→</button></div><div class="qdots" id="qd">${QUOTES.map(()=>'<i></i>').join('')}</div></div></div>
</section>
${closer()}`,

portfolio:()=>{const cnt=k=>k==='all'?PF.length:PF.filter(p=>p[3]===k).length;return `
<section class="ph"><h1 class="h1">${L(['Portfolio: bekijk','mijn <span class="grad">werk</span>.'])}</h1>
<p class="lead rv d2">Apps, websites, portalen en design systems voor onder meer Essent, Achmea, Eneco, SNS, ASN Bank, Triodos en VGZ. Klik op een project voor de volledige case.</p></section>
<section class="sec" style="padding-top:0">
 <div class="filters rv" role="tablist">${Object.keys(CAT).map(k=>`<button data-f="${k}" class="${k==='all'?'on':''}">${CAT[k]}<sup>${cnt(k)}</sup></button>`).join('')}</div>
 <div class="pgrid">${PF.map((p,i)=>{const inner=`${media(p[0],'r11',false,p[1]+' — '+p[2])}<span class="meta"><b>${p[1]}</b><span>${p[2]}</span></span>`;return p[4]?`<a class="pitem rv d${i%3+1}" href="#case-${p[4].slice(5)}" data-cat="${p[3]}" data-c="view">${inner}</a>`:`<button class="pitem rv d${i%3+1}" data-i="${i}" data-cat="${p[3]}" data-c="view">${inner}</button>`}).join('')}</div>
</section>
<div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Project">
 <button class="btn ghost x" id="lbx">Sluiten ✕</button>
 <div class="media r11 ok" id="lbm"><img alt=""></div>
 <div class="txt"><span class="label" id="lbc"></span><h2 class="h2" id="lbt" style="margin:12px 0 20px"></h2><p id="lbd"></p><a class="btn" id="lbl" data-c="link">Bekijk project</a><div class="nx"><button class="btn ghost" id="lbp">← Vorige</button><button class="btn ghost" id="lbn">Volgende →</button></div></div>
</div>${closer()}`},

artikelen:()=>`
<section class="ph"><h1 class="h1">${L(['Artikelen over UX,','design systems en <span class="grad">merken</span>.'])}</h1>
<p class="lead rv d2">Wat ik in de praktijk leer over gebruikerservaring, design systems en merkidentiteit, uitgeschreven voor wie er zelf mee aan de slag wil.</p></section>
<section class="sec" style="padding-top:0">
<div class="alist">${ARTS.map(a=>`<div class="rv">${media(a[0],'r43',false,'')}<span><h3>${a[1]}</h3><p>${a[3]}</p></span><span></span></div>`).join('')}</div></section>${closer()}`,

about:()=>`
<section class="ph"><h1 class="h1">${L(['Meer regisseur dan maker.','Ik maak ideeën met AI','<span class="grad">razendsnel</span> tastbaar.'])}</h1></section>
<section class="wrap split">
 <div class="prose rv"><p>Ik ben Bram Peulers, freelance product designer en eigenaar van De Merkenstudio. Na ruim tien jaar ontwerpen van apps, websites en digitale omgevingen zie ik mezelf steeds meer als regisseur dan als maker.</p>
 <p>Mijn kracht zit in de combinatie. Ik leid teams en beslissers door het proces, van eerste brainstorm tot besluit, en maak tegelijk met AI razendsnel tastbaar wat er op tafel ligt. Geen weken wachten op een ontwerp, maar binnen dezelfde week een prototype om op te reageren. Die combinatie van facilitator en snelle bouwer is nog vrij zeldzaam.</p>
 <p>Door de jaren heen heb ik gewerkt in sectoren waar veel op het spel staat en processen complex zijn: energie, finance, verzekeringen, zorg, e-commerce, retail en overheid. Ik weet hoe gereguleerde organisaties werken, hoe je ontwerpt rond bestaande systemen en wat er nodig is om business, IT en klant op één lijn te krijgen. Die domeinkennis maakt dat ik snel ingewerkt ben en de juiste vragen stel, in elke nieuwe organisatie.</p>
 <p>Daarnaast verdiep ik me in het ontwerpen van AI-producten zelf. Hoe ontwerp je vertrouwen, fouten en controle in AI-functies? Daar is nog weinig expertise, en juist daar wil ik het verschil maken.</p>
 <a class="go" href="#contact" data-c="link"><i>↘</i>Vrijblijvend kennismaken</a></div>
 <div class="rv d2">${media('2408-brampeulers-portret','r45 pf',true,'Portret van Bram Peulers')}</div>
</section>
<section class="sec"><div class="media r169 rv">${'<div class="par"><img src="/media/2303-dgrop-20230222-0026.webp" alt="Bram Peulers tijdens een ontwerpsessie" loading="lazy"></div>'}</div></section>
<section class="sec long"><div class="split">
 <div><h2 class="h2">${L(['Ook voor','<span class="grad">lange</span> trajecten.'])}</h2></div>
 <div class="prose rv d1"><p>Naast korte sprints kun je me ook voor een langere periode vastleggen, bijvoorbeeld voor een jaar. Ik draai dan mee in één of meerdere teams, als vast onderdeel van de organisatie, en voeg vanaf de eerste week waarde toe.</p>
 <p>Ik ben een aanpakker en een harde werker. Ik leer een organisatie snel kennen, zie waar het knelt en zet dat om in concrete verbeteringen. Ik ben slim, ambitieus en neem geen genoegen met "goed genoeg": ik wil altijd het hoogst haalbare qua design.</p>
 <ul class="lfacts">
  <li><span class="label">Duur</span>Van een paar weken tot een jaar of langer</li>
  <li><span class="label">Inzet</span>In één of meerdere teams tegelijk</li>
  <li><span class="label">Waarde</span>Snel ingewerkt, direct impact</li>
 </ul>
 <a class="go" href="#contact" data-c="link"><i>↘</i>Bespreek een langer traject</a></div>
</div></section>
<section class="sec" style="padding-top:0"><h2 class="h2" style="margin-bottom:20px">${L(['Van vaag idee naar getest prototype'])}</h2><p class="mute rv" style="margin:0 0 40px">Een indicatief traject van een paar weken. Elke opdracht is anders; het ritme blijft.</p>
 <ol class="steps">${['Week 1 · Samen scherp krijgen — workshop met team en beslissers: wat is het probleem, voor wie, en wanneer is het een succes?','Week 1–2 · Snel tastbaar maken — met AI meerdere richtingen bouwen als klikbaar prototype','Week 2–3 · Testen en kiezen — valideren met echte gebruikers en samen met beslissers een richting kiezen','Week 3–4 · Vastleggen en overdragen — het gekozen concept uitwerken, klaar voor development'].map(s=>`<li class="rv">${s}</li>`).join('')}</ol></section>
<section class="sec" style="padding-top:0"><div class="skills">
 <div class="rv"><h2 class="h3">Vaardigheden</h2><ul>${['Workshops & facilitatie','Begeleiden van besluitvorming','AI-prototyping','Ontwerpen van AI-producten','User research & validatie','UX & UI design','Design systems','Customer journeys','Webtoegankelijkheid'].map(s=>`<li>${s}</li>`).join('')}</ul></div>
 <div class="rv d2"><h2 class="h3">Tools</h2><ul>${['Figma','AI-tools voor prototyping','Sketch & Adobe'].map(s=>`<li>${s}</li>`).join('')}</ul></div>
 <div class="rv d3"><h2 class="h3">Sectoren & domeinen</h2><ul>${['Energie','Finance','Verzekeringen','Zorg','E-commerce','Retail'].map(s=>`<li>${s}</li>`).join('')}</ul></div>
</div></section>
<section class="marq" aria-label="Opdrachtgevers"><div class="tr">${marq()}</div></section>${closer()}`,

contact:()=>`
<section class="cgrid">
 <div><h1 class="h1">${L(['Laten we iets','bouwen dat','<span class="grad">werkt</span>.'])}</h1>
 <p class="lead rv d2" style="color:var(--ink2);font-size:16px;max-width:30em;margin-top:28px">Een vaag idee, een team dat vastzit of een AI-functie die vertrouwen moet winnen? Plan een vrijblijvend gesprek. Binnen een paar weken heb je iets tastbaars om te testen.</p>
 <div class="rv d3" style="display:flex;flex-direction:column;gap:12px;margin-top:36px;font-size:15px">
  <a class="ulink" style="align-self:flex-start" href="mailto:info@demerkenstudio.nl">E-mail — info@demerkenstudio.nl</a>
  <a class="ulink" style="align-self:flex-start"${ext(LI)}>LinkedIn — linkedin.com/in/brampeulers ↗</a>
  <a class="ulink" style="align-self:flex-start"${ext(DR)}>Dribbble — dribbble.com/brampeulers ↗</a>
 </div></div>
 <form class="form rv d2" id="form" novalidate>
  <input type="text" name="_honey" id="f-h" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">
  <label><span class="label">Naam</span><input name="n" id="f-n" required placeholder="Je naam" autocomplete="name"></label>
  <label><span class="label">E-mail</span><input name="e" id="f-e" type="email" required placeholder="jij@bedrijf.nl" autocomplete="email"></label>
  <label class="full"><span class="label">Onderwerp</span><select id="f-s"><option>Van idee naar getest prototype</option><option>Workshop of facilitatie</option><option>AI-product of AI-functie ontwerpen</option><option>Product design (UX & UI)</option><option>Iets anders</option></select></label>
  <label class="full"><span class="label">Bericht</span><textarea id="f-m" required placeholder="Vertel kort over het project, de planning of je vraag."></textarea></label>
  <div class="full"><button class="btn" type="submit" data-c="link">Verstuur bericht</button></div>
  <p class="note" id="note" role="status"></p>
 </form>
</section>
<footer class="ftr"><div class="soc"><a${ext(LI)}>LinkedIn</a><a${ext(DR)}>Dribbble</a></div></footer>`,

case:(c)=>{const i=CD.indexOf(c),n=CD[(i+1)%CD.length];
 const R=k=>{const d=DIMS[k]||[4,3];return (d[0]/d[1]).toFixed(4)};
 const im=(k,cls='')=>`<figure class="cimg ${cls}${(R(k)>=.85&&R(k)<=1.45)?' sq':''} rv" style="--r:${R(k)}"><div class="media ok"><img src="/media/${k}.webp" alt="${c.client} — ${c.title}" loading="lazy" decoding="async" data-z></div></figure>`;
 const B=c.blocks.map((b,bi)=>{
  if(b[0]==='t') return `<section class="ctext w${b[2]}"><div class="prose cx rv">${b[1]}</div></section>`;
  if(b[0]==='q') return `<section class="ctext w1"><blockquote class="cq rv"><p>${b[1]}</p><cite>${b[2]}</cite></blockquote></section>`;
  if(b[0]==='v') return `<section class="cmedia"><figure class="cvid rv"><video src="/media/${b[1]}.mp4" autoplay muted loop playsinline preload="metadata"></video>${b[2]?`<figcaption>${b[2]}</figcaption>`:''}</figure></section>`;
  if(b[0]==='c') return `<section class="cmedia"><div class="ccards">${b[1].map((x,k)=>`<div class="ccard rv d${k+1}">${im(x[0])}<h3 class="h3">${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div></section>`;
  if(b[0]==='s') return `<section class="cmedia"><div class="slider rv"><div class="strack" tabindex="0" aria-label="Beelden ${c.client}">${b[1].map(k=>`<div class="slide" style="--r:${R(k)}"><img src="/media/${k}.webp" alt="${c.client} — ${c.title}" loading="lazy" decoding="async" data-z></div>`).join('')}</div><div class="snav"><span class="label"><b class="sn">1</b> / ${b[1].length}</span><button class="sp" aria-label="Vorige">←</button><button class="sx" aria-label="Volgende">→</button></div></div></section>`;
  if(b[0]==='i'){ if(b[2]===1&&b[1].length===1) return `<section class="cmedia">${im(b[1][0],'full')}</section>`;
   return `<section class="cmedia"><div class="cgrid c${b[2]}">${b[1].map(k=>im(k)).join('')}</div></section>`; }
  return '';}).join('');
 return `
<section class="ph"><a class="ulink rv" href="#portfolio">← Alle projecten</a>
 <h1 class="h1" style="margin-top:28px">${L([c.client+' —',`<span class="grad">${c.title}</span>`])}</h1>
 <div class="cmeta"><div class="rv"><span class="label">Klant</span>${c.client}</div><div class="rv d1"><span class="label">Rol</span>${c.role}</div><div class="rv d2"><span class="label">Periode</span>${c.period}</div><div class="rv d3"><span class="label">Type</span>${CAT[c.cat]||''}</div></div>
 <p class="cintro serif rv d2">${c.intro}</p></section>
<div class="case">${B}</div>
<a class="next" href="#case-${n.slug}" data-c="view"><span class="label">Volgende case</span><span class="big nbig">${n.client} — ${n.title} <em>→</em></span></a>${closer(true)}`}
};

return {CD,CASES,HOMECASES,HERO,PF,CAT,SVC,QUOTES,ARTS,V};
},
en:()=>{
const CD=window.CASEDATA_EN||window.CASEDATA||[];
const FEAT=[['essent','Energy insight and payment processes made clear in the Essent environment: live meter data, solar panels and payouts.',['UX design','Prototyping','User research']],
 ['achmea','One generic claims flow for Centraal Beheer, Interpolis and FBTO — on the web and in the native apps.',['Multi-brand','Design system','App & web']],
 ['eneco-app','New app products for Eneco and Oxxio, from dynamic pricing to the "app of the future".',['App design','Multi-brand','UX lab']],
 ['ockto-ds','One central Figma library for all Ockto designs: white-label, iOS, Android and dark mode.',['Design system','Figma','iOS & Android']]];
const CASES=FEAT.map(([slug,short,tags])=>{const c=CD.find(x=>x.slug===slug)||{};return {slug,client:c.client,title:c.title,year:c.period,img:c.thumb,short,tags}}).filter(c=>c.client);
const HOMECASES=[...CASES,...CD.filter(c=>!CASES.some(x=>x.slug===c.slug)).map(c=>({slug:c.slug,client:c.client,title:c.title,year:c.period,img:c.thumb,short:c.intro.replace(/<[^>]+>/g,'').replace(/&amp;/g,'&'),tags:[]}))];
const HERO=[['2310-tussenstand-dashboard-3','eneco-app','Eneco — App team'],['2307-sns-large','sns','SNS — Redesign'],['2306-screens','unive','Univé — Digital products'],['2210-triodos-3','triodos','Triodos — Mortgage journey'],['2310-oxxio','eneco-app','Oxxio — Dynamic pricing app']];
const PF=[...CD.map(c=>[c.thumb,c.client,c.title,c.cat,'case:'+c.slug]),
 ['2402-knab','Knab','App concept','apps',''],
 ['2402-rabobank-intermediair-portal-1','Rabobank','Intermediary portal','portal','']];
const CAT={all:'All',apps:'Apps',web:'Websites',portal:'Portals & dashboards',ds:'Design systems',brand:'Branding'};

const SVC=[['Product design','End-to-end UX and UI for apps, websites and portals: from user flows and wireframes to development-ready screens, built on a scalable design system and tested with real users.'],
 ['UX design','User research, customer needs and interaction design. I make complex processes understandable and accessible, so users reach their goal without having to think.'],
 ['Service design','I look beyond the screen: the entire customer journey across channels, including the processes and systems behind it. So app, website, customer service and back office fit together.'],
 ['From idea to prototype','From a vague idea to a clickable prototype tested with real users, in a matter of weeks. With AI I make several directions tangible at high speed.'],
 ['Facilitation & AI products','I guide teams and decision-makers through workshops towards shared decisions, and help design AI features that users understand, trust and can steer.'],
 ['Sectors & domains','Energy is my home base: usage insight, dynamic pricing, solar panels and payment processes. Plus experience in finance, insurance, healthcare, e-commerce and retail.']];

const QUOTES=[['Bram is strong at translating our requirements into mobile designs and has a good eye for our product and vision.','Ockto','Client'],
 ['Bram thinks along really well and comes up with ideas. The aftercare is excellent too. In other words: highly recommended!','Huygens & Groenevelt','Financial advice'],
 ['Bram listens carefully to your wishes and comes up with a clear plan. We are very happy with the result.','E3DV','Client']];


const ARTS=[['1512-fonts-1','UX, UI or visual design: what are the differences?','','The terms are often used interchangeably. A clear explanation of three different disciplines.',''],
 ['2208-design-system-ockto-2x','The benefits of a design system','','How a design system helps organisations keep their digital products consistent.',''],
 ['1607-brandguid-melrose-2','Why does a consistent brand identity matter?','','Recognisability builds trust. Why consistency pays off for every brand.',''],
 ['2203-merkenstudio','Smart navigation for higher conversion','','A clear navigation structure helps visitors find what they are looking for — and increases conversion.',''],
 ['1612-brainstorm2','How do you map a customer journey?','','A tutorial for making your customer\'s journey visible before, during and after the purchase.',''],
 ['1608-persona','How do you develop a persona?','','How to put the customer truly at the centre of your project, with a persona as the starting point.','']];


const closer=(cs)=>`<section class="closer"><p class="label rv">Let’s work together</p><a class="big" href="#contact" data-c="link">Schedule an intro call <em>→</em></a></section>
<footer class="ftr"><div class="soc"><a${ext(LI)}>LinkedIn</a><a${ext(DR)}>Dribbble</a></div></footer>`;

const card=(c,i)=>`<a class="card rv ${i%2?'d2':''}" href="#case-${c.slug}" data-c="view">${media(c.img,'r45',true,c.client+' — '+c.title)}<div class="meta"><b>${c.client} — ${c.title}</b><span class="mute">${c.year}</span></div><p>${c.short}</p><div class="tags">${c.tags.map(t=>`<span>${t}</span>`).join('')}</div></a>`;

const V={
home:()=>`
<section class="hero">
  <h1 class="h1 split-in">${L(['From vague idea to','<span class="grad">tested prototype</span>,','with AI and real users.'])}</h1>
  <div class="facts">
    <div class="rv d1"><span class="label">Role</span>Product designer, director and fast builder</div>
    <div class="rv d2"><span class="label">Approach</span>Facilitation + AI prototyping</div>
    <div class="rv d3"><span class="label">Sectors</span>Energy, finance, insurance, healthcare, e-commerce & retail</div>
    <div class="rv d4"><span class="label">Experience</span>10+ years of product design</div>
    <a class="go rv d4" href="#portfolio" data-c="link"><i>↘</i>View my work</a>
  </div>
  <div class="pic rv d2">${media('2408-brampeulers-portret','r45 pf',true,'Portrait of Bram Peulers').replace('loading="lazy"','loading="eager" fetchpriority="high"')}</div>
</section>
<section class="grow"><div class="media ok gcar" id="grow" aria-roledescription="carousel" aria-label="Featured work"><div class="gstack">${HERO.map((h,i)=>`<a class="gs${i?'':' on'}" href="#case-${h[1]}" tabindex="${i?-1:0}" data-c="view"><img src="/media/${h[0]}.webp" alt="${h[2]}" ${i?'loading="lazy"':'fetchpriority="high"'} decoding="async"></a>`).join('')}</div>
<div class="gbar"><span class="gcap" id="gcap">${HERO[0][2]}</span></div></div><div class="snav gnav"><span class="label"><b class="sn" id="gn">1</b> / ${HERO.length}</span><button class="sp" id="gp" aria-label="Previous project">←</button><button class="sx" id="gx" aria-label="Next project">→</button></div></section>
<section class="sec">
  <div class="head"><h2 class="h2">${L(['Selected work'])}</h2><a class="ulink rv" href="#portfolio">All cases →</a></div>
  <div class="slider wsl rv"><div class="strack" tabindex="0" aria-label="Selected cases">${HOMECASES.map((c,i)=>card(c,i).replace('class="card rv','class="card wcard')).join('')}</div><div class="snav"><span class="label"><b class="sn">1</b> / ${HOMECASES.length}</span><button class="sp" aria-label="Previous case">←</button><button class="sx" aria-label="Next case">→</button></div></div>
</section>
<section class="marq" aria-label="Clients"><div class="tr">${marq()}</div></section>
<section class="sec">
  <h2 class="h2 center" style="margin-bottom:clamp(40px,5vw,72px)">${L(['What I do'])}</h2>
  <div class="svc">${SVC.map((s,i)=>`<div class="rv d${i%3+1}"><span class="label">0${i+1}</span><h3 class="h3">${s[0]}</h3><p>${s[1]}</p></div>`).join('')}</div>
  <div class="cta rv"><p class="h3" style="margin:0">A vague idea you want tested fast? <span class="grad">Let’s talk.</span></p><a class="btn" href="#contact" data-c="link">Get in touch</a></div>
</section>
<section class="sec">
  <h2 class="h2" style="margin-bottom:56px">${L(['Kind words'])}</h2>
  <div class="quote rv"><p class="qt serif" id="qt"></p><div><div class="qa" id="qa"></div><div class="qnav"><button id="qp" aria-label="Previous">←</button><button id="qn" aria-label="Next">→</button></div><div class="qdots" id="qd">${QUOTES.map(()=>'<i></i>').join('')}</div></div></div>
</section>
${closer()}`,

portfolio:()=>{const cnt=k=>k==='all'?PF.length:PF.filter(p=>p[3]===k).length;return `
<section class="ph"><h1 class="h1">${L(['Portfolio: explore','my <span class="grad">work</span>.'])}</h1>
<p class="lead rv d2">Apps, websites, portals and design systems for clients including Essent, Achmea, Eneco, SNS, ASN Bank, Triodos and VGZ. Click a project to read the full case.</p></section>
<section class="sec" style="padding-top:0">
 <div class="filters rv" role="tablist">${Object.keys(CAT).map(k=>`<button data-f="${k}" class="${k==='all'?'on':''}">${CAT[k]}<sup>${cnt(k)}</sup></button>`).join('')}</div>
 <div class="pgrid">${PF.map((p,i)=>{const inner=`${media(p[0],'r11',false,p[1]+' — '+p[2])}<span class="meta"><b>${p[1]}</b><span>${p[2]}</span></span>`;return p[4]?`<a class="pitem rv d${i%3+1}" href="#case-${p[4].slice(5)}" data-cat="${p[3]}" data-c="view">${inner}</a>`:`<button class="pitem rv d${i%3+1}" data-i="${i}" data-cat="${p[3]}" data-c="view">${inner}</button>`}).join('')}</div>
</section>
<div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Project">
 <button class="btn ghost x" id="lbx">Close ✕</button>
 <div class="media r11 ok" id="lbm"><img alt=""></div>
 <div class="txt"><span class="label" id="lbc"></span><h2 class="h2" id="lbt" style="margin:12px 0 20px"></h2><p id="lbd"></p><a class="btn" id="lbl" data-c="link">View project</a><div class="nx"><button class="btn ghost" id="lbp">← Previous</button><button class="btn ghost" id="lbn">Next →</button></div></div>
</div>${closer()}`},

artikelen:()=>`
<section class="ph"><h1 class="h1">${L(['Articles on UX,','design systems and <span class="grad">brands</span>.'])}</h1>
<p class="lead rv d2">What I learn in practice about user experience, design systems and brand identity, written up for anyone who wants to put it to work.</p></section>
<section class="sec" style="padding-top:0">
<div class="alist">${ARTS.map(a=>`<div class="rv">${media(a[0],'r43',false,'')}<span><h3>${a[1]}</h3><p>${a[3]}</p></span><span></span></div>`).join('')}</div></section>${closer()}`,

about:()=>`
<section class="ph"><h1 class="h1">${L(['More director than maker.','I use AI to make ideas','tangible <span class="grad">at speed</span>.'])}</h1></section>
<section class="wrap split">
 <div class="prose rv"><p>I’m Bram Peulers, freelance product designer and owner of De Merkenstudio. After more than ten years of designing apps, websites and digital environments, I increasingly see myself as a director rather than a maker.</p>
 <p>My strength lies in the combination. I guide teams and decision-makers through the process, from the first brainstorm to the final decision, and at the same time use AI to make whatever is on the table tangible at speed. No waiting weeks for a design, but a prototype to react to within the same week. That combination of facilitator and fast builder is still fairly rare.</p>
 <p>Over the years I have worked in sectors where a lot is at stake and processes are complex: energy, finance, insurance, healthcare, e-commerce, retail and government. I know how regulated organisations work, how to design around existing systems and what it takes to get business, IT and customer aligned. That domain knowledge means I get up to speed quickly and ask the right questions, in every new organisation.</p>
 <p>I’m also going deeper into designing AI products themselves. How do you design trust, errors and control into AI features? There is still little expertise there, and that is exactly where I want to make a difference.</p>
 <a class="go" href="#contact" data-c="link"><i>↘</i>Let’s get acquainted</a></div>
 <div class="rv d2">${media('2408-brampeulers-portret','r45 pf',true,'Portrait of Bram Peulers')}</div>
</section>
<section class="sec"><div class="media r169 rv">${'<div class="par"><img src="/media/2303-dgrop-20230222-0026.webp" alt="Bram Peulers during a design session" loading="lazy"></div>'}</div></section>
<section class="sec long"><div class="split">
 <div><h2 class="h2">${L(['Also for','<span class="grad">long-term</span> engagements.'])}</h2></div>
 <div class="prose rv d1"><p>Besides short sprints, you can also book me for a longer period, for example a year. I then work within one or more teams, as a fixed part of the organisation, and add value from the very first week.</p>
 <p>I’m a doer and a hard worker. I get to know an organisation quickly, see where things get stuck and turn that into concrete improvements. I’m smart, ambitious and never settle for "good enough": I always aim for the highest possible design quality.</p>
 <ul class="lfacts">
  <li><span class="label">Duration</span>From a few weeks to a year or longer</li>
  <li><span class="label">Setup</span>In one or several teams at once</li>
  <li><span class="label">Value</span>Up to speed fast, immediate impact</li>
 </ul>
 <a class="go" href="#contact" data-c="link"><i>↘</i>Discuss a longer engagement</a></div>
</div></section>
<section class="sec" style="padding-top:0"><h2 class="h2" style="margin-bottom:20px">${L(['From vague idea to tested prototype'])}</h2><p class="mute rv" style="margin:0 0 40px">An indicative track of a few weeks. Every assignment is different; the rhythm stays the same.</p>
 <ol class="steps">${['Week 1 · Getting sharp together — workshop with team and decision-makers: what is the problem, for whom, and when is it a success?','Week 1–2 · Making it tangible fast — using AI to build several directions as a clickable prototype','Week 2–3 · Testing and choosing — validating with real users and choosing a direction together with decision-makers','Week 3–4 · Capturing and handing over — working out the chosen concept, ready for development'].map(s=>`<li class="rv">${s}</li>`).join('')}</ol></section>
<section class="sec" style="padding-top:0"><div class="skills">
 <div class="rv"><h2 class="h3">Skills</h2><ul>${['Workshops & facilitation','Guiding decision-making','AI prototyping','Designing AI products','User research & validation','UX & UI design','Design systems','Customer journeys','Web accessibility'].map(s=>`<li>${s}</li>`).join('')}</ul></div>
 <div class="rv d2"><h2 class="h3">Tools</h2><ul>${['Figma','AI tools for prototyping','Sketch & Adobe'].map(s=>`<li>${s}</li>`).join('')}</ul></div>
 <div class="rv d3"><h2 class="h3">Sectors & domains</h2><ul>${['Energy','Finance','Insurance','Healthcare','E-commerce','Retail'].map(s=>`<li>${s}</li>`).join('')}</ul></div>
</div></section>
<section class="marq" aria-label="Clients"><div class="tr">${marq()}</div></section>${closer()}`,

contact:()=>`
<section class="cgrid">
 <div><h1 class="h1">${L(['Let’s build','something that','<span class="grad">works</span>.'])}</h1>
 <p class="lead rv d2" style="color:var(--ink2);font-size:16px;max-width:30em;margin-top:28px">A vague idea, a team that’s stuck or an AI feature that needs to earn trust? Schedule a no-obligation call. Within a few weeks you’ll have something tangible to test.</p>
 <div class="rv d3" style="display:flex;flex-direction:column;gap:12px;margin-top:36px;font-size:15px">
  <a class="ulink" style="align-self:flex-start" href="mailto:info@demerkenstudio.nl">E-mail — info@demerkenstudio.nl</a>
  <a class="ulink" style="align-self:flex-start"${ext(LI)}>LinkedIn — linkedin.com/in/brampeulers ↗</a>
  <a class="ulink" style="align-self:flex-start"${ext(DR)}>Dribbble — dribbble.com/brampeulers ↗</a>
 </div></div>
 <form class="form rv d2" id="form" novalidate>
  <input type="text" name="_honey" id="f-h" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">
  <label><span class="label">Name</span><input name="n" id="f-n" required placeholder="Your name" autocomplete="name"></label>
  <label><span class="label">E-mail</span><input name="e" id="f-e" type="email" required placeholder="you@company.com" autocomplete="email"></label>
  <label class="full"><span class="label">Subject</span><select id="f-s"><option>From idea to tested prototype</option><option>Workshop or facilitation</option><option>Designing an AI product or feature</option><option>Product design (UX & UI)</option><option>Something else</option></select></label>
  <label class="full"><span class="label">Message</span><textarea id="f-m" required placeholder="Tell me briefly about the project, the timeline or your question."></textarea></label>
  <div class="full"><button class="btn" type="submit" data-c="link">Send message</button></div>
  <p class="note" id="note" role="status"></p>
 </form>
</section>
<footer class="ftr"><div class="soc"><a${ext(LI)}>LinkedIn</a><a${ext(DR)}>Dribbble</a></div></footer>`,

case:(c)=>{const i=CD.indexOf(c),n=CD[(i+1)%CD.length];
 const R=k=>{const d=DIMS[k]||[4,3];return (d[0]/d[1]).toFixed(4)};
 const im=(k,cls='')=>`<figure class="cimg ${cls}${(R(k)>=.85&&R(k)<=1.45)?' sq':''} rv" style="--r:${R(k)}"><div class="media ok"><img src="/media/${k}.webp" alt="${c.client} — ${c.title}" loading="lazy" decoding="async" data-z></div></figure>`;
 const B=c.blocks.map((b,bi)=>{
  if(b[0]==='t') return `<section class="ctext w${b[2]}"><div class="prose cx rv">${b[1]}</div></section>`;
  if(b[0]==='q') return `<section class="ctext w1"><blockquote class="cq rv"><p>${b[1]}</p><cite>${b[2]}</cite></blockquote></section>`;
  if(b[0]==='v') return `<section class="cmedia"><figure class="cvid rv"><video src="/media/${b[1]}.mp4" autoplay muted loop playsinline preload="metadata"></video>${b[2]?`<figcaption>${b[2]}</figcaption>`:''}</figure></section>`;
  if(b[0]==='c') return `<section class="cmedia"><div class="ccards">${b[1].map((x,k)=>`<div class="ccard rv d${k+1}">${im(x[0])}<h3 class="h3">${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div></section>`;
  if(b[0]==='s') return `<section class="cmedia"><div class="slider rv"><div class="strack" tabindex="0" aria-label="Images ${c.client}">${b[1].map(k=>`<div class="slide" style="--r:${R(k)}"><img src="/media/${k}.webp" alt="${c.client} — ${c.title}" loading="lazy" decoding="async" data-z></div>`).join('')}</div><div class="snav"><span class="label"><b class="sn">1</b> / ${b[1].length}</span><button class="sp" aria-label="Vorige">←</button><button class="sx" aria-label="Volgende">→</button></div></div></section>`;
  if(b[0]==='i'){ if(b[2]===1&&b[1].length===1) return `<section class="cmedia">${im(b[1][0],'full')}</section>`;
   return `<section class="cmedia"><div class="cgrid c${b[2]}">${b[1].map(k=>im(k)).join('')}</div></section>`; }
  return '';}).join('');
 return `
<section class="ph"><a class="ulink rv" href="#portfolio">← All projects</a>
 <h1 class="h1" style="margin-top:28px">${L([c.client+' —',`<span class="grad">${c.title}</span>`])}</h1>
 <div class="cmeta"><div class="rv"><span class="label">Client</span>${c.client}</div><div class="rv d1"><span class="label">Role</span>${c.role}</div><div class="rv d2"><span class="label">Period</span>${c.period}</div><div class="rv d3"><span class="label">Type</span>${CAT[c.cat]||''}</div></div>
 <p class="cintro serif rv d2">${c.intro}</p></section>
<div class="case">${B}</div>
<a class="next" href="#case-${n.slug}" data-c="view"><span class="label">Next case</span><span class="big nbig">${n.client} — ${n.title} <em>→</em></span></a>${closer(true)}`}
};

return {CD,CASES,HOMECASES,HERO,PF,CAT,SVC,QUOTES,ARTS,V};
}
};
let CD,CASES,HOMECASES,HERO,PF,CAT,SVC,QUOTES,ARTS,V,LANG=null;

/* ---------- language ---------- */
const STR={
 nl:{nav_portfolio:'Portfolio',nav_art:'Artikelen',nav_about:'Over mij',sub:'Product designer & facilitator',mtag:'Facilitator · AI-prototyping · Product design',close:'Sluiten ✕',
  view:'Bekijk',zoom:'Vergroot',lbCase:'Dit project is uitgewerkt als volledige case, met uitdaging, aanpak en resultaat.',lbArch:n=>'Een ontwerp voor '+n+' uit mijn archief.',lbRead:'Lees de case',
  fErr:'Vul je naam, een geldig e-mailadres en je bericht in.',fBusy:'Bezig met versturen…',fOk:n=>'Bedankt, '+n+'! Je bericht is verstuurd. Ik neem zo snel mogelijk contact met je op.',fFail:'Versturen lukte niet. Mail je bericht direct naar <a class="ulink" href="mailto:'+MAIL+'">'+MAIL+'</a>.',fSubj:'Nieuw bericht via brampeulers.com',
  menu:'Menu openen',titles:{home:'Product designer & facilitator',portfolio:'Portfolio',artikelen:'Artikelen',about:'Over mij',contact:'Contact'}},
 en:{nav_portfolio:'Portfolio',nav_art:'Articles',nav_about:'About',sub:'Product designer & facilitator',mtag:'Facilitator · AI prototyping · Product design',close:'Close ✕',
  view:'View',zoom:'Zoom',lbCase:'This project is written up as a full case, with challenge, approach and result.',lbArch:n=>'A design for '+n+' from my archive.',lbRead:'Read the case',
  fErr:'Please enter your name, a valid email address and your message.',fBusy:'Sending…',fOk:n=>'Thanks, '+n+'! Your message has been sent. I’ll get back to you as soon as possible.',fFail:'Sending failed. Please email your message directly to <a class="ulink" href="mailto:'+MAIL+'">'+MAIL+'</a>.',fSubj:'New message via brampeulers.com (EN)',
  menu:'Open menu',titles:{home:'Product designer & facilitator',portfolio:'Portfolio',artikelen:'Articles',about:'About',contact:'Contact'}}
};
let S=STR.nl;
const SITE='https://www.brampeulers.com';
const SEG={nl:{home:'',portfolio:'portfolio',artikelen:'artikelen',about:'over-mij',contact:'contact'},en:{home:'',portfolio:'portfolio',artikelen:'articles',about:'about',contact:'contact'}};
const pathOf=(l,h)=>{ const p=h.startsWith('case-')?'cases/'+h.slice(5):(SEG[l][h]??''); return '/'+(l==='en'?'en/':'')+(p?p+'/':''); };
const hl=r=>pathOf(LANG,r);
const fixLinks=root=>{ root.querySelectorAll('a[href^="#"]').forEach(a=>{const h=a.getAttribute('href'); if(h.length>1) a.setAttribute('href',hl(h.slice(1)))}); };
const META={
 nl:{home:'Bram Peulers is freelance product designer en facilitator. Van vaag idee naar getest prototype, met AI en echte gebruikers. UX, service design en design systems.',
  portfolio:'Portfolio van Bram Peulers: apps, websites, portalen en design systems voor Essent, Achmea, Eneco, SNS, ASN Bank, Triodos, VGZ en meer.',
  artikelen:'Artikelen van Bram Peulers over UX, UI, design systems, customer journeys, persona’s en merkidentiteit.',
  about:'Over Bram Peulers: product designer en facilitator met ruim 10 jaar ervaring in energie, finance, verzekeringen, zorg, e-commerce en retail. Ook voor lange trajecten.',
  contact:'Neem contact op met Bram Peulers voor product design, UX, service design, AI-prototyping of het faciliteren van workshops.'},
 en:{home:'Bram Peulers is a freelance product designer and facilitator. From vague idea to tested prototype, with AI and real users. UX, service design and design systems.',
  portfolio:'Portfolio of Bram Peulers: apps, websites, portals and design systems for Essent, Achmea, Eneco, SNS, ASN Bank, Triodos, VGZ and more.',
  artikelen:'Articles by Bram Peulers on UX, UI, design systems, customer journeys, personas and brand identity.',
  about:'About Bram Peulers: product designer and facilitator with 10+ years of experience in energy, finance, insurance, healthcare, e-commerce and retail. Also for long-term engagements.',
  contact:'Get in touch with Bram Peulers for product design, UX, service design, AI prototyping or workshop facilitation.'}
};
const clip=t=>{ t=t.replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim(); return t.length>158?t.slice(0,155).replace(/\s+\S*$/,'')+'…':t; };
const setTag=(sel,make)=>{ let el=document.head.querySelector(sel); if(!el){ el=make(); document.head.appendChild(el); } return el; };
const meta=(attr,key,val)=>setTag(`meta[${attr}="${key}"]`,()=>{const m=document.createElement('meta');m.setAttribute(attr,key);return m}).setAttribute('content',val);
const link=(rel,hreflang,href)=>setTag(`link[rel="${rel}"]`+(hreflang?`[hreflang="${hreflang}"]`:''),()=>{const m=document.createElement('link');m.rel=rel;if(hreflang)m.hreflang=hreflang;return m}).href=href;
function setHead(r,h){
  const url=SITE+pathOf(LANG,h), img=SITE+'/og-image.jpg';
  document.title=r.full; meta('name','description',r.desc);
  link('canonical',null,url); link('alternate','nl',SITE+pathOf('nl',h)); link('alternate','en',SITE+pathOf('en',h)); link('alternate','x-default',SITE+pathOf('nl',h));
  meta('property','og:title',r.full); meta('property','og:description',r.desc); meta('property','og:url',url); meta('property','og:type',r.c?'article':'website');
  meta('property','og:image',r.c?SITE+'/media/'+r.c.thumb+'.webp':img); meta('property','og:locale',LANG==='en'?'en_GB':'nl_NL'); meta('property','og:site_name','Bram Peulers');
  meta('name','twitter:card','summary_large_image');
  const ld=setTag('script#ld-page',()=>{const sc=document.createElement('script');sc.type='application/ld+json';sc.id='ld-page';return sc});
  const crumbs=[{'@type':'ListItem',position:1,name:'Home',item:SITE+pathOf(LANG,'home')}];
  if(h!=='home') crumbs.push({'@type':'ListItem',position:2,name:r.c?'Portfolio':r.title,item:SITE+pathOf(LANG,r.c?'portfolio':h)});
  if(r.c) crumbs.push({'@type':'ListItem',position:3,name:r.c.client+' — '+r.c.title,item:url});
  const g=[{'@type':'WebPage','@id':url,url,name:r.full,description:r.desc,inLanguage:LANG,isPartOf:{'@id':SITE+'/#website'},about:{'@id':SITE+'/#person'}},{'@type':'BreadcrumbList',itemListElement:crumbs}];
  if(r.c) g.push({'@type':'CreativeWork',name:r.c.client+' — '+r.c.title,description:r.desc,url,image:SITE+'/media/'+r.c.thumb+'.webp',creator:{'@id':SITE+'/#person'},inLanguage:LANG,temporalCoverage:r.c.period,keywords:[r.c.role,CAT[r.c.cat],r.c.client].join(', ')});
  ld.textContent=JSON.stringify({'@context':'https://schema.org','@graph':g});
}
function setLang(l){
  if(l===LANG) return; LANG=l; S=STR[l];
  ({CD,CASES,HOMECASES,HERO,PF,CAT,SVC,QUOTES,ARTS,V}=BUNDLE[l]());
  document.documentElement.lang=l;
  document.querySelectorAll('[data-t]').forEach(e=>{ e.textContent=S[e.dataset.t]; });
  document.querySelectorAll('[data-h]').forEach(a=>a.setAttribute('href',hl(a.dataset.h)));
  document.querySelectorAll('[data-l]').forEach(a=>a.classList.toggle('on',a.dataset.l===l));
  document.getElementById('burger').setAttribute('aria-label',S.menu);
  document.getElementById('zoom').setAttribute('aria-label',l==='en'?'Enlarged image':'Vergrote afbeelding');
}
const route=()=>{
  let parts=location.pathname.replace(/index\.html$/,'').split('/').filter(Boolean), l='nl';
  if(parts[0]==='en'){ l='en'; parts.shift(); }
  let h='home';
  if(parts[0]==='cases'&&parts[1]) h='case-'+parts[1];
  else if(parts[0]){ const k=Object.keys(SEG[l]).find(x=>SEG[l][x]===parts[0])||Object.keys(SEG.nl).find(x=>SEG.nl[x]===parts[0])||Object.keys(SEG.en).find(x=>SEG.en[x]===parts[0]); h=k||({work:'portfolio',personal:'artikelen'}[parts[0]])||'home'; }
  return {l,h};
};
(()=>{ const hs=location.hash.slice(1); if(!hs||hs.length<2) return; let l='nl',h=hs; if(h==='en'||h.startsWith('en-')){l='en';h=h.slice(3)||'home'} if(!/^(home|portfolio|artikelen|about|contact|work|personal|case-[\w-]+)$/.test(h)) return; h={work:'portfolio',personal:'artikelen'}[h]||h; history.replaceState(null,'',pathOf(l,h)); })();
const nav=(url)=>{ if(url!==location.pathname){ history.pushState(null,'',url); go(); } else { document.documentElement.classList.remove('menu-open'); } };
document.querySelectorAll('[data-l]').forEach(a=>a.addEventListener('click',e=>{ e.preventDefault(); nav(pathOf(a.dataset.l,route().h)); }));
document.addEventListener('click',e=>{ const a=e.target.closest('a[href^="/"]'); if(!a||a.target||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0) return; const u=a.getAttribute('href'); if(u.startsWith('/media/')) return; e.preventDefault(); nav(u); });
addEventListener('popstate',go);

/* ---------- state & helpers ---------- */
const app=document.getElementById('app'),hdr=document.getElementById('hdr'),cur=document.getElementById('cur'),curtain=document.getElementById('curtain');
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis=null;
try{ if(window.Lenis&&!RM){ lenis=new Lenis({lerp:.1,smoothWheel:true}); } }catch(e){lenis=null}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const toTop=()=>{ if(lenis) lenis.scrollTo(0,{immediate:true,force:true}); window.scrollTo(0,0); };

let io=null, pars=[], growEl=null, qTimer=null;
function initPage(){
  if(io) io.disconnect();
  app.querySelectorAll('.media img').forEach(im=>{ const m=im.closest('.media'); if(im.complete&&im.naturalWidth) m.classList.add('ok'); else { im.addEventListener('load',()=>m.classList.add('ok'),{once:true}); im.addEventListener('error',()=>m.classList.add('ok'),{once:true}); } });
  pars=[...app.querySelectorAll('.par')];
  growEl=document.getElementById('grow');
  quotes(); filters(); form(); clock(); sliders(); hero();
}
function startReveal(){
  if(io) io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{rootMargin:'0px 0px -8% 0px',threshold:.08});
  app.querySelectorAll('.rv,.h1,.h2').forEach(el=>io.observe(el));
}
function quotes(){
  clearInterval(qTimer);
  const qt=document.getElementById('qt'); if(!qt) return;
  const qa=document.getElementById('qa'),dots=[...document.querySelectorAll('#qd i')];let i=0;
  const set=(k,anim)=>{ i=(k+QUOTES.length)%QUOTES.length; const go=()=>{qt.textContent='“'+QUOTES[i][0]+'”';qa.innerHTML=`<b>${QUOTES[i][1]}</b>${QUOTES[i][2]}`;dots.forEach((d,j)=>d.classList.toggle('on',j===i));qt.classList.remove('swap')}; if(anim){qt.classList.add('swap');setTimeout(go,350)}else go(); };
  set(0,false);
  document.getElementById('qp').onclick=()=>{set(i-1,true);restart()};
  document.getElementById('qn').onclick=()=>{set(i+1,true);restart()};
  const restart=()=>{clearInterval(qTimer);qTimer=setInterval(()=>set(i+1,true),7000)}; restart();
}
let lbI=0;
function filters(){
  const f=app.querySelector('.filters'); if(!f) return;
  f.addEventListener('click',e=>{ const b=e.target.closest('button'); if(!b) return; f.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b)); const k=b.dataset.f;
    app.querySelectorAll('.pitem').forEach(p=>{ const show=k==='all'||p.dataset.cat===k; p.classList.toggle('out',!show); if(show){p.classList.remove('in');requestAnimationFrame(()=>requestAnimationFrame(()=>p.classList.add('in')))} });
    if(lenis) lenis.resize(); });
  const lb=document.getElementById('lb');
  const vis=()=>[...app.querySelectorAll('button.pitem:not(.out)')].map(p=>+p.dataset.i);
  const open=i=>{ lbI=i; const p=PF[i]; const im=document.querySelector('#lbm img'); im.src='/media/'+p[0]+'.webp'; im.alt=p[1]+' — '+p[2];
    document.getElementById('lbc').textContent=CAT[p[3]]; document.getElementById('lbt').textContent=p[1]+' — '+p[2];
    const isCase=p[4].startsWith('case:'); const l=document.getElementById('lbl');
    document.getElementById('lbd').textContent=isCase?S.lbCase:S.lbArch(p[1]);
    if(isCase){l.href=hl('case-'+p[4].slice(5));l.removeAttribute('target');l.textContent=S.lbRead;l.style.display=''}
    else l.style.display='none';
    lb.classList.add('open'); if(lenis) lenis.stop(); };
  const close=()=>{ lb.classList.remove('open'); if(lenis) lenis.start(); };
  app.querySelectorAll('button.pitem').forEach(p=>p.addEventListener('click',()=>open(+p.dataset.i)));
  const step=d=>{ const v=vis(); const k=v.indexOf(lbI); open(v[(k+d+v.length)%v.length]); };
  document.getElementById('lbx').onclick=close; document.getElementById('lbp').onclick=()=>step(-1); document.getElementById('lbn').onclick=()=>step(1);
  document.getElementById('lbl').addEventListener('click',close);
  lb.addEventListener('click',e=>{ if(e.target===lb) close(); });
  document.onkeydown=e=>{ if(!lb.classList.contains('open')) return; if(e.key==='Escape') close(); if(e.key==='ArrowRight') step(1); if(e.key==='ArrowLeft') step(-1); };
}
let gTimer=null;
function hero(){
  clearTimeout(gTimer); const g=document.getElementById('grow'); if(!g||!g.classList.contains('gcar')) return;
  const sl=[...g.querySelectorAll('.gs')],cap=g.querySelector('#gcap'),gn=document.getElementById('gn'); let i=0;
  const set=k=>{ i=(k+sl.length)%sl.length; sl.forEach((s,j)=>{s.classList.toggle('on',j===i);s.tabIndex=j===i?0:-1}); cap.textContent=HERO[i][2]; gn.textContent=i+1; const nx=sl[(i+1)%sl.length].querySelector('img'); if(nx.loading==='lazy') nx.loading='eager'; };
  const tick=()=>{ clearTimeout(gTimer); if(RM) return; gTimer=setTimeout(()=>{ if(!g.isConnected) return; if(!g.classList.contains('paused')) set(i+1); tick(); },5000); };
  document.getElementById('gp').onclick=()=>{set(i-1);tick()}; document.getElementById('gx').onclick=()=>{set(i+1);tick()};
  g.addEventListener('mouseenter',()=>g.classList.add('paused')); g.addEventListener('mouseleave',()=>{g.classList.remove('paused');tick()});
  let sx=null; g.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true}); g.addEventListener('touchend',e=>{ if(sx===null) return; const dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40){set(i+(dx<0?1:-1));tick()} sx=null; });
  tick();
}
function sliders(){
  app.querySelectorAll('.slider').forEach(sl=>{ const tr=sl.querySelector('.strack'),sn=sl.querySelector('.sn'),slides=[...tr.children];
    const cur=()=>{let b=0,bd=1e9;slides.forEach((s,k)=>{const d=Math.abs(s.offsetLeft-tr.offsetLeft-tr.scrollLeft);if(d<bd){bd=d;b=k}});return b};
    const to=k=>{k=Math.max(0,Math.min(slides.length-1,k));tr.scrollTo({left:slides[k].offsetLeft-tr.offsetLeft,behavior:RM?'auto':'smooth'})};
    sl.querySelector('.sp').onclick=()=>to(cur()-1); sl.querySelector('.sx').onclick=()=>to(cur()+1);
    tr.addEventListener('scroll',()=>{sn.textContent=cur()+1},{passive:true});
    tr.addEventListener('keydown',e=>{ if(e.key==='ArrowRight'){e.preventDefault();to(cur()+1)} if(e.key==='ArrowLeft'){e.preventDefault();to(cur()-1)} });
  });
}
const zoom=document.getElementById('zoom');
document.addEventListener('click',e=>{ const im=e.target.closest('img[data-z]'); if(!im) return; zoom.querySelector('img').src=im.src; zoom.querySelector('img').alt=im.alt; zoom.classList.add('open'); zoom.scrollTop=0; if(lenis) lenis.stop(); });
const zclose=()=>{ zoom.classList.remove('open'); if(lenis) lenis.start(); };
zoom.addEventListener('click',zclose); addEventListener('keydown',e=>{ if(e.key==='Escape'&&zoom.classList.contains('open')) zclose(); });
function form(){
  const f=document.getElementById('form'); if(!f) return;
  f.addEventListener('submit',e=>{ e.preventDefault(); const note=document.getElementById('note');
    const n=document.getElementById('f-n').value.trim(),em=document.getElementById('f-e').value.trim(),m=document.getElementById('f-m').value.trim();
    if(!n||!/^\S+@\S+\.\S+$/.test(em)||!m){ note.textContent=S.fErr; return; }
    if(document.getElementById('f-h').value){ note.innerHTML=S.fOk(n.replace(/</g,'&lt;')); return; }
    const btn=f.querySelector('button[type=submit]'); btn.disabled=true; note.textContent=S.fBusy;
    const subj=document.getElementById('f-s').value;
    fetch('https://formsubmit.co/ajax/'+MAIL,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({naam:n,email:em,onderwerp:subj,bericht:m,taal:LANG,pagina:location.href,_replyto:em,_subject:S.fSubj+' — '+subj,_template:'table',_captcha:'false'})})
     .then(r=>r.ok?r.json():Promise.reject(r.status)).then(d=>{ if(d&&String(d.success)!=='false'){ note.innerHTML=S.fOk(n.replace(/</g,'&lt;')); f.reset(); } else throw 0; })
     .catch(()=>{ note.innerHTML=S.fFail; }).finally(()=>{ btn.disabled=false; }); });
}
function clock(){ const c=document.getElementById('clock'); if(!c) return; const t=()=>{ try{c.textContent=new Intl.DateTimeFormat('nl-NL',{hour:'2-digit',minute:'2-digit',timeZone:'Europe/Amsterdam'}).format(new Date())}catch(e){} }; t(); }
setInterval(clock,20000);

/* ---------- router + transitions ---------- */
function resolve(){
  const rt=route(); setLang(rt.l); const h=rt.h;
  if(h.startsWith('case-')){ const AL={eneco:'eneco-app',ockto:'ockto-ds'}; const sl=AL[h.slice(5)]||h.slice(5); const c=CD.find(x=>x.slug===sl); if(c) return {key:'portfolio',h:'case-'+c.slug,c,html:V.case(c),title:c.client+' — '+c.title,full:c.client+': '+c.title+' — Bram Peulers',desc:clip(c.intro)}; }
  const k=V[h]&&h!=='case'?h:'home';
  return {key:k,h:k,html:V[k](),title:S.titles[k],full:k==='home'?'Bram Peulers — '+S.titles.home:S.titles[k]+' — Bram Peulers',desc:META[LANG][k]};
}
function render(){
  const r=resolve(); app.innerHTML=r.html; fixLinks(app); setHead(r,r.h); window.__route=r.h; document.querySelectorAll('[data-l]').forEach(x=>x.setAttribute('href',pathOf(x.dataset.l,r.h)));
  document.querySelectorAll('.nav a').forEach(a=>a.classList.toggle('on',a.dataset.r===r.key));
  toTop(); initPage(); if(lenis) lenis.resize();
}
let busy=false;
async function go(){
  document.documentElement.classList.remove('menu-open');
  if(busy) return; busy=true;
  if(!RM){ curtain.classList.add('down'); curtain.classList.remove('up'); curtain.offsetHeight; curtain.classList.remove('down'); await sleep(950); }
  render();
  if(!RM){ await sleep(80); curtain.classList.add('up'); await sleep(350); }
  startReveal(); busy=false;
}
document.getElementById('burger').onclick=()=>document.documentElement.classList.toggle('menu-open');

/* ---------- start ---------- */
render();
requestAnimationFrame(()=>{ curtain.classList.add('up'); setTimeout(startReveal,120); });

/* ---------- cursor ---------- */
let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
document.addEventListener('mouseover',e=>{ const t=e.target.closest('[data-c],a,button,input,textarea,select,img[data-z]'); if(t&&t.matches('img[data-z]')){cur.classList.remove('link');cur.classList.add('view');cur.querySelector('span').textContent=S.zoom;return} cur.querySelector('span').textContent=S.view; cur.classList.remove('link','view'); if(!t) return; cur.classList.add(t.dataset.c==='view'?'view':'link'); });

/* ---------- stars ---------- */
const cv=document.getElementById('stars'),cx2=cv.getContext('2d');let stars=[],W=0,H=0,DPR=Math.min(2,devicePixelRatio||1);
function sizeStars(){ W=innerWidth;H=innerHeight;cv.width=W*DPR;cv.height=H*DPR;cx2.setTransform(DPR,0,0,DPR,0,0); stars=Array.from({length:Math.round(W*H/9000)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.1+.2,a:Math.random()*.5+.1,s:Math.random()*.02+.004,p:Math.random()*6.3,z:Math.random()*.6+.2})); }
sizeStars(); addEventListener('resize',sizeStars);

/* ---------- main loop ---------- */
let lastY=0;
function loop(t){
  if(lenis) lenis.raf(t);
  const y=lenis?lenis.scroll:scrollY;
  hdr.classList.toggle('solid',y>20);
  if(!document.documentElement.classList.contains('menu-open')) hdr.classList.toggle('hide',y>lastY+2&&y>200 ? true : (y<lastY-2?false:hdr.classList.contains('hide')));
  lastY=y;
  cx+=(mx-cx)*.18; cy+=(my-cy)*.18; cur.style.transform=`translate(${cx}px,${cy}px)`;
  if(!RM){
    const vh=innerHeight;
    for(const p of pars){ const r=p.parentElement.getBoundingClientRect(); if(r.bottom<-50||r.top>vh+50) continue; const k=(r.top+r.height/2-vh/2)/vh; p.style.transform=`translate3d(0,${Math.max(-9,Math.min(9,-k*12)).toFixed(2)}%,0)`; }
    if(growEl){ const r=growEl.getBoundingClientRect(); const k=Math.max(0,Math.min(1,1-(r.top-vh*.15)/(vh*.75))); growEl.style.transform=`scale(${(.86+.14*k).toFixed(4)})`; growEl.style.borderRadius=`${(28*(1-k)).toFixed(1)}px`; const gi=growEl.querySelector('.gstack'); if(gi){ const c=(r.top+r.height/2-vh/2)/vh; gi.style.transform=`translate3d(0,${Math.max(-11,Math.min(11,-c*16)).toFixed(2)}%,0)`; } }
  }
  cx2.clearRect(0,0,W,H); const ox=(mx/W-.5)*10, oy=(my/H-.5)*10;
  for(const s of stars){ s.p+=s.s; if(!RM){ s.y-=s.z*.05; if(s.y<-2) s.y=H+2; } const a=s.a*(.55+.45*Math.sin(s.p)); cx2.fillStyle=`rgba(70,62,150,${(a*.55).toFixed(3)})`; cx2.beginPath(); cx2.arc(s.x+ox*s.z,(s.y-y*.03*s.z%H+H)%H+oy*s.z,s.r,0,6.283); cx2.fill(); }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
}
