// For Every Path · Hogy vagy? — repeatable quality gate.
// Covers four-language parity, crypto source, unbiased rejection, six unique items and fresh draws.
"use strict";
const assert = require("node:assert/strict");
const { webcrypto } = require("node:crypto");
const bank = require("../checkin-bank.js");
const languages = ["hu", "en", "de", "fr"];
const ids = bank.questions.hu.map(q => q.id);
assert.equal(ids.length,30);
assert.equal(new Set(ids).size,30);
for (const language of languages) {
  const items = bank.questions[language];
  assert.equal(items.length,30,`30 prompts: ${language}`);
  assert.deepEqual(items.map(q => q.id),ids,`aligned IDs: ${language}`);
  assert.equal(new Set(items.map(q => q.prompt)).size,30,`unique prompts: ${language}`);
  for (const q of items) {
    assert.ok(q.prompt.trim().length>=12,`complete prompt: ${language} ${q.id}`);
    assert.equal(q.choices.length,4,`four choices: ${language} ${q.id}`);
    assert.ok(q.choices.every(x => typeof x==="string" && x.trim().length>=4),`localized choices: ${language} ${q.id}`);
  }
  const seen=new Set();
  let prior="";
  let changed=0;
  for (let run=0; run<500; run++) {
    const draw=bank.drawSix(language,webcrypto);
    assert.equal(draw.length,6,`exactly six: ${language}`);
    assert.equal(new Set(draw.map(q=>q.id)).size,6,`no repeat within run: ${language}`);
    for (const q of draw) {
      assert.ok(items.includes(q),`same language source: ${language}`);
      seen.add(q.id);
    }
    const signature=draw.map(q=>q.id).join(",");
    if (prior&&prior!==signature)changed++;
    prior=signature;
  }
  assert.equal(seen.size,30,`all items eligible: ${language}`);
  assert.ok(changed>450,`fresh random draws: ${language}`);
}
// Force a rejected Uint32 sample and ensure the algorithm retries.
let calls=0;
const mock={getRandomValues(array){array[0]=calls++===0?0xffffffff:0;return array;}};
assert.equal(new Set(bank.drawSix("hu",mock).map(q=>q.id)).size,6);
assert.ok(calls>=7,"out-of-range values must be rejected, not modulo-biased");
assert.throws(()=>bank.drawSix("it",webcrypto),/Unsupported/);
assert.throws(()=>bank.drawSix("hu",{}),/Secure random source unavailable/);
console.log("For Every Path check-in: 30 questions × 4 locales; 6 secure unique draws; rejection path OK");
