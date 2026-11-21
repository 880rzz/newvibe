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
console.log("48 locale cache, symmetric CTAs, editorial imprint and text-only footer source checks passed; live Safari QA remains required.");
