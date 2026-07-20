"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Dribbble,
  Menu,
  X,
  LucideIcon,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider";
import { localizeNavItem } from "@/lib/i18n";
import Button from "@/components/ui/Button";
import { Socials, Profile, Navigation } from "@/types";

interface Props {
  profile: Profile | null;
  navigation?: Navigation | null;
}

const SOCIAL_CONFIG: Partial<
  Record<keyof Socials, { icon: LucideIcon; color: string; label: string }>
> = {
  github: { icon: Github, color: "hover:text-foreground", label: "Github" },
  dribbble: { icon: Dribbble, color: "hover:text-pink-500", label: "Dribbble" },
  linkedin: { icon: Linkedin, color: "hover:text-blue-600", label: "LinkedIn" },
};

const HEADER_ITEMS: (keyof Socials)[] = ["github", "dribbble", "linkedin"];

export default function Header({ profile, navigation }: Props) {
  const { locale, t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const socials = (profile?.socials || {}) as Socials;
  const contactEmail = socials?.email;
  // Prefer recruiter-first IA even if remote navigation still has legacy order.
  const PREFERRED_HREF_ORDER = [
    "#projects",
    "#about",
    "#experience",
    "#skills",
    "#contact",
  ];
  const navItems =
    navigation?.items
      ?.map((item) => localizeNavItem(item, locale))
      .sort((a, b) => {
        const ai = PREFERRED_HREF_ORDER.indexOf(a.href);
        const bi = PREFERRED_HREF_ORDER.indexOf(b.href);
        if (ai === -1 && bi === -1) return a.order - b.order;
        if (ai === -1) return 1;
        if (bi === -1) return -1;
        return ai - bi;
      }) ?? [];

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const socialLinks = HEADER_ITEMS.map((key) => {
    const url = socials[key];
    const config = SOCIAL_CONFIG[key];
    if (!url || !config) return null;
    return { key, url, config };
  }).filter(Boolean) as {
    key: keyof Socials;
    url: string;
    config: { icon: LucideIcon; color: string; label: string };
  }[];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 glass"
      initial={reduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <Link
            href="/"
            className="flex items-center gap-2.5 min-w-0 rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            <span className="w-8 h-8 shrink-0 bg-foreground text-background flex items-center justify-center font-bold text-xs rounded-lg">
              ND
            </span>
            <span className="hidden sm:inline text-sm font-bold tracking-widest text-foreground">
              NDARU.PORTO
            </span>
          </Link>
          {navItems.length > 0 && (
            <nav
              className="hidden lg:flex items-center gap-1 ml-2"
              aria-label={t("menu")}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <nav
            className="hidden md:flex items-center gap-0.5 border-r border-border pr-2 mr-1"
            aria-label={t("connect")}
          >
            {socialLinks.map(({ key, url, config }) => {
              const Icon = config.icon;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-10 w-10 items-center justify-center text-muted-foreground rounded-full hover:bg-muted transition-colors ${config.color}`}
                  aria-label={config.label}
                >
                  <Icon className="w-4 h-4" aria-hidden />
                </a>
              );
            })}
          </nav>

          <LanguageSwitcher />
          <ThemeToggle />

          {contactEmail && (
            <Button
              href={contactEmail}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex ml-1"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden />
              <span>{t("contact")}</span>
            </Button>
          )}

          {navItems.length > 0 && (
            <Button
              type="button"
              variant="icon"
              className="lg:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="w-4 h-4" aria-hidden />
              ) : (
                <Menu className="w-4 h-4" aria-hidden />
              )}
            </Button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id={menuId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t("menu")}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <nav
              className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-0.5"
              aria-label={t("menu")}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => setMenuOpen(false)}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            {socialLinks.length > 0 && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-4 flex items-center gap-1 border-t border-border pt-3">
                {socialLinks.map(({ key, url, config }) => {
                  const Icon = config.icon;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center text-muted-foreground rounded-full hover:bg-muted transition-colors"
                      aria-label={config.label}
                    >
                      <Icon className="w-4 h-4" aria-hidden />
                    </a>
                  );
                })}
                {contactEmail && (
                  <Button
                    href={contactEmail}
                    variant="primary"
                    size="sm"
                    className="ml-auto"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Mail className="w-3.5 h-3.5" aria-hidden />
                    {t("contact")}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
