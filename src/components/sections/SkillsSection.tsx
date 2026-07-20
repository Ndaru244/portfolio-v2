"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Skill } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";

interface Props {
  skills: Skill[];
}

export default function SkillsSection({ skills }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const labels: Record<Skill["category"], string> = {
    ux: t("uxProficiency"),
    design: t("design"),
    tech: t("engineering"),
  };
  if (!skills.length) return null;
  const groups = (["ux", "design", "tech"] as const).map((cat) => ({
    cat,
    items: skills
      .filter((s) => s.category === cat)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
  }));

  return (
    <section id="skills" className="section-spacing">
      <p className="section-label mb-3">{t("skills")}</p>
      <h2 className="section-title mb-8">{t("capabilities")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {groups.map(({ cat, items }, gi) =>
          items.length ? (
            <motion.div
              key={cat}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: reduceMotion ? 0 : gi * 0.06,
                duration: reduceMotion ? 0.01 : 0.3,
              }}
              className="surface p-5 md:p-6 space-y-4"
            >
              <h3 className="font-semibold text-base">{labels[cat]}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill.id}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null,
        )}
      </div>
    </section>
  );
}
