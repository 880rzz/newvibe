# FOR EVERY PATH — új termék felvételi és szerkesztési kézikönyv

**Verzió:** 1.0 · **Frissítve:** 2026-11-21  
**Érvényesség:** `880rzz/newvibe`, a For Every Path / Diófa Műhely négy nyelvű bemutatkozó és termékkatalógus-oldala.  
**Elsődleges kapcsolattartás:** `diofamuhelykozosseg@gmail.com`

> **Alapmondat:** a For Every Path jelenleg alkotói bemutatkozó és termékkatalógus, ahol **e-mailben már jelezhető az előrendelési szándék**. Nem működő webshop, nem online pénztár, és az elküldött e-mail önmagában nem visszaigazolt rendelés. A webshop és az árak később érkeznek.

## 1. Miért létezik az oldal?

A cél nem az, hogy minél több termékkártyát helyezzünk egymás mellé. Az oldal Sajbán-Frőhner Alexandra önálló alkotói világát teszi érthetővé és megismerhetővé: kártyák, naplók, munkafüzetek, kreatív és gyermekeknek szóló kiadványok egy összefüggő kollekcióban. A **For Every Path** a gyűjtőidentitás; a **Diófa Műhely** egyes kiadványok forrásdokumentumban szereplő műhely-/kiadói megjelölése, **nem igazolt önálló jogi társaság**.

A látogató 30 másodperc alatt értse:
1. ki alkotja a termékeket;
2. kiknek és milyen élethelyzetekre készültek;
3. mit tartalmaz az adott kiadvány, és milyen nyelvű a tényleges termék;
4. mi létezik fizikailag, mi terv vagy nyomdai előkészítés, mi illusztratív kép;
5. hogyan tud **most e-mailes előrendelési igényt** küldeni.

A vizuális világ maradjon meleg, papír- és szerkesztőségi karakterű, egyszerű tipográfiával, jól olvasható tartalommal, megfelelő légzéssel. Az oldalnak nem szabad sablonos, agresszív értékesítési felületnek tűnnie. **A világos következő lépés fontosabb, mint a marketingállítás.**

## 2. A termékadat az igazság forrása

**Elsőként a forrást vizsgáld, ne a termékoldal dizájnját.** Kötelező bemenő adatok:

- **Azonosító:** állandó `id` és URL-biztos `slug`; megjelenített pontos cím, borítóváltozat, kiadás/évszám.
- **Készítő és jogok:** szerző, szerkesztő, illusztrátor, tulajdonosi/fordítási felhasználási jogosultságok; nem bizonyított jóváhagyás vagy partnerkapcsolat nem állítható.
- **Forrás és állapot:** kiadvány/nyomdai PDF, fotó vagy csak koncepció; a tényként megadott oldalszám, formátum, életkor és tartalom a forrásból ellenőrizendő.
- **Tényleges terméknyelv:** ma a kiadványok magyar nyelvűek. Az EN/DE/FR bemutatóoldal **nem jelent** angol, német vagy francia nyomtatott kiadást.
- **Gyártási státusz:** meglévő fizikai példány / nyomdai forrás / szerkesztés alatt / jogtisztázás alatt — külön belső ténymező, **nem azonos az előrendelési lehetőséggel**.
- **Kép eredete:** eredeti tárgyfotó, forrásborító alapján készült grafika, AI-illusztráció vagy szerkesztői SVG-makett; rögzítsd pontosan.
- **Előrendelés:** fogadható-e e-mailes szándékjelzés, külön feltételek (például jogtisztázás), kapcsolat, későbbi webshop URL csak igazolás után.

**Kritikus különbség:** `production_status` és `rights_status` a valós készültséget/jogokat írja le; `preorder_request.status = accepted_by_email` a kapcsolatfelvételi lehetőséget. A kártyán **Előrendelés e-mailben** a fő státusz. A kézirat-/jog-/gyártási megjegyzések külön, tényszerű tájékoztatásként maradjanak meg a részletes termékoldalon, ne legyenek megtévesztően eltüntetve.

## 3. Új termék felvitelének kötelező sorrendje

1. **Forrásellenőrzés:** olvasd el a teljes átadott PDF-et/borítót, ellenőrizd a cím, oldalszám, méret, célcsoport, tartalom, készítő és jogállás adatait. Kétséges adatot ne találj ki.
2. **Egyedi termékrekord:** a `catalog.json` `products` tömbjébe add hozzá az új `id`, `slug`, `original_language`, `production_status`, `image_path`, `image_provenance`, `image_type`, `shop_url: null`, `price: null` és `preorder_request` mezőket. Ha több borítóvariáns külön rendelhető termék, külön rekordon és egyértelmű néven kezeld.
3. **Képanyag:** valódi fotót csak igazolt, elkészült termékről nevezz így. Nyomdai PDF-ből készült illusztrációt/makettet egyértelműen jelöld, ne állítsd késztermék-fotónak. Optimalizált, megfelelő méretű eszköz kerüljön az `assets/` mappába; képaláírás és `alt` négy nyelven legyen hiteles.
4. **Négy termékoldal:** készíts önálló fájlt:
   - `products/<slug>.html` (EN alap);
   - `hu/products/<slug>.html`;
   - `de/products/<slug>.html`;
   - `fr/products/<slug>.html`.
5. **Négy katalógus:** add hozzá a kártyát a `catalog/index.html`, `hu/catalog/index.html`, `de/catalog/index.html`, `fr/catalog/index.html` fájlhoz: kép, cím, rövid haszon/konkrét tartalom, **e-mailes előrendelési badge**, termékoldali belső link és külön `mailto:` CTA. A második kártyasor a **későbbi árról és webshopról** szóljon, ne `review pending` vagy `not yet available` legyen a vevő számára központi elérhetőségi státusz.
6. **Kezdőlap és navigáció:** a négy kezdőlapon ellenőrizd, hogy a kollekció és az új termék megtalálható. A `index.html` EN elsődleges interaktív oldal; a nyelvi feliratokat és `data-preorder-slug`-hez kötött sablont a `app.js` is kezeli. Ha kiemelt terméket adsz hozzá, lokalizáld mind a négy nyelven; a `fepPreorderTitles`/kapcsolódó szótárak kövessék a slugeket.
7. **Kapcsolódó termékek:** szerkesztői logikával válassz belső linkeket, ne véletlenszerűen. Helyes főoldal/katalógus/termékoldal navigáció.
8. **Indexelési adatok:** sitemap, canonical, `hreflang` (EN/HU/DE/FR + `x-default`), indexelhetőség, egyedi title/meta/H1, leíró alt, természetes szöveg, helyes JSON-LD/Product tények. A négy oldal egymás nyelvi megfelelője legyen.
9. **Tesztek, review, release:** új ágon PR, kötelező CI, manuális mobil/desktop + billentyűzet ellenőrzés, majd összevonás és **GitHub Pages élő ellenőrzés**. Az új termék csak az éles oldalon bizonyított megjelenéssel tekinthető lezártnak.

## 4. Előrendelési kommunikáció — négy nyelv

**Látható termékkártya-státuszok / CTA-k:**

| Nyelv | Kártya-státusz | Elsődleges CTA | Másodlagos tájékoztatás |
| --- | --- | --- | --- |
| HU | Előrendelés e-mailben | Előrendelés e-mailben | Árak hamarosan · Webshop készül |
| EN | Pre-order by email | Pre-order by email | Prices to follow · Webshop coming soon |
| DE | Per E-Mail vorbestellbar | Per E-Mail vorbestellen | Preise folgen · Webshop in Vorbereitung |
| FR | Précommande par e-mail | Précommander par e-mail | Prix à venir · Boutique en préparation |

**A termékoldali blokk lényege** (természetes, nyelvhelyes lokális változatban):

- A kiadványra már lehet e-mailes **előrendelési igényt** küldeni.
- A levélben szerepeljen **melyik termék**, lehetőség szerint **melyik borítóváltozat**, és a **darabszám**.
- A levél nem jelent automatikus megrendelés-visszaigazolást, készletfoglalást vagy fizetést.
- Az árat, tényleges elérhetőséget, fizetési és szállítási feltételeket csak válaszban, jóváhagyás előtt egyeztetik.
- A webshop egyelőre készül. Bankkártyaadatot **nem** kérünk e-mailben.
- A jogtisztázás alatt álló kiadványnál a teljesítést **nem lehet ígérni** a jogok rendezése előtt.

**Technikai kapcsolat:** `mailto:diofamuhelykozosseg@gmail.com` URL-kódolt, termékspecifikus `subject` és `body` mezőkkel. Ne legyen hamis „Buy now”, „In stock”, pénztár vagy kitalált webshop-hivatkozás.

A `catalog.json` globális `email_preorders` blokkja és minden egyes termék `preorder_request` mezője maradjon egyező.

## 5. Vizualitás és SVG

- Őrizd meg a For Every Path eredeti tipográfiai, illusztrált, nyugodt vizuális karakterét; ne vezess be külön dizájnt minden új termékhez.
- **Minden** termékkártyán és kapcsolódó termékre mutató szöveges linken megmarad a vektoros `<svg>` ikon (például `fep-vector-icon` és `fep-preorder-icon`).
- Minden termékoldalon és a teljes oldalon működjön az `href="#top"` + `fep-top-link` és `fep-up-icon` vektoros vissza-a-tetejére megoldás.
- Az ikon dekoratív, `aria-hidden="true"`; a gomb/link szövege önmagában is értelmes. A nyelvváltó ne kapjon termék-link nyilat.
- Ne használj Unicode „↗” vagy „↑” karaktert vektoros ikon helyettesítésére. Tartsd a mobil érintési méretet, látható fókuszt, kontrasztot és a csökkentett animáció beállítást.
- Illusztratív/AI-képnél valós eredetmegjelölés; nem összekeverhető a nyomtatott végtermékkel.

## 6. Keresési és AI-érthetőségi minőség

- **SEO:** belső linkelés, egyedi oldal-cél, valós terméknév, pontos meta, sitemap, canonical és `hreflang`, valóban elérhető kép/URL.
- **GEO / AEO / LLM:** rövid, tényszerű meghatározás: *ki készítette, mi ez, kinek, milyen nyelven, milyen stádiumban, hogyan kérhető*. `llms.txt` és `ai.txt` ne ígérjen többet, mint a nyilvános oldal.
- **Schema:** a `Product` csak dokumentált tényeket írhat le. Amíg nincs hiteles, működő checkout, ár és feltétel, **nincs `Offer`, `AggregateRating`, `OrderAction`, stock claim** pusztán a konverzió kedvéért. A készítő nem válik „Organization”-né bizonyíték nélkül.
- **E-E-A-T / AI Trust:** különítsd el az eredeti kéziratot, a szerkesztői feldolgozást és az AI-grafikát. Szakmai, egyházi vagy intézményi jóváhagyás csak ellenőrzött bizonyítékkal.
- **GDPR:** adatminimalizálás, ne kerüljön fölösleges személyes adat a felületre; a mailto e-mailt a látogató saját levelezőjéből küldi. Kötelező fogyasztóvédelmi és adatkezelési tájékoztatásra a tényleges értékesítés megkezdése előtt legyen jogi ellenőrzés.

## 7. Jelenlegi infrastruktúra — mit ne ronts el?

- A **valós jelenlegi host**: `https://880rzz.github.io/newvibe/`.
- A `foreverypath.com` **tervezett**, nem igazoltan bekötött domain. Ne készíts `CNAME`-et és ne írd át a canonical/sitemap URL-eket, amíg DNS, TLS, GitHub Pages domain-ellenőrzés és élő teszt nem sikeres.
- Elsődleges forrás: `main` ág. Változtatás külön branch + PR útvonalon; a merge még nem bizonyít élesítést.
- A publikus repóba ne tölts fel teljes kéziratot, nyomdai PDF-et, forrásjog-iratot, privát elérhetőségeket vagy engedély nélküli tartalmat. A forrásokból csak a szükséges, jogosan közzétehető adatot és elfogadott képet használd.
- A jelenlegi `.github/workflows/quality.yml` ellenőrzésben vannak **kilenc termékhez rögzített számlálók**, valamint konkrét új kiadványokat ellenőrző tesztek. Új termék felvételekor ezeket a helyes új darabszámra és követelményekre frissíteni kell, **tesztgyengítés nélkül**. A jelenlegi `scripts/locale-smoke.cjs` és a JS-validálás is fusson.

## 8. Átadás előtti kötelező QA

- [ ] A forrás, jogosultság, kiadási státusz, tényleges terméknyelv és kép eredete dokumentált.
- [ ] A `catalog.json` rekord pontos, `price`/`shop_url` `null`; e-mailes szándékjelzés beállítva.
- [ ] Mind a négy termékoldal létezik (EN/HU/DE/FR); nincs más nyelvű nyomtatott kiadásra utaló téves ígéret.
- [ ] Mind a négy katalógus új kártyája és előrendelési státusza helyes.
- [ ] A kezdőlapokról/katalógusokból a termék megtalálható, belső és kapcsolódó hivatkozások működnek.
- [ ] A `mailto:` a helyes címre megy, tárgyban/levéltörzsben a termék és darabszám kérés szerepel; nem színlel megrendelés-visszaigazolást.
- [ ] A termékkártya, kapcsolódó linkek és „vissza a tetejére” vezérlők SVG-ikont használnak.
- [ ] Kép, forrásmegjelölés, alt, mobil/desktop megjelenítés, billentyűzet és fókusz ellenőrizve.
- [ ] Sitemap, canonical, `hreflang`, JSON-LD, `llms.txt`/`ai.txt` egyeznek a tényleges állapottal.
- [ ] Nincs nem igazolt ár/készlet/jóváhagyás/partnerkapcsolat vagy webshop-link.
- [ ] CI zöld, PR felülvizsgálva, merge-elve, GitHub Pages deployment és konkrét éles URL-ek ellenőrizve.

**Döntési szabály:** ha a kiadvány tartalma, a jogosultság vagy a szállíthatóság nem bizonyított, ezt pontosan jelöld, és ne ígérj teljesítést. Ettől az e-mailes **érdeklődés / előrendelési igény** még fogadható, ha az alkotó ezt engedélyezte. A bizalom forrása a valóságot tükröző, könnyen követhető folyamat.
