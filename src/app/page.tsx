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
    type: "website",
    locale: "id_ID",
    siteName: "Ndaru Langgeng Santosa Portfolio",
  },
};

export default function HomePage() {
  return <HomeClientView />;
}
