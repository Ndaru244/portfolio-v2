"use client";

import Image from "next/image";
import { Download, MapPin, Briefcase, Zap, Palette, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Profile, Skill } from "@/types/portfolio";

interface Props {
  profile: Profile | null;
  skills: Skill[];
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillCardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Subcomponents
interface ProfileCardProps {
  profile: Profile;
}

function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <motion.div
      className="md:col-span-4 bento-card p-8 flex flex-col h-full relative overflow-hidden group/card"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Background glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-5 mb-6 relative z-10">
        <motion.div variants={itemVariants} className="relative shrink-0">
          <motion.div
            className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-border/50 shadow-lg bg-muted"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={profile.avatar_url}
              alt={profile.name}
              fill
              className="object-cover"
              priority
              sizes="80px"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="min-w-0 flex flex-col gap-1">
          <h1 className="text-3xl md:text-4xl font-black leading-[1.1] tracking-tight text-foreground">
            {profile.name}
          </h1>
          <span className="block text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
            {profile.role}
          </span>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="h-px w-full bg-gradient-to-r from-border/80 via-border/40 to-transparent mb-6 relative z-10"
      />

      {/* Status & Location */}
      <motion.div
        variants={itemVariants}
        className="flex flex-nowrap items-center justify-start gap-4 mb-8 relative z-10 w-full overflow-hidden"
      >
        {/* Status badge */}
        <motion.div
          className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-600 text-white shadow-md shadow-emerald-500/20 shrink-0 cursor-default overflow-hidden border border-emerald-500/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ backgroundColor: "#059669" }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            animate={{ left: ["-100%", "200%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
              repeatDelay: 2,
            }}
          />

          <Briefcase className="w-3 h-3 relative z-10 shrink-0 text-emerald-100" />

          <div className="flex items-center gap-1.5 relative z-10">
            {/* Pulsing dot */}
            <div className="relative flex h-1.5 w-1.5 items-center justify-center shrink-0">
              <motion.span
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inline-flex h-full w-full rounded-full bg-white"
              />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white shadow-sm" />
            </div>
            <span className="text-[10px] font-medium capitalize tracking-tight whitespace-nowrap">
              {profile.status}
            </span>
          </div>
        </motion.div>

        {/* Location */}
        <a
          href={`https://google.com/maps?q=${encodeURIComponent(profile.location)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group/loc inline-flex items-center gap-1.5 text-[10px] font-medium capitalize tracking-tight text-muted-foreground/80 hover:text-primary transition-colors shrink-0 min-w-0"
          aria-label={`View ${profile.location} on map`}
        >
          <MapPin className="w-3.5 h-3.5 transition-transform group-hover/loc:-translate-y-0.5 shrink-0 opacity-70" />
          <span className="border-b border-transparent group-hover/loc:border-primary/40 whitespace-nowrap truncate">
            {profile.location}
          </span>
        </a>
      </motion.div>

      {/* Bio */}
      <motion.div variants={itemVariants} className="flex-1 relative z-10 mb-8">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 mb-2">
          About Me
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground/90 whitespace-pre-line max-w-md">
          {profile.bio_long}
        </p>
      </motion.div>

      {/* CTA */}
      <motion.a
        variants={itemVariants}
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full py-3.5 bg-foreground text-background text-[10px] font-black tracking-[0.1em] rounded-xl overflow-hidden flex justify-center items-center gap-2 shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
        <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
        <span className="relative z-20 uppercase">See Full Resume</span>
      </motion.a>
    </motion.div >
  );
}

interface SkillProgressProps {
  skills: Skill[];
}

function UXProficiency({ skills }: SkillProgressProps) {
  return (
    <motion.div
      className="bento-card p-6 sm:col-span-2 flex flex-col justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
          <Zap className="w-4 h-4 text-primary" aria-hidden="true" />
          UX Proficiency
        </h2>
        <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md border border-border">
          UX Metrics
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
        {skills.map((skill, index) => (
          <div key={skill.id} className="group">
            <div className="flex justify-between text-xs mb-2">
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {skill.percentage}%
              </span>
            </div>
            <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full relative"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
              </motion.div>
            </div>
            <p className="text-[10px] text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Level: {skill.level}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

interface SkillBadgesProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  colorScheme: "purple" | "blue";
}

function SkillBadges({ title, icon, skills, colorScheme }: SkillBadgesProps) {
  const colors = {
    purple: {
      bg: "bg-purple-500/5",
      text: "text-purple-600 dark:text-purple-300",
      border: "border-purple-100 dark:border-purple-900/50",
      hover: "hover:bg-purple-500 hover:text-white hover:border-purple-500",
      icon: "text-purple-500",
    },
    blue: {
      bg: "bg-blue-500/5",
      text: "text-blue-600 dark:text-blue-300",
      border: "border-blue-100 dark:border-blue-900/50",
      hover: "hover:bg-blue-500 hover:text-white hover:border-blue-500",
      icon: "text-blue-500",
    },
  };

  const theme = colors[colorScheme];

  return (
    <motion.div
      className="bento-card p-6 flex flex-col h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={skillCardVariants}
    >
      <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
        <span className={theme.icon} aria-hidden="true">
          {icon}
        </span>
        {title}
      </h2>
      <div className="flex flex-wrap gap-2 content-start">
        {skills.map((skill) => (
          <motion.span
            key={skill.id}
            variants={badgeVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`badge cursor-default ${theme.bg} ${theme.text} ${theme.border} ${theme.hover} transition-colors duration-300`}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// Main component
export default function ProfileSection({ profile, skills = [] }: Props) {
  if (!profile) return null;

  const uxSkills = skills.filter((s) => s.category === "ux");
  const designTools = skills.filter((s) => s.category === "design");
  const techStack = skills.filter((s) => s.category === "tech");

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 animate-enter">
      <ProfileCard profile={profile} />

      <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full content-start">
        <UXProficiency skills={uxSkills} />

        <SkillBadges
          title="Design Modules"
          icon={<Palette className="w-4 h-4" />}
          skills={designTools}
          colorScheme="purple"
        />

        <SkillBadges
          title="Logic Core"
          icon={<Code2 className="w-4 h-4" />}
          skills={techStack}
          colorScheme="blue"
        />
      </div>
    </section>
  );
}