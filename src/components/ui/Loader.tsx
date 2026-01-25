"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const loadingTexts = [
  "INITIALIZING SYSTEM...",
  "FETCHING PORTFOLIO DATA...",
  "PREPARING ASSETS...",
  "SYNCHRONIZING...",
];

export default function Loader() {
  const [textIndex, setTextIndex] = useState(0);

  // Efek ganti teks setiap 800ms agar user tidak bosan menunggu
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground">
      {/* 1. Logo Animation (Pulse & Glow) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="relative w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
          {/* Rotating Border Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-t-2 border-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          <motion.span
            className="text-primary font-black text-2xl tracking-tighter"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ND
          </motion.span>
        </div>
      </motion.div>

      {/* 2. Custom Progress Bar */}
      <div className="w-64 h-1.5 bg-muted rounded-full overflow-hidden relative mb-4">
        <motion.div
          className="h-full bg-primary"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut", // Lebih natural daripada linear
            repeatDelay: 0.2,
          }}
        />
        {/* Shimmer overlay pada bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* 3. Cycling Text (Micro-interaction) */}
      <div className="h-6 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={textIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground text-center min-w-[200px]"
          >
            {loadingTexts[textIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
