"use client";

import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { Timeline } from "@/components/ui/timeline";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Eye,
  Target,
  Lightbulb,
  Code2,
  Rocket,
  Users,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Timeline data                                                     */
/* ------------------------------------------------------------------ */

const timelineData = [
  {
    title: "2020",
    content: (
      <div>
        <h3 className="mb-4 text-2xl font-bold text-white">Oprichting</h3>
        <p className="mb-4 text-lg text-white/60">
          AK Web Solutions werd opgericht in Baarn als ZZP-onderneming. Wat
          begon als een passie voor web development groeide al snel uit tot een
          professioneel bedrijf met een duidelijke missie: hoogwaardige,
          betaalbare websites bouwen voor het MKB.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Freelance", "Eerste Website", "Baarn", "ZZP"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <h3 className="mb-4 text-2xl font-bold text-white">Eerste Klanten</h3>
        <p className="mb-4 text-lg text-white/60">
          De eerste grote klanten kwamen binnen. Mijn focus op kwaliteit en
          persoonlijke aanpak leverde mond-tot-mondreclame op. Elk project werd
          behandeld alsof het mijn eigen bedrijf was, wat resulteerde in
          langdurige samenwerkingen.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Klantrelaties", "Kwaliteit", "Portfolio", "Groei"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h3 className="mb-4 text-2xl font-bold text-white">Specialisatie</h3>
        <p className="mb-4 text-lg text-white/60">
          Ik specialiseerde me in moderne frameworks en nam complexere projecten
          aan. React en Next.js werden mijn kerntools, waardoor ik snellere en
          betere websites kon opleveren.
        </p>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Complexe Projecten", "Verdieping"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
              >
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h3 className="mb-4 text-2xl font-bold text-white">E-commerce Focus</h3>
        <p className="mb-4 text-lg text-white/60">
          Specialisatie in e-commerce oplossingen. Ik hielp diverse webshops met
          conversie-optimalisatie, Shopify integraties en op maat gemaakte
          checkout-flows die aantoonbaar meer omzet genereerden.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Shopify", "Conversie", "Webshops", "Stripe"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <h3 className="mb-4 text-2xl font-bold text-white">Full-Service</h3>
        <p className="mb-4 text-lg text-white/60">
          AK Web Solutions groeide uit tot een complete digitale dienstverlener.
          Naast development bied ik nu ook SEO, UI/UX design, maatwerk software
          en doorlopende ondersteuning. Een one-stop-shop voor alles digitaal.
        </p>
        <div className="flex flex-wrap gap-2">
          {["SEO", "UI/UX", "Maatwerk", "Full-Service"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <h3 className="mb-4 text-2xl font-bold text-white">Innovatie</h3>
        <p className="mb-4 text-lg text-white/60">
          Ik omarm de toekomst met AI-integraties, cutting-edge frameworks en
          innovatieve oplossingen. Van AI-powered chatbots tot geautomatiseerde
          workflows — ik blijf vooroplopen in technologie.
        </p>
        <div className="flex flex-wrap gap-2">
          {["AI", "Automatisering", "Innovatie", "Cutting-edge"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Core values                                                       */
/* ------------------------------------------------------------------ */

const coreValues = [
  {
    icon: Heart,
    title: "Kwaliteit",
    description:
      "Geen concessies. Elke regel code, elk pixel en elke interactie wordt met zorg gebouwd. Ik lever alleen werk waar ik zelf trots op ben.",
    color: "bg-[#3D2975]",
  },
  {
    icon: Eye,
    title: "Transparantie",
    description:
      "Open communicatie over voortgang, kosten en keuzes. Geen verborgen kosten of verrassingen. Je weet altijd precies waar je aan toe bent.",
    color: "bg-[#3D2975]",
  },
  {
    icon: Target,
    title: "Resultaatgericht",
    description:
      "Mooie websites zijn leuk, maar resultaat telt. Ik focus op conversie, SEO en meetbare groei voor jouw bedrijf.",
    color: "bg-[#3D2975]",
  },
  {
    icon: Lightbulb,
    title: "Innovatie",
    description:
      "Ik volg niet alleen trends — ik loop voorop. Van AI-integraties tot de nieuwste frameworks, ik gebruik technologie die waarde toevoegt.",
    color: "bg-[#3D2975]",
  },
];

/* ------------------------------------------------------------------ */
/*  Why solo / advantages                                             */
/* ------------------------------------------------------------------ */

const soloAdvantages = [
  {
    icon: Users,
    title: "Direct contact",
    description:
      "Je hebt altijd contact met dezelfde persoon. Geen account managers of tussenlagen — direct met de developer zelf.",
  },
  {
    icon: Zap,
    title: "Snelle schakeling",
    description:
      "Geen bureaucratie of lange vergaderingen. Korte lijnen zorgen voor snellere beslissingen en oplevering.",
  },
  {
    icon: Code2,
    title: "Persoonlijke betrokkenheid",
    description:
      "Elk project krijgt mijn volledige aandacht. Jouw project is niet een van de tientallen, maar krijgt persoonlijke toewijding.",
  },
  {
    icon: Rocket,
    title: "Flexibel & schaalbaar",
    description:
      "Flexibele werkwijze die past bij jouw planning en budget. Van klein project tot langdurige samenwerking.",
  },
];

/* ================================================================== */
/*  Component                                                         */
/* ================================================================== */

export function OverOnsContent() {
  return (
    <>
      {/* ---------------------------------------------------------- */}
      {/*  Hero -- Lamp Effect                                       */}
      {/* ---------------------------------------------------------- */}
      <LampContainer className="!bg-black !min-h-[50vh]">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-white to-[#B39DDB] bg-clip-text py-4 text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          Over Mij
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          className="mt-4 max-w-2xl text-center text-lg text-white/60 md:text-xl"
        >
          Maak kennis met de persoon achter AK Web Solutions en ontdek mijn
          missie, waarden en het verhaal van mijn onderneming.
        </motion.p>
      </LampContainer>

      {/* ---------------------------------------------------------- */}
      {/*  Personal Story                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-sm font-semibold text-[#B39DDB]">
                  Mijn Verhaal
                </span>
              </div>

              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Freelance developer met{" "}
                <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                  passie voor kwaliteit
                </span>
              </h2>

              <div className="space-y-4 text-lg leading-relaxed text-white/60">
                <p>
                  Ik ben Ayoub, de oprichter en enige developer achter AK Web
                  Solutions. Als ZZP'er werk ik vanuit Baarn en help ik
                  bedrijven door heel Nederland met hun online aanwezigheid.
                </p>
                <p>
                  Mijn reis begon in 2020 met een simpele overtuiging: elk
                  bedrijf verdient een professionele, snelle en effectieve
                  website — zonder het prijskaartje van de grote bureaus. Die
                  mentaliteit draag ik nog steeds mee in alles wat ik doe.
                </p>
                <p>
                  Als je met mij werkt, werk je direct met de persoon die jouw
                  website bouwt. Geen tussenlagen, geen miscommunicatie — gewoon
                  direct contact en persoonlijke aandacht voor jouw project.
                </p>
              </div>
            </motion.div>

            {/* Stats card with workspace image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl border border-white/10"
            >
              {/* Workspace image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/workspace.jpg"
                  alt="Moderne werkplek"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>

              {/* Stats overlay */}
              <div className="bg-gradient-to-br from-[#3D2975]/40 via-black to-[#7B4FB5]/20 p-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(123,79,181,0.15),transparent_60%)]" />
                <div className="relative grid grid-cols-2 gap-8">
                  {[
                    { value: "5+", label: "Jaar ervaring" },
                    { value: "50+", label: "Projecten afgerond" },
                    { value: "100%", label: "Tevreden klanten" },
                    { value: "ZZP", label: "Persoonlijke aanpak" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="mb-2 text-4xl font-bold text-[#B39DDB]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/50">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-center text-sm italic leading-relaxed text-white/70">
                    &ldquo;Ik geloof dat technologie toegankelijk moet zijn voor
                    iedereen. Mijn doel is om kwalitatief hoogwaardige digitale
                    oplossingen te leveren die echt impact maken.&rdquo;
                  </p>
                  <p className="mt-3 text-center text-sm font-semibold text-[#B39DDB]">
                    — Ayoub K., Oprichter
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Why Solo / Advantages                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Voordelen van een{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                ZZP&apos;er
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Werken met een freelance developer biedt unieke voordelen ten
              opzichte van grote bureaus.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {soloAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-[#7B4FB5]/30 hover:bg-white/[0.07]"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#7B4FB5]/10 to-transparent transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7B4FB5]/20 to-[#B39DDB]/20">
                    <advantage.icon className="h-7 w-7 text-[#B39DDB]" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {advantage.title}
                  </h3>
                  <p className="text-white/60">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Timeline                                                  */}
      {/* ---------------------------------------------------------- */}
      <section>
        <Timeline
          data={timelineData}
          title="Mijn Verhaal"
          description="Van ZZP-start tot full-service developer"
        />
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  Core Values -- WobbleCards                                */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Mijn{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                kernwaarden
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Deze waarden vormen de basis van alles wat ik doe en hoe ik met
              mijn klanten samenwerk.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <WobbleCard containerClassName={`${value.color} h-[280px]`}>
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-white/80">
                      {value.description}
                    </p>
                  </div>
                </WobbleCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/*  CTA Section                                               */}
      {/* ---------------------------------------------------------- */}
      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#3D2975]/30 via-black to-[#7B4FB5]/20 p-12 text-center lg:p-16"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Wil je samenwerken?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Ik sta altijd open voor nieuwe projecten en samenwerkingen. Neem
              contact op voor een vrijblijvend kennismakingsgesprek.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
                  className="rounded-full border-2 border-[#7B4FB5]/50 bg-[#7B4FB5]/10 text-white backdrop-blur-sm hover:border-[#7B4FB5]/70 hover:bg-[#7B4FB5]/20"
                >
                  Bekijk mijn diensten
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
