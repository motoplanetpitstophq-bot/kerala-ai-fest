import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Deterministic values keep SSR and client markup identical.
const PARTICLES = [
  { x: 6, y: 22, s: 6, d: 0, dur: 9, tone: "brand" },
  { x: 18, y: 68, s: 4, d: 1.2, dur: 11, tone: "kerala" },
  { x: 29, y: 12, s: 8, d: 0.6, dur: 13, tone: "gold" },
  { x: 41, y: 82, s: 5, d: 2.1, dur: 10, tone: "brand" },
  { x: 55, y: 34, s: 7, d: 0.9, dur: 12, tone: "kerala" },
  { x: 63, y: 74, s: 4, d: 1.8, dur: 9.5, tone: "gold" },
  { x: 74, y: 18, s: 6, d: 0.3, dur: 14, tone: "brand" },
  { x: 83, y: 58, s: 5, d: 2.4, dur: 10.5, tone: "kerala" },
  { x: 92, y: 30, s: 7, d: 1.5, dur: 12.5, tone: "gold" },
  { x: 48, y: 6, s: 4, d: 2.8, dur: 11.5, tone: "brand" },
] as const;

const TONE: Record<string, string> = {
  brand: "bg-brand/40",
  kerala: "bg-kerala/40",
  gold: "bg-gold/50",
};

export function ParticleField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className={cn("absolute rounded-full blur-[1px]", TONE[p.tone])}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
          }}
          animate={{
            y: [0, -26, 6, 0],
            x: [0, 12, -8, 0],
            opacity: [0.25, 0.9, 0.4, 0.25],
          }}
          transition={{
            duration: p.dur,
            delay: p.d,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
