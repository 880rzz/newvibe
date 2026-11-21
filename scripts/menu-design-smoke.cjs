"use strict";
// Restored original header, accessible navigation and category parity: zero dependencies.
const fs=require("node:fs"),path=require("node:path"),vm=require("node:vm"),assert=require("node:assert/strict");
const langs=["en","hu","de","fr"],slugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
const order=["naplok-tervezok","segito-onreflexio","mesek-foglalkoztatok"],counts=[4,2,3];
for(const lang of langs){
 const base=lang==="en"?"":lang+"/";
 for(const suffix of ["index.html","catalog/index.html","about/index.html",...slugs.map(s=>"products/"+s+".html")]){
  const filename=base+suffix,text=fs.readFileSync(filename,"utf8");
  assert.ok(text.includes('class="site-header fep-restored-header"'),filename+" original header");
  assert.ok(text.includes('class="site-menu" id="siteMenu"'),filename+" original hamburger");
  assert.ok(text.includes('id="menuToggle"'),filename+" menu button");
  assert.ok(text.includes('class="fep-category-disclosure"'),filename+" product disclosure");
  assert.ok(text.includes('aria-expanded="false"'),filename+" disclosure state");
  assert.ok(text.includes('viewBox="0 0 72 34"'),filename+" original infinity mark");
  for(const id of order)assert.ok(text.includes("catalog/#"+id),filename+" dropdown "+id);
  const js=text.match(/src="([^"]*site-menu\.js\?v=2)"/);
  assert.ok(js,filename+" has shared menu script");
  assert.ok(fs.existsSync(path.join(path.dirname(filename),js[1].split("?")[0])),filename+" correct relative JS");
  const buttons=[...text.matchAll(/<(a|button)\b[^>]*class="[^"]*\bbutton\b[^"]*"[^>]*>([\s\S]*?)<\/\1>/g)];
  for(const b of buttons)assert.ok(!/<svg\b/.test(b[2]),filename+" button must not include SVG arrow");
 }
 const cat=fs.readFileSync(base+"catalog/index.html","utf8");
 for(let i=0;i<3;i++){
  const id=order[i],at=cat.indexOf('id="'+id+'"');
  assert.ok(at>=0,lang+" category "+id);
  const end=i<2?cat.indexOf('id="'+order[i+1]+'"'):cat.indexOf("</section>",at+60);
  const content=cat.slice(at,end<0?undefined:end);
  assert.equal((content.match(/class="fep-card"/g)||[]).length,counts[i],lang+" category "+id+" count");
 }
 const hero=cat.slice(cat.indexOf('<section class="fep-hero section-shell">'),cat.indexOf("</section>",cat.indexOf('<section class="fep-hero section-shell">')));
 assert.ok(!/class="button\b/.test(hero),lang+" no redundant catalogue hero button");
 const home=fs.readFileSync(base+"index.html","utf8");
 assert.ok(home.includes('class="hero-art fep-restored-art"'),lang+" old animated notebook");
 assert.ok(!home.includes("fep-home-paper-scene"),lang+" no overlapping paper mock cards");
 const about=fs.readFileSync(base+"about/index.html","utf8");
 assert.ok(about.includes("Sajbán-Frőhner Alexandra")&&about.includes('class="fep-about-preorder"'),lang+" creator and real preorder terms");
 assert.ok(!/not an invented company|még nem létező céget|société inventée|erfundenes Unternehmen/.test(about),lang+" obsolete defensive corporate copy");
}
const body={classList:{values:new Set(),add(k){this.values.add(k)},remove(k){this.values.delete(k)}}};
function fake(id){return {id,hidden:id==="siteMenu",attributes:{},events:{},focused:false,addEventListener(k,fn){this.events[k]=fn},setAttribute(k,v){this.attributes[k]=v},focus(){this.focused=true},getClientRects(){return [1]}};}
const button=fake("menuToggle"),menu=fake("siteMenu"),close=fake("menuClose"),last=fake("last"),listeners={};
menu.querySelectorAll=()=>[close,last];
const context={document:{body,activeElement:button,querySelectorAll(){return []},getElementById(id){return {menuToggle:button,siteMenu:menu,menuClose:close}[id]},addEventListener(k,fn){listeners[k]=fn}},console};
vm.runInNewContext(fs.readFileSync("site-menu.js","utf8"),context,{filename:"site-menu.js"});
button.events.click();
assert.equal(menu.hidden,false);assert.equal(button.attributes["aria-expanded"],"true");assert.ok(body.classList.values.has("fep-menu-open"));
listeners.keydown({key:"Escape",preventDefault(){}});
assert.equal(menu.hidden,true);assert.equal(button.attributes["aria-expanded"],"false");assert.ok(!body.classList.values.has("fep-menu-open"));
button.events.click();close.events.click();
assert.equal(menu.hidden,true);
console.log("Original moving design, 48 localized menus, 4 catalogues × 3 categories, arrowless buttons, keyboard menu state OK");
