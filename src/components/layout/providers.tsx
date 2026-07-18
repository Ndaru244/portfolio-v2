"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider } from "./LanguageProvider";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem>
      <MotionConfig reducedMotion="user">
        <LanguageProvider>{children}</LanguageProvider>
      </MotionConfig>
    </NextThemesProvider>
  );
}
