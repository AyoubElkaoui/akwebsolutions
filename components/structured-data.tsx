export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://akwebsolutions.nl/#organization",
    name: "AK Web Solutions",
    alternateName: "AKWS",
    url: "https://akwebsolutions.nl",
    logo: "https://akwebsolutions.nl/logo.png",
    image: "https://akwebsolutions.nl/og-image.jpg",
    description:
      "Freelance web developer gespecialiseerd in professionele websites, webshops, SEO optimalisatie en maatwerk software. Gevestigd in Baarn, werkzaam door heel Nederland.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Baarn",
      addressRegion: "Utrecht",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2118,
      longitude: 5.2878,
    },
    email: "info@akwebsolutions.nl",
    telephone: "+31685722387",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Bankoverschrijving, Factuur",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/ak-web-solutions-nl/",
      "https://github.com/AyoubElkaoui",
      "https://www.facebook.com/profile.php?id=61573229608493",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Netherlands",
      },
      {
        "@type": "City",
        name: "Baarn",
      },
      {
        "@type": "City",
        name: "Amsterdam",
      },
      {
        "@type": "City",
        name: "Utrecht",
      },
    ],
    knowsAbout: [
      "Web Development",
      "SEO Optimalisatie",
      "E-commerce",
      "Shopify",
      "WordPress",
      "Next.js",
      "React",
      "TypeScript",
      "Maatwerk Software",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://akwebsolutions.nl/#website",
    url: "https://akwebsolutions.nl",
    name: "AK Web Solutions",
    description:
      "Professionele websites, webshops en maatwerk software door freelance web developer in Baarn",
    publisher: {
      "@id": "https://akwebsolutions.nl/#organization",
    },
    inLanguage: "nl-NL",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://akwebsolutions.nl/#service",
    serviceType: "Web Development",
    provider: {
      "@id": "https://akwebsolutions.nl/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "Netherlands",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Diensten",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Laten Maken",
            description:
              "Professionele website laten maken met Next.js en React. Snelle, SEO-geoptimaliseerde websites die resultaat opleveren.",
            url: "https://akwebsolutions.nl/diensten/website-laten-maken",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimalisatie",
            description:
              "Technische SEO, on-page optimalisatie en local SEO voor hogere rankings in Google. Meer organisch verkeer en leads.",
            url: "https://akwebsolutions.nl/diensten/seo-optimalisatie",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Webshop Laten Maken",
            description:
              "E-commerce oplossingen met Shopify, WooCommerce of custom. Webshops die converteren en online verkoop maximaliseren.",
            url: "https://akwebsolutions.nl/diensten/webshop-laten-maken",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Maatwerk Software",
            description:
              "Custom web applicaties, dashboards en API-integraties. Software op maat die perfect aansluit bij jouw bedrijfsprocessen.",
            url: "https://akwebsolutions.nl/diensten/maatwerk-software",
          },
        },
      ],
    },
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
        name: "Website Laten Maken",
        item: "https://akwebsolutions.nl/diensten/website-laten-maken",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "SEO Optimalisatie",
        item: "https://akwebsolutions.nl/diensten/seo-optimalisatie",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Webshop Laten Maken",
        item: "https://akwebsolutions.nl/diensten/webshop-laten-maken",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Maatwerk Software",
        item: "https://akwebsolutions.nl/diensten/maatwerk-software",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Portfolio",
        item: "https://akwebsolutions.nl/portfolio",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Blog",
        item: "https://akwebsolutions.nl/blog",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Over Mij",
        item: "https://akwebsolutions.nl/over-ons",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Contact",
        item: "https://akwebsolutions.nl/contact",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://akwebsolutions.nl/#localbusiness",
    name: "AK Web Solutions",
    image: "https://akwebsolutions.nl/og-image.jpg",
    telephone: "+31685722387",
    email: "info@akwebsolutions.nl",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Baarn",
      addressRegion: "Utrecht",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.2118,
      longitude: 5.2878,
    },
    url: "https://akwebsolutions.nl",
    priceRange: "€€",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "5",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wat kost een website laten maken?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De kosten voor een professionele website beginnen vanaf €1.500 voor een standaard bedrijfswebsite. De exacte prijs hangt af van de complexiteit, het aantal pagina's, gewenste functionaliteiten en eventuele integraties. Ik maak altijd eerst een vrijblijvend voorstel op maat zodat je precies weet waar je aan toe bent.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe lang duurt het om een website te bouwen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een standaard bedrijfswebsite is binnen 2-4 weken live. Een webshop of complexere webapplicatie duurt gemiddeld 4-8 weken. De doorlooptijd hangt af van de complexiteit van het project en hoe snel content en feedback wordt aangeleverd.",
        },
      },
      {
        "@type": "Question",
        name: "Waarom kiezen voor Next.js in plaats van WordPress?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Next.js biedt superieure performance met 95+ PageSpeed scores, betere beveiliging omdat er geen plugins nodig zijn, ingebouwde SEO-optimalisatie met server-side rendering, en lagere hostingkosten. WordPress is geschikt voor eenvoudige sites met veel content, maar voor snelheid en veiligheid is Next.js de betere keuze.",
        },
      },
      {
        "@type": "Question",
        name: "Is SEO inbegrepen bij de website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, technische SEO is standaard inbegrepen bij elke website die ik bouw. Dit omvat meta tags, structured data (Schema.org), XML sitemap, robots.txt, performance optimalisatie, semantische HTML en Core Web Vitals optimalisatie. Voor uitgebreide SEO campagnes met keyword research, content strategie en linkbuilding bied ik aanvullende SEO pakketten aan.",
        },
      },
      {
        "@type": "Question",
        name: "Bied je ook hosting en onderhoud aan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, ik verzorg hosting via Vercel met 99.99% uptime garantie en een wereldwijd CDN netwerk. Daarnaast bied ik onderhoudspakketten aan voor security updates, performance monitoring, backups en content wijzigingen. Zo is je website altijd up-to-date en optimaal beveiligd.",
        },
      },
      {
        "@type": "Question",
        name: "Kan ik mijn website zelf beheren en aanpassen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absoluut. Ik integreer een gebruiksvriendelijk Content Management Systeem (CMS) waarmee je zelf teksten, afbeeldingen en pagina's kunt aanpassen zonder technische kennis. Je ontvangt ook een korte training zodat je direct aan de slag kunt.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is het verschil tussen een webshop en een website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een website is bedoeld om informatie te delen en leads te genereren. Een webshop heeft daarnaast een productcatalogus, winkelwagen, checkout proces en betaalintegraties (iDEAL, Klarna, creditcard) om online producten te verkopen. Ik bouw webshops met Shopify, WooCommerce of custom oplossingen.",
        },
      },
      {
        "@type": "Question",
        name: "Werk je ook voor bedrijven buiten Baarn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, ik werk voor klanten door heel Nederland. Hoewel ik gevestigd ben in Baarn, werk ik volledig digitaal. Overleg gaat via videocalls en communicatie verloopt snel via e-mail en telefoon. Ik heb klanten in Amsterdam, Utrecht, Rotterdam en andere steden.",
        },
      },
    ],
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://akwebsolutions.nl/portfolio/#projects",
    name: "Portfolio - Opgeleverde Projecten",
    description:
      "Bekijk de websites, webshops en applicaties die ik heb gebouwd voor mijn klanten.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebSite",
          name: "AD Loodgietersbedrijf",
          url: "https://adloodgietersbedrijf.nl",
          description:
            "Next.js bedrijfswebsite voor loodgietersbedrijf in Amsterdam met 24/7 spoedservice.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "WebSite",
          name: "Pro Banden Service",
          url: "https://probandenservice.nl",
          description:
            "WordPress website voor bandengarage met overzicht van diensten en vestigingen.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "WebSite",
          name: "Loens Collection",
          url: "https://loenscollection.com",
          description:
            "Shopify webshop voor modest fashion dameskleding met Klarna integratie.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "WebSite",
          name: "MKH Bouw",
          url: "https://mkhbouw.nl",
          description:
            "Next.js bedrijfswebsite voor klussenbedrijf in Amsterdam.",
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "SoftwareApplication",
          name: "Clockd",
          applicationCategory: "BusinessApplication",
          description:
            "Maatwerk urenregistratie systeem voor bedrijven met dashboard en rapportages.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}
