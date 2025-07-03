import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/dimitrie-portfolio-website-eu' : undefined,
  assetPrefix: isProd ? 'https://storage.googleapis.com/dimitrie-portfolio-website-eu' : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: isProd ? '/dimitrie-portfolio-website-eu/**' : '/public',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
