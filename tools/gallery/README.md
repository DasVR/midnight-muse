# Adding photos to the wardrobe

The wardrobe (Work → "Step inside" / "Walk through the wardrobe") shows every
photo listed in `wireframe/gallery-data.js`. To load a full set:

1. Put each photo in the folder for its gallery:

   ```
   wireframe/img/gallery/candlelit/   Candlelit & Gothic
   wireframe/img/gallery/coquette/    Lace & Coquette
   wireframe/img/gallery/y2k/         Y2K & Pop
   wireframe/img/gallery/love/        Love Stories
   wireframe/img/gallery/grads/       Grads
   wireframe/img/gallery/film/        Instant Film
   ```

   JPEG, PNG or WebP. Export them around 1600px on the long side (the current
   photos are 1067×1600) so the page stays fast; 127 full-size camera files
   would be several hundred MB.

2. Run `node tools/gallery/build-manifest.mjs` from the repo root. It reads
   each photo's size, keeps any alt text already written, and reports photos
   that still have placeholder alt text.

3. Write real alt text for the new photos in `gallery-data.js` (a short
   description of what's in the picture), then commit the photos and the
   manifest together.

Photos appear in folder order (alphabetical by filename), so prefix names with
numbers (`01-`, `02-`) to choose which ones lead.
