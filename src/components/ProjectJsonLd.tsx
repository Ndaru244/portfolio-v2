import { Project } from "@/types/portfolio";

interface ProjectJsonLdProps {
  project: Project;
}

export default function ProjectJsonLd({ project }: ProjectJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.overview_desc,
    "image": project.thumbnail,
    "genre": project.category,
    "author": {
      "@type": "Person",
      "name": "Ndaru Langgeng Santosa"
    },
    "publisher": {
      "@type": "Person",
      "name": "Ndaru Langgeng Santosa"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ndaru-portfolio.web.app/project/${project.id}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
