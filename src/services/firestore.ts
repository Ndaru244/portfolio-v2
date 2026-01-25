import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { Profile, Project, Skill, Experience } from "@/types/portfolio";

export const getProfileData = async (): Promise<Profile | null> => {
  try {
    const docRef = doc(db, "profile", "main_profile");
    const snap = await getDoc(docRef);
    
    if (snap.exists()) {
      return snap.data() as Profile;
    }
    
    console.warn("Profile document not found in Firestore (profile/main_profile)");
    return null;
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
};

export const getProfile = getProfileData;

export const getProjects = async (): Promise<Project[]> => {
  try {
    const projectsRef = collection(db, "projects");
    const q = query(projectsRef, orderBy("order", "asc"));
    const snap = await getDocs(q);

    const projects = snap.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Project,
    );

    return projects;
  } catch (error) {
    console.error("Error fetching sorted projects:", error);
    return [];
  }
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  try {
    const docRef = doc(db, "projects", id);
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      return { id: snap.id, ...snap.data() } as Project;
    }

    return null; 
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};

export const getSkills = async (): Promise<Skill[]> => {
  try {
    const q = query(collection(db, "skills"), orderBy("order", "asc"));
    const snap = await getDocs(q);
    return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Skill);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};

export const getExperience = async (): Promise<Experience[]> => {
  try {
    const experienceRef = collection(db, "experience");
    // Tetap gunakan orderBy untuk efisiensi awal
    const q = query(experienceRef, orderBy("order", "asc"));
    const snap = await getDocs(q);

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Experience[];

    return data.sort((a, b) => Number(a.order) - Number(b.order));
    
  } catch (error) {
    console.error("Error fetching experience:", error);
    return [];
  }
};