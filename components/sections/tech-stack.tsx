"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", logo: "⚡" },
  { name: "React", logo: "⚛️" },
  { name: "TypeScript", logo: "📘" },
  { name: "Tailwind CSS", logo: "🎨" },
  { name: "Node.js", logo: "🟢" },
  { name: "Vercel", logo: "▲" },
  { name: "WordPress", logo: "📝" },
  { name: "Shopify", logo: "🛍️" },
  { name: "Sanity", logo: "📊" },
  { name: "Astro", logo: "🚀" },
];

const Marquee = ({
  children,
  reverse = false,
}: {
  children: React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <div className="group relative flex overflow-hidden">
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-4"
        animate={{
          x: reverse ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-4"
        animate={{
          x: reverse ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export function TechStack() {
  return (
    <section className="section-padding relative overflow-hidden border-y border-border bg-muted/30">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <BlurFade delay={0.1}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <span>💻</span>
              <span>Waarmee we bouwen</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Moderne tech die snel laadt en{" "}
              <span className="gradient-text">makkelijk schaalbaar</span> is
            </h2>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Van Next.js tot WordPress—we kiezen de juiste tools die bij jouw budget en ambities passen.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.4}>
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-muted/30 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-muted/30 to-transparent" />

            <Marquee>
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex min-w-[200px] flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <span className="text-4xl">{tech.logo}</span>
                  <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Tech Benefits */}
        <BlurFade delay={0.5}>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Bliksem Snel</h3>
              <p className="text-sm text-muted-foreground">
                Optimale laadtijden voor betere rankings en conversies
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Veilig & Betrouwbaar</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade security en 99.9% uptime garantie
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">SEO Optimized</h3>
              <p className="text-sm text-muted-foreground">
                Server-side rendering voor optimale vindbaarheid
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Schaalbaar</h3>
              <p className="text-sm text-muted-foreground">
                Groeit mee met jouw bedrijf en ambities
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
