import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { SpeakerCard } from "@/components/sections/SpeakersSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { SPEAKERS } from "@/data/nalai";

const title = "Speakers — NALAI";
const description =
  "Confirmed speakers at NALAI, including leaders from the Government of Kerala, Kerala IT Mission and TCS.";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/speakers" },
    ],
    links: [{ rel: "canonical", href: "/speakers" }],
  }),
  component: SpeakersPage,
});

function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Speakers"
        title="Voices at NALAI"
        intro={<p>Additional speakers will be added as confirmed.</p>}
      />
      <Section>
        <div className="flex flex-wrap gap-4">
          {SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <SpeakerCard speaker={s} />
            </Reveal>
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
