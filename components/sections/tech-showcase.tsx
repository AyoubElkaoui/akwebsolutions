"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Shield, Layers } from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    category: "Framework",
    description: "React framework voor productie",
    color: "from-black to-gray-800",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Type-safe JavaScript",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    description: "Utility-first CSS framework",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "React",
    category: "Library",
    description: "UI component library",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Node.js",
    category: "Runtime",
    description: "JavaScript runtime",
    color: "from-green-600 to-green-800",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Relational database",
    color: "from-blue-700 to-blue-900",
  },
];

const features = [
  {
    icon: Zap,
    title: "Bliksem Snel",
    description: "Geoptimaliseerde performance met server-side rendering en caching strategieën.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Veilige applicaties met moderne authenticatie en data encryptie.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Onderhoudbare en schaalbare codebase met best practices.",
  },
  {
    icon: Layers,
    title: "Modulair",
    description: "Herbruikbare componenten en architectuur die meeschaalt.",
  },
];

export function TechShowcase() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C27B0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
          >
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Moderne Technologie Stack
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Gebouwd met de{" "}
            <span className="gradient-text">beste tools</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            We werken uitsluitend met moderne, beproefde technologieën die snelheid, veiligheid en schaalbaarheid garanderen.
          </motion.p>
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-xl"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 transition-opacity group-hover:opacity-5`} />

              <div className="relative">
                <div className="mb-3 inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {tech.category}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary">0.4s</div>
              <div className="text-sm font-medium text-muted-foreground">
                Gemiddelde laadtijd
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary">99.9%</div>
              <div className="text-sm font-medium text-muted-foreground">
                Uptime garantie
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary">95+</div>
              <div className="text-sm font-medium text-muted-foreground">
                PageSpeed Score
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
