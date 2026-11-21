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
- `catalog.json`: five product editions and production truth. New products can be added to this catalog with dedicated localized pages and sitemap entries.
- `catalog.css`: additive design layer preserving the original background, fonts, stationery style, and accessibility.

## Product integrity
- Existing card product photos `assets/helyed-van-koztunk-*.jpg` are genuine.
- New planners are based on user-provided Hungarian print PDFs, **not verified as manufactured**.
- The adult workbook is a Hungarian **working manuscript** (2026-11-19), pending independent professional review and reader testing.
- Cover mockups and generated images must always be marked "illustrative, not a final manufactured product" and must not replace real photos without verification.
- Only the independent creator is named. Do not create an Organization schema or legal/impressum details without real verified data.
- No prices, stock, OrderAction, Offer, or invented webshop. Future verified links belong in a central product manifest and must be validated before public release.
- The quiz result is indicative reflection, not diagnosis; language preference and optional saved result remain local to browser.

## Search / AI discoverability
HTML canonical + `hreflang`, XML sitemap, Product/Person/Brand/WebSite structured data (without offers), `llms.txt`, and `ai.txt` expose source-grounded claims. Sitemap URLs are only migrated after domain cut-over.

## Release checks
Run the GitHub Actions static quality workflow on each PR. Verify all 32 localized pages, image links, navigation, CSS/JS syntax, structured data, and browser visual QA before release.
