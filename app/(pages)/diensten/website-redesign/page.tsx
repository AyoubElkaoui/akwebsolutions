import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { WebsiteRedesignContent } from "./content";

export const metadata: Metadata = {
  title: "Website Redesign & Vernieuwen | AK Web Solutions",
  description:
    "Website verouderd? Laat je website redesignen voor betere prestaties, moderne uitstraling en meer conversies. Gratis website-audit inbegrepen.",
  keywords: [
    "website redesign",
    "website vernieuwen",
    "website opnieuw ontwerpen",
    "website moderniseren",
    "website update",
  ],
  openGraph: {
    title: "Website Redesign & Vernieuwen | AK Web Solutions",
    description:
      "Website verouderd? Laat je website redesignen voor betere prestaties, moderne uitstraling en meer conversies. Gratis website-audit inbegrepen.",
    url: "https://akwebsolutions.nl/diensten/website-redesign",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Redesign - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Redesign & Vernieuwen | AK Web Solutions",
    description:
      "Website verouderd? Laat je website redesignen voor betere prestaties, moderne uitstraling en meer conversies.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/website-redesign",
  },
};

export default function WebsiteRedesignPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <WebsiteRedesignContent />
      </main>
      <Footer />
    </div>
  );
}
