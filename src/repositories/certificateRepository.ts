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
import { Certificate } from "@/types";

export async function getCertificates(): Promise<Certificate[]> {
  try {
    const q = query(collection(db, "certificates"), orderBy("order", "asc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Certificate);
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return [];
  }
}

export async function saveCertificate(
  id: string,
  data: Omit<Certificate, "id">,
): Promise<void> {
  await setDoc(doc(db, "certificates", id), data);
}

export async function addCertificate(data: Omit<Certificate, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "certificates"), data);
  return ref.id;
}

export async function deleteCertificate(id: string): Promise<void> {
  await deleteDoc(doc(db, "certificates", id));
}
