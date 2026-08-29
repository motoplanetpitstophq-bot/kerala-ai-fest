import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Flip horizontally for variety */
  flip?: boolean;
  delay?: number;
};

/**
 * Decorative coconut palm silhouette whose fronds sway in the wind.
 * Purely presentational; hidden from assistive tech.
 */
export function CoconutPalm({ className, flip = false, delay = 0 }: Props) {
  const frond = (d: string, origin: string, amount: number, dur: number) => (
    <motion.path
      d={d}
      fill="currentColor"
      style={{ transformOrigin: origin }}
      animate={{ rotate: [0, amount, -amount * 0.5, 0] }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 260"
      className={cn("pointer-events-none select-none", className)}
      style={{ transform: flip ? "scaleX(-1)" : undefined, transformOrigin: "100px 260px" }}
      animate={{ rotate: [0, 1.4, -0.8, 0] }}
      transition={{ duration: 9, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* trunk */}
      <path
        d="M96 258c2-52 4-88 14-124 4-14 9-24 14-32l9 4c-6 9-11 19-14 32-9 35-11 71-13 120z"
        fill="currentColor"
        opacity={0.85}
      />
      {/* coconuts */}
      <circle cx="126" cy="104" r="5" fill="currentColor" />
      <circle cx="136" cy="110" r="4.5" fill="currentColor" />
      <circle cx="128" cy="116" r="4" fill="currentColor" />

      <g opacity={0.95}>
        {frond("M130 100c-24-16-52-22-78-14 22-14 54-14 78 2z", "130px 100px", 4.5, 6)}
        {frond("M130 100c-18-26-42-42-70-46 26-4 56 10 74 38z", "130px 100px", 5.5, 7.4)}
        {frond("M130 100c24-18 54-24 80-16-22-14-56-12-80 4z", "130px 100px", -5, 6.6)}
        {frond("M130 100c16-28 40-46 68-52-26-2-56 14-72 44z", "130px 100px", -6, 8.2)}
        {frond("M130 100c-6-30-4-56 10-78-20 16-28 48-20 78z", "130px 100px", 3.5, 7)}
        {frond("M130 100c6 26 26 46 54 56-28 4-54-16-62-50z", "130px 100px", -4, 6.2)}
      </g>
    </motion.svg>
  );
}
