import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { InfiniteMarquee } from "@/components/sections/infinite-marquee";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { PortfolioBento } from "@/components/sections/portfolio-bento";
import { CTASection } from "@/components/sections/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Website Laten Maken Baarn | Webdesign & SEO | AK Web Solutions",
  description:
    "Professionele websites en webshops laten maken in Baarn. Freelance webdesigner voor MKB. Snelle Next.js websites, SEO en online marketing. Gratis adviesgesprek.",
  keywords: [
    "website laten maken",
    "website laten maken baarn",
    "webdesign baarn",
    "webdesigner baarn",
    "professionele website",
    "SEO optimalisatie",
    "webshop laten maken",
    "Next.js developer",
    "freelance webdeveloper",
    "maatwerk software",
    "web development",
  ],
  alternates: {
    canonical: "https://akwebsolutions.nl",
  },
  openGraph: {
    title: "Website Laten Maken Baarn | Webdesign & SEO | AK Web Solutions",
    description:
      "Professionele websites en webshops laten maken in Baarn. Freelance webdesigner voor MKB. Snelle Next.js websites, SEO en online marketing.",
    url: "https://akwebsolutions.nl",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK Web Solutions - Website Laten Maken Baarn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken Baarn | Webdesign & SEO | AK Web Solutions",
    description:
      "Professionele websites en webshops laten maken in Baarn. Freelance webdesigner voor MKB. Snelle Next.js websites, SEO en online marketing.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <InfiniteMarquee />
        <ProblemSolution />
        <ServicesShowcase />
        <PortfolioBento />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
