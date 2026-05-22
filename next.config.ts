import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/tandoori-nights", destination: "/tandoori-nights/index.html" },
      { source: "/tandoori-nights/", destination: "/tandoori-nights/index.html" },
    ];
  },
};

export default nextConfig;
