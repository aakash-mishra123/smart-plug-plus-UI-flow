import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
  }
};

export default nextConfig;
