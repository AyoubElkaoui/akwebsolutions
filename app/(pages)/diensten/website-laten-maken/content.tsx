"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Globe,
  Zap,
  Search,
  Shield,
  Smartphone,
  BarChart3,
  Code2,
  Palette,
  Clock,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Jouw website ziet er perfect uit op elk apparaat — van smartphone tot desktop. Mobile-first ontworpen zodat bezoekers altijd een optimale ervaring hebben.",
  },
  {
    icon: Search,
    title: "SEO Optimalisatie",
    description:
      "Elke website die ik bouw is geoptimaliseerd voor zoekmachines. Technische SEO, structured data en snelle laadtijden zorgen dat je gevonden wordt in Google.",
  },
  {
    icon: Zap,
    title: "Razendsnel",
    description:
      "Dankzij Next.js en server-side rendering laadt jouw website in milliseconden. Een PageSpeed score van 95+ is de standaard, niet de uitzondering.",
  },
  {
    icon: Shield,
    title: "Veilig & Betrouwbaar",
    description:
      "SSL-certificaten, beveiligde formulieren en regelmatige updates. Jouw website en de data van je bezoekers zijn altijd beschermd.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description:
      "Inzicht in je bezoekersgedrag met Google Analytics of een privacy-vriendelijk alternatief. Ik help je data-gedreven beslissingen te nemen.",
  },
  {
    icon: Code2,
    title: "CMS Integratie",
    description:
      "Beheer je eigen content zonder technische kennis. Ik koppel een gebruiksvriendelijk CMS zodat je zelf teksten, afbeeldingen en pagina's kunt aanpassen.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Kennismaking & Strategie",
    description:
      "We starten met een vrijblijvend gesprek waarin ik jouw wensen, doelgroep en doelen in kaart breng. Samen bepalen we de beste strategie voor jouw website. Ik denk mee over structuur, content en functionaliteit zodat je website niet alleen mooi is, maar ook resultaat oplevert.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Op basis van ons gesprek maak ik een visueel ontwerp dat past bij jouw merk en doelgroep. Je ziet het design voordat ik begin met bouwen en kunt feedback geven. Ik gebruik moderne designprincipes die bewezen zijn om bezoekers te converteren naar klanten.",
  },
  {
    number: "03",
    title: "Development & Content",
    description:
      "Ik bouw je website met Next.js en de nieuwste webtechnologieeen. Tijdens de bouw houd ik je op de hoogte van de voortgang en deel ik regelmatig previews. Je content wordt geoptimaliseerd voor SEO zodat je direct goed vindbaar bent in Google.",
  },
  {
    number: "04",
    title: "Testing, Lancering & Support",
    description:
      "Voor de lancering test ik alles uitgebreid: snelheid, SEO, mobiele weergave, formulieren en beveiliging. Na de lancering blijf ik beschikbaar voor vragen, updates en optimalisaties. Je staat er nooit alleen voor.",
  },
];

const technologies = [
  { name: "Next.js", description: "React framework voor snelle websites" },
  { name: "React", description: "Interactieve gebruikersinterfaces" },
  { name: "TypeScript", description: "Type-safe en betrouwbare code" },
  { name: "Tailwind CSS", description: "Moderne, responsive styling" },
  { name: "Vercel", description: "Snelle en betrouwbare hosting" },
  { name: "Headless CMS", description: "Flexibel contentbeheer" },
];

const faqs = [
  {
    question: "Wat kost het om een website te laten maken?",
    answer:
      "De kosten voor een professionele website beginnen vanaf €1.500. De exacte prijs hangt af van de complexiteit, het aantal pagina's, gewenste functionaliteiten en of je een CMS nodig hebt. Een simpele bedrijfswebsite met 5 pagina's kost minder dan een uitgebreide website met booking systeem of klantenportaal. Ik maak altijd een gedetailleerde offerte op maat zodat je precies weet waar je aan toe bent.",
  },
  {
    question: "Hoe lang duurt het om een website te laten bouwen?",
    answer:
      "Een standaard bedrijfswebsite is binnen 2-4 weken klaar. Voor uitgebreidere websites met veel functionaliteiten of maatwerk reken ik 4-8 weken. De doorlooptijd hangt ook af van hoe snel jij feedback levert en content aanlevert. Ik houd je gedurende het hele proces op de hoogte van de voortgang.",
  },
  {
    question: "Waarom Next.js en niet WordPress?",
    answer:
      "Next.js levert websites die tot 10x sneller laden dan WordPress. Dit is niet alleen beter voor de gebruikerservaring, maar ook voor je Google rankings. Next.js websites hebben minder beveiligingsrisico's, hoeven niet constant geupdate te worden en schalen moeiteloos mee. Bovendien scoort een Next.js website standaard 90-100 op Google PageSpeed, terwijl WordPress sites vaak onder de 60 scoren.",
  },
  {
    question: "Kan ik zelf de content van mijn website aanpassen?",
    answer:
      "Absoluut. Ik integreer een gebruiksvriendelijk CMS (Content Management Systeem) waarmee je zelf teksten, afbeeldingen en pagina's kunt beheren. Je hebt geen technische kennis nodig. Na de oplevering geef ik je een korte instructie zodat je direct zelfstandig aan de slag kunt.",
  },
  {
    question: "Is mijn website ook geschikt voor mobiel?",
    answer:
      "Ja, 100%. Ik ontwerp mobile-first, wat betekent dat ik eerst de mobiele versie perfectioneer en daarna opschaal naar tablet en desktop. Meer dan 60% van alle websitebezoekers komt via mobiel. Een website die niet goed werkt op smartphones verliest direct potentiele klanten.",
  },
  {
    question: "Wat gebeurt er na de oplevering van mijn website?",
    answer:
      "Na de lancering laat ik je niet in de steek. Ik bied onderhoudspakketten aan voor updates, beveiliging en kleine aanpassingen. Daarnaast monitor ik de performance en help ik je met SEO optimalisatie zodat je website blijft groeien. Je kunt altijd bij me terecht voor vragen of uitbreidingen.",
  },
  {
    question: "Werk je alleen voor bedrijven in Baarn?",
    answer:
      "Nee, ik werk voor klanten door heel Nederland. Hoewel ik gevestigd ben in Baarn, werk ik volledig digitaal. Meetings gaan via videobellen of telefoon, en ik kan ook persoonlijk langskomen in de regio Utrecht, Amersfoort en het Gooi. Ik heb klanten van Amsterdam tot Eindhoven.",
  },
];

export function WebsiteLatenMakenContent() {
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
              <Globe className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Website Laten Maken
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Professionele Website{" "}
              <span className="text-[#B39DDB]">Laten Maken</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Ik bouw snelle, moderne en SEO-geoptimaliseerde websites op maat.
              Als freelance webdesigner uit Baarn lever ik professionele websites
              die niet alleen mooi zijn, maar ook resultaat opleveren.
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
                  Vraag een offerte aan
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Bekijk mijn werk
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why a Professional Website Matters */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Waarom een professionele website{" "}
                <span className="text-[#B39DDB]">essentieel</span> is
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
                In 2024 begint meer dan <strong className="text-white">93% van alle online ervaringen</strong> bij
                een zoekmachine. Jouw website is het digitale visitekaartje van
                je bedrijf en vaak het eerste contactmoment met potentiele
                klanten. Een professionele website laten maken is geen luxe
                meer — het is een noodzaak voor elk bedrijf dat wil groeien.
              </p>
              <p>
                Bezoekers vormen binnen <strong className="text-white">0,05 seconden</strong> een eerste indruk van
                je website. Is je site traag, onoverzichtelijk of verouderd? Dan
                zijn bezoekers weg voordat ze je aanbod hebben gezien. Een
                professioneel ontworpen website straalt vertrouwen uit en
                overtuigt bezoekers om actie te ondernemen, of dat nu een
                contactformulier invullen is, een afspraak maken of een product
                kopen.
              </p>
              <p>
                Meer dan <strong className="text-white">60% van al het webverkeer</strong> komt van mobiele
                apparaten. Een website die niet perfect werkt op smartphones en
                tablets verliest het grootste deel van je potentiele klanten. Ik
                bouw websites die mobile-first zijn ontworpen en razendsnel laden
                op elk apparaat.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Approach: Next.js vs WordPress */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Mijn aanpak:{" "}
                <span className="text-[#B39DDB]">moderne technologie</span>
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
                Veel webdesigners bouwen nog steeds met WordPress — een platform
                dat oorspronkelijk is ontwikkeld als blogsysteem. Hoewel
                WordPress populair is, kampt het met serieuze beperkingen:
                trage laadtijden, beveiligingsproblemen door plugins en constant
                onderhoud. Ik kies bewust voor <strong className="text-white">Next.js</strong>, het modernste
                framework voor het bouwen van websites.
              </p>
              <p>
                Het verschil is enorm. Een gemiddelde WordPress website scoort
                30-50 op Google PageSpeed. De websites die ik bouw met Next.js
                scoren standaard <strong className="text-white">95-100</strong>. Dit betekent niet alleen een betere
                gebruikerservaring, maar ook hogere Google rankings. Google
                beloont snelle websites met betere posities in de
                zoekresultaten.
              </p>
              <p>
                Next.js biedt server-side rendering, automatische
                code-splitting en ingebouwde image optimalisatie. Dit resulteert
                in websites die razendsnel laden, uitstekend scoren op SEO en
                moeiteloos meeschalen als je bedrijf groeit. Geen onnodige
                plugins, geen beveiligingsrisico&apos;s en geen vertragende
                database-queries.
              </p>
            </motion.div>

            {/* Comparison Cards */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="mb-4 text-xl font-bold text-white/40">
                  WordPress (traditioneel)
                </h3>
                <ul className="space-y-3 text-white/40">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/60" />
                    PageSpeed score: 30-50
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/60" />
                    Regelmatig beveiligingsupdates nodig
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/60" />
                    Afhankelijk van plugins
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-red-400/60" />
                    Tragere laadtijden op mobiel
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-[#7B4FB5]/30 bg-white/[0.03] p-6"
              >
                <h3 className="mb-4 text-xl font-bold text-[#B39DDB]">
                  Next.js (mijn aanpak)
                </h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                    PageSpeed score: 95-100
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                    Ingebouwde beveiliging
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                    Geen onnodige plugins nodig
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                    Razendsnel op elk apparaat
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Wat je krijgt als je een website{" "}
              <span className="text-[#B39DDB]">bij mij laat maken</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Elke website die ik bouw bevat deze essientiele onderdelen als
              standaard. Geen verborgen kosten, geen meerwerk achteraf.
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

      {/* Process */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Hoe ik jouw website{" "}
              <span className="text-[#B39DDB]">bouw</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Een helder proces van begin tot eind. Je weet altijd waar je aan
              toe bent.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#7B4FB5]/30 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                    <span className="text-lg font-bold text-[#B39DDB]">
                      {step.number}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="mt-4 h-full w-px bg-gradient-to-b from-[#7B4FB5]/30 to-transparent" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Indication */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Wat kost een website{" "}
                <span className="text-[#B39DDB]">laten maken</span>?
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
                  Vanaf €1.500
                </span>
              </div>
              <p className="mb-6 text-lg text-white/70 leading-relaxed">
                De kosten voor een professionele website hangen af van
                verschillende factoren. Een simpele bedrijfswebsite met 5
                pagina&apos;s is een andere investering dan een uitgebreide
                website met booking systeem, klantportaal of meerdere talen.
              </p>
              <div className="mb-8 space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Wat beinvloedt de prijs:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Aantal pagina's en complexiteit van het ontwerp",
                    "Functionaliteiten (formulieren, CMS, booking, etc.)",
                    "Integraties met externe systemen",
                    "Content creatie en copywriting",
                    "SEO optimalisatie en lancering",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-white/50">
                Ik maak altijd een <strong className="text-white">vrijblijvende offerte op maat</strong>.
                Zo weet je precies wat je krijgt en wat de investering is. Geen
                verrassingen achteraf.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Technologieen die ik{" "}
              <span className="text-[#B39DDB]">gebruik</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Ik werk uitsluitend met bewezen, moderne technologieen die
              toekomstbestendig zijn.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30"
              >
                <h3 className="mb-1 text-lg font-bold text-white">
                  {tech.name}
                </h3>
                <p className="text-sm text-white/50">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl">
                Meer dan alleen{" "}
                <span className="text-[#B39DDB]">websites</span>
              </h2>
              <p className="mb-8 text-lg text-white/60 leading-relaxed">
                Naast het bouwen van websites bied ik ook andere diensten aan die
                jouw online aanwezigheid versterken. Bekijk mijn volledige
                aanbod:
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/diensten/seo-optimalisatie"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Search className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  SEO Optimalisatie
                </h3>
                <p className="text-sm text-white/50">
                  Hoger in Google met technische SEO
                </p>
              </Link>
              <Link
                href="/diensten/webshop-laten-maken"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <Palette className="mb-3 h-6 w-6 text-[#B39DDB]" />
                <h3 className="mb-1 font-bold text-white">
                  Webshop Laten Maken
                </h3>
                <p className="text-sm text-white/50">
                  E-commerce die converteert
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
                Veelgestelde{" "}
                <span className="text-[#B39DDB]">vragen</span>
              </h2>
              <p className="text-lg text-white/60">
                Antwoorden op de meest gestelde vragen over het laten maken van
                een website.
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
            <MessageSquare className="mx-auto mb-6 h-12 w-12 text-[#B39DDB]" />
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Klaar om je website te laten maken?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Neem vandaag nog contact op voor een vrijblijvend gesprek. Ik
              bespreek graag de mogelijkheden voor jouw project en maak een
              offerte op maat.
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
