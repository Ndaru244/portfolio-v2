import type { Metadata } from "next";
import HomeClientView from "@/components/views/HomeClientView";

export const metadata: Metadata = {
  title: "Ndaru Langgeng | UI/UX Designer & Web Dev ",
  description:
    "Portfolio of Ndaru Langgeng Santosa. Specializing in high-performance web development, modern UI/UX design, and scalable frontend architecture.",
  keywords: [
    "UI/UX Designer",
    "Frontend Developer",
    "Next.js",
    "React",
    "PHP",
    "Portfolio",
    "Tangerang",
  ],
  authors: [{ name: "Ndaru Langgeng" }],
  openGraph: {
    title: "Ndaru Langgeng - Portfolio",
    description: "Creative Technologist & UI/UX Designer based in Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "Ndaru Langgeng Portfolio",
  },
};

export default function HomePage() {
  return <HomeClientView />;
}
