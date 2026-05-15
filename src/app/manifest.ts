import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ndaru Langgeng Santosa Portfolio',
    short_name: 'Ndaru Porto',
    description: 'Portfolio of Ndaru Langgeng Santosa, UI/UX Designer & Web Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
