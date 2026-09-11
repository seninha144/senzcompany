import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/', destination: '/en', permanent: true },
      {
        source: '/:locale(en|pt|fr|it|de)/work/resisol',
        destination: '/:locale/work/luzen',
        permanent: true,
      },
      { source: '/work/resisol', destination: '/en/work/luzen', permanent: true },
      { source: '/work/luzen', destination: '/en/work/luzen', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};
export default config;
