"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Maximize2,
  Layers,
  Cpu,
  Globe,
  Briefcase,
  User,
  Activity,
  Check,
  Tag,
  Sparkles
} from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { Project, ProjectSection } from "@/types/portfolio";

interface Props {
  project: Project | null;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const getStatusColor = (status: string) => {
  const s = (status || "").toLowerCase();
  if (s.includes("live") || s.includes("production") || s.includes("shipped")) {
    return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
  }
  if (s.includes("archived") || s.includes("lost")) {
    return "text-amber-500 bg-amber-500/10 border-amber-500/20";
  }
  if (s.includes("completed") || s.includes("finished")) {
    return "text-blue-500 bg-blue-500/10 border-blue-500/20";
  }
  return "text-blue-500 bg-blue-500/10 border-blue-500/20";
};

export default function ProjectClientView({ project }: Props) {
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">Case study ini tidak ditemukan.</p>
        <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const safeOverview = project.overview_desc || "No description available.";
  const safeLabel = project.overview_label || "Project Overview";

  return (
    <motion.main
      className="max-w-7xl mx-auto px-6 pt-32 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* TOP NAVIGATION */}
      <motion.div variants={itemVariants} className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group px-4 py-2 rounded-full hover:bg-muted/50"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* TITLE HEADER */}
      <motion.div variants={itemVariants} className="mb-12">
        <div className="space-y-4">
          <span className="inline-block px-3 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest shadow-sm">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-balance">
            {project.title}
          </h1>
        </div>
      </motion.div>

      {/* HERO IMAGE */}
      <motion.div
        variants={itemVariants}
        className="bento-card p-2 md:p-3 mb-20 rounded-[2rem] bg-card/50 border-white/20"
      >
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[1.5rem] overflow-hidden bg-muted">
          <ImageWithFallback
            src={project.thumbnail}
            alt={project.title}
            width={1000}
            height={562}
            className="w-full h-full object-cover"
            priority
            fallbackText="Project Thumbnail"
          />
        </div>
      </motion.div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* LEFT COLUMN: Main Content */}
        <div className="md:col-span-8 space-y-16">
          {/* OVERVIEW BENTO GRID */}
          <motion.section variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-bold flex items-center gap-3 mb-6 border-b border-border pb-4">
              <Layers className="w-5 h-5 text-primary" />
              {safeLabel}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Main Description */}
              <div className="sm:col-span-2 bento-card p-6 md:p-8 bg-muted/20 border-border/60">
                <p className="text-muted-foreground leading-loose whitespace-pre-line text-lg">
                  {safeOverview}
                </p>
              </div>

              {/* Client */}
              {project.client && (
                <div className="bento-card p-5 flex flex-col gap-2 justify-center bg-card border-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" /> Client
                  </div>
                  <p className="font-bold text-lg text-foreground truncate">
                    {project.client}
                  </p>
                </div>
              )}

              {/* Role */}
              {project.role && (
                <div className="bento-card p-5 flex flex-col gap-2 justify-center bg-card border-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                    <User className="w-4 h-4" /> Role
                  </div>
                  <p className="font-bold text-lg text-foreground truncate">
                    {project.role}
                  </p>
                </div>
              )}

              {/* Category */}
              {project.category && (
                <div className="bento-card p-5 flex flex-col gap-2 justify-center bg-card border-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                    <Tag className="w-4 h-4" /> Category
                  </div>
                  <p className="font-bold text-lg text-foreground truncate">
                    {project.category}
                  </p>
                </div>
              )}

              {/* Status */}
              {project.status && (
                <div className="bento-card p-5 flex flex-col gap-2 justify-center bg-card border-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                    <Activity className="w-4 h-4" /> Status
                  </div>
                  <div
                    className={`inline-flex self-start items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </div>
                </div>
              )}
            </div>
          </motion.section>

          {/* DYNAMIC SECTIONS */}
          {project.sections?.map((section: ProjectSection, idx: number) => (
            <motion.section key={idx} variants={itemVariants} className="mb-12">
              <h3 className="text-xl font-bold flex items-center gap-3 mb-6 border-b border-border pb-4">
                <Sparkles className="w-5 h-5 text-primary" />{section.title}
              </h3>

              <div
                className={
                  section.type === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-4"
                    : "flex flex-col"
                }
              >
                {section.items.map((item, itemIdx) => {
                  const isTimeline = section.type === "timeline";
                  const isLastItem = itemIdx === section.items.length - 1;

                  return (
                    <div
                      key={itemIdx}
                      className={`flex gap-4 ${!isTimeline ? "mb-4" : "mb-0"}`}
                    >
                      {isTimeline && (
                        <div className="flex flex-col items-center">
                          <div className="mt-6 relative z-10 shrink-0">
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-[3px] ring-background shadow-sm">
                              <Check
                                className="w-3.5 h-3.5 text-white"
                                strokeWidth={3}
                              />
                            </div>
                          </div>
                          {!isLastItem && (
                            <div className="w-[2px] bg-border/60 flex-1 -mb-6 mt-1" />
                          )}
                        </div>
                      )}

                      <div
                        className={`flex-1 min-w-0 ${isTimeline && !isLastItem ? "pb-8" : ""
                          }`}
                      >
                        <div
                          className={`bento-card p-5 bg-muted/20 border-border/60 relative ${isTimeline
                            ? "before:absolute before:top-6 before:-left-2 before:w-3 before:h-3 before:bg-muted/20 before:rotate-45 before:border-l before:border-b before:border-border/60"
                            : ""
                            }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 relative z-10">
                            <h4 className="font-bold text-foreground text-lg leading-tight">
                              {item.label}
                            </h4>
                            {item.badge && (
                              <span className="self-start text-[10px] font-mono font-medium border border-primary/30 text-primary px-2.5 py-1 rounded bg-primary/5 whitespace-nowrap">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-muted-foreground text-base leading-relaxed whitespace-pre-line relative z-10">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}

          {/* GALLERY - Static Only */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.section variants={itemVariants} className="mb-12">
              <h3 className="text-xl font-bold flex items-center gap-3 mb-8 border-b border-border pb-4">
                <Globe className="w-5 h-5 text-primary" />
                Project Gallery
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                {project.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    initial="initial"
                    whileHover="hover"
                    className={`
                      relative rounded-2xl overflow-hidden border border-border/50 bg-muted w-full
                      ${idx === 0 ? "md:col-span-2 md:row-span-2" : ""}
                      ${idx === 3 ? "md:col-span-2" : ""}
                    `}
                  >
                    {/* 1. Link Langsung ke Image URL */}
                    <motion.a
                      href={img}
                      target="_blank"
                      rel="noopener noreferrer" // Keamanan wajib untuk target="_blank"
                      className="block w-full h-full cursor-zoom-in"
                    >
                      {/* 2. Wrapper Animasi untuk Image */}
                      <motion.div
                        className="w-full h-full"
                        variants={{
                          initial: { scale: 1 },
                          hover: {
                            scale: 1.08,
                            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
                          }
                        }}
                      >
                        <ImageWithFallback
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500"
                          loading="lazy"
                          fallbackText="Image Unavailable"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>

                      {/* 3. Hover Overlay (Ikon atau Dimming) */}
                      <motion.div
                        className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 pointer-events-none"
                        variants={{
                          hover: { backgroundColor: "rgba(0,0,0,0.5)" }
                        }}
                      >
                        <motion.div
                          variants={{
                            initial: { opacity: 0, y: 10 },
                            hover: { opacity: 1, y: 0 }
                          }}
                          className="bg-white/20 backdrop-blur-md p-3 rounded border border-white/30 text-white shadow-2xl"
                        >
                          <Maximize2 className="w-5 h-5" />
                        </motion.div>
                      </motion.div>
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* RIGHT COLUMN: Sticky Sidebar */}
        <motion.aside
          variants={itemVariants}
          className="md:col-span-4 relative h-full"
        >
          <div className="sticky top-32 space-y-6">
            {/* Deployment Card */}
            <div className="bento-card p-6 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Action
              </h4>
              {project.demo_url ? (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-foreground text-background font-bold text-sm shadow-lg hover:opacity-90 transition-all active:scale-95"
                >
                  Visit Live Site
                  <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
              ) : (
                <div className="w-full p-3 rounded-xl bg-muted text-muted-foreground text-center font-bold text-sm border border-border/50 flex flex-col items-center gap-1 opacity-70 cursor-not-allowed">
                  <span>Demo Unavailable</span>
                </div>
              )}

              {project.repo_url && (
                <a
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full p-3 rounded-xl border border-border hover:bg-muted/50 hover:border-primary/50 transition-all font-bold text-sm text-foreground"
                >
                  <Github className="w-4 h-4" /> Source Code
                </a>
              )}
            </div>

            {/* Tech Stack Card */}
            <div className="bento-card p-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4" /> {project.category === "UI/UX" ? "Design Stack" : "Tech Stack"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech_stack?.map((tech) => (
                  <span
                    key={tech}
                    className="badge cursor-default hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.main>
  );
}