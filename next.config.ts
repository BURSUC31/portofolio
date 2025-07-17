import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: undefined,
  assetPrefix: isProd ? 'https://tomuleseidimitrie.dev' : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tomuleseidimitrie.dev',
        port: '',
        pathname: '/photo*.jpg',
      },
      {
        protocol: 'https',
        hostname: 'tomuleseidimitrie.dev',
        port: '',
        pathname: '/profile.png',
      },
      {
        protocol: 'https',
        hostname: 'tomuleseidimitrie.dev',
        port: '',
        pathname: '/_next/**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
