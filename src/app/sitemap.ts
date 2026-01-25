import { MetadataRoute } from 'next';
import { PROJECTS_DATA } from '@/lib/seed-data'; // Menggunakan data lokal agar build selalu sukses

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ndaru-portfolio.web.app';

  // 1. Generate URL untuk setiap proyek secara otomatis
  const projectUrls = PROJECTS_DATA.map((item) => ({
    url: `${baseUrl}/project/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 2. Gabungkan dengan halaman utama
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