import { db } from "@/config/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { Experience } from "@/types";

export async function getExperiences(): Promise<Experience[]> {
  try {
    const q = query(collection(db, "experiences"), orderBy("order", "asc"));
    const snap = await getDocs(q);
    const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Experience);
    return data.sort((a, b) => Number(a.order) - Number(b.order));
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
}

/** @deprecated use getExperiences */
export const getExperience = getExperiences;

export async function saveExperience(id: string, data: Omit<Experience, "id">): Promise<void> {
  await setDoc(doc(db, "experiences", id), data);
}

export async function addExperience(data: Omit<Experience, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "experiences"), data);
  return ref.id;
}

export async function deleteExperience(id: string): Promise<void> {
  await deleteDoc(doc(db, "experiences", id));
}
