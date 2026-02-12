"use client";

import { motion } from "motion/react";
import {
  ShoppingCart,
  CreditCard,
  Package,
  Smartphone,
  Search,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Star,
  Clock,
  Shield,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import type { Location } from "@/lib/locations";
import type { ServiceType, ServiceLocationData } from "@/lib/service-locations";

/* ─────────────────────────────────────────────
   Props
   ───────────────────────────────────────────── */

interface WebshopLocationContentProps {
  service: ServiceType;
  location: Location;
  content: ServiceLocationData;
  otherCities: Location[];
}

/* ─────────────────────────────────────────────
   Icon Helper
   ───────────────────────────────────────────── */

function getIcon(name: string) {
  const icons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    ShoppingCart,
    CreditCard,
    Package,
    Smartphone,
    Search,
    BarChart3,
  };
  return icons[name] || ShoppingCart;
}

/* ─────────────────────────────────────────────
   General Webshop FAQs
   ───────────────────────────────────────────── */

const generalWebshopFaqs = [
  {
    question: "Wat kost een webshop laten maken?",
    answer:
      "Een professionele webshop begint bij ons vanaf \u20AC2.500. De exacte prijs hangt af van het aantal producten, gewenste betaalmethoden, koppelingen en design-wensen. Neem contact op voor een offerte op maat.",
  },
  {
    question: "Hoe lang duurt het om een webshop te bouwen?",
    answer:
      "Een standaard webshop is binnen 4-6 weken live. Complexere webshops met veel producten of maatwerk koppelingen duren 8-12 weken. We plannen alles vooraf.",
  },
  {
    question: "Welke betaalmethoden kunnen in mijn webshop?",
    answer:
      "We integreren alle populaire betaalmethoden: iDEAL, creditcard, Bancontact, PayPal, Klarna en meer. Jouw klanten betalen snel en veilig.",
  },
  {
    question: "Kan ik mijn webshop zelf beheren?",
    answer:
      "Ja, je krijgt een gebruiksvriendelijk CMS waarmee je zelf producten, prijzen en voorraad beheert. Na oplevering ontvang je een handleiding en training.",
  },
];

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

export function WebshopLocationContent({
  service,
  location,
  content,
  otherCities,
}: WebshopLocationContentProps) {
  const allFaqs = [...content.faq, ...generalWebshopFaqs];

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
          {/* Service badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
          >
            <ShoppingCart className="h-4 w-4" />
            Webshop Laten Maken
          </motion.div>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-purple-400 ml-3"
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
            Webshop Laten Maken in{" "}
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
            {content.heroTekst}
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
              4-6 weken oplevering
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-green-400" />
              Veilig Betalen
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Local Intro Section ── */}
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
                Jouw Webshop Specialist in{" "}
                <span className="text-purple-400">{location.stad}</span>
              </h2>
              <div className="mt-6 space-y-4 text-gray-400 leading-relaxed">
                {content.introParagrafen.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
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
                  icon: ShoppingCart,
                  label: "Maatwerk Webshop",
                  value: "Geen Templates",
                },
                {
                  icon: CreditCard,
                  label: "Veilig Betalen",
                  value: "iDEAL & Meer",
                },
                {
                  icon: Smartphone,
                  label: "Alle Apparaten",
                  value: "Mobile-First",
                },
                {
                  icon: Phone,
                  label: "Persoonlijk",
                  value: "Vast Aanspreekpunt",
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

      {/* ── Features Section ── */}
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
              Wat Zit Er in Jouw Webshop?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Een complete webshop met alles wat je nodig hebt om succesvol
              online te verkopen vanuit {location.stad}.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, i) => {
              const Icon = getIcon(feature.icon);
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:border-purple-500/30 hover:bg-purple-500/[0.03]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
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
              Van eerste idee tot een draaiende webshop — in vier stappen naar
              jouw online verkoopkanaal.
            </p>
          </motion.div>

          <div className="mt-16 space-y-8">
            {service.procesStappen.map((step, i) => (
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
                Een webshop die verkoopt begint bij de juiste partner. Dit is
                waarom ondernemers in {location.stad} voor ons kiezen.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              {service.benefits.map((benefit, i) => (
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
              webshop in {location.stad}.
            </p>
          </motion.div>

          <div className="mt-12 space-y-4">
            {allFaqs.map((faq, i) => (
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

      {/* ── Other Cities Section ── */}
      {otherCities.length > 0 && (
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
                Ook Webshops in Andere Steden
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Naast {location.stad} bouwen we ook webshops voor ondernemers in
                andere plaatsen.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherCities.map((city, i) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/webshop-laten-maken-${city.slug}`}
                    className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/[0.03]"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {city.stad}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      {city.regio} &middot; {city.inwoners} inwoners
                    </p>
                    <span className="mt-3 inline-flex items-center text-sm text-purple-400 group-hover:text-purple-300">
                      Webshop in {city.stad}
                      <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                Klaar voor een Webshop in{" "}
                <span className="text-purple-300">{location.stad}</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Plan een gratis en vrijblijvend adviesgesprek. We bespreken jouw
                producten, wensen en ik laat zien hoe ik jouw webshop in{" "}
                {location.stad} tot een succes maak.
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
