import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  locations,
  getLocation,
  getAllLocationSlugs,
} from "@/lib/locations";
import { LocationContent } from "./content";

interface PageProps {
  params: Promise<{ stad: string }>;
}

export function generateStaticParams() {
  return getAllLocationSlugs().map((stad) => ({ stad }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { stad } = await params;
  const location = getLocation(stad);
  if (!location) return {};

  return {
    title: `Website Laten Maken in ${location.stad} | AK Web Solutions`,
    description: `Professionele website laten maken in ${location.stad}? AK Web Solutions bouwt snelle, SEO-geoptimaliseerde websites voor bedrijven in ${location.stad} en omgeving. Vraag een gratis adviesgesprek aan.`,
    keywords: [
      `website laten maken ${location.stad.toLowerCase()}`,
      `webdesign ${location.stad.toLowerCase()}`,
      `webdeveloper ${location.stad.toLowerCase()}`,
      `website ${location.stad.toLowerCase()}`,
      `SEO ${location.stad.toLowerCase()}`,
      "website laten maken",
      "professionele website",
    ],
    alternates: {
      canonical: `https://akwebsolutions.nl/website-laten-maken-${location.slug}`,
    },
    openGraph: {
      title: `Website Laten Maken in ${location.stad} | AK Web Solutions`,
      description: `Professionele website laten maken in ${location.stad}? Snelle, moderne websites voor bedrijven in ${location.stad}.`,
      url: `https://akwebsolutions.nl/website-laten-maken-${location.slug}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Website Laten Maken in ${location.stad}`,
      description: `Professionele websites voor bedrijven in ${location.stad} en omgeving.`,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { stad } = await params;
  const location = getLocation(stad);

  if (!location) notFound();

  const nearbyLocations = location.nabij
    .map((name) => locations.find((l) => l.stad === name))
    .filter(Boolean);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AK Web Solutions",
    description: `Professionele website laten maken in ${location.stad}. Snelle, SEO-geoptimaliseerde websites en webshops voor bedrijven in ${location.stad}, ${location.regio}.`,
    url: `https://akwebsolutions.nl/website-laten-maken-${location.slug}`,
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
      "Web Development",
      "SEO Optimalisatie",
      "E-commerce",
      "Webdesign",
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
        name: `Website Laten Maken ${location.stad}`,
        item: `https://akwebsolutions.nl/website-laten-maken-${location.slug}`,
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
        <LocationContent
          location={location}
          nearbyLocations={nearbyLocations as typeof locations}
        />
      </main>
      <Footer />
    </div>
  );
}
