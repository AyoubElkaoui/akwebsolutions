"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Target,
  FileText,
  Megaphone,
  Calendar,
  Zap,
  Users,
  BarChart3,
  Smartphone,
  MousePointerClick,
  MessageSquare,
  Globe,
  Search,
  Eye,
  SplitSquareVertical,
  Gauge,
  Link2,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const landingPageTypes = [
  {
    icon: FileText,
    title: "Lead Generation",
    description:
      "Verzamel waardevolle leads met een formulier, e-book download of gratis consult aanvraag. Ideaal voor dienstverleners en B2B-bedrijven die hun klantenbestand willen laten groeien.",
  },
  {
    icon: Megaphone,
    title: "Product / Dienst",
    description:
      "Lanceer een nieuw product of promoot een specifieke dienst. Een gerichte pagina die alle voordelen helder communiceert en bezoekers overtuigt om actie te ondernemen.",
  },
  {
    icon: Calendar,
    title: "Evenement",
    description:
      "Genereer aanmeldingen voor je webinar, workshop of evenement. Een strakke pagina met datum, programma en een duidelijk aanmeldformulier.",
  },
  {
    icon: Target,
    title: "Campagne",
    description:
      "Speciaal ontworpen voor Google Ads of social media campagnes. Maximale relevantie tussen advertentie en landingspagina voor de beste Quality Score en laagste kosten per klik.",
  },
];

const conversionElements = [
  {
    icon: MessageSquare,
    title: "Krachtige headline",
    description:
      "Een headline die direct de aandacht pakt en de bezoeker vertelt wat hij krijgt. Helder, beknopt en gericht op het belangrijkste voordeel.",
  },
  {
    icon: Users,
    title: "Sociale bewijskracht",
    description:
      "Testimonials, reviews, logo's van klanten en cijfers die vertrouwen wekken. Bezoekers volgen het gedrag van anderen — laat zien dat je betrouwbaar bent.",
  },
  {
    icon: MousePointerClick,
    title: "Duidelijke CTA",
    description:
      "Een opvallende call-to-action die precies vertelt wat de bezoeker moet doen. Geen verwarring, geen afleiding — een knop die converteert.",
  },
  {
    icon: Gauge,
    title: "Snelle laadtijd",
    description:
      "Elke seconde vertraging kost conversies. Onze landingspagina's laden razendsnel dankzij geoptimaliseerde code en moderne technologie.",
  },
  {
    icon: Smartphone,
    title: "Mobiel-geoptimaliseerd",
    description:
      "Meer dan 60% van het verkeer komt via mobiel. Onze landingspagina's zien er perfect uit en werken vlekkeloos op elk apparaat.",
  },
  {
    icon: SplitSquareVertical,
    title: "A/B test mogelijkheden",
    description:
      "Test verschillende headlines, CTA's en layouts om te ontdekken wat het beste werkt. Data-driven optimalisatie voor maximale conversie.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Doel & doelgroep bepalen",
    description:
      "We starten met het helder definiëren van je doel. Wat wil je bereiken? Leads, verkoop, aanmeldingen? En wie is je doelgroep? Op basis hiervan bepalen we de strategie, tone of voice en het type landingspagina.",
  },
  {
    step: "02",
    title: "Copy & design",
    description:
      "We schrijven overtuigende copy die aansluit bij je doelgroep en ontwerpen een visueel aantrekkelijke pagina. Elke sectie is strategisch opgebouwd om de bezoeker richting de CTA te leiden.",
  },
  {
    step: "03",
    title: "Ontwikkeling & tracking",
    description:
      "De landingspagina wordt gebouwd met snelle, moderne technologie. We implementeren tracking (Google Analytics, Meta Pixel, conversie tracking) zodat je precies weet wat je campagne oplevert.",
  },
  {
    step: "04",
    title: "A/B testen & optimaliseren",
    description:
      "Na lancering monitoren we de prestaties en voeren A/B tests uit. We optimaliseren headlines, CTA's, formulieren en layout op basis van echte data om je conversieratio continu te verbeteren.",
  },
];

const faqs = [
  {
    question: "Wat is precies een landingspagina?",
    answer:
      "Een landingspagina is een op zichzelf staande webpagina die specifiek is ontworpen voor een marketingcampagne of promotie. In tegenstelling tot een homepage heeft een landingspagina maar een doel: de bezoeker een specifieke actie laten ondernemen, zoals een formulier invullen, een product kopen of zich aanmelden voor een evenement.",
  },
  {
    question: "Wat is het verschil tussen een landingspagina en een website?",
    answer:
      "Een website is een verzameling van meerdere pagina's met navigatie, verschillende doelen en veel informatie. Een landingspagina is een enkele pagina met een focus op een actie. Er is geen menu of andere afleiding — alles is gericht op conversie. Een landingspagina is vaak onderdeel van een grotere marketingcampagne en werkt het beste in combinatie met advertenties.",
  },
  {
    question: "Wat heb je van mij nodig om te starten?",
    answer:
      "We hebben nodig: je bedrijfsinformatie en branding (logo, kleuren), het doel van de landingspagina, informatie over je doelgroep, eventuele bestaande content of afbeeldingen, en details over je campagne (Google Ads, social media, etc.). Maak je geen zorgen als je nog niet alles hebt — we helpen je graag met de invulling.",
  },
  {
    question: "Kan ik A/B testen op mijn landingspagina?",
    answer:
      "Ja, absoluut. We bouwen je landingspagina zo dat A/B testen eenvoudig mogelijk is. Je kunt verschillende varianten testen van headlines, CTA-teksten, afbeeldingen, formulierlengtes en meer. We implementeren de benodigde tracking zodat je precies ziet welke variant het beste presteert.",
  },
  {
    question: "Hoe snel kan mijn landingspagina live staan?",
    answer:
      "Een standaard landingspagina kan binnen 1 tot 2 weken live staan, afhankelijk van de complexiteit en de snelheid van feedback. Voor urgente campagnes kunnen we sneller schakelen. We bespreken altijd vooraf een realistische planning die past bij jouw deadline.",
  },
  {
    question: "Wat kost een landingspagina?",
    answer:
      "De kosten hangen af van de complexiteit, het aantal secties, integraties en of er A/B test varianten nodig zijn. Neem contact op voor een vrijblijvende offerte. We denken graag mee over een oplossing die past bij jouw budget en campagnedoelen.",
  },
];

export function LandingspaginaContent() {
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
              <Target className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Landingspagina
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                Landingspagina
              </span>{" "}
              Laten Maken
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Bezoekers omzetten in klanten met een pagina die converteert.
              Data-driven, razendsnel en mobiel-geoptimaliseerd — gebouwd voor
              maximaal resultaat.
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
                  Neem contact op
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Bekijk voorbeelden
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is a Landing Page */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Wat is een{" "}
                <span className="text-[#B39DDB]">Landingspagina?</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-10 space-y-6 text-lg leading-relaxed text-white/70"
            >
              <p>
                Een landingspagina is een op zichzelf staande webpagina met
                een doel:{" "}
                <strong className="text-white">
                  de bezoeker een specifieke actie laten ondernemen
                </strong>
                . Dit kan een lead formulier zijn, een aankoop, een aanmelding
                of een download. In tegenstelling tot een homepage elimineert
                een landingspagina alle afleiding en stuurt de bezoeker naar
                een enkele call-to-action.
              </p>
            </motion.div>

            {/* Visual comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid gap-6 sm:grid-cols-2"
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Globe className="h-5 w-5 text-white/40" />
                  </div>
                  <h3 className="text-lg font-bold text-white/40">
                    Homepage
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Navigatiemenu met veel opties",
                    "Meerdere doelen en secties",
                    "Links naar andere pagina's",
                    "Afleiding door keuzemogelijkheden",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Eye className="mt-0.5 h-5 w-5 shrink-0 text-white/20" />
                      <span className="text-white/40">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#7B4FB5]/30 bg-white/[0.03] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7B4FB5]/30 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                    <Target className="h-5 w-5 text-[#B39DDB]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#B39DDB]">
                    Landingspagina
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Geen navigatie, geen afleiding",
                    "Een helder doel per pagina",
                    "Een krachtige call-to-action",
                    "Maximale focus op conversie",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Landing Pages */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Soorten{" "}
              <span className="text-[#B39DDB]">Landingspagina&apos;s</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Elk doel vraagt om een ander type landingspagina. Wij bouwen de
              variant die het beste past bij jouw campagne.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {landingPageTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <type.icon className="h-6 w-6 text-[#B39DDB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {type.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Optimization */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              <span className="text-[#B39DDB]">Conversie</span>-Optimalisatie
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Deze zes elementen maken het verschil tussen een bezoeker die
              afhaakt en een bezoeker die converteert.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conversionElements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <element.icon className="h-6 w-6 text-[#B39DDB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {element.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {element.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Van idee naar{" "}
                <span className="text-[#B39DDB]">conversie</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {processSteps.map((item, index) => (
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
                    {index < processSteps.length - 1 && (
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
                <span className="text-[#B39DDB]">landingspagina&apos;s</span>
              </h2>
              <p className="text-lg text-white/60">
                Antwoorden op de meest gestelde vragen over het laten maken
                van een landingspagina.
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
            <Rocket className="mx-auto mb-6 h-12 w-12 text-[#B39DDB]" />
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Klaar voor een Landingspagina die Converteert?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Neem contact op voor een vrijblijvend gesprek. We bespreken je
              campagnedoelen en laten zien hoe een professionele
              landingspagina jouw resultaten kan verbeteren.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
                >
                  Neem contact op voor een offerte
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

            {/* Internal links */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/diensten/website-laten-maken"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Globe className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  Website Laten Maken
                </h3>
                <p className="text-sm text-white/50">
                  Een complete website voor jouw bedrijf
                </p>
              </Link>
              <Link
                href="/diensten/seo-optimalisatie"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Search className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  SEO Optimalisatie
                </h3>
                <p className="text-sm text-white/50">
                  Gevonden worden in Google
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
