import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getLocation } from "@/lib/locations";
import {
  getServiceLocationData,
  getAllServiceLocationParams,
} from "@/lib/service-locations";
import { WebshopLocationContent } from "./content";

interface PageProps {
  params: Promise<{ stad: string }>;
}

export function generateStaticParams() {
  return getAllServiceLocationParams("webshop-laten-maken");
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { stad } = await params;
  const data = getServiceLocationData("webshop-laten-maken", stad);
  if (!data) return {};

  const { location } = data;

  return {
    title: `Webshop Laten Maken in ${location.stad} | AK Web Solutions`,
    description: `Professionele webshop laten maken in ${location.stad}? AK Web Solutions bouwt snelle, converterende webshops voor ondernemers in ${location.stad} en omgeving. Vraag een gratis adviesgesprek aan.`,
    keywords: [
      `webshop laten maken ${location.stad.toLowerCase()}`,
      `webshop ${location.stad.toLowerCase()}`,
      `e-commerce ${location.stad.toLowerCase()}`,
      `online winkel ${location.stad.toLowerCase()}`,
      `webshop bouwen ${location.stad.toLowerCase()}`,
      "webshop laten maken",
      "professionele webshop",
      "e-commerce",
    ],
    alternates: {
      canonical: `https://akwebsolutions.nl/webshop-laten-maken-${location.slug}`,
    },
    openGraph: {
      title: `Webshop Laten Maken in ${location.stad} | AK Web Solutions`,
      description: `Professionele webshop laten maken in ${location.stad}? Converterende webshops voor ondernemers in ${location.stad}.`,
      url: `https://akwebsolutions.nl/webshop-laten-maken-${location.slug}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Webshop Laten Maken in ${location.stad}`,
      description: `Professionele webshops voor ondernemers in ${location.stad} en omgeving.`,
    },
  };
}

export default async function WebshopLocationPage({ params }: PageProps) {
  const { stad } = await params;
  const data = getServiceLocationData("webshop-laten-maken", stad);

  if (!data) notFound();

  const { service, location, content } = data;

  const otherCities = service.locationSlugs
    .filter((slug) => slug !== stad)
    .map((slug) => getLocation(slug))
    .filter(Boolean) as typeof locations;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AK Web Solutions",
    description: `Professionele webshop laten maken in ${location.stad}. Converterende webshops met veilig betalen, voorraadbeheer en SEO-optimalisatie voor ondernemers in ${location.stad}, ${location.regio}.`,
    url: `https://akwebsolutions.nl/webshop-laten-maken-${location.slug}`,
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
    priceRange: "€€",
    knowsAbout: [
      "E-commerce",
      "Webshop Ontwikkeling",
      "Online Verkoop",
      "Betaalsystemen",
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
        name: "Webshop Laten Maken",
        item: "https://akwebsolutions.nl/diensten",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `Webshop in ${location.stad}`,
        item: `https://akwebsolutions.nl/webshop-laten-maken-${location.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
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
        <WebshopLocationContent
          service={service}
          location={location}
          content={content}
          otherCities={otherCities}
        />
      </main>
      <Footer />
    </div>
  );
}
