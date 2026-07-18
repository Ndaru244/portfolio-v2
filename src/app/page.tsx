import type { Metadata } from "next";
import HomeClientView from "@/components/portfolio/views/HomeClientView";
import { SEO_DATA } from "@/lib/seed-data";

export const metadata: Metadata = {
  metadataBase: new URL(SEO_DATA.canonicalBase),
  title: {
    default: SEO_DATA.title,
    template: `%s | ${SEO_DATA.siteName}`,
  },
  description: SEO_DATA.description,
  keywords: SEO_DATA.keywords,
  authors: [{ name: "Ndaru Langgeng Santosa", url: SEO_DATA.canonicalBase }],
  creator: "Ndaru Langgeng Santosa",
  publisher: "Ndaru Langgeng Santosa",
  alternates: { canonical: "/" },
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
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    url: SEO_DATA.canonicalBase,
    siteName: SEO_DATA.siteName,
    images: [{ url: SEO_DATA.ogImage, width: 1200, height: 630, alt: SEO_DATA.siteName }],
    type: "website",
    locale: SEO_DATA.locale || "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    images: [SEO_DATA.ogImage],
    creator: SEO_DATA.twitterHandle,
  },
};

export default function HomePage() {
  return <HomeClientView />;
}
