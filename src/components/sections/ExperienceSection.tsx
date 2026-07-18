"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Experience } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";

interface Props {
  experience: Experience[];
}

function formatExperienceType(type: string) {
  if (!type) return type;
  return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
}

export default function ExperienceSection({ experience }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  if (!experience.length) return null;

  return (
    <section id="experience" className="mb-24">
      <p className="section-label mb-4">{t("experience")}</p>
      <h2 className="text-3xl font-semibold tracking-tight mb-8">
        {t("experienceTitle")}
      </h2>
      <div className="space-y-4">
        {experience.map((exp, i) => (
          <motion.article
            key={exp.id}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: reduceMotion ? 0 : i * 0.06,
              duration: reduceMotion ? 0.01 : 0.35,
            }}
            className="rounded-2xl border border-border bg-card/40 p-6 md:p-7 flex flex-col md:flex-row gap-5"
          >
            <div className="p-2.5 bg-muted rounded-xl h-fit shrink-0">
              <Briefcase className="w-4 h-4" aria-hidden />
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-lg">{exp.company}</h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" aria-hidden />
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-medium text-primary">{exp.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[65ch]">
                {exp.description}
              </p>
              <span className="badge mt-2">
                {formatExperienceType(exp.type)}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
