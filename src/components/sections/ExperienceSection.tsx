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
    <section id="experience" className="section-spacing">
      <p className="section-label mb-3">{t("experience")}</p>
      <h2 className="section-title mb-8">{t("experienceTitle")}</h2>
      <div className="space-y-3">
        {experience.map((exp, i) => (
          <motion.article
            key={exp.id}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: reduceMotion ? 0 : i * 0.05,
              duration: reduceMotion ? 0.01 : 0.3,
            }}
            className="surface p-5 md:p-6 flex flex-col md:flex-row gap-4 md:gap-5"
          >
            <div className="p-2.5 bg-muted rounded-xl h-fit shrink-0">
              <Briefcase className="w-4 h-4 text-muted-foreground" aria-hidden />
            </div>
            <div className="flex-1 space-y-2 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-semibold text-lg leading-snug">
                  {exp.company}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" aria-hidden />
                  {exp.period}
                </span>
              </div>
              <p className="text-sm font-medium text-primary">{exp.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[65ch]">
                {exp.description}
              </p>
              <span className="badge mt-1">
                {formatExperienceType(exp.type)}
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
