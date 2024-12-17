import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com'],
  },
  output: "export",

};

export default nextConfig;