"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerProps {
  className?: string;
  duration?: string;
  size?: string;
  color?: string;
}

export function Shimmer({
  className,
  duration = "2s",
  size = "200px",
  color = "rgba(255, 255, 255, 0.1)",
}: ShimmerProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 translate-x-[-100%] animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          animationDuration: duration,
        }}
      />
    </div>
  );
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  borderRadius = "0.75rem",
  shimmerDuration = "2s",
  background = "rgba(0, 0, 0, 1)",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
}) {
  return (
    <button
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--cut": shimmerSize,
          "--bg": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",
        className
      )}
      {...props}
    >
      {/* spark container */}
      <div
        className={cn(
          "absolute inset-0 overflow-visible [container-type:size]"
        )}
      >
        {/* spark */}
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          {/* spark before */}
          <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      {/* backdrop */}
      <div
        className={cn(
          "absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
        )}
      />

      {/* content */}
      <div className="relative z-10">{children}</div>

      {/* Highlight */}
      <div className="absolute bottom-0 z-20 h-1/2 w-full bg-gradient-to-t from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}
