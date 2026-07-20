"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { Project } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";

interface Props {
  projects: Project[];
}

export default function ProjectsSection({ projects }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const featured = projects.filter((p) => p.featured !== false).slice(0, 6);
  if (!featured.length) return null;

  return (
    <section id="projects" className="section-spacing">
      <p className="section-label mb-3">{t("featuredProjects")}</p>
      <h2 className="section-title mb-8">{t("projectsTitle")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {featured.map((project, i) => (
          <motion.article
            key={project.id}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: reduceMotion ? 0 : i * 0.05,
              duration: reduceMotion ? 0.01 : 0.35,
            }}
          >
            <Link
              href={`/project/${project.id}`}
              className="bento-card group flex h-full flex-col overflow-hidden"
            >
              <div className="relative h-48 sm:h-52 w-full bg-muted border-b border-border overflow-hidden">
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fallbackText="Project"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex justify-between gap-3 items-start">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      {project.industry} · {project.platform}
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-1.5 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center shrink-0 text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors"
                    aria-hidden
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {project.overview?.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-border">
                  {project.techStack?.slice(0, 3).map((tech) => (
                    <span key={tech.id} className="badge">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
