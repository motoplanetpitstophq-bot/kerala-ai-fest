import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FinalCta } from "@/components/sections/FinalCta";

const title = "Six-Month Roadmap — NALAI";
const description =
  "A high-level view of the six-month journey after the NALAI festival: momentum, connect, build, learn, scale and what comes next.";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/roadmap" },
    ],
    links: [{ rel: "canonical", href: "/roadmap" }],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title="What happens after the festival"
        intro={<p>NALAI is a starting point, not a single day.</p>}
      />
      <RoadmapSection />
      <PartnersSection />
      <FinalCta />
    </>
  );
}
