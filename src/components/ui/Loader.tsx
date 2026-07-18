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
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

function LogoSpinner({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : logoVariants}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
      className="relative mb-8"
    >
      <div className="relative w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
        {!reduceMotion && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              borderTop: "3px solid hsl(var(--primary))",
              borderBottom: "3px solid hsl(var(--primary))",
              borderLeft: "3px solid hsl(var(--primary))",
              borderRight: "3px solid transparent",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
        )}
        <span className="text-primary font-black text-2xl tracking-tighter relative z-10">
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
      className="w-64 h-1.5 bg-muted rounded-full overflow-hidden relative mb-4"
      role="progressbar"
      aria-label={label}
    >
      {reduceMotion ? (
        <div className="absolute inset-y-0 left-0 w-1/2 bg-primary" />
      ) : (
        <motion.div
          className="absolute h-full w-1/2 bg-primary"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.2 }}
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
    () => t(LOADING_KEYS[textIndex]).toUpperCase(),
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
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground">
      <LogoSpinner reduceMotion={!!reduceMotion} />
      <ProgressBar
        label={t("loadingProgress")}
        reduceMotion={!!reduceMotion}
      />

      <div className="h-6 relative w-64">
        {reduceMotion ? (
          <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground text-center absolute inset-0 flex items-center justify-center">
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground text-center absolute inset-0 flex items-center justify-center"
            >
              {currentText}
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
