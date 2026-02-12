"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Building2,
  TrendingUp,
  BarChart3,
  Globe,
  Search,
  Shield,
  Zap,
  Users,
  Settings,
  Link2,
  Gauge,
  Layers,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const challenges = [
  {
    icon: Users,
    title: "Concurrentie van grotere bedrijven",
    description:
      "Grote bedrijven domineren de online markt met grote budgetten. Een professionele website stelt jou in staat om op gelijk niveau te concurreren en je unieke waarde te tonen.",
  },
  {
    icon: Layers,
    title: "Digitale transformatie",
    description:
      "De overstap naar digitaal kan overweldigend zijn. Wij begeleiden je stap voor stap zodat je bedrijf klaar is voor de toekomst, zonder gedoe.",
  },
  {
    icon: BarChart3,
    title: "Beperkt budget efficient inzetten",
    description:
      "Elke euro telt als MKB-ondernemer. Wij zorgen dat je investering in een website maximaal rendement oplevert met slimme oplossingen en schaalbare technologie.",
  },
  {
    icon: Globe,
    title: "Online klanten aantrekken en vasthouden",
    description:
      "Zonder sterke online aanwezigheid loop je klanten mis. Een professionele website zorgt dat je gevonden wordt en bezoekers converteert naar klanten.",
  },
];

const features = [
  {
    icon: Building2,
    title: "Professioneel design",
    description:
      "Een website die jouw merkidentiteit versterkt. Professioneel, betrouwbaar en herkenbaar — zodat klanten direct vertrouwen hebben in jouw bedrijf.",
  },
  {
    icon: Settings,
    title: "CMS voor zelfbeheer",
    description:
      "Pas content eenvoudig zelf aan zonder developer. Teksten wijzigen, afbeeldingen toevoegen of pagina's aanpassen — jij hebt de controle.",
  },
  {
    icon: Search,
    title: "SEO-optimalisatie",
    description:
      "Gevonden worden door je doelgroep in Google. Technische SEO, content optimalisatie en structured data zijn standaard inbegrepen.",
  },
  {
    icon: Layers,
    title: "Schaalbaarheid",
    description:
      "Een website die meegroeit met je bedrijf. Van 5 naar 50 pagina's, van brochure-site naar platform — zonder opnieuw te hoeven beginnen.",
  },
  {
    icon: Link2,
    title: "Integraties",
    description:
      "Koppel je website met CRM, email marketing, analytics en meer. Automatiseer processen en houd alles overzichtelijk op een plek.",
  },
  {
    icon: Gauge,
    title: "Snelheid & veiligheid",
    description:
      "90+ PageSpeed score, SSL-certificaat en optimale beveiliging. Een snelle, veilige website scoort beter in Google en wekt vertrouwen.",
  },
];

const growthPillars = [
  {
    icon: TrendingUp,
    metric: "Meer Verkeer",
    title: "SEO + content strategie",
    description:
      "Door een combinatie van technische SEO en een doordachte content strategie trek je structureel meer bezoekers naar je website. Organisch verkeer groeit maand na maand.",
  },
  {
    icon: BarChart3,
    metric: "Meer Leads",
    title: "Conversie-optimalisatie + CTA's",
    description:
      "Strategisch geplaatste call-to-actions, contactformulieren en duidelijke navigatie zorgen ervoor dat bezoekers de volgende stap zetten. Meer bezoekers worden leads.",
  },
  {
    icon: Users,
    metric: "Meer Klanten",
    title: "Vertrouwen + professionaliteit",
    description:
      "Een professionele uitstraling, reviews, cases en een heldere boodschap overtuigen leads om klant te worden. Jouw website werkt 24/7 als je beste verkoper.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Intake & strategie",
    description:
      "We beginnen met een uitgebreid gesprek over jouw bedrijf, doelgroep en ambities. Op basis hiervan stellen we een strategie op die past bij jouw MKB. Wat zijn je doelen? Wie wil je bereiken? Hoe onderscheid je je van de concurrentie?",
  },
  {
    step: "02",
    title: "Ontwerp & feedback",
    description:
      "Je ontvangt een uniek ontwerp dat aansluit bij jouw merkidentiteit. We werken samen aan het design totdat het perfect is. Jouw input is essentieel — we bouwen dit samen.",
  },
  {
    step: "03",
    title: "Ontwikkeling & integraties",
    description:
      "We bouwen je website met de nieuwste technologieen. CMS-integratie, SEO-optimalisatie, koppelingen met je CRM of email marketing — alles wordt professioneel opgezet.",
  },
  {
    step: "04",
    title: "Lancering & groei",
    description:
      "Na uitgebreid testen gaat je website live. Maar daar stopt het niet: we helpen je met doorlopende optimalisatie, content updates en groeistrategieen om je online succes te vergroten.",
  },
];

const faqs = [
  {
    question: "Wat is het verschil tussen een gewone website en een MKB website?",
    answer:
      "Een MKB website is specifiek gebouwd met de behoeften van het midden- en kleinbedrijf in gedachten. Dit betekent schaalbaarheid (meegroeiend met je bedrijf), integratiemogelijkheden (CRM, email marketing), CMS voor zelfbeheer en een focus op leadgeneratie en conversie. Een standaard website mist vaak deze zakelijke functionaliteiten.",
  },
  {
    question: "Ik heb al een website, kan die worden verbeterd?",
    answer:
      "Absoluut. We kunnen je bestaande website analyseren en kijken wat er verbeterd kan worden. Soms is een redesign de beste optie, soms volstaat het om specifieke onderdelen te optimaliseren zoals snelheid, SEO of de gebruikerservaring. We adviseren altijd eerlijk wat de beste aanpak is voor jouw situatie.",
  },
  {
    question: "Welke CMS-opties zijn er beschikbaar?",
    answer:
      "We werken met verschillende CMS-oplossingen afhankelijk van jouw behoeften. Van headless CMS-systemen zoals Sanity en Strapi (voor maximale flexibiliteit en snelheid) tot gebruiksvriendelijke oplossingen zoals WordPress. We adviseren welk systeem het beste past bij jouw situatie en technische kennis.",
  },
  {
    question: "Welke integraties zijn mogelijk?",
    answer:
      "Vrijwel elke integratie is mogelijk. Denk aan CRM-systemen (HubSpot, Salesforce), email marketing (Mailchimp, ActiveCampaign), analytics (Google Analytics, Hotjar), boekhoudsoftware, planningssystemen en meer. We bespreken tijdens de intake welke koppelingen voor jouw bedrijf waardevol zijn.",
  },
  {
    question: "Hoe lang duurt het om een MKB website te bouwen?",
    answer:
      "De doorlooptijd voor een MKB website is gemiddeld 4 tot 8 weken, afhankelijk van de complexiteit en het aantal integraties. Een eenvoudige bedrijfswebsite kan sneller, terwijl een uitgebreid platform met meerdere koppelingen meer tijd vraagt. We geven altijd een realistische planning tijdens de intake.",
  },
  {
    question: "Wat kost een professionele MKB website?",
    answer:
      "De kosten hangen af van jouw specifieke wensen, het aantal pagina's, integraties en functionaliteiten. Neem contact op voor een vrijblijvende offerte. We denken graag mee over een oplossing die past bij jouw budget en ambities.",
  },
];

export function WebsiteMkbContent() {
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
              <Building2 className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Website voor MKB
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Website voor het{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                MKB
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Professionele, schaalbare websites speciaal voor het midden- en
              kleinbedrijf. Gebouwd om te groeien, geoptimaliseerd voor Google
              en ontworpen om klanten te overtuigen.
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
                  Bekijk ons werk
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MKB Challenges */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Uitdagingen voor het{" "}
              <span className="text-[#B39DDB]">MKB</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Als MKB-ondernemer herken je deze uitdagingen. Een sterke website
              is de oplossing.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <challenge.icon className="h-6 w-6 text-[#B39DDB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {challenge.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What MKB Website Needs */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Wat Heeft Jouw MKB Website{" "}
              <span className="text-[#B39DDB]">Nodig?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Een succesvolle MKB website gaat verder dan een mooi design. Dit
              zijn de essentiële bouwstenen.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <feature.icon className="h-6 w-6 text-[#B39DDB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Focus */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Gebouwd om te{" "}
              <span className="text-[#B39DDB]">Groeien</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Jouw website is geen kostenpost, maar een investering. Wij bouwen
              websites die aantoonbaar bijdragen aan de groei van je bedrijf.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3">
            {growthPillars.map((pillar, index) => (
              <motion.div
                key={pillar.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-colors duration-300 hover:border-[#7B4FB5]/30"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#7B4FB5]/30 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <pillar.icon className="h-7 w-7 text-[#B39DDB]" />
                </div>
                <div className="mb-2 text-2xl font-bold text-[#B39DDB]">
                  {pillar.metric}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {pillar.description}
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
                Ons werkproces voor{" "}
                <span className="text-[#B39DDB]">jouw MKB website</span>
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
                <span className="text-[#B39DDB]">MKB websites</span>
              </h2>
              <p className="text-lg text-white/60">
                Antwoorden op de meest gestelde vragen over websites voor het
                midden- en kleinbedrijf.
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
              Klaar om Jouw MKB Online te Laten Groeien?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Neem contact op voor een vrijblijvend gesprek over de
              mogelijkheden voor jouw bedrijf. Samen bespreken we hoe een
              professionele website jouw groei kan versnellen.
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
                  Bekijk ons volledige website aanbod
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
