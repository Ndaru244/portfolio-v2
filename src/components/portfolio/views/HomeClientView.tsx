"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";
import Loader from "@/components/ui/Loader";
import JsonLd from "@/components/seo/JsonLd";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { useLanguage } from "@/components/layout/LanguageProvider";
import {
  localizeCertificate,
  localizeExperience,
  localizeProfile,
  localizeProject,
} from "@/lib/i18n";

export default function HomeClientView() {
  const { data, loading, isRefetching } = usePortfolioData();
  const { locale } = useLanguage();
  const reduceMotion = useReducedMotion();
  const showCerts = data.settings?.showCertificates !== false;
  const showTech = data.settings?.showTechStack !== false;
  const profile = data.profile ? localizeProfile(data.profile, locale) : null;
  const projects = data.projects.map((project) =>
    localizeProject(project, locale),
  );
  const experience = data.experience.map((item) =>
    localizeExperience(item, locale),
  );
  const certificates = data.certificates.map((item) =>
    localizeCertificate(item, locale),
  );

  return (
    <div className="min-h-screen font-sans text-foreground selection:bg-primary selection:text-white relative overflow-x-hidden">
      {profile && <JsonLd profile={profile} />}
      <AnimatePresence mode="wait">
        {loading && !profile && (
          <motion.div
            key="loader"
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, filter: "blur(12px)" }
            }
            transition={{ duration: reduceMotion ? 0.15 : 0.6 }}
            className="fixed inset-0 z-[9999] bg-background"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      {isRefetching && (
        <div className="fixed top-0 left-0 w-full h-0.5 z-[100] bg-primary origin-left animate-pulse" />
      )}

      <Header profile={profile} navigation={data.navigation} />

      {profile && (
        <motion.main
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0.01 : 0.8,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="max-w-7xl mx-auto px-6 pt-28 pb-12 relative z-10"
        >
          <div className="mb-24">
            <HeroSection profile={profile} />
          </div>
          <ProjectsSection projects={projects} />
          <div className="mb-24">
            <AboutSection profile={profile} />
          </div>
          <ExperienceSection experience={experience} />
          <SkillsSection skills={data.skills} />
          {showCerts && <CertificatesSection certificates={certificates} />}
          {showTech && <TechStackSection projects={projects} />}
          <ContactSection profile={profile} />
        </motion.main>
      )}

      <Footer profile={profile} />
    </div>
  );
}
