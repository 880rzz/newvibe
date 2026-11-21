# Three manuscript sentences — source manifest
2026-11-21 · For Every Path / Diófa Műhely · 4-language homepage.

## Interaction
The original “Van olyan nap, amikor ez a három mondat is elég” flip-card section is reused, not duplicated. Three **distinct** manuscript excerpt pairs are drawn in the visitor's browser when the homepage loads. The local “another three” action draws three different records (excluding the previously visible three), resets all cards to their front faces and updates their accessible labels. Every card's back contains a **second passage from the same PDF page**. No analytics, API, storage, tracking or personal data is involved. If JavaScript is unavailable, the HTML retains three genuine manuscript pairs.

## Verified Hungarian source pages
PDF page numbers below refer to the source files supplied for this release, not the internal book pagination.

| Records | Manuscript (original Hungarian source) | PDF pages | Publication route |
| --- | --- | --- | --- |
| space-01, space-02, space-05 | **Egy kis tér** — “A füzetről” | 3 | `products/egy-kis-ter.html` |
| space-03 | **Egy kis tér** — “Biztonság és segítségkérés” | 4 | `products/egy-kis-ter.html` |
| space-04 | **Egy kis tér** — “Így használd” | 5 | `products/egy-kis-ter.html` |
| prayer-01, prayer-02 | **Veled a mindennapokban** — introductory use guidance | 6 | `products/veled-a-mindennapokban.html` |
| prayer-03 | **Veled a mindennapokban** — day 4 | 14 | `products/veled-a-mindennapokban.html` |
| stories-01, stories-02 | **Na, most mit csináljak?** — “Mielőtt belekezdesz” | 2 | `products/na-most-mit-csinaljak.html` |
| cards-01 | **Helyed van köztünk** — card 20 reverse | 40 | `products/helyed-van-koztunk.html` |
| cards-02 | **Helyed van köztünk** — card 33 reverse | 66 | `products/helyed-van-koztunk.html` |
| cards-03 | **Helyed van köztünk** — card 36 reverse | 72 | `products/helyed-van-koztunk.html` |

The exact **HU** front/back strings are embedded in the public `three-sentences.js` data (with source ID and PDF page). The EN / DE / FR strings are editorial translations, not a claim that the original printed PDFs exist in those languages. These brief excerpts preserve their original context as short thought-starters; they are not clinical guidance or promises of effectiveness.

**Scope:** four homepage HTML files, scoped `three-sentences.css`, local `three-sentences.js`, dynamic flip-card ARIA labels in `site-menu.js`, source-level and browser-level regression tests. Source PDFs remain private and are **not committed** or published.
