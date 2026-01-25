"use client";

import { motion } from "framer-motion";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { Project, Experience } from "@/types/portfolio";

interface Props {
  projects: Project[];
  experience: Experience[];
}

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay antar item
    },
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

export default function BentoGrid({ projects, experience }: Props) {
  if (!projects) return null;
  if (!experience) return null;
  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* --- LEFT COLUMN: EXPERIENCE (1 Col) --- */}
      <div id="experience" className="md:col-span-1 space-y-6">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>{" "}
          Experience
        </h3>

        <div className="relative space-y-6">
          {/* Connector Line (Timeline Effect) */}
          <div className="absolute left-[1.15rem] top-4 bottom-4 w-px bg-gradient-to-b from-border to-transparent z-0 hidden md:block" />

          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              className="bento-card p-6 flex flex-col gap-3 relative z-10 group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-1">
                <div className="p-2.5 bg-muted rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                    {exp.company}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mt-0.5 font-medium">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pl-1">
                {exp.description}
              </p>

              <div className="mt-auto pt-3 border-t border-border/50 border-dashed">
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-muted/50 text-[10px] font-semibold text-foreground border border-transparent group-hover:border-border transition-colors">
                  {exp.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- RIGHT COLUMN: PROJECTS (2 Cols) --- */}
      <div id="portfolio" className="md:col-span-2 space-y-6">
        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>{" "}
          Featured Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={`/project/${project.id}` || "#"}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bento-card group block h-full flex flex-col overflow-hidden"
            >
              {/* --- Image Area (CLEAN: No Overlays) --- */}
              <div className="relative h-48 w-full bg-muted border-b border-border overflow-hidden">
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  fallbackText="No Preview"
                />
                {/* HAPUS: Gradient Overlay & Badge */}
              </div>

              {/* --- Content Area --- */}
              <div className="p-5 flex flex-col flex-1 relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                  </div>

                  {/* Action Button (Moved Here) */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-muted group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dashed border-border/50">
                  {project.tech_stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 bg-muted/50 rounded-md text-muted-foreground font-medium border border-transparent group-hover:border-border transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
