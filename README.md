Website for 0xA developed in React with Next.js

# Image Compression

Note: When adding new images, make sure to resize/compress them before committing them to the repo. Otherwise the website will be slow to load.

```
# Resize the images to a maximum width of 1000px
mogrify -strip -resize 1000x *.jpg

# Compress the images
jpegoptim --size=250k --strip-all *.jpg
```

# Event photos

Event photos are prepared with one script instead of by hand. It crops where needed (to 4:3), brings every photo to the
same width (2400px) with a sharp resize, applies one light sharpen (no colour changes), and writes one comparison image
with the original next to the final of each photo (size and applied steps are printed above each).

```
# 1. copy the raw photos (HEIC/JPG) to photo-workflow/originals/<event>/   (git-ignored, never deployed)
# 2. list them in photo-workflow/<event>.manifest.tsv (file, crop centre x/y, zoom; zoom 0 = no crop)
# 3. run (needs only nix; uv installs the two Python packages declared in the script header):
nix shell nixpkgs#uv nixpkgs#python3 --command uv run photo-workflow/photos.py qc2026
```

- Final images: `public/images/<event>/curated/` (the only images the site serves). List them under `pictures:` in `_content/events/<event>.md`.
- Comparison image: `photo-workflow/<event>-comparison.jpg`. Check it, tweak the manifest or the settings at the top of `photos.py` (`WEB_WIDTH`, `SHARPEN`, `QUALITY`), run again.
- Preview locally with `yarn dev` and open `/events/<event>`.
