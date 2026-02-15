"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Star,
  Code2,
  Search,
  ShoppingCart,
  Layers,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function createAvatarDataUri(initials: string, bgColor: string): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="200" height="200" rx="100" fill="${bgColor}"/>
    <text x="100" y="115" font-family="system-ui, sans-serif" font-size="72" font-weight="600" fill="white" text-anchor="middle">${initials}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const projects = [
  {
    slug: "ad-loodgietersbedrijf",
    title: "AD Loodgietersbedrijf",
    url: "adloodgietersbedrijf.nl",
    type: "Bedrijfswebsite",
    category: "Website",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description:
      "Website voor loodgietersbedrijf met 10+ jaar ervaring in Amsterdam. 24/7 spoedservice, lekkage detectie, installaties en renovatie. Snelle, SEO-geoptimaliseerde website met contactformulier en diensten overzicht.",
    gradient: "from-[#7B4FB5] to-[#B39DDB]",
    icon: Globe,
    screenshot: "/adloodgieter/new.png",
    oldScreenshot: "/adloodgieter/old.png",
    highlights: [
      "SEO-geoptimaliseerd voor lokale vindbaarheid",
      "Contactformulier met directe notificaties",
      "Overzichtelijke dienstenpagina",
      "Razendsnel dankzij Next.js",
    ],
  },
  {
    slug: "pro-banden-service",
    title: "Pro Banden Service",
    url: "probandenservice.nl",
    type: "Bedrijfswebsite",
    category: "WordPress",
    stack: ["WordPress", "Elementor", "Astra"],
    description:
      "Website voor bandengarage met overzicht van diensten en vestigingen. Snelle bandenwissel, spoedservice, 7 dagen per week geopend.",
    gradient: "from-blue-500 to-cyan-500",
    icon: Globe,
    screenshot: "/probanden/new.png",
    highlights: [
      "Overzicht van alle diensten en vestigingen",
      "Online afspraken maken",
      "Mobiel-vriendelijk ontwerp",
      "Beheerbaar via WordPress dashboard",
    ],
  },
  {
    slug: "loens-collection",
    title: "Loens Collection",
    url: "loenscollection.com",
    type: "E-commerce Webshop",
    category: "Shopify Webshop",
    stack: ["Shopify", "Klarna", "Dawn Theme"],
    description:
      "Elegante modest fashion webshop voor dameskleding. Complete Shopify implementatie met Klarna betaalintegratie, multi-language support en productcatalogus voor jurken, tops, broeken en sets.",
    gradient: "from-pink-500 to-rose-500",
    icon: Layers,
    screenshot: "/loens/new.png",
    highlights: [
      "Klarna betaalintegratie",
      "Multi-language support (NL/EN)",
      "Uitgebreide productcatalogus",
      "Geoptimaliseerde checkout flow",
    ],
  },
  {
    slug: "mkh-bouw",
    title: "MKH Bouw",
    url: "mkhbouw.nl",
    type: "Bedrijfswebsite",
    category: "Website",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description:
      "Moderne website voor klussenbedrijf uit Amsterdam. Renovaties, badkamers, keukens, tegelwerk en schilderwerk voor particulieren en bedrijven. Portfolio showcase en offerte aanvraag functionaliteit.",
    gradient: "from-orange-500 to-amber-500",
    icon: Globe,
    screenshot: "/mkhbouw/new.png",
    highlights: [
      "Portfolio met projectfoto's",
      "Offerte aanvraag formulier",
      "Diensten overzicht per categorie",
      "Geoptimaliseerd voor Google",
    ],
  },
  {
    slug: "clockd",
    title: "Clockd",
    url: "clockd.nl",
    type: "Maatwerk Software",
    category: "Web Applicatie",
    stack: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    description:
      "Op maat gebouwd urenregistratie systeem voor bedrijven. Medewerkers kunnen uren registreren, projecten beheren en rapportages genereren. Dashboard met real-time inzichten en exports.",
    gradient: "from-emerald-500 to-green-500",
    icon: Code2,
    screenshot: "/clockd/user_anonymized.png",
    highlights: [
      "Real-time dashboard met inzichten",
      "Urenregistratie per project en medewerker",
      "Rapportages en CSV/PDF exports",
      "Rollen en rechtenbeheer",
    ],
  },
];

const deliverables = [
  { label: "Responsive design", icon: Globe },
  { label: "SEO optimalisatie", icon: Search },
  { label: "Performance optimalisatie", icon: Code2 },
  { label: "Gebruiksvriendelijk CMS", icon: Layers },
  { label: "Analytics integratie", icon: CheckCircle2 },
  { label: "Doorlopende support", icon: Star },
];

const testimonials = [
  {
    quote:
      "AK Web Solutions heeft een fantastische website voor ons gebouwd. Professioneel, snel en altijd bereikbaar. Het resultaat overtrof onze verwachtingen!",
    name: "Ahmed D.",
    designation: "AD Loodgietersbedrijf",
    src: createAvatarDataUri("AD", "#3D2975"),
  },
  {
    quote:
      "Onze webshop draait perfect dankzij Ayoub. Klanten kunnen nu online banden bestellen en dat heeft onze omzet flink verhoogd. Absolute aanrader!",
    name: "Patrick V.",
    designation: "Pro Banden Service",
    src: createAvatarDataUri("PV", "#7B4FB5"),
  },
  {
    quote:
      "Van begin tot eind een fijne samenwerking. De Shopify webshop ziet er prachtig uit en werkt perfect met Klarna. Ik krijg veel complimenten van klanten!",
    name: "Fatima L.",
    designation: "Loens Collection",
    src: createAvatarDataUri("FL", "#B39DDB"),
  },
];

const stats = [
  { value: "5+", label: "Projecten opgeleverd" },
  { value: "100%", label: "Tevreden klanten" },
  { value: "5+", label: "Diverse branches" },
];

export function PortfolioContent() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3D2975]/30 border border-[#7B4FB5]/40 text-[#B39DDB] text-sm font-medium mb-6">
              Mijn Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Projecten die <span className="text-[#B39DDB]">resultaat</span>{" "}
              opleveren
            </h1>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Van bedrijfswebsites tot complete webshops en maatwerk
              applicaties. Bekijk een selectie van projecten waar ik trots op
              ben.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#B39DDB] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="space-y-24">
            {projects.map((project, index) => {
              const isEven = index % 2 === 1;
              const IconComponent = project.icon;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isEven ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Visual Side */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div
                      className={`group/card relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden aspect-[4/3]`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.08]`}
                      />
                      {project.screenshot ? (
                        <>
                          <Image
                            src={project.screenshot}
                            alt={`${project.title} website screenshot`}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover/card:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                          <div className="absolute bottom-4 left-4 right-4 z-10">
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-gray-200 border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full p-8">
                          <div
                            className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6`}
                          >
                            <IconComponent className="w-10 h-10 text-white" />
                          </div>
                          <h3 className="relative z-10 text-2xl font-bold text-white mb-2 text-center">
                            {project.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-xs font-semibold text-white`}
                      >
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {project.type}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      {project.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#B39DDB] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-6">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                      >
                        Bekijk case study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      {project.url && (
                        <a
                          href={`https://${project.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#B39DDB] hover:text-white transition-colors text-sm font-medium"
                        >
                          Bekijk live website
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Clients Get */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Bij elk project lever ik:
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Ongeacht het type project, deze zaken zitten altijd inbegrepen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {deliverables.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3D2975]/40 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#B39DDB]" />
                  </div>
                  <span className="text-gray-200 font-medium">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Wat klanten <span className="text-[#B39DDB]">zeggen</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Echte feedback van tevreden opdrachtgevers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <AnimatedTestimonials testimonials={testimonials} autoplay />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3D2975]/20 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Jouw project <span className="text-[#B39DDB]">hier?</span>
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-8">
                Ik help je graag met het realiseren van jouw website, webshop of
                applicatie. Neem vrijblijvend contact op voor een gesprek.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#3D2975] hover:bg-[#7B4FB5] text-white rounded-full px-8"
              >
                <Link href="/contact">
                  Neem contact op
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
