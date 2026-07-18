import { LocalizedFields } from "./i18n";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  order: number;
  external?: boolean;
  translations?: LocalizedFields<Pick<NavItem, "label">>;
}

export interface Navigation {
  items: NavItem[];
}
