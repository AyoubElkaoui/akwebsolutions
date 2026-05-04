export interface Location {
  stad: string;
  slug: string;
  regio: string;
  inwoners: string;
  beschrijving: string;
  nabij: string[];
}

export const locations: Location[] = [
  {
    stad: "Baarn",
    slug: "baarn",
    regio: "Utrecht",
    inwoners: "25.000",
    beschrijving:
      "Als lokaal bedrijf in Baarn begrijpen we de markt als geen ander. We bouwen websites die perfect aansluiten bij het ondernemersklimaat in Baarn en omgeving.",
    nabij: ["Soest", "Eemnes", "Laren", "Hilversum"],
  },
  {
    stad: "Soest",
    slug: "soest",
    regio: "Utrecht",
    inwoners: "47.000",
    beschrijving:
      "Voor ondernemers in Soest bouwen we professionele websites die lokaal scoren in Google. Van Soestdijk tot Soesterberg — wij kennen de regio.",
    nabij: ["Baarn", "Amersfoort", "Soesterberg", "Eemnes"],
  },
  {
    stad: "Eemnes",
    slug: "eemnes",
    regio: "Utrecht",
    inwoners: "9.500",
    beschrijving:
      "Eemnes mag dan compact zijn, de ambities van ondernemers hier zijn groot. Wij bouwen websites die jouw bedrijf in Eemnes op de kaart zetten.",
    nabij: ["Baarn", "Laren", "Blaricum", "Huizen"],
  },
  {
    stad: "Laren",
    slug: "laren",
    regio: "Noord-Holland",
    inwoners: "11.500",
    beschrijving:
      "Laren staat bekend om kwaliteit en stijl. Onze websites voor Larense ondernemers weerspiegelen datzelfde niveau van excellentie.",
    nabij: ["Blaricum", "Hilversum", "Eemnes", "Baarn"],
  },
  {
    stad: "Blaricum",
    slug: "blaricum",
    regio: "Noord-Holland",
    inwoners: "11.000",
    beschrijving:
      "Voor bedrijven in Blaricum bouwen we websites die de exclusiviteit van het dorp uitstralen. Professioneel, snel en vindbaar in Google.",
    nabij: ["Laren", "Huizen", "Eemnes", "Hilversum"],
  },
  {
    stad: "Hilversum",
    slug: "hilversum",
    regio: "Noord-Holland",
    inwoners: "92.000",
    beschrijving:
      "Hilversum is de mediahoofstad van Nederland. Wij bouwen websites die opvallen in deze competitieve markt — snel, modern en SEO-geoptimaliseerd.",
    nabij: ["Laren", "Bussum", "Baarn", "Soest"],
  },
  {
    stad: "Bussum",
    slug: "bussum",
    regio: "Noord-Holland",
    inwoners: "33.000",
    beschrijving:
      "Ondernemers in Bussum verdienen een website die net zo professioneel is als hun diensten. Wij leveren maatwerk dat converteert.",
    nabij: ["Naarden", "Hilversum", "Huizen", "Laren"],
  },
  {
    stad: "Huizen",
    slug: "huizen",
    regio: "Noord-Holland",
    inwoners: "42.000",
    beschrijving:
      "Van de haven tot het centrum — ondernemers in Huizen profiteren van een professionele website die lokale klanten aantrekt.",
    nabij: ["Blaricum", "Bussum", "Naarden", "Almere"],
  },
  {
    stad: "Naarden",
    slug: "naarden",
    regio: "Noord-Holland",
    inwoners: "18.000",
    beschrijving:
      "Het historische Naarden verdient moderne websites. Wij combineren stijl met techniek voor ondernemers in Naarden-Vesting en omgeving.",
    nabij: ["Bussum", "Huizen", "Hilversum", "Almere"],
  },
  {
    stad: "Amersfoort",
    slug: "amersfoort",
    regio: "Utrecht",
    inwoners: "160.000",
    beschrijving:
      "Amersfoort groeit en bloeit. Wij helpen Amersfoortse ondernemers groeien met websites die presteren — van de binnenstad tot Vathorst.",
    nabij: ["Soest", "Baarn", "Leusden", "Bunschoten"],
  },
  {
    stad: "Bunschoten-Spakenburg",
    slug: "bunschoten-spakenburg",
    regio: "Utrecht",
    inwoners: "22.000",
    beschrijving:
      "Voor de hechte ondernemersgemeenschap in Bunschoten-Spakenburg bouwen we websites die lokaal vertrouwen wekken en online klanten aantrekken.",
    nabij: ["Amersfoort", "Eemnes", "Baarn", "Nijkerk"],
  },
  {
    stad: "Nijkerk",
    slug: "nijkerk",
    regio: "Gelderland",
    inwoners: "44.000",
    beschrijving:
      "Nijkerk is een bruisende gemeente met ambitieuze ondernemers. Wij bouwen websites die jouw bedrijf in Nijkerk online laten groeien.",
    nabij: ["Amersfoort", "Bunschoten", "Putten", "Barneveld"],
  },
  {
    stad: "Leusden",
    slug: "leusden",
    regio: "Utrecht",
    inwoners: "31.000",
    beschrijving:
      "Leusden biedt een sterk ondernemersklimaat. Onze websites helpen Leusdense bedrijven zich te onderscheiden en online klanten te winnen.",
    nabij: ["Amersfoort", "Woudenberg", "Baarn", "Soest"],
  },
  {
    stad: "Woudenberg",
    slug: "woudenberg",
    regio: "Utrecht",
    inwoners: "13.500",
    beschrijving:
      "Klein maar fijn — Woudenberg heeft ondernemers die groot denken. Wij bouwen websites die jouw ambities in Woudenberg waarmaken.",
    nabij: ["Leusden", "Scherpenzeel", "Amersfoort", "Baarn"],
  },
  {
    stad: "Soesterberg",
    slug: "soesterberg",
    regio: "Utrecht",
    inwoners: "6.000",
    beschrijving:
      "Soesterberg transformeert en groeit. Voor lokale ondernemers bouwen we professionele websites die meegroeien met de ontwikkelingen.",
    nabij: ["Soest", "Zeist", "Amersfoort", "Baarn"],
  },
  {
    stad: "Utrecht",
    slug: "utrecht",
    regio: "Utrecht",
    inwoners: "375.000",
    beschrijving:
      "Utrecht is een van de snelst groeiende steden van Nederland. Wij bouwen websites die jouw bedrijf laten opvallen in deze competitieve markt — van de Binnenstad tot Leidsche Rijn.",
    nabij: ["Amersfoort", "Zeist", "Nieuwegein", "Houten"],
  },
  {
    stad: "Amsterdam",
    slug: "amsterdam",
    regio: "Noord-Holland",
    inwoners: "930.000",
    beschrijving:
      "Amsterdam is het zakencentrum van Nederland. Wij bouwen snelle, professionele websites die opvallen in de drukste digitale markt van het land — van de Jordaan tot Noord.",
    nabij: ["Almere", "Haarlem", "Amstelveen", "Zaandam"],
  },
  {
    stad: "Den Haag",
    slug: "den-haag",
    regio: "Zuid-Holland",
    inwoners: "560.000",
    beschrijving:
      "Den Haag herbergt duizenden bedrijven, overheidsinstanties en professionals. Wij bouwen websites die autoriteit uitstralen en klanten aantrekken in de stad van vrede en recht.",
    nabij: ["Delft", "Rijswijk", "Leidschendam", "Zoetermeer"],
  },
  {
    stad: "Rotterdam",
    slug: "rotterdam",
    regio: "Zuid-Holland",
    inwoners: "660.000",
    beschrijving:
      "Rotterdam staat voor ambitie, innovatie en no-nonsense. Wij bouwen websites die net zo daadkrachtig zijn als de stad zelf — snel, sterk en resultaatgericht.",
    nabij: ["Dordrecht", "Capelle aan den IJssel", "Schiedam", "Spijkenisse"],
  },
  {
    stad: "Eindhoven",
    slug: "eindhoven",
    regio: "Noord-Brabant",
    inwoners: "240.000",
    beschrijving:
      "Eindhoven is de design- en techhoofstad van Nederland. Voor innovatieve bedrijven in Eindhoven bouwen wij websites die net zo scherp zijn als de Brainport-mentaliteit van de stad.",
    nabij: ["Tilburg", "Helmond", "Veldhoven", "Waalre"],
  },
  {
    stad: "Haarlem",
    slug: "haarlem",
    regio: "Noord-Holland",
    inwoners: "165.000",
    beschrijving:
      "Haarlem combineert historische charme met een bruisend ondernemersklimaat. Wij bouwen websites die jouw bedrijf in Haarlem professioneel presenteren en klanten aantrekken.",
    nabij: ["Amsterdam", "Zaandam", "Heemstede", "Bloemendaal"],
  },
  {
    stad: "Almere",
    slug: "almere",
    regio: "Flevoland",
    inwoners: "220.000",
    beschrijving:
      "Almere groeit als geen andere stad in Nederland. Wij bouwen websites voor de ambitieuze ondernemers van Almere — modern, snel en SEO-sterk.",
    nabij: ["Amsterdam", "Huizen", "Zeewolde", "Lelystad"],
  },
  {
    stad: "Tilburg",
    slug: "tilburg",
    regio: "Noord-Brabant",
    inwoners: "225.000",
    beschrijving:
      "Tilburg is een creatieve en innovatieve stad met een sterk MKB. Wij bouwen websites die jouw bedrijf in Tilburg online laten groeien en meer klanten aantrekken.",
    nabij: ["Eindhoven", "Breda", "Den Bosch", "Waalwijk"],
  },
  {
    stad: "Groningen",
    slug: "groningen",
    regio: "Groningen",
    inwoners: "235.000",
    beschrijving:
      "Groningen is jong, dynamisch en vol energie. Wij bouwen websites voor Groningse ondernemers die hun bedrijf online willen laten groeien in de studentenstad van het noorden.",
    nabij: ["Assen", "Hoogezand", "Winschoten", "Veendam"],
  },
  {
    stad: "Breda",
    slug: "breda",
    regio: "Noord-Brabant",
    inwoners: "185.000",
    beschrijving:
      "Breda heeft een bloeiend ondernemersklimaat en een sterke lokale economie. Wij bouwen professionele websites voor bedrijven in Breda die online willen groeien.",
    nabij: ["Tilburg", "Bergen op Zoom", "Roosendaal", "Etten-Leur"],
  },
  {
    stad: "Nijmegen",
    slug: "nijmegen",
    regio: "Gelderland",
    inwoners: "180.000",
    beschrijving:
      "Nijmegen is de oudste stad van Nederland met een moderne zakelijke uitstraling. Wij bouwen websites die jouw bedrijf in Nijmegen op de kaart zetten.",
    nabij: ["Arnhem", "Wijchen", "Beuningen", "Druten"],
  },
  {
    stad: "Apeldoorn",
    slug: "apeldoorn",
    regio: "Gelderland",
    inwoners: "165.000",
    beschrijving:
      "Apeldoorn heeft een sterk MKB-netwerk en groeiende zakelijke markt. Wij bouwen websites voor Apeldoornse ondernemers die professioneel online aanwezig willen zijn.",
    nabij: ["Deventer", "Zutphen", "Amersfoort", "Ede"],
  },
  {
    stad: "Arnhem",
    slug: "arnhem",
    regio: "Gelderland",
    inwoners: "160.000",
    beschrijving:
      "Arnhem is een creatieve stad met een unieke ligging en sterk ondernemersklimaat. Wij bouwen professionele websites die jouw bedrijf in Arnhem online laten presteren.",
    nabij: ["Nijmegen", "Apeldoorn", "Zevenaar", "Doetinchem"],
  },
  {
    stad: "Enschede",
    slug: "enschede",
    regio: "Overijssel",
    inwoners: "160.000",
    beschrijving:
      "Enschede is een innovatieve stad in Twente met een sterk technologisch ecosysteem. Wij bouwen websites voor Enschedese ondernemers die online willen groeien.",
    nabij: ["Hengelo", "Almelo", "Oldenzaal", "Haaksbergen"],
  },
  {
    stad: "Zaandam",
    slug: "zaandam",
    regio: "Noord-Holland",
    inwoners: "160.000",
    beschrijving:
      "Zaandam is een actieve zakenstad direct naast Amsterdam. Wij bouwen websites voor Zaanse ondernemers die profiteren van de nabijheid van de Randstad.",
    nabij: ["Amsterdam", "Haarlem", "Purmerend", "Landsmeer"],
  },
  {
    stad: "Zoetermeer",
    slug: "zoetermeer",
    regio: "Zuid-Holland",
    inwoners: "130.000",
    beschrijving:
      "Zoetermeer is een moderne stad in de Randstad met veel MKB-bedrijven. Wij bouwen professionele websites voor Zoetermeerse ondernemers die online willen groeien.",
    nabij: ["Den Haag", "Delft", "Leiden", "Gouda"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
