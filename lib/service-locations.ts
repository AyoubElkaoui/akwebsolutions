import { getLocation, type Location } from "./locations";

export interface ServiceLocationData {
  heroTekst: string;
  introParagrafen: string[];
  faq: { question: string; answer: string }[];
}

export interface ServiceType {
  serviceSlug: string;
  serviceNaam: string;
  serviceOmschrijving: string;
  locationSlugs: string[];
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  procesStappen: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: string[];
  locationContent: Record<string, ServiceLocationData>;
}

export const serviceTypes: ServiceType[] = [
  {
    serviceSlug: "seo-optimalisatie",
    serviceNaam: "SEO Optimalisatie",
    serviceOmschrijving:
      "Professionele SEO optimalisatie voor betere vindbaarheid in Google",
    locationSlugs: ["baarn", "hilversum", "amersfoort"],
    features: [
      {
        icon: "Search",
        title: "Keyword Research",
        description:
          "Diepgaand zoekwoordenonderzoek om de meest waardevolle zoektermen voor jouw bedrijf te identificeren.",
      },
      {
        icon: "FileText",
        title: "Content Optimalisatie",
        description:
          "SEO-geoptimaliseerde content die zowel zoekmachines als bezoekers aanspreekt.",
      },
      {
        icon: "Code2",
        title: "Technische SEO",
        description:
          "Snelle laadtijden, structured data, XML sitemaps en een foutloze technische basis.",
      },
      {
        icon: "MapPin",
        title: "Lokale SEO",
        description:
          "Google Mijn Bedrijf optimalisatie en lokale vindbaarheid voor klanten in jouw regio.",
      },
      {
        icon: "BarChart3",
        title: "Rapportage & Analyse",
        description:
          "Maandelijkse rapportages met inzicht in rankings, verkeer en conversies.",
      },
      {
        icon: "Link",
        title: "Linkbuilding",
        description:
          "Kwalitatieve backlinks opbouwen die jouw autoriteit en rankings versterken.",
      },
    ],
    procesStappen: [
      {
        step: "01",
        title: "SEO Audit",
        description:
          "We analyseren jouw huidige website op technische SEO, content en backlinks. Je ontvangt een helder rapport met verbeterpunten.",
      },
      {
        step: "02",
        title: "Strategie & Zoekwoorden",
        description:
          "Op basis van de audit stellen we een SEO-strategie op met de meest waardevolle zoekwoorden voor jouw bedrijf en regio.",
      },
      {
        step: "03",
        title: "Implementatie",
        description:
          "We optimaliseren jouw website: technische verbeteringen, content optimalisatie, lokale SEO en linkbuilding.",
      },
      {
        step: "04",
        title: "Monitoren & Bijsturen",
        description:
          "We monitoren rankings en verkeer continu en sturen bij waar nodig. Je ontvangt maandelijkse rapportages.",
      },
    ],
    benefits: [
      "Gratis SEO-audit — inzicht in jouw huidige positie",
      "Hogere posities in Google — meer organisch verkeer",
      "Lokale vindbaarheid — gevonden worden in jouw regio",
      "Meetbare resultaten — maandelijkse rapportages",
      "Technische SEO — snelle, foutloze website",
      "Content strategie — waardevolle content die scoort",
      "Geen lange contracten — maandelijks opzegbaar",
      "Persoonlijke aanpak — één vast aanspreekpunt",
    ],
    locationContent: {
      baarn: {
        heroTekst:
          "Als lokale SEO specialist in Baarn kennen we de markt als geen ander. We helpen bedrijven in Baarn hoger scoren in Google en meer lokale klanten aantrekken.",
        introParagrafen: [
          "Op zoek naar een SEO specialist in Baarn? AK Web Solutions helpt bedrijven in Baarn en omgeving met professionele zoekmachineoptimalisatie. We zorgen dat jouw website gevonden wordt door potentiële klanten die zoeken op relevante termen.",
          "Met 25.000 inwoners is Baarn een gemeente waar lokale vindbaarheid het verschil maakt. Of je nu een winkel, restaurant of dienstverlener bent — als klanten zoeken op jouw dienst in Baarn, moet jouw website bovenaan staan.",
          "Onze SEO-aanpak combineert technische optimalisatie met lokale strategieën. We optimaliseren jouw Google Bedrijfsprofiel, bouwen lokale backlinks en creëren content die scoort op zoektermen als 'jouw dienst + Baarn'.",
        ],
        faq: [
          {
            question: "Waarom SEO optimalisatie in Baarn?",
            answer:
              "Steeds meer inwoners van Baarn zoeken online naar lokale diensten. Met professionele SEO zorg je dat jouw bedrijf bovenaan staat wanneer potentiële klanten in Baarn zoeken naar jouw diensten. Als lokaal bureau begrijpen we de Baarnse markt.",
          },
          {
            question:
              "Hoe lang duurt het voordat ik resultaten zie in Baarn?",
            answer:
              "Voor lokale SEO in een plaats als Baarn zie je doorgaans binnen 2-3 maanden de eerste verbeteringen. Lokale zoektermen hebben vaak minder concurrentie dan landelijke termen, waardoor resultaten sneller zichtbaar zijn.",
          },
        ],
      },
      hilversum: {
        heroTekst:
          "In de mediahoofstad Hilversum is online concurrentie hevig. Onze SEO-expertise helpt jouw bedrijf opvallen in de zoekresultaten en meer klanten bereiken.",
        introParagrafen: [
          "Op zoek naar een SEO specialist in Hilversum? AK Web Solutions helpt bedrijven in Hilversum met professionele zoekmachineoptimalisatie die écht werkt. Meer verkeer, meer leads, meer klanten.",
          "Met 92.000 inwoners en honderden bedrijven is Hilversum een competitieve markt. Online vindbaarheid is cruciaal — of je nu in het mediapark werkt of een winkel in het centrum hebt. Zonder goede SEO loop je klanten mis.",
          "Wij combineren technische SEO met een lokale strategie specifiek voor Hilversum. Van Google Bedrijfsprofiel optimalisatie tot content die scoort op Hilversumse zoektermen — we zorgen dat jouw doelgroep jou vindt.",
        ],
        faq: [
          {
            question: "Waarom SEO optimalisatie in Hilversum?",
            answer:
              "Hilversum is een van de grotere steden in het Gooi met veel ondernemers. De concurrentie in Google is hier steviger dan in kleinere plaatsen. Professionele SEO is daarom essentieel om op te vallen en lokale klanten te bereiken.",
          },
          {
            question:
              "Hoe concurrerend is SEO in Hilversum?",
            answer:
              "Hilversum heeft meer concurrentie dan kleinere dorpen in de regio, maar is nog steeds goed te bereiken met een gerichte lokale SEO-strategie. Wij focussen op long-tail zoekwoorden en lokale signalen om snel resultaat te boeken.",
          },
        ],
      },
      amersfoort: {
        heroTekst:
          "Amersfoort is een van de snelst groeiende steden van Nederland. Met onze SEO-expertise helpen we Amersfoortse bedrijven groeien in Google.",
        introParagrafen: [
          "Op zoek naar SEO optimalisatie in Amersfoort? AK Web Solutions helpt bedrijven in Amersfoort hoger scoren in Google. Van de binnenstad tot Vathorst — we zorgen dat jouw doelgroep jou online vindt.",
          "Met 160.000 inwoners en een bloeiend ondernemersklimaat is Amersfoort een stad vol kansen. Maar met meer bedrijven komt ook meer concurrentie in Google. Professionele SEO maakt het verschil tussen gevonden worden en onzichtbaar blijven.",
          "Onze SEO-strategie voor Amersfoortse bedrijven combineert technische optimalisatie met lokale content en linkbuilding. We kennen de regio en weten welke zoektermen jouw doelgroep gebruikt.",
        ],
        faq: [
          {
            question: "Waarom SEO optimalisatie in Amersfoort?",
            answer:
              "Amersfoort groeit snel en steeds meer bedrijven concurreren om dezelfde klanten. Met 160.000 inwoners is er een groot zoekvolume voor lokale diensten. Professionele SEO zorgt dat jouw bedrijf bovenaan staat.",
          },
          {
            question:
              "Werken jullie met bedrijven in heel Amersfoort?",
            answer:
              "Ja, we werken met bedrijven in alle wijken van Amersfoort — van het centrum tot Vathorst, Nieuwland en Kattenbroek. Onze lokale SEO-strategie dekt de hele gemeente.",
          },
        ],
      },
    },
  },
  {
    serviceSlug: "webshop-laten-maken",
    serviceNaam: "Webshop Laten Maken",
    serviceOmschrijving:
      "Professionele webshop laten maken die converteert en groeit",
    locationSlugs: ["baarn", "hilversum", "amersfoort"],
    features: [
      {
        icon: "ShoppingCart",
        title: "Webshop op Maat",
        description:
          "Een unieke webshop gebouwd op maat, geen standaard template. Volledig afgestemd op jouw merk en producten.",
      },
      {
        icon: "CreditCard",
        title: "Veilig Betalen",
        description:
          "Integratie met iDEAL, creditcard, Bancontact, PayPal en meer. Veilig en vertrouwd voor jouw klanten.",
      },
      {
        icon: "Package",
        title: "Voorraadbeheer",
        description:
          "Overzichtelijk voorraadbeheer met automatische meldingen. Nooit meer een product verkopen dat niet op voorraad is.",
      },
      {
        icon: "Smartphone",
        title: "Mobile-First",
        description:
          "Meer dan 70% van online aankopen gebeurt via mobiel. Jouw webshop werkt perfect op elk apparaat.",
      },
      {
        icon: "Search",
        title: "SEO-Geoptimaliseerd",
        description:
          "Jouw webshop wordt gevonden in Google. Met technische SEO en geoptimaliseerde productpagina's.",
      },
      {
        icon: "BarChart3",
        title: "Analytics & Conversie",
        description:
          "Inzicht in bezoekersgedrag, conversieratio's en omzet. Data-gedreven optimalisatie voor meer verkopen.",
      },
    ],
    procesStappen: [
      {
        step: "01",
        title: "Kennismaking & Plan",
        description:
          "We bespreken jouw producten, doelgroep en wensen. Ik maak een plan voor jouw ideale webshop inclusief functionaliteiten en design.",
      },
      {
        step: "02",
        title: "Design & UX",
        description:
          "Een op maat gemaakt design dat jouw merk versterkt. Gebruiksvriendelijke navigatie en een checkout die converteert.",
      },
      {
        step: "03",
        title: "Ontwikkeling & Integratie",
        description:
          "Ik bouw jouw webshop met de nieuwste technologie. Betaalsystemen, verzendopties en voorraadbeheer worden gekoppeld.",
      },
      {
        step: "04",
        title: "Lancering & Groei",
        description:
          "Na uitgebreide tests gaat jouw webshop live. Ik help met de eerste producten, SEO en marketing om direct te starten met verkopen.",
      },
    ],
    benefits: [
      "Gratis adviesgesprek — vrijblijvend en persoonlijk",
      "Maatwerk webshop — geen standaard templates",
      "Alle betaalmethoden — iDEAL, creditcard, PayPal",
      "Mobile-first — perfect op elk apparaat",
      "SEO-geoptimaliseerd — gevonden worden in Google",
      "Snel & veilig — 90+ PageSpeed score",
      "CMS voor productbeheer — zelf producten toevoegen",
      "Doorlopende support — ook na lancering",
    ],
    locationContent: {
      baarn: {
        heroTekst:
          "Een professionele webshop laten maken in Baarn? AK Web Solutions bouwt webshops die verkopen. Lokaal gemaakt, wereldwijd bereik.",
        introParagrafen: [
          "Wil je een webshop laten maken in Baarn? AK Web Solutions bouwt professionele webshops voor ondernemers in Baarn die online willen verkopen. Van een kleine productcatalogus tot een complete e-commerce oplossing.",
          "Als lokaal bedrijf in Baarn begrijpen we de behoeften van lokale ondernemers. Of je nu je fysieke winkel wilt uitbreiden met een online verkoopkanaal of volledig online wilt starten — wij bouwen een webshop die past bij jouw ambities.",
          "Onze webshops worden gebouwd met de nieuwste technologie voor maximale snelheid en conversie. Geen WordPress of WooCommerce, maar een op maat gebouwde oplossing die sneller, veiliger en beter schaalbaar is.",
        ],
        faq: [
          {
            question: "Kan ik vanuit Baarn een webshop starten?",
            answer:
              "Absoluut! Steeds meer ondernemers in Baarn combineren hun lokale bedrijf met een webshop. Een online verkoopkanaal vergroot je bereik van Baarn naar heel Nederland en daarbuiten.",
          },
          {
            question: "Leveren jullie ook de producten en content aan?",
            answer:
              "Wij bouwen de webshop en helpen met de opzet van productpagina's. De productteksten en foto's lever jij aan, maar we adviseren graag over SEO-geoptimaliseerde productbeschrijvingen.",
          },
        ],
      },
      hilversum: {
        heroTekst:
          "Een webshop laten maken in Hilversum? Wij bouwen webshops die converteren — snel, modern en klaar om te verkopen.",
        introParagrafen: [
          "Op zoek naar een webshop specialist in Hilversum? AK Web Solutions bouwt professionele webshops voor Hilversumse ondernemers. Een webshop die er niet alleen mooi uitziet, maar ook daadwerkelijk verkoopt.",
          "Hilversum is een stad met een sterk ondernemersklimaat. Steeds meer lokale winkels en bedrijven ontdekken de kracht van online verkoop. Een professionele webshop is daarbij onmisbaar — het is je 24/7 verkoopkanaal.",
          "Wij bouwen geen standaard webshops. Elke webshop die we ontwikkelen is maatwerk, geoptimaliseerd voor conversie en afgestemd op jouw doelgroep in Hilversum en daarbuiten.",
        ],
        faq: [
          {
            question: "Waarom een webshop als ik al een winkel in Hilversum heb?",
            answer:
              "Een webshop is een verlenging van je fysieke winkel. Klanten uit Hilversum en omgeving kunnen online bestellen, en je bereikt ook klanten buiten de regio. Veel retailers zien 30-50% extra omzet via hun webshop.",
          },
          {
            question: "Hoe snel kan mijn webshop in Hilversum live gaan?",
            answer:
              "Een standaard webshop is binnen 4-6 weken live. Complexere webshops met veel producten of koppelingen duren 8-12 weken. We plannen alles vooraf zodat je precies weet waar je aan toe bent.",
          },
        ],
      },
      amersfoort: {
        heroTekst:
          "Webshop laten maken in Amersfoort? Wij bouwen e-commerce oplossingen die groeien met jouw bedrijf.",
        introParagrafen: [
          "Wil je een professionele webshop laten maken in Amersfoort? AK Web Solutions ontwikkelt webshops die verkopen. Voor startende webshopondernemers en gevestigde retailers in Amersfoort.",
          "Amersfoort is een groeiende stad met een divers winkelaanbod. Van de Hof tot Vathorst — ondernemers in Amersfoort zien de waarde van online verkoop. Een professionele webshop maakt het verschil tussen een hobby en een serieus verkoopkanaal.",
          "Onze webshops zijn gebouwd op snelheid en conversie. Met geïntegreerde betaalsystemen, voorraadbeheer en SEO-optimalisatie heb je alles in huis om succesvol online te verkopen vanuit Amersfoort.",
        ],
        faq: [
          {
            question: "Zijn er webshop subsidies voor bedrijven in Amersfoort?",
            answer:
              "Er zijn diverse subsidiemogelijkheden voor digitalisering van MKB-bedrijven, zoals de WBSO en regionale innovatiesubsidies. We adviseren je graag over de mogelijkheden voor jouw bedrijf in Amersfoort.",
          },
          {
            question: "Kan ik mijn webshop koppelen aan mijn winkel in Amersfoort?",
            answer:
              "Ja, we kunnen jouw webshop koppelen aan je kassasysteem en voorraadbeheer. Zo heb je één overzicht van online en offline verkoop. Ook click & collect is mogelijk voor klanten uit Amersfoort.",
          },
        ],
      },
    },
  },
];

export function getServiceType(
  serviceSlug: string
): ServiceType | undefined {
  return serviceTypes.find((s) => s.serviceSlug === serviceSlug);
}

export function getServiceLocationData(
  serviceSlug: string,
  stadSlug: string
): { service: ServiceType; location: Location; content: ServiceLocationData } | undefined {
  const service = getServiceType(serviceSlug);
  if (!service || !service.locationSlugs.includes(stadSlug)) return undefined;
  const location = getLocation(stadSlug);
  if (!location) return undefined;
  const content = service.locationContent[stadSlug];
  if (!content) return undefined;
  return { service, location, content };
}

export function getAllServiceLocationParams(serviceSlug: string) {
  const service = getServiceType(serviceSlug);
  if (!service) return [];
  return service.locationSlugs.map((stad) => ({ stad }));
}
