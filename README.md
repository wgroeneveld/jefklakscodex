see [jefklakscodex.com](https://jefklakscodex.com)


## Converting/ripping

### Jpegs

> find . -name "*.jpg" -exec convert {} -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB {} \;

### Twitter videos

- Use `youtube-dl --no-check-certificate [m3u8link]`. Requires `ffmpeg` to be installed. 
- Cut/convert with https://ezgif.com/video-to-mp4/ instead of ffmpeg - faster!