import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  tone = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 sm:py-28",
        tone === "surface" && "bg-surface",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title || intro) && (
          <Reveal className="max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">{title}</h2>
            )}
            {intro && (
              <div className="mt-5 space-y-4 text-base text-muted-foreground sm:text-lg">
                {intro}
              </div>
            )}
          </Reveal>
        )}
        {children && <div className={cn(title && "mt-12")}>{children}</div>}
      </div>
    </section>
  );
}
