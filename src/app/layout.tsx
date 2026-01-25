import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

// 2. SEO & Information Architecture Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://ndaru-portfolio.web.app'), // Pastikan sesuai domain Firebase Anda
  title: {
    default: "Ndaru | UI/UX Designer & Web Developer",
    template: "%s | Ndaru Portfolio"
  },
  description: "Portfolio of Ndaru, a UI/UX Designer and Web Developer based in Tangerang, Indonesia. Specializing in Next.js and modern design systems.",
  keywords: ["UI/UX Designer", "Web Developer", "Next.js Portfolio", "Tangerang Developer"],
  openGraph: {
    title: "Ndaru Portfolio",
    description: "Creative Developer & Designer Portfolio",
    url: "https://ndaru-portfolio.web.app",
    siteName: "Ndaru Portfolio",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="antialiased pt-24 transition-colors duration-500 ease-in-out">
        {children}
      </body>
    </html>
  );
}