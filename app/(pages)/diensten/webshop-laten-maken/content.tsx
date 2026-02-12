"use client";

import { motion } from "motion/react";
import {
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Package,
  Smartphone,
  BarChart3,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Search,
  Code2,
  MessageSquare,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const ecommerceFeatures = [
  {
    icon: CreditCard,
    title: "Betaalintegraties",
    description:
      "iDEAL, Klarna, creditcard, PayPal, Bancontact en meer. Ik integreer alle populaire betaalmethoden zodat je klanten altijd kunnen afrekenen op de manier die zij prefereren.",
  },
  {
    icon: Package,
    title: "Productbeheer",
    description:
      "Een overzichtelijk systeem voor het beheren van je producten, varianten, voorraad en prijzen. Importeer honderden producten tegelijk of voeg ze individueel toe met alle details.",
  },
  {
    icon: ShoppingCart,
    title: "Checkout Optimalisatie",
    description:
      "De checkout is waar het geld verdiend wordt. Ik optimaliseer elke stap van het afrekenproces om winkelwagenverlatingen te minimaliseren en conversies te maximaliseren.",
  },
  {
    icon: Smartphone,
    title: "Mobiel Winkelen",
    description:
      "Meer dan 65% van alle online aankopen gebeurt via mobiel. Jouw webshop werkt perfect op elk apparaat met een naadloze browse- en bestelervaring.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description:
      "Uitgebreide analytics om je omzet, conversies, populaire producten en klantgedrag te volgen. Data-gedreven beslissingen voor continue groei van je webshop.",
  },
  {
    icon: Shield,
    title: "Veiligheid & Compliance",
    description:
      "SSL-beveiliging, PCI-compliance en AVG/GDPR-conforme oplossingen. Je klanten winkelen met vertrouwen en hun gegevens zijn altijd beschermd.",
  },
];

const platformComparison = [
  {
    name: "Shopify",
    best: "Beste voor de meeste webshops",
    highlighted: true,
    pros: [
      "Betrouwbaar en schaalbaar platform",
      "Uitstekend productbeheer",
      "Grote app marketplace",
      "Geoptimaliseerde checkout",
      "24/7 platform support",
    ],
    cons: [
      "Maandelijkse abonnementskosten",
      "Transactiekosten bij externe gateways",
    ],
  },
  {
    name: "WooCommerce",
    best: "Goed voor WordPress gebruikers",
    highlighted: false,
    pros: [
      "Volledige controle over je data",
      "Geen maandelijkse platformkosten",
      "Grote plugin beschikbaarheid",
      "Flexibel en aanpasbaar",
    ],
    cons: [
      "Vereist meer technisch onderhoud",
      "Performance afhankelijk van hosting",
      "Beveiligingsrisico's door plugins",
    ],
  },
  {
    name: "Custom (Next.js)",
    best: "Voor unieke vereisten",
    highlighted: false,
    pros: [
      "Volledige maatwerk mogelijkheden",
      "Maximale performance (95+ PageSpeed)",
      "Geen platform beperkingen",
      "Unieke gebruikerservaring",
    ],
    cons: [
      "Hogere initiële investering",
      "Langere ontwikkeltijd",
    ],
  },
];

const faqs = [
  {
    question: "Wat kost het om een webshop te laten maken?",
    answer:
      "Een professionele webshop op Shopify begint vanaf €2.500. Dit omvat het ontwerp, de inrichting, productpagina's, betaalintegraties en lancering. Een uitgebreidere webshop met custom functionaliteiten, meerdere talen of complexe integraties kost meer. Ik maak altijd een gedetailleerde offerte op maat zodat je precies weet wat je krijgt.",
  },
  {
    question: "Hoe lang duurt het om een webshop te bouwen?",
    answer:
      "Een standaard Shopify webshop is binnen 3-5 weken klaar. Dit omvat ontwerp, development, producten toevoegen, testen en lancering. Voor complexere shops met custom functionaliteiten reken ik 6-10 weken. De doorlooptijd hangt ook af van hoe snel je content en productfoto's aanlevert.",
  },
  {
    question: "Welk platform raad je aan: Shopify of WooCommerce?",
    answer:
      "Voor de meeste webshops raad ik Shopify aan. Het is betrouwbaar, schaalbaar en heeft een geoptimaliseerde checkout die bewezen hogere conversies oplevert. WooCommerce is een goede keuze als je al een WordPress website hebt of volledige controle over je data wilt. Ik adviseer je graag welk platform het beste past bij jouw situatie.",
  },
  {
    question: "Kan ik zelf producten toevoegen en beheren?",
    answer:
      "Absoluut. Zowel Shopify als WooCommerce heeft een gebruiksvriendelijk dashboard waarmee je zelf producten kunt toevoegen, prijzen aanpassen, voorraad bijhouden en bestellingen verwerken. Na de oplevering geef ik je een instructie zodat je direct zelfstandig aan de slag kunt.",
  },
  {
    question: "Welke betaalmethoden kan ik aanbieden?",
    answer:
      "Alle populaire betaalmethoden: iDEAL (verreweg het populairst in Nederland), creditcard, Klarna (achteraf betalen), PayPal, Bancontact (voor Belgische klanten), Apple Pay en Google Pay. Ik integreer de betaalprovider die het beste past bij jouw doelgroep, zoals Mollie of Shopify Payments.",
  },
  {
    question: "Hoe zorg je dat mijn webshop goed vindbaar is in Google?",
    answer:
      "SEO is standaard onderdeel van elke webshop die ik bouw. Ik optimaliseer productpagina's, categoriepagina's en de technische structuur voor zoekmachines. Dit omvat product schema markup, geoptimaliseerde URL-structuur, snelle laadtijden en mobile-first design. Voor doorlopende SEO optimalisatie kun je ook mijn SEO dienst bekijken.",
  },
  {
    question: "Kan je ook mijn bestaande webshop verbeteren?",
    answer:
      "Ja, ik help ook met het optimaliseren van bestaande webshops. Of het nu gaat om een redesign, conversie optimalisatie, snelheidsverbetering of het toevoegen van nieuwe functionaliteiten — ik analyseer eerst je huidige shop en doe concrete aanbevelingen voor verbetering.",
  },
];

export function WebshopLatenMakenContent() {
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
              <ShoppingCart className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Webshop Laten Maken
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Professionele Webshop{" "}
              <span className="text-[#B39DDB]">Laten Maken</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl text-lg text-white/60 sm:text-xl"
            >
              Ik bouw webshops die converteren. Van Shopify tot custom
              e-commerce oplossingen — met iDEAL, Klarna en geoptimaliseerde
              checkout. Start met online verkopen en laat je omzet groeien.
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
                  Start met je webshop
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Bekijk mijn webshops
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Sell Online */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Waarom online verkopen{" "}
                <span className="text-[#B39DDB]">nu moet</span>
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
                De e-commerce markt in Nederland groeit explosief. In 2024
                besteedden Nederlanders meer dan{" "}
                <strong className="text-white">€35 miljard</strong> online. En
                die groei zet door. Consumenten kopen steeds vaker online,
                niet alleen producten maar ook diensten. Als ondernemer kun
                je het je niet veroorloven om hier niet bij te zijn.
              </p>
              <p>
                Met een professionele webshop bereik je klanten in heel
                Nederland — en daarbuiten. Je bent{" "}
                <strong className="text-white">24 uur per dag, 7 dagen per week</strong> open,
                zonder extra personeelskosten. Je klanten bestellen wanneer
                het hen uitkomt, of dat nu om 3 uur &apos;s nachts is of
                tijdens hun lunchpauze.
              </p>
              <p>
                Een webshop is meer dan een online catalogus. Het is een
                verkoopkanaal dat je omzet aanzienlijk kan verhogen. Met de
                juiste strategie voor conversie optimalisatie, SEO en
                gebruikerservaring haal je het maximale uit elke bezoeker die
                op je webshop landt.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  value: "€35 mrd",
                  label: "E-commerce omzet NL",
                  sub: "in 2024",
                },
                {
                  value: "65%",
                  label: "Koopt via mobiel",
                  sub: "van alle online shoppers",
                },
                {
                  value: "24/7",
                  label: "Open voor klanten",
                  sub: "zonder extra kosten",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
                >
                  <div className="mb-1 text-3xl font-bold text-[#B39DDB]">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-white">{stat.label}</div>
                  <div className="text-sm text-white/40">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Shopify vs WooCommerce vs{" "}
                <span className="text-[#B39DDB]">Custom</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/60">
                Welk platform past het beste bij jouw webshop? Ik adviseer
                op basis van je specifieke situatie.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3">
              {platformComparison.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl border p-6 ${
                    platform.highlighted
                      ? "border-[#7B4FB5]/30 bg-white/[0.05]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {platform.highlighted && (
                    <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-[#7B4FB5]/20 px-3 py-1 text-xs font-semibold text-[#B39DDB]">
                      <Star className="h-3 w-3" />
                      Aanbevolen
                    </div>
                  )}
                  <h3 className="mb-1 text-2xl font-bold text-white">
                    {platform.name}
                  </h3>
                  <p className="mb-6 text-sm text-[#B39DDB]">
                    {platform.best}
                  </p>

                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/40">
                      Voordelen
                    </h4>
                    <ul className="space-y-2">
                      {platform.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B39DDB]" />
                          <span className="text-sm text-white/60">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/40">
                      Aandachtspunten
                    </h4>
                    <ul className="space-y-2">
                      {platform.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/20" />
                          <span className="text-sm text-white/40">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Wat ik bouw voor jouw{" "}
              <span className="text-[#B39DDB]">webshop</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Elke webshop die ik bouw is geoptimaliseerd voor conversie,
              snelheid en gebruiksvriendelijkheid.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ecommerceFeatures.map((feature, index) => (
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

      {/* Conversion Optimization */}
      <section className="py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Conversie optimalisatie:{" "}
                <span className="text-[#B39DDB]">meer bezoekers, meer omzet</span>
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
                Een mooie webshop is niet genoeg. Het gaat om het percentage
                bezoekers dat daadwerkelijk iets koopt — je conversieratio.
                De gemiddelde webshop in Nederland heeft een conversieratio
                van slechts 2-3%. Met gerichte optimalisatie til ik dit naar{" "}
                <strong className="text-white">4-6% of hoger</strong>.
              </p>
              <p>
                Ik optimaliseer elk touchpoint in de klantreis: van de eerste
                indruk op je homepage, via duidelijke productpagina&apos;s met
                overtuigende foto&apos;s en reviews, tot een gestroomlijnde
                checkout met zo min mogelijk stappen. Elke klik is doordacht
                om de bezoeker richting aankoop te begeleiden.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Duidelijke call-to-actions op elke pagina",
                "Productfoto's die verkopen",
                "Klantreviews en social proof",
                "Urgentie en schaarste triggers",
                "Geoptimaliseerde mobiele checkout",
                "Verlaten winkelwagen e-mails",
                "Upsell en cross-sell suggesties",
                "Snelle laadtijden (< 2 seconden)",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                  <span className="text-white/60">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study: Loens Collection */}
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
              <h2 className="mb-4 text-3xl font-bold text-white">
                Loens Collection
              </h2>
              <p className="mb-6 text-lg text-white/60 leading-relaxed">
                Voor Loens Collection heb ik een complete Shopify fashion
                webshop gebouwd. Van het ontwerp tot de lancering, inclusief
                productfotografie integratie, maat- en kleurvarianten,
                iDEAL en Klarna betaling en een geoptimaliseerde mobiele
                checkout. De webshop is gebouwd met focus op
                gebruiksvriendelijkheid en conversie, en stelt het merk in
                staat om hun collectie professioneel online te presenteren
                en te verkopen.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Platform", value: "Shopify" },
                  { label: "Branche", value: "Fashion & Kleding" },
                  { label: "Betaalmethoden", value: "iDEAL, Klarna, Creditcard" },
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
                Wat kost een webshop{" "}
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
                  Vanaf €2.500
                </span>
              </div>
              <p className="mb-6 text-lg text-white/70 leading-relaxed">
                De investering voor een professionele webshop hangt af van
                het platform, het aantal producten, gewenste
                functionaliteiten en het niveau van maatwerk. Een standaard
                Shopify webshop is een andere investering dan een custom
                e-commerce oplossing met geavanceerde integraties.
              </p>
              <div className="mb-8 space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Wat is inbegrepen:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Custom ontwerp passend bij je merk",
                    "Productpagina's en categorieen",
                    "Betaalintegraties (iDEAL, Klarna, etc.)",
                    "Mobiel-geoptimaliseerde checkout",
                    "SEO basis optimalisatie",
                    "Analytics en tracking setup",
                    "Training en documentatie",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#B39DDB]" />
                      <span className="text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-white/50">
                Prijzen zijn exclusief BTW. Daarnaast komen er maandelijkse
                kosten voor het platform (Shopify vanaf €36/maand) en
                eventuele apps of plugins.
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
                Combineer je webshop met{" "}
                <span className="text-[#B39DDB]">deze diensten</span>
              </h2>
              <p className="mb-8 text-lg text-white/60 leading-relaxed">
                Een webshop is het krachtigst in combinatie met SEO en een
                sterke website. Bekijk hoe ik je verder kan helpen:
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
                <h3 className="mb-1 font-bold text-white">
                  SEO Optimalisatie
                </h3>
                <p className="text-sm text-white/50">
                  Meer organisch verkeer naar je shop
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
                  Custom integraties en koppelingen
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
                <span className="text-[#B39DDB]">webshops</span>
              </h2>
              <p className="text-lg text-white/60">
                Alles wat je wilt weten over het laten maken van een webshop.
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
              Klaar om online te gaan verkopen?
            </h2>
            <p className="mb-8 text-lg text-white/60">
              Neem contact op voor een vrijblijvend gesprek over jouw webshop.
              Ik help je met het kiezen van het juiste platform en maak een
              plan op maat.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white"
                >
                  Start met je webshop
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
