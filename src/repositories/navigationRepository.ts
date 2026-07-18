import { db } from "@/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Navigation } from "@/types";

const DOC_ID = "main";

export async function getNavigation(): Promise<Navigation | null> {
  try {
    const snap = await getDoc(doc(db, "navigation", DOC_ID));
    if (snap.exists()) return snap.data() as Navigation;
    return null;
  } catch (error) {
    console.error("Error fetching navigation:", error);
    return null;
  }
}

export async function saveNavigation(data: Navigation): Promise<void> {
  await setDoc(doc(db, "navigation", DOC_ID), data);
}
