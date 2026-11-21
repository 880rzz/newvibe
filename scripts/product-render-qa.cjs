/* Rendered product + catalog regression, Chromium/WebKit.
 * Checks the first-version storytelling contract and the formerly clipped iPhone caption.
 * Local deterministic render is not evidence of physical iOS Safari or CDN freshness.
 */
"use strict";
const fs=require("node:fs"),http=require("node:http"),path=require("node:path");
const {chromium,webkit}=require("playwright");
const root=path.resolve(__dirname,"..");
const screenshots=path.join(root,"qa-browser-screenshots");
fs.mkdirSync(screenshots,{recursive:true});
const mime={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".ico":"image/x-icon",".json":"application/json"};
const server=http.createServer((req,res)=>{
 let url;try{url=decodeURIComponent(new URL(req.url,"http://localhost").pathname)}catch{res.writeHead(400).end();return;}
 let file=path.resolve(root,"."+url);
 if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 if(url.endsWith("/")||fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,"index.html");
 fs.readFile(file,(err,data)=>{
  if(err){res.writeHead(err.code==="ENOENT"?404:500).end("Not found");return;}
  res.writeHead(200,{"Content-Type":mime[path.extname(file)]||"application/octet-stream","Cache-Control":"no-store"}).end(data);
 });
});
const slugs=["helyed-van-koztunk","egy-kis-ter","lepesrol-lepesre-2027","tanari-hataridonaplo-2027-szines","tanari-hataridonaplo-2027-letisztult","veled-a-mindennapokban","mesek-a-vilag-korul","mesek-a-vilag-korul-szinezo","na-most-mit-csinaljak"];
const locales=["en","hu","de","fr"],widths=[390,1440],fails=[];let checks=0;
const check=(ok,msg)=>{checks++;if(!ok){fails.push(msg);console.error("FAIL "+msg);}};
const wait=async page=>await Promise.race([page.evaluate(()=>document.fonts.ready.then(()=>true)),new Promise(resolve=>setTimeout(resolve,1900))]);
const route=(lang,part)=>"/"+(lang==="en"?"":lang+"/")+part;
(async()=>{
 await new Promise(resolve=>server.listen(0,"127.0.0.1",resolve));
 const origin="http://127.0.0.1:"+server.address().port;
 try{
  for(const [engine,launcher] of Object.entries({chromium,webkit})){
   const browser=await launcher.launch({headless:true});
   const page=await browser.newPage({viewport:{width:390,height:900},deviceScaleFactor:1});
   const errors=[];page.on("pageerror",e=>errors.push(e.message));
   try{
    for(const lang of locales){
     for(const width of widths){
      await page.setViewportSize({width,height:900});
      await page.goto(origin+route(lang,"catalog/"),{waitUntil:"domcontentloaded"});
      await wait(page);
      const cap=await page.evaluate(()=>{
       const box=document.querySelector(".fep-catalog-hero-figure"),
         visual=box?.querySelector(".fep-hero-art"),text=box?.querySelector("figcaption");
       if(!box||!visual||!text)return null;
       const a=visual.getBoundingClientRect(),b=text.getBoundingClientRect(),style=getComputedStyle(text);
       return {overflow:document.documentElement.scrollWidth-innerWidth,heroBottom:a.bottom,captionTop:b.top,
         left:b.left,right:b.right,position:style.position,visible:style.visibility,opacity:parseFloat(style.opacity),copy:text.textContent.trim()};
      });
      const label=engine+" "+lang+" catalog "+width;
      check(!!cap,label+" caption exists");
      if(cap){
       check(cap.overflow<=2,label+" no horizontal overflow");
       check(cap.captionTop>=cap.heroBottom-2,label+" caption is below oval clip");
       check(cap.position==="static"&&cap.visible==="visible"&&cap.opacity>.9,label+" caption fully displayed");
       check(cap.left>=-1&&cap.right<=width+1,label+" caption within viewport");
       check(cap.copy.length>28,label+" complete explanatory caption");
      }
      check(await page.locator(".fep-card-editorial").count()===9,label+" nine rich catalog cards");
      if(width===390){
       await page.locator(".fep-catalog-hero-figure").screenshot({path:path.join(screenshots,engine+"-"+lang+"-catalog-caption.png"),animations:"disabled"});
      }else if(lang==="hu"){
       await page.locator(".fep-catalog-hero-figure").screenshot({path:path.join(screenshots,engine+"-hu-catalog-caption-desktop.png"),animations:"disabled"});
      }
     }
     for(const slug of slugs){
      for(const width of widths){
       await page.setViewportSize({width,height:900});
       await page.goto(origin+route(lang,"products/"+slug+".html"),{waitUntil:"domcontentloaded"});
       await wait(page);
       const data=await page.evaluate(()=>{
        const r=e=>{const b=e?.getBoundingClientRect();return b?{left:b.left,right:b.right,top:b.top,bottom:b.bottom,width:b.width}:null};
        const scenarios=[...document.querySelectorAll(".fep-scenario")].map(r);
        const narrative=document.querySelector(".fep-product-story"),facts=document.querySelector(".fep-story-facts");
        const submit=document.querySelector('a[href="#preorder"]'),target=document.getElementById("preorder");
        return {overflow:document.documentElement.scrollWidth-innerWidth,
         pageWidth:innerWidth,scenarios,story:r(narrative),facts:r(facts),submit:r(submit),target:r(target),
         richParagraphs:document.querySelectorAll(".fep-story-copy p").length,
         img:!!document.querySelector(".fep-product-title-motif"),
         generic:!!document.querySelector(".fep-trust"),
         oldTechnology:document.querySelector("main")?.textContent.includes("AI és szerkesztői átláthatóság"),
         preorderValid:!!submit&&!!target};
       });
       const label=engine+" "+lang+" "+slug+" "+width;
       check(data.overflow<=2,label+" no horizontal overflow");
       check(data.scenarios.length===2,label+" two situations");
       check(data.scenarios.every(v=>v.width>40&&v.left>=-1&&v.right<=width+1),label+" scenarios contained");
       check(!!data.story&&data.story.width>100&&!!data.facts,label+" rich story and facts visible");
       check(data.richParagraphs>=3,label+" manuscript-based detailed presentation");
       check(data.img,label+" original vector accent retained");
       check(data.preorderValid,label+" preorder in-page anchor valid");
       check(!data.generic&&!data.oldTechnology,label+" no generic technical marketing block");
       if(width===390&&engine==="webkit"){
        await page.locator(".fep-product-scenarios").screenshot({path:path.join(screenshots,engine+"-"+lang+"-"+slug+"-pain-solutions.png"),animations:"disabled"});
       }
       if(width===1440&&lang==="hu"&&(slug==="egy-kis-ter"||slug==="helyed-van-koztunk")){
        await page.locator(".fep-product-story").screenshot({path:path.join(screenshots,engine+"-"+lang+"-"+slug+"-full-story-desktop.png"),animations:"disabled"});
       }
       process.stdout.write("PASS "+label+"\n");
      }
     }
    }
    check(errors.length===0,engine+" no JS runtime errors: "+errors.join("; "));
   }finally{await browser.close();}
  }
 }finally{await new Promise(resolve=>server.close(resolve));}
 console.log("PRODUCT_RENDER_QA",JSON.stringify({checks,failed:fails.length,failures:fails,screenshotCount:fs.readdirSync(screenshots).length},null,2));
 if(fails.length)process.exitCode=1;
})().catch(e=>{console.error("PRODUCT_RENDER_QA_FATAL",e.stack||e);try{server.close()}catch{}process.exitCode=1;});
