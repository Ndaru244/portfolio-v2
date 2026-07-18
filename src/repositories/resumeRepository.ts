import { db } from "@/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Resume } from "@/types";

const DOC_ID = "main";

export async function getResume(): Promise<Resume | null> {
  try {
    const snap = await getDoc(doc(db, "resume", DOC_ID));
    if (snap.exists()) return snap.data() as Resume;
    return null;
  } catch (error) {
    console.error("Error fetching resume:", error);
    return null;
  }
}

export async function saveResume(data: Resume): Promise<void> {
  await setDoc(doc(db, "resume", DOC_ID), data);
}
