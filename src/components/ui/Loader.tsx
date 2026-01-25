"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

// Configuration
const LOADING_TEXTS = [
  "INITIALIZING SYSTEM...",
  "FETCHING PORTFOLIO DATA...",
  "PREPARING ASSETS...",
  "SYNCHRONIZING...",
] as const;

const TEXT_INTERVAL_MS = 1500;

// Animation variants
const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 }
};

const pulseVariants: Variants = {
  pulse: {
    opacity: [0.5, 1, 0.5],
    transition: { duration: 2, repeat: Infinity }
  }
};

const rotateVariants: Variants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const progressVariants: Variants = {
  animate: {
    x: ["0%", "200%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 0.2,
    }
  }
};

// Subcomponents
function LogoSpinner() {
  return (
    <motion.div
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      className="relative mb-8"
    >
      {/* Container Kotak */}
      <div className="relative w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]">

        {/* LOGIKA BARU: Bracket Spinner '[' */}
        {/* inset-[-4px] membuat border bracket sedikit di luar kotak utama (opsional, bisa diganti inset-0) */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            borderTop: "3px solid hsl(var(--primary))",    // Garis Atas
            borderBottom: "3px solid hsl(var(--primary))", // Garis Bawah
            borderLeft: "3px solid hsl(var(--primary))",   // Garis Kiri (Membentuk punggung '[')
            borderRight: "3px solid transparent",          // Transparan (Membentuk celah)
          }}
          variants={rotateVariants}
          animate="spin"
          aria-hidden="true"
        />

        {/* Logo text */}
        <motion.span
          className="text-primary font-black text-2xl tracking-tighter relative z-10"
          variants={pulseVariants}
          animate="pulse"
        >
          ND
        </motion.span>
      </div>
    </motion.div>
  );
}

function ProgressBar() {
  return (
    <div
      className="w-64 h-1.5 bg-muted rounded-full overflow-hidden relative mb-4"
      role="progressbar"
      aria-label="Loading progress"
    >
      {/* Animated bar */}
      <motion.div
        className="absolute h-full w-1/2 bg-primary"
        variants={progressVariants}
        animate="animate"
        style={{ x: "-100%" }}
      />

      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

interface LoadingTextProps {
  text: string;
  index: number;
}

function LoadingText({ text, index }: LoadingTextProps) {
  return (
    <motion.p
      key={index}
      variants={textVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground text-center absolute inset-0 flex items-center justify-center"
    >
      {text}
    </motion.p>
  );
}

// Main component
export default function Loader() {
  const [textIndex, setTextIndex] = useState(0);

  const currentText = useMemo(
    () => LOADING_TEXTS[textIndex],
    [textIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % LOADING_TEXTS.length);
    }, TEXT_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground"
    >
      <LogoSpinner />
      <ProgressBar />

      <div className="h-6 relative w-64">
        <AnimatePresence mode="wait">
          <LoadingText text={currentText} index={textIndex} />
        </AnimatePresence>
      </div>
    </div>
  );
}