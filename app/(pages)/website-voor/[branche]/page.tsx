import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  websiteIndustries,
  getWebsiteIndustry,
  getAllWebsiteIndustrySlugs,
} from "@/lib/industries";
import { IndustryContent } from "./content";

interface PageProps {
  params: Promise<{ branche: string }>;
}

export function generateStaticParams() {
  return getAllWebsiteIndustrySlugs().map((branche) => ({ branche }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { branche } = await params;
  const industry = getWebsiteIndustry(branche);
  if (!industry) return {};

  const truncatedDescription =
    industry.beschrijving.length > 155
      ? industry.beschrijving.slice(0, 155).trimEnd() + "..."
      : industry.beschrijving;

  return {
    title: `Website voor de ${industry.naam} | AK Web Solutions`,
    description: truncatedDescription,
    keywords: [
      ...industry.seoKeywords,
      "website laten maken",
      "professionele website",
    ],
    alternates: {
      canonical: `https://akwebsolutions.nl/website-voor-${industry.slug}`,
    },
    openGraph: {
      title: `Website voor de ${industry.naam} | AK Web Solutions`,
      description: truncatedDescription,
      url: `https://akwebsolutions.nl/website-voor-${industry.slug}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Website voor de ${industry.naam}`,
      description: truncatedDescription,
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { branche } = await params;
  const industry = getWebsiteIndustry(branche);

  if (!industry) notFound();

  const relatedIndustries = industry.gerelateerdeIndustries
    .map((slug) => websiteIndustries.find((i) => i.slug === slug))
    .filter(Boolean) as typeof websiteIndustries;

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AK Web Solutions",
    description: `Professionele website laten maken voor de ${industry.naam}. Snelle, SEO-geoptimaliseerde websites op maat voor de ${industry.naam.toLowerCase()}.`,
    url: `https://akwebsolutions.nl/website-voor-${industry.slug}`,
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
      industry.naam,
      "Web Development",
      "SEO Optimalisatie",
      "Webdesign",
      `Websites voor de ${industry.naam.toLowerCase()}`,
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
        name: `Website voor ${industry.naam}`,
        item: `https://akwebsolutions.nl/website-voor-${industry.slug}`,
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
        <IndustryContent
          industry={industry}
          relatedIndustries={relatedIndustries}
        />
      </main>
      <Footer />
    </div>
  );
}
