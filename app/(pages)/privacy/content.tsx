"use client";

import { motion } from "motion/react";

const sections = [
  {
    title: "1. Wie zijn wij",
    content:
      "AK Web Solutions is een webontwikkelingsbedrijf gevestigd in Baarn, Nederland. Wij zijn verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in dit privacybeleid. Contactgegevens: info@akwebsolutions.nl.",
  },
  {
    title: "2. Welke gegevens verzamelen wij",
    content:
      "Wij verzamelen de volgende persoonsgegevens wanneer je ons contactformulier invult: je naam, e-mailadres en het bericht dat je verstuurt. Daarnaast verzamelen wij automatisch geanonimiseerde gebruiksgegevens via cookies voor het verbeteren van onze website.",
  },
  {
    title: "3. Waarom verzamelen wij deze gegevens",
    content:
      "Wij verwerken je persoonsgegevens voor de volgende doelen: het beantwoorden van je vragen of verzoeken via het contactformulier, het verbeteren van onze website en diensten, en het voldoen aan wettelijke verplichtingen.",
  },
  {
    title: "4. Bewaartermijn",
    content:
      "Wij bewaren je persoonsgegevens niet langer dan strikt noodzakelijk is om de doelen te realiseren waarvoor je gegevens worden verzameld. Contactformulier gegevens worden maximaal 12 maanden bewaard.",
  },
  {
    title: "5. Delen met derden",
    content:
      "Wij delen je persoonsgegevens alleen met derden als dit noodzakelijk is voor de uitvoering van onze diensten of om te voldoen aan wettelijke verplichtingen. Wij gebruiken Resend voor het verwerken van e-mails via ons contactformulier. Met deze verwerker hebben wij een verwerkersovereenkomst.",
  },
  {
    title: "6. Cookies",
    content:
      "Onze website maakt gebruik van cookies. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen in de browser van je computer, tablet of smartphone. Wij gebruiken functionele cookies om de website goed te laten functioneren. Voor meer informatie, zie ons Cookiebeleid.",
  },
  {
    title: "7. Jouw rechten",
    content:
      "Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heb je het recht om bezwaar te maken tegen de verwerking van je persoonsgegevens en heb je het recht op gegevensoverdraagbaarheid. Je kunt een verzoek tot inzage, correctie, verwijdering of gegevensoverdracht sturen naar info@akwebsolutions.nl.",
  },
  {
    title: "8. Beveiliging",
    content:
      "AK Web Solutions neemt de bescherming van je gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Onze website maakt gebruik van een SSL-certificaat om een beveiligde verbinding te garanderen.",
  },
  {
    title: "9. Wijzigingen",
    content:
      "AK Web Solutions behoudt zich het recht voor om wijzigingen aan te brengen in dit privacybeleid. Het is aan te raden om dit privacybeleid regelmatig te raadplegen, zodat je van deze wijzigingen op de hoogte bent.",
  },
];

export function PrivacyContent() {
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
            Privacy{" "}
            <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
              Policy
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
