"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "Moderne webshop met headless CMS en real-time inventory management. Gebouwd met Next.js en Shopify.",
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
    tags: ["Next.js", "Shopify", "TypeScript"],
    metrics: [
      { label: "Conversie", value: "+45%" },
      { label: "Laadtijd", value: "0.8s" },
    ],
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "Web App",
    description:
      "Complexe data visualisatie dashboard voor enterprise klanten met real-time analytics en rapportage.",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    tags: ["React", "Node.js", "PostgreSQL"],
    metrics: [
      { label: "Users", value: "10K+" },
      { label: "Performance", value: "98" },
    ],
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Branding & Web",
    description:
      "Premium corporate website met focus op SEO en conversion optimization. Volledig op maat gemaakt design.",
    image: "bg-gradient-to-br from-indigo-500 to-purple-600",
    tags: ["Next.js", "Sanity CMS", "SEO"],
    metrics: [
      { label: "SEO Score", value: "100" },
      { label: "Leads", value: "+120%" },
    ],
  },
];

export function FeaturedWork() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
          >
            <ExternalLink className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Featured Work
            </span>
          </motion.div>

          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
              >
                Projecten waar we{" "}
                <span className="gradient-text">trots op zijn</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground"
              >
                Van startup tot enterprise - we hebben oplossingen gebouwd die
                écht impact maken.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="group rounded-full border-[#7B4FB5]/50 bg-[#7B4FB5]/10 text-white hover:border-[#7B4FB5]/70 hover:bg-[#7B4FB5]/20"
                >
                  Bekijk alle projecten
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Large Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl lg:row-span-2"
          >
            <div
              className={`absolute inset-0 ${projects[0].image} transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative flex h-full min-h-[600px] flex-col justify-end p-8 lg:p-10">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
                  {projects[0].category}
                </span>
              </div>

              <h3 className="mb-3 text-3xl font-bold text-white lg:text-4xl">
                {projects[0].title}
              </h3>

              <p className="mb-6 text-base text-white/80 lg:text-lg">
                {projects[0].description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
                {projects[0].metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-2xl font-bold text-white">
                      {metric.value}
                    </div>
                    <div className="text-sm text-white/70">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="absolute right-8 top-8 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Smaller Projects */}
          <div className="grid gap-8">
            {projects.slice(1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div
                  className={`absolute inset-0 ${project.image} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="relative flex min-h-[280px] flex-col justify-end p-6 lg:p-8">
                  <div className="mb-3">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white lg:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-sm text-white/80">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 bg-white/10 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 border-t border-white/20 pt-4">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-lg font-bold text-white">
                          {metric.value}
                        </div>
                        <div className="text-xs text-white/70">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-muted-foreground">
            Benieuwd wat we voor jou kunnen betekenen?
          </p>
          <Link href="/contact">
            <Button size="lg" className="font-semibold">
              Plan een kennismakingsgesprek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
