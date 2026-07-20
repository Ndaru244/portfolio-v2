"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Locale } from "@/types";
import { MessageKey, messages } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isSwitching: boolean;
  t: (key: MessageKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "portfolio_locale";

function readStoredLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "en" || saved === "id" ? saved : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isSwitching, setIsSwitching] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored !== "en") setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const pending = timeouts.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale) return;

      localStorage.setItem(STORAGE_KEY, nextLocale);

      if (reduceMotion) {
        setLocaleState(nextLocale);
        document.documentElement.lang = nextLocale;
        return;
      }

      setIsSwitching(true);
      timeouts.current.push(
        setTimeout(() => {
          setLocaleState(nextLocale);
          document.documentElement.lang = nextLocale;
        }, 160),
        setTimeout(() => setIsSwitching(false), 220),
      );
    },
    [locale, reduceMotion],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      isSwitching,
      t: (key: MessageKey) => messages[locale][key],
    }),
    [locale, setLocale, isSwitching],
  );

  return (
    <LanguageContext.Provider value={value}>
      <motion.div
        animate={{ opacity: !reduceMotion && isSwitching ? 0.35 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
