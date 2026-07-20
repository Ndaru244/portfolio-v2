"use client";
import { ArrowUp, Github, Linkedin, Mail, Dribbble, Phone, LucideIcon } from "lucide-react";
import { Profile, Socials } from "@/types";
import { useLanguage } from "./LanguageProvider";
import Button from "@/components/ui/Button";

interface Props {
  profile: Profile | null;
}

const SOCIAL_ICONS: Partial<Record<keyof Socials, LucideIcon>> = {
  linkedin: Linkedin,
  github: Github,
  dribbble: Dribbble,
};

const FOOTER_SOCIALS: (keyof Socials)[] = ["linkedin", "github", "dribbble"];

const formatPhoneNumber = (link: string | undefined | null) => {
  if (!link) return "";

  const cleanNumber = link.replace(/\D/g, "");
  const match = cleanNumber.match(/^(62)(\d{3})(\d{4})(\d+)$/);

  if (match) {
    return `(+${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
  }

  return cleanNumber;
};

export default function Footer({ profile }: Props) {
  const { t } = useLanguage();
  const socials = (profile?.socials || {}) as Socials;

  const safeName = profile?.name || "Ndaru L Santosa";
  const safeEmailLink = socials?.email || "";
  const safePhoneLink = socials?.phone || "";

  const displayEmail = safeEmailLink
    ? safeEmailLink.replace("mailto:", "")
    : t("emailUnavailable");
  const displayPhone = safePhoneLink
    ? formatPhoneNumber(safePhoneLink)
    : t("phoneUnavailable");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 md:mt-24 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-base font-bold tracking-widest text-foreground">
              NDARU.PORTO
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t("footerDescription")}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-foreground mb-4 tracking-wider">
              {t("connect")}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SOCIALS.map((key) => {
                const url = socials[key];
                const Icon = SOCIAL_ICONS[key];

                if (!url || !Icon) return null;

                const label = key.charAt(0).toUpperCase() + key.slice(1);

                return (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="w-4 h-4" aria-hidden /> {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-foreground mb-4 tracking-wider">
              {t("contact")}
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={safeEmailLink || undefined}
                  className="inline-flex items-center gap-2 break-all hover:text-foreground transition-colors"
                  {...(safeEmailLink
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { "aria-disabled": true })}
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden />
                  {displayEmail}
                </a>
              </li>
              <li>
                <a
                  href={safePhoneLink || undefined}
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                  {...(safePhoneLink
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { "aria-disabled": true })}
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden />
                  {displayPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {safeName}. Engineered with
            <span className="text-foreground font-medium"> Next.js 16</span> &
            <span className="text-foreground font-medium"> Tailwind v4</span>.
          </p>

          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
          >
            {t("backToTop")}
            <ArrowUp className="w-3.5 h-3.5" aria-hidden />
          </Button>
        </div>
      </div>
    </footer>
  );
}
