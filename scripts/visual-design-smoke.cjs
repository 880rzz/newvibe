"use strict";
const fs=require("node:fs"),assert=require("node:assert/strict");
const css=fs.readFileSync("catalog.css","utf8");
assert.match(css,/--fep-cta-primary:#1f4a3d/);
assert.match(css,/\.fep-page\{[^}]*padding-top:0/);
assert.match(css,/\.fep-page \.fep-restored-header\{[^}]*position:sticky;top:0/);
assert.match(css,/@keyframes fep-note-floating/);
assert.match(css,/@keyframes fep-note-line/);
const slugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
for(const lang of ["en","hu","de","fr"]){
const base=lang==="en"?"":lang+"/";
const pages=["index.html","catalog/index.html","about/index.html",...slugs.map(s=>"products/"+s+".html")];
assert.equal(pages.length,12);
for(const path of pages){
 const page=fs.readFileSync(base+path,"utf8");
 assert.ok(page.includes("catalog.css?v=8"),lang+" "+path+" cache mismatch");
 const footer=page.match(/<footer class="fep-footer section-shell">([\s\S]*?)<\/footer>/);
 assert.ok(footer,lang+" "+path+" footer exists");
 assert.ok(footer[1].includes('class="fep-footer-nav"'),lang+" "+path+" footer text nav");
 assert.ok(footer[1].includes("impressum")&&footer[1].includes("how-made"),lang+" "+path+" imprint links");
 assert.ok(!/class="[^"]*\bbutton\b/.test(footer[1]),lang+" "+path+" no footer CTA class");
}
const home=fs.readFileSync(base+"index.html","utf8");
assert.equal((home.match(/class="fep-note-doodle"/g)||[]).length,3,lang+" SVG cards");
}
assert.match(css,/\.fep-page \.fep-home-actions \.button[^\n]*\{/,"CTA symmetric padding selector");
assert.match(css,/padding:13px 26px/,"CTA equal inline padding");
for(const lang of ["en","hu","de","fr"]){
 const base=lang==="en"?"":lang+"/";
 const about=fs.readFileSync(base+"about/index.html","utf8");
 assert.ok(about.includes('id="how-made"')&&about.includes('id="impressum"'),lang+" editorial and imprint anchors");
 const voice={en:"I love working with children",hu:"Szeretek gyerekekkel",de:"Ich arbeite gern mit Kindern",fr:"J’aime travailler avec les enfants"};
 assert.ok(about.includes(voice[lang]),lang+" first-person creator voice");
 const home=fs.readFileSync(base+"index.html","utf8");
 assert.ok(home.includes('class="fep-footer-nav"')&&!/<footer[^>]*>[\s\S]*?class="button[^"]*"/.test(home),lang+" footer no CTA pills");
}
for(const lang of ["en","hu","de","fr"]){
 const base=lang==="en"?"":lang+"/";
 const catalog=fs.readFileSync(base+"catalog/index.html","utf8");
 assert.equal((catalog.match(/class="fep-card-editorial"/g)||[]).length,9,lang+" rich catalogue cards");
 for(const slug of slugs){
  const html=fs.readFileSync(base+"products/"+slug+".html","utf8");
  assert.ok(html.includes('class="fep-product-story section-shell"'),lang+" "+slug+" editorial content");
  assert.ok(html.includes('data-editorial-locale="'+lang+'"'),lang+" "+slug+" correct language");
  assert.equal((html.match(/class="fep-story-copy"/g)||[]).length,1,lang+" "+slug+" narrative");
  assert.equal((html.match(/class="fep-story-facts"/g)||[]).length,1,lang+" "+slug+" facts");
  assert.ok(!html.includes('class="fep-trust section-shell"'),lang+" "+slug+" no generic AI trust banner");
 }
}

const asset=fs.readFileSync("assets/alexandra-sajban-frohner-portrait.svg","utf8");
const embed=asset.match(/href="data:image\/webp;base64,([A-Za-z0-9+/=]+)"/);
assert.ok(embed&&embed[1].length>80000,"Original Alexandra portrait must be self-hosted and embedded");
const original=Buffer.from(embed[1],"base64");
assert.equal(original.length,68282,"Preserve original portrait file size");
const crypto=require("node:crypto");
const gitBlob=crypto.createHash("sha1").update("blob "+original.length+"\u0000").update(original).digest("hex");
assert.equal(gitBlob,"e155107f4f12a9bbf35c4f0c57b0f4df8e96f855","Original RMT portrait bytes remain unchanged");
for(const lang of ["en","hu","de","fr"]){
 const base=lang==="en"?"":lang+"/";
 for(const path of ["index.html","about/index.html"]){
   const html=fs.readFileSync(base+path,"utf8");
   assert.ok(html.includes('class="fep-portrait fep-'),lang+" "+path+" portrait figure");
   assert.ok(html.includes("alexandra-sajban-frohner-portrait.svg"),lang+" "+path+" source portrait path");
   assert.ok(!html.includes("raw.githubusercontent.com"),lang+" "+path+" portrait must be self-hosted");
 }
 for(let i=0;i<slugs.length;i++){
  const html=fs.readFileSync(base+"products/"+slugs[i]+".html","utf8");
  assert.ok(html.includes('fep-story-illustration-'+(i+1)),lang+" "+slugs[i]+" unique SVG motif");
  assert.ok(html.includes('<blockquote>'),lang+" "+slugs[i]+" featured quotation");
 }
}

console.log("48 locale cache, nine enriched catalog cards per language, 36 unique product stories, editorial footer and CTA checks passed.");
