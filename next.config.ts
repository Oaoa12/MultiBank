import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*",
      },
      {
        source: "/bank/:path*",
        destination: "http://localhost:3000/bank/:path*",
      },
    ];
  },
};

export default nextConfig;
