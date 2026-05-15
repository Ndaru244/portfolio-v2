import type { Metadata } from "next";
import HomeClientView from "@/components/views/HomeClientView";

export const metadata: Metadata = {
  title: "Ndaru Langgeng Santosa | UI/UX Designer & Web Developer",
  description:
    "Explore the portfolio of Ndaru Langgeng Santosa, a professional UI/UX Designer and Web Developer based in Tangerang. Expertise in Next.js, React, and creating exceptional digital experiences.",
  keywords: [
    "Ndaru Langgeng Santosa",
    "Ndaru Langgeng",
    "UI/UX Designer",
    "Frontend Developer",
    "Next.js Portfolio",
    "Web Design Portfolio",
    "Tangerang",
    "Indonesia",
  ],
  authors: [{ name: "Ndaru Langgeng Santosa" }],
  openGraph: {
    title: "Ndaru Langgeng Santosa - Portfolio",
    description: "High-performance web development and modern UI/UX design by Ndaru Langgeng Santosa.",
    url: "https://ndaru-portfolio.web.app",
    siteName: "Ndaru Langgeng Santosa Portfolio",
    images: [
      {
        url: "/assets/img/My-Avatar.webp", // Memastikan gambar ini yang muncul, bukan thumbnail proyek
        width: 540,
        height: 540,
        alt: "Ndaru Langgeng Santosa Portfolio Preview",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ndaru Langgeng Santosa | Portfolio",
    description: "Creative Technologist & UI/UX Designer based in Indonesia.",
    images: ["/assets/img/preview/preview.webp"],
  },
};

export default function HomePage() {
  return <HomeClientView />;
}
