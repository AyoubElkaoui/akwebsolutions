"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  FileSearch,
  Target,
  MapPin,
  Gauge,
  Link2,
  FileText,
  MessageSquare,
  Code2,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const seoServices = [
  {
    icon: FileSearch,
    title: "Technische SEO Audit",
    description:
      "Een grondige analyse van de technische staat van je website. Ik controleer crawlbaarheid, indexering, sitemap, robots.txt, canonicals, redirect chains en meer. Je ontvangt een gedetailleerd rapport met concrete verbeterpunten.",
  },
  {
    icon: Target,
    title: "Keyword Research & Strategie",
    description:
      "Ik onderzoek welke zoekwoorden jouw doelgroep gebruikt en waar de kansen liggen. Op basis van zoekvolume, concurrentie en relevantie stel ik een keyword strategie op die gericht is op resultaat.",
  },
  {
    icon: FileText,
    title: "Content Optimalisatie",
    description:
      "Bestaande pagina's worden geoptimaliseerd voor de juiste zoekwoorden. Ik verbeter titels, meta descriptions, headings, interne links en content structuur zodat Google je pagina's beter begrijpt en hoger rankt.",
  },
  {
    icon: Code2,
    title: "Structured Data (Schema.org)",
    description:
      "Ik implementeer structured data zodat Google jouw content beter begrijpt. Dit levert rich snippets op in de zoekresultaten, waardoor je opvalt met sterren, prijzen, FAQ's en meer.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals",
    description:
      "Google beoordeelt websites op snelheid, interactiviteit en visuele stabiliteit. Ik optimaliseer je Core Web Vitals (LCP, INP, CLS) zodat je website voldoet aan Google's eisen en hoger rankt.",
  },
  {
    icon: Link2,
    title: "Linkbuilding Strategie",
    description:
      "Een plan voor het opbouwen van kwalitatieve backlinks die je domeinautoriteit versterken. Ik focus op relevante, natuurlijke links die duurzaam bijdragen aan je rankings.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Voor lokale bedrijven optimaliseer ik je Google Bedrijfsprofiel, local citations en locatiegerichte content. Zo word je beter gevonden door klanten in jouw regio.",
  },
];

const results = [
  {
    metric: "Top 3",
    label: "Google Rankings",
    description: "voor relevante zoekwoorden",
  },
  {
    metric: "150%+",
    label: "Organisch Verkeer",
    description: "toename binnen 6 maanden",
  },
  {
    metric: "95+",
    label: "PageSpeed Score",
    description: "op mobiel en desktop",
  },
  {
    metric: "3x",
    label: "Meer Leads",
    description: "door betere vindbaarheid",
  },
];

const faqs = [
  {
    question: "Hoe lang duurt het voordat SEO resultaat oplevert?",
    answer:
      "SEO is een langetermijnstrategie. De eerste verbeteringen zijn meestal na 2-3 maanden zichtbaar, maar significante resultaten zoals top 3 rankings en flinke verkeerstoename verwacht je na 4-6 maanden. Technische optimalisaties hebben vaak sneller effect dan content-gedreven strategieen. Ik ben transparant over wat je kunt verwachten en geef maandelijks een update over de voortgang.",
  },
  {
    question: "Wat kost SEO optimalisatie?",
    answer:
      "Een eenmalige technische SEO audit begint vanaf €500. Doorlopende SEO begeleiding, inclusief content optimalisatie en monitoring, start vanaf €300 per maand. De exacte kosten hangen af van de omvang van je website, de concurrentie in jouw branche en je doelstellingen. Ik maak altijd een voorstel op maat.",
  },
  {
    question: "Wat is het verschil tussen SEO en SEA (Google Ads)?",
    answer:
      "SEO (zoekmachine optimalisatie) richt zich op organische, niet-betaalde resultaten in Google. Het kost meer tijd om resultaten te zien, maar levert duurzaam verkeer op zonder klikkosten. SEA (Search Engine Advertising) levert direct verkeer via betaalde advertenties, maar stopt zodra je stopt met betalen. De ideale strategie combineert beide: SEA voor direct resultaat en SEO voor duurzame groei.",
  },
  {
    question: "Kan ik zelf aan SEO werken?",
    answer:
      "Basis SEO kun je zelf doen, zoals het schrijven van goede content en het optimaliseren van titels. Maar technische SEO, structured data implementatie, Core Web Vitals optimalisatie en een effectieve linkbuilding strategie vereisen specialistische kennis. Fouten in SEO kunnen je rankings schaden. Ik help je met de technische en strategische kant zodat jij je kunt focussen op je bedrijf.",
  },
  {
    question: "Hoe meet je SEO resultaten?",
    answer:
      "Ik gebruik Google Search Console, Google Analytics en professionele SEO tools zoals Ahrefs. Ik meet keyword rankings, organisch verkeer, klikpercentages (CTR), impressies en conversies. Je ontvangt maandelijks een overzichtelijk rapport met alle metrics en concrete aanbevelingen voor verdere optimalisatie.",
  },
  {
    question: "Is mijn website geschikt voor SEO?",
    answer:
      "Elke website kan geoptimaliseerd worden voor SEO, maar sommige platformen maken het makkelijker dan andere. Websites gebouwd met Next.js (zoals ik bouw) zijn van nature SEO-vriendelijk dankzij server-side rendering en snelle laadtijden. WordPress sites hebben vaak meer technisch werk nodig. Ik begin altijd met een gratis quickscan om te beoordelen waar de kansen liggen.",
  },
  {
    question: "Doe je ook SEO voor webshops?",
    answer:
      "Ja, e-commerce SEO is een van mijn specialisaties. Ik optimaliseer productpagina's, categoriepagina's en de technische structuur van webshops. Dit omvat product schema markup, interne linking structuur, duplicate content preventie en optimalisatie van de zoekervaring binnen je shop. Bekijk ook mijn dienst voor het laten maken van een webshop.",
  },
];

export function SeoOptimalisatieContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2975]/15 via-black to-black" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              <Search className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                SEO Optimalisatie
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hoger in Google met{" "}
              <span className="text-[#B39DDB]">SEO Optimalisatie</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Als SEO specialist uit Baarn help ik bedrijven hoger ranken in
              Google. Met technische SEO, content optimalisatie en een
              doordachte strategie vergroot ik je organische vindbaarheid en
              trek je meer klanten aan.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
                >
                  Gratis SEO quickscan
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Bekijk resultaten
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Waarom SEO optimalisatie{" "}
                <span className="text-[#B39DDB]">onmisbaar</span> is
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg leading-relaxed text-white/70"
            >
              <p>
                Elke dag zoeken miljoenen Nederlanders in Google naar producten
                en diensten. <strong className="text-white">75% van de zoekers klikt nooit verder dan de eerste
                pagina</strong> van de zoekresultaten. Als jouw website niet op pagina 1
                staat, mis je het grootste deel van je potentiele klanten. SEO
                optimalisatie zorgt ervoor dat jouw website gevonden wordt
                wanneer het ertoe doet.
              </p>
              <p>
                In tegenstelling tot betaalde advertenties (Google Ads) levert
                zoekmachine optimalisatie <strong className="text-white">duurzaam, gratis verkeer</strong> op. Eenmaal
                goed geoptimaliseerd, blijft je website bezoekers trekken zonder
                dat je per klik betaalt. Dit maakt SEO op de lange termijn vele
                malen kostenefficienter dan adverteren. Waar Google Ads stopt
                zodra je budget op is, blijft SEO doorwerken.
              </p>
              <p>
                De ROI van SEO is indrukwekkend. Bedrijven die investeren in
                zoekmachine optimalisatie zien gemiddeld een{" "}
                <strong className="text-white">275% rendement</strong> op hun
                investering over een periode van 3 jaar. Dat maakt SEO niet
                alleen een marketingstrategie, maar een van de slimste
                investeringen die je als ondernemer kunt doen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My SEO Approach */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Mijn aanpak als{" "}
                <span className="text-[#B39DDB]">SEO specialist</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg leading-relaxed text-white/70"
            >
              <p>
                Mijn SEO aanpak is gebaseerd op data en bewezen strategieen,
                niet op trucjes of shortcuts. Google wordt steeds slimmer en
                beloont websites die echt waarde bieden aan bezoekers. Ik richt
                me daarom op een holistische benadering die alle aspecten van
                SEO omvat: technisch, inhoudelijk en strategisch.
              </p>
              <p>
                Ik combineer <strong className="text-white">technische SEO</strong> (de basis op orde krijgen),{" "}
                <strong className="text-white">on-page SEO</strong> (content en structuur optimaliseren),{" "}
                <strong className="text-white">off-page SEO</strong> (autoriteit opbouwen via backlinks) en{" "}
                <strong className="text-white">local SEO</strong> (zichtbaarheid in jouw regio vergroten). Door
                deze vier pijlers samen te laten werken, bereik je de beste
                resultaten in de kortste tijd.
              </p>
              <p>
                Als webdeveloper heb ik een uniek voordeel ten opzichte van
                traditionele SEO bureaus: ik kan technische optimalisaties zelf
                implementeren. Geen tussenpersonen, geen miscommunicatie. Van
                Core Web Vitals optimalisatie tot structured data implementatie
                — ik zorg dat alles technisch perfect is.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Mijn SEO{" "}
              <span className="text-[#B39DDB]">diensten</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Van technische audit tot doorlopende optimalisatie — ik bied
              alles wat je nodig hebt om hoger te ranken in Google.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seoServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <service.icon className="h-6 w-6 text-[#B39DDB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Local SEO as featured card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <div className="rounded-2xl border border-[#7B4FB5]/30 bg-white/[0.03] p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <MapPin className="h-7 w-7 text-[#B39DDB]" />
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {seoServices[6].title}
                  </h3>
                  <p className="text-lg text-white/60 leading-relaxed">
                    {seoServices[6].description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Resultaten die ik{" "}
              <span className="text-[#B39DDB]">lever</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              SEO draait om meetbare resultaten. Dit is wat mijn klanten
              gemiddeld bereiken.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors duration-300 hover:border-[#7B4FB5]/30"
              >
                <div className="mb-2 text-4xl font-bold text-[#B39DDB]">
                  {result.metric}
                </div>
                <div className="mb-1 text-lg font-semibold text-white">
                  {result.label}
                </div>
                <div className="text-sm text-white/50">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Hoe ik jouw website{" "}
                <span className="text-[#B39DDB]">hoger laat ranken</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "SEO Audit & Analyse",
                  description:
                    "Ik start met een uitgebreide audit van je huidige website. Technische fouten, content gaps, backlink profiel en concurrentieanalyse. Je ontvangt een helder rapport met alle bevindingen en een prioriteitenlijst.",
                },
                {
                  step: "02",
                  title: "Strategie & Keyword Research",
                  description:
                    "Op basis van de audit stel ik een SEO strategie op. Ik doe uitgebreid keyword research, bepaal welke pagina's prioriteit hebben en maak een content planning voor de komende maanden.",
                },
                {
                  step: "03",
                  title: "Implementatie & Optimalisatie",
                  description:
                    "Ik ga aan de slag met het optimaliseren van je website. Technische fixes, on-page optimalisatie, structured data, content verbetering en interne linking. Alles wordt stap voor stap geimplementeerd.",
                },
                {
                  step: "04",
                  title: "Monitoring & Rapportage",
                  description:
                    "Ik monitor continu je rankings, verkeer en technische gezondheid. Elke maand ontvang je een overzichtelijk rapport met resultaten, inzichten en aanbevelingen voor verdere verbetering.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#7B4FB5]/30 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                      <span className="text-lg font-bold text-[#B39DDB]">
                        {item.step}
                      </span>
                    </div>
                    {index < 3 && (
                      <div className="mt-4 h-full w-px bg-gradient-to-b from-[#7B4FB5]/30 to-transparent" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                SEO pakketten &{" "}
                <span className="text-[#B39DDB]">prijsindicatie</span>
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="mb-2 text-xl font-bold text-white">
                  SEO Audit (eenmalig)
                </h3>
                <div className="mb-4 text-3xl font-bold text-[#B39DDB]">
                  Vanaf €500
                </div>
                <ul className="space-y-2">
                  {[
                    "Technische website analyse",
                    "Keyword research",
                    "Concurrentie analyse",
                    "Gedetailleerd rapport",
                    "Prioriteitenlijst met actiepunten",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-[#7B4FB5]/30 bg-white/[0.03] p-8"
              >
                <h3 className="mb-2 text-xl font-bold text-white">
                  Doorlopende SEO
                </h3>
                <div className="mb-4 text-3xl font-bold text-[#B39DDB]">
                  Vanaf €300/maand
                </div>
                <ul className="space-y-2">
                  {[
                    "Maandelijkse optimalisaties",
                    "Content strategie & creatie",
                    "Technische monitoring",
                    "Ranking tracking",
                    "Maandelijkse rapportage",
                    "Linkbuilding strategie",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 text-center text-white/50"
            >
              Prijzen zijn exclusief BTW. Ik maak altijd een voorstel op maat
              gebaseerd op jouw specifieke situatie en doelen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
                SEO werkt het beste in combinatie met{" "}
                <span className="text-[#B39DDB]">een sterke website</span>
              </h2>
              <p className="mb-8 text-lg text-white/60 leading-relaxed">
                SEO is het krachtigst wanneer je website technisch perfect is
                gebouwd. Bekijk mijn andere diensten die naadloos aansluiten
                op zoekmachine optimalisatie:
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/diensten/website-laten-maken"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Globe className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  Website Laten Maken
                </h3>
                <p className="text-sm text-white/50">
                  SEO-vriendelijke websites met Next.js
                </p>
              </Link>
              <Link
                href="/diensten/webshop-laten-maken"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <ShoppingCart className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  Webshop Laten Maken
                </h3>
                <p className="text-sm text-white/50">
                  E-commerce met SEO optimalisatie
                </p>
              </Link>
              <Link
                href="/diensten/maatwerk-software"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Code2 className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  Maatwerk Software
                </h3>
                <p className="text-sm text-white/50">
                  Custom web applicaties op maat
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Veelgestelde vragen over{" "}
                <span className="text-[#B39DDB]">SEO</span>
              </h2>
              <p className="text-lg text-white/60">
                Antwoorden op de meest gestelde vragen over zoekmachine
                optimalisatie.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-[#7B4FB5]/30"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <h3 className="pr-4 text-lg font-semibold text-white">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 shrink-0 text-[#B39DDB]" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/20 to-[#7B4FB5]/10 p-8 text-center sm:p-12"
          >
            <TrendingUp className="mx-auto mb-6 h-12 w-12 text-[#B39DDB]" />
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Klaar om hoger te ranken in Google?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Vraag een gratis SEO quickscan aan en ontdek waar de kansen
              liggen voor jouw website. Binnen 48 uur ontvang je mijn eerste
              bevindingen.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
                >
                  Gratis SEO quickscan
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/diensten">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Alle diensten bekijken
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
