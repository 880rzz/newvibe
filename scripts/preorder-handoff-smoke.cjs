"use strict";
/*
 * For Every Path: 9 products x 4 web languages.
 * This proves correct, product-specific mailto link data; it cannot
 * prove that a visitor has an external mail app configured or sent email.
 */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const catalog = JSON.parse(fs.readFileSync("catalog.json", "utf8"));
const langs = ["en", "hu", "de", "fr"];
const expected = {
  "helyed-van-koztunk": "Helyed van köztünk",
  "egy-kis-ter": "Egy kis tér",
  "lepesrol-lepesre-2027": "Lépésről lépésre",
  "tanari-hataridonaplo-2027-szines": "Határidőnapló tanároknak",
  "tanari-hataridonaplo-2027-letisztult": "Határidőnapló tanároknak",
  "veled-a-mindennapokban": "Veled a mindennapokban",
  "mesek-a-vilag-korul": "Mesék a világ körül",
  "mesek-a-vilag-korul-szinezo": "Mesék a világ körül",
  "na-most-mit-csinaljak": "Na, most mit csináljak"
};
const phrases = {
  en: { subject: "Pre-order request", quantity: "Quantity requested:", disclaimer: "does not confirm a purchase", terms: "payment and delivery terms" },
  hu: { subject: "Előrendelési igény", quantity: "Kért darabszám:", disclaimer: "nem visszaigazolt rendelés", terms: "fizetési és szállítási feltételeket" },
  de: { subject: "Vorbestellanfrage", quantity: "Gewünschte Stückzahl:", disclaimer: "noch keine bestätigte Bestellung", terms: "Zahlungs- und Lieferbedingungen" },
  fr: { subject: "Demande de précommande", quantity: "Quantité souhaitée", disclaimer: "pas encore une commande confirmée", terms: "conditions de paiement et de livraison" }
};
assert.deepEqual(catalog.languages, langs, "canonical four-language registry");
assert.equal(catalog.products.length, 9);
const subjects = new Map();
let checked = 0;
for (const lang of langs) {
  const p = phrases[lang];
  const prefix = lang === "en" ? "" : lang + "/";
  for (const product of catalog.products) {
    const slug = product.slug;
    assert.ok(expected[slug], "known product slug: " + slug);
    const pathname = prefix + "products/" + slug + ".html";
    const html = fs.readFileSync(pathname, "utf8");
    const anchors = [...html.matchAll(/<a\b[^>]*class="[^"]*\bfep-preorder-action\b[^"]*"[^>]*href="([^"]+)"/g)];
    assert.equal(anchors.length, 1, pathname + " exactly one direct pre-order CTA");
    const href = anchors[0][1];
    assert.ok(!href.includes(" "), pathname + " spaces must be URI encoded");
    const url = new URL(href);
    assert.equal(url.protocol, "mailto:", pathname);
    assert.equal(url.pathname, catalog.email_preorders.email, pathname + " intended recipient");
    const subject = url.searchParams.get("subject");
    const body = url.searchParams.get("body");
    assert.ok(subject && body, pathname + " subject and body present");
    assert.ok(subject.includes("For Every Path"), pathname + " brand in subject");
    assert.ok(subject.includes(p.subject), pathname + " locale-specific intent");
    assert.ok(subject.includes(expected[slug]), pathname + " product identity");
    assert.ok(body.includes(expected[slug]), pathname + " product included in email");
    assert.ok(body.includes(p.quantity), pathname + " quantity field");
    assert.ok(body.includes(p.disclaimer), pathname + " request is not a confirmed purchase");
    assert.ok(body.includes(p.terms), pathname + " payment and delivery terms subject to confirmation");
    assert.equal((html.match(/id="preorder"/g) || []).length, 1, pathname + " single section anchor");
    assert.equal((html.match(/href="#preorder"/g) || []).length, 0, pathname + " no duplicate end-of-page preorder shortcut");
    assert.equal((html.match(/class="fep-availability fep-preorder fep-preorder-final section-shell"/g) || []).length, 1, pathname + " one bottom preorder panel");
    assert.equal((html.match(/class="button fep-preorder-more"/g) || []).length, 1, pathname + " one matched catalog button");
    assert.ok(html.includes("catalog.css?v=14"), pathname + " refreshed layout CSS");
    const preorderPosition = html.indexOf('id="preorder"');
    const storyPosition = html.indexOf('class="fep-product-story section-shell"');
    const footerPosition = html.indexOf('<footer class="fep-footer');
    assert.ok(storyPosition >= 0 && storyPosition < preorderPosition && preorderPosition < footerPosition, pathname + " preorder after editorial content and before footer");
    if(slug==="helyed-van-koztunk"){
      assert.ok(html.indexOf('class="product-gallery section-shell"') < preorderPosition, pathname + " preorder after product gallery");
      assert.ok(html.indexOf('id="card-demo"') < preorderPosition, pathname + " preorder after interactive demo");
    }
    assert.equal(product.preorder_request.email, url.pathname);
    assert.equal(product.preorder_request.confirmation_required, true);
    assert.equal(product.preorder_request.request_not_binding_without_confirmation, true);
    assert.equal(product.shop_url, null, pathname + " no unverified shop");
    assert.equal(product.price, null, pathname + " no unverified price");
    subjects.set(lang + ":" + slug, subject);
    checked++;
  }
  const colorful = subjects.get(lang + ":tanari-hataridonaplo-2027-szines");
  const simple = subjects.get(lang + ":tanari-hataridonaplo-2027-letisztult");
  assert.notEqual(colorful, simple, lang + " teacher-planner cover variants must not mix");
}
assert.equal(checked, 36);
console.log("PREORDER_MAILTO_CONTRACT", JSON.stringify({
  localizedProducts: checked,
  recipient: catalog.email_preorders.email,
  coversDistinguished: 4,
  purchaseConfirmationClaim: false
}));
