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
    <section id="skills" className="mb-24">
      <p className="section-label mb-4">{t("skills")}</p>
      <h2 className="text-3xl font-semibold tracking-tight mb-8">
        {t("capabilities")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map(({ cat, items }, gi) =>
          items.length ? (
            <motion.div
              key={cat}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: reduceMotion ? 0 : gi * 0.08,
                duration: reduceMotion ? 0.01 : 0.35,
              }}
              className="soft-glass p-6 space-y-4"
            >
              <h3 className="font-semibold">{labels[cat]}</h3>
              <ul className="space-y-2.5">
                {items.map((skill) => (
                  <li key={skill.id} className="text-sm text-foreground/90">
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
