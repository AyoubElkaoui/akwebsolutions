"use client";

import { ArrowRight, TrendingUp, Zap, Target } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Bandengarage Culemborg",
    category: "Lokale dienstverlening",
    description: "SEO-geoptimaliseerde website voor bandenservice. Rankings verbeterd van pagina 3 naar top 3 posities. Focus op snelle laadtijden en mobiele gebruikers.",
    results: [
      { metric: "#1-3", label: "Google" },
      { metric: "0.4s", label: "Laadtijd" },
      { metric: "40%", label: "Meer leads" },
    ],
    highlight: "40% meer spoedmeldingen via website",
    image: "🚗",
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "AD Loodgietersbedrijf",
    category: "Lokale dienstverlening",
    description: "Moderne website met focus op lokale vindbaarheid. Geoptimaliseerd voor \"loodgieter [stad]\" zoektermen. Directe contact mogelijkheden en WhatsApp integratie.",
    results: [
      { metric: "300%", label: "Meer leads" },
      { metric: "94", label: "PageSpeed" },
      { metric: "#1", label: "Lokaal" },
    ],
    highlight: "Van onzichtbaar naar #1 voor lokale zoektermen",
    image: "🔧",
    color: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    title: "Loen's Collection",
    category: "E-commerce",
    description: "E-commerce platform voor lifestyle producten. Focus op visueel design, snelle laadtijden en optimale shopping ervaring. Eerste verkoop binnen 48 uur na launch.",
    results: [
      { metric: "45%", label: "Conversie" },
      { metric: "0.5s", label: "Laadtijd" },
      { metric: "50+", label: "Orders/maand" },
    ],
    highlight: "Shopify webshop met snelle checkout flow",
    image: "🛍️",
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20",
  },
];

const skills = [
  { name: "Next.js Development", level: 95 },
  { name: "SEO Optimalisatie", level: 92 },
  { name: "UI/UX Design", level: 88 },
  { name: "E-commerce Solutions", level: 90 },
];

export function Projects() {
  return (
    <section id="projecten" className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <BlurFade delay={0.1}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Target className="h-3.5 w-3.5" />
              <span>Eerder werk</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Projecten die we realiseerden{" "}
              <span className="gradient-text">voor ondernemers zoals jij</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Van lokale bedrijven tot platforms: bekijk wat we maken en hoe we je kunnen helpen.
            </p>
          </BlurFade>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <BlurFade key={idx} delay={0.1 * (idx + 4)}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-xl",
                  project.borderColor
                )}
              >
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", project.color)} />

                <div className="relative p-6 lg:p-8">
                  <div className="grid gap-8 lg:grid-cols-12">
                    {/* Project Icon/Image */}
                    <div className="flex items-center justify-center lg:col-span-3">
                      <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-background/80 text-6xl shadow-lg backdrop-blur-sm lg:h-40 lg:w-40 lg:text-7xl">
                        {project.image}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="lg:col-span-9">
                      <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {project.category}
                      </div>

                      <h3 className="mb-3 text-2xl font-bold text-foreground lg:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mb-6 text-base text-muted-foreground lg:text-lg">
                        {project.description}
                      </p>

                      {/* Results Grid */}
                      <div className="mb-6 grid grid-cols-3 gap-4">
                        {project.results.map((result, resultIdx) => (
                          <div
                            key={resultIdx}
                            className="rounded-lg border border-border bg-background/60 p-4 text-center backdrop-blur-sm"
                          >
                            <div className="mb-1 text-2xl font-bold text-primary lg:text-3xl">
                              {result.metric}
                            </div>
                            <div className="text-xs text-muted-foreground lg:text-sm">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Highlight */}
                      <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                        <TrendingUp className="h-5 w-5 shrink-0 text-primary" />
                        <p className="text-sm font-semibold text-foreground">
                          <span className="text-primary">Resultaat:</span> {project.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Arrow */}
                <div className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Skills Section */}
        <BlurFade delay={0.7}>
          <div className="mt-16 rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-12">
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-foreground lg:text-3xl">
                Onze Expertise
              </h3>
              <p className="text-muted-foreground">
                Gespecialiseerd in moderne webtechnologieën en bewezen resultaten
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.8}>
          <div className="mt-12 text-center">
            <button className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl">
              Bekijk alle cases
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
