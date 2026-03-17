import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { DienstenContent } from "@/components/sections/diensten-content";

export const metadata: Metadata = {
  title: "Diensten | Website, Webshop, SEO & Maatwerk | AK Web Solutions",
  description:
    "Website laten maken, webshop bouwen, SEO optimalisatie en maatwerk software. Freelance webdeveloper in Baarn voor MKB-bedrijven in de regio.",
  keywords: [
    "website laten maken",
    "webdesign diensten",
    "SEO optimalisatie",
    "webshop laten maken",
    "maatwerk software",
    "web development Baarn",
    "freelance webdesigner",
    "Next.js developer",
    "webdeveloper Baarn",
  ],
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten",
  },
  openGraph: {
    title: "Diensten | Website, Webshop, SEO & Maatwerk | AK Web Solutions",
    description:
      "Website laten maken, webshop bouwen, SEO optimalisatie en maatwerk software. Freelance webdeveloper in Baarn voor MKB-bedrijven.",
    url: "https://akwebsolutions.nl/diensten",
  },
};

export default function DienstenPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <DienstenContent />
      </main>
      <Footer />
    </div>
  );
}
