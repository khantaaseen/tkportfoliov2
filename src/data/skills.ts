export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "C/C++", "C#", "Python", "Java", "SQL", "Swift", "PowerShell"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React.js", "Next.js", ".NET", "Angular", "Node.js", "Express.js", "Django", "Tailwind", "Jest", "XUnit"],
  },
  {
    label: "Data & Cloud",
    items: ["PostgreSQL", "SQL Server", "MongoDB", "Firebase", "Supabase", "AWS"],
  },
  {
    label: "Tools",
    items: ["Git", "Azure DevOps", "Visual Studio", "VS Code", "Postman", "SQL Profiler", "Jira", "Claude"],
  },
];
