"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  getProfile,
  getProjects,
  getSkills,
  getExperience,
} from "@/services/firestore";
import { Profile, Project, Skill, Experience } from "@/types/portfolio";

const CACHE_KEY = "portfolio_data_v1";
const EXPIRATION_TIME = 3600 * 1000; // 1 Jam

interface PortfolioData {
  profile: Profile | null;
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
}

interface CacheStructure {
  data: PortfolioData;
  timestamp: number;
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRefetching, setIsRefetching] = useState(false);

  // Ref untuk melacak apakah data sudah ada (menghindari dependency 'data' di useEffect)
  const hasDataRef = useRef(false);

  // 1. Stable Fetch Function (Tidak bergantung pada state 'data')
  // Kita tambahkan parameter 'isBackground' untuk mengontrol loading state UI
  const fetchData = useCallback(async (isBackground = false) => {
    try {
      if (isBackground) setIsRefetching(true);

      const [profile, projects, skills, experience] = await Promise.all([
        getProfile(),
        getProjects(),
        getSkills(),
        getExperience(),
      ]);

      const newData = { profile, projects, skills, experience };

      // Simpan ke Local Storage
      const cachePayload: CacheStructure = {
        data: newData,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cachePayload));

      setData(newData);
      hasDataRef.current = true; // Update ref
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
      setIsRefetching(false);
    }
  }, []); // Dependency kosong agar fungsi ini STABIL (tidak dibuat ulang setiap render)

  // 2. Initial Load Effect (Hanya jalan 1x saat mount)
  useEffect(() => {
    const cached = localStorage.getItem(CACHE_KEY);

    if (cached) {
      const parsed: CacheStructure = JSON.parse(cached);
      const age = Date.now() - parsed.timestamp;

      if (age < EXPIRATION_TIME) {
        // HIT CACHE: Gunakan data lokal
        setData(parsed.data);
        hasDataRef.current = true;
        setLoading(false);
        console.log("⚡ Menggunakan Data Cache LocalStorage");
      } else {
        // STALE CACHE: Data ada tapi lama -> Fetch baru
        console.log("⌛ Cache Kadaluarsa, mengambil data baru...");
        fetchData(false);
      }
    } else {
      // NO CACHE: Ambil baru
      fetchData(false);
    }
  }, [fetchData]);

  // 3. Interval Check (Jalan setiap 1 menit)
  useEffect(() => {
    const interval = setInterval(() => {
      const currentCache = localStorage.getItem(CACHE_KEY);
      if (currentCache) {
        const parsed: CacheStructure = JSON.parse(currentCache);
        if (Date.now() - parsed.timestamp > EXPIRATION_TIME) {
          console.log("♻️ Auto-refresh: Data sudah > 1 jam");
          // Panggil dengan isBackground = true agar user tidak melihat full loader
          fetchData(true);
        }
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [fetchData]);

  return { data, loading, isRefetching };
}
