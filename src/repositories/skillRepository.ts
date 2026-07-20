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
import { Skill } from "@/types";
import { stripSensitiveFields } from "@/lib/sanitize-firestore";

export async function getSkills(): Promise<Skill[]> {
  try {
    const q = query(collection(db, "skills"), orderBy("order", "asc"));
    const snap = await getDocs(q);
    return snap.docs.map(
      (d) =>
        ({
          id: d.id,
          ...stripSensitiveFields(d.data()),
        }) as Skill,
    );
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
}

export async function saveSkill(id: string, data: Omit<Skill, "id">): Promise<void> {
  await setDoc(doc(db, "skills", id), data);
}

export async function addSkill(data: Omit<Skill, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "skills"), data);
  return ref.id;
}

export async function deleteSkill(id: string): Promise<void> {
  await deleteDoc(doc(db, "skills", id));
}
