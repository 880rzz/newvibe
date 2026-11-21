# For Every Path – teljes oldalas tartalmi és UX-audit

**Dátum:** 2026-11-21  
**Alap:** a felhasználó által ismét feltöltött tíz PDF (csak helyi olvasásra), a `880rzz/newvibe` repó forrása, a négy nyelvű honlap/katalógus/termékoldalak, a `catalog.json`, a JS és a GitHub Actions.  
**Fájlbiztonság:** **egyetlen forrás-PDF sem kerül a nyilvános repóba**. Az alábbi megállapítások kizárólag szöveges, publikálható terméktények; a teljes eredeti állományok nincsenek mellékelve.

## Státuszfrissítés (2026-11-21)

A készítő megerősítette, hogy az összes megjelenített kiadvány tartalma végleges, hibamentesnek tekintett és **szakmailag jóváhagyott**. Ez a nyilvános termékoldalakon és a géppel olvasható mezőkben felülírja a korábbi „lektorálásra vár” és „review pending” szövegeket. A szerkesztői jóváhagyás nem egyenlő a fizikai készlet igazolásával vagy valamely intézmény hivatalos támogatásával.

## 1. A weboldal feladata, a felhasználó valódi útja

A **For Every Path** Sajbán-Frőhner Alexandra alkotói kollekcióját mutatja be, amelyben egyes kiadványok a **Diófa Műhely** megjelölést viselik. A Diófa Műhelyt nem kezeljük bizonyítottan külön cégként vagy intézményként. A legfontosabb látogatói kérdések: *Mi ez? Nekem / a családomnak való? Magyar nyelvű a kiadvány? Milyen formátumban készül? Mi a következő lépés?*

**Kívánatos út:** szándék/élethelyzet → (opcionális „Hogy vagy?” önreflexió, csak felnőtteknek) → megfelelő témájú kiadványok felfedezése → konkrét kiadványoldal → termékspecifikus e-mailes előrendelési igény. A kérdéssor **nem diagnosztizál, nem kategorizál személyiséget, nem kötelező**, és nem lehet látszat-szakvélemény vagy agresszív értékesítési funnel.

## 2. Ellenőrzött források és termékek

| Termék | A helyben megvizsgált forrás tényei | Termékoldali kulcsállítás / feltétel |
|---|---|---|
| **Helyed van köztünk** | 72 nyomdai oldal = 36 kétoldalas, 63 × 88 mm-es helyzetkártya; egy **különálló** 2 oldalas A4 nyomdai fájlban 16 paneles, kétoldalas segítő harmonika | A harmonika mint önálló kiegészítő forrás jelölendő; fizikai csomagba kerülése nem bizonyított. Gyermekvédelmi sürgős segítség nem helyettesíthető a kártyákkal |
| **Egy kis tér** | 72 oldal, 24 hétköznapi helyzet, 3 kitöltött minta, 6 külön munkalap; 18+; szerkesztett, AI-közreműködésű munkakézirat (2026-11-19) | Nem terápia, nem diagnosztika. A készítő 2026-11-21-én végleges és szakmailag jóváhagyott tartalomként erősítette meg |
| **Lépésről lépésre – 2027** | 200 oldal; magyar nyelvű ADHD-tervező felnőtteknek, hónapok, hetek, ügyintézés, háztartás, tanulás, visszatekintés, kímélő napok; A4 nyomtatási útmutató | Nem általános egészségügyi megoldás, nem diagnosztikai eszköz; a „Hogy vagy?” eredménye alapján **nem** címkézhető valaki ADHD-snak |
| **Határidőnapló tanároknak – 2027** | Két 156 oldalas változat, színes és letisztult/sötét borító; egyébként közös tervezési tartalom: éves, havi, heti lapok, értekezlet, kiadások, reflektálás | Borítóváltozat, nem két más tartalmú termék vagy nemek szerinti kötelező besorolás |
| **Veled a mindennapokban** | 84 oldalas, magyar A5-ös, 30 napos katolikus imanapló; Szentírás és KEK hivatkozások, kérdések, írólapok; AI-közreműködés jelölve | A szakmai tartalmi jóváhagyást a készítő megerősítette; hivatalos egyházi intézményi ajánlás ettől külön állítás. A vallási érdeklődés nem következtethető ki a hangulat-kérdéssorból |
| **Mesék a világ körül** | 131 oldal, 42 országhoz kapcsolódó népmese, monda és irodalmi történet; saját szerkesztett magyar szövegek és forrásjegyzék, 2026-11-19-es felülvizsgált kézirat | A korábbi forrás a felhasználási jogokról külön kérdéseket tartalmazott. A szerkesztői jóváhagyást a készítő megerősítette; az üzleti felhasználási jogok igazolása külön dokumentáció |
| **Mesék a világ körül – 42 színező** | 42 oldal, ugyanazon történetekhez társított külön színező-illusztrációk | Kísérő kiadvány, szakmailag jóváhagyott tartalommal, külön kezelendő kereskedelmi feltételekkel |
| **Na, most mit csináljak?** | 139 oldal, 32 történet és alkotófeladat, 8–11 éveseknek, Kóka és közösségi élmények ihletése, kitalált szereplőkkel/helyzetekkel | Valódi helyi intézményeket vagy közösségeket **nem** állíthatunk partnernek, megrendelőnek vagy jóváhagyónak |

**Fontos:** a fenti kilenc termékoldal két tanári borítóváltozattal számol. A `Helyed van köztünk` segítő harmonika **külön PDF-forrás**, nem feltétlenül tizedik megvásárolható termék.

## 3. Talált felhasználói problémák és javítások

### A. „Hogy vagy?” nem volt rendszerszintű belépési pont

**Kiinduló állapot:** a hat kérdés és négyféle lehetséges önreflexiós eredmény csak az interaktív alapoldalon volt jelen. A három lokalizált kezdőlap és négy katalógus nem adott ehhez egyértelmű utat. Az eredményből nem volt tartalmi továbbmenet, és a felület elmentette az eredményt a böngésző helyi tárhelyébe.

**Javítás:**
- EN/HU/DE/FR katalógusokból és a három statikus lokalizált kezdőlapról közvetlen belépő a megfelelő nyelven megnyíló interaktív kérdéssorba;
- világos tájékoztatás: hat kérdés, felnőttek, önreflexió, **nem pszichológiai mérés / diagnózis**;
- az eredménynél választható, tartalmilag indokolt olvasási út: `Egy kis tér` munkafüzet vagy a teljes katalógus; **nincs diagnózisból levezetett ADHD- vagy hitbeli termékajánlás**;
- a döntetlen eredménynek saját, semleges megfogalmazása van;
- a személyiségcímkéző eredményfejlécek szituatív címekké váltak;
- **az önreflexiós válaszok és eredmények nem kerülnek localStorage-ba**; az interakció során memóriában maradnak. A felhasználó által választott webhelynyelv továbbra is tárolható;
- a nyelvváltás tisztán visszaállítja a kérdéssor állapotát, nem keveri a korábbi nyelvű eredményt az újjal.

### B. Előrendelés láthatósága és információs hierarchia

**Kiinduló állapot:** minden termékoldalon volt tényleges `mailto:` és külön előrendelési blokk, de a főcím előtt a kézirat/gyártási állapot dominált. A látogató ezt az elérhetőség hiányának érthette.

**Javítás:** 36 termékoldalon, közvetlenül a cím előtt egységes EN/HU/DE/FR „e-mailben előrendelhető” jelzés. A belső `production_status` és jogi figyelmeztetések nem lettek meghamisítva vagy eltávolítva. Sem ár, sem webshop-URL, sem `Offer` schema nem lett kitalálva.

### C. Kiegészítő segédanyag félreérthető státusza

A `Helyed van köztünk` kártyaszett szövege a 16 paneles segítő harmonikát úgy kezelte, mintha bizonyítottan a nyomtatott csomagban lenne. Mind a négy nyelvben elkülönül: a harmonika nyomdai kiegészítő forrás, a tényleges mellékelése külön megerősítendő.

### D. Visszatérő tartalmi/UX kockázatok

- Az EN interaktív és a HU/DE/FR statikus kezdőlapi architektúra **nem teljesen azonos**. A mostani átjárás a kérdéssort elérhetővé teszi, de teljes komponensparitás későbbi strukturális refaktorral érhető el.
- Az illusztratív/AI borítók **nem valódi késztermék-fotók**. Végleges nyomtatott fotó nélkül ezt minden felületen jelölni kell.
- A tényleges termékek **magyar nyelvűek**; a négyoldali fordítás termékismertető, nem egy négy nyelven gyártott termék ígérete.
- Az elektronikus e-mailes igény nem önálló, visszaigazolt fogyasztói rendelés. Ár, szállítás, fizetés, elállási és adatvédelmi feltételek szükségesek bármely kötő megrendelés elfogadása előtt.
- A 2027-es tervezők évszámát és kiadását a keresőfelületeken sem lehet időtlen, általános termékként félrecímkézni.
- A gyermekeknek szóló segítő kiadványok nem helyettesítenek valós bántalmazási/gyermekvédelmi támogatást.

## 4. PDF-mentesség bizonyítéka és védelme

**Ellenőrzés a GitHubon:** a `main` és a 2026-11-21-én elérhető további tizenegy ág teljes fájlfája az ellenőrzés időpontjában **0 darab `.pdf` fájlt** mutatott. Ez a pillanatnyi ágállományokra vonatkozik; a teljes Git-objektumtörténet forenzikus vizsgálatával nem egyenértékű.

**Megelőzés:** `.github/workflows/quality.yml` új kapuja hibára fut közvetlenül feltöltött PDF, DOC/DOCX, INDD, PSD, EPUB, PDF-mágikus fejlécű átnevezett állomány vagy ZIP/JAR belsejébe helyezett ilyen forrás esetén. Az eredeti forrás-PDF-eket a GitHub Connectoron keresztül nem küldtük és nem is küldjük fel.

## 5. Ellenőrzés és nyitott tételek

**Automatikus ellenőrzések:** minden kilenc termék mind a négy nyelven, termékstátusz, CTA, belső link, SVG ikon, HTML/meta/JSON-LD/sitemap, kérdéssor-biztonság, ZIP- és fájlforrás-tiltás. Külön kontroll a Hogy vagy?-hoz vezető hét katalógus/kezdőlapi bejáratra.

**Külön jóváhagyást / bizonyítékot igényel:**
- kiadói/értékesítői jogi identitás és tájékoztatás (Impressum, GDPR, fogyasztóvédelmi szerződési feltételek);
- mesék, fordítások, színezők publikálási jogosultságai;
- hivatalos egyházi intézményi ajánlás csak igazolt megbízás vagy dokumentum alapján állítható;
- valódi termékfotók, nyomdai példányok, csomagösszetétel, egyértelmű ár és szállítás;
- teljes mobil/desktop, éles URL-ek és billentyűzetes **vizuális** ellenőrzés. Automatizált CI nem pótolja a képernyős QA-t.

## 6. Mérce a következő termékekhez

Az új termékhez a `docs/NEW_PRODUCT_PLAYBOOK.md` az elsődleges folyamat. A *Hogy vagy?* rendszer eredményét **ne** bővítsük ki automatikus, diagnosztikus termékajánlóra. Új ajánlási út csak célcsoporti logika, látható tartalmi indoklás és négy nyelvű ellenőrzés után kerülhet be. A teljes eredeti nyomdai PDF-nek **nincs helye a publikus repositoryban**.
