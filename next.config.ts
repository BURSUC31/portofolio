import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
