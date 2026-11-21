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
for(const path of pages)assert.ok(fs.readFileSync(base+path,"utf8").includes("catalog.css?v=5"),lang+" "+path+" cache mismatch");
const home=fs.readFileSync(base+"index.html","utf8");
assert.equal((home.match(/class="fep-note-doodle"/g)||[]).length,3,lang+" SVG cards");
}
console.log("48 route cache, sticky header, green CTA and 3 SVG cards: source checks passed. Live visual QA remains required.");
