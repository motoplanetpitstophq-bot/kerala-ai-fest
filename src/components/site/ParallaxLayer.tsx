import { useRef, type ReactNode, type RefObject } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  /** Travel distance in px across the section scroll (negative moves up). */
  distance?: number;
  /** Optional scale change across the scroll range. */
  scaleRange?: [number, number];
  /** Container to track; defaults to the layer's own offset parent scroll. */
  targetRef?: RefObject<HTMLElement | null>;
};

/**
 * Decorative layer that shifts as its section scrolls through the viewport.
 * Purely presentational and disabled when the user prefers reduced motion.
 */
export function ParallaxLayer({
  children,
  className,
  distance = 60,
  scaleRange,
  targetRef,
}: Props) {
  const localRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef ?? localRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    scaleRange ?? [1, 1],
  );

  return (
    <motion.div
      ref={localRef}
      aria-hidden
      style={reduce ? undefined : { y, scale }}
      className={cn("pointer-events-none", className)}
    >
      {children}
    </motion.div>
  );
}
