import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import * as dotenv from "dotenv";
import {
  PROFILE_DATA,
  SKILLS_DATA,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  CERTIFICATES_DATA,
  SERVICES_DATA,
  TESTIMONIALS_DATA,
  BLOGS_DATA,
  MEDIA_DATA,
  NAVIGATION_DATA,
  SETTINGS_DATA,
  SEO_DATA,
  RESUME_DATA,
} from "../src/lib/seed-data";

dotenv.config({ path: ".env.local" });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const ADMIN_KEY = process.env.ADMIN_KEY;

if (!ADMIN_KEY) {
  console.error("ADMIN_KEY not found in .env.local");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function clearCollection(collectionName: string) {
  const snap = await getDocs(collection(db, collectionName));
  console.log(`Clearing collection: ${collectionName} (${snap.size} docs)`);
  for (const d of snap.docs) {
    await deleteDoc(doc(db, collectionName, d.id));
  }
}

async function seedCollection<T extends Record<string, unknown>>(
  name: string,
  items: T[],
) {
  await clearCollection(name);
  console.log(`Seeding ${name}...`);
  for (const item of items) {
    await addDoc(collection(db, name), { ...item, adminKey: ADMIN_KEY });
  }
}

async function seed() {
  console.log("Starting Firestore Seeding...");

  try {
    console.log("Seeding Profile...");
    await setDoc(doc(db, "profile", PROFILE_DATA.id), {
      ...PROFILE_DATA.data,
      adminKey: ADMIN_KEY,
    });

    await seedCollection("skills", SKILLS_DATA);
    await clearCollection("experience");
    await seedCollection("experiences", EXPERIENCE_DATA);
    await seedCollection("certificates", CERTIFICATES_DATA);
    await seedCollection("services", SERVICES_DATA);
    await seedCollection("testimonials", TESTIMONIALS_DATA);
    await seedCollection("blogs", BLOGS_DATA);
    await seedCollection("media", MEDIA_DATA);

    await clearCollection("projects");
    console.log("Seeding projects...");
    for (const project of PROJECTS_DATA) {
      await setDoc(doc(db, "projects", project.id), {
        ...project.data,
        adminKey: ADMIN_KEY,
      });
    }

    console.log("Seeding singleton docs...");
    await setDoc(doc(db, "navigation", "main"), {
      ...NAVIGATION_DATA,
      adminKey: ADMIN_KEY,
    });
    await setDoc(doc(db, "settings", "main"), {
      ...SETTINGS_DATA,
      adminKey: ADMIN_KEY,
    });
    await setDoc(doc(db, "seo", "main"), { ...SEO_DATA, adminKey: ADMIN_KEY });
    await setDoc(doc(db, "resume", "main"), {
      ...RESUME_DATA,
      adminKey: ADMIN_KEY,
    });

    console.log("Seeding Completed Successfully!");
  } catch (error) {
    console.error("Seeding Failed:", error);
    process.exit(1);
  }
}

seed();
