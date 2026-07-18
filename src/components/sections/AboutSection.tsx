"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Profile } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";

interface Props {
  profile: Profile;
}

export default function AboutSection({ profile }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0.01 : 0.55 }}
    >
      <p className="section-label mb-4">{t("about")}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 max-w-3xl">
        {t("aboutTitle")}
      </h2>
      <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-[65ch]">
        {profile.bio_long}
      </p>
    </motion.section>
  );
}
