import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
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
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
