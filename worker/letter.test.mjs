// Run: node worker/letter.test.mjs
import assert from "node:assert/strict";
import { handleLetter } from "./letter.js";

var env = { LETTER_TO: "dani@example.com" };
var sent = [];
var send = async (m) => { sent.push(m); };
function req(body, headers) {
  return new Request("https://midnightmuse.pics/api/letter", {
    method: "POST",
    headers: Object.assign({ origin: "https://midnightmuse.pics", "content-type": "application/json" }, headers),
    body: typeof body === "string" ? body : JSON.stringify(body)
  });
}
var good = { name: "Ana Ruiz", email: "ana@example.com", shoot: "Portraits", package: "Muse", vision: "Candles — lace", website: "" };

var r = await handleLetter(req(good), env, send);
assert.equal(r.status, 200);
assert.equal(sent.length, 1);
assert.equal(sent[0].to, "dani@example.com");
assert.match(sent[0].raw, /Reply-To: Ana Ruiz <ana@example.com>/);
assert.match(sent[0].raw, /Content-Transfer-Encoding: base64/);

assert.equal((await handleLetter(req({ ...good, email: "nope" }), env, send)).status, 400);
assert.equal((await handleLetter(req({ ...good, name: "" }), env, send)).status, 400);
assert.equal((await handleLetter(req({ ...good, vision: "x".repeat(5000) }), env, send)).status, 400);
assert.equal((await handleLetter(req("x".repeat(20000)), env, send)).status, 413);
assert.equal((await handleLetter(req("{bad"), env, send)).status, 400);
assert.equal((await handleLetter(req(good, { origin: "https://evil.example" }), env, send)).status, 403);
assert.equal((await handleLetter(new Request("https://midnightmuse.pics/api/letter", { method: "POST", body: "{}" }), env, send)).status, 403);
assert.equal((await handleLetter(new Request("https://midnightmuse.pics/api/letter"), env, send)).status, 405);

var before = sent.length;
var bot = await handleLetter(req({ ...good, website: "http://spam" }), env, send);
assert.equal(bot.status, 200);
assert.equal(sent.length, before, "honeypot must not send");

// Header injection is neutralised.
await handleLetter(req({ ...good, name: "Ana\r\nBcc: x@evil.example" }), env, send);
assert.doesNotMatch(sent.at(-1).raw, /\r\nBcc:/);

assert.equal((await handleLetter(req(good), {}, send)).status, 500);
assert.equal((await handleLetter(req(good), env, async () => { throw new Error("boom"); })).status, 502);
console.log("letter worker: all checks passed");
