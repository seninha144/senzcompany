import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Optional local assets are discovered at build time. Rebuild after adding files.
function asset(name: string) {
  const src = `/projects/luzen/${name}`;
  return existsSync(join(process.cwd(), 'public', src)) ? src : undefined;
}
export const luzenMedia = {
  cover: asset('cover-editorial.png') || asset('cover.webp') || asset('cover.png'),
  hero: asset('hero.webp'),
  detail: asset('detail.webp'),
  mobile: asset('mobile.webp'),
  video: asset('preview.mp4'),
  poster: asset('preview-poster.webp'),
};
