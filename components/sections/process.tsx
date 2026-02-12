"use client";

import { CheckCircle2, MessageSquare, FileText, Hammer, Rocket } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    number: "01",
    title: "Kennismaken",
    description: "We bespreken je bedrijf, doelen en voorbeelden die je aanspreken. Daarna krijg je een duidelijk voorstel met planning en investering.",
    Icon: MessageSquare,
    features: ["Vrijblijvend gesprek", "Helder voorstel", "Planning en scope"],
  },
  {
    number: "02",
    title: "Inhoud en plan",
    description: "Samen verzamelen we teksten, foto's en afspraken. Wij maken een planning en houden je op de hoogte van de voortgang.",
    Icon: FileText,
    features: ["Contentplanning", "Wireframes", "Overzicht materialen"],
  },
  {
    number: "03",
    title: "Bouwen en testen",
    description: "We bouwen de website en richten campagnes in. Jij kijkt mee en geeft feedback voordat we live gaan.",
    Icon: Hammer,
    features: ["Werkende website", "Campagne-instellingen", "Testverslagen"],
  },
  {
    number: "04",
    title: "Live en doorgroeien",
    description: "Na livegang meten we de resultaten en sturen we bij waar nodig. Je hebt één team voor vragen en nieuwe ideeën.",
    Icon: Rocket,
    features: ["Rapportage", "Optimalisatievoorstellen", "Snelle updates"],
  },
];

export function Process() {
  return (
    <section id="proces" className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <BlurFade delay={0.1}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span>🔄</span>
              <span>Hoe we werken</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Van kennismaken tot live.{" "}
              <span className="gradient-text">In 4 stappen</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We nemen het werk uit handen en houden je bij elke stap op de hoogte. Geen verrassingen, alleen helder communiceren.
            </p>
          </BlurFade>
        </div>

        <div className="relative">
          {/* Connecting Line - Hidden on mobile, visible on desktop */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, idx) => (
              <BlurFade key={idx} delay={0.1 * (idx + 4)}>
                <div className="relative">
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                    {/* Step Number Circle */}
                    <div className="flex items-start lg:col-span-2">
                      <div className="relative">
                        <div
                          className={cn(
                            "flex h-16 w-16 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br font-bold text-white shadow-lg lg:h-20 lg:w-20",
                            idx % 2 === 0
                              ? "from-primary to-primary/80"
                              : "from-accent to-accent/80"
                          )}
                        >
                          <span className="text-xl lg:text-2xl">{step.number}</span>
                        </div>
                        {/* Dot indicator for timeline */}
                        <div className="absolute -left-[1.65rem] top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-4 border-background bg-primary lg:block" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-10">
                      <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg lg:p-8">
                        <div className="mb-4 flex items-start gap-4">
                          <div
                            className={cn(
                              "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-110",
                              idx % 2 === 0 ? "bg-primary/10" : "bg-accent/10"
                            )}
                          >
                            <step.Icon
                              className={cn(
                                "h-6 w-6",
                                idx % 2 === 0 ? "text-primary" : "text-accent"
                              )}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-2 text-2xl font-bold text-foreground lg:text-3xl">
                              {step.title}
                            </h3>
                            <p className="text-base text-muted-foreground lg:text-lg">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Features List */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                          {step.features.map((feature, featureIdx) => (
                            <div
                              key={featureIdx}
                              className="flex items-center gap-2 text-sm text-foreground"
                            >
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* CTA at the end */}
        <BlurFade delay={0.8}>
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-12">
              <h3 className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
                Klaar om te starten?
              </h3>
              <p className="mb-6 text-lg text-muted-foreground">
                Plan een vrijblijvend gesprek en ontdek hoe we jouw bedrijf online kunnen laten groeien.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl">
                  <MessageSquare className="h-5 w-5" />
                  Plan een gesprek
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-background px-6 py-3 font-semibold text-primary transition-all hover:bg-primary/5">
                  <FileText className="h-5 w-5" />
                  Bekijk voorbeelden
                </button>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
