"use strict";
/* Source and state-machine regression for the 5-card demo. */
const fs=require("node:fs"),vm=require("node:vm"),assert=require("node:assert/strict");
const js=fs.readFileSync("card-demo.js","utf8");
const css=fs.readFileSync("card-demo.css","utf8");
const ids=["01","07","13","20","35"],langs=["en","hu","de","fr"];
assert.doesNotMatch(js,/localStorage|sessionStorage|document\.cookie|fetch\(|XMLHttpRequest|navigator\.sendBeacon/,"demo is fully local and tracking free");
assert.ok(js.includes("getRandomValues")&&js.includes("Math.floor(range/n)*n"),"unbiased crypto random with fallback");
assert.ok(css.includes("prefers-reduced-motion:reduce"),"card flip respects reduced motion");
assert.ok(css.includes("visibility:hidden")&&css.includes("opacity:0"),"inactive face cannot bleed through in WebKit");
assert.ok(css.includes('[data-face="back"] .fep-demo-face--back'),"back side becomes visible");
for(const id of ids){
 const svg=fs.readFileSync("assets/card-demo/"+id+".svg","utf8");
 assert.match(svg,/^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
 assert.match(svg,/data-format="original-vector-demo"/);
 assert.match(svg,/<path\b/,"real vector shapes");
 assert.match(svg,/<style>/);
 assert.match(svg,/prefers-reduced-motion:reduce/);
 assert.ok(!svg.includes("<image"),"no embedded print raster");
}
let htmlCount=0;
for(const lang of langs){
 const prefix=lang==="en"?"":lang+"/",html=fs.readFileSync(prefix+"products/helyed-van-koztunk.html","utf8");
 const root=lang==="en"?"../":"../../";
 assert.equal((html.match(/data-card-demo=/g)||[]).length,1,lang+" exactly one demo");
 assert.ok(html.includes('data-card-demo="'+lang+'"'),lang+" correct locale");
 assert.ok(html.includes('href="'+root+'card-demo.css?v=1"'),lang+" demo CSS");
 assert.ok(html.includes('src="'+root+'card-demo.js?v=1"'),lang+" demo JS");
 assert.ok(html.includes('data-asset-root="'+root+'assets/card-demo/"'),lang+" vector art URL");
 assert.ok(html.includes('class="fep-availability fep-preorder"'),lang+" preorder unchanged");
 htmlCount++;
}
assert.equal(htmlCount,4);
class Element{
 constructor(){this.textContent="";this.dataset={};this.attr={};this.events={};this.alt="";this.src="";}
 setAttribute(k,v){this.attr[k]=v;}
 addEventListener(k,fn){this.events[k]=fn;}
}
function make(locale){
 const selectors=["[data-demo-category]","[data-demo-title]","[data-demo-number]","[data-demo-story]","[data-demo-question-one]","[data-demo-question-two]","[data-demo-explanation]","[data-demo-svg]","[data-demo-flip]","[data-demo-card]","[data-demo-front]","[data-demo-back]"];
 const map={};selectors.forEach(s=>map[s]=[new Element()]);map["[data-demo-explain-title]"]=[new Element(),new Element()];
 const root={dataset:{cardDemo:locale,assetRoot:"../../assets/card-demo/"},querySelector(s){return map[s]?.[0]||null;},querySelectorAll(s){return map[s]||[];}};
 map["[data-demo-card]"][0].dataset.face="front";
 return {root,map};
}
let draws=0;
for(const locale of langs){
 for(let selection=0;selection<5;selection++){
  const {root,map}=make(locale);
  const context={document:{querySelector(s){return s==="[data-card-demo]"?root:null},documentElement:{lang:locale}},crypto:{getRandomValues(arr){arr[0]=selection;return arr;}},Math,Uint32Array};
  vm.runInNewContext(js,context,{filename:"card-demo.js"});
  assert.equal(root.dataset.drawnCard,ids[selection],locale+" uniform selection "+selection);
  assert.ok(map["[data-demo-title]"][0].textContent.length>4,locale+" front heading");
  assert.ok(map["[data-demo-story]"][0].textContent.length>50,locale+" original scenario translation");
  assert.ok(map["[data-demo-question-one]"][0].textContent.length>15,locale+" question one");
  assert.ok(map["[data-demo-question-two]"][0].textContent.length>15,locale+" question two");
  assert.equal(map["[data-demo-explain-title]"][0].textContent,map["[data-demo-explain-title]"][1].textContent,locale+" explanation title parity");
  assert.equal(map["[data-demo-svg]"][0].dataset.cardId,ids[selection],locale+" matching scene");
  const flip=map["[data-demo-flip]"][0],card=map["[data-demo-card]"][0];
  flip.events.click();
  assert.equal(card.dataset.face,"back");
  assert.equal(flip.attr["aria-pressed"],"true");
  assert.equal(map["[data-demo-back]"][0].attr["aria-hidden"],"false");
  flip.events.click();
  assert.equal(card.dataset.face,"front");
  assert.equal(flip.attr["aria-pressed"],"false");
  draws++;
 }
}
console.log("CARD_DEMO_QA",JSON.stringify({locales:4,selectedCards:5,deterministicDraws:draws,productPages:htmlCount,vectorSvgFiles:ids.length,failed:0}));
