import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { SeoOptimalisatieContent } from "./content";

export const metadata: Metadata = {
  title: "SEO Optimalisatie | SEO Specialist Baarn | Hoger in Google",
  description:
    "Professionele SEO optimalisatie door een ervaren SEO specialist uit Baarn. Hoger in Google met technische SEO, content optimalisatie en zoekmachine optimalisatie. Meer organisch verkeer en betere rankings voor jouw website.",
  keywords: [
    "SEO optimalisatie",
    "SEO specialist",
    "hoger in Google",
    "zoekmachine optimalisatie",
    "SEO Baarn",
    "technische SEO",
    "local SEO",
    "SEO audit",
    "keyword research",
    "Google rankings verbeteren",
  ],
  openGraph: {
    title: "SEO Optimalisatie | SEO Specialist Baarn | Hoger in Google",
    description:
      "Professionele SEO optimalisatie door een ervaren SEO specialist uit Baarn. Hoger in Google met technische SEO, content optimalisatie en zoekmachine optimalisatie.",
    url: "https://akwebsolutions.nl/diensten/seo-optimalisatie",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Optimalisatie - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Optimalisatie | SEO Specialist Baarn | Hoger in Google",
    description:
      "Hoger in Google met professionele SEO optimalisatie. Technische SEO, content optimalisatie en local SEO door een specialist uit Baarn.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/seo-optimalisatie",
  },
};

export default function SeoOptimalisatiePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <SeoOptimalisatieContent />
      </main>
      <Footer />
    </div>
  );
}
