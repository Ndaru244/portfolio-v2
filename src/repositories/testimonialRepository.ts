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
import { Testimonial } from "@/types";
import { stripSensitiveFields } from "@/lib/sanitize-firestore";

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const q = query(collection(db, "testimonials"), orderBy("order", "asc"));
    const snap = await getDocs(q);
    return snap.docs.map(
      (d) =>
        ({
          id: d.id,
          ...stripSensitiveFields(d.data()),
        }) as Testimonial,
    );
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

export async function saveTestimonial(
  id: string,
  data: Omit<Testimonial, "id">,
): Promise<void> {
  await setDoc(doc(db, "testimonials", id), data);
}

export async function addTestimonial(data: Omit<Testimonial, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "testimonials"), data);
  return ref.id;
}

export async function deleteTestimonial(id: string): Promise<void> {
  await deleteDoc(doc(db, "testimonials", id));
}
