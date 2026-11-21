/* For Every Path: minimal client-side locale negotiation for static product routes.
   Preference order: explicit ?lang -> deliberate stored choice -> browser language -> English.
   Never use IP geolocation; preserve localized, independently indexable URLs. */
(() => {
  const SUPPORTED = new Set(["en", "hu", "de", "fr"]);
  const BASE = /\.github\.io$/i.test(location.hostname) ? "/newvibe/" : "/";
  const currentPath = location.pathname;
  if (!currentPath.startsWith(BASE)) return;
  const relative = currentPath.slice(BASE.length);
  const first = relative.split("/")[0];
  const currentLang = SUPPORTED.has(first) && first !== "en" ? first : "en";
  const route = currentLang === "en" ? relative : relative.slice(first.length + 1);
  const search = new URLSearchParams(location.search);
  const forced = search.get("lang")?.toLowerCase();
  const valid = value => SUPPORTED.has(value) ? value : null;
  let stored = null;
  try { stored = valid(localStorage.getItem("fep.language")); } catch (_) {}
  let preferred = valid(forced) || stored;
  if (!preferred) {
    const choices = navigator.languages || [navigator.language];
    preferred = choices.map(value => String(value).toLowerCase().split("-")[0]).find(value => valid(value)) || "en";
  }
  if (forced && valid(forced)) {
    try { localStorage.setItem("fep.language", forced); } catch (_) {}
  }
  search.delete("lang");
  const target = BASE + (preferred === "en" ? "" : preferred + "/") + route;
  const nextSearch = search.toString();
  if (preferred !== currentLang || forced) {
    location.replace(target + (nextSearch ? "?" + nextSearch : "") + location.hash);
    return;
  }
  document.addEventListener("click", event => {
    const anchor = event.target.closest?.("a[hreflang]");
    const selected = anchor && String(anchor.getAttribute("hreflang") || "").toLowerCase();
    if (!valid(selected)) return;
    try { localStorage.setItem("fep.language", selected); } catch (_) {}
  });
})();
