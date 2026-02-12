import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getWebshopIndustry,
  getAllWebshopIndustrySlugs,
  webshopIndustries,
  websiteIndustries,
} from "@/lib/industries";
import { WebshopIndustryContent } from "./content";

interface PageProps {
  params: Promise<{ branche: string }>;
}

export function generateStaticParams() {
  return getAllWebshopIndustrySlugs().map((branche) => ({ branche }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { branche } = await params;
  const industry = getWebshopIndustry(branche);
  if (!industry) return {};

  const truncatedDescription =
    industry.beschrijving.length > 160
      ? industry.beschrijving.slice(0, 157) + "..."
      : industry.beschrijving;

  return {
    title: `${industry.heroTitel} | AK Web Solutions`,
    description: truncatedDescription,
    keywords: industry.seoKeywords,
    alternates: {
      canonical: `https://akwebsolutions.nl/webshop-voor-${industry.slug}`,
    },
    openGraph: {
      title: `${industry.heroTitel} | AK Web Solutions`,
      description: truncatedDescription,
      url: `https://akwebsolutions.nl/webshop-voor-${industry.slug}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.heroTitel,
      description: truncatedDescription,
    },
  };
}

export default async function WebshopIndustryPage({ params }: PageProps) {
  const { branche } = await params;
  const industry = getWebshopIndustry(branche);

  if (!industry) notFound();

  // Look up related industries in BOTH websiteIndustries and webshopIndustries
  const allIndustries = [...websiteIndustries, ...webshopIndustries];
  const relatedIndustries = industry.gerelateerdeIndustries
    .map((slug) => allIndustries.find((i) => i.slug === slug))
    .filter(Boolean) as typeof allIndustries;

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AK Web Solutions",
    description: `${industry.heroTitel}. ${industry.heroSubtitel}. Professionele webshop ontwikkeling voor de ${industry.naam} branche.`,
    url: `https://akwebsolutions.nl/webshop-voor-${industry.slug}`,
    telephone: "+31685722387",
    email: "info@akwebsolutions.nl",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Baarn",
      addressRegion: "Utrecht",
      addressCountry: "NL",
    },
    priceRange: "€€",
    knowsAbout: [
      "E-commerce",
      industry.naam,
      "Webshop Ontwikkeling",
      "Web Development",
      "SEO Optimalisatie",
    ],
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
        name: "Diensten",
        item: "https://akwebsolutions.nl/diensten",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Webshop voor ${industry.naam}`,
        item: `https://akwebsolutions.nl/webshop-voor-${industry.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
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
        <WebshopIndustryContent
          industry={industry}
          relatedIndustries={relatedIndustries}
        />
      </main>
      <Footer />
    </div>
  );
}
