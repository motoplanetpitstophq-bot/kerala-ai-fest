# NALAI — Tomorrow's Keralam

A festival website for the TCS AI Club AI festival (9 October 2026, Travancore International Convention Centre). Light theme, red accents, Kerala × AI visual language, inspired by the Huddle Global site: bold type, generous spacing, colourful motion, registration always one click away.

## Pages

- **Home** — full scrolling festival page with all 12 sections below
- **Speakers** — dedicated page with all confirmed speakers (built to grow)
- **Experiences** — detail page for the seven festival experiences
- **AI Solutions** — "AI in Action" showcase (Problem → AI Solution → Impact)
- **GCC & Industry** — including the Middle East GCC Leadership Roundtable
- **Agenda** — day structure placeholder ready for the confirmed schedule
- **Roadmap** — animated six-month post-event timeline
- **About** — short intro to NALAI
- **Register** — CTA page wired to the official registration link

Top navigation: Home | About | Experiences | Agenda | Speakers | AI Solutions | GCC & Industry | Roadmap | Register (Register as a red button, sticky header, mobile drawer).

## Homepage sections (in order)

1. **Hero** — NALAI, "Tomorrow's Keralam", the short line, date and venue, REGISTER NOW + EXPLORE THE FESTIVAL. Animated background where a Kerala scene (backwater waves, palm silhouettes, temple-architecture lines) dissolves into a neural grid with drifting data particles.
2. **About NALAI** — 2–3 short paragraphs.
3. **Festival at a Glance** — animated counters: 5,000–7,000 audience, AI experiences, solution showcases, GCC/industry, 6-month roadmap.
4. **Why Attend** — six cards with the supplied copy.
5. **Experiences** — six interactive cards with hover/tap motion.
6. **AI Solutions** — Problem → AI Solution → Impact cards; only approved entries, placeholder note where pending.
7. **Speakers** — horizontal carousel of the four confirmed speakers + "Additional speakers will be added as confirmed."
8. **GCC & Industry** — short overview plus the Roundtable, with an animated Kerala ↔ Middle East connection map.
9. **AI Talent** — "The People Behind Tomorrow" with labels: Students | AI Labs | Internships | Mentors | Industry | GCCs.
10. **Government & AI** — compact "AI for Real-World Impact" block, card slots for approved use cases.
11. **Partners** — clean logo grid (Government of Kerala, Kerala IT Mission, CET, DUK, Mulearn, NIT-C), with TCS AI Club positioned as lead.
12. **Final CTA** — "Be Part of Tomorrow" / Register Now.

## Design system

- Light base (warm off-white), red primary accent, supporting Kerala-festival hues (deep teal/backwater green, gold) used sparingly as gradients.
- Strong display typeface for headlines, clean sans for body; subtle Malayalam motif accents (not machine-translated content).
- Motion: scroll reveals, selective parallax, counters, carousel, animated timeline and connection map — all reduced/simplified on mobile and under `prefers-reduced-motion`.
- All colours as semantic tokens in `src/styles.css`; no hardcoded colour classes.

## Technical notes

- TanStack Start file routes under `src/routes/`, each with its own `head()` metadata (title, description, og/twitter).
- Content (speakers, experiences, solutions, partners, roadmap, why-attend) lives in typed data modules under `src/data/` so new speakers/solutions are a one-line addition.
- Animations with Motion for React plus CSS; hero visual as a layered SVG/canvas composition.
- Generated Kerala × AI imagery for hero and section backgrounds; speaker photos use styled initial placeholders until real photos are supplied.
- No backend: registration links out to the event team's URL (placeholder constant until provided), and registration collects no use cases.

## Open items to confirm later

- Official registration URL
- Speaker photographs and partner logo files
- Agenda times and approved AI solution entries
