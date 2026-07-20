"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Certificate } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";

interface Props {
  certificates: Certificate[];
}

export default function CertificatesSection({ certificates }: Props) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  if (!certificates.length) return null;

  return (
    <section id="certificates" className="section-spacing">
      <p className="section-label mb-3">{t("certificates")}</p>
      <h2 className="section-title mb-8">{t("credentials")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {certificates.map((cert, i) => (
          <motion.article
            key={cert.id}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: reduceMotion ? 0 : i * 0.04,
              duration: reduceMotion ? 0.01 : 0.3,
            }}
            className="surface p-5 flex gap-4 items-start"
          >
            <div className="p-2.5 rounded-xl bg-muted shrink-0">
              <Award className="w-4 h-4 text-muted-foreground" aria-hidden />
            </div>
            <div className="space-y-1.5 flex-1 min-w-0">
              <h3 className="font-semibold leading-snug">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} · {cert.date}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline underline-offset-2 mt-1"
                >
                  {t("verify")}
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
