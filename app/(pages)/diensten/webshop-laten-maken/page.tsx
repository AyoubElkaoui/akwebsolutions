import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { WebshopLatenMakenContent } from "./content";

export const metadata: Metadata = {
  title: "Webshop Laten Maken | E-commerce & Shopify Expert Baarn",
  description:
    "Professionele webshop laten maken? Als Shopify expert uit Baarn bouw ik webshops die converteren. Van iDEAL en Klarna integratie tot checkout optimalisatie. Online verkopen was nog nooit zo makkelijk.",
  keywords: [
    "webshop laten maken",
    "Shopify webshop",
    "e-commerce",
    "online verkopen",
    "webshop bouwen",
    "Shopify expert",
    "WooCommerce",
    "webwinkel laten maken",
    "iDEAL integratie",
    "webshop Baarn",
  ],
  openGraph: {
    title: "Webshop Laten Maken | E-commerce & Shopify Expert Baarn",
    description:
      "Professionele webshop laten maken? Als Shopify expert uit Baarn bouw ik webshops die converteren. Van iDEAL en Klarna integratie tot checkout optimalisatie.",
    url: "https://akwebsolutions.nl/diensten/webshop-laten-maken",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webshop Laten Maken - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webshop Laten Maken | E-commerce & Shopify Expert Baarn",
    description:
      "Professionele webshop laten maken? Webshops die converteren met iDEAL, Klarna en checkout optimalisatie.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/webshop-laten-maken",
  },
};

export default function WebshopLatenMakenPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <WebshopLatenMakenContent />
      </main>
      <Footer />
    </div>
  );
}
