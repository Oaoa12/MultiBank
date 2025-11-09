import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - devIndicators может быть boolean в некоторых версиях
  devIndicators: false,
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://176.114.89.172:3000';
    
    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/:path*`,
      },
      {
        source: "/bank/:path*",
        destination: `${apiUrl}/bank/:path*`,
      },
      {
        source: "/transactions/:path*",
        destination: `${apiUrl}/transactions/:path*`,
      },
      {
        source: "/minio/:path*",
        destination: `${apiUrl}/minio/:path*`,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

export default nextConfig;
