"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  getProfile,
  getProjects,
  getSkills,
  getExperiences,
  getCertificates,
  getNavigation,
  getSettings,
} from "@/repositories";
import {
  Profile,
  Project,
  Skill,
  Experience,
  Certificate,
  Navigation,
  Settings,
} from "@/types";
import {
  CACHE_KEY,
  subscribePortfolioCacheInvalidation,
} from "@/lib/portfolio-cache";

const EXPIRATION_TIME = 3600 * 1000;

export interface PortfolioData {
  profile: Profile | null;
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  certificates: Certificate[];
  navigation: Navigation | null;
  settings: Settings | null;
}

interface CacheStructure {
  data: PortfolioData;
  timestamp: number;
}

function readCache(): CacheStructure | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CacheStructure;
  } catch {
    return null;
  }
}

function writeCache(data: PortfolioData) {
  try {
    const payload: CacheStructure = { data, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    // ignore
  }
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRefetching, setIsRefetching] = useState(false);
  const hasDataRef = useRef(false);
  const fetchingRef = useRef(false);

  const fetchData = useCallback(async (isBackground = false) => {
    if (fetchingRef.current && isBackground) return;
    fetchingRef.current = true;

    try {
      if (isBackground) setIsRefetching(true);

      const [profile, projects, skills, experience, certificates, navigation, settings] =
        await Promise.all([
          getProfile(),
          getProjects(),
          getSkills(),
          getExperiences(),
          getCertificates(),
          getNavigation(),
          getSettings(),
        ]);

      const newData: PortfolioData = {
        profile,
        projects,
        skills,
        experience,
        certificates,
        navigation,
        settings,
      };

      writeCache(newData);
      setData(newData);
      hasDataRef.current = true;
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
      setIsRefetching(false);
      fetchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const cached = readCache();
      if (cached && Date.now() - cached.timestamp < EXPIRATION_TIME) {
        setData(cached.data);
        hasDataRef.current = true;
        setLoading(false);
        void fetchData(true);
        return;
      }
      void fetchData(false);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [fetchData]);

  useEffect(() => {
    return subscribePortfolioCacheInvalidation(() => {
      fetchData(true);
    });
  }, [fetchData]);

  useEffect(() => {
    const onFocus = () => {
      if (document.visibilityState === "visible") {
        fetchData(true);
      }
    };
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onFocus);
    return () => {
      window.removeEventListener("focus", onFocus);
      document.removeEventListener("visibilitychange", onFocus);
    };
  }, [fetchData]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        fetchData(true);
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [fetchData]);

  return { data, loading, isRefetching };
}
