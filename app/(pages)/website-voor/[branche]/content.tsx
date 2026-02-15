"use client";

import { motion } from "motion/react";
import {
  CalendarCheck,
  UtensilsCrossed,
  MapPin,
  Camera,
  Star,
  Smartphone,
  Store,
  Clock,
  ShoppingBag,
  Tag,
  Users,
  Shield,
  Heart,
  FileText,
  Accessibility,
  Building2,
  Wrench,
  User,
  MessageSquare,
  BookOpen,
  Video,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import type { Industry } from "@/lib/industries";

/* ─────────────────────────────────────────────
   Props
   ───────────────────────────────────────────── */

interface IndustryContentProps {
  industry: Industry;
  relatedIndustries: Industry[];
}

/* ─────────────────────────────────────────────
   Icon Mapping
   ───────────────────────────────────────────── */

const iconMap: Record<string, LucideIcon> = {
  CalendarCheck,
  UtensilsCrossed,
  MapPin,
  Camera,
  Star,
  Smartphone,
  Store,
  Clock,
  ShoppingBag,
  Tag,
  Users,
  Shield,
  Heart,
  FileText,
  Accessibility,
  Building2,
  Wrench,
  User,
  MessageSquare,
  BookOpen,
  Video,
};

function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Star;
}

/* ─────────────────────────────────────────────
   Process Steps
   ───────────────────────────────────────────── */

const processSteps = [
  {
    step: "01",
    title: "Kennismaking",
    description:
      "We bespreken jouw branche, doelgroep en wensen in een vrijblijvend gesprek. Ik denk mee over de beste aanpak voor jouw specifieke sector.",
  },
  {
    step: "02",
    title: "Ontwerp",
    description:
      "Op basis van onze kennismaking maak ik een ontwerp dat past bij jouw branche en merk. Inclusief wireframes, kleurenpalet en content strategie.",
  },
  {
    step: "03",
    title: "Ontwikkeling",
    description:
      "Ik bouw jouw website met Next.js — razendsnel, veilig en SEO-geoptimaliseerd. Je wordt wekelijks bijgepraat over de voortgang.",
  },
  {
    step: "04",
    title: "Lancering",
    description:
      "Na grondige tests gaat jouw website live. Ik blijf beschikbaar voor support, updates en doorontwikkeling. Jouw succes is mijn succes.",
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

export function IndustryContent({
  industry,
  relatedIndustries,
}: IndustryContentProps) {
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
          {/* Industry icon badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
          >
            {(() => {
              const IconComponent = getIcon(
                industry.oplossingen[0]?.icon || "Star",
              );
              return <IconComponent className="h-4 w-4" />;
            })()}
            {industry.naam}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {industry.heroTitel.replace(industry.naam, "").trim()}{" "}
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

      {/* ── Intro Section ── */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Waarom een Website voor de{" "}
              <span className="text-purple-400">{industry.naam}</span>?
            </h2>
            {industry.beschrijving
              .split(". ")
              .reduce<string[][]>((acc, sentence, i) => {
                const paragraphIndex =
                  i < Math.ceil(industry.beschrijving.split(". ").length / 2)
                    ? 0
                    : 1;
                if (!acc[paragraphIndex]) acc[paragraphIndex] = [];
                acc[paragraphIndex].push(sentence);
                return acc;
              }, [])
              .map((sentences, i) => (
                <p key={i} className="text-gray-400 text-lg leading-relaxed">
                  {sentences.join(". ")}
                  {sentences[sentences.length - 1]?.endsWith(".") ? "" : "."}
                </p>
              ))}
          </motion.div>
        </div>
      </section>

      {/* ── Uitdagingen (Challenges) Section ── */}
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
              De {industry.naam.toLowerCase()} kent specifieke uitdagingen als
              het gaat om online zichtbaarheid. Herken je deze?
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
                <div>
                  <p className="text-white font-medium leading-relaxed">
                    {uitdaging}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Oplossingen (Solutions) Section ── */}
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
              Op maat gemaakte oplossingen voor de {industry.naam.toLowerCase()}
              . Alles wat je nodig hebt om online succesvol te zijn.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.oplossingen.map((oplossing, i) => {
              const IconComponent = getIcon(oplossing.icon);
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
                    <IconComponent className="h-6 w-6 text-purple-400" />
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
        <div className="relative mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Functionaliteiten voor de{" "}
              <span className="text-purple-400">{industry.naam}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Alles wat een {industry.naam.toLowerCase()}-website nodig heeft,
              standaard inbegrepen.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industry.voorbeeldFuncties.map((functie, i) => (
              <motion.div
                key={functie}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm transition-colors hover:border-purple-500/20"
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
              Van eerste kennismaking tot lancering — in vier stappen naar jouw
              professionele {industry.naam.toLowerCase()}-website.
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
              Antwoorden op de meest gestelde vragen over een website voor de{" "}
              {industry.naam.toLowerCase()}.
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/[0.03] to-transparent" />
          <div className="relative mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Websites voor Andere Branches
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                We maken ook professionele websites voor andere sectoren. Bekijk
                onze branchepagina&apos;s.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedIndustries.map((related, i) => {
                const IconComponent = getIcon(
                  related.oplossingen[0]?.icon || "Star",
                );
                return (
                  <motion.div
                    key={related.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={`/website-voor-${related.slug}`}
                      className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/[0.03]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                          <IconComponent className="h-5 w-5 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {related.naam}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                        {related.heroSubtitel}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm text-purple-400 group-hover:text-purple-300">
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
            {/* Decorative gradients */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-600/10 blur-[80px]" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Klaar voor een Website voor jouw{" "}
                <span className="text-purple-300">
                  {industry.naam.toLowerCase()}bedrijf
                </span>
                ?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Plan een gratis en vrijblijvend adviesgesprek. We bespreken jouw
                wensen en ik laat zien hoe ik jouw {industry.naam.toLowerCase()}
                bedrijf online kan laten groeien.
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
