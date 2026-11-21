// Deterministic smoke tests for For Every Path locale negotiation.
// No external dependencies, cookies, or geolocation.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const source = fs.readFileSync("locale-router.js", "utf8");

function simulate(pathname, languages, stored = null, query = "", hostname = "880rzz.github.io") {
  let replaced = null;
  const saved = new Map(stored ? [["fep.language", stored]] : []);
  const listeners = {};
  const context = {
    location: { pathname, hostname, search: query, hash: "", replace(value) { replaced = value; } },
    navigator: { languages, language: languages[0] || "en" },
    URLSearchParams,
    localStorage: { getItem(k) { return saved.get(k) || null; }, setItem(k, v) { saved.set(k, v); } },
    document: { addEventListener(name, cb) { listeners[name] = cb; } }
  };
  vm.runInNewContext(source, context);
  return { replaced, saved, listeners };
}

assert.equal(simulate("/newvibe/catalog/", ["hu-HU", "en-US"]).replaced, "/newvibe/hu/catalog/");
assert.equal(simulate("/newvibe/hu/products/egy-kis-ter.html", ["hu-HU"]).replaced, null);
assert.equal(simulate("/newvibe/products/egy-kis-ter.html", ["de-AT"]).replaced, "/newvibe/de/products/egy-kis-ter.html");
assert.equal(simulate("/newvibe/de/catalog/", ["en-GB"], "de").replaced, null);
assert.equal(simulate("/newvibe/de/catalog/", ["en-GB"], "en").replaced, "/newvibe/catalog/");
assert.equal(simulate("/newvibe/catalog/", ["it-IT"]).replaced, null);
const forced = simulate("/newvibe/hu/catalog/", ["hu-HU"], "hu", "?lang=fr");
assert.equal(forced.replaced, "/newvibe/fr/catalog/");
assert.equal(forced.saved.get("fep.language"), "fr");
const manual = simulate("/newvibe/hu/catalog/", ["hu-HU"]);
manual.listeners.click({target:{closest(){return {getAttribute(){return "en";}};}}});
assert.equal(manual.saved.get("fep.language"),"en");
assert.equal(simulate("/catalog/", ["hu-HU"], null, "", "foreverypath.com").replaced,"/hu/catalog/");
console.log("For Every Path locale routing: 9 checks passed");
