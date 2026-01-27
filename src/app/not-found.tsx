"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileQuestion, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden px-4 text-center"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.02] bg-[center_top_-1px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <motion.div
                variants={itemVariants}
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative mb-8"
            >
                <div className="flex h-28 w-28 items-center justify-center rounded-[2.5rem] bg-card/50 backdrop-blur-xl border border-border shadow-2xl relative z-10">
                    <FileQuestion className="h-12 w-12 text-primary animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full -z-10" />
            </motion.div>

            <motion.div variants={itemVariants} className="z-10">
                <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-foreground/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
                    404
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                    Lost in Space?
                </h2>
                <p className="mb-10 max-w-sm text-muted-foreground leading-relaxed mx-auto">
                    Halaman yang Anda tuju tidak ditemukan. Mari kembali ke jalur yang benar untuk melihat karya-karya saya.
                </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 z-10">
                <Link
                    href="/"
                    className="group relative flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] active:scale-95"
                >
                    <Home className="h-4 w-4" />
                    Kembali ke Beranda
                    <motion.div
                        className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                    />
                </Link>

                <button
                    onClick={() => window.history.back()}
                    className="flex items-center gap-2 rounded-full bg-muted/50 backdrop-blur-md px-8 py-4 text-sm font-bold text-foreground border border-border transition-all hover:bg-muted hover:border-primary/50"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Kembali Sebelumnya
                </button>
            </motion.div>
        </motion.div>
    );
}