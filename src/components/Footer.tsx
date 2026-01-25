"use client";
import { ArrowUp, Github, Linkedin, Mail, Dribbble, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Profile, Socials } from "@/types/portfolio";

interface Props {
  profile: any;
}

const SOCIAL_ICONS: Partial<Record<keyof Socials, any>> = {
  linkedin: Linkedin,
  github: Github,
  dribbble: Dribbble,
};

const FOOTER_SOCIALS: (keyof Socials)[] = ["linkedin", "github", "dribbble"];

const formatPhoneNumber = (link: string) => {
  const cleanNumber = link.replace(/\D/g, ""); 

  const match = cleanNumber.match(/^(62)(\d{3})(\d{4})(\d+)$/);

  if (match) {
    return `(+${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
  }

  return cleanNumber;
};

export default function Footer({ profile }: Props) {
  const actualProfile = 
    profile?.data?.profile || 
    profile?.profile || 
    profile || 
    {};

  const socials = actualProfile?.socials || {};

  const safeName = actualProfile?.name || "Ndaru L Santosa";
  const safeEmailLink = socials.email;
  const safePhoneLink = socials.phone;

  const displayEmail = safeEmailLink.replace("mailto:", "");
  const displayPhone = formatPhoneNumber(safePhoneLink);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkVariants = {
    hover: { x: 5, color: "var(--primary)" },
    initial: { x: 0, color: "var(--muted-foreground)" },
  };

  return (
    <footer className="mt-24 border-t border-border bg-card/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-lg font-bold tracking-widest text-foreground">
              NDARU.PORTO
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Terbuka untuk kesempatan kolaborasi{" "}
              <span className="font-semibold text-foreground">Full-time</span>{" "}
              atau{" "}
              <span className="font-semibold text-foreground">Freelance</span>.
              Mari ciptakan produk digital yang berdampak bersama.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase text-foreground mb-4 tracking-wider">
              Connect
            </h3>
            <ul className="space-y-3 text-sm">
              {FOOTER_SOCIALS.map((key) => {
                const url = socials[key];
                const Icon = SOCIAL_ICONS[key];

                if (!url || !Icon) return null;

                const label = key.charAt(0).toUpperCase() + key.slice(1);

                return (
                  <li key={key}>
                    <motion.a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 transition-colors"
                      initial="initial"
                      whileHover="hover"
                      variants={linkVariants}
                    >
                      <Icon className="w-4 h-4" /> {label}
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase text-foreground mb-4 tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <motion.a
                  href={safeEmailLink}
                  target="_blank"
                  className="flex items-center gap-2 break-all"
                  initial="initial"
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <Mail className="w-4 h-4 shrink-0" />{" "}
                  {displayEmail}
                </motion.a>
              </li>
              <li>
                <motion.a
                  href={safePhoneLink}
                  target="_blank"
                  className="flex items-center gap-2"
                  initial="initial"
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <Phone className="w-4 h-4 shrink-0" />{" "}
                  {displayPhone}
                </motion.a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {safeName}. Engineered with
            <span className="text-foreground font-semibold"> Next.js 16</span> &
            <span className="text-foreground font-semibold"> Tailwind v4</span>.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold text-muted-foreground bg-muted hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors shadow-sm"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            BACK TO TOP
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}