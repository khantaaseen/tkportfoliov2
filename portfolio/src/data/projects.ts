export interface Project {
  title: string;
  period?: string;
  description: string;
  stack: string[];
  /** Link to the deployed site, if hosted */
  live?: string;
  /** Link to the GitHub repository */
  github?: string;
  /** Set true to feature this project first / larger */
  featured?: boolean;
}

/**
 * Add new projects here — the Projects section renders this list
 * automatically. Order matters: first item appears first.
 */
export const projects: Project[] = [
  {
    title: "EliteMedMatch",
    period: "2025 — Present",
    description:
      "SaaS mentorship platform pairing pre-med students with physicians. Role-based workflows, 60+ REST APIs, Stripe billing with automated mentor payouts, and real-time Google Calendar scheduling that spins up Meet sessions on booking.",
    stack: ["React", "TypeScript", "Express.js", "PostgreSQL", "Supabase", "Stripe"],
    live: "https://elitemedmatch.com",
    featured: true,
  },
  {
    title: "CRM Pro",
    period: "Sep — Dec 2024",
    description:
      "Full-stack CRM for managing customer records, media assets, business expenses, and scheduling workflows in one unified web app. Jest test suites at 90% coverage with automated Vercel deployments.",
    stack: ["Next.js", "React", "TypeScript", "Firebase", "Jest", "Vercel"],
    github: "https://github.com/taaseenkhan/crm-pro",
  },
  {
    title: "CarPiServer",
    period: "Sep — Dec 2022",
    description:
      "Lane-detection system for autonomous RC cars. Real-time image processing and control across Raspberry Pi, Arduino, and ESP modules, hitting 90% detection accuracy.",
    stack: ["C++", "Python", "Raspberry Pi", "Arduino", "OpenCV"],
    github: "https://github.com/taaseenkhan/carpiserver",
  },
];
