import { getProjectById, getProfileData } from "@/services/firestore";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectClientView from "@/components/views/ProjectClientView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const revalidate = 3600;

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Ndaru Portfolio`,
    description: project.overview_desc,
    openGraph: {
      title: project.title,
      description: project.overview_desc,
      images: project.thumbnail ? [{ url: project.thumbnail }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;

  const [project, profiles] = await Promise.all([
    getProjectById(id),
    getProfileData()
  ]);

  if (!project) return notFound();

  const profile = profiles ? {
    ...profiles,
    socials: {
      ...profiles.socials,
      email: profiles.socials?.email,
    }
  } : null;

  return (
    <div className="min-h-screen font-sans text-foreground selection:bg-primary selection:text-white overflow-x-hidden relative">
      <Header profile={profile} />

      <ProjectClientView project={project} />

      <Footer profile={profile} />
    </div>
  );
}