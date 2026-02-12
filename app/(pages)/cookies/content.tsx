"use client";

import { motion } from "motion/react";

const sections = [
  {
    title: "Wat zijn cookies?",
    content:
      "Cookies zijn kleine tekstbestanden die op je computer, tablet of smartphone worden geplaatst wanneer je onze website bezoekt. Ze worden veel gebruikt om websites effici\u00ebnter te laten werken en om informatie te verstrekken aan de eigenaren van de website.",
  },
  {
    title: "Welke cookies gebruiken wij?",
    content:
      "Wij gebruiken de volgende typen cookies op onze website:\n\n\u2022 Functionele cookies: Deze cookies zijn noodzakelijk voor het goed functioneren van de website. Denk aan het onthouden van je cookievoorkeuren.\n\n\u2022 Analytische cookies: Wij gebruiken geanonimiseerde analytische cookies om inzicht te krijgen in hoe bezoekers onze website gebruiken. Deze informatie helpt ons om de website te verbeteren.",
  },
  {
    title: "Cookies van derden",
    content:
      "Onze website kan cookies bevatten van derde partijen. Dit zijn cookies die worden geplaatst door diensten van derden die op onze website verschijnen. Wij hebben geen controle over deze cookies. Raadpleeg de privacyverklaringen van deze partijen voor meer informatie over hoe zij met cookies omgaan.",
  },
  {
    title: "Cookie-instellingen beheren",
    content:
      "Je kunt je cookievoorkeuren op elk moment aanpassen via de cookie-instellingen onderaan onze website. Daarnaast kun je cookies verwijderen of blokkeren via je browserinstellingen. Houd er rekening mee dat het uitschakelen van cookies de werking van de website kan be\u00efnvloeden.",
  },
  {
    title: "Bewaartermijn",
    content:
      "Functionele cookies worden verwijderd zodra je de browser sluit (sessiecookies). Analytische cookies worden maximaal 26 maanden bewaard. Je cookievoorkeuren worden 12 maanden onthouden.",
  },
  {
    title: "Wijzigingen",
    content:
      "AK Web Solutions kan dit cookiebeleid van tijd tot tijd bijwerken. Wijzigingen worden op deze pagina gepubliceerd. Wij raden je aan om dit beleid regelmatig te raadplegen.",
  },
];

export function CookiesContent() {
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
            Cookie{" "}
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
                <p className="whitespace-pre-line leading-relaxed text-white/60">
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
