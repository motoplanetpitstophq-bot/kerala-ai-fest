import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { TalentSection } from "@/components/sections/TalentSection";
import { FinalCta } from "@/components/sections/FinalCta";

const title = "Festival Experiences — NALAI";
const description =
  "AI Solutions Showcase, AI Playground, GCC & Industry Forum, Talent Connect, Startup Showcase and Government × Industry at NALAI.";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Don't just hear about AI. Experience it."
        intro={<p>Seven ways to see, try and talk about AI across one festival day.</p>}
      />
      <ExperiencesSection />
      <TalentSection />
      <FinalCta />
    </>
  );
}
