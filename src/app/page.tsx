import type { Metadata } from "next";
import HomeClientView from "@/components/views/HomeClientView";

export const metadata: Metadata = {
  metadataBase: new URL("https://ndaru-portfolio.web.app"),

  title: {
    default: "Ndaru Langgeng Santosa | UI/UX Designer & Web Developer",
    template: "%s | Ndaru Langgeng Santosa",
  },

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
    "UI UX Indonesia",
    "Web Developer Tangerang"
  ],

  authors: [{ name: "Ndaru Langgeng Santosa", url: "https://ndaru-portfolio.web.app" }],
  creator: "Ndaru Langgeng Santosa",
  publisher: "Ndaru Langgeng Santosa",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Ndaru Langgeng Santosa - Portfolio",
    description: "Explore the portfolio of Ndaru Langgeng Santosa, a professional UI/UX Designer and Web Developer based in Tangerang. Expertise in Next.js, React, and creating exceptional digital experiences.",
    url: "https://ndaru-portfolio.web.app",
    siteName: "Ndaru Langgeng Santosa Portfolio",
    images: [
      {
        url: "/assets/img/My-Avatar.webp",
        width: 540,
        height: 540,
        alt: "Ndaru Langgeng Santosa Portfolio Preview",
      },
    ],
    type: "website",
    locale: "id_ID",
  },

  twitter: {
    card: "summary",
    title: "Ndaru Langgeng Santosa | UI/UX Designer & Web Developer",
    description: "Explore the portfolio of Ndaru Langgeng Santosa, a professional UI/UX Designer and Web Developer based in Tangerang. Expertise in Next.js, React, and creating exceptional digital experiences.",
    images: ["/assets/img/My-Avatar.webp"],
  },

  // 6. Icons: Memastikan Favicon di tab browser dan shortcut di HP muncul dengan benar
  // icons: {
  //   icon: "/favicon.ico", 
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
};

export default function HomePage() {
  return <HomeClientView />;
}