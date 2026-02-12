"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "AD Loodgietersbedrijf",
    category: "Website",
    description:
      "Moderne website voor loodgietersbedrijf in Amsterdam met 24/7 spoedservice.",
    url: "adloodgietersbedrijf.nl",
    stack: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-[#7B4FB5] via-[#9b6dcd] to-[#B39DDB]",
    accent: "#7B4FB5",
  },
  {
    id: 2,
    title: "Loens Collection",
    category: "Webshop",
    description: "Elegante modest fashion webshop met Klarna betaalintegratie.",
    url: "loenscollection.com",
    stack: ["Shopify", "Klarna", "Dawn Theme"],
    gradient: "from-pink-500 via-rose-400 to-pink-300",
    accent: "#ec4899",
  },
  {
    id: 3,
    title: "MKH Bouw",
    category: "Website",
    description:
      "Strakke website voor klussenbedrijf met portfolio en offerte systeem.",
    url: "mkhbouw.nl",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-orange-500 via-amber-400 to-orange-300",
    accent: "#f97316",
  },
  {
    id: 4,
    title: "Clockd",
    category: "Web App",
    description:
      "Maatwerk urenregistratie systeem met real-time dashboard en rapportages.",
    url: "clockd.nl",
    stack: ["Next.js", "PostgreSQL", "TypeScript"],
    gradient: "from-emerald-500 via-green-400 to-emerald-300",
    accent: "#10b981",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group relative h-[320px] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] md:h-[420px]"
      >
        {/* Animated gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-[0.12]`}
        />

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:24px_24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top accent line */}
        <motion.div
          className={`absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r ${project.gradient}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3 + index * 0.1,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "left" }}
        />

        {/* Content */}
        <div className="relative flex h-full flex-col justify-between p-8">
          {/* Top */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: `${project.accent}20`,
                  color: project.accent,
                }}
              >
                {project.category}
              </span>
              <div className="flex gap-2">
                {project.stack.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-white/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-white lg:text-3xl">
              {project.title}
            </h3>

            <p className="max-w-sm text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
              {project.description}
            </p>
          </div>

          {/* Bottom */}
          <div className="flex items-end justify-between">
            {project.url ? (
              <div className="flex items-center gap-2 text-sm text-white/30 transition-colors group-hover:text-white/60">
                <ExternalLink className="h-3.5 w-3.5" />
                <span>{project.url}</span>
              </div>
            ) : (
              <span className="text-sm text-white/30">Intern project</span>
            )}

            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:border-white/20 group-hover:bg-white/10"
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="h-5 w-5 text-white/60 transition-colors group-hover:text-white" />
            </motion.div>
          </div>
        </div>

        {/* Large number watermark */}
        <div className="pointer-events-none absolute -bottom-8 -right-4 select-none text-[100px] font-black leading-none text-white/[0.02] transition-all duration-700 group-hover:text-white/[0.04] md:text-[180px]">
          {String(index + 1).padStart(2, "0")}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PortfolioBento() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      {/* Background ambient */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#7B4FB5]/[0.04] blur-[120px]" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-12 text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block"
          >
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/60">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Recente{" "}
            <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
              projecten
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/50"
          >
            Van startups tot gevestigde bedrijven — een selectie van projecten
            waar ik trots op ben.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link key={project.id} href="/portfolio">
              <ProjectCard project={project} index={index} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-xl hover:shadow-white/10"
            >
              Bekijk alle projecten
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
