"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff } from "lucide-react";

interface Props extends ImageProps {
  fallbackText?: string;
}

export default function ImageWithFallback({ src, alt, fallbackText, ...props }: Props) {
  const [error, setError] = useState(false);
  const normalizedSrc = typeof src === "string" && src.trim() !== "" ? src : null;

  if (!normalizedSrc || error) {
    return (
      /* Gunakan w-full h-full agar box fallback sama besarnya dengan box bento */
      <div className="w-full h-full min-h-[150px] flex flex-col items-center justify-center bg-muted/30 text-muted-foreground border border-dashed border-border rounded-2xl">
        <ImageOff className="w-6 h-6 opacity-40 mb-2" />
        <span className="text-[10px] font-bold opacity-50 px-2 text-center">{fallbackText || "N/A"}</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={normalizedSrc}
      alt={alt}
      onError={() => setError(true)}
    />
  );
}