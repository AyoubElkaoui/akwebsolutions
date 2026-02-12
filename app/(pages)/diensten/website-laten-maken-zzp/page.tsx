import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { WebsiteZzpContent } from "./content";

export const metadata: Metadata = {
  title: "Website Laten Maken voor ZZP'ers | AK Web Solutions",
  description:
    "Professionele website voor ZZP'ers en freelancers. Betaalbaar, snel geleverd en volledig op maat. Laat je online zichtbaarheid groeien.",
  keywords: [
    "website zzp",
    "website freelancer",
    "website zzp laten maken",
    "website zelfstandig ondernemer",
    "goedkope website zzp",
  ],
  openGraph: {
    title: "Website Laten Maken voor ZZP'ers | AK Web Solutions",
    description:
      "Professionele website voor ZZP'ers en freelancers. Betaalbaar, snel geleverd en volledig op maat. Laat je online zichtbaarheid groeien.",
    url: "https://akwebsolutions.nl/diensten/website-laten-maken-zzp",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Laten Maken voor ZZP'ers - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken voor ZZP'ers | AK Web Solutions",
    description:
      "Professionele website voor ZZP'ers en freelancers. Betaalbaar, snel geleverd en volledig op maat.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/website-laten-maken-zzp",
  },
};

export default function WebsiteZzpPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <WebsiteZzpContent />
      </main>
      <Footer />
    </div>
  );
}
