"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Figma,
  FileText,
  Play,
  Briefcase,
  User,
  Activity,
  Clock,
  Users,
} from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Button from "@/components/ui/Button";
import ProjectJsonLd from "@/components/seo/ProjectJsonLd";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { Locale, Project, ProjectSection } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { localizeProject } from "@/lib/i18n";

const ProjectGallery = dynamic(
  () => import("@/components/portfolio/ProjectGallery"),
  {
    ssr: false,
    loading: () => <div className="h-40 skeleton mb-8" />,
  },
);

export interface AdjacentProjectLink {
  id: string;
  title: string;
  titles?: Partial<Record<Locale, string>>;
}

interface Props {
  project: Project | null;
  previousProject?: AdjacentProjectLink | null;
  nextProject?: AdjacentProjectLink | null;
}

function StoryBlock({ title, body }: { title: string; body?: string }) {
  if (!body) return null;
  return (
    <section className="mb-6">
      <p className="section-label mb-1.5">{title}</p>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
        {body}
      </p>
    </section>
  );
}

function SectionRenderer({ section }: { section: ProjectSection }) {
  const layout = section.layout || "grid";
  if (layout === "timeline") {
    return (
      <div className="relative space-y-5 pl-8 sm:pl-10">
        <div
          className="absolute left-[0.7rem] sm:left-[0.85rem] top-2 bottom-2 w-px bg-border"
          aria-hidden
        />
        {section.items.map((item, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-8 sm:-left-10 top-5 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-primary bg-background text-[10px] sm:text-xs font-bold text-primary shadow-sm">
              {i + 1}
            </span>
            <div className="soft-glass p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h4 className="font-semibold text-base sm:text-lg leading-snug">
                  {item.label}
                </h4>
                {item.badge && <span className="badge">{item.badge}</span>}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (layout === "single") {
    return (
      <div className="space-y-3">
        {section.items.map((item, i) => (
          <div key={i} className="soft-glass p-4">
            <div className="flex flex-wrap gap-2 mb-1.5">
              <h4 className="font-semibold text-sm">{item.label}</h4>
              {item.badge && <span className="badge">{item.badge}</span>}
            </div>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {section.items.map((item, i) => (
        <div key={i} className="soft-glass p-4">
          <div className="flex flex-wrap gap-2 mb-1.5">
            <h4 className="font-semibold text-sm">{item.label}</h4>
            {item.badge && <span className="badge">{item.badge}</span>}
          </div>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

const getStatusColor = (status: string) => {
  const s = (status || "").toLowerCase();
  if (s.includes("live") || s.includes("production"))
    return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
  if (s.includes("archived") || s.includes("diarsipkan"))
    return "text-amber-500 bg-amber-500/10 border-amber-500/20";
  return "text-blue-500 bg-blue-500/10 border-blue-500/20";
};

function adjacentTitle(link: AdjacentProjectLink, locale: Locale) {
  return link.titles?.[locale] || link.title;
}

export default function ProjectClientView({
  project: rawProject,
  previousProject,
  nextProject,
}: Props) {
  const { locale, t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const project = rawProject ? localizeProject(rawProject, locale) : null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-semibold mb-3">{t("projectNotFound")}</h1>
        <Button href="/" variant="primary" size="md">
          {t("backToPortfolio")}
        </Button>
      </div>
    );
  }

  const overviewDesc = project.overview?.description || "";
  const links = project.links || {};
  const statusKey = rawProject?.status || project.status;

  return (
    <>
      <ProjectJsonLd project={project} />
      <BreadcrumbJsonLd
        items={[
          { name: t("home"), url: "https://ndaru-portfolio.web.app/" },
          {
            name: project.title,
            url: `https://ndaru-portfolio.web.app/project/${project.id}`,
          },
        ]}
      />
      <motion.main
        className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-12"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.35 }}
      >
        <div className="mb-5">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden /> {t("back")}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-6 lg:gap-8 mb-8 items-start">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              <span className="badge">{project.industry}</span>
              <span className="badge">{project.platform}</span>
              <span className="badge">{project.discipline}</span>
              <span className={`badge border ${getStatusColor(statusKey)}`}>
                {project.status}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-[65ch]">
              {overviewDesc}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {links.live && (
                <Button
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                >
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />{" "}
                  {t("liveDemo")}
                </Button>
              )}
              {links.github && (
                <Button
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  <Github className="w-3.5 h-3.5" aria-hidden /> GitHub
                </Button>
              )}
              {links.figma && (
                <Button
                  href={links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  <Figma className="w-3.5 h-3.5" aria-hidden /> Figma
                </Button>
              )}
              {links.docs && (
                <Button
                  href={links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  <FileText className="w-3.5 h-3.5" aria-hidden /> {t("docs")}
                </Button>
              )}
              {links.video && (
                <Button
                  href={links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  <Play className="w-3.5 h-3.5" aria-hidden /> {t("video")}
                </Button>
              )}
            </div>
          </div>
          <div className="relative aspect-video soft-glass overflow-hidden rounded-xl">
            <ImageWithFallback
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              fallbackText="Thumbnail"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8">
          <Meta icon={Briefcase} label={t("client")} value={project.client} />
          <Meta icon={User} label={t("role")} value={project.role} />
          <Meta
            icon={Clock}
            label={t("duration")}
            value={project.duration || "—"}
          />
          <Meta
            icon={Users}
            label={t("team")}
            value={
              project.team ? `${project.team.size} · ${project.team.role}` : "—"
            }
          />
        </div>

        {project.impact?.length ? (
          <section className="mb-8">
            <p className="section-label mb-2">{t("impact")}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {project.impact.map((m) => (
                <div key={m.label} className="soft-glass p-3.5">
                  <p className="text-lg sm:text-xl font-semibold leading-snug">
                    {m.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <div className="max-w-3xl">
          <StoryBlock title={t("problem")} body={project.problem} />
          <StoryBlock title={t("research")} body={project.research} />
          <StoryBlock title={t("constraints")} body={project.constraints} />
          <StoryBlock title={t("solution")} body={project.solution} />
          <StoryBlock
            title={t("designArchitecture")}
            body={project.engineeringDecision}
          />
          <StoryBlock
            title={t("development")}
            body={project.responsibilities}
          />
          <StoryBlock title={t("challenges")} body={project.challenges} />
          <StoryBlock
            title={t("lessonsLearned")}
            body={project.lessonsLearned}
          />
        </div>

        {project.sections?.map((section) => (
          <section key={section.id} className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
            <SectionRenderer section={section} />
          </section>
        ))}

        {project.techStack?.length ? (
          <section className="mb-8">
            <p className="section-label mb-2">{t("stack")}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((item) => (
                <span key={item.id} className="badge flex items-center gap-1.5">
                  <Activity className="w-3 h-3" aria-hidden />
                  {item.name}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        <ProjectGallery images={project.gallery} title={project.title} />

        {(previousProject || nextProject) && (
          <nav
            className="mt-10 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-3"
            aria-label="Project navigation"
          >
            {previousProject ? (
              <Link
                href={`/project/${previousProject.id}`}
                className="soft-glass p-4 hover:border-primary/40 transition-colors group"
              >
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1 inline-flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" aria-hidden />
                  {t("previousProject")}
                </p>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  {adjacentTitle(previousProject, locale)}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/project/${nextProject.id}`}
                className="soft-glass p-4 hover:border-primary/40 transition-colors group text-right sm:justify-self-end w-full"
              >
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-1 inline-flex items-center gap-1 justify-end w-full">
                  {t("nextProject")}
                  <ArrowRight className="w-3 h-3" aria-hidden />
                </p>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  {adjacentTitle(nextProject, locale)}
                </p>
              </Link>
            ) : null}
          </nav>
        )}
      </motion.main>
    </>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="soft-glass p-3 space-y-1">
      <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] uppercase tracking-wider font-semibold">
        <Icon className="w-3 h-3" aria-hidden />
        {label}
      </div>
      <p className="text-xs sm:text-sm font-medium leading-snug">{value}</p>
    </div>
  );
}
