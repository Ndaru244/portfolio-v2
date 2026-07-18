"use client";

import { motion } from "framer-motion";
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
  const featured = projects.filter((p) => p.featured !== false).slice(0, 6);
  if (!featured.length) return null;

  return (
    <section id="projects" className="mb-24">
      <p className="section-label mb-4">{t("featuredProjects")}</p>
      <h2 className="text-3xl font-semibold tracking-tight mb-8">
        {t("projectsTitle")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {featured.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={`/project/${project.id}`}
              className="bento-card group block h-full flex flex-col overflow-hidden"
            >
              <div className="relative h-52 w-full bg-muted border-b border-border overflow-hidden">
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  fallbackText="Project"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider">
                      {project.industry} · {project.platform}
                    </p>
                    <h3 className="text-xl font-semibold mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.overview?.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-dashed border-border">
                  {project.techStack?.slice(0, 3).map((t) => (
                    <span key={t.id} className="badge">
                      {t.name}
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
