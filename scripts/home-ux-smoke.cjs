// Four-language end-to-end DOMless smoke for the embedded 30/6 adult reflection.
// A small Node VM test; no browser, network, external dependency or private PDF required.
"use strict";
const fs=require("node:fs");
const vm=require("node:vm");
const assert=require("node:assert/strict");
const bank=require("../checkin-bank.js");
const source=fs.readFileSync("app.js","utf8");
const langs=["en","hu","de","fr"];
const strings={
 en:["When words are hard to find","Try another six questions"],
 hu:["Amikor a szavak nehezen jönnek","Másik hat kérdés"],
 de:["Wenn die Worte fehlen","Sechs neue Fragen"],
 fr:["Quand les mots manquent","Six autres questions"]
};
function element(id){
 return {
  id,hidden:false,textContent:"",style:{},attrs:{},href:"",
  children:[],listeners:{},focused:false,
  setAttribute(k,v){this.attrs[k]=String(v)},
  getAttribute(k){return this.attrs[k]},
  addEventListener(k,fn){this.listeners[k]=fn},
  click(){assert.ok(this.listeners.click,"click bound for "+id);this.listeners.click()},
  focus(){this.focused=true},
  scrollIntoView(){},
  replaceChildren(){this.children=[]},
  append(child){this.children.push(child)}
 };
}
for(const lang of langs){
 const prefix=lang==="en"?"":lang+"/";
 const html=fs.readFileSync(prefix+"index.html","utf8");
 assert.ok(html.includes('<html lang="'+lang+'">'));
 assert.equal((html.match(/<h1\b/g)||[]).length,1,lang+" one H1");
 assert.ok(html.indexOf("fep-home-hero")<html.indexOf('id="quiz"'),lang+" hero before quiz");
 assert.ok(html.indexOf('id="quiz"')<html.indexOf("fep-home-collection-bridge"),lang+" quiz before catalogue");
 assert.ok(html.includes(strings[lang][0])&&html.includes(strings[lang][1]),lang+" text");
 assert.equal((html.match(/class="fep-card"/g)||[]).length,0,lang+" catalogue not duplicated");
 if(lang!=="en") assert.ok(!html.includes('href="../catalog/"')&&!html.includes('href="../about/"')&&!html.includes('href="../products/'),lang+" no English-site fallback on local home links");
 const scriptsBase=lang==="en"?"":"../";
 assert.ok(html.includes('src="'+scriptsBase+'checkin-bank.js?v=1"'),lang+" bank script exists");
 assert.ok(html.includes('src="'+scriptsBase+'app.js?v=15"'),lang+" app script exists");
 assert.ok(html.indexOf('src="'+scriptsBase+'checkin-bank.js?v=1"')<html.indexOf('src="'+scriptsBase+'app.js?v=15"'),lang+" bank loaded first");
 const ids=["quizCard","quizResult","startQuiz","quizAgain","quizBack","quizCount","quizProgress","quizQuestion","quizOptions","resultTitle","resultText","resultQuestion","quizProductLink","quizProductLabel"];
 for(const id of ids) assert.ok(html.includes('id="'+id+'"'),lang+" required control "+id);
 const dom=Object.fromEntries(ids.map(id=>[id,element(id)]));
 dom.quizCard.hidden=true;dom.quizResult.hidden=true;
 const intro=element("intro");intro.hidden=false;
 const settings=new Map();
 const context={
  document:{
   documentElement:{lang},
   getElementById(id){return dom[id]||null},
   querySelector(selector){assert.equal(selector,".quiz-intro");return intro},
   querySelectorAll(selector){assert.equal(selector,"a[hreflang]");return []},
   createElement(type){assert.equal(type,"button");return element("option")}
  },
  globalThis:{fepCheckinBank:bank},
  localStorage:{setItem(k,v){settings.set(k,v)}},
  matchMedia(){return {matches:false}},
  console
 };
 vm.runInNewContext(source,context,{filename:"app.js"});
 dom.startQuiz.click();
 assert.equal(intro.hidden,true,lang+" intro hidden on start");
 assert.equal(dom.quizCard.hidden,false,lang+" question visible on start");
 assert.equal(dom.quizCount.textContent,"1 / 6");
 assert.equal(dom.quizOptions.children.length,4);
 const shown=[];
 for(let i=0;i<6;i++){
  shown.push(dom.quizQuestion.textContent);
  assert.equal(dom.quizCount.textContent,(i+1)+" / 6",lang+" progress");
  assert.ok(dom.quizOptions.children.every(x=>typeof x.textContent==="string"&&x.textContent.trim().length>2));
  if(i===2){
    dom.quizBack.click();
    assert.equal(dom.quizCount.textContent,"2 / 6",lang+" backtracks");
    dom.quizOptions.children[1].click();
    assert.equal(dom.quizCount.textContent,"3 / 6",lang+" returns forward");
  }
  dom.quizOptions.children[0].click();
 }
 assert.equal(new Set(shown).size,6,lang+" no duplicate question");
 assert.equal(dom.quizResult.hidden,false,lang+" result visible");
 assert.equal(dom.quizCard.hidden,true,lang+" question hidden after finish");
 assert.ok(dom.resultTitle.textContent.length>3&&dom.resultText.textContent.length>20,lang+" result copy");
 assert.ok(dom.quizProductLink.href.startsWith("products/")||dom.quizProductLink.href.startsWith("catalog/"),lang+" links must resolve within this localized homepage");
 assert.equal(settings.size,0,lang+" no recorded quiz answers");
 dom.quizAgain.click();
 assert.equal(dom.quizCount.textContent,"1 / 6",lang+" restarts fresh six");
 assert.equal(dom.quizCard.hidden,false);
 assert.equal(dom.quizResult.hidden,true);
}
console.log("Four localized interactive homepages: starts, 6 random questions, back/forward, results, restart and privacy OK");
