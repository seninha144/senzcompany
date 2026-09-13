# VANTA media

- `vanta_video_senz.mp4`: supplied recording, 1920×1080, 52.47 seconds, approximately 79 MB; H.264 Main profile, level 4.1. MP4 metadata was moved before the media payload for progressive loading, with chunk offsets adjusted. Media payload is unchanged; the original is retained in `images/vanta_video_senz.mp4`.
- `preview-poster.webp`: actual frame at two seconds from the supplied recording.
- The shared player defers the video source until visible, requests metadata initially, and pauses when offscreen or when the document is hidden. Playback is muted, looping and inline, with a separate accessible pause/play button. Reduced motion shows the poster until explicit playback. Failed decoding retains the poster.
- The preview reserves its native 16:9 ratio and uses `object-fit: contain` at all sizes.

Chromium playback is tested with the actual recording. Windows Playwright WebKit reports unsupported media for both this MP4 and the existing LUZEN MP4; its tests cover inline attributes, poster fallback and responsive layout. Actual Safari/iPhone playback needs verification on Apple hardware.
