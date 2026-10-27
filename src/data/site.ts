import type { ImageMetadata } from "astro";
import munshi from "../assets/projects/munshi.png";
import munshiLogin from "../assets/projects/munshi-login.png";

/**
 * All portfolio content lives here. The CV in /public is the source of
 * truth for roles, dates, and skills; project details also come from the
 * linked repositories and live sites.
 */

export const profile = {
  name: "Muhammad Sohaib Haseeb",
  shortName: "Sohaib",
  role: "Full Stack Engineer",
  location: "Lahore, Pakistan",
  coords: "31.55°N 74.34°E",
  email: "sohaibhaseeb01@gmail.com",
  phone: "+92 335 4218408",
  phoneHref: "tel:+923354218408",
  cv: "Muhammad_Sohaib_Haseeb_CV.pdf",
  github: "https://github.com/SohaibHaseeb7759",
  linkedin: "https://www.linkedin.com/in/sohaib-haseeb-9a9276282",
  focus: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  /** Shown under the current roles in the hero. Leave empty to hide the line. */
  availability: "Open to full-time and contract roles · remote or Lahore",
};

/** One label for the contact call to action, everywhere it appears. */
export const navCta = "Let's talk";

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sohaib-haseeb-9a9276282" },
  { label: "GitHub", href: "https://github.com/SohaibHaseeb7759" },
  { label: "Instagram", href: "https://www.instagram.com/muhammadsohaibhaseeb/" },
  { label: "Facebook", href: "https://www.facebook.com/muhammadsohaib.haseeb" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/** A client site delivered in a role. Add `image` (16:10, in src/assets/clients/) to replace the placeholder. */
export type Client = {
  name: string;
  note?: string;
  href?: string;
  image?: ImageMetadata;
  logo?: ImageMetadata;
};

export type Role = {
  company: string;
  title: string;
  stack: string;
  start: string;
  end: string;
  current?: boolean;
  where: string;
  points: string[];
  /** Named client deliverables, shown as a list under the role. */
  delivered?: { label: string; items: Client[] };
};

export const experience: Role[] = [
  {
    company: "Transcure",
    title: "Associate Software Developer",
    stack: "React.js",
    start: "May 2026",
    end: "Present",
    current: true,
    where: "Lahore · Onsite",
    points: [
      "Built full-stack sites for Altitude Arena and Altitude Trampoline Park, two UAE entertainment venues, with an Astro + Tailwind front end and a Payload CMS backend on MongoDB — 15+ pages the client edits without code.",
      "Wrote a typed REST client between Astro and Payload with fallback content, so the sites stay up even if the CMS is offline; stored every form submission in the CMS and built a Zoho Campaigns mailing-list integration.",
      "Connected Macralytics to WordPress for code-free content updates, and built responsive, reusable components for RocketMSL and VizCraft.",
    ],
    delivered: {
      label: "Delivered end to end as sole developer",
      items: [
        { name: "Altitude Arena", note: "UAE entertainment venue · Astro + Payload CMS" },
        { name: "Altitude Trampoline Park", note: "UAE trampoline park · Astro + Payload CMS" },
        { name: "Macralytics", note: "Content managed through WordPress" },
        { name: "RocketMSL", note: "Responsive, reusable UI components" },
        { name: "VizCraft", note: "Responsive, reusable UI components" },
      ],
    },
  },
  {
    company: "Backlinker AI",
    title: "Frontend Developer",
    stack: "Next.js & TypeScript",
    start: "Jan 2026",
    end: "Present",
    current: true,
    where: "Remote",
    points: [
      "Build and ship responsive, type-safe UI components for a SaaS platform in Next.js and TypeScript.",
      "Integrate REST APIs and manage asynchronous data flows — including loading and error states — for dynamic content.",
      "Profile and optimise front-end performance, and agree API contracts with backend engineers to deliver features that scale.",
    ],
  },
  {
    company: "Purevi Tech Solutions",
    title: "Associate Frontend Developer",
    stack: "Angular",
    start: "Jul 2024",
    end: "Dec 2025",
    where: "Remote",
    points: [
      "Developed modular, reusable Angular components with responsive design and cross-browser compatibility.",
      "Implemented REST API integrations with centralised error handling, and worked with QA to resolve defects and improve release stability.",
    ],
  },
];

export const capabilities = [
  {
    title: "Frontend engineering",
    summary:
      "Type-safe, responsive interfaces in React, Next.js, Angular, and Astro — reusable components, async data with proper loading and error states, and performance work that holds up in production.",
  },
  {
    title: "Backend & data",
    summary:
      "APIs and data models that keep things consistent: Node/Express and Django REST services, PostgreSQL with row-level security and atomic RPCs, plus MongoDB and MySQL.",
  },
  {
    title: "CMS & delivery",
    summary:
      "Client sites shipped end to end as the sole developer, on Payload CMS and WordPress so content stays editable without code — integrated, deployed, and resilient when services go down.",
  },
];

export const stack = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "C++", "SQL", "HTML5", "CSS3"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Angular", "Astro", "Three.js", "Tailwind CSS", "Chakra UI", "Bootstrap", "PWA"],
  },
  {
    group: "Backend & data",
    items: ["Node.js", "Express.js", "Django REST", "Payload CMS", "Supabase", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    group: "Tools & cloud",
    items: ["Git & GitHub", "Vercel", "AWS", "Azure", "WordPress", "Playwright", "Postman", "Figma", "Agile / Scrum"],
  },
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  /** "feature" = the lead case study with screenshots; "text" = card with an architecture diagram. */
  layout: "feature" | "text";
  date?: string;
  summary: string;
  problem?: string;
  built: string[];
  stack: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  /** A second real screen, shown behind the first on the phone stage. */
  secondaryImage?: ImageMetadata;
  secondaryAlt?: string;
  live?: string;
  repo?: string;
  /** The repository exists but is not public. */
  sourcePrivate?: boolean;
  /** Screenshot shape: a desktop browser (default) or a phone. */
  device?: "browser" | "phone";
  /** For card projects: the path through the stack, drawn as a diagram. */
  flow?: string[];
};

export const projects: Project[] = [
  {
    slug: "munshi",
    title: "Munshi",
    kind: "WhatsApp order management PWA",
    layout: "feature",
    date: "Sep 2026",
    summary:
      "A mobile-first web app that lets small businesses selling through WhatsApp and Instagram DMs manage orders, customers, and products in one place — from a phone.",
    problem:
      "Sellers taking orders in chat threads lose track of what's confirmed, what's shipped, and who still owes cash on delivery.",
    built: [
      "A multi-tenant PostgreSQL schema with row-level security and atomic RPCs that keep orders and stock consistent",
      "One-tap WhatsApp messaging pre-filled per order status, with templates each seller can edit",
      "A revenue dashboard, Excel export, and printable order slips",
      "Playwright end-to-end tests covering sign-up through the full order lifecycle",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Playwright"],
    image: munshi,
    imageAlt:
      "Munshi dashboard on a phone showing total revenue, a New order button, and tiles for today's orders, pending, unpaid COD and revenue",
    secondaryImage: munshiLogin,
    secondaryAlt: "Munshi sign-in screen with a Roman Urdu greeting and email and password fields",
    live: "https://munshi-whatsapp.vercel.app/",
    sourcePrivate: true,
    device: "phone",
  },
  {
    slug: "bidmuse",
    title: "BidMuse",
    kind: "Online bidding platform · Final year project",
    layout: "text",
    date: "Sep 2024 – Jun 2025",
    summary: "A full-stack auction platform where bidders can inspect artifacts in 3D before they place a bid.",
    built: [
      "React front end, Django backend, and a MySQL database",
      "Interactive 3D artifact viewing with Three.js and Blender models, so items can be inspected from every angle",
      "Secure card payments with a fraud-detection model that flags suspicious transactions",
    ],
    stack: ["React.js", "Django", "Flask", "MySQL", "Three.js", "Blender"],
    flow: ["React + Three.js", "Django", "MySQL"],
  },
  {
    slug: "letschat",
    title: "LetsChat",
    kind: "Real-time chat app",
    layout: "text",
    date: "Nov 2024",
    summary: "A full-stack MERN chat application with real-time messaging over WebSockets.",
    built: ["WebSocket-based real-time messaging", "User authentication", "A responsive chat interface"],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    flow: ["React", "WebSockets", "Node + Express", "MongoDB"],
  },
  {
    slug: "usepopcorn",
    title: "usePopcorn",
    kind: "Movie search & rating app",
    layout: "text",
    summary:
      "Search any film, open its details, rate it with a custom star component, and keep a personal watched list.",
    built: [
      "Live search against the OMDb API with loading and error states",
      "A reusable, configurable StarRating component",
      "A custom useLocalStorage hook so the watched list survives reloads",
    ],
    stack: ["React", "Hooks", "OMDb API", "localStorage"],
    flow: ["React + Hooks", "OMDb API", "localStorage"],
    repo: "https://github.com/SohaibHaseeb7759/usePopcorn-Sohaib",
  },
  {
    slug: "forkify",
    title: "Forkify",
    kind: "Recipe discovery app",
    layout: "text",
    summary: "Browse and search a large recipe catalogue, open full recipes, and save favourites for later.",
    built: ["Recipe search and result browsing", "Detailed recipe views", "Saving favourite recipes"],
    stack: ["JavaScript", "HTML", "CSS", "Forkify API"],
    flow: ["HTML + CSS", "JavaScript", "Forkify API"],
    live: "https://forkify-sohaib.netlify.app/",
  },
  {
    slug: "omnifood",
    title: "Omnifood",
    kind: "Responsive marketing site",
    layout: "text",
    summary: "A responsive restaurant and meal-subscription website that presents the menu and services.",
    built: ["Fully responsive layout", "Modern UI/UX patterns for engagement", "Hand-written HTML, CSS, and JavaScript"],
    stack: ["HTML", "CSS", "JavaScript"],
    flow: ["Semantic HTML", "Responsive CSS", "JavaScript"],
    live: "https://omnifood-sohaib.netlify.app/",
  },
  {
    slug: "far-away",
    title: "Far Away",
    kind: "Travel packing list",
    layout: "text",
    summary: "A packing checklist for trips: add items with quantities, tick them off, sort, and clear the list.",
    built: [
      "Add, delete, and toggle packed items",
      "Sort by input order, description, or packed status",
      "Live stats on how much is packed",
    ],
    stack: ["React", "State lifting", "CSS"],
    flow: ["Form", "App state", "List + Stats"],
    repo: "https://github.com/SohaibHaseeb7759/Trevel-List-Sohaib",
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "FAST-NUCES",
  schoolFull: "National University of Computer and Emerging Sciences",
  campus: "Lahore",
  start: "2021",
  end: "2025",
};

export const languages = ["English", "Urdu"];

const clientSites = experience.flatMap((r) => r.delivered?.items ?? []);

/** Evidence strip in About. Counts derive from the data above where possible. */
export const stats = [
  { value: "2+", label: "Years building production web apps" },
  { value: String(experience.length), label: "Roles, onsite and remote" },
  { value: String(clientSites.length), label: "Client sites shipped solo" },
  { value: "15+", label: "CMS-editable pages delivered" },
];

export const about = {
  title: "Across the stack, down to the",
  highlight: "details",
  lead: "I'm a full stack engineer who builds production web applications with React, Next.js, Angular, Node.js, and TypeScript — from SaaS products to marketing sites I've delivered end to end as the sole developer.",
  body: `I'm comfortable owning a feature across the stack: designing the database or CMS, writing the API between them, and shipping a responsive, high-performance interface on top. I studied computer science at ${education.school}, which still shapes how I reason about data, structure, and edge cases.`,
  facts: [
    { label: "Based in", value: profile.location, note: "Working onsite and remote" },
    {
      label: "Experience",
      value: "2+ years",
      note: `${experience.length} roles · ${experience.map((r) => r.company).join(", ")}`,
    },
    {
      label: "Education",
      value: education.degree,
      note: `${education.school}, ${education.campus} · ${education.start}\u2060–\u2060${education.end}`,
    },
    { label: "Languages", value: languages.join(" & "), note: "Full professional proficiency" },
  ],
};

/** Section headings and intros, in page order. */
export const sections = {
  about: { n: "01", label: "About" },
  experience: {
    n: "02",
    label: "Experience",
    title: "Where I've been building.",
    intro: "Three roles across client sites and SaaS products — two of them ongoing, one onsite and one remote.",
  },
  work: {
    n: "03",
    label: "Selected work",
    title: "Projects, from a production PWA to hand-built sites.",
    intro: "Each one is a working application — live where it's deployed, and open source wherever the code is public.",
  },
  skills: {
    n: "04",
    label: "Skills",
    title: "What I bring to a product team.",
    intro: "Three areas I own end to end — from the database and CMS to the interface people actually use.",
    toolkit: "Toolkit",
  },
  contact: {
    n: "05",
    label: "Contact",
    title: "Let's work",
    highlight: "together.",
    intro: "Thanks for visiting. If you have a question, a project opportunity, or just want to say hello, reach out using any of the channels below.",
  },
};
