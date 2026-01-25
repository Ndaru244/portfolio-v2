"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Dribbble } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Socials } from "@/types/portfolio";

interface Props {
  profile: any;
}

const SOCIAL_CONFIG: Partial<Record<keyof Socials, { icon: any; color: string; label: string }>> = {
  github: { icon: Github, color: "hover:text-foreground", label: "Github" },
  dribbble: { icon: Dribbble, color: "hover:text-pink-500", label: "Dribbble" },
  linkedin: { icon: Linkedin, color: "hover:text-blue-600", label: "LinkedIn" },
};

const HEADER_ITEMS: (keyof Socials)[] = ["github", "dribbble", "linkedin"];

export default function Header({ profile }: Props) {
  const nestedProfile = profile?.data?.profile;
  
  const directProfile = profile?.profile;
  
  const flatProfile = profile;

  const actualProfile = nestedProfile || directProfile || flatProfile;
  const socials = actualProfile?.socials;

  const contactEmail = socials?.email || "mailto:ndarulanggeng110@gmail.com";

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 glass border-b border-border/40 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-8 h-8 bg-foreground text-background flex items-center justify-center font-bold text-xs rounded-lg shadow-sm"
            whileHover={{ rotate: 10, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ND
          </motion.div>
          <Link
            href="/"
            className="text-sm font-bold tracking-widest hover:text-primary transition-colors duration-300"
          >
            NDARU.PORTO
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <nav className="flex items-center gap-1 border-r border-border pr-3 mr-1">
            {socials && HEADER_ITEMS.map((key) => {
              const url = socials[key];
              const config = SOCIAL_CONFIG[key];

              if (!url || !config) return null;

              const Icon = config.icon;

              return (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 text-muted-foreground rounded-full hover:bg-muted transition-colors ${config.color}`}
                  aria-label={config.label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </nav>

          <ThemeToggle />

          <motion.a
            href={contactEmail}
            className="hidden sm:flex items-center gap-2 px-5 py-2 bg-foreground text-background text-xs font-bold rounded-full hover:opacity-90 ml-2 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-3 h-3" />
            <span>CONTACT</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}