import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { AGENDA, EVENT } from "@/data/nalai";

const title = "Agenda — NALAI, 9 October 2026";
const description =
  "The festival day at NALAI: keynotes, AI Solutions Showcase, AI Playground, GCC & Industry Forum, Talent Connect and the Startup Showcase.";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/agenda" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: AgendaPage,
});

function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="The festival day"
        intro={
          <p>
            {EVENT.date} · {EVENT.venue}. Detailed timings will be published as the
            programme is confirmed.
          </p>
        }
      />
      <Section>
        <ol className="grid gap-4">
          {AGENDA.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <li className="grid gap-2 rounded-2xl border border-border bg-card p-6 sm:grid-cols-[160px_1fr] sm:items-baseline sm:gap-6">
                <span className="eyebrow">{item.time}</span>
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-1 text-muted-foreground">{item.copy}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>
      <FinalCta />
    </>
  );
}
