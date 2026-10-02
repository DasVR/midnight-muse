// Stamps a small Midnight Muse mark into the bottom corners of every photo
// the site serves: the script wordmark bottom right, the skeleton key bottom
// left. The mark is drawn into the pixels, so it can't be stripped off the
// way a CSS overlay can.
//
//   cd tools/watermark && npm install && npm run stamp
//
// Each file is stamped once. .watermarked.json (next to the photos) records
// what's been done, so running it again only stamps photos added since.
// Stamping is permanent: keep Dani's untouched originals somewhere else.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../../wireframe/img");
const ledgerFile = path.join(root, ".watermarked.json");
const ledger = fs.existsSync(ledgerFile) ? JSON.parse(fs.readFileSync(ledgerFile, "utf8")) : {};
const fontFile = path.resolve(path.dirname(new URL(import.meta.url).pathname), "PinyonScript-Regular.ttf");

const IVORY = "#F2EEE6";
const INK = "#0A0A0A";
// The key from assets/key.svg, in its own 32 x 72 box.
const KEY = '<circle cx="16" cy="14" r="9"/><circle cx="16" cy="14" r="3.25"/><path d="M16 23v43M16 48h8M16 55h6M16 62h10"/>';

function sha(buf) { return crypto.createHash("sha1").update(buf).digest("hex"); }

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) return walk(p);
    return /\.(jpe?g|webp|png)$/i.test(d.name) ? [p] : [];
  });
}

function overlay(w, h) {
  const s = Math.min(w, h);
  const m = Math.round(s * 0.035);                 // distance from the edges
  const fs = Math.max(13, Math.round(s * 0.042));  // wordmark size
  const kh = Math.max(16, Math.round(s * 0.06));   // key height
  const k = kh / 72;
  const blur = Math.max(0.6, s * 0.0035);
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">` +
      `<defs><filter id="sh" x="-20%" y="-50%" width="140%" height="200%">` +
        `<feDropShadow dx="0" dy="${(blur * 0.6).toFixed(2)}" stdDeviation="${blur.toFixed(2)}" flood-color="${INK}" flood-opacity="0.6"/>` +
      `</filter></defs>` +
      `<g filter="url(#sh)" opacity="0.78">` +
        `<text x="${w - m}" y="${h - m}" text-anchor="end" font-family="Pinyon Script" font-size="${fs}" fill="${IVORY}">Midnight Muse</text>` +
        `<g transform="translate(${m} ${h - m - kh}) scale(${k.toFixed(4)})" fill="none" stroke="${IVORY}" stroke-width="${(Math.max(1.2, s * 0.0024) / k).toFixed(2)}" stroke-linecap="round">${KEY}</g>` +
      `</g>` +
    `</svg>`
  );
}

async function stamp(file) {
  const rel = path.relative(root, file);
  const before = fs.readFileSync(file);
  if (ledger[rel] && ledger[rel] === sha(before)) return "skip";
  const img = sharp(before);
  const { width, height, format } = await img.metadata();
  const out = img.composite([{ input: overlay(width, height), top: 0, left: 0 }]);
  const thumb = rel.includes(`${path.sep}thumbs${path.sep}`);
  const buf = format === "webp"
    ? await out.webp({ quality: thumb ? 62 : 74 }).toBuffer()
    : format === "png" ? await out.png().toBuffer()
    : await out.jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  fs.writeFileSync(file, buf);
  ledger[rel] = sha(buf);
  return "stamped";
}

// The wordmark is set in Pinyon Script, which has to be installed as a system
// font for the SVG renderer to find it (copy PinyonScript-Regular.ttf into
// ~/.fonts on Linux, or install it with Font Book on a Mac).
if (!fs.existsSync(fontFile)) console.warn("PinyonScript-Regular.ttf is missing from tools/watermark.");
const files = walk(root);
let stamped = 0;
for (const f of files) if ((await stamp(f)) === "stamped") stamped++;
fs.writeFileSync(ledgerFile, JSON.stringify(ledger, null, 0).replace(/,"/g, ',\n"') + "\n");
console.log(`Stamped ${stamped} of ${files.length} photos (the rest were already marked).`);
