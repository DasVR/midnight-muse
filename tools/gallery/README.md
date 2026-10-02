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

   JPEG, PNG or WebP. Export them around 1600px on the long side so the page
   stays fast (the current set is WebP at 1600px, about 100 KB each). Put a
   small copy (about 640px) under the same name in that folder's `thumbs/`:
   the pinned board loads those, and the lightbox loads the full size.

2. Run `node tools/gallery/build-manifest.mjs` from the repo root. It reads
   each photo's size, keeps any alt text already written, and reports photos
   that still have placeholder alt text.

3. Write real alt text for the new photos in `gallery-data.js` (a short
   description of what's in the picture), then commit the photos and the
   manifest together.

Photos appear in folder order (alphabetical by filename), so prefix names with
numbers (`01-`, `02-`) to choose which ones lead.
