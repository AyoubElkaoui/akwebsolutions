"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Layers,
  BarChart3,
  Database,
  Cloud,
  Lock,
  Zap,
  Clock,
  Users,
  Workflow,
  Globe,
  Search,
  ShoppingCart,
  MessageSquare,
  Star,
  Server,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const solutions = [
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description:
      "Overzichtelijke dashboards die je bedrijfsdata visualiseren. Real-time inzichten in KPI's, omzet, klantgedrag en operationele metrics. Alle data die je nodig hebt op een plek.",
  },
  {
    icon: Users,
    title: "CRM Systemen",
    description:
      "Een CRM op maat dat perfect aansluit bij jouw verkoopproces. Klantbeheer, pipeline management, geautomatiseerde follow-ups en integraties met je bestaande tools.",
  },
  {
    icon: Server,
    title: "API Development",
    description:
      "Robuuste API's die je systemen met elkaar verbinden. REST en GraphQL API's voor data-uitwisseling tussen applicaties, externe services en mobiele apps.",
  },
  {
    icon: Clock,
    title: "Tijdregistratie & Planning",
    description:
      "Custom systemen voor het bijhouden van uren, projectplanning en resource management. Geautomatiseerde rapportages en facturatie-integraties.",
  },
  {
    icon: Workflow,
    title: "Voorraadbeheer",
    description:
      "Inventaris management systemen die je voorraad in real-time bijhouden. Automatische meldingen bij lage voorraad, inkooporders en multi-locatie beheer.",
  },
  {
    icon: Cloud,
    title: "Cloud Applicaties",
    description:
      "Schaalbare cloud-gebaseerde applicaties die overal toegankelijk zijn. Van interne tools tot klantgerichte portalen, gebouwd voor groei en betrouwbaarheid.",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", desc: "React framework" },
      { name: "React", desc: "UI library" },
      { name: "TypeScript", desc: "Type-safe code" },
      { name: "Tailwind CSS", desc: "Styling" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", desc: "Server runtime" },
      { name: "PostgreSQL", desc: "Database" },
      { name: "Redis", desc: "Caching & queues" },
      { name: "Prisma", desc: "ORM" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Vercel", desc: "Hosting & CDN" },
      { name: "AWS", desc: "Cloud services" },
      { name: "Docker", desc: "Containerization" },
      { name: "GitHub Actions", desc: "CI/CD" },
    ],
  },
];

const faqs = [
  {
    question: "Wat kost maatwerk software?",
    answer:
      "Maatwerk software is een investering die sterk varieert afhankelijk van de complexiteit. Een eenvoudig dashboard of intern tool begint vanaf €5.000. Complexere applicaties met meerdere gebruikersrollen, integraties en geavanceerde functionaliteiten liggen tussen €10.000 en €50.000+. Ik werk met een uurtarief van €85 excl. BTW en maak altijd een gedetailleerde scoping en offerte zodat je precies weet wat de investering is.",
  },
  {
    question: "Hoe lang duurt de ontwikkeling van maatwerk software?",
    answer:
      "Een eenvoudig intern tool of dashboard kan in 4-6 weken gebouwd worden. Complexere applicaties met meerdere modules kosten 2-4 maanden. Ik werk in sprints van 2 weken, zodat je regelmatig werkende onderdelen ziet en kunt testen. Zo houden we de doorlooptijd beheersbaar en kun je tussentijds bijsturen.",
  },
  {
    question: "Kan maatwerk software gekoppeld worden aan bestaande systemen?",
    answer:
      "Ja, integratie met bestaande systemen is een van mijn specialiteiten. Ik koppel met boekhoudsoftware (Exact, Twinfield), e-mailmarketing (Mailchimp, ActiveCampaign), betaalsystemen (Mollie, Stripe), en vrijwel elk systeem dat een API biedt. Als er geen API beschikbaar is, zoek ik naar alternatieve integratiemogelijkheden.",
  },
  {
    question: "Wie beheert de software na oplevering?",
    answer:
      "Na oplevering kun je kiezen uit verschillende supportopties. Ik bied onderhoudspakketten aan voor bugfixes, updates en kleine aanpassingen. Ook train ik je team zodat jullie de dagelijkse beheer zelf kunnen doen. De broncode is altijd van jou en volledig gedocumenteerd, zodat je nooit afhankelijk bent van mij.",
  },
  {
    question: "Is de software schaalbaar als mijn bedrijf groeit?",
    answer:
      "Absoluut. Ik ontwerp software met schaalbaarheid als kernprincipe. Door gebruik te maken van moderne cloud-architectuur, microservices en horizontale schaalbaarheid kan je applicatie moeiteloos meegroeien. Of je nu 10 of 10.000 gebruikers hebt, de performance blijft consistent.",
  },
  {
    question: "Hoe wordt de data beveiligd?",
    answer:
      "Beveiliging is geen afterthought maar een fundament van elk project. Ik implementeer encryptie (at rest en in transit), role-based access control, input validatie, SQL injection preventie en regelmatige security audits. Alle applicaties voldoen aan de AVG/GDPR-richtlijnen. Gevoelige data wordt versleuteld opgeslagen en back-ups worden automatisch gemaakt.",
  },
  {
    question: "Werk je alleen of heb je een team?",
    answer:
      "Ik werk als zelfstandig freelance developer (ZZP). Dit betekent dat je altijd direct met mij communiceert — geen projectmanagers of tussenpersonen. Voor grotere projecten schakel ik indien nodig specialisten in uit mijn netwerk, maar ik blijf altijd je vaste aanspreekpunt en eindverantwoordelijke.",
  },
];

export function MaatwerkSoftwareContent() {
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
              <Layers className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Maatwerk Software
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Software op Maat <span className="text-[#B39DDB]">die Werkt</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Ik ontwikkel maatwerk software en custom web applicaties die
              perfect aansluiten bij jouw bedrijfsprocessen. Van dashboards en
              CRM systemen tot API&apos;s en automatiseringen — oplossingen die
              je bedrijf efficienter en winstgevender maken.
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
                  Bespreek je project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Bekijk mijn projecten
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When You Need Custom Software */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Wanneer heb je{" "}
                <span className="text-[#B39DDB]">maatwerk software</span> nodig?
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
                Standaard software zoals Excel, Google Sheets of een
                off-the-shelf CRM werkt prima — tot het moment dat jouw
                bedrijfsprocessen te uniek worden voor generieke oplossingen. Je
                merkt het wanneer je{" "}
                <strong className="text-white">
                  data kopieert tussen systemen
                </strong>
                , wanneer je team{" "}
                <strong className="text-white">workarounds verzint</strong> om
                beperkingen heen, of wanneer je{" "}
                <strong className="text-white">cruciale functies mist</strong>{" "}
                die je bedrijf nodig heeft.
              </p>
              <p>
                Maatwerk software lost deze problemen definitief op. In plaats
                van jouw werkwijze aan te passen aan de software, pas ik de
                software aan op jouw werkwijze. Het resultaat: minder handmatig
                werk, minder fouten, snellere processen en uiteindelijk meer
                winst.
              </p>
              <p>
                Als freelance developer lever ik maatwerk software zonder de
                overhead van een groot softwarebedrijf. Je communiceert direct
                met de developer die je software bouwt — geen projectmanagers,
                geen vertalingslagen. Dit bespaart tijd, geld en frustratie.
              </p>
            </motion.div>

            {/* Pain points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="mb-6 text-xl font-bold text-white">
                Herkenbaar? Dan is maatwerk software de oplossing:
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Je kopieert data handmatig tussen systemen",
                  "Je team werkt met omslachtige Excel bestanden",
                  "Bestaande software mist cruciale functies",
                  "Je betaalt voor features die je niet gebruikt",
                  "Processen kosten te veel tijd door handmatig werk",
                  "Je hebt geen real-time inzicht in je data",
                  "Klanten of medewerkers klagen over gebruiksgemak",
                  "Je kunt niet schalen met je huidige tools",
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                    <span className="text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Wat ik <span className="text-[#B39DDB]">voor je bouw</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Van interne tools tot klantgerichte applicaties — ik bouw software
              die jouw specifieke probleem oplost.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <solution.icon className="h-6 w-6 text-[#B39DDB]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {solution.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Mijn <span className="text-[#B39DDB]">technologie stack</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/60">
                Ik werk met bewezen, moderne technologieen die zorgen voor
                snelle, veilige en schaalbare software.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3">
              {techStack.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#B39DDB]">
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between"
                      >
                        <span className="font-medium text-white">
                          {item.name}
                        </span>
                        <span className="text-sm text-white/40">
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: Clockd */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-[#7B4FB5]/30 bg-white/[0.03] p-8 sm:p-10"
            >
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#7B4FB5]/20 px-3 py-1 text-xs font-semibold text-[#B39DDB]">
                <Star className="h-3 w-3" />
                Project Spotlight
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">Clockd</h2>
              <p className="mb-6 text-lg text-white/60 leading-relaxed">
                Voor Clockd heb ik een custom tijdregistratie systeem
                ontwikkeld. De applicatie stelt teams in staat om uren te
                registreren per project en klant, met real-time dashboards voor
                managers en geautomatiseerde rapportages. Het systeem integreert
                met bestaande boekhoudsoftware voor naadloze facturatie en biedt
                inzicht in projectrentabiliteit, teamcapaciteit en
                budgetbewaking.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Type", value: "Web Applicatie" },
                  { label: "Stack", value: "Next.js, PostgreSQL, Redis" },
                  { label: "Features", value: "Dashboards, API, Rapportages" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-sm text-white/40">{item.label}</div>
                    <div className="font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 text-white hover:bg-white/10"
                  >
                    Bekijk alle projecten
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security & Scalability */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Veiligheid &{" "}
                <span className="text-[#B39DDB]">schaalbaarheid</span>
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
                Bij maatwerk software zijn veiligheid en schaalbaarheid geen
                optionele features — het zijn fundamentele vereisten. Elke
                applicatie die ik bouw is ontworpen met{" "}
                <strong className="text-white">security by design</strong>:
                beveiliging is ingebouwd vanaf het eerste moment, niet achteraf
                toegevoegd.
              </p>
              <p>
                Ik implementeer meerdere beveiligingslagen: encryptie van data
                in transit en at rest, role-based access control (RBAC), input
                validatie en sanitisatie, CSRF-bescherming en regelmatige
                dependency audits. Alle applicaties voldoen aan de
                AVG/GDPR-richtlijnen.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <Lock className="mb-4 h-8 w-8 text-[#B39DDB]" />
                <h3 className="mb-3 text-xl font-bold text-white">
                  Beveiliging
                </h3>
                <ul className="space-y-2">
                  {[
                    "End-to-end encryptie",
                    "Role-based access control",
                    "AVG/GDPR compliant",
                    "Automatische security audits",
                    "Beveiligde API endpoints",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B39DDB]" />
                      <span className="text-sm text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <Zap className="mb-4 h-8 w-8 text-[#B39DDB]" />
                <h3 className="mb-3 text-xl font-bold text-white">
                  Schaalbaarheid
                </h3>
                <ul className="space-y-2">
                  {[
                    "Cloud-native architectuur",
                    "Horizontale schaalbaarheid",
                    "Database optimalisatie",
                    "Caching strategieen (Redis)",
                    "Auto-scaling bij pieken",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B39DDB]" />
                      <span className="text-sm text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
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
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Hoe ik maatwerk software{" "}
                <span className="text-[#B39DDB]">ontwikkel</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/60">
                Een gestructureerd proces dat zorgt voor software die perfect
                aansluit bij jouw behoeften.
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Scoping",
                  description:
                    "We starten met het in kaart brengen van je bedrijfsprocessen, pijnpunten en doelen. Ik stel de juiste vragen om te begrijpen wat je echt nodig hebt — niet wat je denkt nodig te hebben. Het resultaat is een helder scopedocument met functionele eisen en een realistische planning.",
                },
                {
                  step: "02",
                  title: "Architectuur & Design",
                  description:
                    "Op basis van de scope ontwerp ik de technische architectuur en gebruikersinterface. Je ziet wireframes en prototypes voordat ik begin met bouwen. Zo weet je precies hoe de software eruit gaat zien en werken.",
                },
                {
                  step: "03",
                  title: "Agile Development",
                  description:
                    "Ik bouw in sprints van 2 weken. Na elke sprint lever ik werkende software op die je kunt testen en feedback op kunt geven. Zo bouwen we stap voor stap aan je oplossing, met ruimte voor bijsturing en nieuwe inzichten.",
                },
                {
                  step: "04",
                  title: "Testing & Deployment",
                  description:
                    "Uitgebreide tests op functionaliteit, performance, beveiliging en gebruiksvriendelijkheid. Deployment via CI/CD pipelines voor betrouwbare, geautomatiseerde releases. Na de lancering monitor ik de applicatie en sta ik klaar voor support.",
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
                Investering in{" "}
                <span className="text-[#B39DDB]">maatwerk software</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-[#7B4FB5]/30 bg-white/[0.03] p-8 sm:p-10"
            >
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-[#B39DDB]">
                  Vanaf €5.000
                </span>
              </div>
              <p className="mb-6 text-lg text-white/70 leading-relaxed">
                De investering voor maatwerk software hangt sterk af van de
                complexiteit en omvang van je project. Een intern dashboard is
                een andere investering dan een volledig CRM systeem met meerdere
                integraties. Ik werk op basis van een uurtarief van €85 excl.
                BTW en maak altijd een gedetailleerde scoping vooraf.
              </p>
              <div className="mb-8 space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Indicatie per projecttype:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Intern dashboard of tool: €5.000 - €15.000",
                    "CRM systeem op maat: €10.000 - €30.000",
                    "Complex platform met meerdere modules: €20.000 - €50.000+",
                    "API development & integraties: €3.000 - €10.000",
                    "Onderhoud & support: vanaf €500/maand",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-white/50">
                Ik maak altijd een{" "}
                <strong className="text-white">
                  vrijblijvende scoping en offerte
                </strong>{" "}
                zodat je precies weet wat de investering is voordat we starten.
                Geen verrassingen achteraf.
              </p>
            </motion.div>
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
                Meer nodig dan alleen{" "}
                <span className="text-[#B39DDB]">software</span>?
              </h2>
              <p className="mb-8 text-lg text-white/60 leading-relaxed">
                Maatwerk software werkt het beste in combinatie met een sterke
                online aanwezigheid. Bekijk mijn andere diensten:
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
                  Professionele websites op maat
                </p>
              </Link>
              <Link
                href="/diensten/seo-optimalisatie"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Search className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">SEO Optimalisatie</h3>
                <p className="text-sm text-white/50">
                  Hoger in Google met technische SEO
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
                  E-commerce die converteert
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
                <span className="text-[#B39DDB]">maatwerk software</span>
              </h2>
              <p className="text-lg text-white/60">
                Antwoorden op de meest gestelde vragen over software op maat
                laten ontwikkelen.
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
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
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
            <MessageSquare className="mx-auto mb-6 h-12 w-12 text-[#B39DDB]" />
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Heb je een idee voor maatwerk software?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Laten we je idee bespreken in een vrijblijvend gesprek. Ik denk
              mee over de beste aanpak, technologie en maak een realistische
              inschatting van de investering.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
                >
                  Bespreek je project
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
