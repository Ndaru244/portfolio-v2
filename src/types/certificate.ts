import { LocalizedFields } from "./i18n";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
  order: number;
  translations?: LocalizedFields<Pick<Certificate, "title" | "issuer" | "date">>;
}
