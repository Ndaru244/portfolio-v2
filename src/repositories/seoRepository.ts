import { db } from "@/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { SeoConfig } from "@/types";
import { stripSensitiveFields } from "@/lib/sanitize-firestore";

const DOC_ID = "main";

export async function getSeoConfig(): Promise<SeoConfig | null> {
  try {
    const snap = await getDoc(doc(db, "seo", DOC_ID));
    if (snap.exists()) {
      return stripSensitiveFields(snap.data()) as SeoConfig;
    }
    return null;
  } catch (error) {
    console.error("Error fetching seo:", error);
    return null;
  }
}

export async function saveSeoConfig(data: SeoConfig): Promise<void> {
  await setDoc(doc(db, "seo", DOC_ID), data);
}
