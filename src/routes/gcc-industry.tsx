import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { GccSection } from "@/components/sections/GccSection";
import { TalentSection } from "@/components/sections/TalentSection";
import { FinalCta } from "@/components/sections/FinalCta";

const title = "GCC & Industry — NALAI";
const description =
  "Connecting AI with global opportunity: the GCC & Industry Forum and the Middle East GCC Leadership Roundtable at NALAI.";

export const Route = createFileRoute("/gcc-industry")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gcc-industry" },
    ],
    links: [{ rel: "canonical", href: "/gcc-industry" }],
  }),
  component: GccPage,
});

function GccPage() {
  return (
    <>
      <PageHero
        eyebrow="GCC & Industry"
        title="Connecting AI with Global Opportunity"
        intro={
          <p>
            Talent, technology, digital capabilities, innovation and future opportunities —
            explored with GCC and industry leaders.
          </p>
        }
      />
      <GccSection />
      <TalentSection />
      <FinalCta />
    </>
  );
}
