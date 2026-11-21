# FOR EVERY PATH / DIÓFA MŰHELY — AZ OLDAL TELJES RENDSZERDOKUMENTÁCIÓJA

> **Master documentation · magyar · 2026-11-21**  
> **Repository:** [`880rzz/newvibe`](https://github.com/880rzz/newvibe)  
> **Utolsó vizuális hibajelzés előtti production commit:** `3927d02e319f7a8f08cbd00a1fc4d2cc55ded669`  
> **Jelenlegi kanonikus host:** https://880rzz.github.io/newvibe/  
> **Tervezett, még be nem kötött domain:** `foreverypath.com`  
> **Nyelvek:** angol (EN), magyar (HU), német (DE), francia (FR)  
> **Alkotó / kiadói kapcsolattartó:** Sajbán-Frőhner Alexandra  
> **E-mailes előrendelési kapcsolat:** `diofamuhelykozosseg@gmail.com`  
> **Termékszám:** 9 kiadványváltozat · **Indexelhető lokalizált oldalak:** 48 (4 × 12)  
> **Állapotbesorolás:** a #17 kiadás a sötét CTA-kat, fejlécet és kártyadizájnt forrásszinten javította; az újabb 2026-11-21-i képernyőképek alapján további CTA-szimmetria, lábléc és első személyű alkotói szöveg javítás készült. Valódi mobil/desktop vizuális QA és az Impresszum jogi teljességének ellenőrzése továbbra is külön kapu.

Ez a fájl a weboldal **egyetlen átfogó, emberi és fejlesztői eligazító dokumentuma**. A pontos gépi termékadatok kanonikus forrása továbbra is a `catalog.json`, a 30 kérdés tényleges szövegének és válaszainak kanonikus forrása a `checkin-bank.js`, a megjelenített nyelvi szövegeké pedig a megfelelő HTML és JS. A dokumentum ezek használatát, egymás közötti szerződését és működését rögzíti, **nem írja felül őket**.

---

## 1. Az oldal lényege – egy mondatban

A **For Every Path** Sajbán-Frőhner Alexandra önálló, magyar nyelvű kreatív és reflektív kiadványainak négynyelvű bemutatkozó és katalógusoldala. A **Diófa Műhely** a kiadványok mögötti alkotói műhelyvilág: beszélgetőkártyák, naplók, tervezők, mesék és közös alkotásra hívó füzetek a hétköznapok konkrét nehézségeihez.

**Nem** egészségügyi szolgáltatás, pszichológiai diagnosztikai oldal, működő webshop vagy önállóan igazolt jogi társaság.

### Kiknek szól?

- Felnőtteknek, akik szeretnének szavakat találni a saját érzéseikhez, feladataikhoz vagy határaikhoz.
- Szülőknek, nevelőknek és gyerekekkel foglalkozóknak, akik beszélgetéshez keresnek kapaszkodót.
- ADHD-val élő vagy strukturálási nehézségekkel dolgozó felnőtteknek – a tervező használati segédlet, nem kezelés.
- Pedagógusoknak, akik átláthatóbb tanévszervezést szeretnének.
- Magyarul olvasó családoknak, akik meséket, színezést, játékos alkotást keresnek.
- Katolikus személyes elmélyülés iránt érdeklődő olvasóknak – intézményi egyházi jóváhagyás állítása nélkül.

### Fő felhasználói döntés

Az első képernyőn a látogató tudja megválaszolni:

1. Ki készíti ezeket? – **Sajbán-Frőhner Alexandra / Diófa Műhely**.
2. Milyen tartalom ez? – **kártyák, naplók, tervezők, történetek**.
3. Milyen helyzetben segíthet? – **nehezen kimondható dolgok, túl sok teendő, első lépések, közös beszélgetés és alkotás**.
4. Mit csinálhat most? – **„Hogy vagy?”**, vagy **„A kiadványok”**.

Az öt másodperces érthetőség **dizájncél**, nem eddig mért felhasználói kutatási eredmény.

---

## 2. Márkastruktúra, szerzőség és megnevezések

| Megnevezés | Szerep | Mit nem szabad állítani? |
| --- | --- | --- |
| **For Every Path** | A teljes weboldal és gyűjtemény gyűjtőidentitása | Nem bizonyított önálló cég / bejegyzett társaság |
| **Diófa Műhely** | Az alkotói, szerkesztői és kiadványműhely megjelölése | Nem automatikusan külön jogi vállalkozás |
| **Sajbán-Frőhner Alexandra** | Az oldal névvel azonosított alkotója, kiadói kapcsolattartója | Nem helyettesíti az esetleges kötelező vállalkozói/jogi azonosítókat |
| **NewVibe** | Korábbi projekt-/repoelnevezés és technikai örökség | Nem önálló jelenlegi webshop vagy második publikációs márka |
| **helloitsme** | Másik GitHub-projekt; a biztonságos kérdéssorsolási elv technikai inspirációja | Nem tartalmi társszerző, nem átvett értelmezési rendszer |

**Kommunikációs alapelv:** személyes, megfigyelő, konkrét, olykor játékos hang. A magyar szöveg Alexandra kiadványainak közvetlen, nem reklámszerű világát idézi, szó szerinti hosszú kéziratrészletek közlése nélkül. Nem használható túlzó gyógyulási, nevelési vagy szakmai eredményígéret.

**Kiadói státusz:** a készítő 2026-11-21-én megerősítette, hogy a **kilenc kiadványváltozat végleges, szakmailag jóváhagyott tartalommal** rendelkezik. A korábbi forrásállományokban szereplő „lektorálásra vár” státusz nem kommunikálható aktuális állapotként. A szakmai tartalmi jóváhagyás **különbözik** a fizikai készlettől, a webshop indulásától, a felhasználási jogok igazolásától és a hivatalos intézményi támogatástól.

---

## 3. Információarchitektúra, oldaltípusok és URL-ek

**Kanonikus bázis:** `https://880rzz.github.io/newvibe/`.

| Oldaltípus | EN | HU | DE | FR |
| --- | --- | --- | --- | --- |
| Kezdőlap | `/` | `/hu/` | `/de/` | `/fr/` |
| Katalógus | `/catalog/` | `/hu/catalog/` | `/de/catalog/` | `/fr/catalog/` |
| Alkotói / AI-átláthatóság | `/about/` | `/hu/about/` | `/de/about/` | `/fr/about/` |
| Kilenc termék részletei | `/products/{slug}.html` | `/hu/products/{slug}.html` | `/de/products/{slug}.html` | `/fr/products/{slug}.html` |

A fenti táblában minden elérési út a kanonikus bázishoz értendő. **12 oldal × 4 nyelv = 48 lokalizált, sitemapben szereplő oldal.** Emellett a gyökérben létező `helyed-van-koztunk.html` egy **örökölt**, `noindex` jelölésű, kanonikus HU termékoldalra hivatkozó útvonal. A `sitemap.xml` az új 48 URL-t tartalmazza.

### Kezdőlap – kötelező tartalmi sorrend

1. **Hero:** alkotó és műhely neve, konkrét hétköznapi fájdalompont, kiadványfajták, két rövid CTA.
2. **„Hogy vagy?”:** a 30 kérdésből kiválasztott 6 kérdéses, helyben működő önreflexiós élmény.
3. **Egyetlen katalógus-átvezetés:** szerkesztői mondat + link a teljes kiadványkínálathoz; **nem** második kilenctermékes rács.
4. **Rövid alkotói szekció:** Alexandra és a szerkesztői/AI-átláthatósági oldal.
5. **Lábléc:** márka/műhely, kapcsolat, alapvető tájékozódás, vissza az elejére.

**Magyar H1 – aktuális jóváhagyott szöveg:**

> Amikor a szavak nehezen jönnek, a teendők meg csak gyűlnek.

**A magyar hero értékajánlata:** Alexandra beszélgetőkártyákat, naplókat, tervezőket és történeteket készít gyerekeknek és felnőtteknek, olyan helyzetekre, amikor nehéz beszélni valamiről, elkezdeni egy feladatot vagy időt találni magunkra. Nem ír elő megoldást; kérdést, üres lapot vagy történetet ad az elinduláshoz.

**Magyar katalógus-átvezető:**

> Egy kérdésből néha egy egész történet lesz.

### Katalógusoldalak

- Nyelvenként mind a **kilenc kiadványváltozat** látható egy helyen.
- A látogató látja az eredeti magyar címet, egy rövid lokalizált leírást, a **fizikai termék nyelvét (magyar)**, az előrendelési állapotot és a továbbvezető linkeket.
- Katalóguskártya → megfelelő nyelvű termékoldal → termékre szabott e-mailes előrendelés.
- A katalógusból közvetlenül elérhető a saját nyelvi kezdőlap `#quiz` szakasza.

### Termékoldalak

Mindegyik termékoldal célja a következők tisztázása: mi ez, kinek szól, mit tartalmaz, hogyan használható, hogyan küldhető előrendelési igény, és mi a kép vagy a forrás valódi státusza. Az oldalakat `Product` típusú, kizárólag ellenőrzött mezőkből álló struktúrált adat egészíti ki.

### About / Editorial & AI Trust

Alkotói személyazonosítás, a Diófa Műhely megnevezése, szerkesztői státusz, az AI-közreműködés és a képforrások tényszerű leírása, előrendelési korlátok és kapcsolat. Az oldal ne váljon fiktív cégbemutatóvá vagy bizonyítatlan jogi megfelelőségi nyilatkozattá.

---

### 2026-11-21: eredeti dizájn visszaállítása és három termékkategória

Az oldalt a korábbi **végtelen jel alakú emblémás fejléc** és teljes képernyős, hamburgeres navigáció jellemzi ismét. A menüben a **Termékek** pont lenyílik. A három kategória a `catalog.json`-ban is kanonikus adatként szerepel:

1. **Naplók és tervezők** (`naplok-tervezok`): ADHD-tervező, két tanári határidőnapló-borító és katolikus imanapló (4 kiadványváltozat).
2. **Beszélgetés és önreflexió** (`segito-onreflexio`): Helyed van köztünk; Egy kis tér (2 kiadvány).
3. **Mesék és foglalkoztatók** (`mesek-foglalkoztatok`): Mesék a világ körül; 42 színező; Na, most mit csináljak? (3 kiadvány).

A **Hogy vagy?** önreflexiós webes élmény, **nem tizedik termék**, ezért önálló menüpont a kezdőlapon, és nem a termékkatalógus egyik kategóriája. Az animált füzet, vonalrajz és forgatható gondolatkártyák forrása visszakerült, de a 2026-11-21-i iPhone-képernyőképek további vizuális hibákat igazoltak: a mobilkártyák nem fedhetik egymást, és a régi árnyékok/mozgó SVG-k is elvárások. A valódi kattintási célú gombok **nyíl nélkül** jelennek meg; a puszta szöveges linkek megtarthatják az SVG nyilat.

Alexandra profiljának szerkesztői referenciája az **Egy kis tér** című kiadvány 2. oldali személyes bevezetője: szeret gyerekekkel foglalkozni, segíteni, szervezni, és maga is foglalkozik a saját határok kijelölésével. A 2026-11-21-i tájékoztatás szerint a vállalkozás alapítása folyamatban van. A közönségnek szánt oldalon nem szerepelhet igazolatlan cégadat, sem az alkotót lekicsinylő, „nem létező cég” típusú megfogalmazás.

## 4. A kiadványok – teljes jelenlegi katalógus

**A termékek mindegyike magyar nyelvű eredeti kiadvány.** Az angol, német és francia webes ismertetők **nem** jelentenek idegen nyelvű nyomtatott kiadást.

| # | Eredeti magyar cím / termékváltozat | Felhasználói szükséglet, tartalom | Forrásból ismert paraméter | Kép |
| --- | --- | --- | --- | --- |
| 1 | **Helyed van köztünk** | Bántalmazásról, kiközösítésről beszélgetés; szavak és segítségkérési kapaszkodók | 36 kétoldalas kártya, 63 × 88 mm; külön 16 paneles segítő harmonikaforrás | **Valódi termékfotó** |
| 2 | **Egy kis tér** | Felnőtt önreflexió, határok, túlterheltség, megfogalmazatlan érzések | 72 oldal, 24 hétköznapi helyzet | **Digitális látványterv** |
| 3 | **Lépésről lépésre · 2027** | ADHD-hoz kapcsolódó tervezés és hétköznapi rendszerezés felnőtteknek | 200 oldalas 2027-es tervező | **Digitális látványterv** |
| 4 | **Határidőnapló tanároknak · 2027 — színes** | Tanévi szervezés pedagógusoknak | 156 oldal; színes borítóváltozat | **Digitális látványterv** |
| 5 | **Határidőnapló tanároknak · 2027 — letisztult** | Ugyanazon kiadvány másik borítóváltozata | 156 oldal; letisztult borítóváltozat | **Digitális látványterv** |
| 6 | **Veled a mindennapokban** | Személyes katolikus ima, elmélkedés, írás | A5, 84 oldal, 30 napos szerkezet | **Digitális/AI-látványterv** |
| 7 | **Mesék a világ körül** | Mesék és történetek segítségével közös olvasás | A4, 131 oldal, 42 országhoz kapcsolódó történet | **Szerkesztői SVG-mockup** |
| 8 | **Mesék a világ körül – 42 színező** | A mese világának közös, alkotó folytatása | A4, 42 színezőlap | **Szerkesztői SVG-mockup** |
| 9 | **Na, most mit csináljak?** | Gyerekekkel közös beszélgetés és alkotófeladatok | A4, 139 oldal, 32 történet/feladat, 8–11 évesek | **Szerkesztői SVG-mockup** |

### A 9 termék azonosítói

Az alábbi `slug`-ok mindegyike `products/{slug}.html` alakban él mind a négy nyelvi útvonalon:

```text
helyed-van-koztunk
egy-kis-ter
lepesrol-lepesre-2027
tanari-hataridonaplo-2027-szines
tanari-hataridonaplo-2027-letisztult
veled-a-mindennapokban
mesek-a-vilag-korul
mesek-a-vilag-korul-szinezo
na-most-mit-csinaljak
```

A két tanári határidőnapló **borítóváltozat**, nem két eltérő tartalmú füzet. A `Helyed van köztünk` 16 paneles harmonikája **külön nyomdai forrás**, ezért külön kiadói megerősítés nélkül nem nevezhető automatikusan minden megvásárolható csomag fizikai tartozékának.

A `Mesék a világ körül` olvasókönyv és színező esetében a `catalog.json` külön mezőben kezeli a **kereskedelmi felhasználási dokumentációt**. A kiadványok szakmailag jóváhagyottak; a jogszerű értékesítés és az egyedi teljesítési feltételek ettől függetlenül kezelendők. A korábbi, szakmai lektorálásra váró megjegyzések nem visszavezethetők aktuális termékstátuszként.

**Lényeges terminológia:** `editorial_status` (tartalom jóváhagyása), `production_status` (fizikai/gyártási forrás), `image_provenance` (kép valódi eredete), `rights_status` (licenc/dokumentáció) és `preorder_request` (ügyfélmegkeresés) **öt külön dolog**. Nem vonhatók össze egyetlen „kapható / nem kapható” badge-dzsé.

---

## 5. Előrendelés – jelenlegi üzleti működés

**Működő csatorna:** termékspecifikus `mailto:` link a `diofamuhelykozosseg@gmail.com` címre.

**Jelenlegi szabályok:**

1. Mind a kilenc termékhez érkezhet e-mailes **előrendelési igény**.
2. A levél tárgya és szövege tartalmazza az adott kiadványt; a termékkapcsolatot a négy nyelvi változatban meg kell őrizni.
3. A beküldött e-mail **nem** azonos visszaigazolt vásárlással vagy készletfoglalással.
4. **Nincs online pénztár, kosár, webes fizetés vagy megadott termékár.** A `shop_url` és `price` jelenleg `null` a nyilvántartásban.
5. Az árat, a fizetést, a várható elérhetőséget, a szállítást és a jogszerű teljesítési feltételeket egyedileg egyeztetik.
6. Az oldal ne kérjen e-mailben bankkártyaadatokat, és ne sugalljon automatikus rendelés-visszaigazolást.

A termékoldal és a katalógus szövegei a fenti pontos jelentést hordozzák EN/HU/DE/FR nyelven. A kezdőlapon nem kell mind a kilenc előrendelési gombot újra megjeleníteni – onnan a katalógusba vezetünk.

**Ha később webshop indul:** csak akkor állítható be valós `shop_url`, `price`, strukturált `Offer`, fizetési vagy szállítási ígéret, ha az üzleti és jogi feltételek igazoltak, a rendelési folyamat valóban tesztelt, és mind a négy nyelvi felület egyezik.

---

## 6. „Hogy vagy?” – a teljes funkcionális szerződés

**Cél:** önkéntes, felnőtteknek szóló, nem diagnosztikai önreflexió. A kérdéssor nem személyiségteszt, nem klinikai mérőeszköz, nem AI-beszélgetés és nem személyre szabott egészségügyi tanácsadás.

**Kanonikus kérdésbank:** `checkin-bank.js`

- `q01`–`q30`: **30 azonos kérdésazonosító**, minden nyelven azonos szerkezetben.
- A négy nyelv kérdései **azonos tematikájúak**, nyelvenként természetesen megfogalmazva.
- Minden kérdéshez **pontosan négy válasz** tartozik, egyező értelmezési sorrenddel.
- A `drawSix(language)` minden új indításkor **hat különböző** kérdést választ a harmincból.
- A rendszer a `crypto.getRandomValues`, elutasításos mintavétel és részleges Fisher–Yates keverés módszerét használja, torzítatlan visszatevés nélküli kiválasztáshoz.
- Külön kitöltések között azonos kérdés **újra kisorsolható**. Ez helyes működés, nem ismétlődési hiba.
- A kérdésbank lényegi adatstruktúráját és teljes, négy nyelvű szövegét nem duplikáljuk ebbe a dokumentumba: a `checkin-bank.js` az egyetlen karbantartott forrás.

**Kijelzés és eredménylogika:** `app.js`

1. A látogató a saját nyelvi kezdőlap `#quiz` szakaszán kattint az indításra.
2. Kérdésenként 4 válasz jelenik meg, **1/6–6/6** haladásjelzővel.
3. A „Vissza” gomb az előző kérdésre lép és visszavonja a már beszámított választ.
4. A négy válasz négy laza, szerkesztői reflexiós iránynak felel meg:
   - sok felelősség és teher;
   - következő kis lépés, elindulás;
   - saját tér, pihenés;
   - kimondandó gondolat, beszélgetés.
5. A hat válasz után a legnagyobb pontszámú irány adhat **gondolatindítót**. Döntetlennél semleges, több témát megengedő szöveg jelenik meg.
6. Az eredmény nem címkézi és nem diagnosztizálja a látogatót.
7. Opcionális út vezet az **Egy kis tér** munkafüzethez vagy a **teljes katalógushoz**; ez nem automatikus diagnózis-alapú ajánlás.
8. A „Másik hat kérdés” új, véletlenszerű hatost indít és lenullázza az előző válaszokat.

**Adatkezelési szerződés:** a kérdésválaszok és az eredmény **csak az aktuális kliensoldali interakcióban élnek**, nem kerülnek fel szerverre, és nem maradnak tartós tárolásban. A nyelvválasztás technikai preferenciája `fep.language` néven tárolható a böngészőben; ez **nem** tartalmazza a kérdőívre adott válaszokat.

A `helloitsme` repóból kizárólag a biztonságos véletlenszám-kezelési elv került adaptálásra. A kártyalapok, ezoterikus jelentések, korábbi húzások és azok alapján történő értelmezés **nem** részei a For Every Path rendszernek.

**Accessibility:** az új kérdés fókuszálható, a gombok billentyűzettel kezelhetők, a haladás jelölve van. A fókusz, felolvasó és vizuális mozgás valódi böngészős ellenőrzése külön QA-feladat.

---

## 7. Nyelvi működés – HU / EN / DE / FR

A négy nyelv **külön, keresőrobotok számára olvasható URL**, nem ugyanazon oldal nyelvét gyorsan felülíró, indexelhetetlen JavaScript-állapot.

- Az EN a gyökérben van, a HU `/hu/`, DE `/de/`, FR `/fr/` alatt.
- Ha a látogató kifejezetten egy nyelvi URL-t nyit meg, **az URL nyelve elsőbbséget élvez** a böngészőnyelvvel és a korábban elmentett választással szemben.
- A `locale-router.js` támogatja a kifejezett `?lang=hu|en|de|fr` navigációt, de nem írhatja felül magától a kanonikus URL-t.
- Minden oldalon megfelelő `<html lang>`, önmagára mutató canonical és EN/HU/DE/FR + `x-default` hreflang-kapcsolat szükséges.
- A termékslugs azonosak mind a négy nyelven; a termékcím eredeti magyar neve maradhat, **minden más használati, kereskedelmi, navigációs és hozzáférhetőségi szöveg a látogató nyelvén szól**.
- A kezdőlapok felépítése, az interaktív kérdéssor és a katalógus darabszáma egyezzen.
- Ne ígérj idegen nyelvű nyomtatott kiadványt pusztán azért, mert az ismertető négy nyelvű.

**Gyakori regressziók, amelyeket el kell kerülni:** angol „Skip to content” a lokalizált oldalakon; angol „AI & Editorial Trust” fordítás nélkül; különböző FAQ-előrendelési feltételek; eltérő `#quiz` célpontok; helytelen relatív JS/CSS útvonalak; a magyar terméknév téves lefordítása.

---

## 8. Vizuális rendszer és tipográfiai szabályok

### Márkaérzet

Meleg, papíralapú, könnyed és játékos, de nem gyermeteg. Kézzel készített füzetek, naplók és beszélgetőkártyák közös szerkesztőségi világa.

- **Címbetű:** Fraunces, finom serif karakterrel.
- **Törzsszöveg:** DM Sans, világos olvashatósággal.
- **Alappaletta:** papír/krém árnyalatok, sötét tinta, korall, zsályazöld és visszafogott sárga/kék.
- **Méretezés:** `clamp()` és szabályozott térközök; nincsenek értelmetlenül túlméretezett hero-szakaszok.
- **Játékosság:** visszafogott papírlap-kompozíció, finom tipográfiai ritmus, a termékekből következő vizuális motívumok.
- **Korlát:** ne építs újra teljes termékrácsot a kezdőlap aljára.

### 2026-11-21 — kötelező vizuális regressziójavítás (4 nyelv)

**Tény:** a felhasználó iPhone-képernyőképein a CTA-k túl sötétek, a header nem marad látható görgetés közben, fölötte felesleges üres bézs sáv látszik, a három színes gondolatkártya lapos/statikus, és hiányzik róluk a korábbi animált SVG-dekoráció. A zöld CI és sikeres GitHub Pages deployment ezeket **nem** cáfolja.

- **Központi CTA-paletta:** `--fep-cta-primary: #1f4a3d`, hover `#285a48`, világos gombfelirat. A sötét és korall CTA-k az egységes mélyzöld rendszert használják minden lokalizált oldalon. A sima szöveges linkek ne váljanak gombbá; gombon ne legyen dekoratív nyíl.
- **Fejléc:** a `styles.css` rögzített header-szabályát felülírja a `catalog.css` `.fep-page .fep-restored-header {position:relative}` szabálya. A javítás egyetlen `sticky; top:0` rendszerrel, dupla `body` felső padding nélkül működjön. A mobil hero a fejléc után kezdődjön, túlméretezett üres sáv nélkül.
- **Kártyák:** mindhárom korall/kék/sárga valódi gomb marad; rétegzett papírárnyék, enyhe dőlés, mély tintazöld szöveg, folyamatos finom lebegés, dekoratív SVG-vonalak/pontok animációja desktopon **és mobilon**; nincs egymásra csúszás. Kattintásra és érintésre a hátoldalra fordulás működik; `prefers-reduced-motion` alatt nincs díszítő animáció.
- **Rendszerszintű paritás:** a közös `catalog.css` az egyetlen dizájnforrás; mind a 48 HTML-lokalizáció ugyanazt a friss CSS-cache-verziót használja. A menü, a kilenc termék, az e-mailes előrendelés és a 30/6 „Hogy vagy?” teszt érintetlen marad.
- **Release-gate:** forrásellenőrzés + GitHub CI + Pages SHA-egyezés mellett iPhone Safari és asztali megjelenítésről screenshot/videó szükséges. Enélkül a kiadás állapota `CI-VERIFIED / VISUAL-QA-PENDING`.

**Végrehajtási leírás:** [`VISUAL_REMEDIATION_2026-11-21.md`](VISUAL_REMEDIATION_2026-11-21.md).
### 2026-11-21 — CTA-szimmetria, szöveges lábléc, első személyű alkotói hang és Impresszum

A következő iPhone-képernyőképek szerint a főoldali másodlagos CTA-n a szöveg túl közel került a gomb széléhez. **Központi kötelező szabály:** minden főoldali gomb egyenlő bal és jobb belső térközt kap (26 px, keskeny mobilon 24 px), `width:max-content; max-width:100%`, és hosszú fordításnál természetes sortörés. A mélyzöld gombszín megmarad.

**A footer nem CTA-zóna.** Mind a 48 lokalizált oldalon csak szerkesztői szöveges hivatkozások szerepelnek: Impresszum/Imprint/Impressum/Mentions légales, Hogyan készült?, Kapcsolat és a diszkrét vissza-a-tetejére SVG link. A footerben `.button` osztályú gomb nem lehet, a linkek mobilon sem lóghatnak ki.

**Az első személyű Alexandra-hang kéziratos forrása:** az `Egy kis tér` 2026-11-19-i kéziratának 2. oldali személyes bevezetője: gyermekekkel foglalkozás, segítés, szervezés, túl gyors igenek, saját határok, segítségkérés. Az alkotói és „Hogyan készültek?” szakaszban mind a négy nyelven Alexandra beszél, nem egy külső márkaírótól kapott harmadik személyű szöveg. A 3. oldal megkülönbözteti a szerző személyes élményeinek szerkesztett változatait a szemléltető kitalált példáktól, és jelöli az AI-közreműködést. A `Helyed van köztünk` segítő harmonika gyermekvédelmi beszélgetési anyag és a 30 napos `Veled a mindennapokban` imanapló további hiteles tartalmi kontextus. A korábbi kéziratban még nem igazolt független lektorálás vagy klinikai hatásosság nem azonos a készítő későbbi kiadói tájékoztatásával.

**Impresszum:** négy `about/#impressum` horgony, mindegyiken csak megerősített alkotói név, műhelynév és e-mail. Nem lehet kitalált székhely, adószám, nyilvántartási vagy cégazonosító; a jogilag kötelező adatok teljessége igazolás és jogi ellenőrzés után zárható. Az oldal továbbra sem online pénztár.

**QA:** `scripts/visual-design-smoke.cjs` őrizze a 48/48 CSS-paritást, Impresszum/hogyan-készült horgonyokat, a gombmentes footert és a szimmetrikus CTA-t. Valós mobil Safari és desktop vizuális ellenőrzés nélkül nincs teljes vizuális jóváhagyás.
### Képek

- **Álló könyv-/füzetborító:** a katalóguskártyán 4:5 arányhoz illesztett képkeret, a teljes borító látható.
- **Helyed van köztünk:** valódi termékfotó; a kártyakép négyzetes megjelenítése külön `1:1` kivétel.
- **Borítólátvány:** `object-fit: contain`, de arányhelyes konténerrel, mesterséges kétoldali „üres plakátsáv” nélkül; a borító felirata nem vágható le.
- **Eredet:** AI-/digitális koncepciót nem szabad valódi termékfotónak nevezni.
- A termékfotó-archívum (`newvibe-termekfotok.zip`) létező, a repóban található fájl; ez **nem** engedély forrás-PDF-ek vagy nyomdai kéziratok ZIP-be csomagolására.

### Linkek és nyilak

- Szöveges szerkesztői linkek **aláhúzás nélkül**, a végükön következetes SVG-nyíllal.
- A nyelvváltók rövid EN/HU/DE/FR elemei megkülönböztethetők **nyíl nélkül**.
- A linkek fókuszának billentyűzetről láthatónak kell maradnia; az aláhúzás mellőzése nem adhat okot a hozzáférhetőség gyengítésére.
- A „vissza a tetejére” ikon **SVG**, nem szöveges Unicode-nyíl.

### Responsív mérési pontok

`320`, `390`, `768`, `1024`, `1440`, `1920`, `2560` px; szükség szerint 4K. Ne legyen oldalirányú túlcsordulás, levágott borítófelirat, elrontott hosszú német/francia címsor vagy takart CTA. A CSS-logika forráskódban megléte még **nem bizonyít** pixelpontos eredményt.

---

## 9. Programozási architektúra – melyik fájl mire való?

| Fájl / könyvtár | Valódi feladat |
| --- | --- |
| `index.html`, `hu/index.html`, `de/index.html`, `fr/index.html` | Négy szerkesztői főoldal, egyező hero–quiz–katalógusátvezetés–alkotó sorrend |
| `catalog/index.html` és három nyelvi párja | Kilenc terméket listázó katalógusok |
| `products/{slug}.html` és három nyelvi párjuk | 36 lokalizált termékoldal |
| `about/index.html` és három nyelvi párja | Szerzői/provenance/AI Trust tájékoztatás |
| `catalog.json` | Termékazonosítók, képek, forrásnyelv, jóváhagyás, jogállás, gyártás és előrendelési státusz **kanonikus gépi nyilvántartása** |
| `checkin-bank.js` | 30×4 kérdés és négyválaszos struktúra; kriptográfiai 6-kérdéses sorsolás |
| `app.js` | Az egyes kezdőlapokon megjelenő `Hogy vagy?` interaktív kérdéssor és eredménylogika |
| `locale-router.js` | Kifejezett nyelvváltás, az URL-nyelv elsőbbsége |
| `styles.css` | Alap tipográfia, színtokenek, közös komponensek és örökölt CSS |
| `catalog.css` | A jelenlegi katalógus, főoldal, termékoldalak és SVG-linkek részletes vizuális szabályai |
| `product.js` | Örökölt kártyacsomag-oldal és kapcsolódó régebbi nyelvi/logikai elemek |
| `assets/` | Publikálható JPG/WebP/SVG-képek és grafikai eszközök |
| `sitemap.xml` | A 48 kanonikus lokalizált URL és alternatív nyelvi kapcsolatok |
| `robots.txt` | Crawler-hozzáférés és sitemap hivatkozás |
| `llms.txt`, `ai.txt` | Gépi/AI-fogyasztók számára nyilvános, ellenőrizhető márka- és terméktények |
| `.github/workflows/quality.yml` | Automatizált minőségellenőrzés és tiltott privát források kapuja |
| `scripts/locale-smoke.cjs` | Nyelvi útvonalak és explicit URL-preferencia tesztje |
| `scripts/checkin-smoke.cjs` | 30/6 kérdésbank, véletlenszerűség, nyelvi paritás tesztje |
| `scripts/home-ux-smoke.cjs` | Kezdőlapi kérdéssor indítás, visszalépés, eredmény, újraindítás, négy nyelven |
| `docs/NEW_PRODUCT_PLAYBOOK.md` | Új termék felvitelének részletes műveleti kézikönyve |
| `docs/HOGY_VAGY_30_QUESTION_SYSTEM.md` | A kérdőív külön technikai és tartalmi kézikönyve |
| `docs/FOUR_LANGUAGE_UX_RELEASE.md` | A négy nyelvű öt másodperces UX-szerkezet kiadási szerződése |
| `docs/SITE_EDITORIAL_UX_AUDIT_2026-11-21.md` | A korábbi forrásalapú tartalmi és UX-audit |
| **`docs/SITE_MASTER.md`** | **Ez a master dokumentum: a teljes rendszer áttekintése és változtatási szabályzata** |

A site jelenleg statikus HTML/CSS/JavaScript + GitHub Pages alapú, külön webalkalmazás-framework és szerveroldali checkout nélkül. **A `catalog.json` nem generálja automatikusan a 36 termékoldalt.** Termékváltoztatáskor a JSON és az érintett HTML, sitemap, strukturált adatok és ellenőrzések együttes frissítése szükséges.

---

## 10. SEO, AEO, GEO, Schema, LLM és E-E-A-T

### Keresők számára

- Minden kanonikus oldalon saját nyelvi `<html lang>`, self-canonical, négy nyelvi hreflang + `x-default`.
- `sitemap.xml`: **48 URL**, a megfelelő nyelvi párkapcsolatokkal; `robots.txt` megjelöli a sitemapet.
- A kezdőlap, katalógus, about és minden termékoldal **eltérő keresési szándékot** szolgáljon ki: márkamegértés → választás → konkrét termék → bizalmi információ.
- `title`, leírás, egy H1, természetes H2-hierarchia, képalternatívák és belső linkek legyenek egységesek.
- Az EN/HU/DE/FR információ magyar nyomtatott kiadványokra vonatkozik; ne hozz létre kitalált angol, német vagy francia fizikai változatot.

### Strukturált adatok

A jelenlegi oldal a forrásoknak megfelelő **Person, Brand, WebSite, WebPage és Product** objektumokat használhatja, a tényleges HTML-ben jelenlévő és igazolt tulajdonságokkal. `Organization`, `LocalBusiness`, termékár/`Offer`, `AggregateRating`, készlet, intézményi jóváhagyás, szakmai végzettség vagy ügyfélértékelés nem található ki.

A stabil entitások kapcsolata:

```text
Sajbán-Frőhner Alexandra (Person)
          │ alkotó, kapcsolattartó
          ▼
For Every Path (WebSite / Brand)
          │ szerkesztői és katalógusfelület
          ▼
Diófa Műhely kiadványok (Product / CreativeWork, ellenőrzött tartalom)
```

A Diófa Műhely **alkotói műhelymegjelölés**, nem bizonyított bejegyzett társaság. Az esetleges későbbi jogi entitást kizárólag valódi adattal, külön jóváhagyás után szabad bevezetni.

### AEO / LLM / GEO értelmezhetőség

A legfontosabb kérdésekre a látható oldal röviden és géppel is azonosan feleljen: ki készítette, kinek való, hány oldal/kártya, milyen nyelvű a nyomtatott kiadvány, hogyan lehet érdeklődni, milyen képet látunk, van-e tényleges ár/webshop. A `llms.txt` és `ai.txt` **nem írhat erősebb állítást** a nyilvános oldalnál.

Az E-E-A-T / AI Trust itt **névvel vállalt alkotást, forráskövetést, őszinte képeredetet és ellenőrizhető szerkesztői állapotot** jelent, nem kitalált szervezeti tekintélyt.

---

## 11. GDPR, adatvédelem, AI Trust és jogi kommunikáció

**A forrásból ismert működés:**

- A kérdéssorhoz nem kell név, e-mail vagy profil; nincs beküldő API, és a válaszokat a rendszer nem menti.
- A nyelvválasztás a böngészőben helyileg eltárolható.
- Az előrendeléshez a felhasználó **saját levelezőprogramja** nyílik meg, amelynek feldolgozását és tárolását az e-mailes rendelésfelvételi folyamat szerint külön kell dokumentálni.
- Az oldal egyes betűkészleteit külső Google Fonts szolgáltatásról tölti le; ennek adatvédelmi, teljesítmény- és esetleges EU-s jogi értékelése **külön tétel**, nem automatikusan igazolt megfelelés.
- Egyes képek/szerkesztői részek AI-segítséggel készültek; a kiadó szakmailag jóváhagyott végleges kiadványként kezeli őket, de ebből nem következik orvosi, pedagógiai vagy egyházi hatásigazolás.

**Nem állítható:** a teljes GDPR-megfelelés jogi tanúsítása, hivatalos egyházi imprimatur, ADHD-terápia, gyógyhatás, garantált érzelmi eredmény, fiktív licenc, igazolatlan nyomtatott készlet vagy fizetett webshopmegrendelés.

**A webshop indításának külön jogi kapui:** üzemeltető/vállalkozói adatok, fogyasztóvédelmi tájékoztatás, szerződési feltételek, elállási szabályok ahol alkalmazhatók, adatkezelés és e-mailes megkeresések kezelése, fizetési szolgáltatók, szállítás és dokumentált jogosultságok.

---

## 12. A forrásdokumentumok és a PDF-ek védelme

**Kritikus, változtathatatlan elv:** a teljes eredeti kézirat, nyomdai PDF, jogi igazolás vagy magánforrás **nem tölthető fel a publikus repóba**. A felhasználó által rendelkezésre bocsátott tíz PDF a korábbi audit forrása volt; kizárólag a közzétehető leíró tények és megengedett, illetve külön létrehozott szerkesztői képek használhatók.

A `.github/workflows/quality.yml` a tiltott PDF/privát nyomdai forrásokat **fájlnév és tartalom szerint**, valamint ZIP-archívumba rejtve is ellenőrzi. Ezt új fejlesztés során **soha nem szabad eltávolítani vagy gyengíteni**.

A 2026-11-21-i ellenőrzött `main` Git-fában **0 db `.pdf`** szerepelt. A `newvibe-termekfotok.zip` létező termékfotóarchívum, nem újonnan feltöltött kézirat. A zöld CI alapján a tiltókapu a legutóbbi tesztben sikeres volt; ez nem jelenti azt, hogy bárki feltölthetne később privát nyomdai tartalmat.

Ha az új termékből csak nyomdai fájl áll rendelkezésre, készíts külön, helyesen megjelölt **publikálható borítóképet/látványtervet**; a nyomdai forrásnak a privát munkatérben kell maradnia.

---

## 13. Új termék, új fordítás vagy szövegmódosítás – változtatási protokoll

### Új kiadvány felvitele

1. **Forrásvizsgálat:** cím, szerző, célcsoport, eredeti nyelv, oldalszám, méret, tartalom, illusztráció, jogosultságok, állapot, jóváhagyás; hiányzó tényt nem szabad kitalálni.
2. **Kanonikus `catalog.json` új bejegyzés:** stabil ID/slug, `original_language`, `image_path`, `image_provenance`, önálló `editorial_status`/`production_status`/`rights_status`, e-mailes előrendelési szerződés, `shop_url: null` és `price: null` amíg nincs igazolt webshop.
3. **Négy termékoldal** `products/{slug}.html`, `hu/products/{slug}.html`, `de/products/{slug}.html`, `fr/products/{slug}.html` — egyező tényekkel, terméknyelvvel, egyedi címmel, metaadatokkal, JSON-LD-vel és előrendelési linkkel.
4. **Négy katalógusoldal:** a megfelelő képpel, natív aránnyal, magyar eredeti címmel, lokalizált rövid leírással és termék-CTA-val. **A kezdőlapra ne kerüljön újabb kilenctermékes rács.**
5. **Sitemap és hreflang:** új URL-ek, önhivatkozó canonical, négy nyelvi pár; a sitemap darabszámát és CI-ellenőrzéseket az új valós oldalszámhoz igazítani.
6. **Gépi réteg:** `llms.txt`, `ai.txt`, ha az új kiadvány a nyilvános AI-érthetőségi tartalmat módosítja.
7. **Vizualitás és forrás:** a termékkép igazolt eredete, nem hamisított fizikai fotó, PDF-kézirat nem commitolható.
8. **PR, CI, élesítés és visszaellenőrzés.**

Részletes eljárás: [`NEW_PRODUCT_PLAYBOOK.md`](NEW_PRODUCT_PLAYBOOK.md).

### Tartalmi szöveg módosítása

- Először döntsd el, **minden nyelven változik-e a jelentés**. Ha igen, mind a négy változatot, kapcsolódó metaadatot és FAQ-t módosítsd.
- A szerző hangját őrizd: konkrét, önazonos, nem reklámszöveg.
- Ne javíts ki szakmai tényeket hipotézis alapján; a kiadó megerősítését különítsd el a publikus dokumentált adatforrástól.
- Ne árulj el teljes eredeti kéziratot, és ne használj új képet felhasználási alap nélkül.

### „Hogy vagy?” módosítása

- A kérdésbankon csak azonos ID-val és válaszsorrenddel dolgozz **mind a négy nyelven**.
- A négy válaszirány és az eredménylogika nem válhat klinikai diagnózissá vagy egészségügyi profilozássá.
- Változtatás után futtasd a `checkin-smoke` és a `home-ux-smoke` tesztet.
- A quiz minden nyelvi kezdőlapon **helyben** működjön, és a katalógusokból az adott nyelven legyen elérhető.

---

## 14. Minőségellenőrzés és élesítési folyamat

### GitHub Actions – `Static site quality`

Az egyetlen fő minőségellenőrző workflow: `.github/workflows/quality.yml`.

A jelenlegi ellenőrzési körök:

1. **Privát nyomdai források kizárása:** PDF-fájlok, tiltott tartalom és ZIP-be rejtett dokumentumok.
2. **JavaScript-szintaxis és működési smoke tesztek:** `app.js`, `checkin-bank.js`, `locale-router.js`, `product.js`, valamint a három `scripts/*.cjs` ellenőrző.
3. **Belső linkek és eszközök:** hivatkozott fájlok, képek, hiányzó helyi útvonalak.
4. **48 lokalizált oldal:** 12/nyelv, kanonikus/hreflang és `sitemap.xml` paritás.
5. **Termékadatok és vizuális eredet:** mind a kilenc termék tényei, képforrása, illusztratív jelölés és nem létező ár/készlet állításainak kizárása.
6. **Előrendelés:** e-mailcím, `mailto` tárgy/szöveg, tényleges megrendelés és fizetés hiánya.
7. **SVG/linkszabályok:** ne legyen puszta Unicode-nyíl vagy elveszett kattintható terméklink.
8. **Négynyelvű öt másodperces kezdőlap-szerkezet:** egy H1, hero → quiz → katalógus → alkotó, terméklista nélkül.
9. **Kérdőív:** 30 különböző kérdés/nyelv, 6 véletlen kérdés, visszalépés és újrakezdés, nem mentett válaszok.

### Release-sorrend

```text
main aktuális SHA
   ↓
feature / docs branch
   ↓
célzott módosítás + lokalizáció + regressziós teszt
   ↓
Pull Request
   ↓
Static site quality: SUCCESS
   ↓
PR merge main ágba
   ↓
GitHub Pages build + deployment: SUCCESS (ugyanazon SHA)
   ↓
élő URL-ek + böngészős render + mobil/desktop visszaellenőrzés
   ↓
kiadás dokumentált lezárása
```

**Állapotnyelv:** zöld CI ≠ sikeres deployment ≠ vizuális vagy felhasználói bizonyíték. Csak azt minősítsd teljesítettnek, amelyet valóban ellenőriztél.

### Konkrét kézi QA

- Négy nyelvi főoldal, katalógus, about és mintatermék közvetlen megnyitása.
- HU/EN/DE/FR útvonalválasztáskor ne történjen akaratlan nyelvváltás.
- A `#quiz` helyben működjön az adott nyelven, a nyelvi CTA-k is helyes célpontra mutassanak.
- Hat kérdés, vissza, újrakezdés, döntetlen, billentyűzet, fókusz, mobil érintés.
- Álló borítók: nincs vágott cím/felirat, nincs indokolatlan kétoldali háttér; négyzetes valódi fotó rendben.
- E-mailes CTA megfelelő terméknévvel nyissa meg a levelezőprogramot.
- Kontraszt, eszközméretek, horizontális túlcsordulás, nagyított böngésző és hosszú DE/FR szövegek.
- Valódi **öt másodperces idegenfelhasználói teszt**: márka, alkotó, termékek célja és következő lépés visszamondható-e.

---

## 15. Infrastruktúra, domain és ismert függőségek

- **GitHub repo / main:** `880rzz/newvibe`; változtatás PR-en keresztül.
- **Éles publikáció:** GitHub Pages, jelenleg `https://880rzz.github.io/newvibe/`.
- **Domain:** `foreverypath.com` tervezett, de ezen dokumentáció időpontjában **nem igazoltan bekötött**; ne hozz létre `CNAME`-et, és ne migráld át a canonical/sitemap URL-eket DNS + TLS + Pages + élő ellenőrzés nélkül.
- **Fizetés:** nincs backend, pénztár, árlista vagy online rendelésfelfogadó adatbázis.
- **Kommunikáció:** jelenleg felhasználó által indított `mailto:` e-mail.
- **Nyelvek:** külön statikus, crawlolható oldalakon.
- **Képek:** publikus `assets/` és egy termékfotó ZIP; privát PDF nincs a Git-fában.
- **Technikai inspiráció:** `880rzz/helloitsme` csak a kérdéssorsolás elve szempontjából.
- **Nincs bizonyítva:** valódi vásárlási konverziós arány, független 5 másodperces usability study, pixelpontos mobil/desktop vizuális QA, Lighthouse 100/100/100/100, teljes körű GDPR-jogi megfelelőség, webshop, készlet.

---

## 16. Nyitott feladatok — aktuális vizuális regressziók és későbbi fejlesztések

A kiadványok szakmai jóváhagyása ettől különálló. A fejléc, CTA-paletta, mobilos felső tér és animált kártyák megjelenítése **aktuálisan javítandó hibák**, nem opcionális későbbi fejlesztések.

| Téma | Mi a következő igazolási/fejlesztési feltétel? |
| --- | --- |
| **Aktuális vizuális regresszió** | Mélyzöld CTA, sticky header, felső térköz, árnyékolt/animált SVG-kártyák javítása és ellenőrzése |
| Valós mobil és desktop vizuális QA | Renderelt képernyőképek és interaktív teszt 320–2560 px tartományban |
| Emberi 5 másodperces érthetőségi próba | Új látogatókkal végzett rövid, dokumentált teszt |
| Webshop/árak | Valós árazás, szerződéses és fogyasztóvédelmi feltételek, készlet/szállítás, tesztelt fizetés |
| Jogi üzemeltető és adatvédelmi információ | Valós jogi/adatkezelési adatok, e-mailes megkeresések és külső betűkészletek elemzése |
| Keresési láthatóság | GSC-indexelés és tényleges organikus/AI forgalom mérése, tényalapú javítás |
| Egyedi domain | DNS, TLS, GitHub Pages, canonical/hreflang/sitemap és átirányítási terv |
| Fizikai termékfotók | Csak igazolt, jó minőségű fotóra cserélt mockup, eredet és licenc megőrzésével |
| Új termékek | Az új kiadványt a termékfelvételi kézikönyv alapján négy nyelven és paritásellenőrzéssel kell hozzáadni |

---

## 17. Tiltott vagy kockázatos változtatások

**Soha ne:**

- tölts fel nyomdai PDF-et, kéziratot, jogi magánforrást vagy annak ZIP-be rejtett változatát;
- írd át a `catalog.json`-t úgy, hogy a négy katalógus és a 36 termékoldal nem követi;
- állíts be termékárat, `Offer`-t, valódi webshopot, készletet vagy fizetést bizonyíték nélkül;
- változtasd a kiadványok szakmai jóváhagyását ismét „review pending” állapotra;
- ígérj angol, német, francia nyomtatott kiadást a lokalizált webes ismertetőből;
- tüntesd el a mockup és a valódi termékfotó közötti különbséget;
- következtess mentális/egészségi vagy vallási státuszra a „Hogy vagy?” válaszaiból;
- ments kérdőívválaszokat vagy eredményeket háttér-adatgyűjtéssé;
- adj a Diófa Műhelynek fiktív cégadatokat, hivatalos egyházi státuszt vagy kitalált ajánlásokat;
- változtass egyetlen nyelvet úgy, hogy a többi háromban más tények jelennek meg;
- tekintsd a zöld CI-t elegendő bizonyítéknak mobilos megjelenésre vagy emberi érthetőségre;
- írd át a kanonikus URL-eket a tervezett domainre működő és hitelesített átállás előtt.

---

## 18. Fejlesztői / szerkesztői átadási ellenőrzőlista

- [ ] A jelenlegi `main` SHA ellenőrizve; nincs párhuzamos, nem egyeztetett módosítás.
- [ ] A változtatás valódi célja tisztázott, a redundáns részek eltávolítva.
- [ ] A központi `catalog.json` és a nyilvános tények egyeznek.
- [ ] Mind a négy nyelv pontos és természetes; egyik felületen sincs idegen UI-szöveg.
- [ ] 48 vagy új termékszám szerinti teljes URL- és hreflang-paritás igazolt.
- [ ] Kezdőlap: 5 másodperces hero → quiz → **egy** katalógus-átvezetés → alkotó.
- [ ] A 30/6 kérdéslogika, az eredmények és a nem tárolás sértetlen.
- [ ] A katalógusképek arányhelyesek; a valódi és az illusztratív kép elkülönül.
- [ ] Az előrendelés e-mailes igényként működik, nem kifizetett vásárlásként.
- [ ] PDF és egyéb privát forrás nincs a publikus Git-fában vagy archívumban.
- [ ] Product/Person/Brand/WebSite JSON-LD, metaadat, canonical és sitemap igaz.
- [ ] A vonatkozó tesztek és a teljes GitHub Actions workflow sikeres.
- [ ] A PR merge-je után ugyanazon SHA-hoz sikeres Pages deployment tartozik.
- [ ] A felhasználói eszközökön végzett vizuális és hozzáférhetőségi visszaellenőrzés eredménye dokumentálva.
- [ ] A dokumentáció, a releváns gépi szövegek és a termékfelvételi kézikönyv frissítve.

### Kapcsolódó kézikönyvek

- [Új termékek felvétele](NEW_PRODUCT_PLAYBOOK.md)
- [„Hogy vagy?” – 30/6 kérdésrendszer](HOGY_VAGY_30_QUESTION_SYSTEM.md)
- [Négy nyelvű kezdőlapi UX-kiadás](FOUR_LANGUAGE_UX_RELEASE.md)
- [Vizuális regressziójavítási prompt](VISUAL_REMEDIATION_2026-11-21.md)
- [Korábbi tartalmi, UX- és PDF-audit](SITE_EDITORIAL_UX_AUDIT_2026-11-21.md)
- [Központi, géppel olvasható terméknapló](../catalog.json)
- [A nyilvános AI-átláthatósági nyilatkozat](../ai.txt)
- [A gépi olvasási összefoglaló](../llms.txt)
- [GitHub Actions minőségellenőrzés](../.github/workflows/quality.yml)

**Végső alapelv:** az oldal ne legyen bonyolultabb annál, amit a látogatónak meg kell értenie: **valódi alkotó, valódi hétköznapi helyzetek, átlátható kiadványok, őszinte státuszok és egyértelmű következő lépés**.
