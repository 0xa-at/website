#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = ["pillow", "pillow-heif"]
# ///
"""Event photos: originals -> (optional 4:3 crop) -> same-size sharpened web JPGs, plus ONE comparison image.

No colour edits and no metadata: every output is pixels only (no EXIF, GPS, camera info, ICC, XMP; checked on each run).
Every photo ends up the same width (WEB_WIDTH), downscaled with Lanczos and sharpened once, so photos
from all phones/cameras are equally crisp. Only the 4:3 crops in <event>.manifest.tsv change the framing.

Run from the repo root (nix provides uv + python, uv fetches the two packages declared in the header above):

    nix shell nixpkgs#uv nixpkgs#python3 --command uv run photo-workflow/photos.py qc2026

Inputs : photo-workflow/originals/<event>/        raw photos, NOT in git (git-ignored) and outside public/, so never deployed
         photo-workflow/<event>.manifest.tsv       name, file, crop centre x/y, zoom (zoom 0 = no crop)
Outputs: public/images/<event>/curated/NN_name.jpg the only images the site serves (list them in _content/events/<event>.md)
         photo-workflow/<event>-comparison.jpg     ONE image: [original | final] pairs, with size / what was applied above each
"""
import argparse
import io
import shutil
import textwrap
from pathlib import Path

from PIL import Image, ImageCms, ImageDraw, ImageFilter, ImageFont, ImageOps
from pillow_heif import register_heif_opener

register_heif_opener()

ROOT = Path(__file__).resolve().parent.parent
WF = ROOT / "photo-workflow"
ASPECT = 4 / 3
WEB_WIDTH = 2400                      # every photo is brought to this width (never upscaled beyond the source)
SHARPEN = ImageFilter.UnsharpMask(radius=1.3, percent=70, threshold=2)  # the one sharpening step, edit to taste
QUALITY = 90
CELL_W, CELL_H, BAND_H = 1600, 1200, 330  # comparison image: one cell = black label band + image fitted into CELL_W x CELL_H
PAIRS_PER_ROW = 2                         # 2 pairs = 4 cells per row; raise CELL_W for a sharper (and much bigger) comparison


SRGB = ImageCms.createProfile("sRGB")


def load(path):
    """Open, apply the EXIF rotation, and convert any embedded profile (iPhone: Display P3) to sRGB so colours stay
    true once the profile is dropped. All metadata (EXIF/GPS/camera/ICC/XMP) is left behind: only pixels survive."""
    im = Image.open(path)
    icc = im.info.get("icc_profile")
    im = ImageOps.exif_transpose(im)
    if icc:
        im = ImageCms.profileToProfile(im.convert("RGB"), ImageCms.ImageCmsProfile(io.BytesIO(icc)), SRGB, outputMode="RGB")
    return im.convert("RGB")


def assert_clean(path):
    """Production check: a saved JPEG must hold no EXIF, ICC profile, XMP, comment or thumbnail - only JFIF basics."""
    im = Image.open(path)
    leftovers = [k for k in im.info if k not in ("jfif", "jfif_version", "jfif_unit", "jfif_density", "dpi", "progressive", "progression")]
    raw = Path(path).read_bytes()
    markers = [m for m in (b"Exif", b"http://ns.adobe.com/xap", b"ICC_PROFILE", b"Photoshop 3.0") if m in raw]
    if len(im.getexif()) or leftovers or markers:
        raise SystemExit(f"metadata found in {path}: exif={len(im.getexif())} info={leftovers} markers={markers}")


def crop_4x3(im, cx, cy, zoom):
    w, h = im.size
    cw, ch = (w, w / ASPECT) if w / h < ASPECT else (h * ASPECT, h)
    cw, ch = int(cw * zoom), int(ch * zoom)
    x = int(min(max(cx * w - cw / 2, 0), w - cw))
    y = int(min(max(cy * h - ch / 2, 0), h - ch))
    return im.crop((x, y, x + cw, y + ch))


def cell(im, lines):
    """Black band with the facts in `lines`, then the image shrunk to fit and centred (comparison image only)."""
    c = Image.new("RGB", (CELL_W, BAND_H + CELL_H), (0, 0, 0))
    fs = 34
    font = ImageFont.load_default(size=fs)
    d = ImageDraw.Draw(c)
    wrapped = [w for line in lines for w in textwrap.wrap(line, int(CELL_W / (fs * 0.56)))]
    for i, text in enumerate(wrapped[:7]):
        d.text((14, 10 + i * fs * 1.3), text, font=font, fill=(255, 255, 255) if i == 0 else (190, 200, 210))
    s = min(CELL_W / im.width, CELL_H / im.height, 1.0)
    t = im.resize((round(im.width * s), round(im.height * s)), Image.LANCZOS)
    c.paste(t, ((CELL_W - t.width) // 2, BAND_H + (CELL_H - t.height) // 2))
    return c


def process(row, event, web_dir):
    name, srcname, cx, cy, zoom = row
    src = WF / "originals" / event / srcname
    im = load(src)
    framed = crop_4x3(im, cx, cy, zoom) if zoom > 0 else im
    steps = []
    if zoom > 0:
        steps.append(f"crop 4:3 around x={cx} y={cy} ({im.width}x{im.height} -> {framed.width}x{framed.height})")
    if framed.width > WEB_WIDTH:
        steps.append(f"resize to {WEB_WIDTH}px wide (Lanczos, {WEB_WIDTH / framed.width:.0%})")
        framed = framed.resize((WEB_WIDTH, round(framed.height * WEB_WIDTH / framed.width)), Image.LANCZOS)
    steps.append(f"sharpen: unsharp mask r{SHARPEN.radius} {SHARPEN.percent}% t{SHARPEN.threshold}")
    steps.append("no colour change (sRGB), all metadata removed")
    final = framed.filter(SHARPEN)
    web = web_dir / f"{name}.jpg"
    final.save(web, quality=QUALITY, optimize=True, progressive=True)  # no exif=/icc_profile= passed -> nothing is written
    assert_clean(web)
    kb, mb = web.stat().st_size / 1024, src.stat().st_size / 1024 / 1024
    print(f"{name}: {srcname} {im.width}x{im.height} ({mb:.1f} MB) -> {final.width}x{final.height} ({kb:.0f} KB)", flush=True)
    return (cell(im, [f"ORIGINAL {name}  {srcname}", f"{im.width}x{im.height} px, {mb:.1f} MB on disk"]),
            cell(final, [f"FINAL {name}", f"{final.width}x{final.height} px, {kb:.0f} KB, JPEG q{QUALITY}",
                         "applied: " + "; ".join(steps)]))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("event")
    a = ap.parse_args()
    rows = []
    for line in (WF / f"{a.event}.manifest.tsv").read_text().splitlines():
        if line.strip() and not line.startswith("#"):
            n, s, cx, cy, z, *_ = line.split("\t")
            rows.append((n, s, float(cx), float(cy), float(z)))
    web_dir = ROOT / "public" / "images" / a.event / "curated"
    shutil.rmtree(web_dir, ignore_errors=True)
    web_dir.mkdir(parents=True)
    pairs = [process(r, a.event, web_dir) for r in rows]
    per_row = PAIRS_PER_ROW
    n_rows = -(-len(pairs) // per_row)
    pitch_w, pitch_h = 2 * CELL_W + 40, BAND_H + CELL_H + 30
    sheet = Image.new("RGB", (per_row * pitch_w, n_rows * pitch_h), (24, 24, 24))
    for i, (o, f) in enumerate(pairs):
        x, y = (i % per_row) * pitch_w, (i // per_row) * pitch_h
        sheet.paste(o, (x, y))
        sheet.paste(f, (x + CELL_W + 8, y))
    out = WF / f"{a.event}-comparison.jpg"
    sheet.save(out, quality=82, optimize=True, progressive=True)
    assert_clean(out)
    print(f"done: {len(rows)} images -> {web_dir}\ncomparison: {out} ({sheet.width}x{sheet.height}, {out.stat().st_size / 1e6:.1f} MB)")


if __name__ == "__main__":
    main()
