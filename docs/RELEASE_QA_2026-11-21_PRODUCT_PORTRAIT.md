# For Every Path — #21 release verification checklist

**Scope:** nine products, four languages, 36 detail pages, four rich catalogue pages and Alexandra’s original portrait on four homepages and four About pages. This checklist does not assert that production is deployed.

## Source and editorial gates

- [ ] Exact full PR source SHA, tree and pull-request CI synthetic merge commit are aligned.
- [ ] `scripts/visual-design-smoke.cjs` passes at the current head; 36 long narratives and 4×9 rich catalogue previews are present; the generic “AI and editorial transparency” block is absent from all 36 product detail pages.
- [ ] Source-photo fidelity: the directly hosted original WebP bytes at `assets/portraits/alexandra-sajban-frohner.webp` match the original RMT Git blob SHA `e155107f4f12a9bbf35c4f0c57b0f4df8e96f855`. No hotlink, no crop.
- [ ] All four locales show nine distinct SVG motifs consistently and keep the Hungarian-only physical-edition disclaimer and verified `mailto:` pre-order mechanism.
- [ ] The 42-country reader’s outstanding translation and commercial-rights questions remain represented truthfully; no invented medical, ecclesiastical or institutional endorsements.
- [ ] No print-source PDFs or sensitive personal records committed.

## Új iPhone vizuális regressziós elfogadás

- [ ] Katalógusok: 4 × `figure > .fep-hero-art + figcaption`, a képaláírás az ovális képtől független, teljes szélességben látható 320/390/430 px-en.
- [ ] Mind a 36 részletes termékoldalon 2 valódi, lokalizált, önálló `fep-story-need` panel (a helyzet és a kiadvány válasza).
- [ ] Nincs ismétlődő generikus technológiai bizalmi szakasz a termékoldalak alján. A még digitális borítókat nem nevezünk késztermékfotónak.
- [ ] A régebbi SVG-bővítés 12 motívuma nem veszik el a PR összevonásakor.

## Browser visual QA

- [ ] GitHub Actions browser job **checks out the current PR head containing `productSlugs`** in `scripts/browser-visual-qa.cjs`. A green run of the old 2170-check test is insufficient.
- [ ] Chromium and WebKit rendered checks for 36 product pages at 390 and 1440 px; horizontal overflow, copy size, three unique paragraphs, all fact boxes, pre-order CTA and SVG motion.
- [ ] Both engines render the portrait on four home and four About pages at 800×800 natural dimensions, with appropriate alt text, no cropping and correct mobile layout.
- [ ] Screenshots inspected, including the original photograph’s visible pixels and the distinct editorial SVG artwork, the longer German/French headlines and all nine product story sections.
- [ ] After merge, green main-branch CI, successful GitHub Pages deployment on the same SHA, and exact live URL readback.

**Release rule:** do not call the change live or complete at PR creation or CI success alone.
