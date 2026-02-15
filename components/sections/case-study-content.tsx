"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Quote,
  Calendar,
  Clock,
  Building2,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseStudyContent({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <div className="bg-black text-white">
      {/* Breadcrumb */}
      <div className="container-custom pt-28 pb-4">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-sm text-white/40"
        >
          <Link href="/" className="hover:text-white/60 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/portfolio"
            className="hover:text-white/60 transition-colors"
          >
            Portfolio
          </Link>
          <span>/</span>
          <span className="text-white/70">{caseStudy.title}</span>
        </motion.nav>
      </div>

      {/* Hero */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className={`inline-block rounded-full bg-gradient-to-r ${caseStudy.gradient} px-4 py-1.5 text-xs font-semibold text-white mb-6`}
              >
                {caseStudy.category}
              </span>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-6">
                {caseStudy.title}
              </h1>

              <p className="text-lg text-white/60 leading-relaxed mb-8">
                {caseStudy.description}
              </p>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Building2 className="h-4 w-4 text-[#B39DDB]" />
                  <div>
                    <div className="text-white/30 text-xs">Klant</div>
                    <div className="text-white/70">{caseStudy.client}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Briefcase className="h-4 w-4 text-[#B39DDB]" />
                  <div>
                    <div className="text-white/30 text-xs">Branche</div>
                    <div className="text-white/70">{caseStudy.industry}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Calendar className="h-4 w-4 text-[#B39DDB]" />
                  <div>
                    <div className="text-white/30 text-xs">Jaar</div>
                    <div className="text-white/70">{caseStudy.year}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Clock className="h-4 w-4 text-[#B39DDB]" />
                  <div>
                    <div className="text-white/30 text-xs">Doorlooptijd</div>
                    <div className="text-white/70">{caseStudy.duration}</div>
                  </div>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {caseStudy.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={caseStudy.screenshot}
                    alt={`${caseStudy.title} website`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              {caseStudy.url && (
                <a
                  href={`https://${caseStudy.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[#B39DDB] hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Bekijk {caseStudy.url}
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-red-500/20 bg-red-500/[0.05] p-8"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20">
                <span className="text-xl font-bold text-red-400">?</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">De Uitdaging</h2>
              <p className="text-white/60 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-8"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20">
                <CheckCircle2 className="h-6 w-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">De Oplossing</h2>
              <p className="text-white/60 leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Mijn <span className="text-[#B39DDB]">aanpak</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Stap voor stap van concept naar resultaat.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {caseStudy.approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Vertical line */}
                {index < caseStudy.approach.length - 1 && (
                  <div className="absolute left-[19px] top-12 bottom-0 w-px bg-gradient-to-b from-[#7B4FB5]/50 to-transparent" />
                )}

                {/* Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7B4FB5] to-[#B39DDB] text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg font-bold mb-2">{item.step}</h3>
                  <p className="text-white/50 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Wat is er <span className="text-[#B39DDB]">opgeleverd</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto"
          >
            {caseStudy.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-[#B39DDB] shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              De <span className="text-[#B39DDB]">resultaten</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            {caseStudy.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/20 to-transparent p-8 text-center"
              >
                <div className="text-4xl font-bold text-[#B39DDB] mb-2">
                  {result.value}
                </div>
                <div className="text-sm text-white/50">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      {caseStudy.oldScreenshot && (
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Before &{" "}
                <span className="text-[#B39DDB]">After</span>
              </h2>
              <p className="text-white/50">
                Van verouderd naar modern — het verschil is duidelijk.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
                    Before
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3]">
                  <Image
                    src={caseStudy.oldScreenshot}
                    alt={`${caseStudy.title} oude website`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                    After
                  </span>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-[#7B4FB5]/30 aspect-[4/3]">
                  <Image
                    src={caseStudy.screenshot}
                    alt={`${caseStudy.title} nieuwe website`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Extra Screenshots */}
      {caseStudy.extraScreenshots && caseStudy.extraScreenshots.length > 0 && (
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Meer <span className="text-[#B39DDB]">schermen</span>
              </h2>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-3 text-sm text-white/40">
                  Medewerker view
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3]">
                  <Image
                    src={caseStudy.screenshot}
                    alt={`${caseStudy.title} medewerker interface`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              {caseStudy.extraScreenshots.map((extra, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="mb-3 text-sm text-white/40">
                    Manager view
                  </div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3]">
                    <Image
                      src={extra.src}
                      alt={extra.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-br from-[#3D2975]/20 to-transparent p-10 text-center relative"
            >
              <Quote className="mx-auto mb-6 h-10 w-10 text-[#7B4FB5]/40" />
              <blockquote className="mb-6 text-xl leading-relaxed text-white/80 italic">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </blockquote>
              <div className="text-[#B39DDB] font-semibold">
                {caseStudy.testimonial.name}
              </div>
              <div className="text-sm text-white/40">
                {caseStudy.testimonial.role}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 sm:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3D2975]/20 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ook zo&apos;n{" "}
                <span className="text-[#B39DDB]">resultaat?</span>
              </h2>
              <p className="text-white/50 max-w-lg mx-auto mb-8">
                Ik help je graag met het realiseren van jouw website, webshop of
                applicatie. Neem vrijblijvend contact op voor een gesprek.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] text-white rounded-full px-8"
                >
                  <Link href="/contact">
                    Start jouw project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8"
                >
                  <Link href="/portfolio">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Alle projecten
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
