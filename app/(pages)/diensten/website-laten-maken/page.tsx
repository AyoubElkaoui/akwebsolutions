import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { WebsiteLatenMakenContent } from "./content";

export const metadata: Metadata = {
  title: "Website Laten Maken | Professionele Websites vanaf Baarn",
  description:
    "Wil je een professionele website laten maken? Als freelance webdesigner uit Baarn bouw ik snelle, SEO-geoptimaliseerde websites met Next.js. Website laten bouwen? Vraag een vrijblijvende offerte aan voor professionele webdesign op maat.",
  keywords: [
    "website laten maken",
    "website laten bouwen",
    "professionele website",
    "webdesign",
    "webdesign Baarn",
    "website ontwikkeling",
    "Next.js website",
    "website op maat",
    "freelance webdesigner",
    "website kosten",
  ],
  openGraph: {
    title: "Website Laten Maken | Professionele Websites vanaf Baarn",
    description:
      "Wil je een professionele website laten maken? Als freelance webdesigner uit Baarn bouw ik snelle, SEO-geoptimaliseerde websites met Next.js. Vraag een vrijblijvende offerte aan.",
    url: "https://akwebsolutions.nl/diensten/website-laten-maken",
    type: "website",
    locale: "nl_NL",
    siteName: "AK Web Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Laten Maken - AK Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken | Professionele Websites vanaf Baarn",
    description:
      "Wil je een professionele website laten maken? Snelle, SEO-geoptimaliseerde websites met Next.js door een freelance webdesigner uit Baarn.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://akwebsolutions.nl/diensten/website-laten-maken",
  },
};

export default function WebsiteLatenMakenPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <WebsiteLatenMakenContent />
      </main>
      <Footer />
    </div>
  );
}
