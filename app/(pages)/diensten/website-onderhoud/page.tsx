import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { WebsiteOnderhoudContent } from "./content";

export const metadata: Metadata = {
  title: "Website Onderhoud & Beheer | AK Web Solutions",
  description:
    "Professioneel website onderhoud en beheer. Maandelijkse updates, monitoring, backups en technische support. Jouw website altijd up-to-date en veilig.",
  keywords: [
    "website onderhoud",
    "website beheer",
    "website support",
    "website updates",
    "website monitoring",
  ],
  openGraph: {
    title: "Website Onderhoud & Beheer | AK Web Solutions",
    description:
      "Professioneel website onderhoud en beheer. Maandelijkse updates, monitoring, backups en technische support. Jouw website altijd up-to-date en veilig.",
    url: "https://akwebsolutions.nl/diensten/website-onderhoud",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Onderhoud & Beheer - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Onderhoud & Beheer | AK Web Solutions",
    description:
      "Professioneel website onderhoud en beheer. Maandelijkse updates, monitoring, backups en technische support.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/website-onderhoud",
  },
};

export default function WebsiteOnderhoudPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <WebsiteOnderhoudContent />
      </main>
      <Footer />
    </div>
  );
}
