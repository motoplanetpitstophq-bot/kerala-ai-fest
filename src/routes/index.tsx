import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { GlanceSection } from "@/components/sections/GlanceSection";
import { WhyAttendSection } from "@/components/sections/WhyAttendSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import { GccSection } from "@/components/sections/GccSection";
import { TalentSection } from "@/components/sections/TalentSection";
import { GovernmentSection } from "@/components/sections/GovernmentSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { WaveDivider } from "@/components/site/WaveDivider";


const title = "NALAI — Tomorrow's Keralam | AI Festival, 9 October 2026";
const description =
  "An AI festival bringing together people, ideas, technology and opportunities. 9 October 2026, Travancore International Convention Centre, Kerala.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WaveDivider />
      <AboutSection />
      <GlanceSection />
      <WhyAttendSection />
      <ExperiencesSection />
      <SolutionsSection />
      <SpeakersSection />
      <WaveDivider flip />
      <GccSection />
      <TalentSection />
      <GovernmentSection />
      <RoadmapSection />
      <PartnersSection />
      <FinalCta />
    </>
  );
}

