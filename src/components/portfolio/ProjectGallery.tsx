"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Button from "@/components/ui/Button";
import { useDialogFocus } from "@/hooks/useDialogFocus";
import { useLanguage } from "@/components/layout/LanguageProvider";

interface Props {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const dialogRef = useDialogFocus<HTMLDivElement>({
    open: activeIndex !== null,
    onClose: closeLightbox,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((i) =>
          i === null ? i : (i - 1 + images.length) % images.length,
        );
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  if (!images?.length) return null;

  const countLabel = (current: number) =>
    t("imageCount")
      .replace("{current}", String(current + 1))
      .replace("{total}", String(images.length));

  const lightbox =
    typeof document !== "undefined" &&
    activeIndex !== null &&
    createPortal(
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 z-[220] flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.2 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) closeLightbox();
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={countLabel(activeIndex)}
            className="relative flex w-full max-w-5xl flex-col gap-3"
          >
            <div className="flex items-center justify-between gap-3 text-white">
              <p className="text-sm font-medium">{countLabel(activeIndex)}</p>
              <Button
                type="button"
                variant="icon"
                className="text-white hover:bg-white/10 hover:text-white"
                onClick={closeLightbox}
                aria-label={t("closeImage")}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/40">
              <ImageWithFallback
                src={images[activeIndex]}
                alt={`${title} screenshot ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                fallbackText="Gallery"
              />
            </div>

            {images.length > 1 && (
              <div className="flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                  onClick={() =>
                    setActiveIndex(
                      (i) =>
                        i === null
                          ? 0
                          : (i - 1 + images.length) % images.length,
                    )
                  }
                  aria-label={t("previousImage")}
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                  {t("previousImage")}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                  onClick={() =>
                    setActiveIndex((i) =>
                      i === null ? 0 : (i + 1) % images.length,
                    )
                  }
                  aria-label={t("nextImage")}
                >
                  {t("nextImage")}
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>,
      document.body,
    );

  return (
    <section id="gallery" ref={ref} className="mb-4">
      <p className="section-label mb-1.5">{t("gallery")}</p>
      <h2 className="text-xl font-semibold mb-3">{t("visuals")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visible &&
          images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative aspect-video surface overflow-hidden rounded-xl text-left"
              aria-label={`${t("openImage")}: ${title} ${i + 1}`}
            >
              <ImageWithFallback
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjcyNzJhIi8+PC9zdmc+"
                fallbackText="Gallery"
              />
            </button>
          ))}
      </div>
      {lightbox}
    </section>
  );
}
