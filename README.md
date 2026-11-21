# For Every Path

**Átfogó weboldal-dokumentáció:** [SITE_MASTER.md](docs/SITE_MASTER.md) — márka, felhasználói utak, mind a 9 termék, HU/EN/DE/FR, „Hogy vagy?” 30/6, UX, dizájn, SEO/GEO/AEO/Schema, AI Trust, GDPR, bizalmas PDF-források, kódfájlok, GitHub CI, release és változtatási szabályok.

Independent creative product catalogue by Sajbán-Frőhner Alexandra; successor to NewVibe.

## 2026-11-21 — az eredeti kártyaoldal fotógalériájának és következő lépéseinek visszaállítása

A #24-es kiadás a kilenc termékből mind a négy nyelven részletes, forrásalapú (probléma → használható válasz → magyarázat → kiemelt adatok) termékoldalt hozott létre, a katalógus képaláírásának levágását pedig megoldotta. A jelen kiegészítés visszaemeli az **eredeti, 2026-11-21 előtti `Helyed van köztünk` oldal két további valódi termékfotóját** az összes HU/EN/DE/FR kártyaoldalra, lokalizált alt szövegekkel és képaláírásokkal. A források: `assets/helyed-van-koztunk-01.jpg`, `assets/helyed-van-koztunk-02.jpg`; a már meglévő hero `03.jpg` változatlan marad. Mivel az eredeti `.product-gallery` reszponzív stílus létezik a `styles.css` fájlban, nem kell új stylesheet-specifikusságot vagy cache-verziót hozzáadni.

Mind a 36 termékoldal tartalmi ismertetése után egy közös, lokalizált, valódi CTA-gomb vezet a meglévő e-mailes előrendelési blokk `#preorder` horgonyára; mellette a katalógusra vezető szöveges visszalépés. A CTA nem jelenti azt, hogy online fizetés, végleges ár vagy automatikus rendelésigazolás működik. Az új linksor célja, hogy a hosszú történet után a vásárló egyértelműen visszataláljon a következő lépéshez. A korábbi `fep-product-story`, `fep-story-path`, SVG motívumok, Alexandra portréja, 48 URL, négy nyelv és `catalog.css?v=11` változatlan.

A CI a 36 horgonyt és a négy valósfotó-galériát a `scripts/card-gallery-smoke.cjs` ellenőrzéssel védi. A GitHub Pages élesítése csak sikeres CI/Chromium/WebKit QA után zárható.
## Aktuális vizuális helyreállítás — 2026-11-21

A #16 kiadás után iPhone-képernyőképekkel jelzett **sötét CTA-k, nem rögzített fejléc, nagy felső tér és lelapult/álló gondolatkártyák** valós UI-regressziók. A javító specifikáció és kötelező vizuális ellenőrzés: [VISUAL_REMEDIATION_2026-11-21.md](docs/VISUAL_REMEDIATION_2026-11-21.md). A fő dokumentáció 8. fejezete a tartós dizájnszabályokat rögzíti. A zöld CI és GitHub Pages-build nem helyettesíti a valódi mobilos renderelt ellenőrzést.

A 2026-11-21-i második iPhone-visszajelzés nyomán az oldal külön javítást kapott: a főoldali gombok szimmetrikus belső térközt, minden footer szöveges Impresszum / hogyan készült / kapcsolati linkeket kap; Alexandra szerzői oldala kézirat-alapú, első személyű EN/HU/DE/FR verzió. További részletek a [SITE_MASTER.md](docs/SITE_MASTER.md) 8. fejezetében. Az Impresszum kötelező jogi adatait a vállalkozás valós igazolásával lehet teljessé tenni.

## SVG Motion Gallery és Alexandra valódi portréja — 2026-11-21

Nyolc új, önálló animált SVG került a főoldal, katalógus, bemutatkozás és a kilenc kiadvány oldalának négynyelvű vizuális rendszerébe. Alexandra valódi portréja bitazonosan a RAW Materials Trade repóból lett átemelve; nem generált portré. A motívumok a nyomdai kéziratokból indulnak ki, de új szerkesztői vektoros illusztrációk, nem pontos PDF-kivonatok. [Eszközjegyzék, proveniencia és mozgásszabályok](docs/SVG_MOTION_MANIFEST.md).

## SVG szerkesztői rendszer — 12 egyedi vektoros elem

A #20 kiadás nyolc eredeti SVG-jelenete és Alexandra valódi, forrásazonos portréja megmarad. Négy kiegészítő SVG külön karaktert ad a színezőnek és a `Na, most mit csináljak?` kiadványnak, valamint visszafogott vonalrajzot a kezdőlapi kártya- és alkotói szakaszokhoz. Nincs dupla illusztráció vagy új animációs JavaScript. A részletes motívumlista, szerkesztői származás és QA: [SVG_MOTION_MANIFEST.md](docs/SVG_MOTION_MANIFEST.md).

## 2026-11-21 — részletes terméktörténetek és hibátlan képaláírás

Az első termékbemutató (ff44da034440) és a későbbi előrendelési verzió (6c67587d409a) három jól érthető kérdését megőrizve mind a kilenc kiadvány négy nyelven részletes bemutatót kap: felismerhető helyzet, konkrét kiadványválasz, 3 érdemi bekezdés, három ellenőrzött tény és egy emberi gondolat. A katalóguskártyák mind a négy nyelven rövid, tartalmas előnézetet és jellemzőket mutatnak.

A 14:07-es iPhone-képen látható levágott képaláírás gyökéroka az overflow:hidden lekerekített képmaskon belüli pozicionálás volt. A figcaption most a képmaskon kívül áll, minden nyelven teljesen megjelenítendő. A közönségnek szánt oldalon nem ismétlődik általános technológiai szöveg; a szemléltető borítólátványok nem állíthatók késztermékfotónak, a valódi kártyafotót külön jelöljük. A tényleges eredet ellenőrzése a gépi provenienciában megmarad.

Regressziós kapu: scripts/product-story-smoke.cjs, 48/48 CSS-paritás catalog.css?v=11, Chromium és WebKit renderelt QA. Részletes specifikáció: docs/SITE_MASTER.md, 8. fejezet.

## Új termék felvitele / Product onboarding

A termékkatalógus célját, a négy nyelvű e-mailes előrendelés követelményeit, a fotó- és jogállás-kezelést, a minden oldalt érintő módosításokat és a kötelező tesztelési/release-folyamatot a [NEW_PRODUCT_PLAYBOOK.md](docs/NEW_PRODUCT_PLAYBOOK.md) írja le. **Új termék előtt ezt olvasd el.**

## Hogy vagy? — 30 kérdés / 6 véletlenszerű
A felnőtteknek szóló önreflexiós modul négy nyelven 30 kérdésből sorsol 6 különbözőt minden indításnál. A véletlenszám-generátor a `880rzz/helloitsme` torzításmentes `crypto.getRandomValues` / Fisher–Yates módszerén alapul; a kártyás/spirituális tartalmat és a tárolt előzményeket nem vettük át. A teljes működési leírás és az új kérdések szerkesztési szabályai: [HOGY_VAGY_30_QUESTION_SYSTEM.md](docs/HOGY_VAGY_30_QUESTION_SYSTEM.md). A válaszokat és a kapott eredményt a webhely nem menti.

## Tartalmi és UX-audit / Check-in journey

A 2026. november 21-i, tíz helyben ellenőrzött nyomdai forrás alapján készült ellenőrzés: [SITE_EDITORIAL_UX_AUDIT_2026-11-21.md](docs/SITE_EDITORIAL_UX_AUDIT_2026-11-21.md).

A „Hogy vagy?” / *How are you?* önkéntes, hatkérdéses felnőtt önreflexiós belépési pont a négy nyelvű katalógusból és honlapról is elérhető. Az eredmény gondolatindító, nem diagnózis és nem automatikus termékalkalmassági értékelés; a válaszokat nem tároljuk. A publikus repóba teljes PDF-kézirat nem tölthető fel, ezt a CI ellenőrzi.

## Hosting
Current published host: https://880rzz.github.io/newvibe/
Planned domain: `foreverypath.com`, **not configured**. Do not add CNAME or replace canonical/sitemap until DNS, TLS, GitHub Pages custom-domain verification and production URL checks succeed.

## Site layout
- `index.html`, `hu/index.html`, `de/index.html`, `fr/index.html`: equal-footing, independently indexable, fully localized editorial homepages. Each page has the same order: five-second hero → embedded six-of-thirty adult check-in → one catalogue bridge → creator credit.
- Language switch follows an explicit canonical URL; localStorage/browser language cannot silently redirect an already visited URL. Only an intentional language choice may be stored. No quiz answers are stored.
- `catalog/index.html` and `{hu,de,fr}/catalog/index.html`: catalogues.
- `products/*.html` plus `{hu,de,fr}/products/*.html`: product detail pages.
- `about/index.html` plus translations: editorial provenance, AI Trust and project identity.
- `helyed-van-koztunk.html`: legacy Hungarian card page, noindex, canonical new HU product page.
- `catalog.json`: nine product editions and production truth. New products can be added to this catalog with dedicated localized pages and sitemap entries.
- `catalog.css`: shared design for the four editorial homepages, portrait-ratio product covers (4:5) with square genuine card-set photos, restrained Fraunces / DM Sans typography, arrow-ended links without underline, and clear keyboard focus.

## Restored original design, 3-category navigation and Alexandra's editorial voice (2026-11-21)

- The original **infinity-logo header** and original full-screen **hamburger menu** are restored on all **48 localized routes** (EN/HU/DE/FR). The menu's **Publications** item is an accessible disclosure with three category anchors: journals/planners (4), reflection/conversation (2), stories/activities (3).
- The original animated **notebook, rotating doodle and drawn curve** return to all four homepages, along with three original-style **flip note cards** **after** the six-question reflection. Mobile cards are ordinary, non-overlapping grid items; motion respects `prefers-reduced-motion`.
- The catalogue hero has **no redundant CTA**. Relevant navigation and conversion CTAs are styled as real **buttons without decorative arrows**; plain editorial links can retain SVG arrows. Catalogue covers preserve the source visual aspect ratio.
- The `about` pages now foreground Alexandra's first-person account in the 2026-11-19 **Egy kis tér** manuscript: helping children, organising, the difficulties of saying no, everyday self-reflection. No defensive statements about a supposedly non-existent company appear. The user reported business formation underway; legal identifiers must be verified before being published.
- The **canonical category registry is `catalog.json.product_categories` and each product's `category_id`**. Keep it aligned with the HTML category IDs and translated hamburger labels.
- `scripts/menu-design-smoke.cjs` and the quality workflow enforce this design and content contract. Visual mobile/desktop QA still requires rendered evidence.

## Five-second editorial UX and language parity

- **The homepage does not repeat the product grid**: nine products appear in each dedicated `/catalog/` route only.
- All 48 localized pages keep canonical/hreflang and stay independently crawlable. Product titles remain in original Hungarian; labels, CTAs, accessibility strings and descriptive copy must be in the page language.
- The `Hogy vagy?` reflection is directly interactive on every language's homepage; the 30-question bank and secure six-question draw remain in `checkin-bank.js`.
- The product catalogue presents each portrait mockup without artificial letterboxing; the genuine square card-set photo is the sole 1:1 exception.
- **Visual QA cannot be claimed from source/CI checks alone.** For mobile, desktop, dynamic states and 5-second comprehension, use rendered screenshots/user testing.
- See [FOUR_LANGUAGE_UX_RELEASE.md](docs/FOUR_LANGUAGE_UX_RELEASE.md) for the UX intent, explicit-language routing contract, functional gates and release verification requirements.

## Editorial status

The creator confirmed on 2026-11-21 that all nine listed editions have final, professionally approved content. This is a publisher-supplied editorial status, distinct from manufacturing, stock, formal church endorsement and copyright/licence documentation.

## Product integrity
- Existing card product photos `assets/helyed-van-koztunk-*.jpg` are genuine.
- The planners have approved final Hungarian editions. Their website cover images are digital illustrations rather than actual product photographs.
- The adult workbook is a **professionally approved Hungarian publication** according to the creator's November 2026 status update. Its previously supplied source version is dated 2026-11-19; no clinical effectiveness claims are made.
- `Veled a mindennapokban` is a 30-day A5 Catholic prayer journal, 84-page Hungarian edition (source version dated 2026-11-18), with a 30-day devotional structure, writing pages and Catholic scriptural/catechism citations. The source explicitly acknowledges AI assistance. Professional editorial approval has been reported by the creator; do not infer endorsement by the Catholic Church without institutional evidence. Its image is an AI visualisation of the submitted cover, not a genuine product photograph.
- The full original manuscript/PDF is **not** uploaded to this public repository.
- Diófa Műhely 3-PDF extension: Mesék a világ körül (A4, 131 pages, 42 stories, revision 2026-11-19), Mesék a világ körül – 42 színező (A4, 42 coloring pages), Na, most mit csináljak? (A4, 139 pages, 32 activity stories for ages 8–11). All are Hungarian originals; EN/DE/FR pages only describe those originals. The publisher has confirmed professional approval of the final editions; do not infer any institutional endorsement from that status. Local Kóka institutions inspired fiction and have not been presented as partners or endorsers.
- The three new product images are intentionally SVG mock-ups based on source themes, not real book photographs. The full original PDFs stay off the public repository. Only descriptive product information and a concept image are published.
- Cover mockups and generated images must always be marked "illustrative, not a photograph of the physical product" and must not replace real photos without verification.
- Only the independent creator is named. Do not create an Organization schema or legal/impressum details without real verified data.
- No public prices, stock, schema `OrderAction`/`Offer` or invented webshop. **Email-only pre-order requests are accepted for all nine products** via `diofamuhelykozosseg@gmail.com`. Every email link prepopulates the product and asks for quantity; the request is not a confirmed purchase, reserves no stock and takes no payment. Conditions including price and delivery must be discussed before confirmation. Future verified shop links belong in the central manifest.
- All editions are professionally approved according to the publisher. Email requests remain non-binding until prices and individual order terms are confirmed.
- The quiz result is indicative reflection, not diagnosis; the language preference may be saved locally, but check-in answers and outcomes are not persisted.

## Search / AI discoverability
HTML canonical + `hreflang`, XML sitemap, Product/Person/Brand/WebSite structured data (without offers), `llms.txt`, and `ai.txt` expose source-grounded claims. Sitemap URLs are only migrated after domain cut-over.

## Release checks
Run the GitHub Actions static quality workflow on each PR. Verify all 48 localized pages, image links, navigation, CSS/JS syntax, structured data, and browser visual QA before release.

## Pre-order workflow (November 2026)
- 36 localized product pages show the email pre-order CTA and non-confirmation terms.
- All four localized catalogues and all 36 product pages provide e-mail preorder links. The four editorial homepages intentionally contain NO full product list or per-product preorder buttons; they lead to the catalogs. The shared `app.js` handles only the voluntary in-memory 30/6 check-in.
- The `catalog.json` manifest records pre-order **request intake** separately from physical production status. `shop_url` and `price` remain `null`.
- Confirm the legal operating entity, written preorder/sales terms, consumer information and privacy notice before transforming email requests into binding orders. Do not email bank-card details.

## 2026-11-21 — Menü cache-verzió és 4-nyelvű QA

A menükártya minden egyes HU/EN/DE/FR oldalon a `site-menu.js?v=2` és a `catalog.css?v=11` verzióazonosítókon keresztül töltődik. A 48/48 HTML-paritás, a holdfázisok és az 320–1440 px széles képernyőkre kiterjedő teljesmenü-ellenőrzés a CI része. A menü bezárása görgetés közben is elérhető. Részletek: `docs/SITE_MASTER.md`.

## Helyed van köztünk – eredeti kártyaképek

A négy nyelvű termékoldali demó öt **eredeti, 63 × 88 mm-es nyomdai kártya mindkét oldalát** mutatja a hozzájuk tartozó, PDF-ből kivágott WebP képeken: 01, 07, 13, 20, 35. A látogató oldalmegnyitásonként egyet kap, megfordíthatja, és elolvashatja a helyzetet és a két eredeti kérdést. Az idegen nyelvű digitális szöveg külön fordítás; az eredeti nyomtatott lapok magyarul készültek. A forráspárok és a 10 SHA-256 hash a `docs/SITE_MASTER.md` és `scripts/card-demo-smoke.cjs` fájlokban ellenőrizhetők. Nincs tárolás vagy követés.

**Tipográfiai hátoldal:** a kártya előlapja továbbra is az eredeti nyomdai kép; megfordítva Fraunces/DM Sans HTML-es történet és két kérdés jelenik meg HU/EN/DE/FR nyelven. A valódi, magyar nyomdai hátoldal külön, akadálymentes modális ablakban tekinthető meg. A teljes működést és QA-kapukat a `docs/SITE_MASTER.md` részletezi.


## 2026-11-21 — Lenyíló menü: a felső üres tér megszüntetése

A teljes képernyős navigáció korábban desktopon a `site-menu-inner` `justify-content:center` szabálya miatt függőlegesen középre tolódott, így nagy üres tér jelent meg az oldal tetején. Az új közös szabály `justify-content:flex-start`; felső belső tér desktopon 36 px, 560 px alatt 24 px. Az „Egy gondolat neked” kártya nagy képernyőn a menü kezdéséhez igazodik (50–66 px), nem a viewport közepéhez. Az összes 48 EN/HU/DE/FR oldal egységes `catalog.css?v=15` cache-kulcsot kapott. A Chromium/WebKit menü-top-gap, CTA, zárógomb és vízszintes overflow ellenőrzés release gate.
