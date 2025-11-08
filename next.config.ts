import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://vtb-hack-ruby.vercel.app/:path*",
      },
      {
        source: "/bank/:path*",
        destination: "https://vtb-hack-ruby.vercel.app/bank/:path*",
      },
    ];
  },
};

export default nextConfig;
