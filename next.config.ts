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
  // Отключаем экспериментальные функции Turbopack
  experimental: {},
  // Убеждаемся, что webpack используется вместо Turbopack
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;
