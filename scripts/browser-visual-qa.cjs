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
const widths=[320,375,390,430,768,1024,1440];
const failures=[];
const checks=[];
const near=(a,b,tolerance=1.2)=>Math.abs(a-b)<=tolerance;
function check(value,description){checks.push(description);if(!value)failures.push(description);}
function prefix(lang){return lang==="en"?"/":"/"+lang+"/";}
function route(lang,kind){return prefix(lang)+(kind==="home"?"":kind+"/");}
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
 if(kind==="catalog"){
  const cap=await page.locator(".fep-collection-note").evaluate(el=>{
   const r=el.getBoundingClientRect();
   const mask=document.querySelector(".fep-catalog-hero-figure .fep-hero-art").getBoundingClientRect();
   return {top:r.top,bottom:r.bottom,maskBottom:mask.bottom,scroll:el.scrollWidth,client:el.clientWidth,height:r.height,text:el.textContent.trim()};
  });
  check(cap.top>=cap.maskBottom-1,label+" collection caption outside art mask");
  check(cap.height>=16&&cap.text.length>20,label+" collection caption visible text");
  check(cap.scroll<=cap.client+1,label+" collection caption not horizontally clipped");
  if(width===390)await page.locator(".fep-catalog-hero-figure").screenshot({
   path:path.join(destination,engine+"-"+lang+"-catalog-390-caption.png"),animations:"disabled"
  });
 }
 if(kind==="about"){
  check(snapshot.imprint,label+" visible legal-section anchor");
  check(snapshot.howMade,label+" editorial-process anchor");
 }
 if(width===390||width===1440){
  const shot=engine+"-"+lang+"-"+kind+"-"+width;
  await page.screenshot({path:path.join(destination,shot+"-top.png"),fullPage:false,animations:"disabled"});
  if(kind==="home"&&width===390){
   await page.locator(".fep-restored-recognition").screenshot({path:path.join(destination,shot+"-cards.png"),animations:"disabled"});
  }
  if(width===390){
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

 // The new sidebar card must be an actual visible, usable menu feature
 // in both WebKit and Chromium, on compact mobile and full desktop.
 if(kind==="home"&&[320,390,1024,1440].includes(width)){
  const menuButton=page.locator("#menuToggle");
  await menuButton.click();
  const layout=await page.evaluate(()=>{
    const rect=e=>{const r=e.getBoundingClientRect();return {left:r.left,right:r.right,top:r.top,bottom:r.bottom};};
    const overlay=document.getElementById("siteMenu");
    const card=overlay.querySelector(".fep-menu-moment");
    return {
      card:rect(card),
      note:rect(overlay.querySelector(".menu-note")),
      nav:[...overlay.querySelectorAll(".fep-menu-link,.fep-category-disclosure summary")].map(rect),
      scrollX:overlay.scrollWidth-overlay.clientWidth,
      close:rect(overlay.querySelector(".menu-close"))
    };
  });
  const collision=(a,b)=>a.left<b.right-2&&a.right>b.left+2&&a.top<b.bottom-2&&a.bottom>b.top+2;
  check(layout.scrollX<2,label+" expanded menu has no horizontal scroll");
  check(layout.nav.every(rect=>!collision(rect,layout.card)),label+" editorial card never overlaps navigation");
  if(width===1440)check(layout.card.left>width/2,label+" right column has deliberate separation");
  else check(layout.card.top>=layout.note.bottom-1,label+" compact menu card follows navigation");
  if(width===320||width===390||width===1440){
    await page.screenshot({
      path:path.join(destination,engine+"-"+lang+"-menu-overlay-"+width+".png"),fullPage:false,animations:"disabled"
    });
  }
  const moment=page.locator(".fep-menu-moment");
  check(await moment.count()===1,label+" one live menu moment");
  const before=(await moment.locator(".fep-moment-thought").textContent()).trim();
  check(before.length>25,label+" localized prompt present");
  await moment.locator(".fep-moment-again").click();
  const after=(await moment.locator(".fep-moment-thought").textContent()).trim();
  check(after!==before,label+" button draws a different prompt");
  const geom=await moment.evaluate(el=>{
   const r=el.getBoundingClientRect();
   return {left:r.left,right:r.right,width:r.width,screen:innerWidth};
  });
  check(geom.left>=-1&&geom.right<=geom.screen+1,label+" menu card not clipped");
  if(width===1440)check(geom.left>geom.screen/2,label+" desktop card occupies empty right field");
  await moment.locator(".fep-moment-calendar summary").click();
  check(await moment.locator(".fep-moment-days li").count()===7,label+" seven visible lunar dates");
  await moment.screenshot({
   path:path.join(destination,engine+"-"+lang+"-menu-moment-"+width+".png"),animations:"disabled"
  });
  await page.keyboard.press("Escape");
  check((await menuButton.getAttribute("aria-expanded"))==="false",label+" menu closes after interactive card");
 }
 if(kind==="home"&&width===390||kind==="about"&&width===390){
  await page.evaluate(()=>window.scrollTo({top:Math.min(document.documentElement.scrollHeight-innerHeight,600),behavior:"instant"}));
  await page.waitForTimeout(110);
  const y=await page.locator(".site-header").evaluate(e=>e.getBoundingClientRect().top);
  check(near(y,0,1.5),label+" sticky header after real scroll");
 }
 process.stdout.write("CHECK "+label+" "+JSON.stringify({overflow:snapshot.overflow,cta:snapshot.ctas.map(x=>({left:x.padLeft,right:x.padRight})),footerLinks:snapshot.footer?.linkCount,notes:snapshot.notes.length})+"\n");
}
async function detailedProductAudit(page,engine,lang,slug,width,origin){
 await page.setViewportSize({width,height:900});
 await page.goto(origin+prefix(lang)+"products/"+slug+".html",{waitUntil:"domcontentloaded",timeout:30000});
 await page.evaluate(()=>document.fonts.ready);
 const proof=await page.evaluate(()=>{
  const rect=el=>{const r=el.getBoundingClientRect();return {left:r.left,right:r.right,top:r.top,bottom:r.bottom,width:r.width,height:r.height}};
  const story=document.querySelector(".fep-product-story"),cards=[...document.querySelectorAll(".fep-story-path article")];
  const labels=[...document.querySelectorAll(".fep-detail-list section")];
  return {lang:document.documentElement.lang,overflow:document.documentElement.scrollWidth-innerWidth,
   story:story?rect(story):null,cards:cards.map(rect),labels:labels.length,
   paragraphs:story?.querySelectorAll(".fep-story-copy>p").length||0,
   facts:story?.querySelectorAll(".fep-story-facts li").length||0,
   imageNote:!!document.querySelector(".fep-product-media .fep-photo-note"),
   mailto:!!document.querySelector(".fep-availability a[href^='mailto:']")};
 });
 const label=engine+" "+lang+"/products/"+slug+" @"+width;
 check(proof.lang===lang,label+" language");
 check(proof.overflow<2,label+" no horizontal scroll");
 check(proof.story&&proof.story.width<=width+1,label+" deep story contained");
 check(proof.cards.length===2,label+" two paper cards");
 check(proof.paragraphs===3,label+" three editorial paragraphs");
 check(proof.facts===3,label+" three grounded facts");
 check(proof.labels===3,label+" original three questions preserved");
 check(proof.imageNote,label+" visual provenance note");
 check(proof.mailto,label+" email preorder preserved");
 if(proof.cards.length===2){
  const a=proof.cards[0],b=proof.cards[1];
  const crossing=a.left<b.right-2&&a.right>b.left+2&&a.top<b.bottom-2&&a.bottom>b.top+2;
  check(!crossing,label+" problem and solution cards do not overlap");
  for(const [i,r] of proof.cards.entries())check(r.left>=-1&&r.right<=width+1,label+" card "+i+" contained");
 }
 if(width===390&&["helyed-van-koztunk","egy-kis-ter","mesek-a-vilag-korul"].includes(slug)){
  const imgName=engine+"-"+lang+"-"+slug+"-390-story.png";
  await page.locator(".fep-product-story").screenshot({path:path.join(destination,imgName),animations:"disabled"});
 }
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
     // Every product must have a readable problem-to-solution section on mobile.
     const productSlugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
     for(const slug of productSlugs)await detailedProductAudit(page,engine,lang,slug,390,origin);
     for(const slug of ["helyed-van-koztunk","egy-kis-ter","mesek-a-vilag-korul"])await detailedProductAudit(page,engine,lang,slug,1440,origin);

     // Verify that the additional manuscript-inspired SVGs really render in both engines,
     // instead of accepting file existence or HTML assertions as proof.
     for(const entry of [
      ["home","index.html",".fep-recognition-inkline","editorial-handline.svg"],
      ["about","about/index.html",".fep-how-made-mark","workshop-tree.svg"],
      ["coloring","products/mesek-a-vilag-korul-szinezo.html",".fep-product-title-motif","coloring-crayon.svg"],
      ["craft","products/na-most-mit-csinaljak.html",".fep-product-title-motif","craft-table.svg"]
     ]){
      const [kind,pathName,selector,assetName]=entry;
      await page.setViewportSize({width:390,height:900});
      await page.goto(origin+prefix(lang)+pathName,{waitUntil:"domcontentloaded"});
      const node=page.locator(selector);
      check(await node.count()===1,engine+" "+lang+" "+kind+" SVG present exactly once");
      await node.scrollIntoViewIfNeeded();
      await node.evaluate(img=>img.decode());
      const proof=await node.evaluate(img=>({
       complete:img.complete,naturalWidth:img.naturalWidth,
       src:img.getAttribute("src"),width:img.getBoundingClientRect().width,
       overflow:document.documentElement.scrollWidth-innerWidth
      }));
      check(proof.complete&&proof.naturalWidth>0,engine+" "+lang+" "+kind+" SVG decoded");
      check(proof.src.endsWith(assetName),engine+" "+lang+" "+kind+" unique motif mapped");
      check(proof.width>30&&proof.width<250,engine+" "+lang+" "+kind+" SVG not oversized");
      check(proof.overflow<2,engine+" "+lang+" "+kind+" zero horizontal overflow");
      await node.screenshot({
       path:path.join(destination,engine+"-"+lang+"-"+kind+"-new-svg.png"),animations:"disabled"
      });
     }
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
