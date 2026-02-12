"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ArrowRightLeft,
  XCircle,
  Shield,
  Zap,
  Globe,
  Server,
  Search,
  Wrench,
  AlertTriangle,
  FileText,
  Image,
  Link2,
  BarChart3,
  Mail,
  RefreshCw,
  Eye,
  Rocket,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";

const wordpressProblems = [
  {
    icon: Zap,
    title: "Trage Laadtijden",
    description:
      "WordPress websites zijn gemiddeld 2-5 seconden langzaam door zware PHP-rendering, onnodige database queries en opgeblazen themes. Elke seconde vertraging kost je 7% conversie.",
  },
  {
    icon: Shield,
    title: "Beveiligingsproblemen",
    description:
      "WordPress is verantwoordelijk voor 90% van alle gehackte CMS-websites. Verouderde plugins, themes en de bekende wp-admin login vormen een constant beveiligingsrisico.",
  },
  {
    icon: Wrench,
    title: "Plugin Afhankelijkheid",
    description:
      "Voor elke functionaliteit heb je een plugin nodig. Plugins conflicteren met elkaar, vertragen je site en stoppen soms zonder waarschuwing na updates.",
  },
  {
    icon: Server,
    title: "Hoge Hostingkosten",
    description:
      "WordPress vereist PHP-hosting met databases, wat al snel \u20AC10-50 per maand kost. Bij meer verkeer heb je duurdere hosting nodig om je site draaiende te houden.",
  },
  {
    icon: RefreshCw,
    title: "Eindeloze Updates",
    description:
      "WordPress core, themes en plugins moeten constant bijgewerkt worden. Een gemiste update kan je site kwetsbaar maken of zelfs volledig laten crashen.",
  },
];

const comparisonItems = [
  {
    category: "Laadsnelheid",
    wordpress: "2-5 seconden",
    nextjs: "< 1 seconde",
  },
  {
    category: "PageSpeed Score",
    wordpress: "40-60",
    nextjs: "90-100",
  },
  {
    category: "Beveiliging",
    wordpress: "Plugins = kwetsbaarheden",
    nextjs: "Geen plugins, geen risico",
  },
  {
    category: "Hosting",
    wordpress: "\u20AC10-50/maand",
    nextjs: "\u20AC0 (Vercel gratis tier)",
  },
  {
    category: "SEO",
    wordpress: "Plugins nodig (Yoast)",
    nextjs: "Ingebouwde SEO optimalisatie",
  },
  {
    category: "Onderhoud",
    wordpress: "Wekelijks updates nodig",
    nextjs: "Minimaal onderhoud",
  },
];

const migrationSteps = [
  {
    step: "01",
    title: "Audit Huidige Site",
    description:
      "Ik analyseer je huidige WordPress website grondig: alle pagina's, content, afbeeldingen, URL-structuur, SEO rankings, plugins en functionaliteiten. Zo weet ik precies wat er gemigreerd moet worden en waar de kansen liggen voor verbetering.",
  },
  {
    step: "02",
    title: "Content Export",
    description:
      "Alle content wordt zorgvuldig ge\u00EBxporteerd uit WordPress: teksten, afbeeldingen, metadata, categoriestructuur en meer. Niets gaat verloren. Ik maak een volledige backup zodat je altijd kunt terugvallen op de originele data.",
  },
  {
    step: "03",
    title: "Design & Development",
    description:
      "Je website wordt opnieuw opgebouwd in Next.js met een modern, snel en SEO-geoptimaliseerd design. Alle content wordt overgezet en waar nodig verbeterd. Het resultaat is een website die er beter uitziet en vele malen sneller laadt.",
  },
  {
    step: "04",
    title: "URL Mapping & Redirects",
    description:
      "Elke oude URL wordt zorgvuldig gemapt naar de nieuwe structuur. 301 redirects zorgen ervoor dat je geen SEO-waarde verliest en dat bezoekers met oude links automatisch op de juiste pagina terechtkomen.",
  },
  {
    step: "05",
    title: "Lancering & Monitoring",
    description:
      "Na uitgebreid testen lanceren we de nieuwe website. Ik monitor de eerste weken intensief op technische fouten, 404-pagina's, SEO rankings en laadsnelheden. Eventuele problemen worden direct opgelost.",
  },
];

const migratedItems = [
  { icon: FileText, label: "Alle content & teksten" },
  { icon: Image, label: "Afbeeldingen & media" },
  { icon: Search, label: "SEO rankings behouden" },
  { icon: Link2, label: "URL structuur" },
  { icon: ArrowRightLeft, label: "301 Redirects" },
  { icon: Mail, label: "Contactformulieren" },
  { icon: BarChart3, label: "Analytics & tracking" },
];

const faqs = [
  {
    question: "Hoe lang duurt een WordPress naar Next.js migratie?",
    answer:
      "De doorlooptijd hangt af van de omvang van je website. Een standaard bedrijfswebsite met 10-20 pagina's kan binnen 2-4 weken gemigreerd worden. Grotere websites met veel content, een blog of webshop functionaliteit kunnen 4-8 weken duren. Tijdens het intakegesprek geef ik een realistische planning.",
  },
  {
    question: "Wat kost een WordPress migratie?",
    answer:
      "De kosten zijn afhankelijk van de complexiteit en omvang van je huidige website. Neem contact op voor een vrijblijvende offerte. Ik bekijk je huidige site en geef een eerlijk prijsvoorstel op maat, zonder verborgen kosten.",
  },
  {
    question: "Verlies ik mijn SEO rankings bij een migratie?",
    answer:
      "Nee, mits de migratie correct wordt uitgevoerd. Ik zet 301 redirects in voor alle URL's, behoud je meta titles en descriptions, en zorg dat de content structuur intact blijft. In de meeste gevallen verbeteren de rankings zelfs doordat Next.js websites sneller laden en technisch beter scoren.",
  },
  {
    question: "Raak ik content kwijt tijdens de migratie?",
    answer:
      "Absoluut niet. Alle content wordt zorgvuldig ge\u00EBxporteerd en overgezet. Ik maak vooraf een volledige backup van je WordPress site. Teksten, afbeeldingen, metadata, alles wordt meegenomen naar de nieuwe website. Je kunt de WordPress site ook nog even online houden als extra vangnet.",
  },
  {
    question: "Kan ik na de migratie nog zelf content aanpassen?",
    answer:
      "Ja, er zijn meerdere opties. Ik kan een headless CMS koppelen (zoals Sanity of Strapi) waarmee je net zo makkelijk content beheert als in WordPress. Ook kan ik een op maat gemaakte beheersoplossing bouwen. Je hoeft geen technische kennis te hebben om je website bij te werken.",
  },
  {
    question: "Bieden jullie ondersteuning na de migratie?",
    answer:
      "Ja, na de lancering bied ik een monitoringperiode waarin ik de website nauwlettend in de gaten houd. Eventuele problemen worden direct opgelost. Daarnaast bied ik onderhoudspakketten aan voor doorlopende ondersteuning, updates en optimalisaties.",
  },
];

export function WordpressMigratieContent() {
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
              <ArrowRightLeft className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                WordPress &rarr; Next.js
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              WordPress naar Next.js{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                Migratie
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Stap over van je trage, kwetsbare WordPress site naar een
              razendsnelle, veilige en moderne Next.js website. Zonder
              dataverlies, zonder SEO-verlies.
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
                  Gratis migratieadvies
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

      {/* Problem Section: Waarom Weg van WordPress? */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Waarom weg van{" "}
              <span className="text-[#B39DDB]">WordPress?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              WordPress was ooit de standaard, maar de wereld van het web is
              veranderd. Dit zijn de problemen waar je dagelijks tegenaan loopt.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wordpressProblems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-6 transition-colors duration-300 hover:border-red-500/30 hover:bg-red-500/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                  <problem.icon className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {problem.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              WordPress vs.{" "}
              <span className="text-[#B39DDB]">Next.js</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Zie het verschil op een rij. Dit is wat je wint door over te
              stappen.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            {/* Table header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 grid grid-cols-3 gap-4 px-4"
            >
              <div className="text-sm font-semibold uppercase tracking-wider text-white/40">
                Categorie
              </div>
              <div className="text-center text-sm font-semibold uppercase tracking-wider text-red-400">
                WordPress
              </div>
              <div className="text-center text-sm font-semibold uppercase tracking-wider text-[#B39DDB]">
                Next.js
              </div>
            </motion.div>

            {/* Table rows */}
            {comparisonItems.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="mb-3 grid grid-cols-3 gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-[#7B4FB5]/30"
              >
                <div className="flex items-center font-semibold text-white">
                  {item.category}
                </div>
                <div className="flex items-center justify-center gap-2 text-center text-red-400/80">
                  <XCircle className="hidden h-4 w-4 shrink-0 sm:block" />
                  <span className="text-sm">{item.wordpress}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-center text-[#B39DDB]">
                  <CheckCircle2 className="hidden h-4 w-4 shrink-0 sm:block" />
                  <span className="text-sm">{item.nextjs}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Het migratie{" "}
                <span className="text-[#B39DDB]">proces</span>
              </h2>
              <p className="mb-12 max-w-2xl text-lg text-white/60">
                Een gestructureerd proces zorgt voor een vlekkeloze overgang
                zonder verrassingen.
              </p>
            </motion.div>

            <div className="space-y-8">
              {migrationSteps.map((item, index) => (
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
                    {index < migrationSteps.length - 1 && (
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

      {/* What Gets Migrated */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Wat wordt er{" "}
                <span className="text-[#B39DDB]">meegenomen?</span>
              </h2>
              <p className="mb-12 max-w-2xl text-lg text-white/60">
                Alles van je huidige website wordt zorgvuldig overgezet naar
                de nieuwe Next.js omgeving. Niets gaat verloren.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {migratedItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-[#7B4FB5]/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                    <item.icon className="h-5 w-5 text-green-400" />
                  </div>
                  <span className="text-lg font-medium text-white">
                    {item.label}
                  </span>
                  <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-green-400" />
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
                <span className="text-[#B39DDB]">migratie</span>
              </h2>
              <p className="text-lg text-white/60">
                Antwoorden op de meest gestelde vragen over het migreren van
                WordPress naar Next.js.
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
                Een migratie is vaak het perfecte moment om je website naar
                een hoger niveau te tillen. Bekijk deze aanvullende diensten:
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
                href="/diensten/website-redesign"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <RefreshCw className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  Website Redesign
                </h3>
                <p className="text-sm text-white/50">
                  Moderniseer je bestaande website
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
                  Hoger ranken na je migratie
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
              Klaar om WordPress Achter Je te Laten?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Neem contact op voor een vrijblijvend gesprek over de migratie
              van je WordPress website naar Next.js. Ik bekijk je huidige site
              en geef eerlijk advies.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
                >
                  Neem contact op
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
