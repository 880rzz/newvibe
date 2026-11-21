// Source-grounded three-sentence flip cards on all four homepages.
// Data is public excerpt pairs only: print PDFs are never checked into the site.
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const bank=require("../three-sentences.js");
const langs=["en","hu","de","fr"];
assert.equal(bank.entries.length,15,"curated sentence pairs from five supplied PDFs");
assert.equal(new Set(bank.entries.map(e=>e.id)).size,13,"stable unique IDs");
assert.deepEqual([...new Set(bank.entries.map(e=>e.book))].sort(),
 ["egy-kis-ter","helyed-van-koztunk","na-most-mit-csinaljak","veled-a-mindennapokban","helyed-van-koztunk-segito-harmonika"].sort(),"four manuscript sources");
const bookNames={"egy-kis-ter":"Egy kis tér","helyed-van-koztunk":"Helyed van köztünk",
 "na-most-mit-csinaljak":"Na, most mit csináljak?","veled-a-mindennapokban":"Veled a mindennapokban","helyed-van-koztunk-segito-harmonika":"Helyed van köztünk · Segítő harmonika"};
const pageLabels={en:"p.",hu:"o.",de:"S.",fr:"p."};
const fixed={"space-01":"Egy helyzetet válassz.","prayer-01":"A többi várhat.",
 "stories-01":"Mesélj, fess, rajzolj vagy írj – ahogy jólesik!","cards-01":"Melléd ülhetek?","harmonica-01":"Nem kell egyedül megoldanod.","harmonica-02":"Leülhetsz, ihatsz vizet, kérhetsz csendet vagy szünetet."};
for(const [id,sentence] of Object.entries(fixed)){
 assert.equal(bank.entries.find(e=>e.id===id)?.text.hu[0],sentence,"original Hungarian PDF excerpt "+id);
}
for(const entry of bank.entries){
 assert.ok(bookNames[entry.book],"named manuscript source "+entry.id);
 assert.ok(Number.isInteger(entry.page)&&entry.page>=2&&entry.page<=139,"source PDF page "+entry.id);
 assert.deepEqual(Object.keys(entry.text).sort(),langs.slice().sort(),"all translations "+entry.id);
 for(const lang of langs){
  const pair=entry.text[lang];
  assert.equal(pair.length,2,lang+" manuscript quote and reverse text "+entry.id);
  assert.ok(pair.every(s=>typeof s==="string"&&s.trim().length>10&&s.length<180),lang+" readable full sentences "+entry.id);
 }
}
const random=()=>({getRandomValues(u32){u32[0]=0;return u32;}});
function makeCard(){
 const front={textContent:"Fallback front"},back={textContent:"Fallback back"};
 const frontFace={children:[],append(node){this.children.push(node)}};
 const classes=new Set();
 const nodes={".card-front .fep-note-text":front,".card-back .fep-note-text":back,".card-front":frontFace};
 return {dataset:{},attrs:{},classList:{remove(s){classes.delete(s)},add(s){classes.add(s)},contains(s){return classes.has(s)}},
  querySelector(sel){if(sel===".fep-sentence-source")return frontFace.children.find(x=>x.className==="fep-sentence-source")||null;return nodes[sel]||null},
  setAttribute(name,val){this.attrs[name]=String(val)},
  getAttribute(name){return this.attrs[name]},
  front,back,frontFace};
}
for(const lang of langs){
 const prefix=lang==="en"?"":lang+"/",base=lang==="en"?"":"../";
 const html=fs.readFileSync(prefix+"index.html","utf8");
 assert.ok(html.includes('<html lang="'+lang+'">'),lang+" document language");
 assert.equal((html.match(/fep-restored-notecard /g)||[]).length,3,lang+" exactly three original paper cards");
 assert.equal((html.match(/class="fep-sentence-source"/g)||[]).length,3,lang+" three static provenance labels without JavaScript");
 assert.ok(html.includes('href="'+base+'three-sentences.css?v=1"'),lang+" dedicated, scoped style");
 assert.ok(html.includes('src="'+base+'three-sentences.js?v=2"'),lang+" shared local randomized module");
 assert.ok(html.includes('src="'+base+'site-menu.js?v=3"'),lang+" accessible dynamic flip handler");
 assert.ok(html.indexOf('src="'+base+'three-sentences.js?v=1"')<html.indexOf('src="'+base+'site-menu.js?v=3"'),lang+" randomization before flip listener");
 assert.ok(html.includes('id="threeSentencesAgain"')&&html.includes('id="threeSentencesStatus"'),lang+" optional redraw and live feedback");
 assert.equal((html.match(/<section class="recognition fep-restored-recognition section-shell"/g)||[]).length,1,lang+" reuse original section");
 const first=bank.drawThree(lang,random());
 assert.equal(first.length,3,lang+" always draw exactly three");
 assert.equal(new Set(first.map(x=>x.id)).size,3,lang+" without repetition");
 const second=bank.drawThree(lang,random(),first.map(x=>x.id));
 assert.ok(second.every(x=>!first.map(v=>v.id).includes(x.id)),lang+" redraw omits previous three");
 const cards=[makeCard(),makeCard(),makeCard()];
 const listener={};
 const action={addEventListener(type,fn){listener[type]=fn}};
 const status={textContent:""};
 const doc={
  documentElement:{lang},querySelectorAll(s){assert.equal(s,".fep-restored-notecard");return cards},
  getElementById(id){return id==="threeSentencesAgain"?action:id==="threeSentencesStatus"?status:null},
  createElement(tag){assert.equal(tag,"span");return {className:"",textContent:""}}
 };
 assert.equal(bank.install(doc,random()),true,lang+" first paint");
 const initial=cards.map(c=>c.dataset.sentenceId);
 assert.equal(new Set(initial).size,3,lang+" distinct visible cards");
 assert.ok(cards.every(c=>c.getAttribute("aria-pressed")==="false"&&c.getAttribute("aria-label")===c.front.textContent),lang+" correct accessible names");
 assert.ok(cards.every(c=>c.frontFace.children.length===1&&c.frontFace.children[0].textContent.includes(pageLabels[lang])),lang+" per-card visible source and page");
 assert.equal(typeof listener.click,"function",lang+" redraw button wired");
 cards[0].classList.add("is-flipped");
 listener.click();
 assert.ok(cards.every(c=>!initial.includes(c.dataset.sentenceId)),lang+" redraw selects different three");
 assert.ok(cards.every(c=>!c.classList.contains("is-flipped")&&c.getAttribute("aria-pressed")==="false"),lang+" redraw restores front face");
 assert.ok(cards.every(c=>c.getAttribute("aria-label")===c.front.textContent&&c.frontFace.children.length===1),lang+" fresh ARIA and no duplicate provenance");
 assert.ok(status.textContent.length>8,lang+" localized polite announcement");
}
const css=fs.readFileSync("three-sentences.css","utf8");
assert.ok(css.includes("fep-sentence-source")&&css.includes("prefers-reduced-motion"),"scoped source styling and reduced-motion preference");
const menu=fs.readFileSync("site-menu.js","utf8");
assert.ok(menu.includes("const labelFor=flipped=>card.querySelector"),"flip labels read dynamically after redraw");
console.log("THREE_SENTENCES_QA: 15 pairs from five PDFs; HU/EN/DE/FR fallback, secure 3/13 draw, no duplicates, redraw, source pages and ARIA passed.");
