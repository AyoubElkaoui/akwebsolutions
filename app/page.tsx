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
  title: "AK Web Solutions - Professionele Websites & Web Development | Baarn",
  description:
    "Professionele websites, webshops en maatwerk software door freelance web developer in Baarn. Snelle, SEO-geoptimaliseerde websites met Next.js en React. Van strategie tot live website in 2-4 weken.",
  keywords: [
    "website laten maken",
    "web development",
    "webdesign Baarn",
    "professionele website",
    "SEO optimalisatie",
    "webshop laten maken",
    "Next.js developer",
    "freelance webdeveloper",
    "maatwerk software",
  ],
  alternates: {
    canonical: "https://akwebsolutions.nl",
  },
  openGraph: {
    title: "AK Web Solutions - Professionele Websites & Web Development",
    description:
      "Snelle, SEO-geoptimaliseerde websites en custom web development. Van strategie tot live website in 2-4 weken. Gevestigd in Baarn.",
    url: "https://akwebsolutions.nl",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AK Web Solutions - Professionele Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AK Web Solutions - Professionele Websites & Web Development",
    description:
      "Snelle, SEO-geoptimaliseerde websites en custom web development. Van strategie tot live website in 2-4 weken.",
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
