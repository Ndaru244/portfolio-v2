import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/providers";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ndaru-portfolio.web.app"),
  title: {
    default: "Ndaru Langgeng Santosa | UI/UX Designer & Web Developer",
    template: "%s | Ndaru Langgeng Santosa Portfolio",
  },
  description:
    "Ndaru Langgeng Santosa's portfolio. A UI/UX Designer and Web Developer based in Tangerang, Indonesia specializing in Next.js, modern design systems, and high-performance web applications.",
  keywords: [
    "Ndaru Langgeng Santosa",
    "UI/UX Designer Tangerang",
    "Web Developer Indonesia",
    "Next.js Developer Portfolio",
  ],
  authors: [{ name: "Ndaru Langgeng Santosa", url: "https://ndaru-portfolio.web.app" }],
  creator: "Ndaru Langgeng Santosa",
  publisher: "Ndaru Langgeng Santosa",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ndaru Langgeng Santosa | Portfolio",
    description:
      "Creative Technologist & UI/UX Designer based in Indonesia. Explore the portfolio of Ndaru Langgeng Santosa.",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
