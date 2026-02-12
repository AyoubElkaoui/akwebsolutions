"use client";

import { motion } from "motion/react";
import {
  Code2,
  Search,
  ShoppingCart,
  Layers,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Award,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";
import { useState } from "react";

/* ─────────────────────────────────────────────
   FAQ Data
   ───────────────────────────────────────────── */

const faqs = [
  {
    question: "Wat kost een website laten maken?",
    answer:
      "Een bedrijfswebsite begint vanaf €1.500, afhankelijk van de complexiteit en functionaliteiten. Tijdens een vrijblijvend gesprek breng ik je wensen in kaart en ontvang je een transparante offerte.",
  },
  {
    question: "Hoe lang duurt het om een website te bouwen?",
    answer:
      "Een standaard website is binnen 3 tot 5 weken klaar. Complexere projecten zoals webshops of maatwerk applicaties duren 6 tot 12 weken. Ik werk met heldere milestones en wekelijkse updates.",
  },
  {
    question: "Waarom Next.js en niet WordPress?",
    answer:
      "Next.js websites laden 3-5x sneller, scoren 90+ op PageSpeed en zijn veel veiliger — geen kwetsbare plugins nodig. Alles wordt op maat gebouwd en ik integreer een headless CMS voor eenvoudig contentbeheer.",
  },
  {
    question: "Is SEO inbegrepen bij een nieuwe website?",
    answer:
      "Ja, elke website bevat een solide SEO-basis: snelle laadtijden, structured data, XML sitemaps, meta-tags en semantische HTML. Voor een complete SEO-strategie bied ik aparte pakketten aan.",
  },
  {
    question: "Bied je ook hosting en domeinregistratie aan?",
    answer:
      "Ja. De meeste websites host ik op Vercel — geoptimaliseerd voor Next.js met een wereldwijd CDN. Hosting begint bij €0 voor kleinere projecten. Domeinregistratie regel ik ook.",
  },
  {
    question: "Kan ik mijn website zelf beheren en aanpassen?",
    answer:
      "Absoluut. Ik integreer een headless CMS (Sanity of Contentful) waarmee je zelf teksten en afbeeldingen kunt aanpassen. Na oplevering ontvang je een handleiding.",
  },
  {
    question: "Wat als ik al een website heb die verbeterd moet worden?",
    answer:
      "Ik help graag met het verbeteren of vernieuwen van je bestaande website — van snelheidsoptimalisatie en SEO tot een complete redesign in een modern framework.",
  },
  {
    question: "Hoe werkt de samenwerking met een freelance webdeveloper?",
    answer:
      "Eén vast aanspreekpunt, korte lijnen en geen overhead. Ik werk met vaste prijzen, wekelijkse updates en blijf na oplevering beschikbaar voor support en doorontwikkeling.",
  },
];

/* ─────────────────────────────────────────────
   Timeline Data
   ───────────────────────────────────────────── */

const timelineData = [
  {
    title: "01",
    content: (
      <div>
        <h3 className="mb-3 text-2xl font-bold text-white">
          Kennismakingsgesprek
        </h3>
        <p className="mb-4 text-white/60 leading-relaxed">
          We bespreken jouw wensen, doelen, budget en planning. Direct contact
          met mij als developer — geen tussenpersonen.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Doelen", "Budget", "Planning", "Wensen", "Analyse"].map((tag) => (
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
    title: "02",
    content: (
      <div>
        <h3 className="mb-3 text-2xl font-bold text-white">
          Voorstel &amp; Planning
        </h3>
        <p className="mb-4 text-white/60 leading-relaxed">
          Je ontvangt een helder voorstel met scope, timeline en vaste prijs.
          Inclusief wireframes zodat je precies weet wat je krijgt.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Scope", "Timeline", "Wireframes", "Design", "Offerte"].map(
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
    title: "03",
    content: (
      <div>
        <h3 className="mb-3 text-2xl font-bold text-white">Development</h3>
        <p className="mb-4 text-white/60 leading-relaxed">
          Ik bouw in korte sprints met regelmatige demos en wekelijkse updates.
          Aanpassingen worden snel doorgevoerd zonder vertraging.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Sprints", "Code Reviews", "Testing", "Feedback", "Demos"].map(
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
    title: "04",
    content: (
      <div>
        <h3 className="mb-3 text-2xl font-bold text-white">
          Testing &amp; Launch
        </h3>
        <p className="mb-4 text-white/60 leading-relaxed">
          Uitgebreid testen op alle apparaten, snelheid, SEO en beveiliging.
          Daarna een soepele lancering met hosting, SSL, analytics en
          monitoring.
        </p>
        <div className="flex flex-wrap gap-2">
          {["QA", "Performance", "SEO Check", "Security", "Go Live"].map(
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
    title: "05",
    content: (
      <div>
        <h3 className="mb-3 text-2xl font-bold text-white">
          Support &amp; Groei
        </h3>
        <p className="mb-4 text-white/60 leading-relaxed">
          Doorlopende support, monitoring en onderhoud. Samen analyseren we
          resultaten en pakken we kansen voor verbetering — ik groei mee met
          jouw bedrijf.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Monitoring", "Updates", "Optimalisatie", "Analytics", "Groei"].map(
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
];

/* ─────────────────────────────────────────────
   Benefits Data
   ───────────────────────────────────────────── */

const benefits = [
  {
    icon: Zap,
    title: "Supersnel",
    description:
      "Elke website die ik bouw scoort 90+ op Google PageSpeed. Snelheid is cruciaal voor SEO, gebruikerservaring en conversie. Met server-side rendering, beeldoptimalisatie en edge-caching laadt jouw website razendsnel, ook op mobiel.",
  },
  {
    icon: Shield,
    title: "Veilig",
    description:
      "Beveiliging is geen afterthought maar de basis. Ik gebruik moderne frameworks zonder bekende kwetsbaarheden, implementeer HTTPS, beveiligde headers en regelmatige updates. Geen kwetsbare WordPress-plugins, maar schone en veilige code.",
  },
  {
    icon: TrendingUp,
    title: "Schaalbaar",
    description:
      "Websites en applicaties die ik bouw groeien mee met jouw bedrijf. Van 100 naar 100.000 bezoekers per maand — de architectuur is gebouwd om te schalen zonder performance-verlies of dure server-upgrades.",
  },
];

/* ─────────────────────────────────────────────
   FAQ Item Component
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-[#B39DDB]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 leading-relaxed text-white/60">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export function DienstenContent() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden pt-32 pb-16">
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
                Mijn Diensten
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Professionele weboplossingen die{" "}
              <span className="text-[#B39DDB]">resultaat opleveren</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-white/60"
            >
              Als freelance webdeveloper in Baarn bouw ik razendsnelle websites,
              webshops en maatwerkoplossingen met Next.js en React. Van concept
              en ontwerp tot lancering, SEO-optimalisatie en doorlopende support
              — ik begeleid je bij elke stap.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto grid max-w-lg grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Award className="h-5 w-5 text-[#B39DDB]" />
                  <span className="text-3xl font-bold text-white">50+</span>
                </div>
                <p className="mt-1 text-sm text-white/40">Projecten</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Clock className="h-5 w-5 text-[#B39DDB]" />
                  <span className="text-3xl font-bold text-white">5+</span>
                </div>
                <p className="mt-1 text-sm text-white/40">Jaar ervaring</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Users className="h-5 w-5 text-[#B39DDB]" />
                  <span className="text-3xl font-bold text-white">100%</span>
                </div>
                <p className="mt-1 text-sm text-white/40">Tevreden</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Diensten Overview ── */}
      <section className="py-20">
        <div className="container-custom">
          {/* Intro paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Wat ik voor je kan{" "}
              <span className="text-[#B39DDB]">betekenen</span>
            </h2>
            <p className="text-lg leading-relaxed text-white/60">
              Van snelle websites en webshops tot SEO en maatwerk software. Elke
              oplossing op maat gemaakt om jouw bedrijf te laten groeien.
            </p>
          </motion.div>

          {/* ── Service 1: Web Development ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05] md:p-10"
          >
            <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <Code2 className="h-7 w-7 text-[#B39DDB]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Website Laten Maken
                  </h3>
                  <p className="text-sm text-[#B39DDB]/70">
                    Moderne, snelle en SEO-vriendelijke websites met Next.js
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#B39DDB]">95+</div>
                <div className="text-xs text-white/40">PageSpeed Score</div>
              </div>
            </div>

            <p className="mb-6 text-white/60 leading-relaxed">
              Op maat gemaakte websites met Next.js, React en TypeScript — geen
              overbodige code, geen trage plugins. Met server-side rendering en
              mobile-first design laadt jouw website razendsnel en scoort
              consistent 90+ op Google PageSpeed. Inclusief headless CMS zodat
              je zelf eenvoudig content kunt beheren.
            </p>

            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {[
                "Next.js & React development",
                "Server-side rendering (SSR) & SSG",
                "Progressive Web Apps (PWA)",
                "Responsive & mobile-first design",
                "API integraties & headless CMS",
                "Geoptimaliseerd voor Core Web Vitals",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B39DDB]" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Vercel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link href="/diensten/website-laten-maken">
              <Button
                size="sm"
                className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
              >
                Meer over websites
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* ── Service 2: SEO Optimalisatie ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05] md:p-10"
          >
            <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <Search className="h-7 w-7 text-[#B39DDB]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    SEO Optimalisatie
                  </h3>
                  <p className="text-sm text-[#B39DDB]/70">
                    Hoger ranken in Google en meer organisch verkeer
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#B39DDB]">#1-3</div>
                <div className="text-xs text-white/40">Google Rankings</div>
              </div>
            </div>

            <p className="mb-6 text-white/60 leading-relaxed">
              Ik combineer technische SEO, on-page optimalisatie en local SEO
              tot een strategie die meetbaar resultaat oplevert. Van Core Web
              Vitals en structured data tot keyword research en Google
              Bedrijfsprofiel — meer zichtbaarheid, meer bezoekers en meer
              klanten zonder advertentiekosten.
            </p>

            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {[
                "Uitgebreide technische SEO-audit",
                "On-page & content optimalisatie",
                "Structured data (Schema.org)",
                "Local SEO & Google Bedrijfsprofiel",
                "Core Web Vitals optimalisatie",
                "Keyword research & concurrentieanalyse",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B39DDB]" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "Google Search Console",
                "Google Analytics",
                "Ahrefs",
                "Schema.org",
                "XML Sitemap",
                "Core Web Vitals",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link href="/diensten/seo-optimalisatie">
              <Button
                size="sm"
                className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
              >
                Meer over SEO
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* ── Service 3: E-commerce / Webshop ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05] md:p-10"
          >
            <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <ShoppingCart className="h-7 w-7 text-[#B39DDB]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Webshop Laten Maken
                  </h3>
                  <p className="text-sm text-[#B39DDB]/70">
                    E-commerce oplossingen die converteren en schalen
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#B39DDB]">+45%</div>
                <div className="text-xs text-white/40">Conversie Rate</div>
              </div>
            </div>

            <p className="mb-6 text-white/60 leading-relaxed">
              Online winkels die converteren, gebouwd op Shopify, WooCommerce of
              custom Next.js. Met iDEAL, Klarna en geoptimaliseerde
              checkout-flows haal je het maximale uit elke bezoeker.
              Voorraadbeheer, verzendopties en conversie-optimalisatie
              inbegrepen.
            </p>

            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {[
                "Shopify & WooCommerce development",
                "Custom webshop oplossingen in Next.js",
                "iDEAL, Mollie & Stripe integraties",
                "Voorraadbeheer & verzendopties",
                "Checkout & conversie optimalisatie",
                "Product SEO & Google Shopping",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B39DDB]" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "Shopify",
                "WooCommerce",
                "Mollie",
                "Stripe",
                "Next.js Commerce",
                "Google Shopping",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link href="/diensten/webshop-laten-maken">
              <Button
                size="sm"
                className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
              >
                Meer over webshops
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* ── Service 4: Maatwerk Software ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05] md:p-10"
          >
            <div className="mb-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <Layers className="h-7 w-7 text-[#B39DDB]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Maatwerk Software
                  </h3>
                  <p className="text-sm text-[#B39DDB]/70">
                    Custom webapplicaties die je bedrijfsprocessen stroomlijnen
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#B39DDB]">24/7</div>
                <div className="text-xs text-white/40">Beschikbaarheid</div>
              </div>
            </div>

            <p className="mb-6 text-white/60 leading-relaxed">
              Van dashboards en klantportalen tot API-koppelingen en
              geautomatiseerde workflows. Gebouwd met Next.js, Node.js en
              PostgreSQL, naadloos geïntegreerd met je bestaande systemen.
              Schaalbaar, onderhoudbaar en opgeleverd met documentatie.
            </p>

            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {[
                "Custom webapplicaties & portalen",
                "Dashboards & data-visualisatie",
                "RESTful API development",
                "Database ontwerp & optimalisatie",
                "Third-party integraties (CRM, ERP)",
                "Cloud deployment & DevOps",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B39DDB]" />
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "Next.js",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "AWS",
                "Vercel",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link href="/diensten/maatwerk-software">
              <Button
                size="sm"
                className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
              >
                Meer over maatwerk
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Werkproces Timeline ── */}
      <section className="py-20">
        <div className="container-custom mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Mijn <span className="text-[#B39DDB]">werkproces</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Van het eerste gesprek tot de lancering en daarna — ik werk met
              een helder, transparant en beproefd proces. Zo weet je altijd
              precies waar je aan toe bent en worden projecten op tijd en binnen
              budget opgeleverd.
            </p>
          </motion.div>
        </div>
        <Timeline data={timelineData} />
      </section>

      {/* ── Waarom AK Web Solutions ── */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Waarom <span className="text-[#B39DDB]">AK Web Solutions</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Als freelance webdeveloper combineer ik de kwaliteit van een
              professioneel webbureau met de persoonlijke aanpak en
              flexibiliteit van een ZZP&apos;er. Dit is waar ik het verschil
              maak.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-colors duration-300 hover:border-[#7B4FB5]/30 hover:bg-white/[0.05]"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/40 to-[#7B4FB5]/20">
                  <benefit.icon className="h-8 w-8 text-[#B39DDB]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-white/50">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Veelgestelde <span className="text-[#B39DDB]">vragen</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Heb je vragen over mijn diensten, werkwijze of prijzen? Hieronder
              vind je antwoorden op de meest gestelde vragen. Staat jouw vraag
              er niet bij? Neem dan gerust contact op.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/20 to-[#7B4FB5]/10 p-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              Klaar om jouw project te starten?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/60">
              Of je nu een nieuwe website wilt laten maken, je webshop wilt
              optimaliseren of maatwerk software nodig hebt — ik denk graag met
              je mee. Plan een vrijblijvend kennismakingsgesprek en ontdek wat
              ik voor jouw bedrijf kan betekenen.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
              >
                Plan een gesprek
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
