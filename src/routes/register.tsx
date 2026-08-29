import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EVENT, WHY_ATTEND } from "@/data/nalai";

const title = "Register — NALAI, Tomorrow's Keralam";
const description =
  "Register for NALAI, the AI festival on 9 October 2026 at Travancore International Convention Centre, Kerala.";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Register"
        title="Be Part of Tomorrow"
        intro={<p>{EVENT.shortLine}</p>}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8">
              <ul className="space-y-4 text-base">
                <li className="flex items-center gap-3">
                  <CalendarDays className="size-5 text-brand" />
                  {EVENT.date}
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-5 text-brand" />
                  {EVENT.venue}
                </li>
                <li className="flex items-center gap-3">
                  <Users className="size-5 text-brand" />
                  5,000–7,000 expected participants
                </li>
              </ul>
              <a
                href={EVENT.registrationUrl}
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand px-8 text-sm font-bold tracking-wide text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                REGISTER NOW
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Registration is handled through the official link provided by the event
                team. Use cases are not collected as part of attendee registration.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Startup, GCC or partner participation is handled through separate approved
                forms.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <p className="eyebrow">Why attend</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                {WHY_ATTEND.map((w) => (
                  <li key={w.title}>
                    <span className="font-semibold text-foreground">{w.title}</span> —{" "}
                    {w.copy}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
