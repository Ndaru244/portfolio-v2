"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "./LanguageProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuId = "theme-menu";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!mounted) return <div className="h-10 w-10" aria-hidden />;

  const options = [
    { id: "light", label: t("themeLight"), icon: Sun },
    { id: "dark", label: t("themeDark"), icon: Moon },
    { id: "system", label: t("themeSystem"), icon: Monitor },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={t("toggleTheme")}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={menuId}
      >
        {theme === "dark" && <Moon className="h-4 w-4" aria-hidden />}
        {theme === "light" && <Sun className="h-4 w-4" aria-hidden />}
        {theme === "system" && <Monitor className="h-4 w-4" aria-hidden />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={menuId}
            role="listbox"
            aria-label={t("toggleTheme")}
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }
            }
            transition={{ duration: reduceMotion ? 0.01 : 0.15 }}
            className="absolute right-0 top-full z-[100] mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-border bg-card p-1 shadow-md"
          >
            {options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="option"
                aria-selected={theme === opt.id}
                onClick={() => {
                  setTheme(opt.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors hover:bg-muted ${
                  theme === opt.id
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <opt.icon className="h-3.5 w-3.5" aria-hidden />
                  {opt.label}
                </span>
                {theme === opt.id && (
                  <Check className="h-3.5 w-3.5" aria-hidden />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
