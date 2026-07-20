"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.35 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground px-4 text-center"
    >
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
        <FileQuestion className="h-9 w-9 text-muted-foreground" aria-hidden />
      </div>

      <p className="section-label mb-3">404</p>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
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
    </motion.div>
  );
}
