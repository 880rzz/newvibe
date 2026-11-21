/* For Every Path — restored, accessible 4-language hamburger navigation.
   Works with the original site-header/site-menu design system.
   All links remain ordinary crawlable HTML; JS is needed only to open the menu. */
(()=>{
  "use strict";
  const toggle=document.getElementById("menuToggle");
  const menu=document.getElementById("siteMenu");
  const close=document.getElementById("menuClose");
  if(!toggle||!menu||!close)return;
  let previous=null;
  const focusables=()=>Array.from(menu.querySelectorAll('a[href],button:not([disabled]),summary,[tabindex]:not([tabindex="-1"])')).filter(el=>el.getClientRects().length>0);
  function hide(){
    menu.hidden=true;
    toggle.setAttribute("aria-expanded","false");
    document.body.classList.remove("fep-menu-open");
    (previous||toggle).focus({preventScroll:true});
  }
  function show(){
    previous=document.activeElement;
    menu.hidden=false;
    toggle.setAttribute("aria-expanded","true");
    document.body.classList.add("fep-menu-open");
    close.focus({preventScroll:true});
  }
  toggle.addEventListener("click",()=>menu.hidden?show():hide());
  close.addEventListener("click",hide);
  menu.addEventListener("click",event=>{
    if(event.target===menu||event.target.closest("a[href]"))hide();
  });
  document.addEventListener("keydown",event=>{
    if(menu.hidden)return;
    if(event.key==="Escape"){event.preventDefault();hide();return;}
    if(event.key!=="Tab")return;
    const choices=focusables();if(!choices.length)return;
    const first=choices[0],last=choices[choices.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  });
  // The original flip-card interaction, now implemented with native buttons.
  // These cards are in normal document flow, not overlapping absolute layers.
  document.querySelectorAll(".fep-restored-notecard").forEach(card=>{
    const front=card.querySelector(".card-front .fep-note-text")?.textContent?.trim()||"";
    const back=card.querySelector(".card-back .fep-note-text")?.textContent?.trim()||"";
    card.setAttribute("aria-label",front);
    card.addEventListener("click",()=>{
      const flipped=card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed",String(flipped));
      card.setAttribute("aria-label",flipped?back:front);
    });
  });
})();
