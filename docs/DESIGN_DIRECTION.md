# Midnight Muse — Design Direction (v3, based on Dani's mood board)

Source site: https://midnightsmuse.mypixieset.com/ (Pixieset template)
Mood board: https://www.pinterest.com/daniwxcker/website-rebrand/ (private, 11 pins)
Photographer: Dani · Florida · portraits, couples/weddings, graduations, branding
Niche: **alternative photography (goth, alt, whimsigoth, coquette)**, Polaroids as a sideline signature
Brand words (hers): **moody, dreamy, nostalgic, authentic**
Differentiator: she **builds custom sets/backdrops** and makes alt women feel beautiful ("captures women the way Dani does").

> Status: v3 replaces v2 "Midnight Polaroid". Dani's mood board is monochrome antique lace + calligraphy, not red/Polaroid.

---

## What the mood board says

| Pin | What it is | What we take from it |
|---|---|---|
| Lace heart doily on black | Antique lace | Lace as the core motif |
| "To One's Heart" + skeleton key | Copperplate script, silver key, italic poem | Script display type; key as the booking icon |
| Antique book cover with ornate border | Charcoal cloth texture + thin filigree frame | Card/section frames, paper texture |
| Filigree flourishes + ornate "9" | Victorian ornaments | Dividers, ornamental numerals for tiers |
| "Portfolio" web layout with lace strips | Black/ivory, dotted-leader spec lists, mono text | **Pricing as a spec sheet with dotted leaders** |
| "anna sauza" bride on stairs | B&W editorial, big serif over photo, tiny mono text | Hero layout: type overlapping photo |
| "Cordelia Rose" photographer site | Huge script over a dark photo, centered minimal nav | Hero + nav pattern |
| "Design" church/editorial layout | Script over B&W, archival grid with small captions | Gallery index layout |
| "Orris" lace branding | Lace frame, ivory cards, vintage script | Business-card-style detail blocks |
| Lace oval frame over a portrait ("Doll") | Photo inside a lace cameo frame | **Lace frames around featured photos** |
| Wedding RSVP site | Script headline, ivory + black, photo strip | Section rhythm, testimonial strip |

**Palette on the board:** black, charcoal, ivory, bone, pewter grey. **No red, no pink, no Polaroids.**
**Tone:** Victorian mourning, lace and letters, old love notes, a little gothic and very elegant. Editorial, not grungy.

## Concept: "Black Lace & Love Letters"

An antique keepsake box opened at midnight: lace doilies, a skeleton key, handwritten letters and old photographs. The site UI is **strictly black and ivory**. **All color comes from Dani's photos**, so her red velvet sets and pink Y2K work glow against a monochrome frame instead of fighting it.

- **Monochrome UI**: ink black, charcoal cloth texture, ivory/bone type
- **Lace is the frame**: featured photos sit in lace cameo frames; lace strips edge sections
- **Calligraphy + editorial**: huge copperplate script headlines layered over photos, with tiny mono captions as a counterpoint
- **Antique paper details**: filigree borders, ornamental numerals, dotted-leader lists, a skeleton key for "Book"
- **Restraint**: lace or filigree on key moments only (hero, featured work, pricing, booking), not every block

## Tokens

```css
:root {
  --ink:      #0A0A0A;  /* page background */
  --cloth:    #161616;  /* raised surfaces; pair with charcoal cloth texture */
  --ivory:    #F2EEE6;  /* lace, headline script, primary text */
  --bone:     #D9D2C5;  /* body text on dark */
  --pewter:   #8C8983;  /* secondary text, rules, filigree */
  --smoke:    #2A2A2A;  /* borders, dividers on dark */
  /* Optional, only if Dani wants one: a sliver of --oxblood #6E1420 for hover/focus only */
}
```

Contrast rule: body text is `--bone` on `--ink` (passes AA). `--pewter` only for ≥14px secondary text. The current site's grey-on-black body text must not return.

## Type (all Google Fonts)

- Script display (wordmark, section titles): **Pinyon Script** (closest to "Cordelia Rose" / "To One's Heart"). Alternates: **Monsieur La Doulaise**, **Italianno**. Large sizes only (≥48px), never body copy
- Serif: **Cormorant Garamond** 300/400 + italic, for subheads, quotes and intro text
- Body: **Cormorant Garamond** 400 at 18–20px, or **EB Garamond** if Cormorant feels too thin on screens
- Mono labels: **IBM Plex Mono** 400, 11–12px, uppercase, letter-spaced (captions, prices, "PORTRAITS — 01", dotted-leader spec lists)
- Optional blackletter accent (from the "anna sauza" pin): **UnifrakturCook**, one word max, e.g. "Muse" in the wordmark. Confirm with Dani

## Signature components

- **Lace cameo frame**: an oval or arched lace border (transparent PNG/WebP, ivory) around featured photos. Photo is `object-fit: cover` behind a `mask-image` oval. Used for the hero feature, Meet Dani and testimonial portraits
- **Lace strip**: a horizontal lace border as a section edge (top of pricing, footer)
- **Filigree divider**: thin SVG flourish in `--pewter` between sections
- **Antique frame card**: a thin double-rule border with corner ornaments (like the book-cover pin), used for pricing tiers and FAQ
- **Spec sheet pricing**: each tier as an ornamental numeral + script name, with details on dotted leaders
  `SESSION TIME ........ up to 1 hr`
  `EDITED PHOTOS ....... 15–25+`
  `LOCATIONS ........... 1–2`
- **Skeleton key**: icon for the Book CTA ("Unlock your session"), and as a small cursor/hover detail
- **Letter-style testimonials**: quotes set in italic serif like a handwritten note on ivory paper, signed in script, with the client's photo in a small lace cameo
- **Charcoal cloth texture**: subtle tiled texture on `--cloth` surfaces plus fine grain overlay (~5%)

## Motion (quiet, like turning pages)

- **Lenis** smooth scroll
- **GSAP + ScrollTrigger**: script headlines draw in (stroke reveal via SVG or clip-path), lace frames fade/scale in from 0.96, photos fade from grayscale → color as they enter (reinforces "all color comes from the photos")
- Hover on gallery photos: grayscale 60% → full color
- Respect `prefers-reduced-motion`

## Site structure

1. **Hero**: full-bleed B&W-toned photo (desaturated in CSS, blooms to color on load), "Midnight Muse" in huge script overlapping it, centered minimal nav (Cordelia Rose pin), mono line: "ALTERNATIVE PORTRAITS · FLORIDA"
2. **Meet Dani**: her portrait in a lace cameo + a short letter-style intro signed in script
3. **The Sets**: behind-the-scenes of her built sets, archival-grid layout with small mono captions ("SET NO. 04 — RED VELVET")
4. **Work**: galleries by aesthetic (Candlelit & Gothic · Lace & Coquette · Y2K & Pop · Love Stories · Grads · Instant Film), each a cover photo with ornamental number + script title, sealed until the visitor unlocks it with the key
5. **Sessions & Pricing**: antique frame cards with spec-sheet details. Prices also show in the hero (price ribbon) and "Pricing" is a top-level nav link
6. **Open Dates**: live from Dani's Cal.com (`midnight-muse-jk6nt0`). Pick a session and package, a day, then a time; reserving opens Cal.com's booking window prefilled, or "send a letter instead" fills the form. Per-package Cal.com events map in `CAL.events` in `main.js`
7. **Blind Date**: proposal, pending Dani's pick of three options
8. **Maternity Shop**: product grid (rent / buy TBD, needs checkout)
9. **Doll Houses**: Dani's dollhouse-style photo series, grouped into sets. Each set is drawn as a house and its photos are the rooms; sets are sold whole, never single photos (needs checkout)
10. **Kind Words**: letter-style testimonials with lace cameo portraits
11. **FAQ**: accordion inside an antique frame
12. **Book**: skeleton key CTA → inquiry form styled like stationery (underlined fields, mono labels)

## Assets we need (don't lift from Pinterest)

The pins are other people's work (e.g. the "Cordelia Rose" and "anna sauza" sites), so they're for reference only. Real assets:
- **Lace**: CC0 antique lace scans from museum open-access collections (The Met, Rijksmuseum, Cooper Hewitt), cleaned into transparent PNGs. Or Dani photographs real lace/doilies from her own set props on black. Best option: that's on-brand and 100% hers
- **Filigree/ornaments + key**: CC0 Victorian ornament scans, or simple custom SVGs
- **Cloth texture**: photograph a black book cover/fabric, or a CC0 texture

## Questions for Dani

- Does she sell Polaroid prints/add-ons? (If yes → add to every package as an upsell)
- Blackletter accent on "Muse" in the wordmark: yes or no? And does she want a tiny oxblood accent for hover states, or pure black/ivory?
- Ask for 10–15 favorite shots, plus photos of real lace/doilies from her props (for the lace frames)

## Photo review (116 images across Home, Testimonials, 4 galleries)

**What her work actually is:** styled, flash-lit, set-built alt portraits. The recurring signature is a **red velvet drape + direct flash + candles** (IMG_6754, 7042, 3820, 9442, 9334, 9596). Under v3 the UI stays black/ivory so these red sets are the color on the page.

**The moods in her work:**
1. **Candlelit goth**: red velvet, candelabras, black lipstick, smoke (her strongest and most distinctive)
2. **Coquette / whimsigoth**: lace veils, mirrors, candles, white dresses (IMG_7984, 8034, 8200, 0383)
3. **Y2K / alt-pop**: hot pink, disco ball, long nails, beach bikinis, graffiti (IMG_3620, 3354, 8189)
4. **Alt love stories**: diner window kiss, goth couples, red-curtain couples (IMG_0913, 7504, 9442)
5. **Alt grads**: record store, Descendents vinyl, graffiti wall, bookstore (IMG_6802, 2636, 8737). A real niche: most grad photographers don't do this

**Problems:**
- **The first impression is wrong.** The home hero is a soft lace-veil-in-a-forest shot (IMG_2683), and the other home picks are a sunlit field and a bookstore. None of them say goth or alt. Lead with candlelit goth instead
- **The "Branding" gallery is mostly not branding.** It's Y2K beach shoots and coquette candle sets; only the pink-nail series reads as a brand shoot (a nail tech?)
- **Duplicate images:** IMG_0913 twice in Love Stories, IMG_0687 twice in Graduations, IMG_3537 twice in Branding
- **Over-long, uncurated galleries.** Portraits has 37 images spanning goth, Miku cosplay, clown, sunset bikini and B&W boudoir. Aim for 12–18 per gallery, strongest first
- **Tone breaks:** golden-hour beach silhouettes (IMG_9603, 9616) and the rainbow jet-ski set read like a different photographer. Keep them in a gallery, not on the home page
- **No Polaroids anywhere on the site**, even though they're a signature. Need scans
- **Sensitive content:** a few lingerie/boudoir-leaning shots (IMG_9334, 9388). Ask Dani whether she wants a separate, opt-in "Boudoir" category or wants them out

**Recommended re-categorization (browse by aesthetic, the way alt clients search):**
`Candlelit & Gothic` · `Lace & Coquette` · `Y2K & Pop` · `Love Stories` · `Grads` · `Instant Film` (Polaroids). Keep "Branding" only if she actually markets to businesses.

**Color:** UI stays monochrome (v3); her red and pink photos supply all the color.

**Hero shortlist:** see `docs/hero-shortlist.jpg`. Lead: IMG_6754 (candelabra). Work covers / featured: IMG_6064, 3820, 7042, 9442, 7504, 6802, 2636, 8200, 5769, 0913, 3620.

## Testimonials review

Current page: 9 short quotes, split into 3 blocks that each repeat the heading "Testimonials", with 9 photos that **appear** to pair with the quotes in order (e.g. Bradyn & Carter ↔ couple under tree). The pairing is never labeled.

**Problems:**
- Hidden on a separate page. Her best sales copy never shows up on the home page or pricing pages
- First name only: no shoot type, no link between the quote and the photo from that client's session
- Mostly one-liners. Only Mel's is a full paragraph
- Doesn't speak to the alt niche, apart from Chloe's quote
- Small copy issues: "it felt" should be capitalized, "<3" renders as plain text, "business !" has a stray space (Services page)

**Redesign:**
- **Letter testimonials:** quote in italic serif like a handwritten note, signed in script with name + shoot type (e.g. "Chloe · Candlelit portrait"), client photo in a small lace cameo
- **Hero pull-quote:** Chloe's "Only person I've found who captures women the way Dani does" under the hero CTA
- **Contextual quotes:** Laura's "Created an entire set in my bedroom!" goes in **The Sets** section; Jayme's and Tolin's "felt comfortable" quotes go next to the **FAQ "first photoshoot?"** answer; Bradyn & Carter goes on Love Stories
- **Ask Dani to collect more:** 3–4 longer reviews (via a Google Business profile, which also helps local SEO) and permission to pair each with the client's photo
- Data: `src/content/testimonials.json` → `{ name, shootType, quote, photo, featured }`

## Content fixes to carry over (bugs on current site)

- Branding pricing: "$700" is mislabeled as **Package 03** (should be 04)
- Couples/Weddings: Tier 4 ($1500) and Tier 5 ($1800) details are jumbled/missing
- Couples Tiers 3–5 all list "15–25+ photos" (likely copy-paste, confirm with Dani)
- Contact form "Tier 1–5" doesn't match packages (Grad has 3, Branding has 4). Make tier options depend on shoot type
- Footer Instagram link points to `https://midnights.muse/` (broken). Should be `https://www.instagram.com/midnights.muse`
- URLs: `new-page`, `new-page-1`, `gallery-1`… become `/pricing/portraits`, `/work/love-stories`, etc.
- Remove "(CLICK TO VIEW)" labels. Make whole cards clickable instead
- Portfolio page repeats "What we do" 4×
- Contact form requires phone but offers no email field. Add email

## Proposed stack (pending confirmation)

- **Astro** + **Tailwind CSS**: static, fast, built-in image optimization (`astro:assets`)
- **GSAP** (ScrollTrigger, Draggable) + **Lenis** for motion
- **PhotoSwipe** for gallery lightbox
- Form: Formspree or Web3Forms (free tier, posts to Dani's email)
- Host: **Cloudflare Pages** (free, unlimited bandwidth, commercial use allowed). Not Vercel Hobby (non-commercial only)
- Domain: **Cloudflare Registrar** (at-cost pricing, ~$10–11/yr for .com) + free Cloudflare Email Routing (hello@domain → her Gmail)
- Keep Pixieset (free plan) for client gallery delivery only
- Content (packages, testimonials, FAQs) in `src/content/*.json|md` so it's editable without touching layout
