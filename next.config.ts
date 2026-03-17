import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: false,
  async redirects() {
    return [
      // www → non-www (alle paden)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.akwebsolutions.nl" }],
        destination: "https://akwebsolutions.nl/:path*",
        permanent: true,
      },
      // Oude pagina-structuur redirects
      {
        source: "/categorie/conversie-optimalisatie",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/categorie/online-marketing",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/online-marketing",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blog/de-toekomst-van-websites-trends-die-jouw-online-aanwezigheid-veranderen",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blog/hoe-jouw-bedrijf-kan-groeien-met-een-online-aanwezigheid",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blog/5-essentiele-tips-voor-een-succesvolle-online-onderneming",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blog/de-sleutel-tot-succesvolle-websites-strategie-design-en-technologie",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/blog/waarom-jouw-website-de-sleutel-is-tot-bedrijfsgroei-in-2025",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/privacy-beleid",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/algemene-voorwaarden",
        destination: "/voorwaarden",
        permanent: true,
      },
      { source: "/terms", destination: "/voorwaarden", permanent: true },
      // Trailing slashes en oude paden
      { source: "/over/", destination: "/over-ons", permanent: true },
      { source: "/over", destination: "/over-ons", permanent: true },
      { source: "/cases/:path*", destination: "/portfolio", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      {
        source: "/blog/scripts/animations",
        destination: "/blog",
        permanent: true,
      },
      { source: "/scripts/animations", destination: "/", permanent: true },
      {
        source: "/blog/category/online-marketing",
        destination: "/blog",
        permanent: true,
      },
      // Oude diensten-locatie URLs (als die bestonden met /diensten/ prefix)
      {
        source: "/diensten/webshop-laten-maken-baarn",
        destination: "/webshop-laten-maken-baarn",
        permanent: true,
      },
      {
        source: "/diensten/website-laten-maken-baarn",
        destination: "/website-laten-maken-baarn",
        permanent: true,
      },
      {
        source: "/website-laten-maken-spakenburg",
        destination: "/website-laten-maken-bunschoten-spakenburg",
        permanent: true,
      },
    ];
  },
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
