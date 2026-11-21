/* For Every Path / Diófa Műhely — three source-grounded sentences.
 * Editorial source: user-supplied Hungarian production manuscripts.
 * source page numbers refer to the supplied PDF pages, not external articles.
 * EN/DE/FR are faithful editorial translations of the Hungarian originals.
 * All three are selected locally, without repeats or storage/analytics.
 */
(function(root){
"use strict";
const entries=[
  {
    "id": "space-01",
    "book": "egy-kis-ter",
    "page": 3,
    "text": {
      "hu": [
        "Egy helyzetet válassz.",
        "Néhány szó is elég a lapra; a szép fogalmazást hagyhatod máskorra."
      ],
      "en": [
        "Choose one situation.",
        "A few words on the page are enough; you can leave polished phrasing for another day."
      ],
      "de": [
        "Wähle eine Situation.",
        "Ein paar Worte auf dem Blatt genügen; schön formulieren kannst du ein andermal."
      ],
      "fr": [
        "Choisis une seule situation.",
        "Quelques mots sur la page suffisent ; tu chercheras les mots justes une autre fois."
      ]
    }
  },
  {
    "id": "space-02",
    "book": "egy-kis-ter",
    "page": 3,
    "text": {
      "hu": [
        "Lehet őszintén válaszolni.",
        "A „nem tudom”, a „rosszul esett” és a „most nincs hozzá erőm” is válasz."
      ],
      "en": [
        "You can answer honestly.",
        "“I don't know”, “That hurt” and “I don't have the energy right now” are answers too."
      ],
      "de": [
        "Du darfst ehrlich antworten.",
        "„Ich weiß nicht“, „Das hat wehgetan“ und „Dafür fehlt mir gerade die Kraft“ sind auch Antworten."
      ],
      "fr": [
        "Tu peux répondre sincèrement.",
        "« Je ne sais pas », « Ça m’a blessé » et « Je n’en ai pas la force aujourd’hui » sont aussi des réponses."
      ]
    }
  },
  {
    "id": "space-03",
    "book": "egy-kis-ter",
    "page": 4,
    "text": {
      "hu": [
        "Ha valami most túl sok, félbehagyhatod.",
        "Nem kell mindenbe belemenned."
      ],
      "en": [
        "If something is too much right now, you can stop.",
        "You don't have to go into everything."
      ],
      "de": [
        "Wenn dir etwas gerade zu viel ist, darfst du aufhören.",
        "Du musst dich nicht auf alles einlassen."
      ],
      "fr": [
        "Si quelque chose est trop lourd aujourd’hui, tu peux t’arrêter.",
        "Tu n’es pas obligé de tout aborder."
      ]
    }
  },
  {
    "id": "space-04",
    "book": "egy-kis-ter",
    "page": 5,
    "text": {
      "hu": [
        "Egy alkalomra egy téma elég.",
        "Elég pár szó, vagy csak az egyik kérdésre adott válasz."
      ],
      "en": [
        "One topic at a time is enough.",
        "A few words, or an answer to just one question, are enough."
      ],
      "de": [
        "Ein Thema auf einmal reicht.",
        "Ein paar Worte oder die Antwort auf nur eine Frage genügen."
      ],
      "fr": [
        "Un seul sujet à la fois suffit.",
        "Quelques mots, ou la réponse à une seule question, suffisent."
      ]
    }
  },
  {
    "id": "space-05",
    "book": "egy-kis-ter",
    "page": 3,
    "text": {
      "hu": [
        "Nem kell sorban haladnod.",
        "Keresd meg, ami most ismerős, és próbálj ki belőle annyit, amennyi belefér."
      ],
      "en": [
        "You don't have to go in order.",
        "Find what feels familiar right now and try only as much as fits."
      ],
      "de": [
        "Du musst nicht der Reihe nach vorgehen.",
        "Such dir aus, was dir gerade bekannt vorkommt, und probier nur so viel, wie heute geht."
      ],
      "fr": [
        "Tu n’es pas obligé de suivre l’ordre.",
        "Repère ce qui te parle aujourd’hui et essaie seulement ce qui te convient."
      ]
    }
  },
  {
    "id": "prayer-01",
    "book": "veled-a-mindennapokban",
    "page": 6,
    "text": {
      "hu": [
        "A többi várhat.",
        "Egy kihagyott nap miatt sem maradsz le semmiről."
      ],
      "en": [
        "The rest can wait.",
        "Missing a day doesn't mean falling behind."
      ],
      "de": [
        "Der Rest kann warten.",
        "Nur weil du einen Tag auslässt, verpasst du nichts."
      ],
      "fr": [
        "Le reste peut attendre.",
        "Manquer une journée ne signifie pas prendre du retard."
      ]
    }
  },
  {
    "id": "prayer-02",
    "book": "veled-a-mindennapokban",
    "page": 6,
    "text": {
      "hu": [
        "Ha egy téma ma túl sok, lapozz tovább.",
        "Ahhoz is visszatérhetsz, amiről ma még nehéz írnod."
      ],
      "en": [
        "If a subject feels too much today, turn the page.",
        "You can return to what feels hard to write about today."
      ],
      "de": [
        "Wenn dir ein Thema heute zu viel ist, blättere weiter.",
        "Du kannst zu dem zurückkehren, worüber du heute noch schwer schreiben kannst."
      ],
      "fr": [
        "Si un sujet est trop lourd aujourd’hui, tourne la page.",
        "Tu pourras revenir à ce qui est difficile à écrire aujourd’hui."
      ]
    }
  },
  {
    "id": "prayer-03",
    "book": "veled-a-mindennapokban",
    "page": 14,
    "text": {
      "hu": [
        "És amikor épp nehéz, attól még nem kell mosolyt erőltetned magadra.",
        "Ezt az örömöt is érdemes észrevenni."
      ],
      "en": [
        "Even when things are hard, you don't have to force a smile.",
        "That moment of joy is worth noticing, too."
      ],
      "de": [
        "Auch wenn es gerade schwer ist, musst du dir kein Lächeln aufzwingen.",
        "Auch solche Momente der Freude darfst du wahrnehmen."
      ],
      "fr": [
        "Même quand c’est difficile, tu n’as pas à te forcer à sourire.",
        "Cette joie mérite aussi d’être remarquée."
      ]
    }
  },
  {
    "id": "stories-01",
    "book": "na-most-mit-csinaljak",
    "page": 2,
    "text": {
      "hu": [
        "Mesélj, fess, rajzolj vagy írj – ahogy jólesik!",
        "Olvashatsz sorban, vagy választhatsz egy történetet."
      ],
      "en": [
        "Tell a story, paint, draw or write — whatever feels right.",
        "You can read in order or choose a story."
      ],
      "de": [
        "Erzähl, mal, zeichne oder schreib – so, wie es dir guttut!",
        "Du kannst der Reihe nach lesen oder dir eine Geschichte aussuchen."
      ],
      "fr": [
        "Raconte, peins, dessine ou écris — comme tu en as envie !",
        "Tu peux lire dans l’ordre ou choisir une histoire."
      ]
    }
  },
  {
    "id": "stories-02",
    "book": "na-most-mit-csinaljak",
    "page": 2,
    "text": {
      "hu": [
        "Passzolni is lehet.",
        "Saját élményt nem kell elmesélned, csak ha szeretnéd."
      ],
      "en": [
        "It's okay to pass.",
        "You don't have to share something personal unless you want to."
      ],
      "de": [
        "Du darfst auch passen.",
        "Du musst nichts Persönliches erzählen, wenn du nicht möchtest."
      ],
      "fr": [
        "Tu as aussi le droit de passer ton tour.",
        "Tu n’es pas obligé de raconter une expérience personnelle si tu n’en as pas envie."
      ]
    }
  },
  {
    "id": "cards-01",
    "book": "helyed-van-koztunk",
    "page": 40,
    "text": {
      "hu": [
        "Melléd ülhetek?",
        "Mit tehet, ha a másik most inkább egyedül maradna?"
      ],
      "en": [
        "May I sit next to you?",
        "What could they do if the other person would rather be alone right now?"
      ],
      "de": [
        "Darf ich mich zu dir setzen?",
        "Was könnte man tun, wenn die andere Person gerade lieber allein sein möchte?"
      ],
      "fr": [
        "Je peux m’asseoir à côté de toi ?",
        "Que faire si l’autre préfère rester seul pour le moment ?"
      ]
    }
  },
  {
    "id": "cards-02",
    "book": "helyed-van-koztunk",
    "page": 66,
    "text": {
      "hu": [
        "Kell még egy kis idő",
        "Miért lehet szüksége több időre?"
      ],
      "en": [
        "A little more time is needed",
        "Why might someone need more time?"
      ],
      "de": [
        "Es braucht noch ein wenig Zeit",
        "Warum könnte jemand mehr Zeit brauchen?"
      ],
      "fr": [
        "Il faut encore un peu de temps",
        "Pourquoi quelqu’un aurait-il besoin de plus de temps ?"
      ]
    }
  },
  {
    "id": "cards-03",
    "book": "helyed-van-koztunk",
    "page": 72,
    "text": {
      "hu": [
        "Egy mondat, amit jó hallani",
        "Mit mondanál neki először?"
      ],
      "en": [
        "A sentence worth hearing",
        "What would you say to them first?"
      ],
      "de": [
        "Ein Satz, den man gern hört",
        "Was würdest du als Erstes sagen?"
      ],
      "fr": [
        "Une phrase qui fait du bien",
        "Que lui dirais-tu en premier ?"
      ]
    }
  }
];
const bookNames=Object.freeze({"egy-kis-ter":"Egy kis tér","veled-a-mindennapokban":"Veled a mindennapokban","na-most-mit-csinaljak":"Na, most mit csináljak?","helyed-van-koztunk":"Helyed van köztünk"});
const pageUnits={hu:"o.",en:"p.",de:"S.",fr:"p."};
const statusCopy={hu:"Újabb három mondat.",en:"Three new sentences.",de:"Drei neue Sätze.",fr:"Trois nouvelles phrases."};
function secureInt(max,randomness){
 if(!Number.isInteger(max)||max<1)throw new RangeError("Invalid draw size");
 const limit=Math.floor(0x100000000/max)*max;
 const arr=new Uint32Array(1);
 do{randomness.getRandomValues(arr);}while(arr[0]>=limit);
 return arr[0]%max;
}
function drawThree(lang,randomness,exclude=[]){
 if(!pageUnits[lang])throw new Error("Unsupported locale");
 if(!randomness||typeof randomness.getRandomValues!=="function")throw new Error("Secure random unavailable");
 let pool=entries.filter(item=>!exclude.includes(item.id));
 if(pool.length<3)pool=entries.slice();
 pool=pool.slice();
 for(let i=0;i<3;i++){
  const j=i+secureInt(pool.length-i,randomness);
  [pool[i],pool[j]]=[pool[j],pool[i]];
 }
 return pool.slice(0,3);
}
function install(doc,randomness){
 if(!doc||!doc.documentElement)return false;
 const lang=doc.documentElement.lang.slice(0,2);
 const cards=[...doc.querySelectorAll(".fep-restored-notecard")];
 if(!pageUnits[lang]||cards.length!==3||!randomness||typeof randomness.getRandomValues!=="function")return false;
 let previous=[];
 const action=doc.getElementById("threeSentencesAgain");
 const status=doc.getElementById("threeSentencesStatus");
 const paint=(announce)=>{
  const drawn=drawThree(lang,randomness,previous);
  previous=drawn.map(item=>item.id);
  drawn.forEach((item,i)=>{
   const card=cards[i],pair=item.text[lang];
   card.querySelector(".card-front .fep-note-text").textContent=pair[0];
   card.querySelector(".card-back .fep-note-text").textContent=pair[1];
   let source=card.querySelector(".fep-sentence-source");
   if(!source){source=doc.createElement("span");source.className="fep-sentence-source";card.querySelector(".card-front").append(source);}
   source.textContent=bookNames[item.book]+" · "+item.page+". "+pageUnits[lang];
   card.dataset.sentenceId=item.id;
   card.classList.remove("is-flipped");
   card.setAttribute("aria-pressed","false");
   card.setAttribute("aria-label",pair[0]);
  });
  if(announce&&status)status.textContent=statusCopy[lang];
 };
 paint(false);
 if(action)action.addEventListener("click",()=>paint(true));
 return true;
}
const api=Object.freeze({entries,drawThree,install});
root.fepThreeSentences=api;
if(typeof module!=="undefined"&&module.exports)module.exports=api;
if(root.document&&root.crypto){install(root.document,root.crypto);}
})(typeof globalThis!=="undefined"?globalThis:window);
