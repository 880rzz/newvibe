/* A webshop URL-jét csak ellenőrzött, valódi terméklinkre cseréljük. */
const SHOP_URL = "";
const content = {
  hu: {
    navCollection:"Termékek",brandTag:"Minden úton van helyed.",menuEyebrow:"egy kis navigáció",navHome:"Kezdőlap",navAbout:"A kártyacsomagról",navContents:"Témák és használat",navShop:"Elérhetőség",crumbHome:"Egy kis hely",
    type:"beszélgetésindító kártyacsomag",subtitle:"Bántalmazás és kiközösítés",
    lede:"Vannak helyzetek, amelyekről nehéz elkezdeni beszélni. Ez a kártyacsomag kérdésekkel és kapaszkodókkal segít szavakat találni, segítséget kérni és meghallgatni egymást.",
    explore:"Ismerd meg a kártyákat",shopJump:"Vásárlási információ",creator:"Tervezte és összeállította: Sajbán-Frőhner Alexandra",
    imageNote:"Az eredeti Helyed van köztünk kártyacsomag.",aboutEyebrow:"nem kell egyedül",aboutTitle:"A beszélgetés néha egyetlen mondattal kezdődik.",
    aboutText:"A bántásról, fenyegetésről vagy kiközösítésről beszélni nem mindig könnyű. A „Helyed van köztünk” nem kész válaszokat ígér: megnevezhető helyzeteket, tisztázó kérdéseket és olyan mondatokat kínál, amelyek segíthetnek elindítani egy biztonságos beszélgetést.",
    topicsEyebrow:"miről nyithat beszélgetést?",topicsTitle:"Helyzetek, amelyeket érdemes komolyan venni.",
    t1:"Amikor valakit bántanak",d1:"Bántó szavak, fenyegetés, kiközösítés, zsarolás és az ismétlődő bántalmazás felismerése.",
    t2:"Amikor nehéz segítséget kérni",d2:"Hogyan lehet elmondani a történteket, és kihez lehet fordulni, ha az első próbálkozás nem vezet segítséghez?",
    t3:"Amikor online történik",d3:"Fenyegetések, megszégyenítés, hamis profilok és képekkel való visszaélés.",
    t4:"Amikor a határok számítanak",d4:"Testi közelség, beleegyezés, bizalom és annak felismerése, hogy a bántás soha nem kötelező része egy kapcsolatnak.",
    quoteEyebrow:"egy mondat, amivel el lehet indulni",quoteText:"„Valami történt, amit nehéz elmondanom. Kérlek, hallgass meg nyugodtan.”",quoteAttribution:"Példamondat a mellékelt segítő anyagból.",
    howEyebrow:"így is használható",howTitle:"Nem vizsga. Beszélgetés.",
    howText:"Válasszatok egy helyzetet vagy mondatot. Olvassátok el együtt, és hagyjatok időt a válaszra. Nem szükséges mindent egyszerre megbeszélni. A kérdések gyerekek, szülők, pedagógusok és segítő felnőttek közötti beszélgetésekhez is kapaszkodót adhatnak. A bemutatott kártyák magyar nyelvűek.",
    disclaimer:"A kártyacsomag beszélgetési segédlet, nem helyettesít gyermekvédelmi, pszichológiai, egészségügyi vagy sürgősségi segítséget. Közvetlen veszélyben hívd a 112-t. Magyarországon a Kék Vonal a 116 111-es számon érhető el.",
    purchaseEyebrow:"a következő lépés",purchaseTitle:"Helyed van köztünk",purchaseText:"A termék webshopos elérhetősége még nincs megadva ezen az oldalon. Addig a készítőnél lehet érdeklődni.",purchaseCta:"Érdeklődés a készítőnél",purchaseShop:"Megnézem a webshopban",purchaseNote:"Árat, készletet és szállítási feltételeket a hiteles webshopadatok rendelkezésre állásáig nem tüntetünk fel.",backHome:"vissza az Egy kis hely oldalra"
  },
  en: {
    navCollection:"Collection",brandTag:"Room for every journey.",menuEyebrow:"a little navigation",navHome:"Home",navAbout:"About the cards",navContents:"Topics and use",navShop:"Availability",crumbHome:"A little room",
    type:"conversation and support cards",subtitle:"Bullying, abuse and exclusion",
    lede:"Some experiences are difficult to put into words. These cards offer questions and gentle prompts to help start a conversation, ask for support and listen to one another.",
    explore:"Explore the cards",shopJump:"Purchase information",creator:"Created and compiled by Sajbán-Frőhner Alexandra",
    imageNote:"The original Helyed van köztünk card pack.",aboutEyebrow:"you are not alone",aboutTitle:"Sometimes a conversation begins with one sentence.",
    aboutText:"It is not always easy to talk about bullying, threats or exclusion. Helyed van köztünk does not promise ready-made answers. It offers recognisable situations, clarifying questions and useful phrases for beginning a safer conversation.",
    topicsEyebrow:"topics worth talking about",topicsTitle:"Situations that deserve to be taken seriously.",
    t1:"When someone is hurt",d1:"Hurtful words, threats, exclusion, blackmail and recognising repeated bullying.",
    t2:"When asking for help is hard",d2:"How to describe what happened and where to turn when the first attempt does not lead to help.",
    t3:"When it happens online",d3:"Threats, public humiliation, fake profiles and misuse of images.",
    t4:"When boundaries matter",d4:"Physical closeness, consent, trust and the right to say no to harmful behaviour.",
    quoteEyebrow:"a possible opening line",quoteText:"“Something happened that is hard to tell you. Please listen to me calmly.”",quoteAttribution:"Example sentence from the accompanying support leaflet.",
    howEyebrow:"a way to use the cards",howTitle:"Not a test. A conversation.",
    howText:"Choose a situation or phrase. Read it together and allow time for a response. You do not have to discuss everything at once. The prompts may support conversations among children, parents, teachers and trusted adults. The cards shown here are in Hungarian.",
    disclaimer:"These cards are a conversation aid, not a substitute for professional safeguarding, psychological, medical or emergency support. In immediate danger, call 112. In Hungary, Kék Vonal can be reached at 116 111.",
    purchaseEyebrow:"the next step",purchaseTitle:"Helyed van köztünk",purchaseText:"A verified online store link is not yet available on this page. You can contact the creator directly.",purchaseCta:"Contact the creator",purchaseShop:"Visit the online store",purchaseNote:"No price, stock or shipping claims are made without verified store details.",backHome:"back to A little room"
  },
  de: {
    navCollection:"Kollektion",brandTag:"Raum für deinen Weg.",menuEyebrow:"eine kleine Navigation",navHome:"Startseite",navAbout:"Über die Karten",navContents:"Themen und Anwendung",navShop:"Verfügbarkeit",crumbHome:"Ein wenig Raum",
    type:"Gesprächs- und Hilfekarten",subtitle:"Mobbing, Gewalt und Ausgrenzung",
    lede:"Über manche Erlebnisse zu sprechen, fällt schwer. Diese Karten bieten Fragen und Anregungen, um Worte zu finden, Hilfe zu suchen und einander zuzuhören.",
    explore:"Die Karten kennenlernen",shopJump:"Informationen zum Kauf",creator:"Konzipiert und zusammengestellt von Sajbán-Frőhner Alexandra",
    imageNote:"Die Originalverpackung von Helyed van köztünk.",aboutEyebrow:"du bist nicht allein",aboutTitle:"Manchmal beginnt ein Gespräch mit einem einzigen Satz.",
    aboutText:"Über Mobbing, Drohungen oder Ausgrenzung zu sprechen, ist nicht immer leicht. Helyed van köztünk verspricht keine fertigen Antworten, sondern bietet konkrete Situationen, klärende Fragen und mögliche Formulierungen für ein sicheres Gespräch.",
    topicsEyebrow:"worüber kann man sprechen?",topicsTitle:"Situationen, die ernst genommen werden sollten.",
    t1:"Wenn jemand verletzt wird",d1:"Beleidigungen, Drohungen, Ausgrenzung, Erpressung und wiederholtes Mobbing erkennen.",
    t2:"Wenn es schwerfällt, Hilfe zu holen",d2:"Wie kann man erzählen, was passiert ist, und an wen kann man sich wenden, wenn die erste Bitte nicht hilft?",
    t3:"Wenn es online geschieht",d3:"Drohungen, Bloßstellung, falsche Profile und Missbrauch von Bildern.",
    t4:"Wenn Grenzen zählen",d4:"Körperliche Nähe, Einwilligung, Vertrauen und das Recht, verletzendes Verhalten abzulehnen.",
    quoteEyebrow:"ein möglicher erster Satz",quoteText:"„Etwas ist passiert, worüber ich nur schwer sprechen kann. Bitte hör mir in Ruhe zu.“",quoteAttribution:"Beispielsatz aus dem begleitenden Hilfeblatt.",
    howEyebrow:"so könnt ihr beginnen",howTitle:"Kein Test. Ein Gespräch.",
    howText:"Wählt eine Situation oder einen Satz aus. Lest ihn gemeinsam und lasst Zeit für eine Antwort. Nicht alles muss sofort besprochen werden. Die Anregungen können Gespräche zwischen Kindern, Eltern, Lehrkräften und vertrauten Erwachsenen unterstützen. Die hier gezeigten Karten sind auf Ungarisch.",
    disclaimer:"Die Karten sind eine Gesprächshilfe und ersetzen keine professionelle Kinder- und Jugendhilfe, psychologische, medizinische oder akute Notfallhilfe. Bei unmittelbarer Gefahr: 112. In Ungarn ist Kék Vonal unter 116 111 erreichbar.",
    purchaseEyebrow:"nächster Schritt",purchaseTitle:"Helyed van köztünk",purchaseText:"Ein verifizierter Webshop-Link liegt für diese Seite noch nicht vor. Bis dahin kann man die Autorin direkt kontaktieren.",purchaseCta:"Autorin kontaktieren",purchaseShop:"Zum Webshop",purchaseNote:"Ohne geprüfte Shopdaten machen wir keine Angaben zu Preis, Bestand oder Versand.",backHome:"zurück zu Ein wenig Raum"
  },
  fr: {
    navCollection:"Collection",brandTag:"À chacun son chemin.",menuEyebrow:"une petite navigation",navHome:"Accueil",navAbout:"À propos des cartes",navContents:"Thèmes et utilisation",navShop:"Disponibilité",crumbHome:"Un peu d’espace",
    type:"cartes de discussion et de soutien",subtitle:"Harcèlement, maltraitance et exclusion",
    lede:"Certaines expériences sont difficiles à raconter. Ces cartes proposent des questions et des pistes pour trouver les mots, demander de l’aide et s’écouter.",
    explore:"Découvrir les cartes",shopJump:"Informations d’achat",creator:"Conçu et rassemblé par Sajbán-Frőhner Alexandra",
    imageNote:"La boîte originale des cartes Helyed van köztünk.",aboutEyebrow:"tu n’es pas seul·e",aboutTitle:"Parfois, une conversation commence par une phrase.",
    aboutText:"Parler de harcèlement, de menaces ou d’exclusion n’est pas toujours facile. Helyed van köztünk ne promet pas de réponses toutes faites : il propose des situations concrètes, des questions de clarification et des formulations pour ouvrir un dialogue plus sûr.",
    topicsEyebrow:"de quoi peut-on parler ?",topicsTitle:"Des situations qui méritent d’être prises au sérieux.",
    t1:"Quand quelqu’un est maltraité",d1:"Paroles blessantes, menaces, exclusion, chantage et répétition du harcèlement.",
    t2:"Quand demander de l’aide est difficile",d2:"Comment raconter ce qui s’est passé et vers qui se tourner si la première demande reste sans réponse ?",
    t3:"Quand cela se passe en ligne",d3:"Menaces, humiliations, faux profils et détournement d’images.",
    t4:"Quand les limites comptent",d4:"Proximité physique, consentement, confiance et droit de refuser les comportements blessants.",
    quoteEyebrow:"une phrase pour commencer",quoteText:"« Quelque chose s’est passé et j’ai du mal à en parler. Écoute-moi calmement, s’il te plaît. »",quoteAttribution:"Exemple tiré du dépliant d’accompagnement.",
    howEyebrow:"une manière de commencer",howTitle:"Pas un test. Une conversation.",
    howText:"Choisissez une situation ou une phrase. Lisez-la ensemble et laissez le temps de répondre. Il n’est pas nécessaire de tout aborder d’un coup. Ces questions peuvent accompagner les échanges entre enfants, parents, enseignants et adultes de confiance. Les cartes présentées sont en hongrois.",
    disclaimer:"Ces cartes facilitent la discussion mais ne remplacent pas les services de protection de l’enfance, les soins psychologiques ou médicaux ni les secours. En cas de danger immédiat : 112. En Hongrie, Kék Vonal est joignable au 116 111.",
    purchaseEyebrow:"la prochaine étape",purchaseTitle:"Helyed van köztünk",purchaseText:"Le lien vérifié de la boutique en ligne n’est pas encore disponible sur cette page. Vous pouvez contacter directement la créatrice.",purchaseCta:"Contacter la créatrice",purchaseShop:"Voir la boutique",purchaseNote:"Aucun prix, stock ou délai de livraison n’est indiqué sans informations de boutique vérifiées.",backHome:"retour à Un peu d’espace"
  }
};
const preorderCopy={"hu":{"navShop":"Előrendelés","shopJump":"Előrendelés e-mailben","purchaseEyebrow":"előrendelés e-mailben","purchaseText":"A Helyed van köztünk kártyacsomagra már elküldheted az előrendelési igényedet e-mailben. A levél elküldése nem visszaigazolt rendelés vagy lefoglalt példány; a pontos árat, elérhetőséget és feltételeket válaszban egyeztetjük.","purchaseCta":"Előrendelési igény küldése","purchaseNote":"A webshop előkészítés alatt áll. Itt nem történik fizetés; bankkártyaadatokat ne küldj e-mailben."},"en":{"navShop":"Pre-order","shopJump":"Pre-order by email","purchaseEyebrow":"email pre-order","purchaseText":"You can send a pre-order request for Helyed van köztünk by email now. Sending the message does not confirm an order or reserve a copy. Price, availability and conditions will be agreed in our reply.","purchaseCta":"Send a pre-order request","purchaseNote":"The webshop is being prepared. No payment is taken here; please do not email payment-card details."},"de":{"navShop":"Vorbestellung","shopJump":"Per E-Mail vorbestellen","purchaseEyebrow":"Vorbestellung per E-Mail","purchaseText":"Du kannst jetzt eine Vorbestellanfrage für Helyed van köztünk per E-Mail senden. Die Nachricht ist noch keine bestätigte Bestellung oder Reservierung. Preis, Verfügbarkeit und Bedingungen klären wir in der Antwort.","purchaseCta":"Vorbestellanfrage senden","purchaseNote":"Der Webshop wird vorbereitet. Hier erfolgt keine Zahlung; bitte keine Kartendaten per E-Mail schicken."},"fr":{"navShop":"Précommande","shopJump":"Précommander par e-mail","purchaseEyebrow":"précommande par e-mail","purchaseText":"Vous pouvez envoyer dès maintenant une demande de précommande pour Helyed van köztünk. Ce message ne confirme ni commande ni réservation. Le prix, la disponibilité et les conditions seront précisés dans notre réponse.","purchaseCta":"Envoyer une demande de précommande","purchaseNote":"La boutique est en préparation. Aucun paiement n'est demandé ici ; n'envoyez pas de données de carte bancaire par e-mail."}};
for(const lang of Object.keys(preorderCopy))Object.assign(content[lang],preorderCopy[lang]);
function setProductLanguage(lang) {
  const t=content[lang]||content.hu;
  document.documentElement.lang=lang;
  const galleryCaptions={
    hu:["A kártyák történeteket és kérdéseket hoznak közelebb.","Különböző helyzetekből indulhat beszélgetés."],
    en:["The cards bring real situations and questions into view.","Different situations can open different conversations."],
    de:["Die Karten machen Situationen und Fragen anschaulich.","Unterschiedliche Situationen können ein Gespräch eröffnen."],
    fr:["Les cartes illustrent des situations et suscitent des questions.","Chaque situation peut ouvrir une conversation."]
  };
  const captions=galleryCaptions[lang]||galleryCaptions.hu;
  const firstCaption=document.querySelector('[data-i18n="galleryOneCaption"]');
  const secondCaption=document.querySelector('[data-i18n="galleryTwoCaption"]');
  if(firstCaption)firstCaption.textContent=captions[0];
  if(secondCaption)secondCaption.textContent=captions[1];

  document.querySelectorAll("[data-i18n]").forEach(el=>{if(Object.hasOwn(t,el.dataset.i18n))el.textContent=t[el.dataset.i18n];});
  document.querySelectorAll(".lang").forEach(button=>{const active=button.dataset.lang===lang;button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active));});
  const shopButton=document.getElementById("shopButton");
  if (SHOP_URL && /^https:\/\//i.test(SHOP_URL)) {
    shopButton.href=SHOP_URL;shopButton.target="_blank";shopButton.rel="noopener noreferrer";shopButton.textContent=t.purchaseShop;
  } else {
    shopButton.removeAttribute("target");shopButton.removeAttribute("rel");
    const name="Helyed van köztünk";
    const subject="For Every Path | "+(lang==="hu"?"Előrendelési igény":lang==="de"?"Vorbestellanfrage":lang==="fr"?"Demande de précommande":"Pre-order request")+" | "+name;
    const text=lang==="hu"?"Szia Alexandra!\n\nElőrendelési igény: "+name+"\nDarabszám: \n\nKérlek, küldd el az árat, az elérhetőséget és a feltételeket. A levél még nem visszaigazolt rendelés.\n\nKöszönöm!":lang==="de"?"Hallo Alexandra,\n\nVorbestellanfrage: "+name+"\nMenge: \n\nBitte Preis und Bedingungen mitteilen. Diese E-Mail ist noch keine bestätigte Bestellung.":lang==="fr"?"Bonjour Alexandra,\n\nDemande de précommande : "+name+"\nQuantité : \n\nMerci de préciser le prix et les conditions avant toute confirmation.":"Hello Alexandra,\n\nPre-order request: "+name+"\nQuantity: \n\nPlease reply with price and conditions before confirmation. This email is not a confirmed order.";
    shopButton.href="mailto:diofamuhelykozosseg@gmail.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(text);
    shopButton.replaceChildren(document.createTextNode(t.purchaseCta+" "));
    const svg=document.createElementNS("http://www.w3.org/2000/svg","svg");svg.setAttribute("viewBox","0 0 20 20");svg.setAttribute("class","fep-preorder-icon");svg.setAttribute("aria-hidden","true");
    const path=document.createElementNS("http://www.w3.org/2000/svg","path");path.setAttribute("d","M4 16 16 4M7 4h9v9");svg.appendChild(path);shopButton.appendChild(svg);
  }
  document.title="Helyed van köztünk | For Every Path";
}
document.querySelectorAll(".lang").forEach(btn=>btn.addEventListener("click",()=>setProductLanguage(btn.dataset.lang)));
const menuToggle=document.getElementById("menuToggle"),siteMenu=document.getElementById("siteMenu"),menuClose=document.getElementById("menuClose");
function setMenu(open){siteMenu.hidden=!open;menuToggle.setAttribute("aria-expanded",String(open));if(open)menuClose.focus();else menuToggle.focus();}
menuToggle?.addEventListener("click",()=>setMenu(siteMenu.hidden));
menuClose?.addEventListener("click",()=>setMenu(false));
siteMenu?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{siteMenu.hidden=true;menuToggle.setAttribute("aria-expanded","false");}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!siteMenu.hidden)setMenu(false);});
setProductLanguage("hu");
