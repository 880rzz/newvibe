/* For Every Path: canonical URL language always wins.
 * Explicit ?lang=xx may navigate to another localized route.
 * The stored/browser language never rewrites an explicitly visited canonical URL.
 * This keeps all 48 routes independently indexable and eliminates silent language hops.
 */
(() => {
"use strict";
const SUPPORTED=new Set(["en","hu","de","fr"]);
const BASE=/\.github\.io$/i.test(location.hostname)?"/newvibe/":"/";
if(!location.pathname.startsWith(BASE))return;
const relative=location.pathname.slice(BASE.length);
const first=relative.split("/")[0];
const current=SUPPORTED.has(first)&&first!=="en"?first:"en";
const route=current==="en"?relative:relative.slice(first.length+1);
const query=new URLSearchParams(location.search);
const requested=query.get("lang")?.toLowerCase();
const valid=SUPPORTED.has(requested)?requested:null;
if(valid){
 try{localStorage.setItem("fep.language",valid)}catch(_){}
 query.delete("lang");
 const destination=BASE+(valid==="en"?"":valid+"/")+route;
 const rest=query.toString();
 location.replace(destination+(rest?"?"+rest:"")+location.hash);
 return;
}
document.addEventListener("click",event=>{
 const anchor=event.target.closest?.("a[hreflang]");
 const chosen=anchor&&String(anchor.getAttribute("hreflang")||"").toLowerCase();
 if(!SUPPORTED.has(chosen))return;
 try{localStorage.setItem("fep.language",chosen)}catch(_){}
});
})();
