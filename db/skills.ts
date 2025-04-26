import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Framer Motion", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "REST API Design", level: 85, category: "backend" },

  // Database
  { name: "MySql", level: 80, category: "database" },
  { name: "PostgreSQL", level: 75, category: "database" },
  { name: "Redis", level: 70, category: "database" },

  // DevOps & Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
];

export const categories = [
  { id: "frontend", name: "Frontend Development" },
  { id: "backend", name: "Backend Development" },
  { id: "database", name: "Database" },
  { id: "tools", name: "DevOps & Tools" },
];
