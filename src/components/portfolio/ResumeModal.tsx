"use client";

import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Code2, ExternalLink, Palette, X } from "lucide-react";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { useDialogFocus } from "@/hooks/useDialogFocus";
import Button from "@/components/ui/Button";

interface Props {
  open: boolean;
  onClose: () => void;
}

const resumes = [
  {
    key: "uiux" as const,
    href: "/cv-ui.pdf",
    icon: Palette,
  },
  {
    key: "softwareEngineer" as const,
    href: "/cv-dev.pdf",
    icon: Code2,
  },
];

export default function ResumeModal({ open, onClose }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const dialogRef = useDialogFocus<HTMLDivElement>({ open, onClose });

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            aria-describedby="resume-description"
            className="soft-glass w-full max-w-md bg-background/95 p-5 sm:p-6"
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }
            }
            transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 id="resume-title" className="text-xl font-semibold">
                  {t("resumeTitle")}
                </h2>
                <p
                  id="resume-description"
                  className="mt-1 text-sm text-muted-foreground"
                >
                  {t("resumeDescription")}
                </p>
              </div>
              <Button
                type="button"
                variant="icon"
                onClick={onClose}
                aria-label={t("cancel")}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-3">
              {resumes.map(({ key, href, icon: Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40 hover:bg-muted/60"
                >
                  <span className="rounded-xl bg-muted p-2.5 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold">{t(key)}</span>
                    <span className="text-xs text-muted-foreground">
                      {t("openResume")}
                    </span>
                  </span>
                  <ExternalLink
                    className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
