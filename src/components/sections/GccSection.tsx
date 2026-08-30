import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const InteractiveGlobe = lazy(() => import("@/components/site/InteractiveGlobe"));

function GlobeFallback() {
  return (
    <div className="mx-auto aspect-square w-full max-w-md animate-pulse rounded-full bg-border/40" />
  );
}


export function GccSection() {
  return (
    <Section
      id="gcc-industry"
      eyebrow="GCC & Industry"
      title="Connecting AI with Global Opportunity"
      intro={
        <p>
          NALAI brings GCC and industry leaders together with the AI ecosystem to explore
          talent, technology, digital capabilities, innovation and future opportunities.
        </p>
      }
    >
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="eyebrow">Featured</p>
            <h3 className="mt-3 text-2xl font-semibold">
              Middle East GCC Leadership Roundtable
            </h3>
            <p className="mt-3 text-muted-foreground">
              Senior leaders discuss AI, talent, capability and future opportunities across
              Keralam and the wider region.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-surface p-6 text-muted-foreground">
            <ClientOnly fallback={<GlobeFallback />}>
              <Suspense fallback={<GlobeFallback />}>
                <InteractiveGlobe />
              </Suspense>
            </ClientOnly>
            <p className="mt-4 text-center text-sm">Drag the globe to explore</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
