# For Every Path — SVG Motion Gallery and Image Provenance

Updated 2026-11-21 · Four languages (EN/HU/DE/FR) · 48 localized pages

## Image authenticity

The twelve SVG files in `assets/svg-motion/` are newly drawn, editable vector scenes based on motifs in the manuscripts. They are **not scans, exact tracings, faithful vector extractions, finished-product photographs, or copies of original print illustrations**. Do not present them as exact reproductions of the books.

Manuscript references checked: `Egy kis tér`, cover (table, chair, notebook) and page 2 (bench with shopping bag and backpack); `Helyed van köztünk`, 16-panel accordion helper; `Mesék a világ körül`, 42 illustrated world stories. These PDFs remain outside the public Git repository.

Alexandra's portrait is a genuine existing photograph, **not AI generated**. It was transferred byte for byte from `strangerfake01/RawMaterialsTrade/assets/images/team/alexandra-sajban-frohner.webp` to `assets/portraits/alexandra-sajban-frohner.webp`.

- Original Git blob SHA and copied Git blob SHA: `e155107f4f12a9bbf35c4f0c57b0f4df8e96f855`
- Original file size: 68,282 bytes
- Used only in the author introductions on the four homepages and four About pages
- A photographer credit or further usage-rights statement must be supplied by the rights holder; it was not inferred

## Asset manifest

| SVG source | Editorial inspiration | Placement |
| --- | --- | --- |
| `bookmark-pencil.svg` | Bookmark and pencil | Four homepage notebooks; illustrated teacher planner |
| `speech-thread.svg` | The words we need to find | Four reflection/quiz sections; `Na, most mit csináljak?` |
| `world-stories.svg` | Open book, world tales | Four collection bridges; all catalog story sections; two 42-story titles |
| `bench-bag.svg` | `Egy kis tér` manuscript page 2 | Decorative layer in Alexandra's four portrait compositions |
| `desk-chair.svg` | `Egy kis tér` cover | The four `Egy kis tér` product pages |
| `folded-help.svg` | `Helyed van köztünk` handout | Conversation/reflection catalog section; product page |
| `planner-tabs.svg` | Planner pages and scheduling | Journal/planner category; ADHD planner; minimal teacher planner |
| `journal-candle.svg` | Thirty-day prayer journal | The four `Veled a mindennapokban` product pages |
| `coloring-crayon.svg` | The `Mesek_42_orszag_42_szinezo_A4.pdf` colouring book format; newly drawn crayon/page, not traced source illustration | The four `Mesék a világ körül – 42 színező` product pages |
| `craft-table.svg` | `Diofa_Muhely_139_oldal_A4_nyomtathato (1).pdf` cover: children creating at a table; original abstract tools motif | The four `Na, most mit csináljak?` product pages |
| `workshop-tree.svg` | Diófa Műhely editorial maker metaphor; original abstract tree illustration | The four `Hogyan készült?` sections |
| `editorial-handline.svg` | Original light hand-drawn book-page divider | The four homepage recognition headings |

## Engineering contract

- These are real standalone SVG files, under a small size budget. Inline CSS within each SVG provides subtle continuous 5–11 second motion without a JS animation runtime.
- SVG documents have `prefers-reduced-motion: reduce` fallback. All strokes are visible when motion is disabled.
- Every decorative SVG is embedded with empty `alt`, `aria-hidden=true`, `loading=lazy`; decorative imagery cannot steal pointer/touch focus.
- Do not use these illustrations as a substitute for original product imagery or for detailed child protection/safety instructions.
- All 48 pages must use the same shared stylesheet cache version (`catalog.css?v=10`).
- The twelve source assets, 48 localized routes, 64 or more motif placements and bit-identical real portrait are checked in `scripts/svg-motion-smoke.cjs`.
- Verify responsive layout, no horizontal scroll, SVG resource loading, sticky header, quiz function, flip cards and CSS reduced motion in Chromium and WebKit; screenshots are part of the release gate.

## Production rule

A successful source build is not visual proof. The required release sequence is PR → CI → Chromium/WebKit screenshots → merge → Pages deployment SHA → live visual review. Physical iPhone Safari is an additional check, not automatically equivalent to Playwright WebKit.

## 2026-11-21 — Scoped addition without doubling the gallery

The four additional vectors are intentionally limited to two previously reused product symbols and two quiet editorial separators. Existing author portrait, manuscript gallery, homepage notebook, native flip cards and category illustrations are preserved. All four added SVGs contain their own restrained CSS animation, 9–10-second cadence, and `prefers-reduced-motion: reduce` fallbacks; no new script, package or global CSS layer is introduced. The earlier superseded #22 branch was intentionally closed because it duplicated the merged #20 work.
