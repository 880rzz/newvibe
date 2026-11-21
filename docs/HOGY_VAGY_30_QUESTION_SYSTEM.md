# Hogy vagy? — 30 kérdés / 6 véletlenszerű kérdés

**Frissítve:** 2026-11-21 · **Repo:** `880rzz/newvibe`

## Cél

A For Every Path önkéntes, felnőtteknek szóló önreflexiós belépési pontja. Egy kitöltésben **30 kérdésből véletlenszerűen kiválasztott 6 különböző kérdés** jelenik meg. A rendszer nem vizsgál mentális állapotot, nem diagnosztizál, nem állít fel személyiségtípust, és a válaszok alapján nem állít valakiről ADHD- vagy vallási jellemzőt. Az eredmény csak beszélgetést és olvasást támogató gondolatindító; a kiadványokhoz vezető linkek opcionálisak.

## Technikai forrás és adaptáció

A `880rzz/helloitsme` projekt `assets/js/app.js` fájljából kizárólag a **kriptográfiai véletlenszám-generálás és a torzításmentes elutasításos mintavétel / Fisher–Yates keverés** elvét alkalmazzuk. Ott önismereti kártyák és 76 lap szerepelnek; a For Every Path **nem** veszi át a kártyajelentéseket, kelta motívumokat, spirituális következtetéseket, a gyakoriságalapú súlyozást vagy a tárolt húzási előzményeket.

**Forráskód:** `checkin-bank.js` — 30 párhuzamos ID (`q01`–`q30`), EN/HU/DE/FR kérdések és válaszok, `drawSix(locale, cryptoSource)`. Az eredeti hat kérdés változatlan témákkal megmaradt, 24 új, hétköznapi, nyugodt kérdés egészíti ki. Az `app.js` csak a négy nem klinikai, gondolatindító eredménycsaládot, a megjelenítést és a navigációt kezeli.

## Futási szerződés

1. A kérdőív indításakor az adott nyelv 30 kérdéséből `crypto.getRandomValues` segítségével **visszatevés nélkül** hatot választunk. Egy kitöltésben nincs ismétlés.
2. A haladás `1/6`–`6/6`. A „vissza” az aktuális hatoson belül léptet, és helyesen visszavonja a korábbi választ.
3. A „Másik hat kérdés” közvetlenül **új hat kérdést sorsol**. Az új sorozat véletlenszerűen átfedhet a korábbival; két külön kitöltés között nincs mesterséges kizárás.
4. Nyelvváltás esetén az esetlegesen megkezdett hatost újrageneráljuk az új nyelven, és töröljük az addig megadott válaszokat. A nyelvváltás nem hagy két nyelvet keveredve.
5. **Válaszok és eredmények nincsenek mentve** localStorage-ba, cookie-ba, naplóba, szerverre vagy analitikába. Csak a nyelvválasztás maradhat helyben, az általános oldalműködés részeként.
6. Eredmény csak a hatodik válasz után jelenik meg, döntetlennél semleges szöveggel. A négyfajta eredmény nem validált mérőeszköz; statisztikai megbízhatóság nem állítható.

## Új kérdések, fordítások karbantartása

- A `checkin-bank.js` minden kérdéséhez **azonos ID** tartozik négy nyelven. Ne legyen nyelvenként eltérő sorszám, kérdésszám vagy változó sorrend.
- Mindegyik kérdésnek **pontosan négy, világosan megfogalmazott** válasza legyen. A négy válasz sorrendje az eredmények négy puha értelmezési irányához kötődik; ne rendezd át nyelvenként önkényesen.
- Ne írj diagnosztikus, gyógyhatást vagy veszélyhelyzetben önsegítést ígérő kérdést. Ne következtess politikai, vallási vagy egészségi adatokra a válaszokból.
- Változtatás után futtasd a `node scripts/checkin-smoke.cjs`, `node --check checkin-bank.js`, `node --check app.js`, `node scripts/locale-smoke.cjs` ellenőrzéseket és a teljes GitHub Actions CI-t.
- A teljes PDF-kéziratok továbbra **nem tölthetők** a publikus repóba. A GitHub Actions fájltípus- és ZIP-tartalom ellenőrzése megmarad.

## Felhasználói élmény és további QA

A belépési pont valamennyi nyelvi kezdőlapról és katalógusból elérhető. A quiz az EN alapoldalon négy nyelven működik. Követelmény: valódi böngészős teszt 320, 390, 768, 1024 és 1440 px szélességen; billentyűzettel, fókuszkezeléssel, screen readerrel és nyelvváltás közben is. A zöld CI **nem helyettesíti** a böngészős vizuális ellenőrzést.

**Kiadási feltétel:** zöld CI, PR-merge, sikeres Pages deploy és lehetőség szerint konkrét éles URL-ellenőrzés. A helloitsme repo módosítása nem része ennek a fejlesztésnek.
