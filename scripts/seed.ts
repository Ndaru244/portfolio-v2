import * as dotenv from "dotenv";
import * as readline from "readline";
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

type SeedMode = "all" | "core";

function slugId(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function askMode(): Promise<SeedMode> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    console.log("\nPilih mode seed:");
    console.log("  1) all  — semua collection (upsert)");
    console.log("  2) core — projects + experiences saja (upsert)");
    rl.question("Pilihan [1/2]: ", (answer) => {
      rl.close();
      const choice = answer.trim();
      if (choice === "2" || choice.toLowerCase() === "core") {
        resolve("core");
        return;
      }
      resolve("all");
    });
  });
}

async function upsertByMatch(
  collectionName: string,
  id: string,
  data: Record<string, unknown>,
  match: (existing: FirebaseFirestore.DocumentData) => boolean,
) {
  const db = getAdminDb();
  const byId = await db.collection(collectionName).doc(id).get();
  if (byId.exists) {
    await byId.ref.set(data);
    console.log(`  update ${collectionName}/${id}`);
    return;
  }

  const snap = await db.collection(collectionName).get();
  const found = snap.docs.find((doc) => match(doc.data()));
  if (found) {
    await found.ref.set(data);
    console.log(`  update ${collectionName}/${found.id} (match)`);
    return;
  }

  await db.collection(collectionName).doc(id).set(data);
  console.log(`  create ${collectionName}/${id}`);
}

async function upsertById(
  collectionName: string,
  id: string,
  data: Record<string, unknown>,
) {
  const db = getAdminDb();
  const ref = db.collection(collectionName).doc(id);
  const existing = await ref.get();
  await ref.set(data);
  console.log(
    `  ${existing.exists ? "update" : "create"} ${collectionName}/${id}`,
  );
}

async function seedCore() {
  console.log("\nSeeding core (projects + experiences)...");

  for (const project of PROJECTS_DATA) {
    await upsertById("projects", project.id, project.data as unknown as Record<string, unknown>);
  }

  for (const exp of EXPERIENCE_DATA) {
    await upsertByMatch(
      "experiences",
      exp.id,
      exp.data as unknown as Record<string, unknown>,
      (existing) =>
        existing.company === exp.data.company &&
        existing.period === exp.data.period,
    );
  }
}

async function seedAll() {
  console.log("\nSeeding all collections (upsert)...");
  const db = getAdminDb();

  await upsertById(
    "profile",
    PROFILE_DATA.id,
    PROFILE_DATA.data as unknown as Record<string, unknown>,
  );

  for (const skill of SKILLS_DATA) {
    const id = slugId(`${skill.category}-${skill.name}`);
    await upsertByMatch(
      "skills",
      id,
      skill as unknown as Record<string, unknown>,
      (existing) =>
        existing.name === skill.name && existing.category === skill.category,
    );
  }

  for (const exp of EXPERIENCE_DATA) {
    await upsertByMatch(
      "experiences",
      exp.id,
      exp.data as unknown as Record<string, unknown>,
      (existing) =>
        existing.company === exp.data.company &&
        existing.period === exp.data.period,
    );
  }

  for (const cert of CERTIFICATES_DATA) {
    const id = slugId(`${cert.issuer}-${cert.title}`);
    await upsertByMatch(
      "certificates",
      id,
      cert as unknown as Record<string, unknown>,
      (existing) =>
        existing.title === cert.title && existing.issuer === cert.issuer,
    );
  }

  for (const service of SERVICES_DATA) {
    const id = slugId(service.title);
    await upsertByMatch(
      "services",
      id,
      service as unknown as Record<string, unknown>,
      (existing) => existing.title === service.title,
    );
  }

  for (const item of TESTIMONIALS_DATA) {
    const id = slugId(item.name);
    await upsertByMatch(
      "testimonials",
      id,
      item as unknown as Record<string, unknown>,
      (existing) => existing.name === item.name,
    );
  }

  for (const blog of BLOGS_DATA) {
    const id = slugId(blog.slug || blog.title);
    await upsertByMatch(
      "blogs",
      id,
      blog as unknown as Record<string, unknown>,
      (existing) =>
        existing.slug === blog.slug || existing.title === blog.title,
    );
  }

  for (const media of MEDIA_DATA) {
    const id = slugId(media.name || media.url || "media");
    await upsertByMatch(
      "media",
      id,
      media as unknown as Record<string, unknown>,
      (existing) =>
        existing.url === media.url || existing.name === media.name,
    );
  }

  for (const project of PROJECTS_DATA) {
    await upsertById("projects", project.id, project.data as unknown as Record<string, unknown>);
  }

  console.log("Seeding singleton docs...");
  await db.collection("navigation").doc("main").set(NAVIGATION_DATA);
  await db.collection("settings").doc("main").set(SETTINGS_DATA);
  await db.collection("seo").doc("main").set(SEO_DATA);
  await db.collection("resume").doc("main").set(RESUME_DATA);
  console.log("  update singletons (navigation/settings/seo/resume)");
}

async function seed() {
  console.log("Starting Firestore Seeding (Admin SDK)...");

  try {
    const mode = await askMode();
    console.log(`Mode: ${mode}`);

    if (mode === "core") {
      await seedCore();
    } else {
      await seedAll();
    }

    console.log("\nSeeding Completed Successfully!");
  } catch (error) {
    console.error("Seeding Failed:", error);
    console.error(
      "Set FIREBASE_SERVICE_ACCOUNT (JSON) or GOOGLE_APPLICATION_CREDENTIALS in .env.local.",
    );
    process.exit(1);
  }
}

seed();
