"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Button from "@/components/ui/Button";
import { Profile } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";
import ResumeModal from "@/components/portfolio/ResumeModal";

interface Props {
  profile: Profile;
}

export default function HeroSection({ profile }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section id="hero" className="pt-2">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0.01 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-3xl space-y-5"
      >
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 surface overflow-hidden rounded-2xl">
            <ImageWithFallback
              src={profile.avatar_url}
              alt={profile.name}
              fill
              className="object-cover"
              priority
              sizes="80px"
              fallbackText="Avatar"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-2 sm:space-y-3 pt-0.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              {profile.name}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-medium">
              {profile.role}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="badge">{profile.status}</span>
          <p className="text-sm text-muted-foreground inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
            {profile.location}
          </p>
        </div>

        <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
          {profile.bio_short}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Button href="#projects" variant="primary" size="md">
            {t("viewWork")}
            <ArrowDownRight className="w-4 h-4" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="md"
            onClick={() => setResumeOpen(true)}
          >
            {t("resume")}
          </Button>
        </div>
      </motion.div>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
