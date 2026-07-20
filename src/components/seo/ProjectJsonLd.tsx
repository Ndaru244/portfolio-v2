"use client";

import { useEffect } from "react";
import { Project } from "@/types";
import { toSafeJsonLd } from "@/lib/sanitize-firestore";

interface ProjectJsonLdProps {
  project: Project;
}

export default function ProjectJsonLd({ project }: ProjectJsonLdProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.overview?.description,
      image: project.thumbnail,
      genre: `${project.industry} / ${project.discipline}`,
      author: {
        "@type": "Person",
        name: "Ndaru Langgeng Santosa",
      },
      publisher: {
        "@type": "Person",
        name: "Ndaru Langgeng Santosa",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://ndaru-portfolio.web.app/project/${project.id}`,
      },
    };

    const id = "json-ld-project";
    document.getElementById(id)?.remove();
    const el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    el.text = toSafeJsonLd(schema);
    document.head.appendChild(el);

    return () => {
      el.remove();
    };
  }, [project]);

  return null;
}
