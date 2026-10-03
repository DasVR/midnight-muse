// Cuts smaller WebP copies of the stamped photos the page uses (the ones in
// wireframe/img itself, named in index.html) into wireframe/img/sized/, so a phone downloads a photo sized for its
// screen. index.html lists them in each photo's srcset.
//
//   npm run sizes      (npm run stamp runs it too)
//
// The copies are cut from photos that already carry the watermark, so they
// carry it as well. A copy is only remade when its source photo is newer.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../../wireframe/img");
const out = path.join(root, "sized");
const WIDTHS = [480, 800, 1200, 1800, 2400];
const page = fs.readFileSync(path.join(root, "../index.html"), "utf8");

fs.mkdirSync(out, { recursive: true });
let made = 0;
const used = (name) => page.includes(`img/sized/${name.replace(/\.jpe?g$/i, "")}-`) || page.includes(`img/${name}`);
for (const name of fs.readdirSync(root).filter((f) => /\.jpe?g$/i.test(f) && used(f))) {
  const src = path.join(root, name);
  const { width } = await sharp(src).metadata();
  const widths = WIDTHS.filter((w) => w < width).concat(width);
  for (const w of widths) {
    const dest = path.join(out, `${name.replace(/\.jpe?g$/i, "")}-${w}.webp`);
    if (fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= fs.statSync(src).mtimeMs) continue;
    await sharp(src).resize({ width: w }).webp({ quality: 74 }).toFile(dest);
    made++;
  }
}
console.log(`Made ${made} sized copies in img/sized.`);
