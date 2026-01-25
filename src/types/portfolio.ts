export interface Socials {
  github: string;
  linkedin: string;
  dribbble: string;
  email: string;
  phone: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  status: string;
  bio_short: string;
  bio_long: string;
  socials: Socials;
  resume_url: string;
  avatar_url: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "ux" | "design" | "tech";
  order: number;
  percentage?: number;
  level?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  type: "work" | "internship";
  order: number;
}

export interface ProjectSectionItem {
  label: string;
  value: string;
  badge?: string;
}

export interface ProjectSection {
  title: string;
  type: "timeline" | "grid" | "list";
  items: ProjectSectionItem[];
}

export interface Project {
  id: string;
  title: string;
  category: string;

  client: string;
  role: string;
  status: string;
  order: number;

  overview_label: string;
  overview_desc: string;

  sections: ProjectSection[];

  thumbnail: string;
  gallery: string[];
  tech_stack: string[];
  demo_url: string | null;
  repo_url: string | null;
}
