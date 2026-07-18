# Ndarul Portfolio

A bilingual (English and Indonesian) portfolio for presenting selected product design and software engineering case studies. It includes a Firebase-backed content system, local fallback data, project galleries, resume selection, dark/light themes, and an internal admin panel.

## Stack

- Next.js 16, React 19, and TypeScript
- Tailwind CSS 4 and Framer Motion
- Firebase Firestore and Storage

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The content manager is available at `/admin` during local development.

## Environment variables

Configure the following values in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
ADMIN_KEY=
```

## Commands

```bash
npm run dev        # Start the development server
npm run build      # Create a static export in /out
npm run start      # Serve the static /out folder
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript
npm run seed       # Seed Firestore from local portfolio data
```

This project uses Next.js static export (`output: "export"`), so production preview serves the generated `out` directory instead of `next start`.
