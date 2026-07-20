import { db } from "@/config/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Profile } from "@/types";
import { PROFILE_DATA } from "@/lib/seed-data";
import { stripSensitiveFields } from "@/lib/sanitize-firestore";

const PROFILE_DOC = "main_profile";

export async function getProfile(): Promise<Profile | null> {
  try {
    const snap = await getDoc(doc(db, "profile", PROFILE_DOC));
    if (snap.exists()) {
      return stripSensitiveFields(snap.data()) as Profile;
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
  return PROFILE_DATA.data as Profile;
}

export const getProfileData = getProfile;

export async function saveProfile(data: Profile): Promise<void> {
  await setDoc(doc(db, "profile", PROFILE_DOC), data);
}
