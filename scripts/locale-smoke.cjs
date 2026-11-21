// Canonical, deterministic locale routing. Direct URL language wins over browser/storage.
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const source=fs.readFileSync("locale-router.js","utf8");
function simulate(pathname,languages,stored=null,query="",hostname="880rzz.github.io"){
 let replaced=null;const saved=new Map(stored?[["fep.language",stored]]:[]),listeners={};
 const context={
  location:{pathname,hostname,search:query,hash:"",replace(value){replaced=value}},
  navigator:{languages,language:languages[0]||"en"},
  URLSearchParams,
  localStorage:{getItem(k){return saved.get(k)||null},setItem(k,v){saved.set(k,v)}},
  document:{addEventListener(name,cb){listeners[name]=cb}}
 };
 vm.runInNewContext(source,context);
 return {replaced,saved,listeners};
}
for(const code of ["en","hu","de","fr"]){
 const url="/newvibe/"+(code==="en"?"":code+"/");
 assert.equal(simulate(url,["hu-HU"],"de").replaced,null,"explicit canonical URL must remain in "+code);
 assert.equal(simulate(url+"catalog/",["fr-FR"],"en").replaced,null,"localised catalogue must not hop: "+code);
 assert.equal(simulate(url+"products/egy-kis-ter.html",["de-DE"],"hu").replaced,null,"product URL must not hop: "+code);
}
assert.equal(simulate("/newvibe/catalog/",["hu-HU"]).replaced,null,"English root is an explicit language");
const forced=simulate("/newvibe/hu/catalog/",["hu-HU"],"hu","?lang=fr");
assert.equal(forced.replaced,"/newvibe/fr/catalog/");
assert.equal(forced.saved.get("fep.language"),"fr");
assert.equal(simulate("/newvibe/de/catalog/",["en-GB"],"hu","?lang=en").replaced,"/newvibe/catalog/");
const manual=simulate("/newvibe/hu/catalog/",["hu-HU"]);
manual.listeners.click({target:{closest(){return {getAttribute(){return "de"}}}}});
assert.equal(manual.saved.get("fep.language"),"de");
assert.equal(simulate("/catalog/",["hu-HU"],null,"","foreverypath.com").replaced,null);
console.log("Canonical locale routing: explicit URL precedence, 4-language parity and explicit switches OK");
