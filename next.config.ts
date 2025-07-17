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
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: isProd ? '/**' : '/**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
