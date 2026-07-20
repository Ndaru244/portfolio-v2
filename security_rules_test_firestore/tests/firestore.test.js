/**
 * Firestore Security Rules unit tests for ndaru-portfolio.
 * Public read on portfolio collections; writes require fireCMSUser claim.
 */
const {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
} = require("@firebase/rules-unit-testing");
const { readFileSync } = require("fs");
const { setLogLevel } = require("firebase/firestore");

const PROJECT_ID = "ndaru-portfolio";

let testEnv;

beforeAll(async () => {
  setLogLevel("error");
  testEnv = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: {
      rules: readFileSync("firestore.rules", "utf8"),
      host: "127.0.0.1",
      port: 8080,
    },
  });
});

afterAll(async () => {
  await testEnv.cleanup();
});

beforeEach(async () => {
  await testEnv.clearFirestore();
});

function unauthDb() {
  return testEnv.unauthenticatedContext().firestore();
}

function fireCmsDb() {
  return testEnv
    .authenticatedContext("firecms-admin", { fireCMSUser: true })
    .firestore();
}

function plainAuthDb() {
  return testEnv.authenticatedContext("regular-user").firestore();
}

describe("public portfolio collections", () => {
  test("unauthenticated users can read projects", async () => {
    await testEnv.withSecurityRulesDisabled(async (ctx) => {
      await ctx.firestore().doc("projects/p1").set({ title: "Demo", order: 1 });
    });
    await assertSucceeds(unauthDb().doc("projects/p1").get());
  });

  test("unauthenticated users can list skills", async () => {
    await testEnv.withSecurityRulesDisabled(async (ctx) => {
      await ctx.firestore().doc("skills/s1").set({ name: "Figma", order: 1 });
    });
    await assertSucceeds(unauthDb().collection("skills").get());
  });

  test("unauthenticated users cannot write projects", async () => {
    await assertFails(
      unauthDb().doc("projects/hack").set({ title: "Hack", order: 0 }),
    );
  });

  test("unauthenticated users cannot update profile", async () => {
    await testEnv.withSecurityRulesDisabled(async (ctx) => {
      await ctx.firestore().doc("profile/main_profile").set({ name: "Ndaru" });
    });
    await assertFails(
      unauthDb().doc("profile/main_profile").update({ name: "Attacker" }),
    );
  });

  test("unauthenticated users cannot delete documents", async () => {
    await testEnv.withSecurityRulesDisabled(async (ctx) => {
      await ctx.firestore().doc("projects/p1").set({ title: "Demo" });
    });
    await assertFails(unauthDb().doc("projects/p1").delete());
  });

  test("plain authenticated users cannot write", async () => {
    await assertFails(
      plainAuthDb().doc("projects/p2").set({ title: "Nope", order: 2 }),
    );
  });

  test("FireCMS admin can write portfolio docs", async () => {
    await assertSucceeds(
      fireCmsDb().doc("projects/p3").set({ title: "OK", order: 3 }),
    );
  });

  test("verified owner email cannot write without fireCMSUser", async () => {
    const ownerDb = testEnv
      .authenticatedContext("owner", {
        email: "ndarulanggeng110@gmail.com",
        email_verified: true,
      })
      .firestore();
    await assertFails(
      ownerDb.doc("projects/p-owner").set({ title: "Owner", order: 1 }),
    );
  });

  test("adminKey in document does not grant write", async () => {
    await assertFails(
      unauthDb().doc("projects/p4").set({
        title: "Spoof",
        order: 4,
        adminKey: "anything",
      }),
    );
  });

  test("unknown collections are denied for read and write", async () => {
    await assertFails(unauthDb().doc("secrets/x").get());
    await assertFails(unauthDb().doc("secrets/x").set({ v: 1 }));
  });

  test("singleton docs are publicly readable", async () => {
    await testEnv.withSecurityRulesDisabled(async (ctx) => {
      await ctx.firestore().doc("settings/main").set({ theme: "dark" });
      await ctx.firestore().doc("navigation/main").set({ items: [] });
    });
    await assertSucceeds(unauthDb().doc("settings/main").get());
    await assertSucceeds(unauthDb().doc("navigation/main").get());
  });
});
