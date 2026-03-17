import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { PortfolioContent } from "@/components/sections/portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio | Websites & Webshops | AK Web Solutions Baarn",
  description:
    "Bekijk recente projecten: websites, webshops en webapplicaties voor MKB-bedrijven. Van AD Loodgietersbedrijf tot Loens Collection.",
  alternates: {
    canonical: "https://akwebsolutions.nl/portfolio",
  },
  openGraph: {
    title: "Portfolio | Websites & Webshops | AK Web Solutions Baarn",
    description:
      "Bekijk recente projecten: websites, webshops en webapplicaties voor MKB-bedrijven. Echte projecten, echte resultaten.",
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
