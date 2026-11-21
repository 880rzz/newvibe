"use strict";

/**
 * Independently verify that GitHub Pages serves the same bytes as the
 * checked-out production commit. This runs on a GitHub-hosted Actions
 * runner, not against a local development server.
 *
 * No write operations, analytics, browser cookies or third-party calls.
 */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const crypto = require("node:crypto");
const { setTimeout: delay } = require("node:timers/promises");

const origin = "https://880rzz.github.io/newvibe/";
const languages = ["en", "hu", "de", "fr"];
const slugs = [
  "helyed-van-koztunk",
  "egy-kis-ter",
  "lepesrol-lepesre-2027",
  "tanari-hataridonaplo-2027-szines",
  "tanari-hataridonaplo-2027-letisztult",
  "veled-a-mindennapokban",
  "mesek-a-vilag-korul",
  "mesek-a-vilag-korul-szinezo",
  "na-most-mit-csinaljak"
];

const targets = [];
for (const language of languages) {
  const prefix = language === "en" ? "" : language + "/";
  targets.push({ path: prefix + "index.html", url: prefix, type: "html" });
  for (const dir of ["catalog", "about"]) {
    targets.push({
      path: prefix + dir + "/index.html",
      url: prefix + dir + "/",
      type: "html"
    });
  }
  for (const slug of slugs) {
    const path = prefix + "products/" + slug + ".html";
    targets.push({ path, url: path, type: "html" });
  }
}
for (const path of [
  "sitemap.xml",
  "robots.txt",
  "catalog.json",
  "catalog.css",
  "site-menu.js",
  "assets/helyed-van-koztunk-01.jpg",
  "assets/helyed-van-koztunk-02.jpg",
  "assets/helyed-van-koztunk-03.jpg",
  // Source-grounded five-card demo: verify every new production dependency.
  "card-demo.css",
  "card-demo.js",
  "assets/card-demo/01.svg",
  "assets/card-demo/07.svg",
  "assets/card-demo/13.svg",
  "assets/card-demo/20.svg",
  "assets/card-demo/35.svg"
]) {
  targets.push({ path, url: path, type: "asset" });
}

assert.equal(targets.filter(x => x.type === "html").length, 48);
assert.equal(targets.length, 63);
const hash = data => crypto.createHash("sha256").update(data).digest("hex");

async function check(target) {
  const expected = fs.readFileSync(target.path);
  const url = new URL(target.url, origin);
  // A cache-busting query avoids a stale CDN response masking the new release.
  url.searchParams.set("release-check", process.env.GITHUB_SHA || "manual");

  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "Cache-Control": "no-cache", "Accept": "*/*" },
      signal: AbortSignal.timeout(25000)
    });
    const resolved = new URL(response.url);
    if (resolved.origin !== new URL(origin).origin) {
      return { path: target.path, error: "unexpected host: " + resolved.origin };
    }
    if (response.status !== 200) {
      return { path: target.path, error: "HTTP " + response.status };
    }
    if (target.type === "html" &&
        !response.headers.get("content-type")?.includes("text/html")) {
      return { path: target.path, error: "unexpected content-type" };
    }
    const actual = Buffer.from(await response.arrayBuffer());
    const expectedHash = hash(expected);
    const actualHash = hash(actual);
    if (expectedHash !== actualHash) {
      return {
        path: target.path,
        error: "content mismatch",
        expectedBytes: expected.length,
        actualBytes: actual.length,
        expectedSha256: expectedHash,
        actualSha256: actualHash
      };
    }
    return null;
  } catch (err) {
    return { path: target.path, error: String(err?.message || err) };
  }
}

async function audit() {
  const failures = [];
  for (let offset = 0; offset < targets.length; offset += 8) {
    const batch = targets.slice(offset, offset + 8);
    const results = await Promise.all(batch.map(check));
    failures.push(...results.filter(Boolean));
  }
  return failures;
}

(async () => {
  const attempts = 16;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    const failures = await audit();
    console.log(JSON.stringify({
      audit: "live-pages-source-parity",
      sourceCommit: process.env.GITHUB_SHA || null,
      attempt,
      expectedRoutes: 48,
      expectedAssets: 15,
      success: targets.length - failures.length,
      failed: failures.length,
      sampleFailures: failures.slice(0, 5)
    }));
    if (failures.length === 0) {
      console.log("PASS: 48 published HTML routes and 15 public assets match this commit byte for byte over HTTPS.");
      return;
    }
    if (attempt < attempts) await delay(20000);
  }
  throw new Error("Published GitHub Pages did not converge to this commit within the release verification window.");
})().catch(err => {
  console.error("LIVE_PAGES_VERIFICATION_FAILED", err.stack || err);
  process.exitCode = 1;
});
