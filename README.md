# For Every Path

Independent creative product catalogue by Sajbán-Frőhner Alexandra; successor to NewVibe.

## Új termék felvitele / Product onboarding

A termékkatalógus célját, a négy nyelvű e-mailes előrendelés követelményeit, a fotó- és jogállás-kezelést, a minden oldalt érintő módosításokat és a kötelező tesztelési/release-folyamatot a [NEW_PRODUCT_PLAYBOOK.md](docs/NEW_PRODUCT_PLAYBOOK.md) írja le. **Új termék előtt ezt olvasd el.**

## Tartalmi és UX-audit / Check-in journey

A 2026. november 21-i, tíz helyben ellenőrzött nyomdai forrás alapján készült ellenőrzés: [SITE_EDITORIAL_UX_AUDIT_2026-11-21.md](docs/SITE_EDITORIAL_UX_AUDIT_2026-11-21.md).

A „Hogy vagy?” / *How are you?* önkéntes, hatkérdéses felnőtt önreflexiós belépési pont a négy nyelvű katalógusból és honlapról is elérhető. Az eredmény gondolatindító, nem diagnózis és nem automatikus termékalkalmassági értékelés; a válaszokat nem tároljuk. A publikus repóba teljes PDF-kézirat nem tölthető fel, ezt a CI ellenőrzi.

## Hosting
Current published host: https://880rzz.github.io/newvibe/
Planned domain: `foreverypath.com`, **not configured**. Do not add CNAME or replace canonical/sitemap until DNS, TLS, GitHub Pages custom-domain verification and production URL checks succeed.

## Site layout
- `index.html`: editorial interactive English-first homepage, with browser-language detection for EN/HU/DE/FR; manual language selection persists in localStorage.
- `{hu,de,fr}/index.html`: crawlable local-language home pages.
- `catalog/index.html` and `{hu,de,fr}/catalog/index.html`: catalogues.
- `products/*.html` plus `{hu,de,fr}/products/*.html`: product detail pages.
- `about/index.html` plus translations: editorial provenance, AI Trust and project identity.
- `helyed-van-koztunk.html`: legacy Hungarian card page, noindex, canonical new HU product page.
- `catalog.json`: nine product editions and production truth. New products can be added to this catalog with dedicated localized pages and sitemap entries.
- `catalog.css`: additive design layer preserving the original background, fonts, stationery style, and accessibility.

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
- All four catalogues and localized homepages expose pre-order email links for the nine editions. The English-first interactive homepage localizes its email pre-order links in `app.js`.
- The `catalog.json` manifest records pre-order **request intake** separately from physical production status. `shop_url` and `price` remain `null`.
- Confirm the legal operating entity, written preorder/sales terms, consumer information and privacy notice before transforming email requests into binding orders. Do not email bank-card details.
