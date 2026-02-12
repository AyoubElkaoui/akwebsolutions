import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { DienstenContent } from "@/components/sections/diensten-content";

export const metadata: Metadata = {
  title: "Diensten - Website Laten Maken, SEO & Webshop | AK Web Solutions",
  description:
    "Professionele web development diensten in Baarn: websites laten maken, SEO optimalisatie, webshop ontwikkeling en maatwerk software. Snelle oplevering, persoonlijke aanpak. Vraag een gratis adviesgesprek aan.",
  keywords: [
    "website laten maken",
    "webdesign diensten",
    "SEO optimalisatie",
    "webshop laten maken",
    "maatwerk software",
    "web development Baarn",
    "freelance webdesigner",
    "Next.js developer",
  ],
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten",
  },
  openGraph: {
    title: "Diensten - Website, SEO, Webshop & Software | AK Web Solutions",
    description:
      "Van websites en webshops tot SEO en maatwerk software. Bekijk mijn diensten en ontdek hoe ik jouw bedrijf online laat groeien.",
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
