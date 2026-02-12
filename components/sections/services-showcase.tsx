"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Smartphone,
  Globe,
  ShoppingCart,
  Zap,
  Search,
  Headphones,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Op maat gemaakte websites en webapplicaties gebouwd met de nieuwste technologieën.",
    link: "/diensten#web-development",
    gradient: "from-[#7B4FB5] to-[#B39DDB]",
    accent: "#7B4FB5",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Responsive designs die perfect werken op elk apparaat en schermformaat.",
    link: "/diensten#web-development",
    gradient: "from-blue-500 to-cyan-400",
    accent: "#3b82f6",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Krachtige webshops met naadloze checkout en geavanceerd productbeheer.",
    link: "/diensten#ecommerce",
    gradient: "from-pink-500 to-rose-400",
    accent: "#ec4899",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Razendsnel ladende websites geoptimaliseerd voor conversie en gebruikerservaring.",
    link: "/diensten#web-development",
    gradient: "from-amber-500 to-yellow-400",
    accent: "#f59e0b",
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description:
      "Technische SEO en structured data voor betere vindbaarheid in Google.",
    link: "/diensten#seo",
    gradient: "from-emerald-500 to-green-400",
    accent: "#10b981",
  },
  {
    icon: Headphones,
    title: "Support & Onderhoud",
    description:
      "Doorlopende support, updates en optimalisaties voor jouw website.",
    link: "/diensten#web-development",
    gradient: "from-orange-500 to-red-400",
    accent: "#f97316",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={service.link}>
        <motion.div
          ref={cardRef}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition-colors hover:border-white/[0.15] hover:bg-white/[0.04]"
        >
          {/* Glow effect on hover */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500"
            style={{
              background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.accent}15, transparent 60%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Icon */}
          <div
            className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
            style={{ transform: "translateZ(20px)" }}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>

          {/* Content */}
          <div style={{ transform: "translateZ(10px)" }}>
            <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-white">
              {service.title}
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
              {service.description}
            </p>

            <div className="flex items-center gap-2 text-sm font-medium text-white/30 transition-all group-hover:text-[#B39DDB]">
              <span>Meer informatie</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function ServicesShowcase() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7B4FB5]/[0.03] to-transparent" />
        <div className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#7B4FB5]/[0.04] blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#B39DDB]/[0.03] blur-[120px]" />
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
              Diensten
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Alles wat je{" "}
            <span className="bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] bg-clip-text text-transparent">
              nodig hebt
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/50"
          >
            Van concept tot lancering en doorlopende optimalisatie — complete
            oplossingen voor jouw digitale succes.
          </motion.p>
        </div>

        {/* Services Grid with 3D tilt cards */}
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1000px" }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
