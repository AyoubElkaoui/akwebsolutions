"use client";

import { useRef, useMemo } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  region?: {
    latMin: number;
    latMax: number;
    lngMin: number;
    lngMax: number;
  };
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  region,
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const { svgMap, viewBox, projectPoint } = useMemo(() => {
    const mapOpts: Record<string, unknown> = {
      height: 100,
      grid: "diagonal" as const,
    };
    if (region) {
      mapOpts.region = {
        lat: { min: region.latMin, max: region.latMax },
        lng: { min: region.lngMin, max: region.lngMax },
      };
    }

    const map = new DottedMap(mapOpts);

    const svg = map.getSVG({
      radius: region ? 0.35 : 0.22,
      color: "#FFFFFF30",
      shape: "circle",
      backgroundColor: "black",
    });

    // Extract viewBox from generated SVG
    const vbMatch = svg.match(/viewBox="([^"]+)"/);
    const vb = vbMatch ? vbMatch[1] : "0 0 210 100";
    const [, , vbW, vbH] = vb.split(" ").map(Number);

    // Build projection function based on region or world
    const project = (lat: number, lng: number) => {
      if (region) {
        const x =
          ((lng - region.lngMin) / (region.lngMax - region.lngMin)) * vbW;
        const y =
          ((region.latMax - lat) / (region.latMax - region.latMin)) * vbH;
        return { x, y };
      }
      // World projection (equirectangular)
      const x = (lng + 180) * (vbW / 360);
      const y = (90 - lat) * (vbH / 180);
      return { x, y };
    };

    return { svgMap: svg, viewBox: vb, projectPoint: project };
  }, [region]);

  const [, , vbW, vbH] = viewBox.split(" ").map(Number);

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number },
  ) => {
    const dist = Math.sqrt((end.x - start.x) ** 2 + (end.y - start.y) ** 2);
    const curveHeight = dist * 0.3;
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - curveHeight;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Scale factors relative to viewBox
  const scale = vbW / 111; // normalize
  const dotR = 0.5 * scale;
  const pulseR = 2 * scale;
  const strokeW = 0.15 * scale;
  const labelSize = region ? 2.2 * scale : 1.5 * scale;
  const mainLabelSize = region ? 2.8 * scale : 2 * scale;

  return (
    <div
      className={`w-full ${region ? "aspect-[21/9]" : "aspect-[2/1]"} bg-black rounded-lg relative font-sans overflow-hidden`}
    >
      {/* Dotted map background */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none absolute inset-0 object-fill"
        style={
          !region
            ? {
                maskImage:
                  "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, white 10%, white 90%, transparent)",
              }
            : {}
        }
        alt="map"
        draggable={false}
      />

      {/* SVG overlay for connections and labels */}
      <svg
        ref={svgRef}
        viewBox={viewBox}
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wm-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {dots.map((dot, i) => {
          const s = projectPoint(dot.start.lat, dot.start.lng);
          const e = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <motion.path
              key={`line-${i}`}
              d={createCurvedPath(s, e)}
              fill="none"
              stroke="url(#wm-grad)"
              strokeWidth={strokeW}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.25 * i, ease: "easeOut" }}
            />
          );
        })}

        {/* City dots + labels */}
        {dots.map((dot, i) => {
          const s = projectPoint(dot.start.lat, dot.start.lng);
          const e = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`pts-${i}`}>
              {/* Start dot (Baarn - only draw once) */}
              {i === 0 && (
                <>
                  <circle cx={s.x} cy={s.y} r={dotR * 1.2} fill={lineColor} />
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r={dotR * 1.2}
                    fill={lineColor}
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      from={String(dotR * 1.2)}
                      to={String(pulseR)}
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {region && dot.start.label && (
                    <text
                      x={s.x}
                      y={s.y - dotR * 4}
                      fill={lineColor}
                      fontSize={mainLabelSize}
                      fontFamily="system-ui, sans-serif"
                      fontWeight="700"
                      textAnchor="middle"
                    >
                      {dot.start.label}
                    </text>
                  )}
                </>
              )}

              {/* End dot */}
              <circle cx={e.x} cy={e.y} r={dotR * 0.8} fill={lineColor} />
              <circle
                cx={e.x}
                cy={e.y}
                r={dotR * 0.8}
                fill={lineColor}
                opacity="0.4"
              >
                <animate
                  attributeName="r"
                  from={String(dotR * 0.8)}
                  to={String(pulseR * 0.6)}
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.4"
                  to="0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* End label */}
              {region && dot.end.label && (
                <text
                  x={e.x}
                  y={e.y - dotR * 3}
                  fill="white"
                  fontSize={labelSize}
                  fontFamily="system-ui, sans-serif"
                  fontWeight="500"
                  textAnchor="middle"
                  opacity="0.7"
                >
                  {dot.end.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Edge vignette */}
      <div className="absolute inset-0 pointer-events-none rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)]" />
    </div>
  );
}
