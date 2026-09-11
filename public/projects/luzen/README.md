# LUZEN media

Add only real LUZEN project assets in this directory:

The user-requested generated editorial cover is `cover-editorial.png`, based on the supplied LUZEN logo. It takes precedence over the original cover and fills the visual area with a centered responsive crop. Generation prompt and provenance are documented in `/LUZEN.md` in the repository.

- `cover.webp`: portfolio cover and social sharing image. Recommended 1600 × 1000 or larger.
- `cover.png`: also supported; the supplied `images/image_projects/luzen_project.png` is connected here. WebP takes precedence if both exist.
- `hero.webp`: case-study hero; falls back to cover if absent.
- `detail.webp`: large editorial/product detail capture.
- `mobile.webp`: portrait mobile capture, ideally 9:19.
- `preview.mp4`: short, compressed H.264 website recording, without an audio track.
- `preview-poster.webp`: still image matching the video, ideally 16:10.

All files are optional. With no cover or hero, a typographic LUZEN placeholder appears. The video is rendered only when both preview.mp4 and preview-poster.webp exist. Missing detail/mobile images omit their media blocks. Restart development or rebuild production after adding assets; discovery runs on the server at build time. No external media is fetched.

The loop starts only while visible and when reduced motion is off. It pauses offscreen or in a hidden tab. Reduced motion displays the poster until explicit playback. A minimal pause/play button supplies keyboard-accessible motion control; native timeline, volume and fullscreen controls are absent.

The project copy is in `src/content/luzen.ts` for all five languages. Add confirmed technology or interaction sections to the localized `project.sections` arrays once implementation evidence is available. No stack, checkout implementation or animation claims are assumed.

The supplied `images/video_luzen.mp4` is now connected as `preview.mp4`. Its static poster was extracted from the recording at 2 seconds. The source recording remains unchanged in `images/`.
