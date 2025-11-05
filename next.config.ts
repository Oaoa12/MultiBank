import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://vtb-hack-ruby.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
