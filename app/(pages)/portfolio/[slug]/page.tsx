import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCaseStudy,
  getAllCaseStudySlugs,
} from "@/lib/case-studies";
import { CaseStudyContent } from "@/components/sections/case-study-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  return {
    title: `${caseStudy.title} — Case Study`,
    description: caseStudy.metaDescription,
    alternates: {
      canonical: `https://akwebsolutions.nl/portfolio/${slug}`,
    },
    openGraph: {
      title: `${caseStudy.title} — Case Study | AK Web Solutions`,
      description: caseStudy.metaDescription,
      url: `https://akwebsolutions.nl/portfolio/${slug}`,
      type: "article",
      images: [
        {
          url: caseStudy.screenshot,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} website screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} — Case Study`,
      description: caseStudy.metaDescription,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: caseStudy.description,
    url: `https://akwebsolutions.nl/portfolio/${slug}`,
    image: `https://akwebsolutions.nl${caseStudy.screenshot}`,
    creator: {
      "@type": "Organization",
      name: "AK Web Solutions",
      url: "https://akwebsolutions.nl",
    },
    about: {
      "@type": "WebSite",
      name: caseStudy.title,
      url: `https://${caseStudy.url}`,
    },
    inLanguage: "nl-NL",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://akwebsolutions.nl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: "https://akwebsolutions.nl/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.title,
        item: `https://akwebsolutions.nl/portfolio/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Navigation />
      <main>
        <CaseStudyContent caseStudy={caseStudy} />
      </main>
      <Footer />
    </div>
  );
}
