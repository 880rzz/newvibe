"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs");
const slugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
let checked=0,galleries=0;
for(const lang of ["en","hu","de","fr"]){
 const base=lang==="en"?"":lang+"/";
 for(const slug of slugs){
  const name=base+"products/"+slug+".html",html=fs.readFileSync(name,"utf8");checked++;
  assert.ok(html.includes('class="fep-product-story section-shell"'),name+" detailed story retained");
  assert.equal((html.match(/id="preorder"/g)||[]).length,1,name+" preorder section anchor");
  assert.equal((html.match(/href="#preorder"/g)||[]).length,1,name+" bottom preorder return link");
  assert.ok(html.includes('class="fep-home-actions section-shell"'),name+" usable bottom navigation");
  assert.ok(html.includes('href="../catalog/"'),name+" localized catalog return");
  if(slug==="helyed-van-koztunk"){
   galleries++;
   assert.ok(html.includes('class="product-gallery section-shell"'),name+" genuine product photo gallery");
   assert.ok(html.includes("helyed-van-koztunk-01.jpg")&&html.includes("helyed-van-koztunk-02.jpg"),name+" both historic original product photographs");
   assert.ok((html.match(/<figcaption>/g)||[]).length>=2,name+" two readable photo captions");
  }else{
   assert.ok(!html.includes('class="product-gallery section-shell"'),name+" no fake physical product gallery");
  }
 }
}
assert.equal(checked,36);assert.equal(galleries,4);
const css=fs.readFileSync("styles.css","utf8");
assert.ok(css.includes(".product-gallery{display:grid;"),"existing responsive gallery layout is reused");
assert.ok(css.includes(".product-gallery img{"),"existing original product image style is reused");
console.log("Historical card-photo + story-navigation contract:",checked,"localized products,",galleries,"genuine photo galleries");
