"use client";

import { motion } from "motion/react";
import {
  Code2,
  Search,
  ShoppingCart,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Globe,
  Smartphone,
  BarChart3,
  Clock,
  Users,
  Star,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import type { Location } from "@/lib/locations";

interface LocationContentProps {
  location: Location;
  nearbyLocations: Location[];
}

/* ─────────────────────────────────────────────
   Services Data
   ───────────────────────────────────────────── */

const services = [
  {
    icon: Code2,
    title: "Website op Maat",
    description:
      "Een unieke website gebouwd met Next.js — razendsnel, veilig en perfect geoptimaliseerd voor zoekmachines.",
  },
  {
    icon: ShoppingCart,
    title: "Webshop Ontwikkeling",
    description:
      "Een professionele webshop die converteert. Met veilig betalen, voorraadbeheer en mobiel-vriendelijk design.",
  },
  {
    icon: Search,
    title: "SEO Optimalisatie",
    description:
      "Hoger scoren in Google met technische SEO, lokale optimalisatie en content die jouw doelgroep aanspreekt.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Jouw website ziet er perfect uit op elk apparaat — desktop, tablet en smartphone.",
  },
  {
    icon: Zap,
    title: "Supersnel",
    description:
      "Laadtijden onder de 1 seconde dankzij Next.js en een wereldwijd CDN. 90+ PageSpeed scores gegarandeerd.",
  },
  {
    icon: Shield,
    title: "Veilig & Betrouwbaar",
    description:
      "SSL-certificaat, automatische updates en geen kwetsbare plugins. Jouw website is veilig.",
  },
];

/* ─────────────────────────────────────────────
   Benefits Data
   ───────────────────────────────────────────── */

const benefits = [
  "Gratis adviesgesprek — vrijblijvend en persoonlijk",
  "Vaste prijs — geen verrassingen achteraf",
  "Eén vast aanspreekpunt — korte lijnen, snelle communicatie",
  "SEO-geoptimaliseerd — direct beter vindbaar in Google",
  "Razendsnel — 90+ PageSpeed score gegarandeerd",
  "Mobile-first — perfect op elk apparaat",
  "Maatwerk — geen templates, alles op maat gebouwd",
  "Doorlopende support — ook na oplevering",
];

/* ─────────────────────────────────────────────
   Process Steps
   ───────────────────────────────────────────── */

const processSteps = [
  {
    step: "01",
    title: "Kennismaking",
    description:
      "We bespreken jouw wensen, doelen en doelgroep in een vrijblijvend gesprek. Ik breng alles in kaart en denk mee over de beste aanpak.",
  },
  {
    step: "02",
    title: "Ontwerp & Strategie",
    description:
      "Op basis van onze kennismaking maak ik een ontwerp dat past bij jouw merk. Inclusief wireframes, kleurenpalet en een doordachte SEO-strategie.",
  },
  {
    step: "03",
    title: "Ontwikkeling",
    description:
      "Ik bouw jouw website met Next.js — de modernste technologie. Snel, veilig en geoptimaliseerd voor zoekmachines. Je wordt wekelijks bijgepraat.",
  },
  {
    step: "04",
    title: "Lancering & Support",
    description:
      "Na grondige tests gaat jouw website live. Ik blijf beschikbaar voor support, updates en doorontwikkeling.",
  },
];

/* ─────────────────────────────────────────────
   FAQ Data
   ───────────────────────────────────────────── */

function getFaqs(stad: string) {
  return [
    {
      question: `Waarom zou ik mijn website laten maken door een bureau in de buurt van ${stad}?`,
      answer: `Een lokaal webbureau begrijpt de markt in ${stad} en omgeving. Persoonlijk contact, korte lijnen en kennis van de lokale doelgroep maken het verschil. Bij AK Web Solutions combineer ik lokale betrokkenheid met de nieuwste technologie.`,
    },
    {
      question: "Wat kost een professionele website?",
      answer:
        "Een professionele website begint bij ons vanaf €1.500. De exacte prijs hangt af van de complexiteit, het aantal pagina's en de gewenste functionaliteiten. Tijdens een gratis adviesgesprek breng ik alles in kaart en ontvang je een transparante offerte.",
    },
    {
      question: "Hoe lang duurt het om een website te bouwen?",
      answer:
        "Een standaard bedrijfswebsite is binnen 3 tot 5 weken klaar. Complexere projecten zoals webshops of maatwerk applicaties duren 6 tot 12 weken. Ik werk met heldere milestones en houd je wekelijks op de hoogte.",
    },
    {
      question: "Waarom gebruiken jullie Next.js in plaats van WordPress?",
      answer:
        "Next.js websites laden 3 tot 5 keer sneller dan WordPress, scoren 90+ op Google PageSpeed en zijn veel veiliger — geen kwetsbare plugins nodig. Alles wordt op maat gebouwd en geoptimaliseerd voor SEO.",
    },
    {
      question: "Is SEO inbegrepen bij een nieuwe website?",
      answer:
        "Ja, elke website die wij bouwen bevat een solide SEO-basis: snelle laadtijden, structured data, XML sitemaps, meta-tags en semantische HTML. Voor een complete SEO-strategie bieden we aparte pakketten aan.",
    },
    {
      question: `Werken jullie ook met bedrijven buiten ${stad}?`,
      answer: `Jazeker! Hoewel we graag lokaal werken in ${stad} en omgeving, helpen we ondernemers door heel Nederland. Dankzij videobellen en online tools werkt de samenwerking net zo soepel.`,
    },
  ];
}

/* ─────────────────────────────────────────────
   FAQ Accordion Item
   ───────────────────────────────────────────── */

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  return (
    <motion.details
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
    >
      <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-white hover:text-purple-300 transition-colors [&::-webkit-details-marker]:hidden">
        {question}
        <span className="ml-4 flex-shrink-0 text-purple-400 transition-transform group-open:rotate-45 text-2xl">
          +
        </span>
      </summary>
      <div className="px-6 pb-6 text-gray-400 leading-relaxed">{answer}</div>
    </motion.details>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export function LocationContent({
  location,
  nearbyLocations,
}: LocationContentProps) {
  const faqs = getFaqs(location.stad);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#7B4FB5"
        />

        {/* Gradient orbs */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
          >
            <MapPin className="h-4 w-4" />
            {location.stad}, {location.regio}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Website Laten Maken in{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              {location.stad}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl"
          >
            {location.beschrijving}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link href="/contact">
              <Button className="group h-12 rounded-full bg-purple-600 px-8 text-base font-semibold text-white hover:bg-purple-500 transition-colors">
                Gratis Adviesgesprek
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Bekijk Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          >
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
              5.0 Google Reviews
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-purple-400" />
              3-5 weken oplevering
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-green-400" />
              90+ PageSpeed Score
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Intro / Location Section ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Jouw Webdeveloper in{" "}
                <span className="text-purple-400">{location.stad}</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Op zoek naar een betrouwbare webdeveloper in {location.stad}?
                  AK Web Solutions bouwt professionele websites en webshops voor
                  bedrijven in {location.stad} en de regio {location.regio}.
                </p>
                <p>
                  Met {location.inwoners} inwoners is {location.stad} een
                  gemeente waar lokale ondernemers het verschil maken. Een
                  professionele website is daarbij onmisbaar — het is jouw
                  digitale visitekaartje en vaak het eerste contactmoment met
                  potentiële klanten.
                </p>
                <p>
                  Wij bouwen websites met Next.js, de nieuwste technologie voor
                  razendsnelle websites. Geen WordPress, geen templates — alles
                  op maat gebouwd en geoptimaliseerd voor Google.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Globe,
                  label: "Moderne Websites",
                  value: "Next.js & React",
                },
                {
                  icon: BarChart3,
                  label: "SEO Score",
                  value: "90+ Gegarandeerd",
                },
                {
                  icon: Clock,
                  label: "Oplevering",
                  value: "3-5 Weken",
                },
                {
                  icon: Users,
                  label: "Communicatie",
                  value: "Persoonlijk",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-sm"
                >
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-purple-400" />
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="mt-1 font-semibold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Waarom een Professionele Website ── */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">
              Waarom een Professionele Website in{" "}
              <span className="text-purple-400">{location.stad}</span>?
            </h2>
            <div className="mt-8 space-y-5 text-gray-400 leading-relaxed text-lg">
              <p>
                De concurrentie in {location.stad} en omgeving groeit. Steeds
                meer consumenten zoeken online naar lokale diensten en producten.
                Uit onderzoek blijkt dat meer dan 80% van de potentiële klanten
                eerst Google raadpleegt voordat ze een aankoop doen of contact
                opnemen met een bedrijf. Zonder een professionele website loop je
                als ondernemer in {location.stad} dagelijks klanten mis.
              </p>
              <p>
                Een goede website is meer dan alleen een online visitekaartje.
                Het is een verkoopkanaal dat 24 uur per dag, 7 dagen per week
                voor jou werkt. Potentiële klanten in {location.stad} en de
                regio {location.regio} kunnen jouw diensten ontdekken, reviews
                lezen, offertes aanvragen en direct contact opnemen — zelfs
                buiten kantooruren.
              </p>
              <p>
                Bij AK Web Solutions bouwen we websites die niet alleen mooi
                zijn, maar ook daadwerkelijk resultaat opleveren. Onze websites
                laden razendsnel (onder de 1 seconde), scoren 90+ op Google
                PageSpeed en zijn volledig geoptimaliseerd voor zoekmachines.
                Dat betekent dat jouw bedrijf in {location.stad} bovenaan in
                Google verschijnt wanneer potentiële klanten zoeken naar jouw
                diensten.
              </p>
              <p>
                We gebruiken Next.js in plaats van WordPress. Waarom? Omdat
                Next.js websites tot 5 keer sneller laden, geen last hebben van
                kwetsbare plugins, en standaard beter scoren in Google. Elke
                website die we bouwen is maatwerk — geen standaard templates,
                maar een uniek ontwerp dat past bij jouw merk en jouw doelgroep
                in {location.stad}.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Wat Wij Bieden ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">
              Wat Wij Bieden voor Bedrijven in {location.stad}
            </h2>
            <div className="mt-8 space-y-5 text-gray-400 leading-relaxed text-lg">
              <p>
                Als freelance webdeveloper gevestigd in Baarn werk ik nauw samen
                met ondernemers in {location.stad} en de hele regio{" "}
                {location.regio}. Doordat je direct contact hebt met de
                ontwikkelaar — zonder tussenlagen of accountmanagers — zijn de
                lijnen kort en de communicatie helder. Je weet altijd precies
                waar je aan toe bent.
              </p>
              <p>
                Elke website begint met een gratis en vrijblijvend
                adviesgesprek. Daarin bespreken we jouw doelen, doelgroep en
                budget. Op basis daarvan stel ik een plan op dat precies past
                bij wat jij nodig hebt. Of het nu gaat om een{" "}
                <Link
                  href="/diensten/website-laten-maken"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  bedrijfswebsite
                </Link>
                , een{" "}
                <Link
                  href="/diensten/webshop-laten-maken"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  webshop
                </Link>{" "}
                of een{" "}
                <Link
                  href="/diensten/maatwerk-software"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  maatwerk applicatie
                </Link>{" "}
                — wij leveren kwaliteit.
              </p>
              <p>
                Na oplevering laten we je niet in de steek. We bieden
                doorlopende support en{" "}
                <Link
                  href="/diensten/website-onderhoud"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  website onderhoud
                </Link>{" "}
                zodat jouw website altijd up-to-date, veilig en snel blijft. En
                met onze{" "}
                <Link
                  href="/diensten/seo-optimalisatie"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  SEO optimalisatie
                </Link>{" "}
                diensten zorgen we ervoor dat je ook op de lange termijn goed
                vindbaar blijft in {location.stad} en omgeving.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Onze Diensten in {location.stad}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Van een simpele bedrijfswebsite tot een complete webshop — wij
              leveren maatwerk dat past bij jouw bedrijf in {location.stad}.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:border-purple-500/30 hover:bg-purple-500/[0.03]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <service.icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Section ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Waarom Kiezen voor{" "}
                <span className="text-purple-400">AK Web Solutions</span>?
              </h2>
              <p className="mt-4 text-gray-400">
                Persoonlijke aandacht, technische expertise en bewezen resultaten
                — dat is wat ons onderscheidt als webdeveloper in de regio{" "}
                {location.stad}.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.02]"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Hoe Werkt Het?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Van eerste kennismaking tot lancering — in vier stappen naar jouw
              professionele website.
            </p>
          </motion.div>

          <div className="mt-16 space-y-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group flex gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:border-purple-500/30"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-2xl font-bold text-purple-400">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Veelgestelde Vragen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Antwoorden op de meest gestelde vragen over het laten maken van een
              website in {location.stad}.
            </p>
          </motion.div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Locations Section ── */}
      {nearbyLocations.length > 0 && (
        <section className="relative py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/[0.03] to-transparent" />
          <div className="relative mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ook Actief in de Regio
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Naast {location.stad} helpen we ook ondernemers in omliggende
                plaatsen met professionele websites.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {nearbyLocations.map((loc, i) => (
                <motion.div
                  key={loc.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/website-laten-maken-${loc.slug}`}
                    className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/[0.03]"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {loc.stad}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      {loc.regio} &middot; {loc.inwoners} inwoners
                    </p>
                    <span className="mt-3 inline-flex items-center text-sm text-purple-400 group-hover:text-purple-300">
                      Bekijk pagina
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Resultaten / Portfolio Sectie ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">
              Bewezen Resultaten voor Ondernemers
            </h2>
            <div className="mt-8 space-y-5 text-gray-400 leading-relaxed text-lg">
              <p>
                We hebben al diverse projecten succesvol opgeleverd voor
                bedrijven in de regio. Van loodgieters tot modewinkels — elke
                ondernemer verdient een website die werkt. Bekijk onze{" "}
                <Link
                  href="/portfolio"
                  className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
                >
                  portfolio
                </Link>{" "}
                om te zien wat we voor jou kunnen betekenen.
              </p>
              <p>
                Elke website die we opleveren wordt getest op snelheid,
                veiligheid en SEO-prestaties. We streven naar 90+ scores op
                Google PageSpeed Insights en zorgen voor een solide technische
                basis waarmee jij gevonden wordt door klanten in {location.stad}{" "}
                en omgeving.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-6 py-3 text-purple-300 hover:bg-purple-500/20 transition-colors"
              >
                Bekijk Portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-gray-300 hover:bg-white/[0.06] transition-colors"
              >
                Neem Contact Op
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-black p-12 text-center md:p-16"
          >
            {/* Decorative gradient */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-600/10 blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Klaar voor een Professionele Website in{" "}
                <span className="text-purple-300">{location.stad}</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Plan een gratis en vrijblijvend adviesgesprek. We bespreken jouw
                wensen en ik laat zien hoe ik jouw bedrijf in {location.stad}{" "}
                online kan laten groeien.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button className="group h-12 rounded-full bg-purple-600 px-8 text-base font-semibold text-white hover:bg-purple-500 transition-colors">
                    Plan een Gesprek
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a href="tel:+31685722387">
                  <Button
                    variant="outline"
                    className="h-12 rounded-full border-white/20 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Bel Direct
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
