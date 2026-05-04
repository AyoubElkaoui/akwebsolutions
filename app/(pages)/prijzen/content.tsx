"use client";

import { motion } from "motion/react";
import {
  Check,
  X,
  ArrowRight,
  Zap,
  Star,
  Shield,
  Sparkles,
  Clock,
  MessageSquare,
  TrendingUp,
  Code,
  ShoppingCart,
  Search,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";

const packages = [
  {
    name: "Starter",
    tagline: "Perfect voor starters en zzp'ers",
    price: 1499,
    period: "eenmalig",
    popular: false,
    color: "from-white/5 to-white/[0.02]",
    borderColor: "border-white/10",
    accentColor: "text-white",
    buttonStyle:
      "border border-white/20 bg-white/5 text-white hover:bg-white/10",
    icon: Zap,
    deliveryTime: "2-3 weken",
    features: [
      { text: "5-pagina professionele website", included: true },
      { text: "Mobiel-responsive design", included: true },
      { text: "SEO-basisoptimalisatie", included: true },
      { text: "Contactformulier", included: true },
      { text: "Laadtijd onder 2 seconden", included: true },
      { text: "Google Analytics koppeling", included: true },
      { text: "SSL-certificaat", included: true },
      { text: "1 maand gratis support", included: true },
      { text: "Blog / CMS systeem", included: false },
      { text: "E-commerce functionaliteit", included: false },
      { text: "Geavanceerde animaties", included: false },
      { text: "Maatwerk integraties", included: false },
    ],
  },
  {
    name: "Groei",
    tagline: "Voor bedrijven die willen opvallen",
    price: 2999,
    period: "eenmalig",
    popular: true,
    color: "from-[#7B4FB5]/20 to-[#3D2975]/10",
    borderColor: "border-[#7B4FB5]/50",
    accentColor: "text-[#B39DDB]",
    buttonStyle:
      "bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white shadow-lg shadow-[#7B4FB5]/30 hover:shadow-[#7B4FB5]/50",
    icon: Star,
    deliveryTime: "3-4 weken",
    features: [
      { text: "Tot 10 pagina's maatwerk design", included: true },
      { text: "Mobiel-responsive design", included: true },
      { text: "Volledige SEO-optimalisatie", included: true },
      { text: "Contactformulier + CRM koppeling", included: true },
      { text: "Laadtijd onder 1 seconde", included: true },
      { text: "Google Analytics + Search Console", included: true },
      { text: "SSL + beveiligingssetup", included: true },
      { text: "3 maanden gratis support", included: true },
      { text: "Blog / CMS systeem", included: true },
      { text: "Geavanceerde animaties & effecten", included: true },
      { text: "E-commerce functionaliteit", included: false },
      { text: "Maatwerk integraties", included: false },
    ],
  },
  {
    name: "Maatwerk",
    tagline: "Voor ambitieuze bedrijven",
    price: null,
    period: "op maat",
    popular: false,
    color: "from-[#3D2975]/15 to-[#7B4FB5]/5",
    borderColor: "border-[#3D2975]/40",
    accentColor: "text-[#B39DDB]",
    buttonStyle:
      "border border-[#7B4FB5]/50 bg-[#7B4FB5]/10 text-white hover:bg-[#7B4FB5]/20",
    icon: Shield,
    deliveryTime: "4-8 weken",
    features: [
      { text: "Onbeperkt aantal pagina's", included: true },
      { text: "Volledig maatwerk design", included: true },
      { text: "Geavanceerde SEO + content strategie", included: true },
      { text: "Alle formulieren & integraties", included: true },
      { text: "Core Web Vitals 95+ score", included: true },
      { text: "Analytics dashboard op maat", included: true },
      { text: "Enterprise beveiliging", included: true },
      { text: "6 maanden gratis support", included: true },
      { text: "Blog / CMS systeem", included: true },
      { text: "E-commerce / webshop", included: true },
      { text: "Maatwerk API-integraties", included: true },
      { text: "Prioriteit support", included: true },
    ],
  },
];

const addOns = [
  {
    icon: Search,
    name: "SEO Maandpakket",
    desc: "Maandelijkse optimalisatie, rapportages en linkbuilding",
    price: "€299/maand",
  },
  {
    icon: ShoppingCart,
    name: "Webshop Uitbreiding",
    desc: "Volledige e-commerce met Mollie betalingen",
    price: "Vanaf €999",
  },
  {
    icon: TrendingUp,
    name: "Google Ads Setup",
    desc: "Campagne-opzet + 1 maand beheer",
    price: "Vanaf €499",
  },
  {
    icon: Code,
    name: "Maatwerk Koppeling",
    desc: "API-integratie met externe systemen (CRM, boekhoud, etc.)",
    price: "Op aanvraag",
  },
  {
    icon: MessageSquare,
    name: "Copywriting",
    desc: "SEO-geoptimaliseerde teksten voor al je pagina's",
    price: "Vanaf €199",
  },
  {
    icon: Clock,
    name: "Onderhoud & Hosting",
    desc: "Maandelijks onderhoud, updates en snelle hosting",
    price: "€79/maand",
  },
];

const faqs = [
  {
    q: "Zijn er verborgen kosten?",
    a: "Nee. De prijs die je ziet is alles-inclusief voor het ontwikkelen van je website. Enige aanvullende kosten zijn hosting (€79/maand of eigen hosting) en eventuele domeinnaamregistratie.",
  },
  {
    q: "Hoe lang duurt het bouwen van mijn website?",
    a: "Een Starter website is binnen 2-3 weken klaar. Een Groei website duurt 3-4 weken. Bij Maatwerk plannen we samen de tijdlijn. Alles begint na het eerste gesprek en goedkeuring van het ontwerp.",
  },
  {
    q: "Kan ik zelf de website aanpassen na oplevering?",
    a: "Ja. Ik lever alle websites op met een eenvoudig CMS (content management systeem) waarmee jij teksten, afbeeldingen en pagina's zelf kunt aanpassen zonder technische kennis.",
  },
  {
    q: "Wat als mijn project tussen twee pakketten valt?",
    a: "Geen probleem. Ik maak altijd een offerte op maat. Neem contact op en ik denk met je mee over de beste oplossing voor jouw budget en wensen.",
  },
  {
    q: "Bied je betaling in termijnen aan?",
    a: "Ja. Standaard werk ik met 50% aanbetaling bij start en 50% bij oplevering. Bij grotere projecten zijn ook andere termijnen bespreekbaar.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]"
      initial={false}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-white md:text-base">{q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-0.5 flex-shrink-0"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-white/60">
            <span className="text-lg leading-none">+</span>
          </div>
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-sm leading-relaxed text-white/50">{a}</p>
      </motion.div>
    </motion.div>
  );
}

export function PrijzenContent() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-40">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#7B4FB5]/10 blur-[120px]" />
        </div>
        <div className="container-custom relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7B4FB5]/30 bg-[#7B4FB5]/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-[#B39DDB]" />
            <span className="text-sm font-medium text-[#B39DDB]">
              Transparante tarieven, geen verrassingen
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Investeer in jouw{" "}
            <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
              online groei
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/50"
          >
            Eerlijke prijzen voor websites die echt presteren. Kies het pakket dat past bij jouw ambities — of vraag een vrijblijvende offerte op maat aan.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl border bg-gradient-to-b p-8 ${pkg.borderColor} ${pkg.color} ${pkg.popular ? "ring-2 ring-[#7B4FB5]/50" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-2xl bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] px-4 py-1.5 text-xs font-bold text-white">
                      Meest gekozen
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon className={`h-6 w-6 ${pkg.accentColor}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{pkg.name}</h2>
                    <p className="mt-1 text-sm text-white/50">{pkg.tagline}</p>
                  </div>

                  <div className="mb-8">
                    {pkg.price ? (
                      <div className="flex items-end gap-2">
                        <span className="text-4xl font-black text-white">
                          €{pkg.price.toLocaleString("nl-NL")}
                        </span>
                        <span className="mb-1 text-sm text-white/40">{pkg.period}</span>
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl font-black text-white">Op aanvraag</span>
                        <p className="mt-1 text-sm text-white/40">Vrijblijvende offerte</p>
                      </div>
                    )}
                    <div className="mt-3 flex items-center gap-2 text-sm text-white/50">
                      <Clock className="h-4 w-4" />
                      Oplevering in {pkg.deliveryTime}
                    </div>
                  </div>

                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`mb-8 w-full rounded-xl py-3.5 text-sm font-semibold transition-all ${pkg.buttonStyle}`}
                    >
                      {pkg.price ? "Kies dit pakket" : "Vraag offerte aan"}
                    </motion.button>
                  </Link>

                  <div className="space-y-3">
                    {pkg.features.map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-3">
                        {feat.included ? (
                          <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#7B4FB5]/20">
                            <Check className="h-3 w-3 text-[#B39DDB]" />
                          </div>
                        ) : (
                          <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/5">
                            <X className="h-3 w-3 text-white/20" />
                          </div>
                        )}
                        <span
                          className={`text-sm ${feat.included ? "text-white/80" : "text-white/20"}`}
                        >
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Money back note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-white/30"
          >
            Alle prijzen zijn excl. BTW &bull; 50% aanbetaling, 50% bij oplevering &bull; Geen verborgen kosten
          </motion.p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3D2975/10_0%,_transparent_70%)]" />
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Uitbreid met{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                add-ons
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-white/50">
              Voeg extra diensten toe aan jouw pakket voor maximale online groei.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon, i) => {
              const Icon = addon.icon;
              return (
                <motion.div
                  key={addon.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all hover:border-[#7B4FB5]/30 hover:bg-[#7B4FB5]/5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7B4FB5]/10 transition-colors group-hover:bg-[#7B4FB5]/20">
                      <Icon className="h-5 w-5 text-[#B39DDB]" />
                    </div>
                    <span className="text-sm font-bold text-[#B39DDB]">{addon.price}</span>
                  </div>
                  <h3 className="mb-1 font-semibold text-white">{addon.name}</h3>
                  <p className="text-sm text-white/50">{addon.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="overflow-hidden rounded-2xl border border-[#7B4FB5]/20 bg-gradient-to-br from-[#3D2975]/20 to-black p-8 md:p-16">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7B4FB5]/30 bg-[#7B4FB5]/10 px-3 py-1.5">
                  <TrendingUp className="h-4 w-4 text-[#B39DDB]" />
                  <span className="text-xs font-medium text-[#B39DDB]">Rendement</span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                  Een website is geen{" "}
                  <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                    kostenpost
                  </span>
                </h2>
                <p className="text-white/60">
                  Een professionele website die hoog scoort in Google en snel laadt, trekt klanten aan terwijl jij slaapt. Mijn klanten zien gemiddeld 2-5x meer online aanvragen binnen 6 maanden.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "+245%", label: "Meer conversies", sub: "gemiddeld na 6 maanden" },
                  { value: "0.4s", label: "Laadtijd", sub: "vs. 3-6s gemiddeld" },
                  { value: "95+", label: "PageSpeed score", sub: "Google Core Web Vitals" },
                  { value: "98%", label: "Klanttevredenheid", sub: "op basis van reviews" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5"
                  >
                    <div className="text-2xl font-black text-white md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white/70">{stat.label}</div>
                    <div className="mt-0.5 text-xs text-white/30">{stat.sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Veelgestelde vragen
            </h2>
          </motion.div>
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <FAQItem q={faq.q} a={faq.a} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-[#7B4FB5]/30 bg-gradient-to-br from-[#3D2975]/30 to-black p-12 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7B4FB5]/20">
              <Sparkles className="h-8 w-8 text-[#B39DDB]" />
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Geen idee welk pakket past?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-white/50">
              Plan een gratis adviesgesprek van 30 minuten. Ik luister naar jouw wensen en maak een offerte op maat — geheel vrijblijvend.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] px-10 py-4 font-semibold text-white shadow-lg shadow-[#7B4FB5]/30 transition-shadow hover:shadow-[#7B4FB5]/50"
                >
                  Plan gratis gesprek
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
              <a
                href="tel:+31685722387"
                className="text-sm font-medium text-white/50 transition-colors hover:text-white"
              >
                Of bel: +31 6 85 72 23 87
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
