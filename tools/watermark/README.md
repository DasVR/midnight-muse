# Watermark

Every photo the site serves carries a small Midnight Muse mark: the script
wordmark in the bottom-right corner and the skeleton key in the bottom-left.
The mark is drawn into the image pixels, so it can't be removed by hiding
an overlay, saving the file or opening it in a new tab. Cropping one corner
still leaves the other.

## Stamping new photos

After adding photos to `wireframe/img/` (and running the gallery manifest
script for gallery photos):

```
cd tools/watermark
npm install        # first time only
npm run stamp
```

Only photos that haven't been stamped yet are touched.

`npm run stamp` then cuts WebP copies of the page's photos (the ones in
`wireframe/img/` itself) at 480, 800, 1200, 1800 and 2400px wide into
`wireframe/img/sized/`, so phones download a photo sized for their screen.
They're cut from the stamped files, so they carry the mark too. To put a new
photo on the page, add it as `img/NAME.jpg` in `index.html`, run
`npm run stamp`, then swap the tag to the `img/sized/NAME-*.webp` files with a
`srcset` like the other photos.
`wireframe/img/.watermarked.json` records which files are already marked.

The wordmark is set in Pinyon Script. Install `PinyonScript-Regular.ttf`
(in this folder) as a system font before the first run.

## Keep the originals

Stamping is permanent. Keep Dani's untouched originals outside this repo
(in her iCloud library, for example). They're needed to change the mark's
design later or to print without it.
