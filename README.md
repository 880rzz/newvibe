# For Every Path

Independent creative product catalogue by Sajbán-Frőhner Alexandra; successor to NewVibe.

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

## Product integrity
- Existing card product photos `assets/helyed-van-koztunk-*.jpg` are genuine.
- New planners are based on user-provided Hungarian print PDFs, **not verified as manufactured**.
- The adult workbook is a Hungarian **working manuscript** (2026-11-19), pending independent professional review and reader testing.
- `Veled a mindennapokban` is a 30-day A5 Catholic prayer journal, 84-page Hungarian PDF supplied as a manuscript (2026-11-18), with a 30-day devotional structure, writing pages and Catholic scriptural/catechism citations. The manuscript explicitly acknowledges AI assistance. Do not claim church endorsement or approval without evidence. Its image is an AI visualisation of the submitted cover, not a manufactured item.
- The full original manuscript/PDF is **not** uploaded to this public repository.
- Diófa Műhely 3-PDF extension: Mesék a világ körül (A4, 131 pages, 42 stories, revision 2026-11-19), Mesék a világ körül – 42 színező (A4, 42 coloring pages), Na, most mit csináljak? (A4, 139 pages, 32 activity stories for ages 8–11). All are Hungarian originals; EN/DE/FR pages only describe those originals. Do not assert commercial rights for the 42-story anthology; the manuscript explicitly records unresolved translation/rights checks. Local Kóka institutions inspired fiction and have not been presented as partners or endorsers.
- The three new product images are intentionally SVG mock-ups based on source themes, not real book photographs. The full original PDFs stay off the public repository. Only descriptive product information and a concept image are published.
- Cover mockups and generated images must always be marked "illustrative, not a final manufactured product" and must not replace real photos without verification.
- Only the independent creator is named. Do not create an Organization schema or legal/impressum details without real verified data.
- Email pre-order requests are available for all nine products at `diofamuhelykozosseg@gmail.com`, with localized prefilled subject, product, and requested quantity. Email contact is **not** an automatically confirmed sale or a request for payment details. Actual prices remain exclusive to the future webshop. The two `Mesék a világ körül` editions remain subject to copyright/translation rights clearance before commercial release.
- No prices, stock, OrderAction, Offer, or invented webshop. Future verified links belong in a central product manifest and must be validated before public release.
- The quiz result is indicative reflection, not diagnosis; language preference and optional saved result remain local to browser.

## Search / AI discoverability
HTML canonical + `hreflang`, XML sitemap, Product/Person/Brand/WebSite structured data (without offers), `llms.txt`, and `ai.txt` expose source-grounded claims. Sitemap URLs are only migrated after domain cut-over.

## Release checks
Run the GitHub Actions static quality workflow on each PR. Verify all 48 localized pages, image links, navigation, CSS/JS syntax, structured data, and browser visual QA before release.
