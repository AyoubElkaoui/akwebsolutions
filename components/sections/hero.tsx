"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconCode,
  IconBriefcase,
  IconMail,
  IconInfoCircle,
} from "@tabler/icons-react";

// Full-screen interactive particle field
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseOpacity: number;
      hue: number;
    }>
  >([]);

  const init = useCallback((w: number, h: number) => {
    const count = Math.min(Math.floor((w * h) / 4000), 200);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2.5 + 0.5,
      baseOpacity: Math.random() * 0.6 + 0.1,
      hue: Math.random() > 0.5 ? 270 : 280, // purple range
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * 2;
      canvas.height = h * 2;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(2, 0, 0, 2, 0, 0);
      init(w, h);
    };
    resize();

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", resize);

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (const p of particles) {
        // Mouse attraction (gentle pull toward cursor)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 250 && dist > 0) {
          const force = (250 - dist) / 250;
          // Attract gently
          p.vx += (dx / dist) * force * 0.08;
          p.vy += (dy / dist) * force * 0.08;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;

        // Wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // Glow near mouse
        const mouseGlow = dist < 300 ? (300 - dist) / 300 : 0;
        const opacity = p.baseOpacity + mouseGlow * 0.5;
        const size = p.size + mouseGlow * 2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 60%, 75%, ${opacity})`;
        ctx.fill();
      }

      // Connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = 0.12 * (1 - dist / 100);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(179, 157, 219, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Mouse connection web — bright lines to nearest particles
      if (mouse.x > 0 && mouse.y > 0) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const alpha = 0.4 * (1 - dist / 200);
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            const gradient = ctx.createLinearGradient(
              mouse.x,
              mouse.y,
              p.x,
              p.y,
            );
            gradient.addColorStop(0, `rgba(123, 79, 181, ${alpha})`);
            gradient.addColorStop(1, `rgba(179, 157, 219, ${alpha * 0.3})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }

        // Mouse glow
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          150,
        );
        glow.addColorStop(0, "rgba(123, 79, 181, 0.15)");
        glow.addColorStop(1, "rgba(123, 79, 181, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(mouse.x - 150, mouse.y - 150, 300, 300);
      }

      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", resize);
    };
  }, [init]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

// Animated counter
function Counter({
  target,
  suffix,
  label,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let cur = 0;
      const inc = target / 50;
      const interval = setInterval(() => {
        cur += inc;
        if (cur >= target) {
          setCount(target);
          clearInterval(interval);
        } else setCount(Math.floor(cur));
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(t);
  }, [target, delay]);

  return (
    <div className="text-center">
      <div className="text-2xl font-black text-white sm:text-3xl md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-white/40 sm:text-sm">{label}</div>
    </div>
  );
}

const dockItems = [
  {
    title: "Diensten",
    icon: <IconCode className="h-full w-full text-white" />,
    href: "/diensten",
  },
  {
    title: "Portfolio",
    icon: <IconBriefcase className="h-full w-full text-white" />,
    href: "/portfolio",
  },
  {
    title: "Over Ons",
    icon: <IconInfoCircle className="h-full w-full text-white" />,
    href: "/over-ons",
  },
  {
    title: "Contact",
    icon: <IconMail className="h-full w-full text-white" />,
    href: "/contact",
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black md:h-[110vh]"
    >
      {/* === BACKGROUND === */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3D2975]/30 via-black to-black" />

        {/* Aurora */}
        <div
          className="absolute inset-0 overflow-hidden opacity-40"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#7B4FB5_10%,#B39DDB_15%,#9b6dcd_20%,#ddd6fe_25%,#7B4FB5_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            } as React.CSSProperties
          }
        >
          <div className="pointer-events-none absolute -inset-[10px] animate-aurora [background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] blur-[10px] will-change-transform after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-['']" />
        </div>

        {/* Gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full bg-[#7B4FB5] blur-[200px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute -right-32 bottom-1/3 h-[700px] w-[700px] rounded-full bg-[#B39DDB] blur-[200px]"
        />
      </div>

      {/* Lamp effect at top */}
      <div className="absolute left-0 right-0 top-0 flex items-center justify-center overflow-hidden">
        <div className="relative flex w-full scale-y-125 items-center justify-center">
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(from 70deg at center top, var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 w-[30rem] from-[#7B4FB5] via-transparent to-transparent"
          >
            <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(from 290deg at center top, var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-[#7B4FB5]"
          >
            <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#7B4FB5] opacity-50 blur-3xl" />
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#B39DDB] blur-2xl"
          />
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#B39DDB]"
          />
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black" />
        </div>
      </div>

      {/* Interactive particle network - full screen behind text */}
      <ParticleField />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(rgba(123,79,181,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,79,181,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* === CONTENT === */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-screen flex-col items-center justify-center px-4"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-5 py-2.5 text-sm backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-medium text-white/70">
              Beschikbaar voor projecten
            </span>
          </div>
        </motion.div>

        {/* Main heading — massive, unmissable */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-6 max-w-5xl text-center text-[2.5rem] font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem]"
        >
          Ik bouw websites die
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-[#7B4FB5] via-[#B39DDB] to-[#9b6dcd] bg-clip-text text-transparent">
              echt resultaat
            </span>
            {/* Underline glow */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] blur-sm"
            />
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 right-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB]"
            />
          </span>{" "}
          leveren
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-10 max-w-lg text-center text-lg leading-relaxed text-white/45 md:text-xl"
        >
          Snelle, moderne websites met Next.js die jouw business laten groeien.
          Van concept tot lancering.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="group relative h-14 overflow-hidden rounded-full bg-gradient-to-r from-[#7B4FB5] to-[#B39DDB] px-10 text-base font-semibold text-white shadow-2xl shadow-[#7B4FB5]/40 transition-all hover:scale-105 hover:shadow-[#7B4FB5]/60"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start je project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              {/* Shimmer effect */}
              <motion.span
                className="absolute inset-0 z-0"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              >
                <span className="block h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]" />
              </motion.span>
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-2 border-[#7B4FB5]/50 bg-[#7B4FB5]/10 px-10 text-base font-semibold text-white backdrop-blur-xl transition-all hover:border-[#7B4FB5]/70 hover:bg-[#7B4FB5]/20"
            >
              Bekijk portfolio
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-5 sm:gap-8 md:gap-14"
        >
          <Counter target={50} suffix="+" label="Projecten" delay={1000} />
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <Counter
            target={98}
            suffix="%"
            label="Klanttevredenheid"
            delay={1200}
          />
          <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <Counter target={5} suffix="+" label="Jaar ervaring" delay={1400} />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/25">
            Scroll
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-1 rounded-full bg-white/50"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Floating Dock — desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 md:block"
      >
        <FloatingDock
          items={dockItems}
          desktopClassName="bg-black/60 border border-white/10 backdrop-blur-2xl"
          mobileClassName="hidden"
        />
      </motion.div>
    </section>
  );
}
