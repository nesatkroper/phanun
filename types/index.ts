export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
};

export type Skill = {
  name: string;
  level: number;
  category: string;
};
