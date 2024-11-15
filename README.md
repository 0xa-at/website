Website for 0xA developed in React with Next.js

# Image Compression

Note: When adding new images, make sure to resize/compress them before committing them to the repo. Otherwise the website will be slow to load.

```
# Resize the images to a maximum width of 1000px
mogrify -strip -resize 1000x *.jpg

# Compress the images
jpegoptim --size=250k --strip-all *.jpg
```
