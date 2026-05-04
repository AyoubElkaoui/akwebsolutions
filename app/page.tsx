import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { InfiniteMarquee } from "@/components/sections/infinite-marquee";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { PortfolioBento } from "@/components/sections/portfolio-bento";
import { CTASection } from "@/components/sections/cta-section";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Reviews } from "@/components/sections/reviews";
import { getAllPosts } from "@/lib/blog";
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
  const latestPosts = getAllPosts()
    .slice(0, 3)
    .map((p) => ({
      slug: p.slug,
      title: p.frontmatter.title,
      description: p.frontmatter.description,
      date: p.frontmatter.date,
      category: p.frontmatter.category,
      image: p.frontmatter.image,
      readingTime: p.readingTime,
    }));

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero />
        <InfiniteMarquee />
        <ProblemSolution />
        <ServicesShowcase />
        <PortfolioBento />
        <Reviews />
        <BlogPreview posts={latestPosts} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
