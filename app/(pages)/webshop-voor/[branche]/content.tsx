"use client";

import { motion } from "motion/react";
import {
  Palette,
  Ruler,
  Layers,
  CreditCard,
  RotateCcw,
  Share2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  Star,
  Shield,
  Clock,
  ShoppingCart,
  CalendarCheck,
  Store,
  Tag,
  Users,
  Building2,
  FileText,
  Wrench,
  Heart,
  User,
  MessageSquare,
  BookOpen,
  Video,
  Camera,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import type { Industry } from "@/lib/industries";

/* ─────────────────────────────────────────────
   Props
   ───────────────────────────────────────────── */

interface WebshopIndustryContentProps {
  industry: Industry;
  relatedIndustries: Industry[];
}

/* ─────────────────────────────────────────────
   Icon Helper
   ───────────────────────────────────────────── */

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Ruler,
  Layers,
  CreditCard,
  RotateCcw,
  Instagram: Share2,
  Share2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Phone,
  Star,
  Shield,
  Clock,
  ShoppingCart,
  CalendarCheck,
  Store,
  Tag,
  Users,
  Building2,
  FileText,
  Wrench,
  Heart,
  User,
  MessageSquare,
  BookOpen,
  Video,
  Camera,
  Smartphone,
};

function getIcon(name: string): LucideIcon {
  return iconMap[name] || ShoppingCart;
}

/* ─────────────────────────────────────────────
   Process Steps
   ───────────────────────────────────────────── */

const processSteps = [
  {
    step: "01",
    title: "Kennismaking & Plan",
    description:
      "We bespreken jouw producten, doelgroep en ambities. Samen stellen we een plan op voor een webshop die past bij jouw merk en markt.",
  },
  {
    step: "02",
    title: "Design & UX",
    description:
      "We ontwerpen een visueel aantrekkelijke webshop met een optimale gebruikerservaring. Van productpagina's tot checkout — elk detail wordt doordacht.",
  },
  {
    step: "03",
    title: "Ontwikkeling & Integratie",
    description:
      "We bouwen je webshop met de nieuwste technologie. Betaalsystemen, voorraadbeheer en verzendopties worden naadloos geïntegreerd.",
  },
  {
    step: "04",
    title: "Lancering & Groei",
    description:
      "Na uitvoerige tests gaat je webshop live. We ondersteunen bij de lancering en helpen je groeien met SEO, analytics en optimalisatie.",
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

export function WebshopIndustryContent({
  industry,
  relatedIndustries,
}: WebshopIndustryContentProps) {
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
            <ShoppingCart className="h-4 w-4" />
            Webshop
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Webshop voor{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              {industry.naam}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl"
          >
            {industry.heroSubtitel}
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
                className="h-12 rounded-full border-[#7B4FB5]/50 bg-[#7B4FB5]/10 px-8 text-base font-semibold text-white hover:border-[#7B4FB5]/70 hover:bg-[#7B4FB5]/20 transition-colors"
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
              5.0 Reviews
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-green-400" />
              Veilig Betalen
            </span>
            <span className="flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-purple-400" />
              Mobile-First
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-400 leading-relaxed md:text-xl">
              {industry.beschrijving}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Uitdagingen Section ── */}
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
              Uitdagingen in de{" "}
              <span className="text-purple-400">{industry.naam}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Herken je deze uitdagingen? Wij lossen ze op met een webshop die
              specifiek is afgestemd op de {industry.naam.toLowerCase()}{" "}
              branche.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {industry.uitdagingen.map((uitdaging, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors hover:border-orange-500/20 hover:bg-orange-500/[0.02]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500/10">
                  <AlertTriangle className="h-5 w-5 text-orange-400" />
                </div>
                <p className="text-gray-300 leading-relaxed">{uitdaging}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Oplossingen Section ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Onze Oplossingen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Op maat gemaakte oplossingen voor de {industry.naam.toLowerCase()}{" "}
              branche. Elke functie is ontworpen om jouw webshop te laten
              groeien.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.oplossingen.map((oplossing, i) => {
              const Icon = getIcon(oplossing.icon);
              return (
                <motion.div
                  key={oplossing.title}
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
                    {oplossing.title}
                  </h3>
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {oplossing.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Feature Showcase Section ── */}
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
              Functionaliteiten
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Alles wat je nodig hebt voor een succesvolle{" "}
              {industry.naam.toLowerCase()} webshop, standaard inbegrepen.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {industry.voorbeeldFuncties.map((functie, i) => (
              <motion.div
                key={functie}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.02]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                <span className="text-gray-300">{functie}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className="relative py-24">
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
              Van eerste idee tot een draaiende webshop — in vier
              overzichtelijke stappen.
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4">
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
              Antwoorden op de meest gestelde vragen over een webshop voor de{" "}
              {industry.naam.toLowerCase()} branche.
            </p>
          </motion.div>

          <div className="mt-12 space-y-4">
            {industry.faq.map((faq, i) => (
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

      {/* ── Related Industries Section ── */}
      {relatedIndustries.length > 0 && (
        <section className="relative py-24">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Andere Branches
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                We bouwen ook websites en webshops voor andere branches. Ontdek
                wat we voor jouw sector kunnen betekenen.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedIndustries.map((related, i) => {
                const href =
                  related.urlPrefix === "webshop-voor"
                    ? `/webshop-voor/${related.slug}`
                    : `/website-voor/${related.slug}`;

                return (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={href}
                      className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/[0.03]"
                    >
                      <div className="flex items-center gap-3">
                        <ShoppingCart className="h-5 w-5 text-purple-400" />
                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {related.naam}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        {related.urlPrefix === "webshop-voor"
                          ? "Webshop"
                          : "Website"}{" "}
                        voor {related.naam}
                      </p>
                      <span className="mt-3 inline-flex items-center text-sm text-purple-400 group-hover:text-purple-300">
                        Bekijk pagina
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
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
                Klaar voor een Webshop voor jouw{" "}
                <span className="text-purple-300">{industry.naam}</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Plan een gratis en vrijblijvend adviesgesprek. We bespreken jouw
                wensen en laten zien hoe we jouw {industry.naam.toLowerCase()}{" "}
                webshop tot een succes maken.
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
                    className="h-12 rounded-full border-[#7B4FB5]/50 bg-[#7B4FB5]/10 px-8 text-base font-semibold text-white hover:border-[#7B4FB5]/70 hover:bg-[#7B4FB5]/20 transition-colors"
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
