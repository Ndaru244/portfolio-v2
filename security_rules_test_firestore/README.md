# Firestore Security Rules Tests

Project ID: `ndaru-portfolio`

## Prerequisites

- Node.js 18+
- Java JRE (Firebase Emulator)

## Run

From repo root:

```bash
npm run test:rules
```

Atau manual:

```bash
cd security_rules_test_firestore
npm install
npm test
```

`npm test` / `npm run test:rules` menjalankan Firestore emulator, Jest, lalu shutdown.

## Manual emulator

```bash
cd security_rules_test_firestore
npm run emulator:start
# terminal lain:
npx jest --runInBand
```

## Deploy (dari root)

```bash
# Security Rules saja
npm run deploy:rules

# Hosting (CSP/HSTS/dll. dari firebase.json) — butuh build `out/` dulu
npm run build
npm run deploy:hosting

# Build + hosting
npm run deploy
```

## Troubleshooting

- Port 8080 dipakai: hentikan emulator lain atau ubah port di `firebase.json` lokal test.
- Write `permission-denied` di admin lokal: pastikan `ADMIN_KEY` + `FIREBASE_SERVICE_ACCOUNT` / `GOOGLE_APPLICATION_CREDENTIALS` di `.env.local`.
- Seed gagal: sama — butuh Firebase Admin SDK credentials.
