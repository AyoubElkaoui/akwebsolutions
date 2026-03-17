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

  const stadLower = location.stad.toLowerCase();
  return {
    title: `Website Laten Maken ${location.stad} | Webdesigner ${location.regio === "Noord-Holland" ? "Het Gooi" : location.stad} | AK Web Solutions`,
    description: `Website laten maken in ${location.stad}? Freelance webdesigner voor ${location.stad} en omgeving. Snelle Next.js websites, SEO-geoptimaliseerd. Gratis adviesgesprek!`,
    keywords: [
      `website laten maken ${stadLower}`,
      `webdesign ${stadLower}`,
      `webdesigner ${stadLower}`,
      `webdeveloper ${stadLower}`,
      `website ${stadLower}`,
      `SEO ${stadLower}`,
      "website laten maken",
      "professionele website",
      "webdesign",
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
    image: "https://akwebsolutions.nl/fulllogo_transparent_nobuffer.png",
    description: `Professionele website laten maken in ${location.stad}. Snelle, SEO-geoptimaliseerde websites en webshops voor bedrijven in ${location.stad}, ${location.regio}.`,
    url: `https://akwebsolutions.nl/website-laten-maken-${location.slug}`,
    telephone: "+31685722387",
    email: "info@akwebsolutions.nl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Leeuwerikweide 40",
      addressLocality: "Baarn",
      postalCode: "3742 XR",
      addressRegion: "Utrecht",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2114,
      longitude: 5.2882,
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    knowsAbout: [
      "Web Development",
      "SEO Optimalisatie",
      "E-commerce",
      "Webdesign",
      "Next.js",
    ],
    sameAs: [
      "https://www.linkedin.com/company/ak-web-solutions-nl",
      "https://www.facebook.com/people/AK-Web-Solutions/61573229608493/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "2",
    },
  };

  const faqItems = [
    {
      question: `Waarom zou ik mijn website laten maken door een bureau in de buurt van ${location.stad}?`,
      answer: `Een lokaal webbureau begrijpt de markt in ${location.stad} en omgeving. Persoonlijk contact, korte lijnen en kennis van de lokale doelgroep maken het verschil. Bij AK Web Solutions combineer ik lokale betrokkenheid met de nieuwste technologie.`,
    },
    {
      question: "Wat kost een professionele website?",
      answer:
        "Een professionele website begint bij ons vanaf €1.500. De exacte prijs hangt af van de complexiteit, het aantal pagina's en de gewenste functionaliteiten. Tijdens een gratis adviesgesprek breng ik alles in kaart en ontvang je een transparante offerte.",
    },
    {
      question: "Hoe lang duurt het om een website te bouwen?",
      answer:
        "Een standaard bedrijfswebsite is binnen 3 tot 5 weken klaar. Complexere projecten zoals webshops of maatwerk applicaties duren 6 tot 12 weken. Ik werk met heldere milestones en houd je wekelijks op de hoogte.",
    },
    {
      question: "Waarom gebruiken jullie Next.js in plaats van WordPress?",
      answer:
        "Next.js websites laden 3 tot 5 keer sneller dan WordPress, scoren 90+ op Google PageSpeed en zijn veel veiliger — geen kwetsbare plugins nodig. Alles wordt op maat gebouwd en geoptimaliseerd voor SEO.",
    },
    {
      question: "Is SEO inbegrepen bij een nieuwe website?",
      answer:
        "Ja, elke website die wij bouwen bevat een solide SEO-basis: snelle laadtijden, structured data, XML sitemaps, meta-tags en semantische HTML. Voor een complete SEO-strategie bieden we aparte pakketten aan.",
    },
    {
      question: `Werken jullie ook met bedrijven buiten ${location.stad}?`,
      answer: `Jazeker! Hoewel we graag lokaal werken in ${location.stad} en omgeving, helpen we ondernemers door heel Nederland. Dankzij videobellen en online tools werkt de samenwerking net zo soepel.`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
