"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Certificate } from "@/types";
import { useLanguage } from "@/components/layout/LanguageProvider";

interface Props {
  certificates: Certificate[];
}

export default function CertificatesSection({ certificates }: Props) {
  const { t } = useLanguage();
  if (!certificates.length) return null;

  return (
    <section id="certificates" className="mb-24">
      <p className="section-label mb-4">{t("certificates")}</p>
      <h2 className="text-3xl font-semibold tracking-tight mb-8">
        {t("credentials")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificates.map((cert, i) => (
          <motion.article
            key={cert.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="soft-glass p-5 flex gap-4 items-start"
          >
            <div className="p-2.5 rounded-xl bg-muted">
              <Award className="w-4 h-4 text-primary" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="font-semibold">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} · {cert.date}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-1"
                >
                  {t("verify")} <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
