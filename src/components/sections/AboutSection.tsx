import { Section } from "@/components/site/Section";
import { ABOUT_PARAGRAPHS } from "@/data/nalai";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About NALAI"
      title="A festival for what Keralam builds next"
      intro={ABOUT_PARAGRAPHS.map((p) => (
        <p key={p}>{p}</p>
      ))}
    />
  );
}
