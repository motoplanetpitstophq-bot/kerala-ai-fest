import { Section } from "@/components/site/Section";

export function GovernmentSection() {
  return (
    <Section
      id="government"
      eyebrow="Government & AI"
      title="AI for Real-World Impact"
      intro={
        <>
          <p>
            NALAI showcases how AI can move from ideas to practical solutions across public
            services, industry and the wider ecosystem.
          </p>
          <p className="text-sm">
            Government-approved AI use cases will be displayed here once supplied by
            Government / Kerala IT Mission.
          </p>
        </>
      }
    />
  );
}
