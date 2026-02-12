"use client";

import { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { motion } from "motion/react";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// Netherlands and neighboring country ISO codes (numeric)
const NETHERLANDS = "528";
const NEIGHBORS: Record<string, string> = {
  "056": "Belgi\u00eb",
  "276": "Duitsland",
  "442": "Luxemburg",
  "826": "Verenigd Koninkrijk",
  "250": "Frankrijk",
};

const BAARN: [number, number] = [5.2875, 52.2114];

const cities: { name: string; coordinates: [number, number] }[] = [
  { name: "Amsterdam", coordinates: [4.8952, 52.3676] },
  { name: "Utrecht", coordinates: [5.1214, 52.0907] },
  { name: "Rotterdam", coordinates: [4.4777, 51.9244] },
  { name: "Eindhoven", coordinates: [5.4697, 51.4416] },
  { name: "Groningen", coordinates: [6.5665, 53.2194] },
  { name: "Den Haag", coordinates: [4.3007, 52.0705] },
];

function NetherlandsMapInner() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [5.5, 52.0],
          scale: 3800,
        }}
        width={800}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Background water color */}
        <rect x={0} y={0} width={800} height={600} fill="#0a0a0a" />

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const geoId = geo.id || geo.properties?.["ISO_A3_EH"];
              const isNetherlands = geoId === NETHERLANDS;
              const isNeighbor = geoId in NEIGHBORS;

              if (!isNetherlands && !isNeighbor) return null;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isNetherlands ? "#3D2975" : "#1a1a2e"}
                  stroke={isNetherlands ? "#7B4FB5" : "#2a2a4a"}
                  strokeWidth={isNetherlands ? 1.5 : 0.5}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: isNetherlands ? "#4a3080" : "#222244",
                      outline: "none",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Connection lines from Baarn to cities */}
        {cities.map((city) => (
          <Line
            key={`line-${city.name}`}
            from={BAARN}
            to={city.coordinates}
            stroke="#7B4FB5"
            strokeWidth={1}
            strokeLinecap="round"
            strokeDasharray="4 4"
            strokeOpacity={hoveredCity === city.name ? 0.8 : 0.3}
          />
        ))}

        {/* City markers */}
        {cities.map((city) => (
          <Marker
            key={city.name}
            coordinates={city.coordinates}
            onMouseEnter={() => setHoveredCity(city.name)}
            onMouseLeave={() => setHoveredCity(null)}
          >
            <circle
              r={hoveredCity === city.name ? 6 : 4}
              fill="#B39DDB"
              stroke="#fff"
              strokeWidth={1.5}
              style={{
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            />
            <text
              textAnchor="middle"
              y={-12}
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: hoveredCity === city.name ? 13 : 11,
                fill: hoveredCity === city.name ? "#fff" : "#B39DDB",
                fontWeight: hoveredCity === city.name ? 600 : 400,
                transition: "all 0.2s ease",
                pointerEvents: "none",
              }}
            >
              {city.name}
            </text>
          </Marker>
        ))}

        {/* Baarn marker (main) */}
        <Marker coordinates={BAARN}>
          {/* Pulsing ring */}
          <circle
            r={12}
            fill="none"
            stroke="#7B4FB5"
            strokeWidth={2}
            opacity={0.4}
          >
            <animate
              attributeName="r"
              from="8"
              to="20"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.6"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r={7} fill="#7B4FB5" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={-16}
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              fill: "#fff",
              fontWeight: 700,
              pointerEvents: "none",
            }}
          >
            Baarn
          </text>
          <text
            textAnchor="middle"
            y={-4}
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 4,
              fill: "#fff",
              fontWeight: 500,
              pointerEvents: "none",
            }}
          >
            HQ
          </text>
        </Marker>
      </ComposableMap>

      {/* Overlay gradient edges */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex items-center gap-3 md:bottom-6 md:left-6 md:gap-4">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#7B4FB5] md:h-3 md:w-3" />
          <span className="text-[10px] text-white/50 md:text-xs">
            Hoofdkantoor
          </span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#B39DDB] md:h-3 md:w-3" />
          <span className="text-[10px] text-white/50 md:text-xs">
            Actieve regio&apos;s
          </span>
        </div>
      </div>
    </div>
  );
}

export const NetherlandsMap = memo(NetherlandsMapInner);
