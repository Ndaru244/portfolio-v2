"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";
import ThemeToggle from "@/components/layout/ThemeToggle";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMove = (event: PointerEvent) => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const nx = event.clientX / window.innerWidth - 0.5;
        const ny = event.clientY / window.innerHeight - 0.5;
        setTilt({ x: nx, y: ny });
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [reduceMotion]);

  const digits = ["4", "0", "4"];
  const parallax = (depth: number) =>
    reduceMotion
      ? {}
      : {
          x: tilt.x * depth,
          y: tilt.y * depth,
        };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.35 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground px-4 text-center"
    >
      <motion.div
        aria-hidden
        animate={{
          x: reduceMotion ? 0 : tilt.x * 120,
          y: reduceMotion ? 0 : tilt.y * 120,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="absolute right-4 top-4 flex items-center gap-1 sm:right-6 sm:top-6">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      <motion.div
        style={parallax(-14)}
        className="mb-6 flex items-end gap-1 font-semibold tracking-tight tabular-nums"
      >
        {digits.map((d, i) => (
          <motion.span
            key={i}
            initial={reduceMotion ? false : { y: 24, opacity: 0 }}
            animate={
              reduceMotion
                ? { y: 0, opacity: 1 }
                : { y: [null, 0, i === 1 ? -10 : -4, 0], opacity: 1 }
            }
            transition={
              reduceMotion
                ? { duration: 0.01 }
                : {
                    delay: i * 0.12,
                    duration: 0.5,
                    y: {
                      duration: 3 + i,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: 0.6 + i * 0.15,
                    },
                  }
            }
            whileHover={reduceMotion ? undefined : { scale: 1.12 }}
            whileTap={reduceMotion ? undefined : { scale: 0.92 }}
            className="cursor-default rounded-lg px-1 text-6xl text-foreground/90 select-none md:text-8xl"
          >
            {d}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        style={parallax(22)}
        initial={reduceMotion ? false : { scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: reduceMotion ? 0 : 0.3,
          duration: reduceMotion ? 0.01 : 0.4,
        }}
        whileHover={reduceMotion ? undefined : { rotate: [0, -6, 6, 0] }}
        whileTap={reduceMotion ? undefined : { scale: 0.9, rotate: -8 }}
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-sm"
      >
        <FileQuestion className="h-7 w-7 text-muted-foreground" aria-hidden />
      </motion.div>

      <motion.div style={parallax(8)} className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
          {t("notFoundTitle")}
        </h1>
        <p className="mb-8 max-w-sm text-muted-foreground leading-relaxed">
          {t("notFoundDescription")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/" variant="primary" size="md">
            <Home className="h-4 w-4" aria-hidden />
            {t("backHome")}
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="md"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {t("goBack")}
          </Button>
        </div>

        <Link
          href="/#contact"
          className="mt-6 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        >
          {t("contact")}
        </Link>
      </motion.div>
    </motion.div>
  );
}
