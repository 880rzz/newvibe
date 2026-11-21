"use strict";
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const slugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
const motifFiles=["editorial-bookmark","editorial-pencil","editorial-stars","editorial-divider","motif-diofa-workshop",...slugs.map(s=>"motif-"+s)];
const svgDir=path.join(root,"assets/svg");
assert.equal(fs.readdirSync(svgDir).filter(f=>f.endsWith(".svg")).length,14);
for(const name of motifFiles){
 const data=fs.readFileSync(path.join(svgDir,name+".svg"),"utf8");
 assert.ok(data.startsWith('<svg xmlns="http://www.w3.org/2000/svg"'),name);
 assert.ok(data.trim().endsWith("</svg>"),name);
 assert.ok(!/<script|foreignObject|href=|onload=|<image/i.test(data),name+" trusted vector only");
 assert.ok(data.length<5000,name+" lightweight");
}
const css=fs.readFileSync(path.join(root,"editorial-motion.css"),"utf8");
assert.ok(css.includes("prefers-reduced-motion:reduce"));
assert.ok(css.includes("pointer-events:none"));
const categories=["naplok-tervezok","segito-onreflexio","mesek-foglalkoztatok"];
let total=0,decorations=0;
for(const lang of ["en","hu","de","fr"]){
 const pre=lang==="en"?"":lang+"/";
 const pages=["index.html","about/index.html","catalog/index.html",...slugs.map(s=>"products/"+s+".html")];
 for(const file of pages){
  const key=pre+file,html=fs.readFileSync(path.join(root,key),"utf8");
  assert.ok(html.includes("editorial-motion.css?v=1"),key+" missing shared stylesheet");
  const imgRefs=[...html.matchAll(/<img[^>]*class="[^"]*(?:fep-editorial-|fep-about-motif|fep-category-motif|fep-product-motif)[^"]*"[^>]*>/g)].map(m=>m[0]);
  assert.ok(imgRefs.length>=1,key+" missing illustrative SVG");
  for(const tag of imgRefs){
   assert.ok(tag.includes('alt=""')&&tag.includes('aria-hidden="true"'),key+" decorative semantics");
   const src=tag.match(/src="([^"]+)"/)?.[1];assert.ok(src&&src.endsWith(".svg"),key+" not SVG");
   const asset=path.resolve(path.dirname(path.join(root,key)),src);
   assert.ok(fs.existsSync(asset),key+" missing "+src);
  }
  if(file==="index.html"){
   assert.equal((html.match(/fep-editorial-hero-(?:bookmark|pencil|stars)"/g)||[]).length,3,key+" hero motifs");
   assert.ok(html.includes('class="fep-editorial-underline"'),key+" editorial underline");
  }else if(file==="about/index.html"){
   assert.ok(html.includes('class="fep-about-motif-row"'),key+" 2 about motifs");
   assert.equal((html.match(/class="fep-about-motif"/g)||[]).length,2,key+" 2 distinct about illustrations");
  }else if(file==="catalog/index.html"){
   assert.equal((html.match(/class="fep-category-motif"/g)||[]).length,3,key+" category parity");
   for(const id of categories)assert.ok(html.includes('id="'+id+'"'),key+" existing category");
  }else {
   const slug=file.split("/").at(-1).replace(".html","");
   assert.ok(html.includes("assets/svg/motif-"+slug+".svg"),key+" precise product motif mapping");
   assert.equal((html.match(/class="fep-product-motif"/g)||[]).length,1,key+" exactly one image");
  }
  decorations+=imgRefs.length;total++;
 }
}
assert.equal(total,48);
console.log("SVG_EDITORIAL_QA_OK",JSON.stringify({pages:total,svgAssets:motifFiles.length,decorativeImages:decorations,langs:4}));
