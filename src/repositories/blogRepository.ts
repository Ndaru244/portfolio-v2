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
import { BlogPost } from "@/types";

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const q = query(collection(db, "blogs"), orderBy("order", "asc"));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as BlogPost);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function saveBlogPost(id: string, data: Omit<BlogPost, "id">): Promise<void> {
  await setDoc(doc(db, "blogs", id), data);
}

export async function addBlogPost(data: Omit<BlogPost, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "blogs"), data);
  return ref.id;
}

export async function deleteBlogPost(id: string): Promise<void> {
  await deleteDoc(doc(db, "blogs", id));
}
