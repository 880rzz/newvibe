"use strict";
/* Print-source and state-machine regression for the 5-card demonstration. */
const fs=require("node:fs"),vm=require("node:vm"),assert=require("node:assert/strict");
const crypto=require("node:crypto");
const js=fs.readFileSync("card-demo.js","utf8");
const css=fs.readFileSync("card-demo.css","utf8");
const ids=["01","07","13","20","35"],langs=["en","hu","de","fr"];
const sources={
 "01-front":"0b26d943bf8de160c7cb3cdf6fac9888003a83907de1dd92bdbc9252cc6dd946",
 "01-back":"78297bda6667ebc268b01350a64c821c3caf4781a5329e0313f313839108e564",
 "07-front":"313dc71503b170adfeb63bee45999bc4513c09e386d4b469bf2d8d58c1bc3456",
 "07-back":"8feddd4ad21111f844e37aabc524f6d6e202fef5c703650cb45516376302c0be",
 "13-front":"4b4bab86a4f61962c2e690aafea5a25554386af79fec5e0f33610c0965a336cb",
 "13-back":"fb3a81454e5bc0704699bcb52144f25fa242a4a0af8d0d4d3350af1ade69577e",
 "20-front":"e5b08ee03635e94f7ed99b2d7bcfb1f7fcf6001847b349fb63fd6589e9d6f544",
 "20-back":"b49b0b22be31681e2586580b4e84ef5fa5743ca2eb4c69f83f8e86378ff78493",
 "35-front":"15ddf9807539dc1e5de391f30fa1a01c70151290a8ca6a667b0e8af6752b79d0",
 "35-back":"fc9a53ad08bd9a2786afd6a40a8fa112f799b93729b4eef4ed99901d9f0362e0"
};
assert.doesNotMatch(js,/localStorage|sessionStorage|document\.cookie|fetch\(|XMLHttpRequest|navigator\.sendBeacon/,"demo uses no browser tracking or remote APIs");
assert.ok(js.includes("getRandomValues")&&js.includes("Math.floor(range/n)*n"),"locally randomized without modulo bias");
assert.ok(css.includes("prefers-reduced-motion:reduce"),"reduced-motion visual preference respected");
assert.ok(css.includes("visibility:hidden")&&css.includes("opacity:0"),"no mirrored old image on Safari");
assert.ok(css.includes('[data-face="back"] .fep-demo-face--back'),"second printed face becomes visible");
for(const [name,expectedHash] of Object.entries(sources)){
 const file="assets/card-demo/"+name+".webp";
 const buf=fs.readFileSync(file);
 assert.equal(buf.toString("ascii",0,4),"RIFF",file+" valid WebP RIFF");
 assert.equal(buf.toString("ascii",8,12),"WEBP",file+" valid WebP header");
 assert.ok(buf.length>35000&&buf.length<200000,file+" web optimized size");
 const actualHash=crypto.createHash("sha256").update(buf).digest("hex");
 assert.equal(actualHash,expectedHash,file+" exact untouched image from cropped original print PDF");
}
for(const id of ids)assert.ok(!fs.existsSync("assets/card-demo/"+id+".svg"),"generated imitation removed: "+id);
let htmlCount=0;
for(const lang of langs){
 const prefix=lang==="en"?"":lang+"/",html=fs.readFileSync(prefix+"products/helyed-van-koztunk.html","utf8");
 const root=lang==="en"?"../":"../../";
 assert.equal((html.match(/data-card-demo=/g)||[]).length,1,lang+" exactly one demo");
 assert.ok(html.includes('data-card-demo="'+lang+'"'),lang+" language");
 assert.ok(html.includes('href="'+root+'card-demo.css?v=3"'),lang+" revision CSS");
 assert.ok(html.includes('src="'+root+'card-demo.js?v=3"'),lang+" revision JS");
 assert.ok(html.includes('data-asset-root="'+root+'assets/card-demo/"'),lang+" original print image directory");
 assert.equal((html.match(/data-demo-original-front/g)||[]).length,1,lang+" original front displayed once");
 assert.equal((html.match(/data-demo-original-back/g)||[]).length,1,lang+" original back displayed once");
 assert.ok(!html.includes('data-demo-svg'),lang+" no generated scene");
 assert.ok(html.includes('class="fep-demo-back-layout"'),lang+" editorial reverse is native HTML");
 assert.ok(html.includes('class="fep-demo-back-list"'),lang+" original questions as accessible list");
 assert.ok(html.includes('data-demo-original-dialog'),lang+" print-original dialog preserved");
 assert.equal((html.match(/data-demo-story/g)||[]).length,1,lang+" no duplicate digital card text");
 assert.ok(!html.includes('class="fep-demo-transcript"'),lang+" duplicate transcript removed");
 assert.ok(html.includes('class="fep-availability fep-preorder"'),lang+" preorder preserved");
 htmlCount++;
}
class Element{
 constructor(){this.textContent="";this.dataset={};this.attr={};this.events={};this.alt="";this.src="";this.hidden=false;this.open=false;}
 showModal(){this.open=true;}
 close(){this.open=false;}
 setAttribute(k,v){this.attr[k]=v;}
 addEventListener(k,fn){this.events[k]=fn;}
}
function make(locale){
 const selectors=["[data-demo-category]","[data-demo-title]","[data-demo-number]","[data-demo-story]","[data-demo-question-one]","[data-demo-question-two]","[data-demo-explanation]","[data-demo-original-front]","[data-demo-original-back]","[data-demo-flip]","[data-demo-card]","[data-demo-front]","[data-demo-back]","[data-demo-original-trigger]","[data-demo-original-dialog]","[data-demo-original-close]"];
 const map={};selectors.forEach(s=>map[s]=[new Element()]);map["[data-demo-explain-title]"]=[new Element(),new Element()];
 const root={dataset:{cardDemo:locale,assetRoot:"../../assets/card-demo/"},querySelector(s){return map[s]?.[0]||null;},querySelectorAll(s){return map[s]||[];}};
 map["[data-demo-card]"][0].dataset.face="front";
 map["[data-demo-original-trigger]"][0].hidden=true;
 return {root,map};
}
let draws=0;
for(const locale of langs){
 for(let selection=0;selection<5;selection++){
  const {root,map}=make(locale);
  const context={document:{querySelector(s){return s==="[data-card-demo]"?root:null;},documentElement:{lang:locale}},crypto:{getRandomValues(arr){arr[0]=selection;return arr;}},Math,Uint32Array};
  vm.runInNewContext(js,context,{filename:"card-demo.js"});
  assert.equal(root.dataset.drawnCard,ids[selection],locale+" sample "+selection);
  assert.ok(map["[data-demo-title]"][0].textContent.length>4,locale+" source title");
  assert.ok(map["[data-demo-story]"][0].textContent.length>50,locale+" accessible scenario");
  assert.ok(map["[data-demo-question-one]"][0].textContent.length>15,locale+" question one");
  assert.ok(map["[data-demo-question-two]"][0].textContent.length>15,locale+" question two");
  assert.equal(map["[data-demo-explain-title]"][0].textContent,map["[data-demo-explain-title]"][1].textContent,locale+" explanation heading");
  for(const side of ["front","back"]){
   const image=map["[data-demo-original-"+side+"]"][0];
   assert.ok(image.src.endsWith("/"+ids[selection]+"-"+side+".webp"),locale+" exact "+side+" print image");
   assert.equal(image.dataset.cardId,ids[selection],locale+" picture matches the drawn card");
   assert.ok(image.alt.includes(map["[data-demo-title]"][0].textContent),locale+" accessible "+side+" text");
  }
  const flip=map["[data-demo-flip]"][0],card=map["[data-demo-card]"][0];
  assert.ok(map["[data-demo-original-trigger]"][0].hidden,locale+" print dialog initially hidden");
  flip.events.click();
  assert.equal(card.dataset.face,"back");
  assert.equal(map["[data-demo-original-trigger]"][0].hidden,false,locale+" show original print action after flip");
  const originalButton=map["[data-demo-original-trigger]"][0],dialog=map["[data-demo-original-dialog]"][0];
  originalButton.events.click();
  assert.equal(dialog.open,true,locale+" original back image opens in dialog");
  map["[data-demo-original-close]"][0].events.click();
  assert.equal(dialog.open,false,locale+" original back dialog closes");
  assert.equal(flip.attr["aria-pressed"],"true");
  assert.equal(map["[data-demo-back]"][0].attr["aria-hidden"],"false");
  flip.events.click();
  assert.equal(card.dataset.face,"front");
  assert.equal(flip.attr["aria-pressed"],"false");
  assert.equal(map["[data-demo-original-trigger]"][0].hidden,true,locale+" original print button hides on front");
  draws++;
 }
}
console.log("CARD_DEMO_QA",JSON.stringify({languages:4,cardPairs:5,originalPrintedImages:10,deterministicDraws:draws,verifiedSHA256:10,productPages:htmlCount,printDialogsTested:draws,editorialHTML:true,failed:0}));
