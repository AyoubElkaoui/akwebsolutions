"use client";

import { Code2, Rocket, Search, Smartphone, Zap, TrendingUp } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { BlurFade } from "@/components/magicui/blur-fade";

const services = [
  {
    name: "Snelle Websites",
    description: "Gebouwd met moderne tech stack. Geen WordPress bloat, alleen pure snelheid en performance die zorgt voor hogere conversies.",
    Icon: Zap,
    className: "lg:col-span-2",
    background: (
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
    ),
  },
  {
    name: "SEO Optimalisatie",
    description: "Eerste pagina Google binnen 4-6 weken. Technische SEO, local SEO en content strategie ingebouwd.",
    Icon: Search,
    className: "lg:col-span-1",
    background: (
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl" />
    ),
  },
  {
    name: "Custom Development",
    description: "Van strategie tot live website. Maatwerk oplossingen die perfect aansluiten bij jouw bedrijfsprocessen.",
    Icon: Code2,
    className: "lg:col-span-1",
    background: (
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
    ),
  },
  {
    name: "Mobiel-First Design",
    description: "Responsive websites die perfect werken op alle apparaten. Van smartphone tot desktop.",
    Icon: Smartphone,
    className: "lg:col-span-2",
    background: (
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl" />
    ),
  },
];

const stats = [
  { metric: "0.4s", label: "Laadtijd" },
  { metric: "95+", label: "PageSpeed" },
  { metric: "2-4 weken", label: "Live tijd" },
];

export function Services() {
  return (
    <section id="diensten" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <BlurFade delay={0.1}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Rocket className="h-3.5 w-3.5" />
              <span>Wat we aanbieden</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Snelle websites die{" "}
              <span className="gradient-text">converteren</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Van strategie tot live website. Snelheid, SEO en conversie ingebouwd in elke pixel.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.4}>
          <BentoGrid className="mb-12">
            {services.map((service, idx) => (
              <BentoCard
                key={idx}
                name={service.name}
                description={service.description}
                Icon={service.Icon}
                className={service.className}
                background={service.background}
              />
            ))}
          </BentoGrid>
        </BlurFade>

        {/* Stats Section */}
        <BlurFade delay={0.5}>
          <div className="mt-16 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="mb-2 text-4xl font-bold text-primary">{stat.metric}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Additional Features Grid */}
        <BlurFade delay={0.6}>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Data-Driven Aanpak</h3>
              <p className="text-sm text-muted-foreground">
                Meetbare KPIs en continue optimalisatie op basis van echte data en gebruikersgedrag.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Rocket className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Sprint Development</h3>
              <p className="text-sm text-muted-foreground">
                Snelle levering zonder in te leveren op kwaliteit. Start vandaag, live over een maand.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Moderne Tech Stack</h3>
              <p className="text-sm text-muted-foreground">
                Next.js, React, TypeScript en Tailwind. Schaalbaar, onderhoudbaar en toekomstbestendig.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
