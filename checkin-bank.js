/* For Every Path · Hogy vagy? — 30-language-parallel questions.
 * Question choices map to the four NON-CLINICAL reflection themes in app.js.
 * Source: the six original For Every Path questions, plus 24 new editorial items per locale.
 * Random sampling only: adapted from 880rzz/helloitsme/assets/js/app.js
 * (rejection sampling + Fisher–Yates); no tarot, spiritual interpretation or history storage.
 * No network calls, cookies or response persistence.
 */
(function(root){
  "use strict";
  const questions = {
  "hu": [
    {
      "id": "q01",
      "prompt": "Mi történik benned, amikor végre csend lesz körülötted?",
      "choices": [
        "Megkönnyebbülök, aztán rögtön jön egy újabb teendő.",
        "Nem tudom, mit kezdjek vele.",
        "Végre hallom, amit napközben elnyomok.",
        "Kicsit félek tőle, mert túl sok minden előjön."
      ]
    },
    {
      "id": "q02",
      "prompt": "Melyik mondat áll ma hozzád a legközelebb?",
      "choices": [
        "Mindenki számít rám.",
        "Jó lenne végre elindulni valamiben.",
        "Nem tudom pontosan, mire van szükségem.",
        "Csak egy kis levegőt szeretnék."
      ]
    },
    {
      "id": "q03",
      "prompt": "Mi az, amit a leggyakrabban későbbre hagysz?",
      "choices": [
        "A saját dolgaimat.",
        "A döntéseimet.",
        "A pihenést.",
        "A beszélgetést arról, ami fáj."
      ]
    },
    {
      "id": "q04",
      "prompt": "Ha lenne most egy teljesen üres órád, mire használnád?",
      "choices": [
        "Rendet raknék magam körül.",
        "Kitalálnám, mi legyen a következő lépés.",
        "Csak lennék egy kicsit.",
        "Leírnám, amit nem tudok kimondani."
      ]
    },
    {
      "id": "q05",
      "prompt": "Mi segítene most a legtöbbet?",
      "choices": [
        "Ha valaki levenne rólam valamit.",
        "Ha nem kellene mindent egyedül kitalálnom.",
        "Ha nem kellene teljesítenem.",
        "Ha végre megérteném, mi zajlik bennem."
      ]
    },
    {
      "id": "q06",
      "prompt": "Melyik mondatot lenne jó ma elhinni?",
      "choices": [
        "Nem kell mindent nekem tartanom.",
        "Lehet lassan is.",
        "A bizonytalanság nem kudarc.",
        "Amit érzek, annak lehet helye."
      ]
    },
    {
      "id": "q07",
      "prompt": "Ha váratlanul megváltozik a napod, mi az első gondolatod?",
      "choices": [
        "Kinek kell most segítenem?",
        "Mi legyen az új terv?",
        "Jó lenne egy kis szünet.",
        "Kivel tudnám megbeszélni?"
      ]
    },
    {
      "id": "q08",
      "prompt": "Mikor érzed azt, hogy igazán jelen vagy?",
      "choices": [
        "Amikor megoszthatom a terheket.",
        "Amikor elindulok valamiben.",
        "Amikor a saját tempómban lehetek.",
        "Amikor őszintén beszélhetek."
      ]
    },
    {
      "id": "q09",
      "prompt": "Mi teszi nehézzé a segítségkérést?",
      "choices": [
        "Nem akarok másra terhet tenni.",
        "Nem tudom, hol kezdjem.",
        "Azt hiszem, nekem kell megoldanom.",
        "Nehéz megfogalmazni, mi bánt."
      ]
    },
    {
      "id": "q10",
      "prompt": "Mit teszel, ha valami elsőre nem sikerül?",
      "choices": [
        "Még többet vállalok.",
        "Másik utat keresek.",
        "Megpróbálok megállni egy kicsit.",
        "Beszélni szeretnék róla."
      ]
    },
    {
      "id": "q11",
      "prompt": "Miért halasztod el a pihenést?",
      "choices": [
        "Mert mások számítanak rám.",
        "Mert még döntések várnak.",
        "Mert nehéz megengednem magamnak.",
        "Mert a csendben előjönnek a gondolatok."
      ]
    },
    {
      "id": "q12",
      "prompt": "Milyen határ segítene ma?",
      "choices": [
        "Valamit átadhatnék másnak.",
        "Mondhatnám, hogy most nem.",
        "Félretehetnék egy kis időt magamnak.",
        "Elmondhatnám, mi fér bele nekem."
      ]
    },
    {
      "id": "q13",
      "prompt": "Mire figyelsz fel egy hosszú nap végén?",
      "choices": [
        "Túl sok mindent intéztem másokért.",
        "A holnapi lépéseken jár az eszem.",
        "Csendre és nyugalomra vágyom.",
        "Maradt bennem egy kimondatlan mondat."
      ]
    },
    {
      "id": "q14",
      "prompt": "Ha valaki megkérdezi, hogy vagy, mit mondanál?",
      "choices": [
        "Sok a teendőm.",
        "Valami újat próbálok elindítani.",
        "Jól esne egy kis nyugalom.",
        "Van valami, amiről beszélnék."
      ]
    },
    {
      "id": "q15",
      "prompt": "Mikor érzed, hogy túl sokat vállaltál?",
      "choices": [
        "Amikor mindenki egyszerre kér.",
        "Amikor egymást érik a feladatok.",
        "Amikor nincs egy szabad percem.",
        "Amikor nem tudom elmondani, hogy elég."
      ]
    },
    {
      "id": "q16",
      "prompt": "Melyik mondatot lenne jó ma kimondani?",
      "choices": [
        "Segítségre van szükségem.",
        "Egy lépéssel kezdem.",
        "Most pihenni szeretnék.",
        "Ez nekem rosszul esett."
      ]
    },
    {
      "id": "q17",
      "prompt": "Ha egy szabad órád lenne, mit választanál?",
      "choices": [
        "Megosztanám valakivel a feladatokat.",
        "Belekezdenék egy régóta halogatott dologba.",
        "Egyszerűen csak megpihennék.",
        "Beszélgetnék valakivel őszintén."
      ]
    },
    {
      "id": "q18",
      "prompt": "Mi segít, ha sok döntést kell meghoznod?",
      "choices": [
        "Ha nem egyedül viselem a felelősséget.",
        "Ha csak a következő lépést nézem.",
        "Ha kapok időt megállni.",
        "Ha valakivel átbeszélhetem."
      ]
    },
    {
      "id": "q19",
      "prompt": "Mi az, amit szívesen elengednél?",
      "choices": [
        "Hogy mindent nekem kell megoldanom.",
        "Hogy tökéletes terv kell az induláshoz.",
        "Hogy mindig hasznosnak kell lennem.",
        "Hogy mindent magamban kell tartanom."
      ]
    },
    {
      "id": "q20",
      "prompt": "Mi jellemző rád új helyzetben?",
      "choices": [
        "Rögtön érzem a felelősséget.",
        "Kíváncsi vagyok a következő lépésre.",
        "Szeretnék lassabban ismerkedni vele.",
        "Nehéz elmondani, hogyan érint."
      ]
    },
    {
      "id": "q21",
      "prompt": "Mi hiányzik most leginkább a hétköznapokból?",
      "choices": [
        "Valaki, akivel megoszthatom a terheket.",
        "Egy egyszerű irány vagy kiindulópont.",
        "Néhány nyugodt, szabad perc.",
        "Olyan beszélgetés, ahol meghallgatnak."
      ]
    },
    {
      "id": "q22",
      "prompt": "Mikor könnyebb nemet mondanod?",
      "choices": [
        "Ha nem csak rajtam múlik minden.",
        "Ha tudom, mi a következő lépés.",
        "Ha tiszteletben tartom a saját időmet.",
        "Ha nyíltan elmondhatom az okát."
      ]
    },
    {
      "id": "q23",
      "prompt": "Mi fáraszt el leginkább egy nehéz beszélgetésben?",
      "choices": [
        "Ha nekem kell mindenkit megtartanom.",
        "Ha rögtön megoldást várnak.",
        "Ha nincs időm végiggondolni.",
        "Ha nem érzem, hogy meghallanak."
      ]
    },
    {
      "id": "q24",
      "prompt": "Hogyan kezdenél egy szabad reggelt?",
      "choices": [
        "Megnézném, mit oszthatok meg másokkal.",
        "Kiválasztanék egy apró célt.",
        "Lassan, kapkodás nélkül indulnék.",
        "Leírnám, mi foglalkoztat."
      ]
    },
    {
      "id": "q25",
      "prompt": "Mi lehet nehéz egy változásban?",
      "choices": [
        "Hogy mások is számítanak rám.",
        "Hogy nem látom még a következő lépést.",
        "Hogy nincs időm hozzászokni.",
        "Hogy nem tudom elmondani, mit érzek."
      ]
    },
    {
      "id": "q26",
      "prompt": "Mit csinálsz, ha megszakad a terved?",
      "choices": [
        "Átveszem a pluszfeladatokat is.",
        "Keresek egy új útvonalat.",
        "Megállok, mielőtt újrakezdem.",
        "Beszélek arról, ami rosszul esett."
      ]
    },
    {
      "id": "q27",
      "prompt": "Mi adna ma egy kis biztonságérzetet?",
      "choices": [
        "Egy megbízható segítő.",
        "Egy átlátható következő lépés.",
        "Egy nyugodt hely, ahová visszahúzódhatok.",
        "Valaki, aki figyelmesen meghallgat."
      ]
    },
    {
      "id": "q28",
      "prompt": "Miből kérnél ma kevesebbet magadtól?",
      "choices": [
        "Mások minden igényének teljesítéséből.",
        "Az azonnali döntésekből.",
        "A folyamatos teljesítményből.",
        "A tökéletesen megfogalmazott mondatokból."
      ]
    },
    {
      "id": "q29",
      "prompt": "Mi teszi nehézzé egy nap lezárását?",
      "choices": [
        "Még mások feladatai járnak a fejemben.",
        "A befejezetlen tervek foglalkoztatnak.",
        "Nem maradt időm megpihenni.",
        "Maradt valami, amit nem mondtam ki."
      ]
    },
    {
      "id": "q30",
      "prompt": "Mi lenne egy apró, kedves lépés magad felé?",
      "choices": [
        "Segítséget kérnék egy feladathoz.",
        "Kiválasztanám az egyetlen következő lépést.",
        "Tartanék egy rövid szünetet.",
        "Megosztanám valakivel, mi van bennem."
      ]
    }
  ],
  "en": [
    {
      "id": "q01",
      "prompt": "What happens inside you when the world finally goes quiet?",
      "choices": [
        "I feel relief, then another task appears.",
        "I don't know what to do with the silence.",
        "I can finally hear what I push down during the day.",
        "I feel a little afraid of what might come up."
      ]
    },
    {
      "id": "q02",
      "prompt": "Which sentence feels closest today?",
      "choices": [
        "Everyone is counting on me.",
        "I would like to finally begin something.",
        "I am not sure what I need.",
        "I just want a little air."
      ]
    },
    {
      "id": "q03",
      "prompt": "What do you postpone most often?",
      "choices": [
        "My own things.",
        "My decisions.",
        "Rest.",
        "The conversation about what hurts."
      ]
    },
    {
      "id": "q04",
      "prompt": "If you had one completely empty hour, what would you do?",
      "choices": [
        "Put things in order around me.",
        "Figure out the next step.",
        "Simply be for a while.",
        "Write down what I cannot say."
      ]
    },
    {
      "id": "q05",
      "prompt": "What would help most right now?",
      "choices": [
        "If someone took something off my plate.",
        "If I didn't have to figure everything out alone.",
        "If I didn't have to perform.",
        "If I understood what is happening inside me."
      ]
    },
    {
      "id": "q06",
      "prompt": "Which sentence would be good to believe today?",
      "choices": [
        "I don't have to carry everything.",
        "It is okay to go slowly.",
        "Uncertainty is not failure.",
        "What I feel is allowed to have a place."
      ]
    },
    {
      "id": "q07",
      "prompt": "When your day changes unexpectedly, what comes first?",
      "choices": [
        "Who needs my help now?",
        "What is the new plan?",
        "I could use a pause.",
        "Who could I talk this through with?"
      ]
    },
    {
      "id": "q08",
      "prompt": "When do you feel most present?",
      "choices": [
        "When I can share the load.",
        "When I begin something.",
        "When I move at my own pace.",
        "When I can speak openly."
      ]
    },
    {
      "id": "q09",
      "prompt": "What makes asking for help difficult?",
      "choices": [
        "I don't want to burden anyone.",
        "I don't know where to begin.",
        "I think I should manage alone.",
        "It's hard to name what hurts."
      ]
    },
    {
      "id": "q10",
      "prompt": "What do you do when something doesn't work the first time?",
      "choices": [
        "Take on even more.",
        "Look for another approach.",
        "Try to pause for a moment.",
        "Want to talk about it."
      ]
    },
    {
      "id": "q11",
      "prompt": "Why do you put rest off?",
      "choices": [
        "Others are counting on me.",
        "I still have decisions to make.",
        "It's hard to allow myself to rest.",
        "Silence brings up thoughts."
      ]
    },
    {
      "id": "q12",
      "prompt": "What boundary would help you today?",
      "choices": [
        "I could hand something over.",
        "I could say: not right now.",
        "I could keep some time for myself.",
        "I could say what I can manage."
      ]
    },
    {
      "id": "q13",
      "prompt": "What do you notice after a long day?",
      "choices": [
        "I've handled too much for others.",
        "I'm planning tomorrow in my head.",
        "I need quiet and calm.",
        "There's something I haven't said."
      ]
    },
    {
      "id": "q14",
      "prompt": "If someone asked how you are, what would you say?",
      "choices": [
        "I have a lot to do.",
        "I'm trying to begin something new.",
        "I could use a quiet moment.",
        "There's something I'd like to share."
      ]
    },
    {
      "id": "q15",
      "prompt": "When do you notice you've taken on too much?",
      "choices": [
        "When everyone asks at once.",
        "When tasks keep piling up.",
        "When there's no free minute.",
        "When I can't say that it's enough."
      ]
    },
    {
      "id": "q16",
      "prompt": "Which sentence might help to say today?",
      "choices": [
        "I need some help.",
        "I'll begin with one step.",
        "I'd like to rest now.",
        "That hurt my feelings."
      ]
    },
    {
      "id": "q17",
      "prompt": "With one free hour, what would you choose?",
      "choices": [
        "Share some responsibilities.",
        "Start something long postponed.",
        "Simply rest for a while.",
        "Have an honest conversation."
      ]
    },
    {
      "id": "q18",
      "prompt": "What helps when you face many decisions?",
      "choices": [
        "Not carrying responsibility alone.",
        "Looking only at the next step.",
        "Taking time to pause.",
        "Talking it through with someone."
      ]
    },
    {
      "id": "q19",
      "prompt": "What would you like to let go of?",
      "choices": [
        "Having to solve everything myself.",
        "Needing a perfect plan first.",
        "Always having to be useful.",
        "Keeping everything to myself."
      ]
    },
    {
      "id": "q20",
      "prompt": "What happens when you enter something new?",
      "choices": [
        "I immediately feel responsible.",
        "I'm curious about the next step.",
        "I'd like to take it slowly.",
        "It's hard to say how it affects me."
      ]
    },
    {
      "id": "q21",
      "prompt": "What's missing most from everyday life right now?",
      "choices": [
        "Someone to share the load with.",
        "A simple direction to start from.",
        "A few calm, free minutes.",
        "A conversation where I'm heard."
      ]
    },
    {
      "id": "q22",
      "prompt": "When is saying no a little easier?",
      "choices": [
        "When not everything depends on me.",
        "When the next step is clear.",
        "When I respect my own time.",
        "When I can explain openly."
      ]
    },
    {
      "id": "q23",
      "prompt": "What tires you out in a difficult conversation?",
      "choices": [
        "Having to support everyone.",
        "Being expected to fix it at once.",
        "Not getting time to think.",
        "Not feeling listened to."
      ]
    },
    {
      "id": "q24",
      "prompt": "How would you start a free morning?",
      "choices": [
        "See what I can share with others.",
        "Choose one small goal.",
        "Begin slowly without rushing.",
        "Write down what's on my mind."
      ]
    },
    {
      "id": "q25",
      "prompt": "What feels difficult about change?",
      "choices": [
        "Others depend on me too.",
        "I can't see the next step yet.",
        "I need time to get used to it.",
        "I can't quite say how I feel."
      ]
    },
    {
      "id": "q26",
      "prompt": "What do you do when a plan gets interrupted?",
      "choices": [
        "Take on the extra tasks too.",
        "Find another route.",
        "Pause before starting again.",
        "Talk about what upset me."
      ]
    },
    {
      "id": "q27",
      "prompt": "What would help you feel a little safer today?",
      "choices": [
        "Someone reliable to help.",
        "A clear next step.",
        "A quiet place to retreat to.",
        "Someone who listens carefully."
      ]
    },
    {
      "id": "q28",
      "prompt": "What would you ask a little less of yourself today?",
      "choices": [
        "Meeting everyone's needs.",
        "Making immediate decisions.",
        "Being productive all the time.",
        "Finding the perfect words."
      ]
    },
    {
      "id": "q29",
      "prompt": "What makes it hard to finish the day?",
      "choices": [
        "Other people's tasks stay in my head.",
        "Unfinished plans keep circling.",
        "I haven't had time to rest.",
        "Something remains unsaid."
      ]
    },
    {
      "id": "q30",
      "prompt": "What small kind step could you take for yourself?",
      "choices": [
        "Ask for help with one task.",
        "Choose just the next step.",
        "Take a short break.",
        "Tell someone what's on my mind."
      ]
    }
  ],
  "de": [
    {
      "id": "q01",
      "prompt": "Was passiert in dir, wenn es endlich ruhig wird?",
      "choices": [
        "Ich bin erleichtert, aber sofort fällt mir Neues ein.",
        "Ich weiß nicht, was ich mit der Stille anfangen soll.",
        "Ich bemerke endlich, was tagsüber untergeht.",
        "Ein wenig Angst, weil so viel auftaucht."
      ]
    },
    {
      "id": "q02",
      "prompt": "Welcher Satz passt heute am ehesten?",
      "choices": [
        "Alle verlassen sich auf mich.",
        "Ich möchte endlich irgendwo anfangen.",
        "Ich weiß gerade nicht, was ich brauche.",
        "Ich bräuchte einfach eine Pause."
      ]
    },
    {
      "id": "q03",
      "prompt": "Was verschiebst du am häufigsten?",
      "choices": [
        "Meine eigenen Dinge.",
        "Entscheidungen.",
        "Pausen.",
        "Ein schwieriges Gespräch."
      ]
    },
    {
      "id": "q04",
      "prompt": "Was würdest du mit einer freien Stunde machen?",
      "choices": [
        "Ein wenig Ordnung schaffen.",
        "Den nächsten Schritt überlegen.",
        "Einfach nur da sein.",
        "Aufschreiben, was ich nicht sagen kann."
      ]
    },
    {
      "id": "q05",
      "prompt": "Was würde dir heute am meisten helfen?",
      "choices": [
        "Wenn jemand mir etwas abnimmt.",
        "Wenn ich nicht alles allein planen müsste.",
        "Wenn ich nicht leisten müsste.",
        "Wenn ich meine Gefühle besser verstünde."
      ]
    },
    {
      "id": "q06",
      "prompt": "Was wäre heute ein hilfreicher Gedanke?",
      "choices": [
        "Ich muss nicht alles tragen.",
        "Ich darf langsam vorgehen.",
        "Unsicherheit ist kein Scheitern.",
        "Meine Gefühle dürfen Platz haben."
      ]
    },
    {
      "id": "q07",
      "prompt": "Wenn dein Tag unerwartet anders läuft: Was denkst du zuerst?",
      "choices": [
        "Wem muss ich jetzt helfen?",
        "Wie sieht der neue Plan aus?",
        "Eine Pause wäre gut.",
        "Mit wem könnte ich darüber sprechen?"
      ]
    },
    {
      "id": "q08",
      "prompt": "Wann fühlst du dich wirklich im Moment?",
      "choices": [
        "Wenn ich Lasten teilen kann.",
        "Wenn ich etwas beginne.",
        "Wenn ich mein eigenes Tempo finde.",
        "Wenn ich offen sprechen kann."
      ]
    },
    {
      "id": "q09",
      "prompt": "Was macht es schwer, um Hilfe zu bitten?",
      "choices": [
        "Ich will niemandem zur Last fallen.",
        "Ich weiß nicht, wo ich anfangen soll.",
        "Ich denke, ich muss es allein schaffen.",
        "Mir fehlen Worte für das, was weh tut."
      ]
    },
    {
      "id": "q10",
      "prompt": "Was machst du, wenn etwas nicht sofort klappt?",
      "choices": [
        "Ich übernehme noch mehr.",
        "Ich suche einen anderen Weg.",
        "Ich versuche kurz innezuhalten.",
        "Ich möchte darüber reden."
      ]
    },
    {
      "id": "q11",
      "prompt": "Warum schiebst du die Pause auf?",
      "choices": [
        "Andere verlassen sich auf mich.",
        "Es stehen noch Entscheidungen an.",
        "Ich erlaube sie mir nur schwer.",
        "In der Stille kommen Gedanken hoch."
      ]
    },
    {
      "id": "q12",
      "prompt": "Welche Grenze würde dir heute helfen?",
      "choices": [
        "Ich könnte etwas abgeben.",
        "Ich könnte sagen: jetzt nicht.",
        "Ich könnte mir Zeit freihalten.",
        "Ich könnte sagen, was ich schaffe."
      ]
    },
    {
      "id": "q13",
      "prompt": "Was fällt dir nach einem langen Tag auf?",
      "choices": [
        "Ich habe zu viel für andere erledigt.",
        "Ich plane gedanklich schon morgen.",
        "Ich sehne mich nach Ruhe.",
        "Ein Satz ist unausgesprochen geblieben."
      ]
    },
    {
      "id": "q14",
      "prompt": "Wenn dich jemand fragt, wie es dir geht: Was sagst du?",
      "choices": [
        "Ich habe viel zu tun.",
        "Ich möchte etwas Neues anfangen.",
        "Ich brauche einen ruhigen Moment.",
        "Da ist etwas, worüber ich reden möchte."
      ]
    },
    {
      "id": "q15",
      "prompt": "Wann merkst du, dass du zu viel übernommen hast?",
      "choices": [
        "Wenn alle zugleich etwas wollen.",
        "Wenn sich Aufgaben stapeln.",
        "Wenn keine freie Minute bleibt.",
        "Wenn ich nicht sagen kann: Es reicht."
      ]
    },
    {
      "id": "q16",
      "prompt": "Welchen Satz würdest du heute gern aussprechen?",
      "choices": [
        "Ich brauche Hilfe.",
        "Ich fange mit einem Schritt an.",
        "Ich möchte mich jetzt ausruhen.",
        "Das hat mich verletzt."
      ]
    },
    {
      "id": "q17",
      "prompt": "Was würdest du mit einer freien Stunde anfangen?",
      "choices": [
        "Aufgaben mit anderen teilen.",
        "Etwas lange Aufgeschobenes beginnen.",
        "Einfach eine Weile ausruhen.",
        "Ein ehrliches Gespräch führen."
      ]
    },
    {
      "id": "q18",
      "prompt": "Was hilft dir bei vielen Entscheidungen?",
      "choices": [
        "Verantwortung nicht allein zu tragen.",
        "Nur den nächsten Schritt zu betrachten.",
        "Zeit zum Innehalten zu haben.",
        "Es mit jemandem zu besprechen."
      ]
    },
    {
      "id": "q19",
      "prompt": "Was würdest du gern loslassen?",
      "choices": [
        "Alles allein lösen zu müssen.",
        "Erst einen perfekten Plan zu brauchen.",
        "Immer nützlich sein zu müssen.",
        "Alles für mich zu behalten."
      ]
    },
    {
      "id": "q20",
      "prompt": "Wie erlebst du neue Situationen?",
      "choices": [
        "Ich fühle sofort Verantwortung.",
        "Ich bin neugierig auf den nächsten Schritt.",
        "Ich möchte mich langsam annähern.",
        "Ich kann schwer sagen, was es mit mir macht."
      ]
    },
    {
      "id": "q21",
      "prompt": "Was fehlt dir gerade im Alltag am meisten?",
      "choices": [
        "Jemand, mit dem ich Lasten teilen kann.",
        "Eine einfache Richtung für den Anfang.",
        "Ein paar ruhige, freie Minuten.",
        "Ein Gespräch, in dem man mir zuhört."
      ]
    },
    {
      "id": "q22",
      "prompt": "Wann fällt es dir leichter, Nein zu sagen?",
      "choices": [
        "Wenn nicht alles von mir abhängt.",
        "Wenn der nächste Schritt klar ist.",
        "Wenn ich meine Zeit respektiere.",
        "Wenn ich den Grund offen nennen kann."
      ]
    },
    {
      "id": "q23",
      "prompt": "Was erschöpft dich bei einem schwierigen Gespräch?",
      "choices": [
        "Dass ich für alle da sein muss.",
        "Dass sofort eine Lösung erwartet wird.",
        "Dass ich keine Zeit zum Nachdenken habe.",
        "Dass ich mich nicht gehört fühle."
      ]
    },
    {
      "id": "q24",
      "prompt": "Wie würdest du einen freien Morgen beginnen?",
      "choices": [
        "Schauen, was ich abgeben kann.",
        "Ein kleines Ziel wählen.",
        "Langsam und ohne Eile starten.",
        "Aufschreiben, was mich beschäftigt."
      ]
    },
    {
      "id": "q25",
      "prompt": "Was macht Veränderung manchmal schwer?",
      "choices": [
        "Andere zählen auch auf mich.",
        "Ich kenne den nächsten Schritt noch nicht.",
        "Ich brauche Zeit, mich daran zu gewöhnen.",
        "Ich kann meine Gefühle kaum ausdrücken."
      ]
    },
    {
      "id": "q26",
      "prompt": "Was tust du, wenn dein Plan unterbrochen wird?",
      "choices": [
        "Ich übernehme auch die Zusatzaufgaben.",
        "Ich suche einen neuen Weg.",
        "Ich halte inne und beginne dann neu.",
        "Ich spreche über das, was mich verletzt hat."
      ]
    },
    {
      "id": "q27",
      "prompt": "Was gäbe dir heute ein wenig Sicherheit?",
      "choices": [
        "Eine verlässliche Unterstützung.",
        "Ein klarer nächster Schritt.",
        "Ein ruhiger Rückzugsort.",
        "Jemand, der aufmerksam zuhört."
      ]
    },
    {
      "id": "q28",
      "prompt": "Was könntest du heute weniger von dir verlangen?",
      "choices": [
        "Alle Wünsche anderer zu erfüllen.",
        "Sofort zu entscheiden.",
        "Immer etwas leisten zu müssen.",
        "Die perfekten Worte zu finden."
      ]
    },
    {
      "id": "q29",
      "prompt": "Was erschwert es dir, den Tag abzuschließen?",
      "choices": [
        "Aufgaben anderer gehen mir durch den Kopf.",
        "Unerledigte Pläne beschäftigen mich.",
        "Ich hatte keine Zeit für eine Pause.",
        "Etwas blieb unausgesprochen."
      ]
    },
    {
      "id": "q30",
      "prompt": "Was wäre ein kleiner freundlicher Schritt für dich?",
      "choices": [
        "Bei einer Aufgabe Hilfe erbitten.",
        "Nur den nächsten Schritt wählen.",
        "Eine kurze Pause einlegen.",
        "Jemandem sagen, was in mir vorgeht."
      ]
    }
  ],
  "fr": [
    {
      "id": "q01",
      "prompt": "Que ressens-tu quand tout devient enfin calme ?",
      "choices": [
        "Du soulagement, puis une nouvelle tâche arrive.",
        "Je ne sais pas quoi faire du silence.",
        "J'entends enfin ce que j'ignorais.",
        "Une petite peur de ce qui remonte."
      ]
    },
    {
      "id": "q02",
      "prompt": "Quelle phrase te ressemble aujourd'hui ?",
      "choices": [
        "Tout le monde compte sur moi.",
        "J'aimerais enfin commencer quelque chose.",
        "Je ne sais pas vraiment ce qu'il me faut.",
        "J'ai juste besoin de souffler."
      ]
    },
    {
      "id": "q03",
      "prompt": "Que remets-tu le plus souvent à plus tard ?",
      "choices": [
        "Mes affaires personnelles.",
        "Mes décisions.",
        "Le repos.",
        "Une conversation difficile."
      ]
    },
    {
      "id": "q04",
      "prompt": "Avec une heure libre, que ferais-tu ?",
      "choices": [
        "Un peu d'ordre autour de moi.",
        "Imaginer ma prochaine étape.",
        "Simplement être là.",
        "Écrire ce que je n'arrive pas à dire."
      ]
    },
    {
      "id": "q05",
      "prompt": "Qu'est-ce qui t'aiderait aujourd'hui ?",
      "choices": [
        "Qu'on m'enlève une tâche.",
        "Ne pas tout décider seul·e.",
        "Ne rien devoir prouver.",
        "Comprendre un peu mieux ce que je ressens."
      ]
    },
    {
      "id": "q06",
      "prompt": "Quelle pensée aimerais-tu garder ?",
      "choices": [
        "Je n'ai pas à tout porter.",
        "Je peux avancer doucement.",
        "L'incertitude n'est pas un échec.",
        "Mes émotions ont le droit d'exister."
      ]
    },
    {
      "id": "q07",
      "prompt": "Si ta journée change à l'improviste, quelle est ta première pensée ?",
      "choices": [
        "Qui a besoin de mon aide ?",
        "Quel est le nouveau plan ?",
        "J'aurais besoin d'une pause.",
        "Avec qui pourrais-je en parler ?"
      ]
    },
    {
      "id": "q08",
      "prompt": "Quand te sens-tu vraiment présent·e ?",
      "choices": [
        "Quand je peux partager la charge.",
        "Quand je commence quelque chose.",
        "Quand je vais à mon rythme.",
        "Quand je peux parler librement."
      ]
    },
    {
      "id": "q09",
      "prompt": "Pourquoi est-il parfois difficile de demander de l'aide ?",
      "choices": [
        "Je ne veux pas peser sur les autres.",
        "Je ne sais pas par où commencer.",
        "Je crois devoir tout gérer seul·e.",
        "Je peine à dire ce qui me fait mal."
      ]
    },
    {
      "id": "q10",
      "prompt": "Que fais-tu quand quelque chose ne fonctionne pas du premier coup ?",
      "choices": [
        "J'en fais encore davantage.",
        "Je cherche une autre façon.",
        "J'essaie de m'arrêter un instant.",
        "J'aimerais en parler."
      ]
    },
    {
      "id": "q11",
      "prompt": "Pourquoi repousses-tu le repos ?",
      "choices": [
        "D'autres comptent sur moi.",
        "J'ai encore des décisions à prendre.",
        "J'ai du mal à m'y autoriser.",
        "Le silence fait remonter des pensées."
      ]
    },
    {
      "id": "q12",
      "prompt": "Quelle limite t'aiderait aujourd'hui ?",
      "choices": [
        "Je pourrais déléguer quelque chose.",
        "Je pourrais dire : pas maintenant.",
        "Je pourrais garder du temps pour moi.",
        "Je pourrais dire ce que je peux faire."
      ]
    },
    {
      "id": "q13",
      "prompt": "Que remarques-tu après une longue journée ?",
      "choices": [
        "J'ai beaucoup fait pour les autres.",
        "Je pense déjà aux étapes de demain.",
        "J'ai besoin de calme.",
        "Une phrase reste en moi."
      ]
    },
    {
      "id": "q14",
      "prompt": "Si quelqu'un te demandait comment tu vas, que dirais-tu ?",
      "choices": [
        "J'ai beaucoup à faire.",
        "J'essaie de commencer du nouveau.",
        "Un moment calme me ferait du bien.",
        "J'ai quelque chose à partager."
      ]
    },
    {
      "id": "q15",
      "prompt": "Quand sens-tu que tu en as trop pris sur toi ?",
      "choices": [
        "Quand tout le monde demande en même temps.",
        "Quand les tâches s'accumulent.",
        "Quand je n'ai plus une minute.",
        "Quand je n'arrive pas à dire stop."
      ]
    },
    {
      "id": "q16",
      "prompt": "Quelle phrase aimerais-tu dire aujourd'hui ?",
      "choices": [
        "J'ai besoin d'aide.",
        "Je commence par un seul pas.",
        "J'aimerais me reposer.",
        "Cela m'a fait mal."
      ]
    },
    {
      "id": "q17",
      "prompt": "Si tu avais une heure libre, que choisirais-tu ?",
      "choices": [
        "Partager quelques responsabilités.",
        "Commencer quelque chose de reporté.",
        "Simplement me reposer un peu.",
        "Avoir une conversation sincère."
      ]
    },
    {
      "id": "q18",
      "prompt": "Qu'est-ce qui t'aide face à plusieurs décisions ?",
      "choices": [
        "Ne pas porter tout seul la responsabilité.",
        "Ne regarder que la prochaine étape.",
        "Prendre le temps de souffler.",
        "En parler avec quelqu'un."
      ]
    },
    {
      "id": "q19",
      "prompt": "Qu'aimerais-tu lâcher prise ?",
      "choices": [
        "Devoir tout résoudre moi-même.",
        "Attendre un plan parfait.",
        "Devoir toujours être utile.",
        "Tout garder pour moi."
      ]
    },
    {
      "id": "q20",
      "prompt": "Comment vis-tu une situation nouvelle ?",
      "choices": [
        "Je ressens vite une responsabilité.",
        "La prochaine étape m'intrigue.",
        "J'aimerais y aller doucement.",
        "J'ai du mal à dire ce que je ressens."
      ]
    },
    {
      "id": "q21",
      "prompt": "Qu'est-ce qui te manque le plus au quotidien ?",
      "choices": [
        "Quelqu'un pour partager la charge.",
        "Une direction simple pour commencer.",
        "Quelques minutes libres et calmes.",
        "Une conversation où l'on m'écoute."
      ]
    },
    {
      "id": "q22",
      "prompt": "Quand est-il plus facile de dire non ?",
      "choices": [
        "Quand tout ne repose pas sur moi.",
        "Quand la prochaine étape est claire.",
        "Quand je respecte mon temps.",
        "Quand je peux expliquer la raison."
      ]
    },
    {
      "id": "q23",
      "prompt": "Qu'est-ce qui te fatigue dans une conversation difficile ?",
      "choices": [
        "Devoir soutenir tout le monde.",
        "Qu'on attende tout de suite une solution.",
        "Ne pas avoir le temps de réfléchir.",
        "Ne pas me sentir écouté·e."
      ]
    },
    {
      "id": "q24",
      "prompt": "Comment commencerais-tu une matinée libre ?",
      "choices": [
        "Voir ce que je peux partager.",
        "Choisir un petit objectif.",
        "Commencer lentement, sans courir.",
        "Écrire ce qui me préoccupe."
      ]
    },
    {
      "id": "q25",
      "prompt": "Qu'est-ce qui est difficile dans le changement ?",
      "choices": [
        "D'autres dépendent aussi de moi.",
        "Je ne vois pas encore la suite.",
        "J'ai besoin de temps pour m'habituer.",
        "Je peine à exprimer ce que je ressens."
      ]
    },
    {
      "id": "q26",
      "prompt": "Comment réagis-tu si ton plan est interrompu ?",
      "choices": [
        "Je prends aussi les tâches supplémentaires.",
        "Je cherche un autre chemin.",
        "Je m'arrête avant de reprendre.",
        "Je parle de ce qui m'a blessé·e."
      ]
    },
    {
      "id": "q27",
      "prompt": "Qu'est-ce qui te rassurerait un peu aujourd'hui ?",
      "choices": [
        "Une personne fiable pour m'aider.",
        "Une prochaine étape claire.",
        "Un endroit calme où me retrouver.",
        "Quelqu'un qui écoute vraiment."
      ]
    },
    {
      "id": "q28",
      "prompt": "Que pourrais-tu moins exiger de toi aujourd'hui ?",
      "choices": [
        "Répondre à toutes les attentes.",
        "Décider sur-le-champ.",
        "Être productif·ve sans arrêt.",
        "Trouver les mots parfaits."
      ]
    },
    {
      "id": "q29",
      "prompt": "Pourquoi est-il difficile de clore la journée ?",
      "choices": [
        "Je pense encore aux tâches des autres.",
        "Les projets inachevés me suivent.",
        "Je n'ai pas eu le temps de souffler.",
        "Quelque chose est resté non dit."
      ]
    },
    {
      "id": "q30",
      "prompt": "Quel petit geste bienveillant pourrais-tu faire pour toi ?",
      "choices": [
        "Demander de l'aide pour une tâche.",
        "Choisir seulement la prochaine étape.",
        "Prendre une courte pause.",
        "Partager ce que j'ai sur le cœur."
      ]
    }
  ]
};
  const locales = ["hu","en","de","fr"];
  for (const language of locales) {
    if (questions[language].length !== 30 ||
        new Set(questions[language].map(q => q.id)).size !== 30 ||
        questions[language].some(q => !q.prompt || q.choices.length !== 4)) {
      throw new Error("Invalid 30-question bank: " + language);
    }
  }
  function secureInt(max, randomness) {
    if (!Number.isInteger(max) || max <= 0 || max > 0x100000000) throw new RangeError("Invalid draw size");
    const source = randomness || root.crypto;
    if (!source || typeof source.getRandomValues !== "function") throw new Error("Secure random source unavailable");
    const limit = Math.floor(0x100000000 / max) * max;
    const value = new Uint32Array(1);
    do { source.getRandomValues(value); } while (value[0] >= limit);
    return value[0] % max;
  }
  function drawSix(language, randomness) {
    if (!locales.includes(language)) throw new Error("Unsupported reflection language");
    const pool = questions[language].slice();
    // Partial Fisher–Yates: unbiased sampling of six distinct questions from thirty.
    for (let i = 0; i < 6; i++) {
      const j = i + secureInt(pool.length - i, randomness);
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, 6);
  }
  const api = Object.freeze({questions, drawSix});
  root.fepCheckinBank = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : window);
