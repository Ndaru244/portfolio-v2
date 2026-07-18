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
import {
  PROFILE_DATA,
  PROJECTS_DATA,
  SKILLS_DATA,
  EXPERIENCE_DATA,
  CERTIFICATES_DATA,
  NAVIGATION_DATA,
  SETTINGS_DATA,
} from "@/lib/seed-data";

const EXPIRATION_TIME = 3600 * 1000;
const FETCH_TIMEOUT_MS = 8000;
const FOCUS_REFETCH_DEBOUNCE_MS = 1500;
const STALE_REFETCH_INTERVAL_MS = 5 * 60 * 1000;

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

function getSeedPortfolioData(): PortfolioData {
  return {
    profile: PROFILE_DATA.data as Profile,
    projects: PROJECTS_DATA.map((project) => project.data),
    skills: SKILLS_DATA.map((skill, index) => ({
      ...skill,
      id: `skill-${index}`,
    })),
    experience: EXPERIENCE_DATA.map((item, index) => ({
      ...item,
      id: `exp-${index}`,
    })),
    certificates: CERTIFICATES_DATA.map((item, index) => ({
      ...item,
      id: `cert-${index}`,
    })),
    navigation: NAVIGATION_DATA,
    settings: SETTINGS_DATA,
  };
}

function readCache(): CacheStructure | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CacheStructure;
  } catch {
    return null;
  }
}

function writeCache(data: PortfolioData) {
  if (typeof window === "undefined") return;
  try {
    const payload: CacheStructure = { data, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    // ignore
  }
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => {
      reject(new Error(`Portfolio fetch timed out after ${ms}ms`));
    }, ms);

    promise.then(
      (value) => {
        window.clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      },
    );
  });
}

function getInitialData(): PortfolioData {
  const cached = readCache();
  if (cached && Date.now() - cached.timestamp < EXPIRATION_TIME) {
    return cached.data;
  }
  return getSeedPortfolioData();
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(getInitialData);
  const [loading, setLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const fetchingRef = useRef(false);
  const requestIdRef = useRef(0);
  const lastFetchAtRef = useRef(0);

  const fetchData = useCallback(async (isBackground = false) => {
    if (fetchingRef.current && isBackground) return;

    const requestId = ++requestIdRef.current;
    fetchingRef.current = true;

    try {
      if (isBackground) setIsRefetching(true);
      else setLoading(true);

      const [
        profile,
        projects,
        skills,
        experience,
        certificates,
        navigation,
        settings,
      ] = await withTimeout(
        Promise.all([
          getProfile(),
          getProjects(),
          getSkills(),
          getExperiences(),
          getCertificates(),
          getNavigation(),
          getSettings(),
        ]),
        FETCH_TIMEOUT_MS,
      );

      if (requestId !== requestIdRef.current) return;

      const seed = getSeedPortfolioData();
      const newData: PortfolioData = {
        profile: profile ?? seed.profile,
        projects: projects.length ? projects : seed.projects,
        skills: skills.length ? skills : seed.skills,
        experience: experience.length ? experience : seed.experience,
        certificates: certificates.length ? certificates : seed.certificates,
        navigation: navigation ?? seed.navigation,
        settings: settings ?? seed.settings,
      };

      writeCache(newData);
      setData(newData);
      lastFetchAtRef.current = Date.now();
    } catch (error) {
      console.error("Gagal mengambil data:", error);
      // Keep current seed/cache content so the page never stays blank.
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false);
        setIsRefetching(false);
        fetchingRef.current = false;
      }
    }
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void fetchData(true);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [fetchData]);

  useEffect(() => {
    return subscribePortfolioCacheInvalidation(() => {
      void fetchData(true);
    });
  }, [fetchData]);

  useEffect(() => {
    let debounceTimer = 0;

    const scheduleRefetch = () => {
      if (document.visibilityState !== "visible") return;
      window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(() => {
        const staleFor = Date.now() - lastFetchAtRef.current;
        if (staleFor < FOCUS_REFETCH_DEBOUNCE_MS) return;
        void fetchData(true);
      }, FOCUS_REFETCH_DEBOUNCE_MS);
    };

    window.addEventListener("focus", scheduleRefetch);
    document.addEventListener("visibilitychange", scheduleRefetch);
    return () => {
      window.clearTimeout(debounceTimer);
      window.removeEventListener("focus", scheduleRefetch);
      document.removeEventListener("visibilitychange", scheduleRefetch);
    };
  }, [fetchData]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      if (Date.now() - lastFetchAtRef.current < STALE_REFETCH_INTERVAL_MS) return;
      void fetchData(true);
    }, STALE_REFETCH_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [fetchData]);

  return { data, loading, isRefetching };
}
