"use client";

import { motion, AnimatePresence, Variants, useReducedMotion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { MessageKey } from "@/lib/i18n";

const LOADING_KEYS: MessageKey[] = [
  "loadingInit",
  "loadingFetch",
  "loadingAssets",
  "loadingSync",
];

const TEXT_INTERVAL_MS = 1500;

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35 },
  },
};

const textVariants: Variants = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -12, opacity: 0 },
};

function LogoSpinner({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : logoVariants}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
      className="relative mb-8 flex h-20 w-20 items-center justify-center"
    >
      {!reduceMotion && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-foreground border-r-foreground/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-muted">
        <span className="text-foreground font-bold text-xl tracking-tight">
          ND
        </span>
      </div>
    </motion.div>
  );
}

function ProgressBar({
  label,
  reduceMotion,
}: {
  label: string;
  reduceMotion: boolean;
}) {
  return (
    <div
      className="w-56 h-1 bg-muted rounded-full overflow-hidden relative mb-4"
      role="progressbar"
      aria-label={label}
    >
      {reduceMotion ? (
        <div className="absolute inset-y-0 left-0 w-1/2 bg-foreground" />
      ) : (
        <motion.div
          className="absolute h-full w-1/2 bg-foreground"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.15 }}
        />
      )}
    </div>
  );
}

export default function Loader() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [textIndex, setTextIndex] = useState(0);

  const currentText = useMemo(
    () => t(LOADING_KEYS[textIndex]),
    [t, textIndex],
  );

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % LOADING_KEYS.length);
    }, TEXT_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground"
      role="status"
      aria-live="polite"
    >
      <LogoSpinner reduceMotion={!!reduceMotion} />
      <ProgressBar
        label={t("loadingProgress")}
        reduceMotion={!!reduceMotion}
      />

      <div className="h-6 relative w-64">
        {reduceMotion ? (
          <p className="text-xs font-medium tracking-wide text-muted-foreground text-center absolute inset-0 flex items-center justify-center">
            {currentText}
          </p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="text-xs font-medium tracking-wide text-muted-foreground text-center absolute inset-0 flex items-center justify-center"
            >
              {currentText}
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
