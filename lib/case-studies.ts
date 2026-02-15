export interface CaseStudy {
  slug: string;
  title: string;
  url: string;
  type: string;
  category: string;
  stack: string[];
  gradient: string;
  client: string;
  industry: string;
  year: string;
  duration: string;
  description: string;
  metaDescription: string;
  challenge: string;
  solution: string;
  approach: { step: string; description: string }[];
  features: string[];
  results: { label: string; value: string }[];
  screenshot: string;
  oldScreenshot?: string;
  extraScreenshots?: { src: string; alt: string }[];
  testimonial?: { quote: string; name: string; role: string };
}

const caseStudies: CaseStudy[] = [
  {
    slug: "ad-loodgietersbedrijf",
    title: "AD Loodgietersbedrijf",
    url: "adloodgietersbedrijf.nl",
    type: "Bedrijfswebsite",
    category: "Website",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-[#7B4FB5] to-[#B39DDB]",
    client: "AD Loodgietersbedrijf",
    industry: "Loodgieterij",
    year: "2024",
    duration: "3 weken",
    description:
      "Een complete website voor een loodgietersbedrijf met 10+ jaar ervaring in Amsterdam. Van verouderde online aanwezigheid naar een moderne, razendsnelle website die klanten genereert.",
    metaDescription:
      "Case study: Hoe we een moderne Next.js website bouwden voor AD Loodgietersbedrijf in Amsterdam. SEO-geoptimaliseerd, razendsnel en conversiegericht.",
    challenge:
      "AD Loodgietersbedrijf had een verouderde website die niet mobiel-vriendelijk was en slecht scoorde in Google. Potentiële klanten konden het bedrijf moeilijk vinden bij spoedgevallen. De website laadde traag, had geen duidelijke call-to-actions en miste een professionele uitstraling die past bij een bedrijf met meer dan 10 jaar ervaring.",
    solution:
      "Ik heb een compleet nieuwe website gebouwd met Next.js die razendsnel laadt, perfect werkt op mobiel en geoptimaliseerd is voor lokale SEO in Amsterdam. De focus lag op directe conversie: prominente telefoonnummers, een contactformulier met directe notificaties en een overzichtelijke dienstenpagina die vertrouwen wekt.",
    approach: [
      {
        step: "Analyse & Strategie",
        description:
          "Concurrentieanalyse van loodgieters in Amsterdam, keyword research voor lokale zoektermen en gesprekken over de belangrijkste diensten en USP's.",
      },
      {
        step: "Design & Wireframes",
        description:
          "Mobile-first ontwerp met nadruk op 24/7 bereikbaarheid, spoedservice en vertrouwenwekkende elementen zoals ervaring en certificeringen.",
      },
      {
        step: "Development",
        description:
          "Gebouwd met Next.js voor optimale snelheid, server-side rendering voor SEO en een contactformulier met directe e-mail notificaties via Resend.",
      },
      {
        step: "SEO & Launch",
        description:
          "Technische SEO implementatie met structured data, Google Bedrijfsprofiel optimalisatie, XML sitemap en monitoring setup.",
      },
    ],
    features: [
      "Responsive mobile-first design",
      "SEO-geoptimaliseerd voor lokale vindbaarheid",
      "Contactformulier met directe notificaties",
      "24/7 spoedservice prominent in beeld",
      "Overzichtelijke dienstenpagina",
      "Google Bedrijfsprofiel integratie",
      "Razendsnel dankzij Next.js (SSR)",
      "SSL-certificaat en beveiligde hosting",
    ],
    results: [
      { label: "PageSpeed Score", value: "96+" },
      { label: "Laadtijd", value: "<1s" },
      { label: "Meer aanvragen", value: "+180%" },
    ],
    screenshot: "/adloodgieter/new.png",
    oldScreenshot: "/adloodgieter/old.png",
    testimonial: {
      quote:
        "AK Web Solutions heeft een fantastische website voor ons gebouwd. Professioneel, snel en altijd bereikbaar. Het resultaat overtrof onze verwachtingen! We krijgen nu veel meer aanvragen via de website.",
      name: "Ahmed D.",
      role: "Eigenaar, AD Loodgietersbedrijf",
    },
  },
  {
    slug: "pro-banden-service",
    title: "Pro Banden Service",
    url: "probandenservice.nl",
    type: "Bedrijfswebsite",
    category: "WordPress",
    stack: ["WordPress", "Elementor", "Astra"],
    gradient: "from-blue-500 to-cyan-500",
    client: "Pro Banden Service",
    industry: "Automotive",
    year: "2023",
    duration: "2 weken",
    description:
      "Een gebruiksvriendelijke website voor een bandengarage met meerdere vestigingen. Focus op online vindbaarheid en het gemakkelijk maken van afspraken voor bandenwissel en autoservices.",
    metaDescription:
      "Case study: WordPress website voor Pro Banden Service. Meerdere vestigingen, online afspraken en mobiel-vriendelijk design.",
    challenge:
      "Pro Banden Service had geen online aanwezigheid en verloor klanten aan concurrenten die wel goed vindbaar waren in Google. Met meerdere vestigingen was het belangrijk dat klanten snel de dichtstbijzijnde locatie konden vinden en direct een afspraak konden maken.",
    solution:
      "Een overzichtelijke WordPress website gebouwd met Elementor die alle vestigingen duidelijk presenteert. De website is geoptimaliseerd voor lokale zoektermen en maakt het eenvoudig om online een afspraak te plannen. Het WordPress CMS stelt het team in staat om zelf prijzen en acties bij te werken.",
    approach: [
      {
        step: "Behoefteanalyse",
        description:
          "Inventarisatie van alle diensten, vestigingen en de belangrijkste klantbehoeften. Analyse van concurrenten in de regio.",
      },
      {
        step: "WordPress Setup",
        description:
          "Astra theme als basis met Elementor voor flexibele pagina-opbouw. Vestigingenpagina's met Google Maps integratie.",
      },
      {
        step: "Content & SEO",
        description:
          "Dienstenpagina's geschreven voor relevante zoektermen, lokale SEO per vestiging en Google Bedrijfsprofiel per locatie.",
      },
      {
        step: "Training & Oplevering",
        description:
          "Het team getraind in het gebruik van WordPress zodat ze zelf content, prijzen en acties kunnen aanpassen.",
      },
    ],
    features: [
      "Overzicht van alle diensten en vestigingen",
      "Online afspraken maken",
      "Mobiel-vriendelijk responsive ontwerp",
      "Beheerbaar via WordPress dashboard",
      "Google Maps per vestiging",
      "Lokale SEO per locatie",
      "Seizoensgebonden actiebanner",
      "Snelle laadtijden met caching",
    ],
    results: [
      { label: "Meer bezoekers", value: "+120%" },
      { label: "Online afspraken", value: "40/mnd" },
      { label: "Google ranking", value: "Top 5" },
    ],
    screenshot: "/probanden/new.png",
    testimonial: {
      quote:
        "Onze webshop draait perfect dankzij Ayoub. Klanten kunnen nu online banden bestellen en dat heeft onze omzet flink verhoogd. Absolute aanrader!",
      name: "Patrick V.",
      role: "Eigenaar, Pro Banden Service",
    },
  },
  {
    slug: "loens-collection",
    title: "Loens Collection",
    url: "loenscollection.com",
    type: "E-commerce Webshop",
    category: "Shopify Webshop",
    stack: ["Shopify", "Klarna", "Dawn Theme"],
    gradient: "from-pink-500 to-rose-500",
    client: "Loens Collection",
    industry: "Fashion & Retail",
    year: "2024",
    duration: "4 weken",
    description:
      "Een elegante Shopify webshop voor modest fashion dameskleding. Complete e-commerce oplossing met Klarna betaalintegratie, meertalige ondersteuning en een geoptimaliseerde checkout die converteert.",
    metaDescription:
      "Case study: Shopify webshop voor Loens Collection. Modest fashion met Klarna integratie, multi-language support en geoptimaliseerde checkout.",
    challenge:
      "Loens Collection wilde hun modest fashion collectie online verkopen maar had geen e-commerce ervaring. Ze hadden een platform nodig dat eenvoudig te beheren was, er professioneel uitzag en betrouwbare betaalopties bood inclusief Klarna. Daarnaast moest de shop zowel in het Nederlands als Engels beschikbaar zijn voor hun internationale klantenkring.",
    solution:
      "Ik heb een complete Shopify webshop opgezet met het Dawn theme als basis, aangepast aan de merkidentiteit van Loens Collection. Klarna werd geïntegreerd als betaaloptie naast iDEAL en creditcard. De shop ondersteunt Nederlands en Engels en heeft een geoptimaliseerde checkout flow die het verlaten van het winkelmandje minimaliseert.",
    approach: [
      {
        step: "Merkidentiteit & Design",
        description:
          "Kleurenpalet, typografie en visuele stijl bepaald die past bij het modest fashion merk. Productfotografie advies gegeven.",
      },
      {
        step: "Shopify Configuratie",
        description:
          "Dawn theme aangepast, productcategorieën ingericht (jurken, tops, broeken, sets), collectiepagina's en filters opgezet.",
      },
      {
        step: "Betaal & Verzending",
        description:
          "Klarna, iDEAL en creditcard betaalopties geïntegreerd. Verzendregels voor Nederland en België ingesteld met PostNL.",
      },
      {
        step: "Multi-language & Launch",
        description:
          "Nederlandse en Engelse vertalingen, SEO per taal, productbeschrijvingen en e-mail templates in beide talen.",
      },
    ],
    features: [
      "Klarna betaalintegratie",
      "Multi-language support (NL/EN)",
      "Uitgebreide productcatalogus",
      "Geoptimaliseerde checkout flow",
      "Collectiepagina's met filters",
      "Automatische voorraadbeheersing",
      "E-mail marketing integratie",
      "Mobiel-geoptimaliseerd winkelen",
    ],
    results: [
      { label: "Conversieratio", value: "3.2%" },
      { label: "Gem. orderwaarde", value: "€85" },
      { label: "Terugkerende klanten", value: "35%" },
    ],
    screenshot: "/loens/new.png",
    testimonial: {
      quote:
        "Van begin tot eind een fijne samenwerking. De Shopify webshop ziet er prachtig uit en werkt perfect met Klarna. Ik krijg veel complimenten van klanten!",
      name: "Fatima L.",
      role: "Eigenaar, Loens Collection",
    },
  },
  {
    slug: "mkh-bouw",
    title: "MKH Bouw",
    url: "mkhbouw.nl",
    type: "Bedrijfswebsite",
    category: "Website",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-orange-500 to-amber-500",
    client: "MKH Bouw",
    industry: "Bouw & Renovatie",
    year: "2024",
    duration: "3 weken",
    description:
      "Een moderne website voor een klussenbedrijf uit Amsterdam dat gespecialiseerd is in renovaties, badkamers, keukens en tegelwerk. Met portfolio showcase en offerte-aanvraag functionaliteit.",
    metaDescription:
      "Case study: Next.js website voor MKH Bouw Amsterdam. Portfolio showcase, offerte systeem en SEO-optimalisatie voor de bouwsector.",
    challenge:
      "MKH Bouw groeide snel maar had geen professionele online aanwezigheid. Potentiële klanten konden hun eerdere werk niet bekijken en er was geen eenvoudige manier om een offerte aan te vragen. Het bedrijf wilde een website die hun vakmanschap laat zien en vertrouwen wekt bij nieuwe klanten.",
    solution:
      "Een strakke Next.js website gebouwd met een uitgebreide portfolio sectie waar projectfoto's per categorie bekeken kunnen worden. Een gebruiksvriendelijk offerte-aanvraagformulier maakt het laagdrempelig voor potentiële klanten om contact op te nemen. De website is geoptimaliseerd voor lokale zoektermen in Amsterdam.",
    approach: [
      {
        step: "Portfolio Strategie",
        description:
          "Projectfoto's verzameld en gecategoriseerd per dienst: badkamers, keukens, tegelwerk en complete renovaties.",
      },
      {
        step: "Design & UX",
        description:
          "Strak, modern design dat vakmanschap uitstraalt. Before/after fotogalerijen en een intuïtief offerte formulier.",
      },
      {
        step: "Next.js Development",
        description:
          "Server-side rendering voor optimale SEO, dynamische portfolio filtering en een contactformulier met validatie.",
      },
      {
        step: "Lokale SEO",
        description:
          "Geoptimaliseerd voor zoektermen als 'klusjesman Amsterdam', 'badkamer renovatie Amsterdam' en gerelateerde termen.",
      },
    ],
    features: [
      "Portfolio met projectfoto's per categorie",
      "Offerte aanvraag formulier",
      "Diensten overzicht per specialisatie",
      "Before/after projectgalerijen",
      "Geoptimaliseerd voor lokale SEO",
      "Snelle laadtijden met Next.js",
      "Mobiel-vriendelijk ontwerp",
      "Google Analytics integratie",
    ],
    results: [
      { label: "Offerte aanvragen", value: "+200%" },
      { label: "PageSpeed Score", value: "94+" },
      { label: "Lokale ranking", value: "Top 3" },
    ],
    screenshot: "/mkhbouw/new.png",
  },
  {
    slug: "clockd",
    title: "Clockd",
    url: "clockd.nl",
    type: "Maatwerk Software",
    category: "Web Applicatie",
    stack: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    gradient: "from-emerald-500 to-green-500",
    client: "Clockd",
    industry: "SaaS / Bedrijfssoftware",
    year: "2024",
    duration: "8 weken",
    description:
      "Een op maat gebouwd urenregistratie systeem voor bedrijven. Medewerkers registreren uren, managers beheren projecten en het systeem genereert automatisch rapportages en exports.",
    metaDescription:
      "Case study: Maatwerk urenregistratie software Clockd. Gebouwd met Next.js en PostgreSQL. Real-time dashboard, rapportages en rollenbeheer.",
    challenge:
      "Bestaande urenregistratie tools waren te complex, te duur of misten essentiële functionaliteiten. Het bedrijf had behoefte aan een op maat gemaakt systeem dat precies aansluit bij hun workflow: eenvoudige ureninvoer voor medewerkers, overzichtelijk projectbeheer voor managers en automatische rapportages voor de administratie.",
    solution:
      "Ik heb Clockd van de grond af aan gebouwd als een full-stack webapplicatie met Next.js en PostgreSQL. Het systeem heeft twee interfaces: een eenvoudige view voor medewerkers om uren te registreren en een uitgebreid management dashboard voor projectbeheer, rapportages en exports. Rollenbeheer zorgt ervoor dat iedereen alleen ziet wat relevant is.",
    approach: [
      {
        step: "Requirements & Database Design",
        description:
          "Gebruikersflows uitgetekend voor medewerkers en managers. Relationeel databasemodel ontworpen met PostgreSQL voor projecten, uren, medewerkers en rollen.",
      },
      {
        step: "Backend & API",
        description:
          "RESTful API gebouwd met Next.js API routes, authenticatie met sessions, input validatie en database queries met prepared statements.",
      },
      {
        step: "Frontend & Dashboard",
        description:
          "Twee dashboards ontwikkeld: een simpele urenregistratie voor medewerkers en een uitgebreid management dashboard met grafieken en filters.",
      },
      {
        step: "Rapportages & Testing",
        description:
          "CSV en PDF export functionaliteit, automatische weekoverzichten, uitgebreide testing en security audit voor lancering.",
      },
    ],
    features: [
      "Real-time dashboard met inzichten",
      "Urenregistratie per project en medewerker",
      "Rapportages en CSV/PDF exports",
      "Rollen en rechtenbeheer",
      "Projectbeheer met budgettering",
      "Automatische weekoverzichten",
      "Responsive design voor mobiel gebruik",
      "Beveiligd met authenticatie en sessions",
    ],
    results: [
      { label: "Tijdsbesparing", value: "60%" },
      { label: "Nauwkeurigheid", value: "99%" },
      { label: "Gebruikers", value: "50+" },
    ],
    screenshot: "/clockd/user_anonymized.png",
    extraScreenshots: [
      {
        src: "/clockd/manager_anonymized.png",
        alt: "Clockd management dashboard",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}
