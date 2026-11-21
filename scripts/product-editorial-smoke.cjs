"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const slugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
let count=0,notes=0,scenarios=0;
for(const lang of ["en","hu","de","fr"]){
 const root=lang==="en"?"":lang+"/";
 const pages=["index.html","about/index.html","catalog/index.html",...slugs.map(s=>"products/"+s+".html")];
 for(const file of pages){
  const src=fs.readFileSync(root+file,"utf8");count++;
  assert.ok(src.includes("catalog.css?v=10"),lang+" "+file+" must use one shared CSS version");
  const footer=src.match(/<footer class="fep-footer section-shell">([\s\S]*?)<\/footer>/);
  assert.ok(footer&&!/class="[^"]*\bbutton\b/.test(footer[1]),lang+" "+file+" footer has no sales buttons");
  assert.ok(!src.includes('class="fep-trust section-shell"'),lang+" "+file+" must not contain the generic AI banner");
 }
 const catalog=fs.readFileSync(root+"catalog/index.html","utf8");
 assert.equal((catalog.match(/class="fep-card-editorial"/g)||[]).length,9,lang+" 9 rich product cards");
 assert.equal((catalog.match(/class="fep-card">/g)||[]).length,9,lang+" 9 catalog items");
 assert.equal((catalog.match(/class="fep-catalog-hero-figure"/g)||[]).length,1,lang+" real catalog figure");
 assert.match(catalog,/<div class="fep-hero-art">[\s\S]*?<\/div><figcaption class="fep-concept-caption">/,"caption outside clipped oval: "+lang);
 const about=fs.readFileSync(root+"about/index.html","utf8");
 assert.ok(about.includes('id="impressum"'),lang+" imprint anchor");
 const home=fs.readFileSync(root+"index.html","utf8");
 assert.ok(!/class="button button-ink" href="(?:\.\/)?about\/">[^<]*(?:AI|KI-Transparenz|l’IA)/.test(home),lang+" no public technology pitch");
 for(const slug of slugs){
  const file="products/"+slug+".html",html=fs.readFileSync(root+file,"utf8");
  const label=lang+" "+slug;
  assert.equal((html.match(/class="fep-product-scenarios section-shell"/g)||[]).length,1,label+" problem-to-solution block");
  assert.equal((html.match(/class="fep-scenario"/g)||[]).length,2,label+" exactly two relevant situations");
  assert.equal((html.match(/class="fep-scenario-answer"/g)||[]).length,2,label+" two practical responses");
  assert.ok(html.includes('class="fep-product-story section-shell"'),label+" detailed editorial story");
  assert.ok(html.includes('class="fep-story-facts"'),label+" meaningful specification facts");
  assert.ok(html.includes('data-editorial-locale="'+lang+'"'),label+" localized narrative");
  assert.ok(html.includes('id="preorder"')&&html.includes('href="#preorder"'),label+" internal preorder anchor");
  assert.equal((html.match(/class="fep-story-more section-shell"/g)||[]).length,1,label+" bottom navigation");
  assert.ok(!html.includes("fep-trust section-shell"),label+" generic section absent");
  if(slug==="helyed-van-koztunk"){
   assert.ok(html.includes("helyed-van-koztunk-01.jpg")&&html.includes("helyed-van-koztunk-02.jpg"),label+" original actual-photo gallery");
   assert.ok(html.includes("fep-product-gallery"),label+" source picture gallery");
  }
  scenarios+=2;notes++;
 }
}
assert.equal(count,48);
assert.equal(notes,36);
assert.equal(scenarios,72);
const css=fs.readFileSync("catalog.css","utf8");
assert.ok(css.includes(".fep-catalog-hero-figure .fep-concept-caption{position:static"),"caption must be outside clipping context");
assert.ok(css.includes(".fep-product-scenarios"),"original paper-like scenario grid");
console.log("Editorial contract OK: "+count+" localized pages, "+notes+" deep product stories, "+scenarios+" pain/solution cards, four captions below overflow-free imagery.");
