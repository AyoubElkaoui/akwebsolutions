import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { PortfolioContent } from "@/components/sections/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio - Websites, Webshops & Apps die ik heb Gebouwd",
  description:
    "Bekijk mijn portfolio: websites voor AD Loodgietersbedrijf en MKH Bouw, Shopify webshop voor Loens Collection, WordPress site voor Pro Banden Service en maatwerk software Clockd. Echte projecten, echte resultaten.",
  alternates: {
    canonical: "https://akwebsolutions.nl/portfolio",
  },
  openGraph: {
    title: "Portfolio - Websites, Webshops & Apps | AK Web Solutions",
    description:
      "Van Next.js bedrijfswebsites tot Shopify webshops en maatwerk software. Bekijk de projecten die ik heb opgeleverd.",
    url: "https://akwebsolutions.nl/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <PortfolioContent />
      </main>
      <Footer />
    </div>
  );
}
