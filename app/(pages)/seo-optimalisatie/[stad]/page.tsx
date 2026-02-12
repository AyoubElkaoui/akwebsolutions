import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getLocation } from "@/lib/locations";
import {
  getServiceLocationData,
  getAllServiceLocationParams,
} from "@/lib/service-locations";
import { SeoLocationContent } from "./content";

interface PageProps {
  params: Promise<{ stad: string }>;
}

export function generateStaticParams() {
  return getAllServiceLocationParams("seo-optimalisatie");
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { stad } = await params;
  const data = getServiceLocationData("seo-optimalisatie", stad);
  if (!data) return {};

  const { location } = data;

  return {
    title: `SEO Optimalisatie in ${location.stad} | AK Web Solutions`,
    description: `Professionele SEO optimalisatie in ${location.stad}? AK Web Solutions helpt bedrijven in ${location.stad} hoger scoren in Google met technische SEO, lokale optimalisatie en content strategie. Vraag een gratis SEO-audit aan.`,
    keywords: [
      `seo optimalisatie ${location.stad.toLowerCase()}`,
      `seo specialist ${location.stad.toLowerCase()}`,
      `zoekmachineoptimalisatie ${location.stad.toLowerCase()}`,
      `lokale seo ${location.stad.toLowerCase()}`,
      `google optimalisatie ${location.stad.toLowerCase()}`,
      "seo optimalisatie",
      "zoekmachineoptimalisatie",
    ],
    alternates: {
      canonical: `https://akwebsolutions.nl/seo-optimalisatie-${location.slug}`,
    },
    openGraph: {
      title: `SEO Optimalisatie in ${location.stad} | AK Web Solutions`,
      description: `Professionele SEO optimalisatie in ${location.stad}? Hoger scoren in Google voor bedrijven in ${location.stad}.`,
      url: `https://akwebsolutions.nl/seo-optimalisatie-${location.slug}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `SEO Optimalisatie in ${location.stad}`,
      description: `Professionele SEO voor bedrijven in ${location.stad} en omgeving.`,
    },
  };
}

export default async function SeoLocationPage({ params }: PageProps) {
  const { stad } = await params;
  const data = getServiceLocationData("seo-optimalisatie", stad);

  if (!data) notFound();

  const { service, location, content } = data;

  // Filter nearby locations to only those available for this service
  const nearbyLocations = location.nabij
    .map((name) => locations.find((l) => l.stad === name))
    .filter(Boolean)
    .filter((loc) => service.locationSlugs.includes(loc!.slug)) as typeof locations;

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AK Web Solutions",
    description: `Professionele SEO optimalisatie in ${location.stad}. Hoger scoren in Google met technische SEO, lokale optimalisatie en content strategie voor bedrijven in ${location.stad}, ${location.regio}.`,
    url: `https://akwebsolutions.nl/seo-optimalisatie-${location.slug}`,
    telephone: "+31685722387",
    email: "info@akwebsolutions.nl",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Baarn",
      addressRegion: "Utrecht",
      addressCountry: "NL",
    },
    areaServed: {
      "@type": "City",
      name: location.stad,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.regio,
      },
    },
    priceRange: "$$",
    knowsAbout: [
      "SEO Optimalisatie",
      "Zoekmachineoptimalisatie",
      "Lokale SEO",
      "Technische SEO",
      "Content Optimalisatie",
      "Linkbuilding",
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
        name: "SEO Optimalisatie",
        item: "https://akwebsolutions.nl/diensten",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `SEO in ${location.stad}`,
        item: `https://akwebsolutions.nl/seo-optimalisatie-${location.slug}`,
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
        <SeoLocationContent
          service={service}
          location={location}
          content={content}
          otherCities={nearbyLocations}
        />
      </main>
      <Footer />
    </div>
  );
}
