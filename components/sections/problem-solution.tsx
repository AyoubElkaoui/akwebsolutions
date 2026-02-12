"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Check, X, TrendingUp, Zap, Shield, Clock } from "lucide-react";
import { WobbleCard } from "@/components/ui/wobble-card";

const problems = [
  {
    icon: Clock,
    title: "Trage websites",
    description:
      "Lange laadtijden zorgen voor hoge bounce rates en verloren klanten.",
    impact: "-40% conversie",
  },
  {
    icon: X,
    title: "Verouderde technologie",
    description:
      "Oude systemen zijn moeilijk te onderhouden en niet schaalbaar.",
    impact: "3x hogere kosten",
  },
  {
    icon: Shield,
    title: "Slechte SEO",
    description: "Niet vindbaar in Google betekent gemiste kansen en omzet.",
    impact: "-60% traffic",
  },
];

const solutions = [
  {
    icon: Zap,
    title: "Razendsnel",
    description:
      "Websites die in <1 seconde laden met optimale Core Web Vitals.",
    metric: "98+",
    metricLabel: "Lighthouse Score",
  },
  {
    icon: TrendingUp,
    title: "Modern & Schaalbaar",
    description:
      "Gebouwd met Next.js, TypeScript en de nieuwste technologieën.",
    metric: "100K+",
    metricLabel: "Bezoekers/maand",
  },
  {
    icon: Shield,
    title: "SEO Geoptimaliseerd",
    description: "Structured data, meta tags en technische SEO out-of-the-box.",
    metric: "#1",
    metricLabel: "Google Rankings",
  },
];

const tabs = [
  { id: "problem", label: "Het Probleem" },
  { id: "solution", label: "Mijn Oplossing" },
  { id: "results", label: "Resultaten" },
];

const results = [
  {
    value: "245",
    suffix: "%",
    label: "Meer conversies",
    description: "Gemiddelde toename in conversie na lancering",
  },
  {
    value: "0.4",
    suffix: "s",
    label: "Laadtijd",
    description: "Gemiddelde tijd tot eerste contentful paint",
  },
  {
    value: "50",
    suffix: "+",
    label: "Projecten",
    description: "Succesvol opgeleverde websites en apps",
  },
  {
    value: "98",
    suffix: "%",
    label: "Tevredenheid",
    description: "Van mijn klanten zou mij aanbevelen",
  },
];

function AnimatedCounter({ value, suffix }: { value: string; suffix: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-5xl font-bold text-white sm:text-6xl lg:text-7xl"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {value}
      </motion.span>
      <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
        {suffix}
      </span>
    </motion.div>
  );
}

export function ProblemSolution() {
  const [activeTab, setActiveTab] = useState("problem");

  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B4FB5]/5 to-transparent" />

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block"
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/60">
              Waarom kiezen voor mij?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            Van probleem naar{" "}
            <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
              oplossing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/60"
          >
            Ik begrijp de uitdagingen waar bedrijven mee te maken hebben. Daarom
            bied ik concrete oplossingen met meetbare resultaten.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 flex justify-center"
        >
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB]"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "problem" && (
            <motion.div
              key="problem"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <WobbleCard
                    containerClassName="bg-red-900/40 border border-red-500/20 min-h-[240px]"
                    className="flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20">
                        <problem.icon className="h-6 w-6 text-red-400" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white">
                        {problem.title}
                      </h3>
                      <p className="mb-4 text-white/60">
                        {problem.description}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1.5 text-sm font-semibold text-red-300">
                      <X className="h-4 w-4" />
                      {problem.impact}
                    </div>
                  </WobbleCard>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "solution" && (
            <motion.div
              key="solution"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-3"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <WobbleCard
                    containerClassName="bg-emerald-900/40 border border-emerald-500/20 min-h-[240px]"
                    className="flex flex-col justify-between"
                  >
                    <div>
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20">
                        <solution.icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white">
                        {solution.title}
                      </h3>
                      <p className="mb-6 text-white/60">
                        {solution.description}
                      </p>
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="text-4xl font-bold text-white">
                        {solution.metric}
                      </div>
                      <div className="mb-1 text-sm text-white/50">
                        {solution.metricLabel}
                      </div>
                    </div>
                    <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 p-2">
                      <Check className="h-4 w-4 text-emerald-400" />
                    </div>
                  </WobbleCard>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black to-white/5 p-8 text-center transition-all hover:shadow-xl"
                >
                  <AnimatedCounter
                    value={result.value}
                    suffix={result.suffix}
                  />
                  <div className="mb-2 mt-4 text-lg font-semibold text-white">
                    {result.label}
                  </div>
                  <p className="text-sm text-white/50">{result.description}</p>
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
