"use client";

import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/magicui/dot-pattern";

export function CTA() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-background">
      <DotPattern className="opacity-30" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Main CTA Card */}
          <BlurFade delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 shadow-2xl lg:p-12">
              {/* Gradient Orbs */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

              <div className="relative">
                <div className="mb-12 text-center">
                  <BlurFade delay={0.2}>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                      <Send className="h-3.5 w-3.5" />
                      <span>Laten we kennismaken</span>
                    </div>
                  </BlurFade>

                  <BlurFade delay={0.3}>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                      Bel of mail voor een{" "}
                      <span className="gradient-text">vrijblijvend gesprek</span>
                    </h2>
                  </BlurFade>

                  <BlurFade delay={0.4}>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                      We bespreken je situatie, denken mee over oplossingen en geven je een helder voorstel. Geen verplichtingen, gewoon eerlijk advies.
                    </p>
                  </BlurFade>
                </div>

                {/* Contact Grid */}
                <div className="grid gap-6 lg:grid-cols-3">
                  <BlurFade delay={0.5}>
                    <a
                      href="mailto:info@akwebsolutions.nl"
                      className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">E-mail</h3>
                        <p className="text-sm text-primary">info@akwebsolutions.nl</p>
                      </div>
                    </a>
                  </BlurFade>

                  <BlurFade delay={0.6}>
                    <a
                      href="tel:+31685722387"
                      className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 transition-transform group-hover:scale-110">
                        <Phone className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">Telefoon</h3>
                        <p className="text-sm text-accent">+31 (0)6 85 72 23 87</p>
                      </div>
                    </a>
                  </BlurFade>

                  <BlurFade delay={0.7}>
                    <div className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-lg">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-transform group-hover:scale-110">
                        <MapPin className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">Locatie</h3>
                        <p className="text-sm text-muted-foreground">Baarn, Nederland</p>
                      </div>
                    </div>
                  </BlurFade>
                </div>

                {/* Quick Contact Form */}
                <BlurFade delay={0.8}>
                  <div className="mt-12 rounded-2xl border border-border bg-card p-6 lg:p-8">
                    <h3 className="mb-6 text-center text-xl font-bold text-foreground lg:text-2xl">
                      Snel contact formulier
                    </h3>

                    <form className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                            Naam *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="Jouw naam"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                            E-mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="jouw@email.nl"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                          Telefoonnummer
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="+31 6 12345678"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                          Bericht *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="Vertel ons over je project..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="group w-full text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                      >
                        Verstuur bericht
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        We reageren binnen 1 werkdag
                      </p>
                    </form>
                  </div>
                </BlurFade>

                {/* Trust Indicators */}
                <BlurFade delay={0.9}>
                  <div className="mt-12 grid gap-4 text-center sm:grid-cols-3">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xl">⚡</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">Snelle reactie</p>
                      <p className="text-xs text-muted-foreground">Binnen 24 uur</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                        <span className="text-xl">🤝</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">Vrijblijvend</p>
                      <p className="text-xs text-muted-foreground">Geen verplichtingen</p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-xl">💬</span>
                      </div>
                      <p className="text-sm font-medium text-foreground">Persoonlijk</p>
                      <p className="text-xs text-muted-foreground">Direct contact</p>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
