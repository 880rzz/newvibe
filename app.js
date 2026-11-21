/* For Every Path · Hogy vagy? – shared, four-language, in-memory reflection.
 * The 30-item question bank and secure six-without-replacement draw live in checkin-bank.js.
 * No analytics, storage of answers, diagnosis, or external calls.
 */
(() => {
"use strict";
const lang = document.documentElement.lang.slice(0,2);
const locales=["en","hu","de","fr"];
if (!locales.includes(lang) || !globalThis.fepCheckinBank) return;
const quizData={
hu:{questions:globalThis.fepCheckinBank.questions.hu,
results:[
["Ma sok minden rajtad van","Sok minden rajtad múlik, ezért könnyű elfelejteni, hogy neked is lehet szükséged megtartásra. Talán most nem újabb feladatra, hanem egy kis tehermentesítésre vágysz.","Mi az, amit ma nem kellene egyedül továbbvinned?"],
["Egy következő, kicsi lépés","Benned már mozog valami, csak még nem kapott nevet. Nem kell most azonnal döntened. Elég lehet észrevenni, merre húz a figyelmed.","Mi az a következő apró lépés, amely nem sürget, csak hív?"],
["Egy kis szabad tér","Nem biztos, hogy több struktúrára van szükséged. Lehet, hogy először olyan helyre, ahol nem kell hasznosnak, erősnek vagy késznek lenned.","Milyen lenne ma tíz perc, amelynek semmi más célja nincs?"],
["Egy mondat, amelynek hely kell","Van benned valami, ami figyelmet kér. Nem kell rögtön megoldani vagy szépen elmagyarázni. Talán az első lépés csak annyi, hogy elismered: ott van.","Mi az az egy mondat, amelyet magadnak már el tudnál mondani?"]]},
en:{questions:globalThis.fepCheckinBank.questions.en,
results:[
["A day with many responsibilities","A lot depends on you, so it is easy to forget that you also deserve support. Maybe you are not looking for another task, but for some relief.","What is one thing you do not have to carry alone today?"],
["A possible next step","Something is already moving in you, it just has not found its name yet. You do not have to decide immediately.","What small next step could gently call you forward?"],
["A moment with some room","You may not need more structure first. You may need a place where you do not have to be useful, strong, or ready.","What would ten minutes with no purpose feel like today?"],
["A sentence waiting for space","Something in you is asking for attention. It does not need to be solved or explained beautifully yet.","What is one sentence you could say to yourself today?"]]},
de:{questions:globalThis.fepCheckinBank.questions.de,
results:[
["Heute ist vieles auf deinen Schultern","Du kümmerst dich um vieles. Vielleicht brauchst du gerade Entlastung statt einer weiteren Aufgabe.","Was könntest du heute abgeben?"],
["Ein möglicher nächster Schritt","Ein neuer Schritt muss nicht groß sein. Du musst heute nicht alles entscheiden.","Was wäre ein machbarer nächster Schritt?"],
["Ein Moment nur für dich","Vielleicht brauchst du zuerst einen Moment ohne Erwartungen.","Wie fühlen sich zehn Minuten ohne Ziel an?"],
["Ein Satz, der noch Zeit braucht","Nicht alles muss sofort erklärt werden. Du darfst erst einmal bemerken, was da ist.","Welchen Satz kannst du dir selbst schon sagen?"]]},
fr:{questions:globalThis.fepCheckinBank.questions.fr,
results:[
["Une journée bien chargée","Tu portes de nombreuses responsabilités. Peut-être qu'un peu de soutien t'aiderait plus qu'une tâche de plus.","Que pourrais-tu partager aujourd'hui ?"],
["Un prochain petit pas","Tu n'as pas besoin de tout décider tout de suite. Un petit pas peut suffire.","Quel serait ton prochain pas possible ?"],
["Un moment pour toi","Peut-être as-tu d'abord besoin d'un moment sans objectif.","À quoi ressembleraient dix minutes sans rien produire ?"],
["Une phrase qui attend","Tout ne doit pas être expliqué immédiatement. Tu peux commencer par reconnaître ce qui est là.","Quelle phrase peux-tu déjà te dire ?"]]}};
const checkinMixed={
 hu:["Több minden is fontos ma","Lehet, hogy egyszerre többféle dolog foglalkoztat. Nem szükséges egyetlen kategóriát választanod.","Melyik kérdés volt az, amelyiknél megálltál egy pillanatra?"],
 en:["More than one thing matters","Several themes may be present at once. You do not need to fit into one category.","Which question made you pause for a moment?"],
 de:["Mehreres ist heute wichtig","Vielleicht beschäftigen dich mehrere Themen gleichzeitig. Du musst dich nicht auf eine Kategorie festlegen.","Bei welcher Frage hast du kurz innegehalten?"],
 fr:["Plusieurs choses comptent","Plusieurs sujets peuvent te toucher à la fois. Il n'est pas nécessaire de choisir une catégorie.","Quelle question t'a fait réfléchir un instant ?"]
};

const labels={
 hu:{workbook:"Ismerd meg az Egy kis tér füzetet",catalog:"Nézd meg a kiadványokat"},
 en:{workbook:"Explore the Egy kis tér workbook",catalog:"Browse the publications"},
 de:{workbook:"Das Heft Egy kis tér kennenlernen",catalog:"Die Publikationen ansehen"},
 fr:{workbook:"Découvrir le carnet Egy kis tér",catalog:"Parcourir les publications"}
};
const get=id=>document.getElementById(id);
const card=get("quizCard"),intro=document.querySelector(".quiz-intro"),result=get("quizResult");
if(!card || !intro || !result)return;
let step=0,answers=[],scores=[0,0,0,0],selected=[];
function render(){
 const q=selected[step];if(!q)return;
 get("quizCount").textContent=`${step+1} / ${selected.length}`;
 const progress=get("quizProgress");
 progress.style.width=`${((step+1)/selected.length)*100}%`;
 progress.setAttribute("aria-valuenow",String(step+1));
 get("quizQuestion").textContent=q.prompt;
 const options=get("quizOptions");options.replaceChildren();
 q.choices.forEach((answer,i)=>{const btn=document.createElement("button");btn.type="button";btn.className="quiz-option";btn.textContent=answer;btn.addEventListener("click",()=>choose(i));options.append(btn)});
 get("quizBack").hidden=step===0;
}
function choose(choice){
 if(!Number.isInteger(choice)||choice<0||choice>3)return;
 scores[choice]++;answers[step]=choice;
 if(step<selected.length-1){step++;render();get("quizQuestion").focus({preventScroll:true});return;}
 const maximum=Math.max(...scores),tied=scores.filter(score=>score===maximum).length>1;
 const winner=scores.indexOf(maximum);
 const message=tied?checkinMixed[lang]:quizData[lang].results[winner];
 get("resultTitle").textContent=message[0];get("resultText").textContent=message[1];get("resultQuestion").textContent=message[2];
 const product=get("quizProductLink"),productLabel=get("quizProductLabel");
 const useCatalog=tied || winner===1;
 product.href=useCatalog?"catalog/":"products/egy-kis-ter.html";
 productLabel.textContent=useCatalog?labels[lang].catalog:labels[lang].workbook;
 card.hidden=true;result.hidden=false;get("resultTitle").focus({preventScroll:true});
}
function start(){
 step=0;answers=[];scores=[0,0,0,0];selected=globalThis.fepCheckinBank.drawSix(lang);
 intro.hidden=true;card.hidden=false;result.hidden=true;render();
 card.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"center"});
 get("quizQuestion").focus({preventScroll:true});
}
get("startQuiz").addEventListener("click",start);
get("quizAgain").addEventListener("click",start);
get("quizBack").addEventListener("click",()=>{
 if(!step)return;
 step--;const previous=answers[step];
 if(Number.isInteger(previous)) scores[previous]--;
 answers.length=step;render();get("quizQuestion").focus({preventScroll:true});
});
document.querySelectorAll('a[hreflang]').forEach(a=>a.addEventListener('click',()=>{
 const target=a.getAttribute("hreflang");
 if(locales.includes(target))try{localStorage.setItem("fep.language",target)}catch(_){}
}));
})();
