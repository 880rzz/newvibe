/* For Every Path — restored, accessible 4-language hamburger navigation.
   Works with the original site-header/site-menu design system.
   All links remain ordinary crawlable HTML; JS is needed only to open the menu. */
(()=>{
  "use strict";
  const toggle=document.getElementById("menuToggle");
  const menu=document.getElementById("siteMenu");
  const close=document.getElementById("menuClose");
  if(!toggle||!menu||!close)return;

  // Optional editorial moment in the empty half of the menu.
  // Inspired by helloitsme's local random selection and approximate lunar cycle,
  // but deliberately excludes divination, tracking and personal interpretations.
  function setupMenuMoment(){
    const host=menu.querySelector(".site-menu-inner");
    if(!host)return ()=>{};
    const language=(document.documentElement.lang||"en").split("-")[0].toLowerCase();
    const strings={
      hu:{
        heading:"Egy gondolat neked",again:"Másik gondolat",moon:"A Hold ma",
        calendar:"A következő 7 nap",note:"Gondolatindító, nem jóslat. A holdfázisok közelítő adatok.",
        phases:["Újhold","Növekvő sarló","Első negyed","Növekvő hold","Telihold","Fogyó hold","Utolsó negyed","Fogyó sarló"],
        phaseThoughts:[
          "Egy új kezdethez néha elég egyetlen szándék. Mi lenne a tiéd?",
          "A kicsi lépés is lépés. Minek adnál ma egy esélyt?",
          "Mi az, amiért érdemes ma kiállnod?",
          "Min tudnál finomítani anélkül, hogy mindent újrakezdenél?",
          "Mire vagy most büszke, akár csendben is?",
          "Kinek mondanál ma köszönetet?",
          "Mit engedhetnél el ebből a hétből?",
          "Minek adnál egy kis pihenőidőt?"
        ],
        thoughts:[
          "Mi lenne ma az az egyetlen apró lépés, ami belefér?",
          "Van valami, amit egy órára letehetnél?",
          "Kire figyelnél ma úgy, hogy nem siettetnéd?",
          "Miben kérhetnél ma egy kis segítséget?",
          "Nem kell minden csendet kitölteni.",
          "Mi sikerült mostanában, akár egészen kicsiben?",
          "Melyik terved lehetne egy kicsit egyszerűbb?",
          "Egy jó kérdés néha többet ér a kész válasznál.",
          "Válasz előtt is szabad megállni.",
          "Minek adnál több helyet ezen a héten?",
          "A lassan megtanult dolgok is számítanak.",
          "Az első mondatnak nem kell tökéletesnek lennie."
        ]
      },
      en:{
        heading:"A thought for you",again:"Another thought",moon:"The Moon today",
        calendar:"The next 7 days",note:"A reflection prompt, not a prediction. Moon phases are approximate.",
        phases:["New Moon","Waxing Crescent","First Quarter","Waxing Gibbous","Full Moon","Waning Gibbous","Last Quarter","Waning Crescent"],
        phaseThoughts:[
          "A new beginning may be just one intention. What would yours be?",
          "A small step is still a step. What might you try today?",
          "What is worth standing up for today?",
          "What could you refine without starting over?",
          "What are you quietly proud of right now?",
          "Who would you like to thank today?",
          "What could you put down this week?",
          "Where could you make room for rest?"
        ],
        thoughts:[
          "What is one small step you could take today?",
          "Is there something you could put down for an hour?",
          "Who might you listen to without rushing them?",
          "What is one thing you could ask for help with?",
          "Not every quiet moment needs to be filled.",
          "What has worked recently, even in a small way?",
          "Which plan could you make a little simpler?",
          "A thoughtful question can matter more than a quick answer.",
          "You can pause before you answer.",
          "What deserves a little more space this week?",
          "Learning slowly is still learning.",
          "Your first sentence does not need to be perfect."
        ]
      },
      de:{
        heading:"Ein Gedanke für dich",again:"Noch ein Gedanke",moon:"Der Mond heute",
        calendar:"Die nächsten 7 Tage",note:"Ein Denkanstoß, keine Vorhersage. Die Mondphasen sind Näherungswerte.",
        phases:["Neumond","Zunehmende Sichel","Erstes Viertel","Zunehmender Mond","Vollmond","Abnehmender Mond","Letztes Viertel","Abnehmende Sichel"],
        phaseThoughts:[
          "Für einen Neuanfang reicht manchmal ein Gedanke. Welcher wäre deiner?",
          "Auch ein kleiner Schritt zählt. Was möchtest du heute versuchen?",
          "Wofür möchtest du heute einstehen?",
          "Was könntest du verbessern, ohne von vorn zu beginnen?",
          "Worauf bist du gerade im Stillen stolz?",
          "Wem möchtest du heute danken?",
          "Was könntest du diese Woche loslassen?",
          "Wo könntest du dir Ruhe gönnen?"
        ],
        thoughts:[
          "Welcher kleine Schritt wäre heute möglich?",
          "Gibt es etwas, das du für eine Stunde ablegen könntest?",
          "Wem würdest du heute ohne Eile zuhören?",
          "Wobei könntest du um Unterstützung bitten?",
          "Nicht jede Stille muss gefüllt werden.",
          "Was ist dir zuletzt gelungen, auch wenn es klein war?",
          "Welchen Plan könntest du heute vereinfachen?",
          "Eine gute Frage hilft manchmal mehr als eine schnelle Antwort.",
          "Du darfst dir Zeit lassen, bevor du antwortest.",
          "Was braucht diese Woche etwas mehr Raum?",
          "Auch langsames Lernen ist Lernen.",
          "Der erste Satz muss nicht perfekt sein."
        ]
      },
      fr:{
        heading:"Une pensée pour toi",again:"Une autre pensée",moon:"La Lune aujourd’hui",
        calendar:"Les 7 prochains jours",note:"Une invitation à réfléchir, pas une prédiction. Les phases lunaires sont approximatives.",
        phases:["Nouvelle lune","Premier croissant","Premier quartier","Lune gibbeuse croissante","Pleine lune","Lune gibbeuse décroissante","Dernier quartier","Dernier croissant"],
        phaseThoughts:[
          "Un nouveau départ peut commencer par une intention. Laquelle serait la tienne ?",
          "Un petit pas reste un pas. Qu’aimerais-tu essayer aujourd’hui ?",
          "Qu’est-ce qui mérite que tu t’affirmes aujourd’hui ?",
          "Que pourrais-tu ajuster sans tout recommencer ?",
          "De quoi es-tu fier, même discrètement ?",
          "Qui aimerais-tu remercier aujourd’hui ?",
          "Que pourrais-tu laisser de côté cette semaine ?",
          "Où pourrais-tu faire une place au repos ?"
        ],
        thoughts:[
          "Quel petit pas pourrais-tu faire aujourd’hui ?",
          "Y a-t-il quelque chose que tu pourrais poser pendant une heure ?",
          "Qui aimerais-tu écouter sans le presser ?",
          "Pour quoi pourrais-tu demander un peu d’aide ?",
          "Chaque silence n’a pas besoin d’être rempli.",
          "Qu’est-ce qui s’est bien passé récemment, même en tout petit ?",
          "Quel projet pourrais-tu simplifier un peu ?",
          "Une bonne question vaut parfois mieux qu’une réponse rapide.",
          "Tu as le droit de faire une pause avant de répondre.",
          "À quoi aimerais-tu donner plus de place cette semaine ?",
          "Apprendre lentement, c’est aussi apprendre.",
          "La première phrase n’a pas besoin d’être parfaite."
        ]
      }
    };
    const copy=strings[language]||strings.en;
    const locale={hu:"hu-HU",en:"en-GB",de:"de-AT",fr:"fr-FR"}[language]||"en-GB";
    const symbols=["🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘"];
    const card=document.createElement("aside");
    card.className="fep-menu-moment";
    card.setAttribute("aria-label",copy.heading);
    card.innerHTML=[
      '<div class="fep-moment-top"><span class="fep-moment-star" aria-hidden="true">✳</span><span class="fep-moment-kicker"></span></div>',
      '<p class="fep-moment-thought" aria-live="polite" aria-atomic="true"></p>',
      '<div class="fep-moment-moon"><span class="fep-moment-glyph" aria-hidden="true"></span><div><span class="fep-moment-moon-label"></span><p class="fep-moment-phase"></p><p class="fep-moment-phase-thought"></p></div></div>',
      '<details class="fep-moment-calendar"><summary></summary><ol class="fep-moment-days"></ol></details>',
      '<button class="fep-moment-again" type="button"></button>',
      '<p class="fep-moment-fineprint"></p>'
    ].join("");
    const $=(selector)=>card.querySelector(selector);
    $(".fep-moment-kicker").textContent=copy.heading;
    $(".fep-moment-moon-label").textContent=copy.moon;
    $(".fep-moment-calendar summary").textContent=copy.calendar;
    $(".fep-moment-again").textContent=copy.again;
    $(".fep-moment-fineprint").textContent=copy.note;
    let last=-1;
    const randomInt=(max)=>{
      if(!globalThis.crypto||typeof globalThis.crypto.getRandomValues!=="function"){
        return Math.floor(Math.random()*max);
      }
      const cap=0x100000000, limit=cap-cap%max, values=new Uint32Array(1);
      do{globalThis.crypto.getRandomValues(values);}while(values[0]>=limit);
      return values[0]%max;
    };
    function nextThought(){
      let choice=randomInt(copy.thoughts.length-(last<0?0:1));
      if(last>=0&&choice>=last)choice++;
      last=choice;
      $(".fep-moment-thought").textContent=copy.thoughts[choice];
    }
    // 2000-01-06 18:14 UTC reference new moon, as in helloitsme;
    // average synodic month => editorial, NOT an ephemeris or precise event forecast.
    const synodic=29.530588853, anchor=Date.UTC(2000,0,6,18,14);
    function moonInfo(date){
      const elapsed=(date.getTime()-anchor)/86400000;
      const age=((elapsed%synodic)+synodic)%synodic;
      const phase=Math.floor(age/synodic*8+0.5)%8;
      const illuminated=Math.round((1-Math.cos(2*Math.PI*age/synodic))*50);
      return {phase,illuminated};
    }
    function renderMoon(){
      const now=new Date(),current=moonInfo(now);
      $(".fep-moment-glyph").textContent=symbols[current.phase];
      $(".fep-moment-phase").textContent=copy.phases[current.phase]+" · "+current.illuminated+"%";
      $(".fep-moment-phase-thought").textContent=copy.phaseThoughts[current.phase];
      const list=$(".fep-moment-days");
      list.replaceChildren();
      for(let i=0;i<7;i++){
        const day=new Date(now.getFullYear(),now.getMonth(),now.getDate()+i,12);
        const item=document.createElement("li"),info=moonInfo(day);
        const dayLabel=new Intl.DateTimeFormat(locale,{weekday:"short",day:"numeric"}).format(day);
        item.innerHTML='<span class="fep-moment-day-label"></span><span class="fep-moment-day-symbol" aria-hidden="true"></span>';
        item.querySelector(".fep-moment-day-label").textContent=dayLabel;
        item.querySelector(".fep-moment-day-symbol").textContent=symbols[info.phase];
        item.setAttribute("aria-label",dayLabel+": "+copy.phases[info.phase]);
        list.appendChild(item);
      }
    }
    $(".fep-moment-again").addEventListener("click",nextThought);
    host.appendChild(card);
    return ()=>{nextThought();renderMoon();};
  }
  const refreshMoment=setupMenuMoment();

  let previous=null;
  const focusables=()=>Array.from(menu.querySelectorAll('a[href],button:not([disabled]),summary,[tabindex]:not([tabindex="-1"])')).filter(el=>el.getClientRects().length>0);
  function hide(){
    menu.hidden=true;
    toggle.setAttribute("aria-expanded","false");
    document.body.classList.remove("fep-menu-open");
    (previous||toggle).focus({preventScroll:true});
  }
  function show(){
    previous=document.activeElement;
    menu.hidden=false;
    refreshMoment();
    toggle.setAttribute("aria-expanded","true");
    document.body.classList.add("fep-menu-open");
    close.focus({preventScroll:true});
  }
  toggle.addEventListener("click",()=>menu.hidden?show():hide());
  close.addEventListener("click",hide);
  menu.addEventListener("click",event=>{
    if(event.target===menu||event.target.closest("a[href]"))hide();
  });
  document.addEventListener("keydown",event=>{
    if(menu.hidden)return;
    if(event.key==="Escape"){event.preventDefault();hide();return;}
    if(event.key!=="Tab")return;
    const choices=focusables();if(!choices.length)return;
    const first=choices[0],last=choices[choices.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
  // The original flip-card interaction, now implemented with native buttons.
  // These cards are in normal document flow, not overlapping absolute layers.
  document.querySelectorAll(".fep-restored-notecard").forEach(card=>{
    const front=card.querySelector(".card-front .fep-note-text")?.textContent?.trim()||"";
    const back=card.querySelector(".card-back .fep-note-text")?.textContent?.trim()||"";
    card.setAttribute("aria-label",front);
    card.addEventListener("click",()=>{
      const flipped=card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed",String(flipped));
      card.setAttribute("aria-label",flipped?back:front);
    });
  });
})();
