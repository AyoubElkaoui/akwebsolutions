"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  RefreshCw,
  AlertTriangle,
  Smartphone,
  TrendingDown,
  Clock,
  Search,
  PenTool,
  Palette,
  Zap,
  Globe,
  Users,
  BarChart3,
  Code2,
  Layout,
  FileSearch,
  Rocket,
  Eye,
  ArrowRightLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";

const warningSigns = [
  {
    icon: Clock,
    title: "Verouderd Design",
    description:
      "Je website ziet eruit alsof hij in 2015 is gemaakt. Bezoekers vormen binnen 0,05 seconden een eerste indruk. Een gedateerd design schrikt potentiele klanten direct af.",
  },
  {
    icon: Zap,
    title: "Trage Laadtijden",
    description:
      "Je website laadt langer dan 3 seconden. 53% van de mobiele bezoekers verlaat een website die langer dan 3 seconden laadt. Snelheid is cruciaal voor conversie en SEO.",
  },
  {
    icon: Smartphone,
    title: "Niet Mobiel-Vriendelijk",
    description:
      "Je website werkt niet goed op telefoons en tablets. Meer dan 60% van het webverkeer komt van mobiele apparaten. Een niet-responsive website verliest het grootste deel van je bezoekers.",
  },
  {
    icon: TrendingDown,
    title: "Lage Conversie",
    description:
      "Bezoekers komen wel op je website maar nemen geen contact op. Een onduidelijke structuur, slechte call-to-actions en verwarrende navigatie kosten je leads en omzet.",
  },
  {
    icon: PenTool,
    title: "Moeilijk Content Aanpassen",
    description:
      "Elke kleine wijziging kost je uren of je moet een developer inhuren. Een modern CMS maakt content beheren zo makkelijk als het typen van een e-mail.",
  },
  {
    icon: Search,
    title: "Slechte SEO Prestaties",
    description:
      "Je website is onvindbaar in Google. Verouderde code, ontbrekende metadata en trage laadtijden zorgen ervoor dat Google je website niet serieus neemt.",
  },
];

const improvements = [
  {
    icon: Palette,
    title: "Modern Design",
    description:
      "Een fris, professioneel design dat aansluit bij je merk en vertrouwen wekt bij bezoekers. Gebaseerd op de nieuwste designtrends en UX best practices.",
  },
  {
    icon: Zap,
    title: "Snellere Laadtijden",
    description:
      "Dankzij Next.js en moderne optimalisatietechnieken laadt je website in minder dan 1 seconde. Dat is 3-5x sneller dan je huidige site.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Je website wordt ontworpen met mobiel als uitgangspunt. Perfect op elk schermformaat, van smartphone tot desktop, zonder concessies.",
  },
  {
    icon: Search,
    title: "Betere SEO",
    description:
      "Schone code, snelle laadtijden, structured data en geoptimaliseerde metadata. Alle technische SEO-eisen worden vanaf het begin meegenomen.",
  },
  {
    icon: Layout,
    title: "Gebruiksvriendelijk CMS",
    description:
      "Een intuitive beheersomgeving waarmee je zelf eenvoudig content kunt aanpassen. Geen technische kennis vereist.",
  },
  {
    icon: BarChart3,
    title: "Hogere Conversie",
    description:
      "Strategisch geplaatste call-to-actions, duidelijke navigatie en een overtuigende structuur die bezoekers omzet in klanten.",
  },
];

const redesignSteps = [
  {
    step: "01",
    title: "Audit Huidige Website",
    description:
      "Ik analyseer je huidige website grondig: design, content, techniek, SEO en gebruikservaring. Je ontvangt een helder rapport met alle bevindingen en concrete verbeterpunten. Zo weten we precies waar de kansen liggen.",
  },
  {
    step: "02",
    title: "Strategie & Wireframes",
    description:
      "Op basis van de audit stel ik een redesign strategie op. Ik maak wireframes die de nieuwe structuur en navigatie visualiseren. Samen bepalen we de prioriteiten en doelen voor de nieuwe website.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Het visuele ontwerp wordt uitgewerkt in een modern, on-brand design. Je ziet precies hoe de nieuwe website eruit komt te zien voordat er een regel code geschreven wordt. Feedback wordt direct verwerkt.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "De website wordt gebouwd in Next.js met de nieuwste technologieen. Razendsnelle laadtijden, perfecte responsiveness en schone code. Alle content wordt overgezet en waar nodig verbeterd.",
  },
  {
    step: "05",
    title: "Lancering met Redirects",
    description:
      "Na uitgebreid testen gaat de nieuwe website live. Alle URL-redirects worden ingesteld zodat je geen SEO-waarde verliest. Ik monitor de eerste weken intensief om een vlekkeloze overgang te garanderen.",
  },
];

const stats = [
  {
    value: "3-5x",
    label: "Sneller",
    description: "Gemiddelde snelheidsverbetering",
  },
  {
    value: "90+",
    label: "PageSpeed",
    description: "Score op mobiel en desktop",
  },
  {
    value: "40%",
    label: "Meer Leads",
    description: "Gemiddelde toename in conversies",
  },
  {
    value: "100%",
    label: "Mobiel-Vriendelijk",
    description: "Perfect op elk apparaat",
  },
];

const faqs = [
  {
    question: "Wanneer is een website redesign nodig?",
    answer:
      "Een redesign is nodig wanneer je website er gedateerd uitziet, traag laadt, niet goed werkt op mobiel, slecht scoort in Google of onvoldoende leads oplevert. Als je website ouder is dan 3-4 jaar, is de kans groot dat een redesign je online resultaten flink kan verbeteren.",
  },
  {
    question: "Wat gebeurt er met mijn huidige content?",
    answer:
      "Alle waardevolle content wordt meegenomen naar de nieuwe website. Teksten, afbeeldingen en metadata worden zorgvuldig overgezet. Waar nodig optimaliseer ik de content voor betere leesbaarheid en SEO. Niets gaat verloren tijdens het redesign proces.",
  },
  {
    question: "Behoud ik mijn SEO rankings tijdens een redesign?",
    answer:
      "Ja, het behouden van SEO rankings is een topprioriteit bij elke redesign. Ik zet 301 redirects in voor alle gewijzigde URL's, behoud meta data en zorg dat de technische SEO-basis sterk is. In de meeste gevallen verbeteren rankings zelfs dankzij betere techniek en snellere laadtijden.",
  },
  {
    question: "Hoe lang duurt een website redesign?",
    answer:
      "Een typisch redesign project duurt 3-6 weken, afhankelijk van de omvang en complexiteit. Een eenvoudige bedrijfswebsite kan in 3 weken klaar zijn, terwijl grotere websites met veel pagina's en functionaliteiten tot 6 weken kunnen duren. Tijdens het intakegesprek geef ik een realistische planning.",
  },
  {
    question: "Wat kost een website redesign?",
    answer:
      "De kosten zijn afhankelijk van de omvang van je huidige website en de gewenste functionaliteiten. Neem contact op voor een vrijblijvende offerte. Ik bekijk je huidige site, bespreek je wensen en maak een eerlijk voorstel op maat, zonder verborgen kosten.",
  },
  {
    question: "Bieden jullie ondersteuning na de lancering?",
    answer:
      "Ja, na de lancering bied ik een monitoringperiode waarin ik de website nauwlettend volg. Eventuele problemen worden direct opgelost. Daarnaast bied ik onderhoudspakketten aan voor doorlopende ondersteuning, security updates, content wijzigingen en prestatie-optimalisaties.",
  },
];

export function WebsiteRedesignContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-32">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="#7B4FB5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2975]/15 via-black to-black" />
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              <RefreshCw className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Website Redesign
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Website{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                Redesign
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Geef je website een moderne uitstraling, betere prestaties en
              meer conversies. Van verouderd naar vooruitstrevend, zonder je
              online aanwezigheid te verliezen.
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
                  Gratis website-audit
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

      {/* Warning Signs Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Wanneer is een redesign{" "}
              <span className="text-[#B39DDB]">nodig?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Herken je een of meer van deze signalen? Dan is het tijd om je
              website een upgrade te geven.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {warningSigns.map((sign, index) => (
              <motion.div
                key={sign.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-6 transition-colors duration-300 hover:border-amber-500/30 hover:bg-amber-500/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
                  <sign.icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {sign.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {sign.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Changes Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Wat verandert er{" "}
              <span className="text-[#B39DDB]">na een redesign?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Een redesign is meer dan een nieuw kleurtje. Dit is wat je
              website erbij wint.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {improvements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <item.icon className="h-6 w-6 text-[#B39DDB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesign Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Het redesign{" "}
                <span className="text-[#B39DDB]">proces</span>
              </h2>
              <p className="mb-12 max-w-2xl text-lg text-white/60">
                Een bewezen aanpak die zorgt voor een vlekkeloos resultaat,
                van eerste analyse tot succesvolle lancering.
              </p>
            </motion.div>

            <div className="space-y-8">
              {redesignSteps.map((item, index) => (
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
                    {index < redesignSteps.length - 1 && (
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

      {/* Before/After Stats */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Typische{" "}
              <span className="text-[#B39DDB]">verbeteringen</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Dit zijn de gemiddelde resultaten die onze klanten behalen na
              een website redesign.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors duration-300 hover:border-[#7B4FB5]/30"
              >
                <div className="mb-2 text-4xl font-bold text-[#B39DDB]">
                  {stat.value}
                </div>
                <div className="mb-1 text-lg font-semibold text-white">
                  {stat.label}
                </div>
                <div className="text-sm text-white/50">
                  {stat.description}
                </div>
              </motion.div>
            ))}
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
                <span className="text-[#B39DDB]">redesign</span>
              </h2>
              <p className="text-lg text-white/60">
                Antwoorden op de meest gestelde vragen over het redesignen
                van je website.
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
                Gerelateerde{" "}
                <span className="text-[#B39DDB]">diensten</span>
              </h2>
              <p className="mb-8 text-lg text-white/60 leading-relaxed">
                Een redesign combineer je vaak met andere verbeteringen.
                Bekijk deze aanvullende diensten:
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
                  Een compleet nieuwe website in Next.js
                </p>
              </Link>
              <Link
                href="/diensten/wordpress-naar-nextjs-migratie"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <ArrowRightLeft className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  WordPress Migratie
                </h3>
                <p className="text-sm text-white/50">
                  Van WordPress naar Next.js
                </p>
              </Link>
              <Link
                href="/diensten/seo-optimalisatie"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Search className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  SEO Optimalisatie
                </h3>
                <p className="text-sm text-white/50">
                  Hoger ranken na je redesign
                </p>
              </Link>
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
              Klaar voor een Frisse Start?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Neem contact op voor een gratis website-audit. Ik bekijk je
              huidige website en laat zien waar de verbeterkansen liggen.
              Vrijblijvend en zonder verplichtingen.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
                >
                  Gratis website-audit
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
