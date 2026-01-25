// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/lib/seed-data';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ndaru-portfolio.web.app';

  const projectUrls = PROJECTS_DATA.map((item) => ({
    url: `${baseUrl}/project/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}