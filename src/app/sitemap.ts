import { MetadataRoute } from "next";
import { getProjects } from "@/repositories";
import { PROJECTS_DATA, SEO_DATA } from "@/lib/seed-data";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SEO_DATA.canonicalBase;
  let projects = PROJECTS_DATA.map((p) => p.data);

  try {
    const remote = await getProjects();
    if (remote.length) projects = remote;
  } catch {
    // fallback to seed
  }

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/project/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
