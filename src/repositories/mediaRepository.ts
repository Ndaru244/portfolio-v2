import { db } from "@/config/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { MediaItem } from "@/types";

export async function getMediaItems(): Promise<MediaItem[]> {
  try {
    const snap = await getDocs(collection(db, "media"));
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as MediaItem);
  } catch (error) {
    console.error("Error fetching media:", error);
    return [];
  }
}

export async function saveMediaItem(id: string, data: Omit<MediaItem, "id">): Promise<void> {
  await setDoc(doc(db, "media", id), data);
}

export async function addMediaItem(data: Omit<MediaItem, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "media"), data);
  return ref.id;
}

export async function deleteMediaItem(id: string): Promise<void> {
  await deleteDoc(doc(db, "media", id));
}
