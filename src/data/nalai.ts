export const EVENT = {
  name: "NALAI",
  tagline: "Tomorrow's Keralam",
  shortLine:
    "An AI festival bringing together people, ideas, technology and opportunities to experience the future.",
  date: "9 October 2026",
  venue: "Travancore International Convention Centre",
  lead: "TCS AI Club",
  registrationUrl: "#register",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experiences", to: "/experiences" },
  { label: "Agenda", to: "/agenda" },
  { label: "Speakers", to: "/speakers" },
  { label: "AI Solutions", to: "/ai-solutions" },
  { label: "GCC & Industry", to: "/gcc-industry" },
  { label: "Roadmap", to: "/roadmap" },
] as const;

export const ABOUT_PARAGRAPHS = [
  "NALAI is an AI festival led by the TCS AI Club, bringing together Government, GCCs, industry, startups, academia, students and the wider AI community.",
  "The festival showcases AI solutions, live experiences, talent, innovation and future opportunities — all in one day, in one place.",
  "Come to see what AI already does today, and to meet the people building what comes next for Keralam.",
];

export const GLANCE = [
  { value: 7000, prefix: "", suffix: "+", label: "Expected audience", note: "5,000–7,000 participants" },
  { value: 7, suffix: "", label: "Festival experiences", note: "Live, interactive formats" },
  { value: 20, suffix: "+", label: "Solution showcases", note: "AI solving real problems" },
  { value: 1, suffix: "", label: "GCC & Industry Forum", note: "Leadership roundtable" },
  { value: 6, suffix: "", label: "Month roadmap", note: "The journey after the festival" },
];

export const WHY_ATTEND = [
  { title: "Experience AI", copy: "Don't just hear about AI. Experience it." },
  { title: "See AI in Action", copy: "Explore real-world AI solutions and live demonstrations." },
  {
    title: "Meet AI Builders",
    copy: "Connect with students, developers, startups, researchers and industry leaders.",
  },
  {
    title: "Discover Opportunities",
    copy: "Explore internships, AI Labs, careers, mentoring and ecosystem opportunities.",
  },
  {
    title: "Meet GCC & Industry Leaders",
    copy: "Connect with organisations shaping AI and digital capabilities.",
  },
  {
    title: "Discover What's Next",
    copy: "Explore how AI can transform work, businesses and public services.",
  },
];

export const EXPERIENCES = [
  { title: "AI Solutions Showcase", copy: "See AI solving real-world challenges." },
  { title: "AI Playground", copy: "Experience AI through interactive demonstrations." },
  {
    title: "GCC & Industry Forum",
    copy: "Conversations around AI capability, talent, technology and opportunity.",
  },
  {
    title: "GCC Leadership Roundtable",
    copy: "Senior leaders discuss AI, talent, capability and future opportunities.",
  },
  {
    title: "AI Talent Connect",
    copy: "Students and AI professionals connect with industry, GCCs and mentors.",
  },
  {
    title: "Startup & Innovation Showcase",
    copy: "Discover emerging AI products, ideas and innovations.",
  },
  {
    title: "Government × Industry",
    copy: "Explore how real challenges can become practical AI opportunities.",
  },
];

export type Speaker = {
  name: string;
  designation: string;
  organisation: string;
  photo?: string;
};

export const SPEAKERS: Speaker[] = [
  {
    name: "Shri Kunhali Kutty",
    designation: "IT Minister",
    organisation: "Government of Kerala",
  },
  {
    name: "Seeram Sambasiva Rao",
    designation: "Special Secretary",
    organisation: "Government of Kerala",
  },
  { name: "Sandeep Kumar", designation: "CEO", organisation: "Kerala IT Mission" },
  {
    name: "Jayan Rajan",
    designation: "Delivery Centre Head",
    organisation: "TCS, Trivandrum",
  },
];

export type Solution = {
  name: string;
  problem: string;
  solution: string;
  impact: string;
};

export const SOLUTIONS: Solution[] = [
  {
    name: "Citizen Services Assistant",
    problem: "Public service queries take time to reach the right desk.",
    solution: "A multilingual AI assistant that understands and routes requests.",
    impact: "Faster answers and shorter queues for citizens.",
  },
  {
    name: "Document Intelligence",
    problem: "Large volumes of paperwork slow down decisions.",
    solution: "AI reads, extracts and summarises documents at scale.",
    impact: "Hours of manual review reduced to minutes.",
  },
  {
    name: "Predictive Operations",
    problem: "Issues are noticed only after they disrupt operations.",
    solution: "Models detect patterns and flag risks early.",
    impact: "Fewer disruptions and better planning.",
  },
];

export const TALENT_LABELS = [
  "Students",
  "AI Labs",
  "Internships",
  "Mentors",
  "Industry",
  "GCCs",
];

export const ROADMAP = [
  { month: "Month 1", title: "Momentum", copy: "Festival outcomes captured and shared with the ecosystem." },
  { month: "Month 2", title: "Connect", copy: "Follow-up sessions between talent, GCCs and industry." },
  { month: "Month 3", title: "Build", copy: "Selected AI ideas move into build and pilot conversations." },
  { month: "Month 4", title: "Learn", copy: "AI Labs, mentoring and learning tracks continue." },
  { month: "Month 5", title: "Scale", copy: "Promising solutions explored for wider adoption." },
  { month: "Month 6", title: "Next", copy: "The ecosystem regroups on what comes next." },
];

export const PARTNERS = [
  "Government of Kerala",
  "Kerala IT Mission",
  "CET",
  "DUK",
  "Mulearn",
  "NIT-C",
];

export const AGENDA = [
  { time: "Morning", title: "Opening & Keynotes", copy: "The festival opens with Government and industry voices." },
  { time: "Late Morning", title: "AI Solutions Showcase", copy: "Live solution walkthroughs across the floor." },
  { time: "Midday", title: "AI Playground", copy: "Hands-on interactive AI demonstrations." },
  { time: "Afternoon", title: "GCC & Industry Forum", copy: "Including the Middle East GCC Leadership Roundtable." },
  { time: "Late Afternoon", title: "AI Talent Connect", copy: "Students and professionals meet mentors and industry." },
  { time: "Evening", title: "Startup & Innovation Showcase", copy: "Emerging AI products, ideas and innovations." },
];
