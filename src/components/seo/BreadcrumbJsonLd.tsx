"use client";

import { useEffect } from "react";
import { toSafeJsonLd } from "@/lib/sanitize-firestore";

interface Crumb {
  name: string;
  url: string;
}

export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };

    const id = "json-ld-breadcrumb";
    document.getElementById(id)?.remove();
    const el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    el.text = toSafeJsonLd(schema);
    document.head.appendChild(el);

    return () => {
      el.remove();
    };
  }, [items]);

  return null;
}
