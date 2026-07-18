"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";

interface Props {
  projects: Project[];
}

export default function TechStackSection({ projects }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const map = new Map<string, string>();
  projects.forEach((p) =>
    p.techStack?.forEach((item) => {
      if (!map.has(item.id)) map.set(item.id, item.name);
    }),
  );
  const items = Array.from(map.entries());
  if (!items.length) return null;

  return (
    <section id="tech" className="mb-24">
      <p className="section-label mb-4">{t("techStack")}</p>
      <h2 className="text-3xl font-semibold tracking-tight mb-8">
        {t("techTitle")}
      </h2>
      <div className="flex flex-wrap gap-2">
        {items.map(([id, name], i) => (
          <motion.span
            key={id}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: reduceMotion ? 0 : Math.min(i * 0.02, 0.4),
              duration: reduceMotion ? 0.01 : 0.25,
            }}
            className="badge text-sm font-medium px-3 py-1.5"
          >
            {name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
