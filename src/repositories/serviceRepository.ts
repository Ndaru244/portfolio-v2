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
import { Service } from "@/types";

export async function getServices(): Promise<Service[]> {
  try {
    const q = query(collection(db, "services"), orderBy("order", "asc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Service);
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

export async function saveService(id: string, data: Omit<Service, "id">): Promise<void> {
  await setDoc(doc(db, "services", id), data);
}

export async function addService(data: Omit<Service, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "services"), data);
  return ref.id;
}

export async function deleteService(id: string): Promise<void> {
  await deleteDoc(doc(db, "services", id));
}
