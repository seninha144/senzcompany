import { existsSync } from 'node:fs';
import { join } from 'node:path';

const cover = '/projects/afterhours/afterhours-cover.webp';
export const afterhoursMedia = {
  cover: existsSync(join(process.cwd(), 'public', cover)) ? cover : undefined,
  video: '/projects/afterhours/afterhours-preview.mp4',
};
