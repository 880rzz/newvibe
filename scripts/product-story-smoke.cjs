"use strict";
const fs=require("node:fs"),assert=require("node:assert/strict");
const slugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
const deprecated=["AI transparency","KI-Transparenz","AI és szerkesztői átláthatóság","AI & Editorial Trust","AI-generated","AI-látványterv","AI-val készült","AI-közreműködés","KI-generierte","KI-Unterstützung","Visualisation IA","générée par IA","l’IA"];
let routes=0,stories=0,previews=0,heroCaptions=0;
for(const lang of ["en","hu","de","fr"]){
 const root=lang==="en"?"":lang+"/";
 const home=fs.readFileSync(root+"index.html","utf8");
 const about=fs.readFileSync(root+"about/index.html","utf8");
 const cat=fs.readFileSync(root+"catalog/index.html","utf8");
 assert.ok(cat.includes('<figure class="fep-catalog-hero-figure">'),lang+" external collection figure");
 assert.ok(cat.includes('<figcaption class="fep-collection-note">'),lang+" visible figure caption");
 assert.ok(!cat.includes('<p class="fep-concept-caption">'),lang+" no caption inside clipped blob");
 heroCaptions++;
 assert.equal((cat.match(/class="fep-card-editorial"/g)||[]).length,9,lang+" nine detailed first-edition catalog cards");
 previews+=9;
 const all=[home,cat,about];
 for(const slug of slugs){
  const h=fs.readFileSync(root+"products/"+slug+".html","utf8");
  all.push(h);
  assert.equal((h.match(/class="fep-product-story section-shell"/g)||[]).length,1,lang+" "+slug+" story");
  assert.equal((h.match(/class="fep-story-path"/g)||[]).length,1,lang+" "+slug+" problem-solution");
  assert.equal((h.match(/class="fep-story-need"/g)||[]).length,1,lang+" "+slug+" need");
  assert.equal((h.match(/class="fep-story-answer"/g)||[]).length,1,lang+" "+slug+" answer");
  assert.equal((h.match(/class="fep-story-copy"/g)||[]).length,1,lang+" "+slug+" deep prose");
  assert.equal((h.match(/class="fep-story-facts"/g)||[]).length,1,lang+" "+slug+" facts");
  assert.ok(h.includes('class="fep-detail-list"'),lang+" "+slug+" original three-question structure");
  assert.ok(h.includes('class="fep-availability fep-preorder fep-preorder-final section-shell"'),lang+" "+slug+" bottom preorder block");
  assert.equal((h.match(/class="button button-coral fep-preorder-action"/g)||[]).length,1,lang+" "+slug+" unique email CTA");
  assert.equal((h.match(/class="button fep-preorder-more"/g)||[]).length,1,lang+" "+slug+" catalog exit styled as button");
  assert.ok(!h.includes('href="#preorder"'),lang+" "+slug+" no redundant preorder jump");
  assert.ok(h.indexOf('class="fep-product-story section-shell"')<h.indexOf('id="preorder"'),lang+" "+slug+" story precedes preorder");
  assert.ok(h.indexOf('id="preorder"')<h.indexOf('<footer class="fep-footer'),lang+" "+slug+" preorder above footer");
  assert.ok(!h.includes('class="fep-trust section-shell"'),lang+" "+slug+" no repeated generic block");
  const content=h.match(/<div class="fep-story-copy">([\s\S]*?)<\/div>/)?.[1]||"";
  assert.equal((content.match(/<p>/g)||[]).length,3,lang+" "+slug+" substantial thematic paragraphs");
  if(slug!=="helyed-van-koztunk"&&h.includes('class="fep-concept-image"')){
   assert.ok(h.includes('class="fep-photo-note"'),lang+" "+slug+" concept cover label");
  }
  stories++;
 }
 assert.equal(all.length,12);
 for(const [pageIndex,page] of all.entries()){
  const expectedVersion="catalog.css?v=15";
  assert.ok(page.includes(expectedVersion),lang+" correct cache-busted layout CSS "+expectedVersion);
  const visiblePage=page.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,"");
  for(const term of deprecated)assert.ok(!visiblePage.includes(term),lang+" old user-facing text: "+term);
 }
 routes+=all.length;
}
const css=fs.readFileSync("catalog.css","utf8");
assert.ok(css.includes(".fep-catalog-hero-figure")&&css.includes(".fep-collection-note"),"caption outside image mask CSS");
assert.ok(css.includes(".fep-story-path")&&css.includes(".fep-card-editorial"),"need-to-solution card system CSS");
assert.equal(routes,48);assert.equal(stories,36);assert.equal(previews,36);assert.equal(heroCaptions,4);
console.log("Story regression contract: "+routes+" localized pages; "+stories+" deep stories; "+previews+" enhanced catalog cards; "+heroCaptions+" readable external image captions.");
