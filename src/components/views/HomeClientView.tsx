"use client";

import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileSection from "@/components/ProfileSection";
import BentoGrid from "@/components/BentoGrid";
import Loader from "@/components/ui/Loader";
import JsonLd from "@/components/JsonLd";
import { usePortfolioData } from "@/hooks/usePortfolioData";

export default function HomeClientView() {
  const { data, loading, isRefetching } = usePortfolioData();

  return (
    <div className="min-h-screen font-sans text-foreground selection:bg-primary selection:text-white relative overflow-x-hidden">
      {data?.profile && <JsonLd profile={data.profile} />}
      <AnimatePresence mode="wait">
        {(loading || !data) && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-background"
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isRefetching && data && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-0.5 z-[100] bg-primary origin-left shadow-[0_0_10px_rgba(37,99,235,0.8)]"
          />
        )}
      </AnimatePresence>

      <Header profile={data?.profile ?? null} />

      {data && (
        <motion.main
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          className="max-w-7xl mx-auto px-6 pt-32 pb-12 relative z-10"
        >
          <ProfileSection profile={data.profile} skills={data.skills} />
          <BentoGrid projects={data.projects} experience={data.experience} />
        </motion.main>
      )}

      {data && <Footer profile={data?.profile ?? null} />}
    </div>
  );
}