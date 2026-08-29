import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  speed = 26,
  className,
}: {
  items: ReactNode[];
  speed?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <motion.div
        className="flex w-max gap-3"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-3 pr-3">
            {items.map((item, i) => (
              <div key={i} className="shrink-0">
                {item}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
