import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: 'https://storage.googleapis.com/dimitrie-portfolio-website-eu',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/dimitrie-portfolio-website-eu/photos/**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
