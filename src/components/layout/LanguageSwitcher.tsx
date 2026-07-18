"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale, isSwitching } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "id" : "en")}
      disabled={isSwitching}
      className="inline-flex items-center gap-1.5 rounded-full p-2 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground transition-colors disabled:opacity-70"
      aria-label={locale === "en" ? "Switch to Indonesian" : "Ganti ke English"}
      title={locale === "en" ? "Bahasa Indonesia" : "English"}
    >
      <motion.span
        animate={{ rotate: isSwitching ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex"
      >
        <Languages className="h-4 w-4" />
      </motion.span>
      <span className="relative w-5 overflow-hidden text-left">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={locale}
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="block uppercase"
          >
            {locale}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  );
}
