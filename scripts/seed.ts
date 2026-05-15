import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import * as dotenv from "dotenv";
import { PROFILE_DATA, SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA } from "../src/lib/seed-data";

// Load environment variables from .env.local
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
  console.error("❌ ADMIN_KEY not found in .env.local");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function clearCollection(collectionName: string) {
  const snap = await getDocs(collection(db, collectionName));
  console.log(`🧹 Clearing collection: ${collectionName} (${snap.size} docs)`);
  for (const d of snap.docs) {
    await deleteDoc(doc(db, collectionName, d.id));
  }
}

async function seed() {
  console.log("🚀 Starting Firestore Seeding...");

  try {
    // 1. Seed Profile
    console.log("👤 Seeding Profile...");
    await setDoc(doc(db, "profile", PROFILE_DATA.id), { 
      ...PROFILE_DATA.data
    });

    // 2. Seed Skills
    await clearCollection("skills");
    console.log("💡 Seeding Skills...");
    for (const skill of SKILLS_DATA) {
      await addDoc(collection(db, "skills"), { 
        ...skill
      });
    }

    // 3. Seed Experience
    await clearCollection("experience");
    console.log("💼 Seeding Experience...");
    for (const exp of EXPERIENCE_DATA) {
      await addDoc(collection(db, "experience"), { 
        ...exp
      });
    }

    // 4. Seed Projects
    await clearCollection("projects");
    console.log("📂 Seeding Projects...");
    for (const project of PROJECTS_DATA) {
      await setDoc(doc(db, "projects", project.id), { 
        ...project.data
      });
    }

    console.log("✅ Seeding Completed Successfully!");
  } catch (error) {
    console.error("❌ Seeding Failed:", error);
  }
}

seed();
