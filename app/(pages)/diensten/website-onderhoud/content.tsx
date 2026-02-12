"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Wrench,
  Shield,
  Activity,
  Clock,
  FileEdit,
  Server,
  BarChart3,
  Lock,
  Headphones,
  MessageSquare,
  AlertTriangle,
  ArrowUpCircle,
  RefreshCw,
  Globe,
  Code2,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const whyMaintenance = [
  {
    icon: Shield,
    title: "Security Updates",
    description:
      "Beveiligingsupdates worden direct doorgevoerd om je website te beschermen tegen hackers, malware en kwetsbaarheden. Geen enkel risico.",
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    description:
      "Continue monitoring van laadtijden, server responstijden en Core Web Vitals. Problemen worden proactief opgelost voordat je bezoeker er last van heeft.",
  },
  {
    icon: Clock,
    title: "Uptime Garantie",
    description:
      "24/7 uptime monitoring met directe meldingen bij downtime. Zo is jouw website altijd bereikbaar voor klanten en bezoekers.",
  },
  {
    icon: FileEdit,
    title: "Content Updates",
    description:
      "Teksten, afbeeldingen of pagina's moeten worden aangepast? Wij regelen het snel en professioneel, zodat jouw content altijd actueel is.",
  },
];

const includedItems = [
  {
    icon: BarChart3,
    title: "Maandelijkse performance check",
    description:
      "Uitgebreide analyse van snelheid, laadtijden en technische gezondheid van je website.",
  },
  {
    icon: Shield,
    title: "Security updates & patches",
    description:
      "Alle beveiligingsupdates worden direct doorgevoerd om kwetsbaarheden te voorkomen.",
  },
  {
    icon: Server,
    title: "Dagelijkse backups",
    description:
      "Elke dag een volledige backup van je website, zodat je data altijd veilig is.",
  },
  {
    icon: Activity,
    title: "Uptime monitoring (24/7)",
    description:
      "Continue monitoring met directe alerts bij downtime of problemen.",
  },
  {
    icon: Lock,
    title: "SSL-certificaat beheer",
    description:
      "Verlenging en configuratie van je SSL-certificaat voor een veilige verbinding.",
  },
  {
    icon: BarChart3,
    title: "Analytics rapportage",
    description:
      "Maandelijks overzicht van bezoekersstatistieken, trends en aanbevelingen.",
  },
  {
    icon: FileEdit,
    title: "Content updates (op verzoek)",
    description:
      "Teksten, afbeeldingen en pagina-aanpassingen worden snel en zorgvuldig uitgevoerd.",
  },
  {
    icon: Headphones,
    title: "Technische support (via email/chat)",
    description:
      "Snel antwoord op al je technische vragen en problemen via email of chat.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Intake Gesprek",
    description:
      "We bespreken de huidige staat van je website, je wensen en verwachtingen. Ik maak een inventarisatie van wat er nodig is en stel een onderhoud plan op maat samen.",
  },
  {
    step: "02",
    title: "Onderhoud Start",
    description:
      "Na akkoord start het onderhoud direct. Ik voer een eerste grondige check uit, stel monitoring in en zorg dat alles up-to-date en veilig is.",
  },
  {
    step: "03",
    title: "Maandelijkse Rapportage",
    description:
      "Elke maand ontvang je een overzichtelijk rapport met alle uitgevoerde werkzaamheden, performance metrics en aanbevelingen voor verbeteringen.",
  },
];

const responseTimes = [
  {
    icon: AlertTriangle,
    priority: "Kritieke issues",
    time: "< 4 uur",
    description: "Website down, beveiligingslek of dataverlies",
    borderColor: "border-red-500/30",
    bgColor: "from-red-500/20 to-red-500/5",
    textColor: "text-red-400",
  },
  {
    icon: ArrowUpCircle,
    priority: "Hoge prioriteit",
    time: "< 24 uur",
    description: "Functionele fouten, formulieren die niet werken, broken links",
    borderColor: "border-yellow-500/30",
    bgColor: "from-yellow-500/20 to-yellow-500/5",
    textColor: "text-yellow-400",
  },
  {
    icon: RefreshCw,
    priority: "Normale updates",
    time: "< 48 uur",
    description: "Content wijzigingen, kleine aanpassingen, reguliere updates",
    borderColor: "border-[#7B4FB5]/30",
    bgColor: "from-[#3D2975]/20 to-[#7B4FB5]/5",
    textColor: "text-[#B39DDB]",
  },
];

const faqs = [
  {
    question: "Wat gebeurt er als mijn website crasht of gehackt wordt?",
    answer:
      "Bij kritieke issues reageren wij binnen 4 uur. We herstellen je website vanuit de meest recente backup en lossen het onderliggende probleem op. Dankzij dagelijkse backups gaat er minimaal werk verloren. Je wordt direct op de hoogte gebracht van het probleem en de oplossing.",
  },
  {
    question: "Hoeveel content updates zijn inbegrepen per maand?",
    answer:
      "Het aantal inbegrepen content updates hangt af van je onderhoudspakket. Over het algemeen zijn kleine aanpassingen zoals tekst- en afbeeldingswijzigingen inbegrepen. Voor grotere wijzigingen zoals nieuwe pagina's of uitgebreide herstructureringen maken we vooraf een inschatting. Neem contact op om de mogelijkheden te bespreken.",
  },
  {
    question: "Kan ik het onderhoud niet zelf doen?",
    answer:
      "Dat kan, maar het kost tijd en vereist technische kennis. Security patches, server configuratie, performance optimalisatie en backup management zijn specialistisch werk. Een fout kan je website platleggen of kwetsbaar maken. Door het onderhoud uit te besteden bespaar je tijd en weet je zeker dat alles professioneel wordt afgehandeld.",
  },
  {
    question: "Wat als ik al hosting heb?",
    answer:
      "Geen probleem. Wij werken met elke hostingprovider. We kunnen het onderhoud uitvoeren op je huidige hosting, of adviseren over een betere hostingoplossing als dat nodig is. De keuze is altijd aan jou.",
  },
  {
    question: "Hoe lang zit ik vast aan een contract?",
    answer:
      "Ons onderhoud is maandelijks opzegbaar. Je zit nergens aan vast. We geloven dat je bij ons blijft omdat je tevreden bent, niet omdat je vastzit aan een contract. Opzeggen kan op elk moment met een opzegtermijn van een maand.",
  },
  {
    question: "Wat kost website onderhoud?",
    answer:
      "Neem contact op voor tarieven. De kosten zijn afhankelijk van de omvang en complexiteit van je website en het gewenste serviceniveau. We maken altijd een voorstel op maat, zodat je precies betaalt voor wat je nodig hebt.",
  },
];

export function WebsiteOnderhoudContent() {
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
              <Wrench className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Website Onderhoud
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
                Onderhoud & Beheer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Jouw website verdient continue aandacht. Met professioneel
              onderhoud en beheer blijft je website veilig, snel en altijd
              up-to-date. Zodat jij je kunt focussen op wat echt belangrijk
              is: je bedrijf laten groeien.
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
                  Onderhoud bespreken
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Maintenance */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Waarom{" "}
              <span className="text-[#B39DDB]">Website Onderhoud?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Een website bouwen is stap een. Maar zonder goed onderhoud
              veroudert je website snel en loop je risico op beveiligingsproblemen,
              trage laadtijden en verlies van bezoekers.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyMaintenance.map((item, index) => (
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

      {/* What's Included */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Wat is{" "}
              <span className="text-[#B39DDB]">Inbegrepen?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Alles wat je nodig hebt om je website in topconditie te houden,
              gebundeld in een compleet onderhoudspakket.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {includedItems.map((item, index) => (
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
                <h3 className="mb-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Hoe werkt{" "}
                <span className="text-[#B39DDB]">het onderhoud?</span>
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

      {/* SLA / Response Times */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Onze{" "}
              <span className="text-[#B39DDB]">Responstijden</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Snelle reactie wanneer het ertoe doet. Onze SLA garandeert dat
              problemen snel en effectief worden opgelost.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {responseTimes.map((item, index) => (
              <motion.div
                key={item.priority}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl border ${item.borderColor} bg-gradient-to-br ${item.bgColor} p-6 text-center`}
              >
                <div className="mb-4 flex justify-center">
                  <item.icon className={`h-10 w-10 ${item.textColor}`} />
                </div>
                <div className={`mb-2 text-3xl font-bold ${item.textColor}`}>
                  {item.time}
                </div>
                <div className="mb-2 text-lg font-semibold text-white">
                  {item.priority}
                </div>
                <p className="text-sm text-white/50">
                  {item.description}
                </p>
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
                <span className="text-[#B39DDB]">website onderhoud</span>
              </h2>
              <p className="text-lg text-white/60">
                Antwoorden op de meest gestelde vragen over ons onderhoud en
                beheer.
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
                Onderhoud werkt het beste met{" "}
                <span className="text-[#B39DDB]">een sterke website</span>
              </h2>
              <p className="mb-8 text-lg text-white/60 leading-relaxed">
                Heb je nog geen website of is het tijd voor een vernieuwing?
                Bekijk onze andere diensten die perfect aansluiten op
                professioneel onderhoud:
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
                  Professionele websites met Next.js
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
                  Hoger in Google met professionele SEO
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/20 to-[#7B4FB5]/10 p-8 text-center sm:p-12"
          >
            <Wrench className="mx-auto mb-6 h-12 w-12 text-[#B39DDB]" />
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Zorgeloos Online met Professioneel Onderhoud
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Laat het onderhoud van je website aan ons over. Neem contact op
              voor een vrijblijvend gesprek over de mogelijkheden en
              tarieven.
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
              <Link href="/diensten/website-laten-maken">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Website laten maken
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
