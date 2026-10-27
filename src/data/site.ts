import type { ImageMetadata } from "astro";
import munshi from "../assets/projects/munshi.png";
import usePopcorn from "../assets/projects/usepopcorn.jpg";
import travelList from "../assets/projects/travel-list.jpg";
import omnifood from "../assets/projects/omnifood.jpg";
import forkify from "../assets/projects/forkify.jpg";

/**
 * All portfolio content lives here. Facts are taken from the previous
 * portfolio, the CV in /public, and the linked GitHub repositories.
 */

export const profile = {
  name: "Muhammad Sohaib Haseeb",
  shortName: "Sohaib",
  role: "Frontend Developer",
  location: "Lahore, Pakistan",
  coords: "31.55°N 74.34°E",
  email: "sohaibhaseeb775916@gmail.com",
  phone: "03354218408",
  phoneHref: "tel:+923354218408",
  cv: "Muhammad_Sohaib_Haseeb_CV.pdf",
  github: "https://github.com/SohaibHaseeb7759",
};

export const socials = [
  { label: "GitHub", handle: "SohaibHaseeb7759", href: "https://github.com/SohaibHaseeb7759" },
  { label: "Facebook", handle: "muhammadsohaib.haseeb", href: "https://www.facebook.com/muhammadsohaib.haseeb" },
  { label: "Instagram", handle: "muhammadsohaibhaseeb", href: "https://www.instagram.com/muhammadsohaibhaseeb/" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const capabilities = [
  {
    title: "Web development",
    summary:
      "Responsive, component-driven front ends in HTML, CSS, JavaScript, and React — wired to real APIs and built to hold up on every screen size.",
    points: ["Responsive layouts", "React components & hooks", "REST API integration", "Bootstrap & Tailwind CSS"],
  },
  {
    title: "UI / UX design",
    summary:
      "Interfaces that are intuitive before they are decorative: wireframes and prototypes first, then usability testing to refine the details.",
    points: ["Wireframing", "Prototyping", "User research", "Usability testing"],
  },
  {
    title: "Software development",
    summary:
      "A computer-science foundation in C and C++ — algorithms, object-oriented design, and data structures — applied to debugging and shipping working software.",
    points: ["Algorithms", "Object-oriented design", "Data structures", "Debugging"],
  },
];

export const stack = [
  { group: "Frontend", items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { group: "Backend", items: ["Supabase", "PostgreSQL", "Node.js", "Django"] },
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++", "C"] },
  { group: "Tooling", items: ["Git", "GitHub", "Vercel", "Playwright", "npm", "Jira"] },
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  summary: string;
  problem: string;
  built: string[];
  stack: string[];
  image: ImageMetadata;
  imageAlt: string;
  live?: string;
  repo?: string;
  /** The repository exists but is not public. */
  sourcePrivate?: boolean;
  /** Screenshot shape: a desktop browser (default) or a phone. */
  device?: "browser" | "phone";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "munshi",
    title: "Munshi",
    kind: "WhatsApp order management PWA",
    summary:
      "A mobile-first web app for small Pakistani businesses that sell through WhatsApp and Instagram DMs — take an order, track it to delivery, chase what's unpaid, and message the customer, all from a phone.",
    problem:
      "Sellers taking orders in chat threads lose track of what's confirmed, what's shipped, and who still owes cash on delivery.",
    built: [
      "An order lifecycle from pending to delivered, with cancellation that restocks inventory in a single database transaction",
      "One-tap WhatsApp messages pre-filled per order status, with templates each seller can edit",
      "A Supabase Postgres schema with row-level security on every table, plus Excel export and printable order slips",
      "Playwright end-to-end tests covering sign-up through the full order lifecycle",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    image: munshi,
    imageAlt: "Munshi dashboard on a phone showing total revenue, a New order button, and tiles for today's orders, pending, unpaid COD and revenue",
    live: "https://munshi-whatsapp.vercel.app/",
    sourcePrivate: true,
    device: "phone",
    featured: true,
  },
  {
    slug: "usepopcorn",
    title: "usePopcorn",
    kind: "Movie search & rating app",
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
    featured: true,
  },
  {
    slug: "forkify",
    title: "Forkify",
    kind: "Recipe discovery app",
    summary: "Browse and search a large recipe catalogue, open full recipes, and save favourites for later.",
    problem: "Finding a recipe and keeping the good ones without bouncing between tabs.",
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
    summary: "A responsive restaurant and meal-subscription website that presents the menu and services.",
    problem: "Presenting a food service clearly and persuasively on every device size.",
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
    summary: "A packing checklist for trips: add items with quantities, tick them off, sort, and clear the list.",
    problem: "Not forgetting anything before a trip.",
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

/** Coursework listed on the CV — no public links. */
export const coursework = [
  { title: "Advance NotePad", course: "Data Structures", lang: "C++" },
  { title: "CricWick", course: "Object-Oriented Programming", lang: "C++" },
  { title: "Battle Ground Game", course: "Programming Fundamentals", lang: "C++" },
];

export const education = {
  degree: "Computer Science",
  school: "FAST NUCES",
  campus: "Faisalabad",
  since: "2021",
};

export const languages = ["English", "Urdu"];
