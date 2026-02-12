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
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
