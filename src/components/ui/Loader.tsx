"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

// Configuration
const LOADING_TEXTS = [
  "INITIALIZING SYSTEM...",
  "FETCHING PORTFOLIO DATA...",
  "PREPARING ASSETS...",
  "SYNCHRONIZING...",
] as const;

const TEXT_INTERVAL_MS = 1500;

// Animation variants (reusable, more performant)
const logoVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 }
};

const pulseVariants = {
  pulse: {
    opacity: [0.5, 1, 0.5],
    transition: { duration: 2, repeat: Infinity }
  }
};

const rotateVariants = {
  spin: {
    rotate: 360,
    transition: { duration: 2, repeat: Infinity }
  }
};

const progressVariants = {
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
      <div className="relative w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
        {/* Rotating border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-t-2 border-primary"
          variants={rotateVariants}
          animate="spin"
          aria-hidden="true"
        />

        {/* Logo text */}
        <motion.span
          className="text-primary font-black text-2xl tracking-tighter"
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
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={50}
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

  // Memoize current text to prevent unnecessary re-renders
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
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <LogoSpinner />
      <ProgressBar />

      {/* Text container with fixed height */}
      <div className="h-6 relative w-64">
        <AnimatePresence mode="wait">
          <LoadingText text={currentText} index={textIndex} />
        </AnimatePresence>
      </div>

      {/* Screen reader announcement */}
      <span className="sr-only">
        Loading portfolio data, please wait
      </span>
    </div>
  );
}