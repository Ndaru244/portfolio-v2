import { Locale } from "./i18n";

export type SectionLayout =
  | "single"
  | "grid"
  | "carousel"
  | "masonry"
  | "timeline";

export interface TechItem {
  id: string;
  name: string;
  icon: string;
}

export interface ProjectOverview {
  title: string;
  description: string;
}

export interface ProjectSectionItem {
  label: string;
  value: string;
  badge?: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  type: string;
  layout: SectionLayout;
  items: ProjectSectionItem[];
}

export interface ImpactMetric {
  label: string;
  value: string;
}

export interface ProjectTeam {
  size: number;
  role: string;
}

export interface ProjectLinks {
  figma?: string | null;
  github?: string | null;
  live?: string | null;
  docs?: string | null;
  video?: string | null;
}

export interface ProjectTranslation {
  title?: string;
  industry?: string;
  platform?: string;
  discipline?: string;
  client?: string;
  role?: string;
  status?: string;
  overview?: ProjectOverview;
  sections?: ProjectSection[];
  problem?: string;
  research?: string;
  constraints?: string;
  solution?: string;
  engineeringDecision?: string;
  responsibilities?: string;
  challenges?: string;
  lessonsLearned?: string;
  impact?: ImpactMetric[];
  duration?: string;
  team?: ProjectTeam;
}

export interface Project {
  id: string;
  title: string;
  industry: string;
  platform: string;
  discipline: string;
  client: string;
  role: string;
  status: string;
  order: number;
  featured?: boolean;
  overview: ProjectOverview;
  sections: ProjectSection[];
  problem?: string;
  research?: string;
  constraints?: string;
  solution?: string;
  engineeringDecision?: string;
  responsibilities?: string;
  challenges?: string;
  lessonsLearned?: string;
  impact?: ImpactMetric[];
  duration?: string;
  team?: ProjectTeam;
  links: ProjectLinks;
  thumbnail: string;
  gallery: string[];
  techStack: TechItem[];
  translations?: Partial<Record<Locale, ProjectTranslation>>;
}
