import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { GlanceSection } from "@/components/sections/GlanceSection";
import { WhyAttendSection } from "@/components/sections/WhyAttendSection";
import { FinalCta } from "@/components/sections/FinalCta";

const title = "About NALAI — Tomorrow's Keralam";
const description =
  "NALAI is an AI festival led by the TCS AI Club, bringing Government, GCCs, industry, startups, academia and students together.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="What is NALAI?"
        intro={
          <p>
            An AI festival for Keralam — showcasing AI solutions, live experiences, talent,
            innovation and future opportunities.
          </p>
        }
      />
      <AboutSection />
      <GlanceSection />
      <WhyAttendSection />
      <FinalCta />
    </>
  );
}
