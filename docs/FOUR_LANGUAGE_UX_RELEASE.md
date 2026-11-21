# For Every Path / Diófa Műhely – négy nyelvű öt másodperces UX-kiadás

**Forrás:** `880rzz/newvibe` · **Kiadás:** 2026-11-21 · **Nyelvek:** EN / HU / DE / FR

## Miért változott a szerkezet?

A korábbi angol főoldal külön, elágazó oldal volt, miközben HU/DE/FR statikus termékkatalógust is tartalmazott. Ez három problémát okozott: az első öt másodpercben nem derült ki a Diófa Műhely és Alexandra közös története; a nyelvi oldalak szerkezetileg nem voltak egyenértékűek; a kezdőlap versenyzett a valódi termékkatalógussal.

Az új négy nyelvű kezdőlap közös sorrendje:

1. **Ki és milyen hétköznapi nehézségekhez készít kiadványokat?** – Diófa Műhely / Sajbán-Frőhner Alexandra; beszélgetés, teendők, elindulás, gyerekek, felnőttek; két CTA.
2. **„Hogy vagy?”** – 30 felnőtteknek szóló, egyező ID-jű kérdésből véletlenszerűen 6, helyben a kiválasztott nyelven; nem diagnózis és nincs válaszmentés.
3. **Egyetlen átvezetés a katalógusba** – nincsenek újra listázott termékkártyák.
4. **Rövid szerzői és kapcsolati információ** – Alexandra, a műhely és az AI-átláthatósági oldal.

A magyar vezérmondat: *„Amikor a szavak nehezen jönnek, a teendők meg csak gyűlnek.”* A másik három nyelv természetes kulturális adaptációt használ.

## Termékek és átláthatóság

- **Kilenc kiadványváltozat, négy lokalizált katalógusban**, ugyanennyi egyedi termékoldallal nyelvenként. Az eredeti kiadványcímek és a tényleges kiadványnyelv **magyar**.
- A borítólátványok álló, körülbelül 4:5 képarányban teljesítik ki a képkonténert. A `Helyed van köztünk` valódi négyzetes fotója saját 1:1 kártyát kap. **Borítófeliratot vágni tilos**; SVG/WebP tartalomhoz nem készül hamis vagy levágott fizikai termékfotó.
- Mind a kilenc kiadvány kiadói tájékoztatás alapján szakmailag jóváhagyott. A weboldal továbbra is e-mailes **előrendelési igényt** fogad, nem online, kifizetett megrendelést. Jövőbeni árak és webshop nem jelennek meg fiktív árral.
- A nyomdai forrás-PDF-ek és más belső dokumentumok **nem kerülnek** a publikus repóba, a `quality.yml` belső PDF/ZIP-tartalomkapuja változatlan.

## Nyelvi rendszer

- `/newvibe/` EN, `/newvibe/hu/` HU, `/newvibe/de/` DE, `/newvibe/fr/` FR.
- **Az URL-ben megadott nyelv elsőbbséget élvez** minden korábbi localStorage-, böngésző- vagy eszköznyelvvel szemben. A `locale-router.js` kizárólag explicit `?lang=hu|en|de|fr` kérésből navigálhat át másik nyelvre; a kanonikus URL megnyitása önmagában nem indít nyelvváltást.
- A navigáció/skip/FAQ/AI-tájékoztató/CTA/alt és ARIA szöveg az adott oldal nyelvén szól; kivételek a szerző neve, márkanév, termékek eredeti címe és szabványos technikai megnevezések.
- Az `app.js` közös megjelenítő; a `checkin-bank.js` megtartja az eredeti 30/6 sorsolólogikát. A választott nyelv és a kérdések nem keveredhetnek.

## Interakció, hozzáférhetőség és vizualitás

- Az aláhúzatlan szöveges hivatkozások végén egységes vektoros nyíl, kivéve nyelvváltók és képek. Az aláhúzás eltűnése **nem tüntetheti el a fókuszállapotot**; a billentyűzetes fókusznak jól látszania kell.
- A Fraunces címsorok és DM Sans törzsszöveg, az eredeti meleg papírszínek megmaradnak. Játékosság helyett nem halmozhatók öncélú kártyák.
- Responsive minőséget 320/390/768/1024/1440/1920/2560 px-en, illetve szükség szerint 4K-n ellenőrizni kell. A CI **forrás- és szerkezeti teszt**, nem pixelpontos vizuális bizonyíték.
- Felhasználói öt másodperces teszt: idegen látogató meg tudja-e mondani a műhely alkotóját, a kiadványok célját és a következő két választási lehetőséget.

## Release-kapuk

1. `node --check`, `scripts/locale-smoke.cjs`, `scripts/checkin-smoke.cjs`: zöld.
2. A `quality.yml` valamennyi 48 lokalizált oldalt, a 36 termékrészletet, 4 katalógust és 4 főoldalt végigellenőrzi.
3. PDF/nyomdai forrás tiltókapu megmaradt; a ZIP-archívum tartalmát is vizsgálja.
4. PR csak sikeres ellenőrzés után merge-elhető.
5. Sikeres GitHub Pages telepítés után az éles oldalak válasza, belső linkek és assetek, tényleges render, lokális nyelv és mobil QA külön bizonyítandó; az öt másodperces használhatóság nem következik pusztán a zöld CI-ből.

**Nem érintett:** az eredeti forrás-PDF-ek, a `helloitsme` repo, a tervezett `foreverypath.com` DNS/CNAME beállítása.
