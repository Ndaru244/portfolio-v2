import { db } from "@/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Settings } from "@/types";
import { stripSensitiveFields } from "@/lib/sanitize-firestore";

const DOC_ID = "main";

export async function getSettings(): Promise<Settings | null> {
  try {
    const snap = await getDoc(doc(db, "settings", DOC_ID));
    if (snap.exists()) {
      return stripSensitiveFields(snap.data()) as Settings;
    }
    return null;
  } catch (error) {
    console.error("Error fetching settings:", error);
    return null;
  }
}

export async function saveSettings(data: Settings): Promise<void> {
  await setDoc(doc(db, "settings", DOC_ID), data);
}
