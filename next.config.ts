import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // distDir: "out",
  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    }
    return config
  },
  swcMinify: true,
};

export default nextConfig;
