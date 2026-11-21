/* For Every Path — real-browser geometry, interaction and screenshot QA.
 * A source-gate alone did not catch the 2026-11-21 iPhone regressions.
 * This script runs Chromium and WebKit against the actual static files on localhost.
 * It does not replace testing on physical iOS Safari or verifying the live Pages URL.
 */
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const http=require("node:http");
const path=require("node:path");
const {chromium,webkit}=require("playwright");

const root=path.resolve(__dirname,"..");
const destination=path.join(root,"qa-browser-screenshots");
fs.mkdirSync(destination,{recursive:true});
const mimetypes={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json; charset=utf-8",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".ico":"image/x-icon",".xml":"application/xml; charset=utf-8",".txt":"text/plain; charset=utf-8"};
const server=http.createServer((req,res)=>{
 let pathname;
 try { pathname=decodeURIComponent(new URL(req.url,"http://localhost").pathname); } catch {res.writeHead(400).end();return;}
 let file=path.resolve(root,"."+pathname);
 if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 if(pathname.endsWith("/")||fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,"index.html");
 fs.readFile(file,(error,data)=>{
  if(error){res.writeHead(error.code==="ENOENT"?404:500).end("Not found");return;}
  res.writeHead(200,{"Content-Type":mimetypes[path.extname(file).toLowerCase()]||"application/octet-stream","Cache-Control":"no-store"});
  res.end(data);
 });
});
const start=()=>new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));
const stop=()=>new Promise(resolve=>server.close(resolve));
const langs=["en","hu","de","fr"];
const productSlugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
const widths=[320,375,390,430,768,1024,1440];
const failures=[];
const checks=[];
const near=(a,b,tolerance=1.2)=>Math.abs(a-b)<=tolerance;
function check(value,description){checks.push(description);if(!value)failures.push(description);}
function prefix(lang){return lang==="en"?"/":"/"+lang+"/";}
function route(lang,kind){return prefix(lang)+(kind==="home"?"":kind.startsWith("products/")?kind:kind+"/");}
function outside(rect,width){return rect.left<-1||rect.right>width+1;}
async function pageAudit(page,engine,lang,kind,width,origin){
 await page.setViewportSize({width,height:900});
 await page.goto(origin+route(lang,kind),{waitUntil:"domcontentloaded",timeout:30000});
 await Promise.race([page.evaluate(()=>document.fonts.ready.then(()=>true)),new Promise(resolve=>setTimeout(resolve,3500))]);
 const snapshot=await page.evaluate(kind=>{
  const rect=e=>{const r=e.getBoundingClientRect();return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height}};
  const header=document.querySelector(".site-header");
  const footer=document.querySelector(".fep-footer");
  const ctas=[...document.querySelectorAll(".fep-home-actions .button")].map(e=>{const s=getComputedStyle(e);return {text:e.textContent.trim(),rect:rect(e),scroll:e.scrollWidth,client:e.clientWidth,padLeft:parseFloat(s.paddingLeft),padRight:parseFloat(s.paddingRight),bg:s.backgroundColor}});
  const notes=[...document.querySelectorAll(".fep-restored-notecard")].map(e=>({rect:rect(e),shadow:getComputedStyle(e).boxShadow,animation:getComputedStyle(e).animationName,svg:!!e.querySelector("svg.fep-note-doodle")}));
  return {kind,lang:document.documentElement.lang,width:innerWidth,overflow:document.documentElement.scrollWidth-innerWidth,
    header:header?{rect:rect(header),position:getComputedStyle(header).position}:null,
    footer:footer?{rect:rect(footer),buttonCount:footer.querySelectorAll(".button").length,linkCount:footer.querySelectorAll(".fep-footer-nav a").length,imprint:!!footer.querySelector('a[href*="#impressum"]')}:null,
    h1:document.querySelector("h1")?.textContent.trim()||"",
    ctas,notes,imprint:!!document.getElementById("impressum"),howMade:!!document.getElementById("how-made")};
 },kind);
 const label=engine+" "+lang+"/"+kind+" @"+width;
 check(snapshot.lang===lang,label+" document language");
 check(snapshot.header?.position==="sticky",label+" header position sticky");
 check(snapshot.header&&!outside(snapshot.header.rect,width),label+" header contained");
 check(snapshot.overflow<2,label+" no document horizontal scroll");
 check(snapshot.footer?.buttonCount===0,label+" footer has no CTA buttons");
 check(snapshot.footer?.linkCount===3,label+" footer contains 3 editorial links");
 check(snapshot.footer?.imprint===true,label+" footer imprint link present");
 check(snapshot.h1.length>5,label+" page has a visible title");
 if(kind==="home"){
  check(snapshot.ctas.length>=2,label+" homepage CTA controls");
  for(const [i,cta] of snapshot.ctas.entries()){
   check(near(cta.padLeft,cta.padRight,0.7),label+" CTA "+i+" symmetric horizontal padding");
   check(cta.padLeft>=20,label+" CTA "+i+" adequate inset");
   check(!outside(cta.rect,width),label+" CTA "+i+" in viewport");
   check(cta.scroll<=cta.client+2,label+" CTA "+i+" text not cropped");
   check(cta.bg!=="rgb(38, 50, 56)",label+" CTA "+i+" not old black");
  }
  check(snapshot.notes.length===3,label+" three original note cards");
  for(const [i,card] of snapshot.notes.entries()){
   check(card.svg,label+" note "+i+" SVG decoration");
   check(card.shadow!=="none",label+" note "+i+" visible shadow");
   check(card.animation.includes("fep-note-floating"),label+" note "+i+" continuous motion");
  }
  for(let i=0;i<snapshot.notes.length;i++)for(let j=i+1;j<snapshot.notes.length;j++){
   const a=snapshot.notes[i].rect,b=snapshot.notes[j].rect;
   const intersects=a.left<b.right-2&&a.right>b.left+2&&a.top<b.bottom-2&&a.bottom>b.top+2;
   check(!intersects,label+" note "+i+"/"+j+" no collision");
  }
 }
 if(kind==="about"){
  check(snapshot.imprint,label+" visible legal-section anchor");
  check(snapshot.howMade,label+" editorial-process anchor");
 }
 if(kind==="home"||kind==="about"){
  await page.locator(".fep-portrait img").evaluate(img=>img.decode().catch(()=>{}));
  const photo=await page.locator(".fep-portrait img").evaluate(el=>{
    const r=el.getBoundingClientRect();
    return {src:el.getAttribute("src"),width:el.naturalWidth,height:el.naturalHeight,left:r.left,right:r.right,loaded:el.complete};
  });
  check(photo.src.endsWith("alexandra-sajban-frohner-portrait.svg"),label+" original Alexandra source portrait");
  check(photo.loaded&&photo.width===800&&photo.height===800,label+" embedded portrait decodes at 800x800");
  check(photo.left>=-1&&photo.right<=width+1,label+" portrait fits viewport");
 }
 if(kind.startsWith("products/")){
  const story=await page.locator(".fep-product-story").evaluate(el=>{
   const photo=el.querySelector(".fep-story-illustration svg");
   const a=el.querySelector(".fep-story-illustration");
   return {paragraphs:el.querySelectorAll(".fep-story-copy p").length,facts:el.querySelectorAll(".fep-story-facts li").length,quote:!!el.querySelector("blockquote"),svg:!!photo,lang:el.dataset.editorialLocale,shadow:a?getComputedStyle(a).boxShadow:"none",animation:a?getComputedStyle(a).animationName:"none"};
  });
  check(story.paragraphs===3,label+" three distinct editorial paragraphs");
  check(story.facts===3,label+" three grounded product facts");
  check(story.quote,label+" featured editorial quote");
  check(story.svg&&story.lang===lang,label+" unique inline SVG / localized story");
  check(story.shadow!=="none",label+" illustrated paper card has an editorial shadow");
  check(story.animation.includes("fep-story-float"),label+" gentle decorative SVG motion");
  check(await page.locator(".fep-preorder-action").count()===1,label+" existing email preorder CTA retained");
 }
 if(width===390||width===1440){
  const shot=engine+"-"+lang+"-"+kind.replace(/[^a-z0-9-]/gi,"-")+"-"+width;
  await page.screenshot({path:path.join(destination,shot+"-top.png"),fullPage:false,animations:"disabled"});
  if(kind==="home"&&width===390){
   await page.locator(".fep-restored-recognition").screenshot({path:path.join(destination,shot+"-cards.png"),animations:"disabled"});
  }
  if(width===390){
   if(kind.startsWith("products/"))await page.locator(".fep-product-story").screenshot({
    path:path.join(destination,shot+"-editorial.png"),animations:"disabled"
   });
   if(kind==="about"||kind==="home")await page.locator(".fep-portrait").screenshot({
    path:path.join(destination,shot+"-portrait.png"),animations:"disabled"
   });
   await page.locator(".fep-footer").screenshot({path:path.join(destination,shot+"-footer.png"),animations:"disabled"});
   if(kind==="about")await page.locator("#impressum").screenshot({path:path.join(destination,shot+"-imprint.png"),animations:"disabled"});
  }
 }
 if(kind==="home"&&width===390){
  // A forever-floating card never becomes 'stable' to Playwright's standard
  // auto-wait heuristic; a real pointer/touch can activate it while moving.
  await page.emulateMedia({reducedMotion:"reduce"});
  const still=await page.locator(".fep-restored-notecard").first().evaluate(e=>({
   animation:getComputedStyle(e).animationName,
   stroke:getComputedStyle(e.querySelector(".fep-note-doodle-line")).strokeDashoffset
  }));
  check(still.animation==="none",label+" reduced-motion pauses card drift");
  check(parseFloat(still.stroke)===0,label+" SVG line remains visible without animation");
  await page.emulateMedia({reducedMotion:"no-preference"});
  const cards=page.locator(".fep-restored-notecard");
  const faces=()=>cards.first().evaluate(e=>{
   const front=e.querySelector(".card-front"),back=e.querySelector(".card-back");
   return {front:getComputedStyle(front).visibility,back:getComputedStyle(back).visibility};
  });
  const initial=await faces();
  check(initial.front==="visible"&&initial.back==="hidden",label+" only front face visible at rest");
  await cards.first().click({force:true,position:{x:20,y:20}});
  check((await cards.first().getAttribute("aria-pressed"))==="true",label+" flip-card first tap");
  const flipped=await faces();
  check(flipped.front==="hidden"&&flipped.back==="visible",label+" only reverse face visible when flipped");
  await page.locator(".fep-restored-recognition").screenshot({
   path:path.join(destination,engine+"-"+lang+"-home-390-flipped.png"),animations:"disabled"
  });
  await cards.first().click({force:true,position:{x:20,y:20}});
  check((await cards.first().getAttribute("aria-pressed"))==="false",label+" flip-card second tap");
  const restored=await faces();
  check(restored.front==="visible"&&restored.back==="hidden",label+" original face restored");
  const menu=page.locator("#menuToggle");
  await menu.click();
  check((await menu.getAttribute("aria-expanded"))==="true",label+" hamburger opens");
  await page.keyboard.press("Escape");
  check((await menu.getAttribute("aria-expanded"))==="false",label+" menu Escape closes");
 }
 if(kind==="home"&&width===390||kind==="about"&&width===390){
  await page.evaluate(()=>window.scrollTo({top:Math.min(document.documentElement.scrollHeight-innerHeight,600),behavior:"instant"}));
  await page.waitForTimeout(110);
  const y=await page.locator(".site-header").evaluate(e=>e.getBoundingClientRect().top);
  check(near(y,0,1.5),label+" sticky header after real scroll");
 }
 process.stdout.write("CHECK "+label+" "+JSON.stringify({overflow:snapshot.overflow,cta:snapshot.ctas.map(x=>({left:x.padLeft,right:x.padRight})),footerLinks:snapshot.footer?.linkCount,notes:snapshot.notes.length})+"\n");
}
(async()=>{
 await start();
 const origin="http://127.0.0.1:"+server.address().port;
 try{
  for(const [engine,launcher] of Object.entries({chromium,webkit})){
   const browser=await launcher.launch({headless:true});
   const context=await browser.newContext({viewport:{width:390,height:900},deviceScaleFactor:1,reducedMotion:"no-preference"});
   const page=await context.newPage();
   const runtimeErrors=[];
   page.on("pageerror",e=>runtimeErrors.push(e.message));
   try{
    for(const lang of langs){
     for(const width of widths)await pageAudit(page,engine,lang,"home",width,origin);
     for(const kind of ["about","catalog"])for(const width of [390,1440])await pageAudit(page,engine,lang,kind,width,origin);
     for(const slug of productSlugs)for(const width of [390,1440])await pageAudit(page,engine,lang,"products/"+slug+".html",width,origin);
    }
   }finally{
    check(runtimeErrors.length===0,engine+" no JavaScript runtime exceptions: "+runtimeErrors.join("; "));
    await browser.close();
   }
  }
 }finally{await stop();}
 console.log("BROWSER_QA",JSON.stringify({checks:checks.length,failed:failures.length,failures,screenshots:fs.readdirSync(destination).length},null,2));
 if(failures.length)process.exitCode=1;
})().catch(async error=>{console.error("BROWSER_QA_FATAL",error.stack||error);try{await stop()}catch{}process.exitCode=1;});
