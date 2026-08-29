import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { GovernmentSection } from "@/components/sections/GovernmentSection";
import { FinalCta } from "@/components/sections/FinalCta";

const title = "AI in Action — AI Solutions at NALAI";
const description =
  "See how AI moves from an idea to a solution: problem, AI solution and impact showcases at the NALAI festival.";

export const Route = createFileRoute("/ai-solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/ai-solutions" },
    ],
    links: [{ rel: "canonical", href: "/ai-solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        title="AI in Action"
        intro={<p>See how AI moves from an idea to a solution.</p>}
      />
      <SolutionsSection />
      <GovernmentSection />
      <FinalCta />
    </>
  );
}
