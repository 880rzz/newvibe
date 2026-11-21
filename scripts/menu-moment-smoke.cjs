"use strict";
/* Four-language, dependency-free menu moment regression (Node 22). */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const source=fs.readFileSync("site-menu.js","utf8");
const css=fs.readFileSync("catalog.css","utf8");
assert.match(source,/setupMenuMoment/);
assert.match(source,/getRandomValues/);
assert.match(source,/synodic=29\.530588853/);
assert.match(source,/last>=0&&choice>=last/);
assert.match(css,/\.fep-page \.site-menu \.fep-menu-moment/);
assert.match(css,/@media\(min-width:1120px\)/);
assert.doesNotMatch(source,/localStorage|sessionStorage|fetch\(|XMLHttpRequest|navigator\.geolocation/i);
assert.doesNotMatch(source,/Tarot|jóslásra alkalmas|diagnózis|ingatábl/i);

for(const locale of ["en","hu","de","fr"]){
  const handlers={};
  let random=0;
  class Node{
    constructor(){this.hidden=false;this.attrs={};this.children=[];this.events={};this.nodes={};this.textContent="";this.classList={add(){},remove(){},toggle(){return true;}};}
    querySelector(selector){return this.nodes[selector]||(this.nodes[selector]=new Node());}
    querySelectorAll(){return [];}
    appendChild(child){this.children.push(child);return child;}
    replaceChildren(){this.children=[];}
    setAttribute(key,value){this.attrs[key]=value;}
    getAttribute(key){return this.attrs[key];}
    addEventListener(type,fn){(this.events[type]||(this.events[type]=[])).push(fn);}
    focus(){document.activeElement=this;}
    getClientRects(){return [1];}
    click(){for(const fn of this.events.click||[])fn();}
  }
  const toggle=new Node(),menu=new Node(),close=new Node(),inner=new Node();
  menu.hidden=true;
  menu.nodes[".site-menu-inner"]=inner;
  const docNodes={menuToggle:toggle,siteMenu:menu,menuClose:close};
  const document={
    documentElement:{lang:locale},
    body:{classList:{add(){},remove(){}}},
    getElementById(id){return docNodes[id];},
    createElement(){return new Node();},
    querySelectorAll(){return [];},
    addEventListener(type,fn){handlers[type]=fn;},
    activeElement:toggle
  };
  const crypto={getRandomValues(buffer){buffer[0]=random++;return buffer;}};
  vm.runInNewContext(source,{document,crypto,Intl,Date,Math,Uint32Array,console},{filename:"site-menu.js"});
  assert.equal(inner.children.length,1,locale+" one sidebar card");
  const card=inner.children[0];
  toggle.click();
  assert.equal(menu.hidden,false,locale+" menu opens");
  assert.equal(toggle.getAttribute("aria-expanded"),"true");
  const current=card.querySelector(".fep-moment-thought").textContent;
  assert.ok(current.length>25,locale+" readable message");
  const days=card.querySelector(".fep-moment-days").children;
  assert.equal(days.length,7,locale+" seven calendar days");
  assert.ok(days.every(d=>d.attrs["aria-label"]),locale+" accessible day names");
  assert.match(card.querySelector(".fep-moment-phase").textContent,/%$/,locale+" lunar approximation");
  card.querySelector(".fep-moment-again").click();
  assert.notEqual(card.querySelector(".fep-moment-thought").textContent,current,locale+" no immediate repeat");
  close.click();
  assert.equal(menu.hidden,true,locale+" closes");
  toggle.click();
  assert.equal(menu.hidden,false,locale+" reopens");
  assert.notEqual(card.querySelector(".fep-moment-thought").textContent,current,locale+" rotates when reopened");
  console.log(locale+": menu, locale copy, new message, moon display, seven-day calendar passed");
}


const slugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
let checked=0;
for(const lang of ["en","hu","de","fr"]){
  const base=lang==="en"?"":lang+"/";
  for(const page of ["index.html","catalog/index.html","about/index.html",...slugs.map(slug=>"products/"+slug+".html")]){
    const content=fs.readFileSync(base+page,"utf8");
    const expectedCssVersion=page.startsWith("products/")?12:11;
    const cssRef="catalog.css?v="+expectedCssVersion;
    assert.equal(content.split(cssRef).length-1,1,lang+" "+page+" exact stylesheet version");
    if(expectedCssVersion===12)assert.ok(!content.includes("catalog.css?v=11"),lang+" "+page+" old product CSS not referenced");
    assert.equal((content.match(/site-menu\.js\?v=2/g)||[]).length,1,lang+" "+page+" latest menu script");
    assert.doesNotMatch(content,/catalog\.css\?v=10|site-menu\.js\?v=1/,lang+" "+page+" no stale asset URL");
    checked++;
  }
}
assert.equal(checked,48);
console.log("48 localized HTML pages serve fresh menu JS and CSS URLs.");
