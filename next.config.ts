import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/website-laten-maken-:stad",
        destination: "/website-laten-maken/:stad",
      },
      {
        source: "/seo-optimalisatie-:stad",
        destination: "/seo-optimalisatie/:stad",
      },
      {
        source: "/webshop-laten-maken-:stad",
        destination: "/webshop-laten-maken/:stad",
      },
      {
        source: "/website-voor-:branche",
        destination: "/website-voor/:branche",
      },
      {
        source: "/webshop-voor-:branche",
        destination: "/webshop-voor/:branche",
      },
    ];
  },
};

export default nextConfig;
