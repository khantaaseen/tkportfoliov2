export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  url?: string;
  bullets: string[];
  stack: string[];
}

export const experiences: Experience[] = [
  {
    company: "EliteMedMatch",
    title: "Lead Software Developer",
    location: "Detroit, MI",
    period: "Nov 2025 — Present",
    bullets: [
      "Architected a SaaS mentorship platform connecting pre-med students and physicians through role-based workflows, 60+ REST APIs, Stripe billing, automated mentor payouts, and 3 service tiers ($499–$3,799).",
      "Designed scalable data models, authentication flows, and API architecture across React, TypeScript, Express.js, PostgreSQL, Supabase, and Drizzle ORM.",
      "Engineered a real-time scheduling system on the Google Calendar API that validates mentor availability, prevents booking conflicts, and auto-generates Google Meet sessions.",
      "Led technical architecture, database design, backend services, frontend implementation, deployment workflows, and third-party integrations across the product lifecycle.",
    ],
    stack: ["React", "TypeScript", "Express.js", "PostgreSQL", "Supabase", "Drizzle ORM", "Stripe"],
  },
  {
    company: "Intellinetics",
    title: "Full-Stack Software Engineer, Product",
    location: "Columbus, OH",
    period: "May 2025 — Present",
    bullets: [
      "Designed and delivered an admin-configurable maintenance platform spanning SQL Server, ASP.NET MVC, Razor, and PowerShell automation, enabling controlled maintenance windows across production environments.",
      "Implemented 40+ ASP.NET MVC and SQL Server-backed API endpoints across 50+ feature requests, powering new invoice-processing workflows in a production enterprise platform.",
      "Optimized backend performance through SQL query tightening, C# controller refactoring, and MVC response improvements — cutting latency on hot endpoints by ~30s.",
      "Established code-review practices across C#, JavaScript, and SQL codebases in Azure DevOps, improving consistency and deployment quality across the team.",
    ],
    stack: ["C#", "ASP.NET MVC", "SQL Server", "Razor", "PowerShell", "Azure DevOps"],
  },
  {
    company: "Urban Science",
    title: "Software Developer",
    location: "Detroit, MI",
    period: "Jan 2025 — Apr 2025",
    bullets: [
      "Developed an AI-powered KPI analytics platform with AngularJS, C# .NET, and SQL Server that generated dealership-specific performance insights from business intelligence data.",
      "Integrated OpenAI and D-ID APIs to generate personalized scripts, voice narration, and synthetic-avatar video explanations, reducing content production time and cost by ~70–80%.",
      "Implemented secure authentication and authorization with JWT and BCrypt, protecting application data and user access across the platform.",
    ],
    stack: ["AngularJS", "C# .NET", "SQL Server", "OpenAI API", "JWT"],
  },
];
