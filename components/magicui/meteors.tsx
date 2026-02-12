"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const meteors = new Array(number).fill(true);

  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-0 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        >
          <div className="pointer-events-none absolute top-1/2 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-accent via-primary to-transparent" />
        </span>
      ))}
    </>
  );
}
