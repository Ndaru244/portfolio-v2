"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { ArrowUpRight, Briefcase, Calendar, FolderGit2, Hash, Sparkles } from "lucide-react";
import { Project, Experience } from "@/types/portfolio";

interface Props {
  projects: Project[];
  experience: Experience[];
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 50, damping: 20 },
  },
};

interface SectionHeaderProps {
  title: string;
  iconColor?: string;
}

function SectionHeader({ title, iconColor = "text-primary" }: SectionHeaderProps) {
  const getIcon = () => {
    const t = title.toLowerCase();

    if (t.includes("experience")) return Briefcase;
    if (t.includes("project")) return FolderGit2;
    if (t.includes("skill")) return Sparkles;

    return Hash;
  };

  const IconComponent = getIcon();

  return (
    <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
      <IconComponent className={`w-4 h-4 ${iconColor}`} strokeWidth={2.5} aria-hidden="true" />
      <span>{title}</span>
    </h2>
  );
}

interface ExperienceCardProps {
  experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      className="bento-card p-6 flex flex-col gap-3 relative z-10 group hover:border-primary/50 transition-colors"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-1">
        <div className="p-2.5 bg-muted rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
          <Briefcase className="w-4 h-4" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
            {experience.company}
          </h3>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mt-0.5 font-medium">
            <Calendar className="w-3 h-3" aria-hidden="true" />
            <time>{experience.period}</time>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed pl-1">
        {experience.description}
      </p>

      {/* Footer badges */}
      <div className="mt-auto pt-3 border-t border-border/50 border-dashed flex flex-wrap gap-2">
        <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted/50 text-[10px] font-semibold text-foreground border border-transparent group-hover:border-border transition-colors">
          {experience.role}
        </span>
        <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary/5 text-primary text-[9px] uppercase tracking-wider font-bold border border-primary/20">
          {experience.type}
        </span>
      </div>
    </motion.article>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article variants={cardVariants} className="h-full">
      <Link
        href={`/project/${project.id}`}
        className="bento-card group block h-full flex flex-col overflow-hidden"
        aria-label={`View ${project.title} project details`}
      >
        {/* Thumbnail */}
        <div className="relative h-48 w-full bg-muted border-b border-border overflow-hidden">
          <ImageWithFallback
            src={project.thumbnail}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            fallbackText="No Preview"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1 relative">
          <div className="flex justify-between items-start mb-4 gap-3">
            <div className="space-y-1 min-w-0 flex-1">
              <p className="text-[10px] font-bold text-primary uppercase tracking-wider">
                {project.category}
              </p>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {project.title}
              </h3>
            </div>

            {/* Action icon */}
            <div
              className="w-8 h-8 flex items-center justify-center rounded-full bg-muted group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0"
              aria-hidden="true"
            >
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dashed border-border/50">
            {project.tech_stack.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-1 bg-muted/50 rounded-md text-muted-foreground font-medium border border-transparent group-hover:border-border transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tech_stack.length > 3 && (
              <span
                className="text-[10px] px-2.5 py-1 bg-muted/50 rounded-md text-muted-foreground font-medium"
                aria-label={`${project.tech_stack.length - 3} more technologies`}
              >
                +{project.tech_stack.length - 3}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// Main component
export default function BentoGrid({ projects, experience }: Props) {
  if (!projects?.length && !experience?.length) return null;

  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Experience Column */}
      {experience?.length > 0 && (
        <div id="experience" className="md:col-span-1 space-y-6">
          <SectionHeader title="Experience" />

          <div className="relative space-y-6">
            {/* Timeline connector */}
            <div
              className="absolute left-[1.15rem] top-4 bottom-4 w-px bg-gradient-to-b from-border to-transparent z-0 hidden md:block"
              aria-hidden="true"
            />

            {experience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      )}

      {/* Projects Column */}
      {projects?.length > 0 && (
        <div
          id="portfolio"
          className={experience?.length > 0 ? "md:col-span-2" : "md:col-span-3"}
        >
          <div className="space-y-6">
            <SectionHeader title="Featured Projects" iconColor="text-purple-500" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
}