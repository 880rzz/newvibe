"use strict";
const fs=require("node:fs"),crypto=require("node:crypto"),assert=require("node:assert/strict"),path=require("node:path");
const assets=["bookmark-pencil","speech-thread","world-stories","bench-bag","desk-chair","folded-help","planner-tabs","journal-candle"];
for(const key of assets){
 const s=fs.readFileSync("assets/svg-motion/"+key+".svg","utf8");
 assert.match(s,/^<svg[^>]+viewBox="[\d ]+"/,"responsive viewBox: "+key);
 assert.match(s,/prefers-reduced-motion:reduce/,"reduced motion: "+key);
 assert.match(s,/<style><!\[CDATA\[/,"vector styling: "+key);
 assert.ok(!/<script|<foreignObject|onload=|href="https?:/i.test(s),"no active or remote SVG elements: "+key);
 assert.ok(Buffer.byteLength(s)<10000,"small asset: "+key);
 assert.ok(s.endsWith("</svg>"),"closed SVG: "+key);
}
const portrait=fs.readFileSync("assets/portraits/alexandra-sajban-frohner.webp");
const hash=crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+portrait.length+"\0"),portrait])).digest("hex");
assert.equal(hash,"e155107f4f12a9bbf35c4f0c57b0f4df8e96f855","original RMT portrait is unmodified");
assert.equal(portrait.length,68282);
const slugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
let routes=0,scenes=0;
for(const lang of ["en","hu","de","fr"]){
 const base=lang==="en"?"":lang+"/";
 const pages=["index.html","about/index.html","catalog/index.html",...slugs.map(x=>"products/"+x+".html")];
 for(const file of pages){
  const s=fs.readFileSync(base+file,"utf8");routes++;
  assert.ok(s.includes("catalog.css?v=8"),lang+"/"+file+" stylesheet cache version");
  const svgImages=[...s.matchAll(/<img[^>]+class="[^"]*(?:fep-motion-|fep-category-scene|fep-product-title-motif|fep-portrait-accent)[^"]*"[^>]*>/g)].map(m=>m[0]);
  for(const img of svgImages){scenes++;assert.ok(img.includes('alt=""')&&img.includes('aria-hidden="true"'),lang+"/"+file+" decorative imagery accessibility");}
  const assets=[...s.matchAll(/src="([^"]+assets\/(?:svg-motion|portraits)\/[^"]+)"/g)].map(m=>m[1]);
  for(const href of assets){
   const filename=path.normalize(path.join(path.dirname(base+file),href));
   assert.ok(fs.existsSync(filename),lang+"/"+file+" missing local image "+href);
  }
  if(file==="index.html"){
   assert.ok(s.includes("fep-home-portrait"),lang+" genuine portrait homepage");
   assert.ok(s.includes("fep-motion-hero-bookmark")&&s.includes("fep-motion-quiz")&&s.includes("fep-motion-collection"),lang+" homepage motifs");
  }else if(file==="about/index.html"){
   assert.ok(s.includes("fep-alexandra-portrait")&&s.includes("fep-portrait-accent"),lang+" creator portrait and bench accent");
  }else if(file==="catalog/index.html"){
   assert.equal((s.match(/class="fep-category-scene"/g)||[]).length,3,lang+" three catalog motifs");
  }else if(file.startsWith("products/")){
   assert.equal((s.match(/class="fep-product-title-motif"/g)||[]).length,1,lang+" individual product motif: "+file);
  }
 }
}
assert.equal(routes,48);
assert.ok(scenes>=64,"at least 64 original SVG placements in localized pages");
console.log("Vector release contract: "+routes+" routes, "+scenes+" SVG motifs, 8 assets and exact Alexandra portrait verified.");
