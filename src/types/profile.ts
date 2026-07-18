import { Socials } from "./social";
import { LocalizedFields } from "./i18n";

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
  translations?: LocalizedFields<
    Pick<Profile, "role" | "location" | "status" | "bio_short" | "bio_long">
  >;
}
