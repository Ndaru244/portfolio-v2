# Ndarul Portfolio

Portfolio bilingual (EN/ID) untuk case study product design dan software engineering. Data dari Firebase Firestore dengan fallback seed lokal. Static export Next.js, di-host di Firebase Hosting.

## Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4, Framer Motion
- Firebase Firestore + Hosting

## Setup

```bash
npm install
cp .env.example .env.local
# isi NEXT_PUBLIC_FIREBASE_* di .env.local
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Environment

Salin dari `.env.example` ke `.env.local` (file ini di-gitignore):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

`NEXT_PUBLIC_*` memang ter-bundle ke client (bukan secret server). Jangan commit service account / `.env.local`.

## Commands

```bash
npm run dev             # Dev server
npm run build           # Static export → /out
npm run start           # Serve /out
npm run lint
npm run typecheck
npm run seed            # Seed Firestore (butuh Auth/Admin privileges)
npm run test:rules      # Unit test Security Rules (emulator)
npm run deploy:rules    # Deploy firestore.rules
npm run deploy:hosting  # Deploy Hosting (jalankan build dulu)
npm run deploy          # build + deploy hosting
```

Produksi memakai `output: "export"` — preview lewat `npm run start`, bukan `next start`.

## Security notes

- Firestore: public **read** untuk koleksi portfolio; **write** hanya FireCMS claim atau owner Auth terverifikasi (lihat `firestore.rules`).
- Admin CMS lokal (`src/app/admin`) di-gitignore dan dikeluarkan dari `npm run build`.
- Jangan simpan secret di dokumen Firestore atau di Security Rules sebagai field data.
