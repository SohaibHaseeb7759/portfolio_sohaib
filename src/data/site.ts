import type { ImageMetadata } from "astro";
import munshi from "../assets/projects/munshi.png";
import usePopcorn from "../assets/projects/usepopcorn.jpg";
import travelList from "../assets/projects/travel-list.jpg";
import omnifood from "../assets/projects/omnifood.jpg";
import forkify from "../assets/projects/forkify.jpg";

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
};

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
  delivered?: { label: string; items: string[] };
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
      items: ["Altitude Arena", "Altitude Trampoline Park", "Macralytics", "RocketMSL", "VizCraft"],
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
    points: ["React & Next.js", "Angular", "Astro & Tailwind CSS", "Performance profiling"],
  },
  {
    title: "Backend & data",
    summary:
      "APIs and data models that keep things consistent: Node/Express and Django REST services, PostgreSQL with row-level security and atomic RPCs, plus MongoDB and MySQL.",
    points: ["Node.js & Express", "Django REST Framework", "PostgreSQL & Supabase", "REST API design"],
  },
  {
    title: "CMS & delivery",
    summary:
      "Client sites shipped end to end as the sole developer, on Payload CMS and WordPress so content stays editable without code — integrated, deployed, and resilient when services go down.",
    points: ["Payload CMS", "WordPress", "Third-party integrations", "Vercel, AWS & Azure"],
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
  /** "feature" = large case study, "text" = no screenshot, "tile" = compact card. */
  layout: "feature" | "text" | "tile";
  date?: string;
  summary: string;
  problem?: string;
  built: string[];
  stack: string[];
  image?: ImageMetadata;
  imageAlt?: string;
  live?: string;
  repo?: string;
  /** The repository exists but is not public. */
  sourcePrivate?: boolean;
  /** Screenshot shape: a desktop browser (default) or a phone. */
  device?: "browser" | "phone";
  /** For projects without a screenshot: the request path through the stack, drawn as a diagram. */
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
    layout: "feature",
    summary:
      "Search any film, open its details, rate it with a custom star component, and keep a personal watched list.",
    problem: "Keeping track of what you've watched — and what you thought of it — in one fast, focused place.",
    built: [
      "Live search against the OMDb API with loading and error states",
      "A reusable, configurable StarRating component",
      "A custom useLocalStorage hook so the watched list survives reloads",
    ],
    stack: ["React", "Hooks", "OMDb API", "localStorage"],
    image: usePopcorn,
    imageAlt: "usePopcorn interface showing movie search results beside a watched-movies summary",
    repo: "https://github.com/SohaibHaseeb7759/usePopcorn-Sohaib",
  },
  {
    slug: "forkify",
    title: "Forkify",
    kind: "Recipe discovery app",
    layout: "tile",
    summary: "Browse and search a large recipe catalogue, open full recipes, and save favourites for later.",
    built: ["Recipe search and result browsing", "Detailed recipe views", "Saving favourite recipes"],
    stack: ["JavaScript", "HTML", "CSS"],
    image: forkify,
    imageAlt: "Forkify recipe app with search results listed beside a recipe detail view",
    live: "https://forkify-sohaib.netlify.app/",
  },
  {
    slug: "omnifood",
    title: "Omnifood",
    kind: "Responsive marketing site",
    layout: "tile",
    summary: "A responsive restaurant and meal-subscription website that presents the menu and services.",
    built: ["Fully responsive layout", "Modern UI/UX patterns for engagement", "Hand-written HTML, CSS, and JavaScript"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: omnifood,
    imageAlt: "Omnifood landing page hero with a headline and food imagery",
    live: "https://omnifood-sohaib.netlify.app/",
  },
  {
    slug: "far-away",
    title: "Far Away",
    kind: "Travel packing list",
    layout: "tile",
    summary: "A packing checklist for trips: add items with quantities, tick them off, sort, and clear the list.",
    built: [
      "Add, delete, and toggle packed items",
      "Sort by input order, description, or packed status",
      "Live stats on how much is packed",
    ],
    stack: ["React", "State lifting", "CSS"],
    image: travelList,
    imageAlt: "Far Away packing list app with an item form and a list of items to pack",
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
