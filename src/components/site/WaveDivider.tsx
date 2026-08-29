import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Animated backwater ripple + data-line divider between sections. */
export function WaveDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn("relative h-16 w-full overflow-hidden sm:h-24", className)}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", flip && "rotate-180")}
      >
        <defs>
          <linearGradient id="nalai-wave" x1="0" x2="1">
            <stop offset="0%" stopColor="var(--color-kerala)" stopOpacity="0.35" />
            <stop offset="55%" stopColor="var(--color-brand)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d="M0 70 C 240 20, 480 110, 720 65 S 1200 20, 1440 75"
            fill="none"
            stroke="url(#nalai-wave)"
            strokeWidth={2 - i * 0.5}
            style={{ opacity: 1 - i * 0.28 }}
            animate={{ x: [0, -60, 0], y: [i * 6, i * 6 + 10, i * 6] }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.circle
          r="4"
          fill="var(--color-brand)"
          animate={{ cx: [0, 720, 1440], cy: [70, 65, 75], opacity: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
