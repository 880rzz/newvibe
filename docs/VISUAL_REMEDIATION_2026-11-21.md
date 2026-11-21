# FOR EVERY PATH / DIÓFA MŰHELY — VIZUÁLIS REGRESSZIÓ JAVÍTÓ MASTER PROMPT

**Projekt:** `880rzz/newvibe` • EN / HU / DE / FR • 48 lokalizált útvonal
**Kiadási kiindulópont:** #16, `3927d02e319f7a8f08cbd00a1fc4d2cc55ded669` (2026-11-21)
**Forrás:** a megrendelő 2026-11-21-i iPhone-képernyőképei és az aktuális repo kódja
**Fontos:** a sikeres CI nem egyenlő a megfelelő vizuális megjelenéssel.

## Kívánt eredmény

Ne hozz létre új arculatot: állítsd helyre az eredeti, mozgó, árnyékolt, kreatív papírlap- és SVG-világot. A fekete gombok helyett mindenütt elegáns mélyzöld CTA legyen. A fejléc görgetés közben maradjon fenn, és mobilon tűnjön el a fölötte lévő felesleges üres sáv.

## Pontos javítási szerződés

1. **Gyökérok:** `styles.css` `.site-header` fixed + `body` padding-top szabályával ütközik a `catalog.css` `.fep-page .fep-restored-header { position: relative; }`. Javítsd a közös CSS-ben egyetlen `position: sticky; top: 0` vagy következetesen kompenzált fixed megoldással; ne maradjon dupla felső padding. Valódi eszközön ellenőrizd.
2. **CTA:** közös `--fep-cta-primary: #1f4a3d`, `--fep-cta-hover: #285a48`; világos felirat, megfelelő kontraszt, látható focus ring. Az összes `button-ink`/`button-coral` konverziós gomb és az aktív nyelvváltó illeszkedjen. Sima editorial link ne kapjon gombstílust. Ne kerüljön dekoratív nyíl a valódi gombokba.
3. **Felső tér:** a header és a hero közti tér legyen kompakt, de ne csússzon a H1 a sticky header alá. A `#quiz` és a katalóguskategóriák horgonyai a fejléc alatt maradjanak olvashatók.
4. **Három kártya:** a korall, kék, sárga kártya maradjon valódi natív `button`, maradjon flip/tap funkció; rétegzett papírszerű árnyék, finom forgatás, mély tintazöld felirat, kis amplitúdójú örökös lebegés. Mobilon is mozogjanak és ne érjenek össze. Hoveremelés csak desktop plusz viselkedés, nem a mozgás egyetlen módja.
5. **Animált SVG:** három, enyhén eltérő díszítő vonal-/pontmotívum az összes EN/HU/DE/FR főoldali kártyán. SVG `aria-hidden=true`, `pointer-events:none`. Finom rajzolás, ringás és pulzálás. `prefers-reduced-motion` alatt animáció nélkül is szép maradjon.
6. **CSS-szerkezet:** központi tokenek és komponensek, ne 48 route-specifikus felülírás. A gombokat érintő örökölt `.fep-footer a` és egyéb specifikussági ütközéseket is javítsd.
7. **Tartalmi védőkorlát:** 9 termék / 3 kategória / 4 nyelv / 30 kérdésből 6 / e-mailes előrendelés / Alexandra személyes bemutatkozása / AI-átláthatóság / PDF-forrásvédelmi gate / canonical-hreflang-JSON-LD maradjon változatlan.

## Konkrét érintett fájlok

- `catalog.css`: CTA tokenek, header-pozíció, body-padding, kártyamélység/motion, svg motion, reduced-motion, mobil breakpointok
- `index.html`, `hu/index.html`, `de/index.html`, `fr/index.html`: kártyák dekoratív SVG-je; termékszövegek változatlanul
- Az összes többi, összesen 48 indexelhető lokalizált `.html`: egységes `catalog.css` cache-bust
- `.github/workflows/quality.yml`, `scripts/visual-design-smoke.cjs`: regressziós forráskapu
- `docs/SITE_MASTER.md` és `README.md`: tartós dizájnszerződés és nyitott vizuális QA-státusz

## Ellenőrzési kapuk

- Run: `node scripts/locale-smoke.cjs`, `node scripts/checkin-smoke.cjs`, `node scripts/home-ux-smoke.cjs`, `node scripts/menu-design-smoke.cjs`, `node scripts/visual-design-smoke.cjs`.
- EN/HU/DE/FR mobil (320/375/390/430), tablet (768), desktop (1024/1440/1920/2560) viewport: nincs horizontal overflow, sticky fejléc, olvasható header/hero/CTA/footer, kártyák nem fedik egymást.
- Nézd meg a kártyák tap/click flipjét oda és vissza, a billentyűzetes focus/Escape menükezelést, a reduced-motion módot és a `#quiz` horgony viselkedését.
- Ellenőrizd a 48 route-ot cache-frissítéssel és a valós Pages-hoston. GitHub Actions zöld CI után Pages deployment SHA = main SHA, majd mobil Safari és desktop screenshot/videó szükséges.

## Kiadás és jelentés

Branch → PR → CI → merge → Pages → exact-live readback → képernyőképes reverse QA. Az állapot **nem** nevezhető teljesen lezártnak renderelt böngészős bizonyíték nélkül. Ha az utolsó lépés nem érhető el, jelöld `CI-VERIFIED / VISUAL-QA-PENDING` állapotúnak, és nevezd meg az akadályt.

## Elfogadási lista

- [ ] Mélyzöld CTA minden oldalon és nyelven.
- [ ] Fejléc látható marad görgetéskor, nincs fölötte felesleges nagy üres tér.
- [ ] Három rétegzetten árnyékolt, finoman lebegő, forgatható gondolatkártya.
- [ ] Három dekoratív animált SVG-kártyamotívum négy főoldalon, reduced-motion támogatással.
- [ ] Valódi mobilos és asztali vizuális ellenőrzés; nincs kártyaátfedés.
- [ ] 48 lokalizált HTML közös cache-verzióval, zöld regressziós kapu, sikeres GitHub Pages és utóellenőrzés.

**Részletes rendszerdokumentáció:** [SITE_MASTER.md](SITE_MASTER.md).

## Kiegészítés: második iPhone-visszajelzés 2026-11-21

- Az új mélyzöld CTA-n a szöveg két oldalán mindig egyforma belső padding legyen, bármely HU/EN/DE/FR felirattal; hosszabb címke esetén természetes wrap, kilógás nélkül.
- Minden footerben csak szöveges Impresszum, Hogyan készült? és Kapcsolat hivatkozások legyenek; CTA-gombot és fiktív vállalkozási adatot tilos közölni.
- Az Alexandra-bemutatkozás és a Hogyan készült? négy nyelven következetesen E/1. A 2026-11-19-i Egy kis tér 2–3. oldalai az elsődleges személyes és AI-átláthatósági források.
- Független klinikai, terápiás, hivatalos egyházi vagy intézményi igazolást nem szabad a személyes tapasztalatból levezetni. A PDF-kéziratokat nem szabad feltölteni a publikus GitHub-repóba.
- CI-zöld + Pages deployment + képernyőképes Safari/desktop ellenőrzés kell a végleges QA-lezáráshoz.

## 2026-11-21 — SVG art-direction és hiteles portré kiegészítés

- Alexandra arcképe a RAW Materials Trade csapatfotó-fájljából **bitazonosan átvett eredeti fotó**, nem új AI-képmás.
- Nyolc új, szerkesztői SVG motívum született a nyomdai PDF-ek vizuális részleteiből, de nem pontos vektoros másolatként; a nyomdai források nem nyilvánosak.
- Négy nyelven azonos képi szerkezet, 48/48 közös `catalog.css?v=8`; mobil és desktop QA, reduced-motion támogatás, nincs overflow.
- Képi forrásjegyzék, SVG-pozíciók és a portré eredeti Git-azonosítója: [SVG_MOTION_MANIFEST.md](SVG_MOTION_MANIFEST.md).

## 2026-11-21 — eredeti termékkártya-oldal rendszerének visszaállítása

Az első részletes `Helyed van köztünk` termékoldal (Git-történeti forrás: `ff44da0344406b5bf4131becb94870b04f73381a`, `helyed-van-koztunk.html`) információs szerkezetét használtuk **kötelező, mind a kilenc kiadványra vonatkozó mintaként**. A felépítés: eredeti címet és képet kiemelő hero → tényalapú termékinformáció → **két saját, konkrét fájdalompont és kapcsolódó használható válasz** → részletes, három bekezdésből álló szerkesztői történet → 3 tényszerű jellemző és kiemelt mondat → ahol valódi eredeti képek állnak rendelkezésre, kiegészítő galéria → e-mailes előrendeléshez és katalógushoz vezető navigáció. Nem kezelési, terápiás, egészségügyi vagy gyógyulási ígéret.

**Katalógus:** a kilenc termékkártya mindegyike 4 nyelven kibővült tartalmi ajánlóval és két kiemelt ténnyel. A 3 lenyitható kategória, a tényleges termékfotók, a mélyzöld CTA-k és az e-mailes előrendelési folyamat megmaradnak. A katalógus ovális képkeretének `overflow:hidden` hibája miatt az eredeti képaláírás szövege levágódott: a `figcaption` most az ovális `.fep-hero-art` **alatt, a levágási tartományon kívül** található, `figure` szülővel és külön CSS-sel. A címke nem lóghat ki vagy tűnhet el 320–1440 px között.

**Négy nyelv és forrásfegyelem:** HU/EN/DE/FR = 36 részletes termékoldal, 36 kibővített katalóguskártya és 72 saját probléma–válasz panel. Tényleges, felhasználó által átadott PDF-ek alapján állítások: `Egy kis tér` 24 helyzet/3 példa/6 munkalap; `Helyed van köztünk` 36 kártya, külön 16-paneles segítő harmonika; `Lépésről lépésre` 200 oldal; katolikus napló 30 nap/84 oldal; mesekönyv 42 ország/131 oldal; színező 42 lap; `Na, most mit csináljak?` 32 történet/139 oldal/8–11 év. A tanári tervező két borítóváltozata azonos belső tartalmat jelent.

**Képek és szerkesztői igazság:** az eredeti kártyacsomag fotóit kiegészítő galériában is megmutatjuk, a többi, fizikai termékként még le nem fényképezett borítót *digitális borítólátványként*, nem kész nyomtatvány fotójaként nevezzük meg. A korábbi, minden terméknél ismétlődő technológiai/átláthatósági reklámblokk eltűnt. A publikus oldalakon a hangsúly Alexandra személyén, a kiadványok tartalmán és hasznán van. Az eredeti kéziratban szereplő szerkesztési proveniencia tényét **belső forrásnyilvántartásban** meg kell őrizni; a képeket sem lehet késztermékfotóként hamisan bemutatni. A felhasználói termékbemutatóban nincs technológiai reklám.

**Kötelező vizuális követelmény:** `catalog.css?v=10`, 48/48 HTML-paritás, 9/9 termék részletes, 3/3 kategória, 4/4 nyelvi horgonyok, sötétzöld gombok szimmetrikus paddinggal, nincs vízszintes overflow, nincs levágott képaláírás, SVG-k és a valódi Alexandra-portré megmaradnak. A `#preorder` horgony a valós előrendelési blokkra visz. CI + Chromium/WebKit screenshot + Pages SHA + production reverse audit szükséges.

