import { db } from "@/config/firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { Project } from "@/types";
import { PROJECTS_DATA } from "@/lib/seed-data";
import { stripSensitiveFields } from "@/lib/sanitize-firestore";

function getSeedProjects(): Project[] {
  return PROJECTS_DATA.map((p) => p.data);
}

function getSeedProjectById(id: string): Project | null {
  return PROJECTS_DATA.find((p) => p.id === id)?.data ?? null;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const q = query(collection(db, "projects"), orderBy("order", "asc"));
    const snap = await getDocs(q);
    const projects = snap.docs.map(
      (d) =>
        ({
          id: d.id,
          ...stripSensitiveFields(d.data()),
        }) as Project,
    );
    if (projects.length) return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
  return getSeedProjects();
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const snap = await getDoc(doc(db, "projects", id));
    if (snap.exists()) {
      return {
        id: snap.id,
        ...stripSensitiveFields(snap.data()),
      } as Project;
    }
  } catch (error) {
    console.error("Error fetching project:", error);
  }
  return getSeedProjectById(id);
}

export async function getProjectIds(): Promise<string[]> {
  const seedIds = PROJECTS_DATA.map((p) => p.id);
  try {
    const snap = await getDocs(collection(db, "projects"));
    const remoteIds = snap.docs.map((d) => d.id);
    if (remoteIds.length) {
      return Array.from(new Set([...remoteIds, ...seedIds]));
    }
  } catch (error) {
    console.error("Error fetching project ids:", error);
  }
  return seedIds;
}

export async function saveProject(id: string, data: Project): Promise<void> {
  await setDoc(doc(db, "projects", id), data);
}

export async function deleteProject(id: string): Promise<void> {
  await deleteDoc(doc(db, "projects", id));
}
