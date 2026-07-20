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
    <section id="tech" className="section-spacing">
      <p className="section-label mb-3">{t("techStack")}</p>
      <h2 className="section-title mb-8">{t("techTitle")}</h2>
      <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
        {items.map(([id, name], i) => (
          <motion.li
            key={id}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: reduceMotion ? 0 : Math.min(i * 0.02, 0.35),
              duration: reduceMotion ? 0.01 : 0.2,
            }}
          >
            <span className="badge text-sm px-3 py-1.5">{name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
