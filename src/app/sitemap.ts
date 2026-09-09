import type { MetadataRoute } from 'next';
import { locales, slugs, site } from '@/content';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/work',
    '/services',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    ...slugs.map((s) => `/work/${s}`),
  ];
  return locales.flatMap((l) =>
    paths.map((path) => ({
      url: `${site.url}/${l}${path}`,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((x) => [x, `${site.url}/${x}${path}`])),
          'x-default': `${site.url}/en${path}`,
        },
      },
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : path.startsWith('/work') ? 0.8 : 0.6,
    })),
  );
}
