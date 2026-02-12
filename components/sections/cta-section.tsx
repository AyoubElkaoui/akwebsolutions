"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function CTASection() {
  return (
    <section className="relative bg-black py-32">
      {/* Background ambient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#7B4FB5]/[0.06] blur-[150px]" />
      </div>

      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black p-12 shadow-2xl lg:p-20"
          >
            {/* Background Beams */}
            <BackgroundBeams className="opacity-30" />

            {/* Decorative gradient orbs */}
            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#7B4FB5]/20 blur-[80px]" />
            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#B39DDB]/20 blur-[80px]" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-14 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7B4FB5]/30 bg-[#7B4FB5]/10 px-4 py-2"
                >
                  <Sparkles className="h-4 w-4 text-[#B39DDB]" />
                  <span className="text-sm font-medium text-[#B39DDB]">
                    Beschikbaar voor nieuwe projecten
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                >
                  Klaar om te{" "}
                  <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
                    starten
                  </span>
                  ?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mx-auto max-w-xl text-lg text-white/50"
                >
                  Neem contact op voor een vrijblijvend gesprek over de
                  mogelijkheden. Ik denk graag met je mee.
                </motion.p>
              </div>

              {/* Contact Options Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-14 grid gap-4 md:grid-cols-3"
              >
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@akwebsolutions.nl",
                    href: "mailto:info@akwebsolutions.nl",
                  },
                  {
                    icon: Phone,
                    label: "Telefoon",
                    value: "+31 6 85 72 23 87",
                    href: "tel:+31685722387",
                  },
                  {
                    icon: MapPin,
                    label: "Locatie",
                    value: "Baarn, Nederland",
                    href: null,
                  },
                ].map((item) => {
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={item.label}
                      {...(item.href ? { href: item.href } : {})}
                      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all hover:border-white/[0.15] hover:bg-white/[0.06]"
                    >
                      <div className="relative">
                        <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#7B4FB5]/20 to-[#B39DDB]/10 transition-transform duration-300 group-hover:scale-110">
                          <item.icon className="h-5 w-5 text-[#B39DDB]" />
                        </div>
                        <div className="mb-1 text-xs font-medium uppercase tracking-wider text-white/30">
                          {item.label}
                        </div>
                        <div className="text-sm font-medium text-white">
                          {item.value}
                        </div>
                      </div>
                    </Wrapper>
                  );
                })}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex h-16 items-center gap-3 rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] px-12 text-base font-semibold text-white shadow-2xl shadow-[#7B4FB5]/30 transition-all hover:shadow-[#7B4FB5]/50"
                  >
                    Start je project
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>

                <p className="mt-6 text-sm text-white/40">
                  Reactie binnen 24 uur &bull; Gratis adviesgesprek &bull; Geen
                  verplichtingen
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
