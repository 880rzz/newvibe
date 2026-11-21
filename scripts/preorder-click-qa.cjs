"use strict";
/*
 * Browser evidence for 36 preorder CTA activations in Chromium and WebKit.
 * Prevents the external protocol at click-capture phase: no email is sent,
 * no external mail client can be certified by this automated test.
 */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");
const { chromium, webkit } = require("playwright");
const root = path.resolve(__dirname, "..");
const slugs = JSON.parse(fs.readFileSync(path.join(root, "catalog.json"), "utf8")).products.map(x => x.slug);
const mime = {
  ".html":"text/html; charset=utf-8", ".css":"text/css; charset=utf-8",
  ".js":"text/javascript; charset=utf-8", ".svg":"image/svg+xml",
  ".jpg":"image/jpeg", ".webp":"image/webp", ".json":"application/json"
};
const server = http.createServer((req, res) => {
  let name;
  try { name = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
  catch { res.writeHead(400).end(); return; }
  let file = path.resolve(root, "." + name);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403).end(); return;
  }
  if (name.endsWith("/") || (fs.existsSync(file) && fs.statSync(file).isDirectory())) {
    file = path.join(file, "index.html");
  }
  fs.readFile(file, (error, buffer) => {
    if (error) { res.writeHead(error.code === "ENOENT" ? 404 : 500).end(); return; }
    res.writeHead(200, {"Content-Type":mime[path.extname(file)] || "application/octet-stream"}).end(buffer);
  });
});
const langs = ["en", "hu", "de", "fr"];
const failures = [];
let tested = 0;
function check(ok, label) { tested++; if (!ok) failures.push(label); }
(async () => {
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const base = "http://127.0.0.1:" + server.address().port + "/";
  try {
    for (const [engine, launcher] of Object.entries({ chromium, webkit })) {
      const browser = await launcher.launch({headless:true});
      try {
        const page = await browser.newPage({viewport:{width:390,height:844},isMobile:engine==="webkit",hasTouch:true});
        for (const lang of langs) for (const slug of slugs) {
          const prefix = lang === "en" ? "" : lang + "/";
          const label = engine + " " + lang + "/" + slug;
          await page.goto(base + prefix + "products/" + slug + ".html", {waitUntil:"domcontentloaded",timeout:30000});
          // Capture a genuine pointer/touch click while safely preventing
          // the browser from launching external mail software.
          await page.evaluate(() => {
            window.__preorderClick = null;
            document.addEventListener("click", event => {
              const a = event.target.closest("a.fep-preorder-action");
              if (!a) return;
              window.__preorderClick = {href:a.getAttribute("href"),trusted:event.isTrusted};
              event.preventDefault();
            }, true);
          });
          const emailButton = page.locator("a.fep-preorder-action");
          check(await emailButton.count() === 1, label + " direct email CTA present");
          await emailButton.click({timeout:10000});
          const click = await page.evaluate(() => window.__preorderClick);
          check(!!click && click.href.startsWith("mailto:"), label + " mailto click captured");
          check(click?.trusted === true, label + " real browser input event");
          const bottom = page.locator('main nav a[href="#preorder"]');
          check(await bottom.count() === 1, label + " end-of-story return exists");
          await bottom.click();
          check(await page.evaluate(() => location.hash) === "#preorder",
            label + " story return navigates to preorder");
        }
        await page.close();
      } finally { await browser.close(); }
    }
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
  console.log("PREORDER_BROWSER_CLICK_QA", JSON.stringify({
    engines:["chromium","webkit"], pages:langs.length*slugs.length,
    clickAttempts:2*langs.length*slugs.length, checks:tested,
    failed:failures.length, failures
  },null,2));
  if (failures.length) process.exitCode = 1;
})().catch(error => {
  console.error("PREORDER_BROWSER_CLICK_FATAL",error.stack || error);
  try { server.close(); } catch {}
  process.exitCode = 1;
});
