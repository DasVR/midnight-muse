# Task 01: Showcase wireframe (home page)

**Goal:** A single, scrollable, mid-fidelity wireframe of the new home page to show Dani (the photographer/client). She is not a designer, so it must *look* like the direction (real photos, real fonts, real colors) while clearly being a draft. It is **not** the production site. Speed and clarity matter more than code architecture.

Read first: `docs/DESIGN_DIRECTION.md` (v3, "Black Lace & Love Letters"). Follow its tokens, type and components exactly.

## Constraints

- Plain **HTML + CSS + a little vanilla JS**. No framework, no build step, no npm. It must open by double-clicking `wireframe/index.html` and also work when uploaded as a static site.
- Files: `wireframe/index.html`, `wireframe/styles.css`, `wireframe/main.js`, `wireframe/assets/*.svg`. Photos are already in `wireframe/img/` (do not rename).
- Fonts via Google Fonts `<link>`: Pinyon Script, Cormorant Garamond (300,400,500 + italics), IBM Plex Mono (400,500).
- GSAP + ScrollTrigger from cdnjs is allowed for reveals. Skip Lenis for the wireframe.
- Must look good at **1440px, 1024px, and 390px (phone)**. No horizontal scroll at 390px.
- Respect `prefers-reduced-motion`.
- Accessible: real `alt` text, text contrast per the tokens (`--bone` on `--ink` for body).

## Tokens (copy exactly)

```css
:root{
  --ink:#0A0A0A; --cloth:#161616; --ivory:#F2EEE6; --bone:#D9D2C5;
  --pewter:#8C8983; --smoke:#2A2A2A;
  --script:'Pinyon Script', cursive;
  --serif:'Cormorant Garamond', Georgia, serif;
  --mono:'IBM Plex Mono', ui-monospace, monospace;
}
```
UI is strictly black/ivory/grey. **All color comes from the photos.**

## Placeholder assets (build as SVG, clearly "stand-ins")

- `assets/lace-oval.svg`: an ivory oval "lace" frame: two concentric ovals + a ring of small scallops (arcs) + tiny dot eyelets between them. Used as an overlay on a photo masked to an oval. It should read as "lace goes here", not try to be photoreal.
- `assets/lace-strip.svg`: a horizontal repeating scallop/eyelet border for section edges (`background-repeat: repeat-x`).
- `assets/filigree.svg`: a symmetrical thin flourish divider (~320×40), stroke `--pewter`, 1px.
- `assets/key.svg`: a simple skeleton key icon, stroke-only.
- `assets/corner.svg`: a small ornamental corner for the antique frame cards (rotate for 4 corners).

## Sections (top → bottom)

Each section gets `data-note="…"` with a one-line explanation for Dani (see *Annotations*).

1. **Nav (sticky, minimal, centered)**
   Left links: Work · Sets · Sessions. Center: small script "Midnight Muse". Right: Kind Words · FAQ · **Book** (with key icon). Mono, 11px, uppercase, letter-spaced. On phone: script wordmark + "Menu" that opens a full-screen black overlay with the links in large serif.
   *Note:* "Quiet, centered navigation like your Cordelia Rose pin."

2. **Hero (100vh)**
   Full-bleed `img/IMG_6754.jpg` (candelabra), `object-position` so her face stays visible. Starts `grayscale(1) brightness(.7)` and blooms to full color over ~1.6s on load.
   Huge "Midnight Muse" in `--script` (clamp 72px → 200px), ivory, overlapping the photo's lower third, slightly off-center.
   Under it, mono: `ALTERNATIVE PORTRAITS · FLORIDA`. Then Chloe's quote in italic serif, small: *"Only person I've found who captures women the way Dani does."* — CHLOE (mono).
   CTA: outline button "Unlock your session" + key icon.
   *Note:* "Opens on your candlelit work so goth/alt clients know instantly you're for them."

3. **Meet Dani**
   Two columns (stacks on phone). Left: portrait in the **lace oval** frame. Use `img/IMG_8034.jpg` as a placeholder and label it in mono: `PLACEHOLDER — YOUR PORTRAIT HERE`. Right: script heading "Hello, muse", then a short letter in serif (use placeholder copy below), signed "— Dani" in script.
   Placeholder copy: *"I photograph the strange, the soft and the romantic. Every shoot starts with your vision. I build the set, find the light, and guide every pose so you never have to know how to model. You just have to show up as yourself."*
   *Note:* "Clients book the person. This is where your face and voice go."

4. **The Sets**
   Heading script "The Sets" + mono sub "BUILT BY HAND, FOR YOU".
   Asymmetric archival grid of 4 photos with small mono captions:
   `SET NO. 01 — RED VELVET` (IMG_3820), `SET NO. 02 — CANDLELIGHT` (IMG_7042), `SET NO. 03 — THE MIRROR` (IMG_8200), `SET NO. 04 — SPOTLIGHT` (IMG_5769).
   Pull quote on the side: *"Created an entire set in my bedroom! The best."* — LAURA.
   *Note:* "Your custom sets are what nobody else offers, so they get their own section."

5. **Work (galleries by aesthetic)**
   Filigree divider above. Heading script "The Work".
   6 cards in a 3×2 grid (2 columns tablet, 1 column phone). Each card: cover photo (portrait 4:5), ornamental numeral in serif (I–VI), title in script, mono count "18 PHOTOGRAPHS".
   I Candlelit & Gothic (IMG_6064) · II Lace & Coquette (IMG_7984) · III Y2K & Pop (IMG_3620) · IV Love Stories (IMG_9442) · V Alt Grads (IMG_6802) · VI Instant Film (use `IMG_0913.jpg` with a mono label `POLAROID SCANS COMING`).
   Hover: photo 60% grayscale → full color, slight scale 1.03.
   *Note:* "Galleries sorted by vibe, the way alt clients search."

6. **Sessions & Pricing**
   Lace strip on top edge. Heading script "Sessions". Tabs (mono): Portraits · Couples · Graduations · Branding (only Portraits needs to be wired; others can switch to the same layout with their data if quick).
   Portrait tiers as **antique frame cards** (thin double rule + corner ornaments), 5 across on desktop → horizontal scroll-snap on phone. Each: roman numeral, script name, big serif price, then a **dotted-leader spec list** in mono:
   ```
   I   Mini        $100  | SESSION ....... 30 min | EDITED PHOTOS ... 5–10+ | LOCATIONS ... 1 | TRAVEL ... 20 min
   II  Basic       $175  | 1 hr | 15–25+ | 1–2 | 35 min
   III Styled      $250  | 1 hr | 20+ | 1–2 | 35 min | + outfit options
   IV  Complete    $325  | 1.5 hr | 20+ | 1–2 | 40 min | + curated outfits & props
   V   Muse        $475  | 2 hr | 25+ | 1 | + curated outfits, props & backdrop
   ```
   Mark tier III with a small mono tag "MOST BOOKED" (placeholder, confirm with Dani).
   Dotted leaders via CSS (`flex` + a middle span with `border-bottom: 1px dotted var(--pewter)`).
   *Note:* "Every package in one consistent layout, read like an old spec sheet."

7. **Kind Words**
   Heading script "Kind Words". 3 letter-style cards on `--cloth` with subtle texture: quote in italic serif (20–22px), signature in script, mono shoot type, small lace-oval photo of the client.
   - Mel: "Absolutely loved working with Dani! She's so considerate, communicates everything so well, and truly puts her whole heart into every shoot…" (IMG_6016), PORTRAIT
   - Bradyn & Carter: "Very sweet and amazing communication! The photos came out so beautifully." (IMG_9842), LOVE STORY
   - Riley: "Working with her was comfortable and felt like a collaboration more than just one person's idea at work." (IMG_0567), GRADUATION
   *Note:* "Reviews look like handwritten letters and sit right on the home page."

8. **FAQ**
   Inside one antique frame. Accordion (`<details>/<summary>`), serif questions, `+` rotates to `×`:
   - Are travel expenses included? → "In most cases around ½ an hour of travel time is included in your session, but there are extra fees for anything further. We can figure out exact costs when discussing location."
   - This is my first photoshoot, what should I know? → "You will never have to be a model or know how to pose! I will always guide you through posing and do my best to make sure you're comfortable and having fun."
   - What if the weather is bad? → "Florida is very unpredictable, and we can always reschedule for no extra charge if you're not comfortable going out in bad weather."
   Next to the first-shoot answer, small quote: *"All nerves melted away so quickly."* — JAYME
   *Note:* "One shared FAQ instead of repeating it on every pricing page."

9. **Book**
   Big key icon, script "Unlock your session". Stationery-style form: mono labels, fields are just a bottom border in `--pewter`, ivory text. Fields: Name, Email (new), Phone, Instagram @, Shoot type (select), Package (select, **options change with shoot type**), Pinterest board link, Your vision (textarea), Preferred dates, How did you hear about me. Submit button "Send your letter". **Not wired to anything**; on submit, show an inline "This is a wireframe, no message sent" note.
   *Note:* "Your booking form, now with email, and the package list matches the shoot type."

10. **Footer**
    Lace strip, script wordmark, mono links, Instagram → `https://www.instagram.com/midnights.muse`, "© 2026 Midnight Muse · Florida".

## Annotations (important for the client review)

- A fixed pill button bottom-right: "Show notes / Hide notes" (mono). Default **on**.
- When on, each section shows its `data-note` in a small ivory tag with black text, pinned top-left of the section, numbered ①–⑩. When off, the page looks like the real site.
- A thin fixed banner top: `WIREFRAME DRAFT — for Dani's review · photos & copy are placeholders where marked` (mono, 10px, can be dismissed).

## Motion (keep light)

- Hero bloom (CSS keyframes).
- ScrollTrigger: section headings fade/translate up 16px; photos go grayscale → color as they enter; lace frames scale .96 → 1.
- Everything off under `prefers-reduced-motion`.

## Done when

- Opens locally with no console errors; all 21 images load from `img/`.
- Checked at 1440 / 1024 / 390 wide: no overflow, pricing cards scroll-snap on phone, nav menu works on phone.
- Notes toggle works; banner dismisses.
- Nothing links to Pinterest assets; all ornaments are your own SVGs.
- Reply with a short summary and anything you had to guess.
