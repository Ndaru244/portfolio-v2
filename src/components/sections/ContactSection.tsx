"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { Profile } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";

interface Props {
  profile: Profile;
}

export default function ContactSection({ profile }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="mb-4"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: reduceMotion ? 0.01 : 0.3 }}
    >
      <div className="surface p-8 md:p-12 text-center space-y-5">
        <p className="section-label">{t("contact")}</p>
        <h2 className="section-title max-w-xl mx-auto text-3xl md:text-4xl">
          {t("contactTitle")}
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          {t("contactDescription")}
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-1">
          {profile.socials.email && (
            <Button href={profile.socials.email} variant="primary" size="lg">
              <Mail className="w-4 h-4" aria-hidden />
              {t("emailMe")}
            </Button>
          )}
          {profile.socials.phone && (
            <Button href={profile.socials.phone} variant="secondary" size="lg">
              <Phone className="w-4 h-4" aria-hidden />
              {t("call")}
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  );
}
