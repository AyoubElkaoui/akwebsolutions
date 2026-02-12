import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { WebsiteMkbContent } from "./content";

export const metadata: Metadata = {
  title: "Website Laten Maken voor het MKB | AK Web Solutions",
  description:
    "Professionele website voor het MKB. Schaalbaar, SEO-geoptimaliseerd en gebouwd om te groeien. Van startend bedrijf tot gevestigd MKB.",
  keywords: [
    "website mkb",
    "website klein bedrijf",
    "website mkb laten maken",
    "zakelijke website",
    "bedrijfswebsite",
  ],
  openGraph: {
    title: "Website Laten Maken voor het MKB | AK Web Solutions",
    description:
      "Professionele website voor het MKB. Schaalbaar, SEO-geoptimaliseerd en gebouwd om te groeien. Van startend bedrijf tot gevestigd MKB.",
    url: "https://akwebsolutions.nl/diensten/website-laten-maken-mkb",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Laten Maken voor het MKB - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken voor het MKB | AK Web Solutions",
    description:
      "Professionele website voor het MKB. Schaalbaar, SEO-geoptimaliseerd en gebouwd om te groeien.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/website-laten-maken-mkb",
  },
};

export default function WebsiteMkbPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <WebsiteMkbContent />
      </main>
      <Footer />
    </div>
  );
}
