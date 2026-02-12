import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { LandingspaginaContent } from "./content";

export const metadata: Metadata = {
  title: "Landingspagina Laten Maken | AK Web Solutions",
  description:
    "Converterende landingspagina laten maken? Wij bouwen landingspagina's die bezoekers omzetten in klanten. Data-driven, snel en mobiel-geoptimaliseerd.",
  keywords: [
    "landingspagina laten maken",
    "landing page",
    "landingspagina",
    "conversie pagina",
    "lead generatie pagina",
  ],
  openGraph: {
    title: "Landingspagina Laten Maken | AK Web Solutions",
    description:
      "Converterende landingspagina laten maken? Wij bouwen landingspagina's die bezoekers omzetten in klanten. Data-driven, snel en mobiel-geoptimaliseerd.",
    url: "https://akwebsolutions.nl/diensten/landingspagina-laten-maken",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Landingspagina Laten Maken - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landingspagina Laten Maken | AK Web Solutions",
    description:
      "Converterende landingspagina laten maken? Data-driven, snel en mobiel-geoptimaliseerd.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/landingspagina-laten-maken",
  },
};

export default function LandingspaginaPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <LandingspaginaContent />
      </main>
      <Footer />
    </div>
  );
}
