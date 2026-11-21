# Editorial SVG & Motion System — For Every Path / Diófa Műhely

**Állapot:** 2026-11-21. Négy nyelv (EN/HU/DE/FR), 48 lokalizált oldal.  
**Cél:** különleges, személyes, papírszerű, visszafogott vektoros élmény; nem általános stockdizájn vagy állandóan villogó animáció.

## Tartalmi eredet és szerkesztői tisztaság

A 14 új SVG **eredeti, egyszerűsített vektoros újrarajzolás / szerkesztői értelmezés** a megrendelő által rendelkezésre bocsátott nyomdai kéziratok és az oldal meglévő tipográfiai világa alapján. **Nem PDF-ből kinyert kész illusztrációk, nem a kézirat grafikai reprodukciói, nem hivatalos termékfotók.** A publikus repóban továbbra sincs feltöltött PDF, DOCX, nyomdai vagy bizalmas alapanyag. A PDF-ekből való közvetlen elemkivágás később csak ellenőrzött szerzői/licencfeltételekkel és minőségbiztosítással történhet.

A források ellenőrzött képi elemei (az eredeti kéziratok 1. oldalának megjelenítése alapján):
- `Egy_kis_ter_Teljes_egyseges_kezirat(4).pdf`: a borítón szabadon hagyott tér, kis asztal, nyitott könyv és szék. A motívum **új, sematikus vonalrajz**.
- `Helyed_van_koztunk_Segito_harmonika_A4.pdf`: hajtott segítő lap, beszélgetés, biztonságos felnőtt segítsége. A motívum **új hajtott-lap / párbeszéd grafika**, nem forrásoldal-másolat.
- `Veled_a_mindennapokban_katolikus_imanaplo_A5-10.pdf`: fehér, tipografikus, 30 napos ima- és önreflexiós füzet. A motívum **nyitott napló és fény**; semmilyen intézményi jóváhagyást nem sugall.
- `Mesek_42_orszag_teljes_olvasokonyv_A4.pdf`: országokhoz kapcsolódó illusztrált történetek. A motívum **új könyv + földgömb**.
- `Diofa_Muhely_139_oldal_A4_nyomtathato (1).pdf`: alkotó gyermekek egy asztal körül, beszélgetés és tevékenység. A motívum **új rajzeszköz- / műhelygrafika**.
- A tervezők és tanári naplók ikonjai az oldalon szereplő **valós funkciókból** (lépések, naptárrács, színes/letisztult változat) indulnak ki, nem állítunk ellenőrzés nélküli oldal- vagy karakterhű rekonstrukciót.

## Vektoros asset-nyilvántartás

| Fájl az `assets/svg/` alatt | Használat | Jelleg |
|---|---|---|
| `editorial-bookmark.svg` | főoldal hero | könyvjelző |
| `editorial-pencil.svg` | főoldal hero | ceruza |
| `editorial-stars.svg` | főoldal hero | pontok, csillag |
| `editorial-divider.svg` | főoldali gondolatkártya és szerzői szakasz | ívelt kézi vonal |
| `motif-diofa-workshop.svg` | Alexandra oldal | Diófa / műhely |
| `motif-egy-kis-ter.svg` | Egy kis tér termék + Alexandra oldal | asztal, könyv, szék |
| `motif-helyed-van-koztunk.svg` | Helyed van köztünk termék + beszélgetés kategória | hajtott lapok |
| `motif-veled-a-mindennapokban.svg` | imanapló termék | napló |
| `motif-mesek-a-vilag-korul.svg` | mesék termék + mesék kategória | könyv, földgömb |
| `motif-mesek-a-vilag-korul-szinezo.svg` | színező termék | színezőlap |
| `motif-na-most-mit-csinaljak.svg` | foglalkoztató termék | alkotóeszközök |
| `motif-lepesrol-lepesre-2027.svg` | 2027 tervező | kis lépések |
| `motif-tanari-hataridonaplo-2027-szines.svg` | színes tanári napló + naplók kategória | színes naptár |
| `motif-tanari-hataridonaplo-2027-letisztult.svg` | letisztult tanári napló | tiszta naptár |

## Elhelyezés és sűrűség

- **4 kezdőlap:** 3 önálló hero SVG; a meglévő füzet és SVG-kártyadíszek megmaradnak. Egy visszafogott ívelt elválasztó a kártyacímnél és a szerzői rész előtt. Nincs mozgó elem a gombokon; nem változik a CTA geometriája.
- **4 Alexandra oldal:** két eredeti vonalrajz a személyes bevezető és az alkotói leírás között; nincs új értékesítési blokk, tartalmi/személyes hang változatlan.
- **4 katalógus:** 3 kategóriánként egy-egy külön motívum. A kategóriacím és a kép nem fedheti egymást 320–2560 px között.
- **36 termékoldal:** 9 külön motívum, nyelvenként azonos párosítással. A valós termékfotó / AI-látványterv megkülönböztetése változatlan. A vektor dekoráció a fő kép **mellett / alatt**, nem annak bizonyítékaként jelenik meg.
- **0 SVG a footerben** és **0 beavatkozás** az impresszumba, előrendelési logikába vagy a kérdéssorba.

## Animációs szerződés

A közös `editorial-motion.css` a **kizárólagos** új stílusforrás; a meglévő `catalog.css` változatlan. Kíméletes, 8–12 másodperces, 0–5 px amplitúdójú lebegés és áttetszőség-változás, egyszerre maximum a látótérben hangsúlyos 1–2 motívummal. Minden motívum azonos `width` és `height` HTML attribútummal foglal helyet, így nem okoz layout shiftet. Dekorációk: `alt=""`, `aria-hidden="true"`, nem kattinthatók (`pointer-events:none`). Fókusz, billentyűzet, szöveg és a kártyafordítás sértetlen.

**Hozzáférhetőség:** `prefers-reduced-motion:reduce` esetén valamennyi új animáció és transzformáció kikapcsol; az SVG teljes egészében látható marad. Nem használunk belső `<script>`, `foreignObject`, külső linket vagy rejtett adatot az SVG-kben.

## Regressziós és kiadási kapuk

- `node scripts/svg-motion-smoke.cjs` — 14 SVG, 48/48 közös CSS, minden oldal megfelelő ikonja, alt/aria, hiányzó assetek, PDF/forrásvédelmi szabályok.
- `node scripts/browser-visual-qa.cjs` — Chromium + WebKit; főoldal 320/375/390/430/768/1024/1440 px; about/katalógus és kilenc termékoldal reprezentatív mobil/desktop mintái; képernyőképek, overflow és reduced motion.
- A CI-zöld **nem** jelenti automatikusan a fizikai iPhone Safari ellenőrzést vagy az élő CDN utólagos render-visszaolvasását. Ezeket külön kell igazolni.
- A kötelező `main SHA = Pages deployment SHA` kapcsolatot kiadásonként külön ellenőrizni kell.

**Karbantartás:** új SVG csak konkrét szerkesztői vagy terméktartalmi indokkal; a dokumentáció és az egyedi motívum–termék hozzárendelés egyetlen forrásként itt szerepel. A 14 fájlt ne sokszorosítsuk nyelvenként, minden lokalizáció ugyanazokra az assetekre hivatkozzon.
