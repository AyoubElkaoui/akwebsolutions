export interface IndustryFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  naam: string;
  urlPrefix: "website-voor" | "webshop-voor";
  heroTitel: string;
  heroSubtitel: string;
  beschrijving: string;
  uitdagingen: string[];
  oplossingen: IndustryFeature[];
  voorbeeldFuncties: string[];
  faq: { question: string; answer: string }[];
  seoKeywords: string[];
  gerelateerdeIndustries: string[];
}

export const websiteIndustries: Industry[] = [
  {
    slug: "horeca",
    naam: "Horeca",
    urlPrefix: "website-voor",
    heroTitel: "Website voor de Horeca",
    heroSubtitel: "Meer gasten, meer reserveringen, meer omzet",
    beschrijving:
      "Een professionele website is voor restaurants, cafes en hotels onmisbaar. Gasten zoeken online naar een plek om te eten, te drinken of te overnachten. Met een moderne website die je menu toont, reserveringen accepteert en jouw sfeer overbrengt, trek je meer gasten aan dan ooit.",
    uitdagingen: [
      "Gasten verwachten online reserveringen en een digitale menukaart",
      "Lokale vindbaarheid in Google en Google Maps is cruciaal voor horeca",
      "De sfeer en beleving van je zaak moeten online overkomen",
      "Reviews en sociale bewijskracht bepalen of gasten binnenstappen",
    ],
    oplossingen: [
      {
        icon: "CalendarCheck",
        title: "Online Reserveringen",
        description:
          "Integratie met reserveringssystemen zodat gasten 24/7 een tafel kunnen boeken. Geen gemiste reserveringen meer.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Digitale Menukaart",
        description:
          "Een mooie, mobielvriendelijke menukaart die je zelf eenvoudig kunt bijwerken. Met allergeneninformatie en prijzen.",
      },
      {
        icon: "MapPin",
        title: "Lokale SEO",
        description:
          "Gevonden worden wanneer gasten zoeken op 'restaurant in de buurt'. Google Bedrijfsprofiel optimalisatie inbegrepen.",
      },
      {
        icon: "Camera",
        title: "Sfeervolle Fotogalerij",
        description:
          "Professionele foto's van je gerechten, interieur en team die de sfeer van je zaak online overbrengen.",
      },
      {
        icon: "Star",
        title: "Reviews Integratie",
        description:
          "Toon je beste Google en TripAdvisor reviews automatisch op je website. Sociale bewijskracht die converteert.",
      },
      {
        icon: "Smartphone",
        title: "Mobiel-Vriendelijk",
        description:
          "80% van horeca-zoekopdrachten komt via mobiel. Jouw website werkt perfect op elk scherm.",
      },
    ],
    voorbeeldFuncties: [
      "Online reserveringssysteem",
      "Digitale menukaart",
      "Google Maps integratie",
      "Foto- en sfeer galerij",
      "Review integratie (Google/TripAdvisor)",
      "Openingstijden & contactgegevens",
      "Social media koppelingen",
      "Evenementen & speciale acties",
    ],
    faq: [
      {
        question: "Wat kost een website voor mijn restaurant of cafe?",
        answer:
          "Een professionele horecawebsite begint vanaf €1.500. Dit is inclusief een op maat gemaakt design, digitale menukaart, reserveringssysteem-integratie en SEO-optimalisatie. Neem contact op voor een vrijblijvende offerte.",
      },
      {
        question: "Kan ik zelf mijn menu aanpassen?",
        answer:
          "Ja, we integreren een gebruiksvriendelijk CMS waarmee je zelf je menukaart, prijzen en foto's kunt bijwerken. Na oplevering ontvang je een handleiding zodat je direct aan de slag kunt.",
      },
      {
        question:
          "Hoe help je met vindbaarheid in Google voor mijn horecabedrijf?",
        answer:
          "We optimaliseren je website voor lokale zoekopdrachten als 'restaurant in [stad]'. Daarnaast helpen we met je Google Bedrijfsprofiel, structured data voor recepten en evenementen, en review management.",
      },
      {
        question:
          "Welk reserveringssysteem kan ik koppelen aan mijn website?",
        answer:
          "We integreren met populaire systemen zoals Formitable, Couverts, The Fork en OpenTable. Ook een eigen reserveringsformulier met e-mail notificaties is mogelijk.",
      },
      {
        question: "Hoe snel kan mijn horecawebsite live zijn?",
        answer:
          "Een standaard horecawebsite is binnen 3-4 weken live. Als je professionele fotografie nodig hebt, plannen we dat in — reken dan op 4-5 weken totaal.",
      },
      {
        question:
          "Kan ik ook online bestellen of bezorgen via mijn website?",
        answer:
          "Ja, we kunnen een bestelsysteem integreren voor takeaway en bezorging. Met betaalintegratie (iDEAL, creditcard) en automatische orderbevestigingen.",
      },
    ],
    seoKeywords: [
      "website horeca",
      "restaurant website laten maken",
      "website cafe",
      "horecawebsite",
      "website hotel",
    ],
    gerelateerdeIndustries: ["retail"],
  },
  {
    slug: "retail",
    naam: "Retail",
    urlPrefix: "website-voor",
    heroTitel: "Website voor de Retail",
    heroSubtitel: "Meer klanten in je winkel en online",
    beschrijving:
      "Voor retailers is een professionele website niet langer optioneel — het is een noodzaak. Klanten oriënteren zich online voordat ze je winkel bezoeken. Een moderne website met je assortiment, openingstijden en locatie zorgt voor meer bezoekers in je fysieke winkel én online.",
    uitdagingen: [
      "Klanten oriënteren zich online voordat ze een winkel bezoeken",
      "Concurrentie van grote webshops en online marktplaatsen",
      "Openingstijden en voorraad moeten altijd actueel zijn",
      "De offline winkelervaring moet online terugkomen",
    ],
    oplossingen: [
      {
        icon: "Store",
        title: "Digitale Etalage",
        description:
          "Toon je assortiment online met een mooie productcatalogus. Klanten weten wat ze kunnen verwachten voordat ze langskomen.",
      },
      {
        icon: "MapPin",
        title: "Lokale Vindbaarheid",
        description:
          "Gevonden worden wanneer klanten zoeken op winkels in de buurt. Met Google Maps integratie en lokale SEO.",
      },
      {
        icon: "Clock",
        title: "Actuele Informatie",
        description:
          "Openingstijden, adressen en speciale acties altijd up-to-date. Met een CMS dat je zelf eenvoudig beheert.",
      },
      {
        icon: "ShoppingBag",
        title: "Click & Collect",
        description:
          "Laat klanten online bestellen en in de winkel afhalen. De perfecte brug tussen online en offline.",
      },
      {
        icon: "Tag",
        title: "Acties & Aanbiedingen",
        description:
          "Promoot seizoensacties, uitverkoop en nieuwe collecties via je website. Automatisch bijgewerkt via je CMS.",
      },
      {
        icon: "Users",
        title: "Klantenreviews",
        description:
          "Toon reviews en beoordelingen van tevreden klanten. Sociale bewijskracht die nieuwe klanten overtuigt.",
      },
    ],
    voorbeeldFuncties: [
      "Productcatalogus / digitale etalage",
      "Click & collect functionaliteit",
      "Google Maps & routeplanner",
      "Openingstijden & feestdagen",
      "Acties & aanbiedingen pagina",
      "Klantenreviews",
      "Nieuwsbrief inschrijving",
      "Social media integratie",
    ],
    faq: [
      {
        question: "Verschilt een retailwebsite van een webshop?",
        answer:
          "Ja. Een retailwebsite focust op het presenteren van je winkel en assortiment om bezoekers naar je fysieke locatie te trekken. Een webshop is gericht op online verkoop. Beide kunnen ook gecombineerd worden.",
      },
      {
        question:
          "Kan ik later een webshop toevoegen aan mijn retailwebsite?",
        answer:
          "Absoluut. We bouwen je website zo dat een webshop-module later naadloos kan worden toegevoegd. Zo groei je mee met je ambities zonder alles opnieuw te hoeven bouwen.",
      },
      {
        question: "Hoe trek ik meer klanten naar mijn winkel via mijn website?",
        answer:
          "Met lokale SEO, Google Bedrijfsprofiel optimalisatie en gerichte content. We zorgen dat je winkel bovenaan staat wanneer klanten in de buurt zoeken naar jouw producten of diensten.",
      },
      {
        question: "Wat kost een website voor mijn winkel?",
        answer:
          "Een professionele retailwebsite begint vanaf €1.500. De exacte prijs hangt af van de gewenste functionaliteiten zoals productcatalogus, click & collect en eventuele webshop-integratie.",
      },
      {
        question: "Kan ik zelf mijn producten en acties bijwerken?",
        answer:
          "Ja, via een gebruiksvriendelijk CMS kun je zelf producten toevoegen, foto's uploaden en acties beheren. We leren je hoe het werkt en bieden support wanneer nodig.",
      },
      {
        question: "Werken jullie met meerdere vestigingen?",
        answer:
          "Ja, we bouwen multi-locatie websites met aparte pagina's per vestiging. Elke locatie krijgt eigen openingstijden, contactgegevens en Google Maps integratie.",
      },
    ],
    seoKeywords: [
      "website retail",
      "website winkel laten maken",
      "retailwebsite",
      "website voor winkels",
    ],
    gerelateerdeIndustries: ["horeca"],
  },
  {
    slug: "zorg",
    naam: "Zorg",
    urlPrefix: "website-voor",
    heroTitel: "Website voor de Zorgsector",
    heroSubtitel: "Vertrouwen opbouwen en patiënten online bereiken",
    beschrijving:
      "Voor zorgverleners — van tandartsen tot fysiotherapeuten, van huisartsen tot psychologen — is een professionele website essentieel. Patiënten zoeken online naar zorgverleners en beoordelen op basis van je website of ze een afspraak willen maken. Een website die vertrouwen wekt en eenvoudig afspraken laat maken, is onmisbaar.",
    uitdagingen: [
      "Patiënten verwachten online afspraken en actuele informatie",
      "Vertrouwen en professionaliteit moeten direct overkomen",
      "AVG/privacy-compliance is essentieel in de zorgsector",
      "Wachttijden en beschikbaarheid moeten transparant zijn",
    ],
    oplossingen: [
      {
        icon: "CalendarCheck",
        title: "Online Afspraken",
        description:
          "Patiënten plannen zelf een afspraak via je website. Integratie met populaire afspraaksystemen en agendakoppelingen.",
      },
      {
        icon: "Shield",
        title: "AVG-Compliant",
        description:
          "Jouw website voldoet aan alle privacy-eisen. Veilige formulieren, cookiebeleid en privacyverklaring op orde.",
      },
      {
        icon: "Heart",
        title: "Vertrouwenwekkend Design",
        description:
          "Rustig, professioneel design dat vertrouwen wekt. Met teamfoto's, behandelinformatie en certificeringen.",
      },
      {
        icon: "FileText",
        title: "Behandelinformatie",
        description:
          "Heldere pagina's per behandeling of specialisme. Patiënten weten precies wat ze kunnen verwachten.",
      },
      {
        icon: "MapPin",
        title: "Lokale Vindbaarheid",
        description:
          "Gevonden worden wanneer patiënten zoeken op 'tandarts in de buurt' of 'fysiotherapeut [stad]'.",
      },
      {
        icon: "Accessibility",
        title: "Toegankelijkheid",
        description:
          "Een website die voor iedereen bruikbaar is. WCAG-richtlijnen voor toegankelijkheid worden gevolgd.",
      },
    ],
    voorbeeldFuncties: [
      "Online afspraaksysteem",
      "Behandelingen overzicht",
      "Team & specialisten pagina",
      "AVG-compliant contactformulier",
      "Google Maps met routebeschrijving",
      "Wachttijden & beschikbaarheid",
      "Patiënteninformatie / downloads",
      "Certificeringen & keurmerken",
    ],
    faq: [
      {
        question: "Voldoet de website aan de AVG/privacywetgeving?",
        answer:
          "Absoluut. We bouwen je website volledig AVG-compliant: veilige formulieren, SSL-certificaat, cookiebeleid en privacyverklaring. Geen patiëntgegevens worden opgeslagen zonder toestemming.",
      },
      {
        question:
          "Welke afspraaksystemen kunnen gekoppeld worden?",
        answer:
          "We integreren met populaire systemen zoals Doctena, ZorgDomein, Timify en Google Calendar. Ook een eigen afspraakformulier met bevestigingsmail is mogelijk.",
      },
      {
        question: "Wat kost een website voor mijn praktijk?",
        answer:
          "Een professionele zorgwebsite begint vanaf €1.500. Afhankelijk van het aantal behandelpagina's, afspraakinintegratie en eventuele patiëntportaal-functionaliteit kan de prijs variëren.",
      },
      {
        question: "Kan ik zelf behandelinformatie aanpassen?",
        answer:
          "Ja, via een gebruiksvriendelijk CMS kun je zelf teksten, foto's en behandelinformatie bijwerken. We zorgen dat het systeem intuïtief werkt voor jou en je team.",
      },
      {
        question: "Is de website geschikt voor meerdere vestigingen?",
        answer:
          "Ja, we bouwen websites die meerdere praktijklocaties ondersteunen. Elke vestiging krijgt een eigen pagina met adres, openingstijden en teamleden.",
      },
      {
        question: "Hoe help je met het aantrekken van nieuwe patiënten?",
        answer:
          "Met lokale SEO, Google Bedrijfsprofiel optimalisatie en gerichte content voor veelgezochte behandelingen. Zo word je gevonden door patiënten die actief zoeken naar zorg in jouw regio.",
      },
    ],
    seoKeywords: [
      "website zorg",
      "website tandarts",
      "website fysiotherapeut",
      "website huisarts",
      "zorgwebsite laten maken",
    ],
    gerelateerdeIndustries: ["coaches"],
  },
  {
    slug: "bouw",
    naam: "Bouw",
    urlPrefix: "website-voor",
    heroTitel: "Website voor de Bouwsector",
    heroSubtitel: "Meer opdrachten binnenhalen met een professionele website",
    beschrijving:
      "Voor aannemers, bouwbedrijven en klussenbedrijven is een professionele website het visitekaartje dat vertrouwen wekt. Potentiële klanten zoeken online naar betrouwbare bouwbedrijven en beoordelen op basis van je website, portfolio en reviews of ze contact opnemen.",
    uitdagingen: [
      "Klanten zoeken online naar aannemers en vergelijken op basis van websites",
      "Een sterk portfolio met projectfoto's is essentieel voor vertrouwen",
      "Offerte-aanvragen moeten laagdrempelig en eenvoudig zijn",
      "Referenties en reviews van eerdere opdrachtgevers zijn doorslaggevend",
    ],
    oplossingen: [
      {
        icon: "Building2",
        title: "Project Portfolio",
        description:
          "Een visueel portfolio met voor- en na-foto's van je projecten. Laat zien wat je kunt en overtuig nieuwe opdrachtgevers.",
      },
      {
        icon: "FileText",
        title: "Offerte Aanvragen",
        description:
          "Een eenvoudig offerteformulier waarmee potentiële klanten snel en laagdrempelig een aanvraag kunnen doen.",
      },
      {
        icon: "Star",
        title: "Reviews & Referenties",
        description:
          "Toon reviews van tevreden opdrachtgevers. Sociale bewijskracht die nieuwe klanten overtuigt van jouw kwaliteit.",
      },
      {
        icon: "Wrench",
        title: "Diensten Overzicht",
        description:
          "Helder overzicht van je specialisaties: verbouwingen, nieuwbouw, dakwerk, installatie of onderhoud.",
      },
      {
        icon: "MapPin",
        title: "Werkgebied",
        description:
          "Toon je werkgebied op een kaart. Klanten zien direct of je in hun regio actief bent.",
      },
      {
        icon: "Shield",
        title: "Certificeringen",
        description:
          "Toon je certificeringen, keurmerken en verzekeringen. Vertrouwen opbouwen met professionele legitimatie.",
      },
    ],
    voorbeeldFuncties: [
      "Project portfolio met foto's",
      "Offerte-aanvraag formulier",
      "Diensten & specialisaties",
      "Klantreviews & referenties",
      "Werkgebied met kaart",
      "Certificeringen & keurmerken",
      "Over ons & team pagina",
      "Blog met bouwtips",
    ],
    faq: [
      {
        question: "Wat kost een website voor mijn bouwbedrijf?",
        answer:
          "Een professionele bouwwebsite begint vanaf €1.500. De prijs hangt af van het aantal pagina's, de omvang van je portfolio en eventuele extra functionaliteiten zoals een offertemodule.",
      },
      {
        question: "Kan ik zelf projecten en foto's toevoegen?",
        answer:
          "Ja, via een gebruiksvriendelijk CMS kun je zelf nieuwe projecten toevoegen, foto's uploaden en beschrijvingen aanpassen. Na oplevering ontvang je een handleiding.",
      },
      {
        question: "Hoe help je mij meer opdrachten binnenhalen?",
        answer:
          "Met lokale SEO word je gevonden wanneer potentiële klanten zoeken op 'aannemer in [stad]'. Daarnaast helpen een sterk portfolio, reviews en een laagdrempelig offerteformulier bij het converteren van bezoekers naar leads.",
      },
      {
        question: "Maken jullie ook websites voor ZZP'ers in de bouw?",
        answer:
          "Absoluut. We maken websites voor zowel grote bouwbedrijven als zelfstandige aannemers en klussenbedrijven. De aanpak past zich aan aan jouw schaal en behoeften.",
      },
      {
        question: "Kan ik Google Reviews op mijn website tonen?",
        answer:
          "Ja, we integreren jouw Google Reviews automatisch op je website. Nieuwe reviews verschijnen direct, wat vertrouwen opbouwt bij potentiële opdrachtgevers.",
      },
      {
        question: "Is de website geschikt voor het tonen van voor- en na-foto's?",
        answer:
          "Zeker. We bouwen een portfolio-sectie met voor- en na-foto's, projectbeschrijvingen en eventueel klantquotes. Dit is een van de krachtigste elementen voor bouwbedrijven.",
      },
    ],
    seoKeywords: [
      "website bouwbedrijf",
      "website aannemer",
      "website klussenbedrijf",
      "bouwwebsite laten maken",
    ],
    gerelateerdeIndustries: ["retail"],
  },
  {
    slug: "coaches",
    naam: "Coaches & Trainers",
    urlPrefix: "website-voor",
    heroTitel: "Website voor Coaches & Trainers",
    heroSubtitel: "Meer cliënten aantrekken en je expertise online uitstralen",
    beschrijving:
      "Als coach, trainer of consultant is jouw persoonlijke merk alles. Een professionele website laat zien wie je bent, wat je doet en waarom cliënten voor jou moeten kiezen. Het is je online praktijk — 24/7 bereikbaar voor potentiële cliënten.",
    uitdagingen: [
      "Je persoonlijke merk en expertise moeten online overkomen",
      "Potentiële cliënten willen social proof: testimonials en resultaten",
      "Online boekingen en kennismakingsgesprekken moeten eenvoudig zijn",
      "Content marketing (blogs, video's) is cruciaal voor autoriteitsopbouw",
    ],
    oplossingen: [
      {
        icon: "User",
        title: "Persoonlijk Merk",
        description:
          "Een website die jouw unieke aanpak, visie en persoonlijkheid uitstraalt. Authentiek en professioneel.",
      },
      {
        icon: "CalendarCheck",
        title: "Online Boekingen",
        description:
          "Integratie met Calendly of je eigen boekingssysteem. Cliënten plannen zelf een kennismakingsgesprek.",
      },
      {
        icon: "MessageSquare",
        title: "Testimonials",
        description:
          "Krachtige testimonials van tevreden cliënten. Met foto's en resultaten die jouw waarde bewijzen.",
      },
      {
        icon: "BookOpen",
        title: "Aanbod & Programma's",
        description:
          "Helder overzicht van je coaching trajecten, workshops en programma's. Met beschrijvingen die aanspreken.",
      },
      {
        icon: "Video",
        title: "Video & Media",
        description:
          "Integratie van video's, podcasts en webinars. Laat potentiële cliënten kennismaken met je stijl.",
      },
      {
        icon: "FileText",
        title: "Blog & Content",
        description:
          "Een blog waar je expertise deelt. Artikelen die waarde bieden én je vindbaarheid in Google vergroten.",
      },
    ],
    voorbeeldFuncties: [
      "Online boekingssysteem (Calendly)",
      "Coaching trajecten & programma's",
      "Testimonials & succesverhalen",
      "Blog / kennisbank",
      "Video integratie",
      "Nieuwsbrief / freebie download",
      "Over mij pagina met persoonlijk verhaal",
      "Social media koppelingen",
    ],
    faq: [
      {
        question: "Wat kost een website voor een coach?",
        answer:
          "Een professionele coachwebsite begint vanaf €1.500. De prijs is afhankelijk van het aantal pagina's, de integratie van boekingssystemen en eventuele extra's zoals een blog of videosectie.",
      },
      {
        question: "Kan ik online boekingen ontvangen via mijn website?",
        answer:
          "Ja, we integreren Calendly of een vergelijkbaar boekingssysteem zodat potentiële cliënten direct een kennismakingsgesprek of sessie kunnen boeken.",
      },
      {
        question: "Hoe onderscheidt mijn website zich van andere coaches?",
        answer:
          "We focussen op jouw unieke verhaal en aanpak. Met professioneel design, authentieke content en sterke testimonials creëren we een website die jouw persoonlijke merk versterkt.",
      },
      {
        question: "Kan ik een gratis e-book of freebie aanbieden via mijn website?",
        answer:
          "Ja, we bouwen een download-sectie of pop-up voor je freebie met e-mailcollectie. Ideaal voor het opbouwen van je mailinglijst en het aantrekken van leads.",
      },
      {
        question: "Hebben jullie ervaring met websites voor coaches?",
        answer:
          "Ja, we hebben ervaring met het bouwen van websites voor coaches, trainers en consultants. We begrijpen het belang van personal branding en leadgeneratie in deze sector.",
      },
      {
        question: "Kan ik zelf blogs en content plaatsen?",
        answer:
          "Absoluut. Via een CMS kun je zelf blogartikelen schrijven en publiceren. Content marketing is essentieel voor coaches — het bouwt autoriteit op en trekt potentiële cliënten aan via Google.",
      },
    ],
    seoKeywords: [
      "website coach",
      "website trainer",
      "website consultant",
      "coachwebsite laten maken",
    ],
    gerelateerdeIndustries: ["zorg"],
  },
];

export const webshopIndustries: Industry[] = [
  {
    slug: "mode",
    naam: "Mode & Fashion",
    urlPrefix: "webshop-voor",
    heroTitel: "Webshop voor Mode & Fashion",
    heroSubtitel: "Verkoop kleding online met een webshop die converteert",
    beschrijving:
      "De mode-industrie draait om visuele impact en een naadloze winkelervaring. Een professionele mode-webshop presenteert je collectie op een manier die inspireert en converteert. Van lookbooks tot size guides — alles draait om de klant verleiden tot aankoop.",
    uitdagingen: [
      "Mode-klanten verwachten een visueel verbluffende winkelervaring",
      "Maattabellen, kleurvarianten en seizoenscollecties vereisen flexibel productbeheer",
      "Retourpercentages zijn hoog — een goede maatgids en productfotografie zijn essentieel",
      "Concurrentie met grote modeplatformen als Zalando en ASOS",
    ],
    oplossingen: [
      {
        icon: "Palette",
        title: "Visueel Design",
        description:
          "Een verbluffend design dat je collectie tot leven brengt. Lookbooks, campagnebeelden en productfoto's centraal.",
      },
      {
        icon: "Ruler",
        title: "Maattabellen",
        description:
          "Interactieve maatgidsen die klanten helpen de juiste maat te kiezen. Minder retouren, meer tevreden klanten.",
      },
      {
        icon: "Layers",
        title: "Collectiebeheer",
        description:
          "Eenvoudig beheer van seizoenscollecties, kleuren, maten en varianten. Alles overzichtelijk georganiseerd.",
      },
      {
        icon: "CreditCard",
        title: "Veilig Betalen",
        description:
          "Alle populaire betaalmethoden: iDEAL, creditcard, Klarna en PayPal. Veilig en vertrouwd.",
      },
      {
        icon: "RotateCcw",
        title: "Retourbeleid",
        description:
          "Een helder retourproces geïntegreerd in je webshop. Klanten weten precies waar ze aan toe zijn.",
      },
      {
        icon: "Instagram",
        title: "Social Commerce",
        description:
          "Koppeling met Instagram Shopping en Facebook Shop. Verkoop direct via social media.",
      },
    ],
    voorbeeldFuncties: [
      "Lookbook / campagne pagina's",
      "Maattabellen & size guides",
      "Kleur- en maatvarianten",
      "Wishlist / verlanglijstje",
      "Instagram Shopping integratie",
      "Seizoenscollecties beheer",
      "Retourmodule",
      "Nieuwsbrief met nieuwe collectie alerts",
    ],
    faq: [
      {
        question: "Wat kost een mode-webshop?",
        answer:
          "Een professionele mode-webshop begint vanaf €2.500. De prijs hangt af van het aantal producten, gewenste integraties (Instagram Shopping, Klarna) en de complexiteit van het design.",
      },
      {
        question: "Kan ik zelf producten en collecties beheren?",
        answer:
          "Ja, via een gebruiksvriendelijk CMS beheer je zelf je producten, prijzen, maten en voorraad. Nieuwe collecties toevoegen is eenvoudig en snel.",
      },
      {
        question: "Hoe ga je om met maattabellen en varianten?",
        answer:
          "We bouwen een flexibel systeem voor maten, kleuren en andere varianten. Inclusief interactieve maatgidsen die klanten helpen de juiste maat te kiezen, wat retouren vermindert.",
      },
      {
        question: "Kan ik koppelen met Instagram Shopping?",
        answer:
          "Ja, we integreren je webshop met Instagram Shopping en Facebook Shop zodat je producten direct via social media kunt verkopen. Dit vergroot je bereik enorm.",
      },
      {
        question: "Hoe concurreer ik met grote modeplatformen?",
        answer:
          "Door je te focussen op je niche, persoonlijke service en merkidentiteit. Een eigen webshop geeft je volledige controle over je merk, klantdata en marges — iets dat marktplaatsen niet bieden.",
      },
      {
        question: "Bieden jullie ook fotografie en styling advies?",
        answer:
          "We adviseren graag over productfotografie en kunnen je doorverwijzen naar gespecialiseerde mode-fotografen. Goede foto's zijn de basis van een succesvolle mode-webshop.",
      },
    ],
    seoKeywords: [
      "webshop mode",
      "webshop kleding",
      "fashion webshop laten maken",
      "mode webshop",
    ],
    gerelateerdeIndustries: ["retail"],
  },
];

export function getWebsiteIndustry(slug: string): Industry | undefined {
  return websiteIndustries.find((i) => i.slug === slug);
}

export function getWebshopIndustry(slug: string): Industry | undefined {
  return webshopIndustries.find((i) => i.slug === slug);
}

export function getAllWebsiteIndustrySlugs(): string[] {
  return websiteIndustries.map((i) => i.slug);
}

export function getAllWebshopIndustrySlugs(): string[] {
  return webshopIndustries.map((i) => i.slug);
}
