import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

// 1. Load Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-modern",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-game",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ndaru-portfolio.web.app'),
  title: {
    default: "Ndaru Langgeng Santosa | UI/UX Designer & Web Developer",
    template: "%s | Ndaru Langgeng Santosa Portfolio"
  },
  description: "Ndaru Langgeng Santosa's portfolio. A UI/UX Designer and Web Developer based in Tangerang, Indonesia specializing in Next.js, modern design systems, and high-performance web applications.",
  keywords: [
    "Ndaru Langgeng Santosa",
    "Ndaru Langgeng Santosa Portfolio",
    "Ndaru Langgeng Santosa Portofolio",
    "Ndaru Langgeng",
    "UI/UX Designer Tangerang",
    "Web Developer Indonesia",
    "Next.js Developer Portfolio",
    "Frontend Architect"
  ],
  authors: [{ name: "Ndaru Langgeng Santosa", url: "https://ndaru-portfolio.web.app" }],
  creator: "Ndaru Langgeng Santosa",
  publisher: "Ndaru Langgeng Santosa",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ndaru Langgeng Santosa | Portfolio",
    description: "Creative Technologist & UI/UX Designer based in Indonesia. Explore the portfolio of Ndaru Langgeng Santosa.",
    url: "https://ndaru-portfolio.web.app",
    siteName: "Ndaru Langgeng Santosa Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/assets/img/preview/preview.webp",
        width: 1200,
        height: 630,
        alt: "Ndaru Langgeng Santosa Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ndaru Langgeng Santosa | Portfolio",
    description: "Creative Technologist & UI/UX Designer based in Indonesia.",
    images: ["/assets/img/preview/preview.webp"],
    creator: "@ndaruls",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// 3. Viewport Configuration (Standard Next.js 15+)
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning // Mencegah mismatch error saat menggunakan Theme Provider
    >
      <body className="antialiased transition-colors duration-500 ease-in-out">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}