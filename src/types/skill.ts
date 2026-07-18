export interface Skill {
  id: string;
  name: string;
  category: "ux" | "design" | "tech";
  order: number;
  percentage?: number;
  level?: string;
}
