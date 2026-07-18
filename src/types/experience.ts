import { LocalizedFields } from "./i18n";

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  type: "work" | "internship" | "Contract";
  order: number;
  translations?: LocalizedFields<
    Pick<Experience, "company" | "role" | "period" | "description">
  >;
}
