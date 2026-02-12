"use client";

import { motion } from "motion/react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed D.",
    title: "AD Loodgietersbedrijf",
    quote:
      "AK Web Solutions heeft een fantastische website voor ons gebouwd. Professioneel, snel en altijd bereikbaar. Het resultaat overtrof onze verwachtingen!",
    rating: 5,
  },
  {
    name: "Patrick V.",
    title: "Pro Banden Service",
    quote:
      "Onze website draait perfect dankzij Ayoub. Klanten kunnen nu makkelijk diensten vinden en dat heeft ons bereik flink vergroot.",
    rating: 5,
  },
  {
    name: "Fatima L.",
    title: "Loens Collection",
    quote:
      "De Shopify webshop ziet er prachtig uit en werkt perfect met Klarna. Ik krijg veel complimenten van klanten over het design!",
    rating: 5,
  },
  {
    name: "Mohammed K.",
    title: "MKH Bouw",
    quote:
      "Van begin tot eind een fijne samenwerking. De website presenteert ons werk perfect en we krijgen nu meer offerte aanvragen.",
    rating: 5,
  },
  {
    name: "Thomas B.",
    title: "Clockd",
    quote:
      "De urenregistratie app die Ayoub heeft gebouwd bespaart ons uren per week. Betrouwbaar, snel en precies wat we nodig hadden.",
    rating: 5,
  },
  {
    name: "Sarah J.",
    title: "StartUp Founder",
    quote:
      "Beste investering voor ons bedrijf. De ROI was binnen 3 maanden positief dankzij de snelle, geoptimaliseerde website.",
    rating: 5,
  },
];

const row1Items = testimonials.slice(0, 3);
const row2Items = testimonials.slice(3, 6);

const clients = [
  "AD Loodgietersbedrijf",
  "Pro Banden Service",
  "Loens Collection",
  "MKH Bouw",
  "Clockd",
];

export function InfiniteMarquee() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#7B4FB5]/[0.03] to-black" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block"
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/60">
              Tevreden klanten
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl"
          >
            Wat klanten{" "}
            <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
              zeggen
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/50"
          >
            Echte feedback van echte opdrachtgevers waarmee ik heb samengewerkt.
          </motion.p>
        </div>
      </div>

      {/* Client Names Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mb-16 overflow-hidden"
      >
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-black to-transparent" />

        <div className="flex">
          <motion.div
            className="flex shrink-0"
            animate={{ x: [0, -800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="mx-6 flex items-center gap-3 whitespace-nowrap"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7B4FB5]/20 to-[#B39DDB]/10 border border-white/10">
                  <Star className="h-4 w-4 text-[#B39DDB]" />
                </div>
                <span className="text-lg font-semibold text-white/50 transition-colors hover:text-white/80">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="flex shrink-0"
            animate={{ x: [0, -800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`dup-${index}`}
                className="mx-6 flex items-center gap-3 whitespace-nowrap"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7B4FB5]/20 to-[#B39DDB]/10 border border-white/10">
                  <Star className="h-4 w-4 text-[#B39DDB]" />
                </div>
                <span className="text-lg font-semibold text-white/50">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Row 1 - Left direction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 flex justify-center"
      >
        <InfiniteMovingCards
          items={row1Items}
          direction="left"
          speed="normal"
          pauseOnHover={true}
          className="max-w-full"
        />
      </motion.div>

      {/* Testimonials Row 2 - Right direction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center"
      >
        <InfiniteMovingCards
          items={row2Items}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="max-w-full"
        />
      </motion.div>
    </section>
  );
}
