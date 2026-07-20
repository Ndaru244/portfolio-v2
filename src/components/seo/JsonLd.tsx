"use client";

import { useEffect } from "react";
import { Profile } from "@/types";
import { toSafeJsonLd } from "@/lib/sanitize-firestore";

interface JsonLdProps {
  profile: Profile;
}

export default function JsonLd({ profile }: JsonLdProps) {
  useEffect(() => {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.name,
      url: "https://ndaru-portfolio.web.app",
      image: profile.avatar_url,
      jobTitle: profile.role,
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.location,
        addressCountry: "ID",
      },
      description: profile.bio_short,
      sameAs: [
        profile.socials?.linkedin || "",
        profile.socials?.github || "",
        profile.socials?.dribbble || "",
      ].filter(Boolean),
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${profile.name} Portfolio`,
      url: "https://ndaru-portfolio.web.app",
      description: profile.bio_long,
      author: { "@type": "Person", name: profile.name },
    };

    const nodes = [
      ["json-ld-person", personSchema],
      ["json-ld-website", websiteSchema],
    ] as const;

    const created: HTMLScriptElement[] = [];
    for (const [id, schema] of nodes) {
      document.getElementById(id)?.remove();
      const el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      el.text = toSafeJsonLd(schema);
      document.head.appendChild(el);
      created.push(el);
    }

    return () => {
      created.forEach((el) => el.remove());
    };
  }, [profile]);

  return null;
}
