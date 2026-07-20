import { Profile } from "@/types";
import { toSafeJsonLd } from "@/lib/sanitize-firestore";

interface JsonLdProps {
  profile: Profile;
}

export default function JsonLd({ profile }: JsonLdProps) {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toSafeJsonLd(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toSafeJsonLd(websiteSchema) }}
      />
    </>
  );
}
