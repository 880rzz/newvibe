/* Browser QA of the original photographed card gallery, four languages.
 * Runs locally in Playwright Chromium and WebKit. Not a physical iPhone test.
 */
"use strict";
const fs=require("node:fs"),path=require("node:path"),http=require("node:http"),{chromium,webkit}=require("playwright");
const root=path.resolve(__dirname,".."),dest=path.join(root,"qa-browser-screenshots");fs.mkdirSync(dest,{recursive:true});
const mime={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml",".json":"application/json"};
const server=http.createServer((req,res)=>{let name;
 try{name=decodeURIComponent(new URL(req.url,"http://localhost").pathname)}catch{res.writeHead(400).end();return;}
 let file=path.resolve(root,"."+name);if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}
 if(name.endsWith("/")||fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,"index.html");
 fs.readFile(file,(err,buffer)=>err?res.writeHead(err.code==="ENOENT"?404:500).end("Not found"):res.writeHead(200,{"Content-Type":mime[path.extname(file)]||"application/octet-stream"}).end(buffer));
});
const langs=["en","hu","de","fr"];const failures=[];let tested=0;
const check=(ok,msg)=>{tested++;if(!ok)failures.push(msg);};
(async()=>{
 await new Promise(ok=>server.listen(0,"127.0.0.1",ok));const origin="http://127.0.0.1:"+server.address().port;
 try{
  for(const [browserName,launcher] of Object.entries({chromium,webkit})){
   const browser=await launcher.launch({headless:true});const page=await browser.newPage({viewport:{width:390,height:900}});
   try{
    for(const lang of langs)for(const width of [390,1440]){
     await page.setViewportSize({width,height:900});
     const pathName="/"+(lang==="en"?"":lang+"/")+"products/helyed-van-koztunk.html";
     await page.goto(origin+pathName,{waitUntil:"domcontentloaded"});
     const gallery=page.locator(".product-gallery");
     await gallery.scrollIntoViewIfNeeded();
     const result=await gallery.evaluate(async e=>{
      const imgs=[...e.querySelectorAll("img")];
      await Promise.all(imgs.map(async image=>{if(!image.complete)await image.decode().catch(()=>{})}));
      const figures=[...e.querySelectorAll("figure")],caption=[...e.querySelectorAll("figcaption")];
      return {count:imgs.length,complete:imgs.map(i=>i.complete&&i.naturalWidth>0),
       visibleCaptions:caption.every(c=>{const r=c.getBoundingClientRect();return r.width>20&&r.height>10&&getComputedStyle(c).visibility==="visible"}),
       overflow:document.documentElement.scrollWidth-innerWidth,figures:figures.map(f=>{const r=f.getBoundingClientRect();return {left:r.left,right:r.right,width:r.width}})};
     });
     const label=browserName+" "+lang+" "+width;
     check(result.count===2,label+" two original card photos");
     check(result.complete.every(Boolean),label+" both original photos actually decode");
     check(result.visibleCaptions,label+" original photo captions readable");
     check(result.overflow<=2,label+" no horizontal overflow");
     check(result.figures.every(f=>f.left>=-1&&f.right<=width+1&&f.width>75),label+" photos contained in responsive layout");
     const button=page.locator('main nav a[href="#preorder"]');
     check(await button.count()===1,label+" final return to genuine preorder section");
     const preorder=page.locator("#preorder");
     check(await preorder.count()===1,label+" destination exists");
     await button.click();
     const anchor=await page.evaluate(()=>location.hash);
     check(anchor==="#preorder",label+" click actually navigates to preorder");
     if(browserName==="webkit"){
      await gallery.screenshot({path:path.join(dest,"original-card-gallery-"+lang+"-"+width+".png"),animations:"disabled"});
     }
     console.log("GALLERY_CHECK "+label+" "+JSON.stringify(result));
    }
   }finally{await browser.close();}
  }
 }finally{await new Promise(ok=>server.close(ok));}
 console.log("GALLERY_RENDER_QA",JSON.stringify({checks:tested,failed:failures.length,failures},null,2));
 if(failures.length)process.exitCode=1;
})().catch(e=>{console.error("GALLERY_RENDER_QA_FATAL",e.stack||e);try{server.close()}catch{}process.exitCode=1;});
