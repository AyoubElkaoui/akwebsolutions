import type { Metadata } from "next";
import { PrijzenContent } from "./content";

export const metadata: Metadata = {
  title: "Prijzen Website Laten Maken | Transparante Tarieven | AK Web Solutions",
  description:
    "Transparante prijzen voor professionele websites. Starter vanaf €1.499, Groei vanaf €2.999. Maatwerk websites voor MKB. Geen verborgen kosten. Gratis offerte.",
  keywords: [
    "prijzen website laten maken",
    "kosten website",
    "website tarieven",
    "webdesign prijzen",
    "website pakket",
    "professionele website kosten",
    "Next.js website prijs",
    "freelance webdesigner tarief",
    "website offerte",
    "webshop kosten",
  ],
  alternates: {
    canonical: "https://akwebsolutions.nl/prijzen",
  },
  openGraph: {
    title: "Prijzen Website Laten Maken | AK Web Solutions",
    description:
      "Transparante website tarieven. Starter €1.499, Groei €2.999, Maatwerk op maat. Geen verborgen kosten, gratis adviesgesprek.",
    url: "https://akwebsolutions.nl/prijzen",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK Web Solutions Prijzen",
      },
    ],
  },
};

export default function PrijzenPage() {
  return <PrijzenContent />;
}
