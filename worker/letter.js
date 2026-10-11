// The booking letter: validates a POST to /api/letter and hands a plain-text
// email to `send`. Kept free of Cloudflare imports so it can be tested in Node.

var MAX_BODY = 16 * 1024;
var LIMITS = {
  name: 120, email: 254, phone: 40, instagram: 60, shoot: 60,
  package: 120, pinterest: 300, vision: 4000, dates: 300, hear: 200
};

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status: status,
    headers: { "content-type": "application/json", "cache-control": "no-store" }
  });
}

// Header values must stay on one line, or a visitor could inject headers.
function oneLine(text) {
  return String(text).replace(/[\r\n]+/g, " ").trim();
}

function b64(text) {
  var bytes = new TextEncoder().encode(text);
  var bin = "";
  for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

function wrap76(text) {
  return text.replace(/.{1,76}/g, "$&\r\n").trimEnd();
}

function encodedWord(text) {
  return "=?UTF-8?B?" + b64(text) + "?=";
}

export function buildEmail(fields, env, now) {
  var from = env.LETTER_FROM || "letters@midnightmuse.pics";
  var shoot = [fields.shoot, fields.package].filter(Boolean).join(" ");
  var subject = "New letter from " + fields.name + (shoot ? " · " + shoot : "");
  var rows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone],
    ["Instagram", fields.instagram],
    ["Shoot", fields.shoot],
    ["Package", fields.package],
    ["Pinterest", fields.pinterest],
    ["Dates", fields.dates],
    ["Heard of you through", fields.hear]
  ].filter(function (row) { return row[1]; })
    .map(function (row) { return row[0] + ": " + row[1]; });
  var text = rows.join("\n") + (fields.vision ? "\n\nTheir vision:\n" + fields.vision : "") + "\n";
  var domain = from.split("@")[1] || "midnightmuse.pics";
  var raw = [
    "From: Midnight Muse <" + from + ">",
    "To: " + env.LETTER_TO,
    "Reply-To: " + oneLine(fields.name).replace(/[<>",]/g, "") + " <" + fields.email + ">",
    "Subject: " + encodedWord(subject),
    "Date: " + now.toUTCString(),
    "Message-ID: <" + now.getTime().toString(36) + "." + Math.random().toString(36).slice(2) + "@" + domain + ">",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    wrap76(b64(text.replace(/\n/g, "\r\n"))),
    ""
  ].join("\r\n");
  return { from: from, to: env.LETTER_TO, raw: raw, subject: subject };
}

export async function handleLetter(request, env, send) {
  if (request.method !== "POST") return json(405, { ok: false, error: "method" });

  var origin = request.headers.get("origin");
  if (!origin || new URL(origin).host !== new URL(request.url).host) {
    return json(403, { ok: false, error: "origin" });
  }

  var text = await request.text();
  if (text.length > MAX_BODY) return json(413, { ok: false, error: "too-large" });

  var data;
  try { data = JSON.parse(text); } catch (e) { return json(400, { ok: false, error: "json" }); }
  if (!data || typeof data !== "object") return json(400, { ok: false, error: "json" });

  // A real visitor never sees this field; a bot fills it. Pretend it worked.
  if (data.website) return json(200, { ok: true });

  var fields = {};
  for (var key in LIMITS) {
    var v = data[key] == null ? "" : String(data[key]).trim();
    if (v.length > LIMITS[key]) return json(400, { ok: false, error: "too-long", field: key });
    fields[key] = v;
  }
  if (!fields.name) return json(400, { ok: false, error: "name" });
  if (!/^[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]{2,}$/.test(fields.email)) {
    return json(400, { ok: false, error: "email" });
  }
  fields.name = oneLine(fields.name);
  fields.email = oneLine(fields.email);

  if (!env.LETTER_TO) return json(500, { ok: false, error: "not-configured" });

  try {
    await send(buildEmail(fields, env, new Date()));
  } catch (e) {
    return json(502, { ok: false, error: "send" });
  }
  return json(200, { ok: true });
}
