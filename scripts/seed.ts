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
import { getAdminDb } from "../src/lib/firebase-admin";

dotenv.config({ path: ".env.local" });

async function clearCollection(collectionName: string) {
  const db = getAdminDb();
  const snap = await db.collection(collectionName).get();
  console.log(`Clearing collection: ${collectionName} (${snap.size} docs)`);
  const batchSize = 400;
  let batch = db.batch();
  let count = 0;
  for (const d of snap.docs) {
    batch.delete(d.ref);
    count++;
    if (count >= batchSize) {
      await batch.commit();
      batch = db.batch();
      count = 0;
    }
  }
  if (count > 0) await batch.commit();
}

async function seedCollection<T extends Record<string, unknown>>(
  name: string,
  items: T[],
) {
  const db = getAdminDb();
  await clearCollection(name);
  console.log(`Seeding ${name}...`);
  for (const item of items) {
    await db.collection(name).add(item);
  }
}

async function seed() {
  console.log("Starting Firestore Seeding (Admin SDK)...");

  try {
    const db = getAdminDb();

    console.log("Seeding Profile...");
    await db.collection("profile").doc(PROFILE_DATA.id).set(PROFILE_DATA.data);

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
      await db.collection("projects").doc(project.id).set(project.data);
    }

    console.log("Seeding singleton docs...");
    await db.collection("navigation").doc("main").set(NAVIGATION_DATA);
    await db.collection("settings").doc("main").set(SETTINGS_DATA);
    await db.collection("seo").doc("main").set(SEO_DATA);
    await db.collection("resume").doc("main").set(RESUME_DATA);

    console.log("Seeding Completed Successfully!");
  } catch (error) {
    console.error("Seeding Failed:", error);
    console.error(
      "Set FIREBASE_SERVICE_ACCOUNT (JSON) or GOOGLE_APPLICATION_CREDENTIALS in .env.local.",
    );
    process.exit(1);
  }
}

seed();
