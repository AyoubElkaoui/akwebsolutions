"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Send,
  Clock,
  MessageCircle,
} from "lucide-react";
import { NetherlandsMap } from "@/components/sections/netherlands-map";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@akwebsolutions.nl",
    href: "mailto:info@akwebsolutions.nl",
    description: "Stuur mij een e-mail, ik reageer binnen 24 uur",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "+31 6 85 72 23 87",
    href: "tel:+31685722387",
    description: "Bereikbaar op werkdagen van 09:00 tot 18:00",
  },
  {
    icon: MapPin,
    label: "Locatie",
    value: "Baarn, Nederland",
    href: "https://maps.google.com/?q=Baarn,Nederland",
    description: "Regio Utrecht - ook remote beschikbaar",
  },
];

const faqItems = [
  {
    question: "Wat kost een website?",
    answer:
      "De kosten van een website hangen af van de complexiteit, functionaliteiten en het ontwerp. Een eenvoudige bedrijfswebsite begint vanaf circa \u20AC1.500, terwijl een uitgebreide webshop of maatwerk applicatie hoger kan uitvallen. Ik maak altijd een vrijblijvende offerte op maat, zodat je precies weet waar je aan toe bent. Geen verborgen kosten.",
  },
  {
    question: "Hoe lang duurt het om een website te bouwen?",
    answer:
      "Een standaard website is doorgaans binnen 2 tot 4 weken gereed. Voor complexere projecten, zoals webshops of maatwerk applicaties, hanteer ik een tijdlijn van 4 tot 8 weken. Tijdens het kennismakingsgesprek stel ik samen met jou een realistische planning op die past bij jouw wensen en deadline.",
  },
  {
    question: "Welke technologie\u00ebn gebruik je?",
    answer:
      "Ik werk met de nieuwste en meest betrouwbare technologie\u00ebn: Next.js, React, TypeScript en Tailwind CSS voor de frontend, gecombineerd met Node.js en PostgreSQL voor de backend. Dit garandeert snelle, veilige en schaalbare websites die toekomstbestendig zijn.",
  },
  {
    question: "Bied je ook onderhoud aan?",
    answer:
      "Ja, ik bied diverse onderhoudsabonnementen aan. Dit omvat regelmatige updates, beveiligingspatches, backups, uptime monitoring en content wijzigingen. Zo blijft je website altijd up-to-date, veilig en optimaal presterend. Ik bied ook ad-hoc ondersteuning voor incidentele aanpassingen.",
  },
  {
    question: "Hoe verloopt het ontwikkelproces?",
    answer:
      "Het proces begint met een vrijblijvend kennismakingsgesprek om jouw wensen en doelen te begrijpen. Vervolgens maak ik een voorstel met design, planning en investering. Na akkoord start ik met de ontwikkeling in korte sprints, waarbij je regelmatig updates en demo\u2019s ontvangt. Na uitgebreid testen lanceer ik de website en bied ik doorlopende support.",
  },
];

const messagePlaceholders = [
  "Ik wil graag een nieuwe website laten bouwen...",
  "Kun je mijn bestaande website verbeteren?",
  "Ik zoek iemand voor webshop ontwikkeling...",
  "Ik wil meer weten over je SEO diensten...",
  "Wat zijn de mogelijkheden voor mijn project?",
  "Ik heb een idee voor een webapplicatie...",
];

const trustIndicators = [
  {
    icon: Clock,
    title: "Snel antwoord",
    description: "Reactie binnen 24 uur op werkdagen",
  },
  {
    icon: MessageCircle,
    title: "Vrijblijvend gesprek",
    description: "Geen verplichtingen, gewoon kennis maken",
  },
  {
    icon: Send,
    title: "Altijd bereikbaar",
    description: "Via e-mail, telefoon of online meeting",
  },
];

function FAQItem({
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
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/5"
      >
        <span className="pr-4 text-lg font-semibold text-white">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-[#B39DDB]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-white/5 px-6 pb-5 pt-4">
              <p className="leading-relaxed text-white/60">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ContactContent() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bericht: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.naam.trim()) errors.naam = "Naam is verplicht";
    if (!formData.email.trim()) {
      errors.email = "E-mailadres is verplicht";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Ongeldig e-mailadres";
    }
    if (!formData.bericht.trim()) errors.bericht = "Bericht is verplicht";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Verzenden mislukt");
      setIsSubmitted(true);
      setFormData({ naam: "", email: "", bericht: "" });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Er ging iets mis. Probeer het later opnieuw.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Spotlight Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7B4FB5]/10 via-black to-black" />
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
            >
              <MessageCircle className="h-4 w-4 text-[#B39DDB]" />
              <span className="text-sm font-semibold text-[#B39DDB]">
                Neem Contact Op
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Laten we{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                samenwerken
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-xl text-white/60"
            >
              Heb je een idee, vraag of wil je gewoon even sparren? Ik hoor
              graag van je. Neem vrijblijvend contact op en ontdek wat ik voor
              jou kan betekenen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "Locatie" ? "_blank" : undefined}
                rel={
                  item.label === "Locatie" ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-[#7B4FB5]/40 hover:bg-white/[0.07]"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#7B4FB5]/10 to-transparent transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7B4FB5]/20 to-[#B39DDB]/20">
                    <item.icon className="h-7 w-7 text-[#B39DDB]" />
                  </div>
                  <h3 className="mb-1 text-sm font-medium uppercase tracking-wider text-white/40">
                    {item.label}
                  </h3>
                  <p className="mb-2 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="text-sm text-white/50">{item.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Stuur mij een{" "}
                <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                  bericht
                </span>
              </h2>
              <p className="mx-auto max-w-xl text-lg text-white/60">
                Vul het formulier in en ik neem zo snel mogelijk contact met je
                op. Liever bellen of mailen? Dat kan natuurlijk ook.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#7B4FB5] to-[#B39DDB]">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      Bericht verzonden!
                    </h3>
                    <p className="max-w-md text-white/60">
                      Bedankt voor je bericht. Ik neem zo snel mogelijk contact
                      met je op, meestal binnen 24 uur.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="naam"
                        className="mb-2 block text-sm font-medium text-white/70"
                      >
                        Naam
                      </label>
                      <input
                        id="naam"
                        type="text"
                        placeholder="Je volledige naam"
                        value={formData.naam}
                        onChange={(e) => {
                          setFormData({ ...formData, naam: e.target.value });
                          if (fieldErrors.naam)
                            setFieldErrors((prev) => ({ ...prev, naam: "" }));
                        }}
                        className={`w-full rounded-xl border ${fieldErrors.naam ? "border-red-500/50" : "border-white/10"} bg-white/5 px-4 py-4 text-white placeholder:text-white/30 transition-colors focus:border-[#7B4FB5]/50 focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-[#7B4FB5]/30 md:px-5`}
                      />
                      {fieldErrors.naam && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {fieldErrors.naam}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-white/70"
                      >
                        E-mailadres
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="je@email.nl"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email)
                            setFieldErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        className={`w-full rounded-xl border ${fieldErrors.email ? "border-red-500/50" : "border-white/10"} bg-white/5 px-4 py-4 text-white placeholder:text-white/30 transition-colors focus:border-[#7B4FB5]/50 focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-[#7B4FB5]/30 md:px-5`}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1.5 text-xs text-red-400">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Field with PlaceholdersAndVanishInput */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/70">
                        Bericht
                      </label>
                      <PlaceholdersAndVanishInput
                        placeholders={messagePlaceholders}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            bericht: e.target.value,
                          })
                        }
                        onSubmit={handleSubmit}
                      />
                      <p className="mt-2 text-xs text-white/30">
                        Typ je bericht en druk op Enter of klik op de
                        verzendknop
                      </p>
                    </div>

                    {/* Error message */}
                    {error && (
                      <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3">
                        <p className="text-sm text-red-400">{error}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        className="group w-full rounded-xl bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] py-6 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-[#7B4FB5]/25 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="mr-2 h-5 w-5 animate-spin"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Verzenden...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            Verstuur bericht
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Veelgestelde{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                vragen
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/60">
              Antwoorden op de meest gestelde vragen. Staat jouw vraag er niet
              bij? Neem gerust contact op.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section - Netherlands Map */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Bereikbaar vanuit{" "}
              <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                heel Nederland
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/50">
              Gevestigd in Baarn, maar werkzaam voor klanten door het hele land
              en daarbuiten.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-5xl"
          >
            <NetherlandsMap />
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#3D2975]/20 via-black to-[#7B4FB5]/10 p-12 lg:p-16"
          >
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                Waarom contact opnemen?
              </h2>
              <p className="text-white/50">
                Een gesprek is altijd vrijblijvend en kost je niets.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={indicator.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7B4FB5]/20 to-[#B39DDB]/20">
                    <indicator.icon className="h-7 w-7 text-[#B39DDB]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {indicator.title}
                  </h3>
                  <p className="text-sm text-white/50">
                    {indicator.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
