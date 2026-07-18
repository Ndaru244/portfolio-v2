import {
  getProjectById,
  getProfile,
  getProjectIds,
  getProjects,
  getNavigation,
} from "@/repositories";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectClientView, {
  AdjacentProjectLink,
} from "@/components/portfolio/views/ProjectClientView";
import { SEO_DATA } from "@/lib/seed-data";
import { Project } from "@/types";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  try {
    const ids = await getProjectIds();
    if (ids.length) return ids.map((id) => ({ id }));
  } catch (error) {
    console.error("Error generating params:", error);
  }
  const { PROJECTS_DATA } = await import("@/lib/seed-data");
  return PROJECTS_DATA.map((p) => ({ id: p.id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

function toAdjacent(project?: Project | null): AdjacentProjectLink | null {
  if (!project) return null;
  return {
    id: project.id,
    title: project.title,
    titles: {
      en: project.translations?.en?.title || project.title,
      id: project.translations?.id?.title || project.title,
    },
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) return { title: "Project Not Found" };

  const description = project.overview?.description || SEO_DATA.description;
  const url = `${SEO_DATA.canonicalBase}/project/${project.id}`;

  return {
    title: `${project.title} — Case Study`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: project.title,
      description,
      url,
      images: project.thumbnail
        ? [{ url: project.thumbnail }]
        : [{ url: SEO_DATA.ogImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [project, profile, projects, navigation] = await Promise.all([
    getProjectById(id),
    getProfile(),
    getProjects(),
    getNavigation(),
  ]);

  if (!project) return notFound();

  const ordered = [...projects].sort((a, b) => a.order - b.order);
  const index = ordered.findIndex((item) => item.id === id);
  const previousProject = index > 0 ? toAdjacent(ordered[index - 1]) : null;
  const nextProject =
    index >= 0 && index < ordered.length - 1
      ? toAdjacent(ordered[index + 1])
      : null;

  return (
    <div className="min-h-screen font-sans text-foreground selection:bg-primary selection:text-white overflow-x-hidden relative">
      <Header profile={profile} navigation={navigation} />
      <ProjectClientView
        project={project}
        previousProject={previousProject}
        nextProject={nextProject}
      />
      <Footer profile={profile} />
    </div>
  );
}
