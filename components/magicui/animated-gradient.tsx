"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedGradientProps {
  children?: React.ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function AnimatedGradient({
  children,
  className = "",
  gradientFrom = "from-primary/5",
  gradientTo = "to-accent/5",
}: AnimatedGradientProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-50`}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute inset-0 bg-gradient-to-tl ${gradientTo} ${gradientFrom} opacity-30`}
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [5, 0, 5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
