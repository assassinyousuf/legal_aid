import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/legal_aid",
  assetPrefix: "/legal_aid",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
