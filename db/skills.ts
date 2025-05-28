import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 75, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Next.js", level: 65, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "Framer Motion", level: 60, category: "frontend" },

  // Backend
  { name: "Node.js", level: 55, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "REST API Design", level: 80, category: "backend" },

  // Database
  { name: "MySql", level: 60, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "Redis", level: 70, category: "database" },

  // DevOps & Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 55, category: "tools" },
];

export const categories = [
  { id: "frontend", name: "Frontend Development" },
  { id: "backend", name: "Backend Development" },
  { id: "database", name: "Database" },
  { id: "tools", name: "DevOps & Tools" },
];
