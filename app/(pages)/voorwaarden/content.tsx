"use client";

import { motion } from "motion/react";

const sections = [
  {
    title: "1. Definities",
    content:
      "In deze algemene voorwaarden wordt verstaan onder: Opdrachtnemer: AK Web Solutions, gevestigd te Baarn. Opdrachtgever: de natuurlijke of rechtspersoon die met Opdrachtnemer een overeenkomst aangaat. Overeenkomst: de afspraken tussen Opdrachtnemer en Opdrachtgever over de te leveren diensten.",
  },
  {
    title: "2. Toepasselijkheid",
    content:
      "Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten van AK Web Solutions. Afwijkingen van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk schriftelijk zijn overeengekomen.",
  },
  {
    title: "3. Offertes en aanbiedingen",
    content:
      "Alle offertes en aanbiedingen van AK Web Solutions zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld. Een offerte is geldig voor de in de offerte aangegeven termijn, bij gebreke waarvan de offerte 30 dagen geldig is.",
  },
  {
    title: "4. Uitvoering van de overeenkomst",
    content:
      "AK Web Solutions zal de overeenkomst naar beste inzicht en vermogen en overeenkomstig de eisen van goed vakmanschap uitvoeren. AK Web Solutions heeft het recht bepaalde werkzaamheden door derden te laten verrichten. De oplevering geschiedt in onderling overleg.",
  },
  {
    title: "5. Betaling",
    content:
      "Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen. Bij projecten boven de \u20AC2.500 wordt 50% vooraf gefactureerd en 50% bij oplevering. Alle genoemde prijzen zijn exclusief BTW, tenzij anders vermeld.",
  },
  {
    title: "6. Intellectueel eigendom",
    content:
      "Na volledige betaling van het overeengekomen bedrag worden de eigendomsrechten van het ontwerp en de broncode overgedragen aan de opdrachtgever. AK Web Solutions behoudt het recht om het werk te gebruiken voor promotiedoeleinden, tenzij anders overeengekomen.",
  },
  {
    title: "7. Aansprakelijkheid",
    content:
      "AK Web Solutions is niet aansprakelijk voor schade die het gevolg is van onjuiste of onvolledige informatie verstrekt door de opdrachtgever. De aansprakelijkheid van AK Web Solutions is in alle gevallen beperkt tot het bedrag dat voor de betreffende dienst is betaald.",
  },
  {
    title: "8. Onderhoud en support",
    content:
      "Na oplevering van het project biedt AK Web Solutions een garantieperiode van 30 dagen voor het verhelpen van bugs. Aanvullend onderhoud en support kan worden afgenomen via een separaat onderhoudsabonnement.",
  },
  {
    title: "9. Hosting en domeinnaam",
    content:
      "Tenzij anders overeengekomen, is de opdrachtgever zelf verantwoordelijk voor het afnemen van hosting en domeinnaamregistratie. AK Web Solutions kan hierin adviseren en bemiddelen.",
  },
  {
    title: "10. Toepasselijk recht",
    content:
      "Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Utrecht.",
  },
];

export function VoorwaardenContent() {
  return (
    <section className="relative min-h-screen bg-black pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7B4FB5]/5 via-black to-black" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl"
        >
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Algemene{" "}
            <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
              Voorwaarden
            </span>
          </h1>
          <p className="mb-12 text-white/50">
            Laatst bijgewerkt: februari 2025
          </p>

          <div className="space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h2 className="mb-3 text-xl font-semibold text-white">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-white/60">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
