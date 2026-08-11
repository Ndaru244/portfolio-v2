import {
  Project,
  Skill,
  Experience,
  Certificate,
  Service,
  Testimonial,
  BlogPost,
  MediaItem,
  Navigation,
  Settings,
  SeoConfig,
  Resume,
  TechItem,
  ProjectTranslation,
} from "@/types";

const tech = (name: string, icon?: string): TechItem => ({
  id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name,
  icon: icon || name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
});

export const PROFILE_DATA = {
  id: "main_profile",
  data: {
    name: "Ndaru L Santosa",
    role: "UI/UX Designer & Web Developer",
    location: "Tangerang, Indonesia",
    status: "Available for Hire",
    bio_short:
      "Bridging the gap between creative design (Figma) and technical feasibility (Code).",
    bio_long:
      "Bridging the gap between user-centric design and robust software engineering. With a background in full-stack development, I create beautiful, intuitive interfaces rooted in research and optimized for performance. I don't just design visuals; I build scalable systems that make sense to execute.",
    socials: {
      github: "https://github.com/Ndaru244",
      linkedin: "https://linkedin.com/in/ndaru-langgeng-santosa-2b926b1a6/",
      dribbble: "https://dribbble.com/ndaru244",
      email: "mailto:ndarulanggeng110@gmail.com",
      phone: "tel:+6285693784773",
    },
    resume_url: "/cv.pdf",
    avatar_url: "/assets/img/My-Avatar.webp",
    translations: {
      en: {
        role: "UI/UX Designer & Software Engineer",
        location: "Tangerang, Indonesia",
        status: "Available for Hire",
        bio_short:
          "Bridging creative design in Figma with technical feasibility in code.",
        bio_long:
          "I bridge user-centered design and robust software engineering. With a full-stack background, I create intuitive interfaces grounded in research and optimized for performance, then turn them into scalable products.",
      },
      id: {
        role: "UI/UX Designer & Software Engineer",
        location: "Tangerang, Indonesia",
        status: "Terbuka untuk Peluang Kerja",
        bio_short:
          "Menjembatani desain kreatif di Figma dengan kelayakan teknis dalam kode.",
        bio_long:
          "Saya menjembatani desain yang berpusat pada pengguna dan software engineering yang kuat. Dengan latar belakang full-stack, saya merancang antarmuka intuitif berbasis riset, mengoptimalkannya untuk performa, lalu mewujudkannya menjadi produk yang scalable.",
      },
    },
  },
};

export const SKILLS_DATA: Omit<Skill, "id">[] = [
  { name: "Prototyping", category: "ux", percentage: 98, level: "Master", order: 1 },
  { name: "Wireframing", category: "ux", percentage: 90, level: "Expert", order: 2 },
  { name: "User Research", category: "ux", percentage: 80, level: "Advanced", order: 3 },
  { name: "Usability Testing", category: "ux", percentage: 67, level: "Intermediate", order: 4 },
  { name: "Figma", category: "design", order: 1 },
  { name: "UI Design", category: "design", order: 2 },
  { name: "Design System", category: "design", order: 3 },
  { name: "Interaction Design", category: "design", order: 4 },
  { name: "HTML/CSS", category: "tech", order: 1 },
  { name: "Next.js", category: "tech", order: 2 },
  { name: "PHP", category: "tech", order: 3 },
  { name: "CodeIgniter", category: "tech", order: 4 },
  { name: "MySQL", category: "tech", order: 5 },
  { name: "Flutter", category: "tech", order: 6 },
];

export const EXPERIENCE_DATA: {
  id: string;
  data: Omit<Experience, "id">;
}[] = [
  {
    id: "tarung-bersama-teknologi",
    data: {
      company: "PT Tarung Bersama Teknologi",
      role: "Frontend Engineer",
      period: "Jan 2026 - Apr 2026",
      description:
        "As Frontend Engineer at PT Tarung Bersama Teknologi (IT vendor/consultant), built ArCore frontend modules for client Arsari Tambang: Data Offshore, Production & Cost, and Timesheet & Equipment UIs (Next.js, React, TypeScript) with Redux Toolkit and interactive dashboards.",
      type: "work",
      order: 0,
      translations: {
        id: {
          role: "Frontend Engineer",
          period: "Jan 2026 - Apr 2026",
          description:
            "Sebagai Frontend Engineer di PT Tarung Bersama Teknologi (vendor/IT consultant), membangun modul frontend ArCore untuk client Arsari Tambang: UI Data Offshore, Production & Cost, serta Timesheet & Equipment (Next.js, React, TypeScript) dengan Redux Toolkit dan dashboard interaktif.",
        },
        en: {
          role: "Frontend Engineer",
          period: "Jan 2026 - Apr 2026",
          description:
            "As Frontend Engineer at PT Tarung Bersama Teknologi (IT vendor/consultant), built ArCore frontend modules for client Arsari Tambang: Data Offshore, Production & Cost, and Timesheet & Equipment UIs (Next.js, React, TypeScript) with Redux Toolkit and interactive dashboards.",
        },
      },
    },
  },
  {
    id: "sdn-sunter-agung-12",
    data: {
      company: "SDN Sunter Agung 12 PG",
      role: "Web Developer",
      period: "Des 2025 - Feb 2026",
      description:
        "Built Sadulas, an integrated school information system with a public portal, admin dashboard, digital correspondence, and student records. Extended the platform with E-Absensi (Jan–Feb 2026), an offline-first attendance module with RBAC and printable PDF reports.",
      type: "Contract",
      order: 1,
      translations: {
        id: {
          role: "Web Developer",
          period: "Des 2025 - Feb 2026",
          description:
            "Mengembangkan Sadulas, sistem informasi sekolah terintegrasi dengan portal publik, dashboard admin, surat digital, dan arsip siswa. Memperluas platform dengan E-Absensi (Jan–Feb 2026), modul absensi offline-first ber-RBAC dan laporan PDF siap cetak.",
        },
        en: {
          role: "Web Developer",
          period: "Dec 2025 - Feb 2026",
          description:
            "Built Sadulas, an integrated school information system with a public portal, admin dashboard, digital correspondence, and student records. Extended the platform with E-Absensi (Jan–Feb 2026), an offline-first attendance module with RBAC and printable PDF reports.",
        },
      },
    },
  },
  {
    id: "solvera-global-teknologi",
    data: {
      company: "PT Solvera Global Teknologi",
      role: "UI/UX Designer",
      period: "Oct 2025 - Dec 2025",
      description:
        "Executed a comprehensive revamp of the solvera.id corporate website. Modernized the visual identity, optimized mobile responsiveness, and improved information architecture to enhance user engagement and site performance.",
      type: "internship",
      order: 2,
      translations: {
        id: {
          description:
            "Merancang ulang website korporat Solvera.id, memodernisasi identitas visual, responsivitas mobile, dan arsitektur informasi untuk meningkatkan engagement.",
        },
        en: {
          description:
            "Redesigned Solvera.id's corporate website, modernizing its visual identity, mobile responsiveness, and information architecture to improve engagement.",
        },
      },
    },
  },
  {
    id: "bhinneka-alam-nusantara",
    data: {
      company: "PT Bhinneka Alam Nusantara",
      role: "UI/UX Designer",
      period: "Sep 2022 - Oct 2024",
      description:
        "Designed mobile UI patterns, created interactive prototypes, and conducted usability testing which improved task completion by 25%. Led the design system scalability.",
      type: "work",
      order: 3,
      translations: {
        id: {
          description:
            "Merancang pola UI mobile, prototype interaktif, dan usability testing yang meningkatkan penyelesaian tugas sebesar 25%, sekaligus memimpin skalabilitas design system.",
        },
        en: {
          description:
            "Designed mobile UI patterns, interactive prototypes, and usability tests that improved task completion by 25%, while leading design-system scalability.",
        },
      },
    },
  },
  {
    id: "crooked-indonesia",
    data: {
      company: "Crooked Indonesia",
      role: "Web Developer Intern",
      period: "Mar 2022 - Aug 2022",
      description:
        "Developed responsive catalog website using PHP (CodeIgniter) and Bootstrap. Zero critical downtime during the 6-month contract.",
      type: "internship",
      order: 4,
      translations: {
        id: {
          period: "Mar 2022 - Agu 2022",
          description:
            "Mengembangkan website katalog responsif dengan PHP, CodeIgniter, dan Bootstrap tanpa downtime kritis selama kontrak enam bulan.",
        },
        en: {
          period: "Mar 2022 - Aug 2022",
          description:
            "Developed a responsive catalog website with PHP, CodeIgniter, and Bootstrap, maintaining zero critical downtime throughout the six-month contract.",
        },
      },
    },
  },
];

export const CERTIFICATES_DATA: Omit<Certificate, "id">[] = [
  {
    title: "Test Layout",
    issuer: "Test / Test",
    date: "2023",
    credentialUrl: "https://coursera.org",
    order: 0,
    translations: {
      id: { title: "Test Layout" },
      en: { title: "Test Layout" },
    },
  },
];

export const SERVICES_DATA: Omit<Service, "id">[] = [
  {
    title: "UI/UX Design",
    description: "Research-driven interfaces, design systems, and high-fidelity prototypes.",
    icon: "palette",
    order: 0,
  },
  {
    title: "Web Development",
    description: "Production-ready Next.js and PHP applications with maintainable architecture.",
    icon: "code",
    order: 1,
  },
];

export const TESTIMONIALS_DATA: Omit<Testimonial, "id">[] = [
  {
    name: "Product Stakeholder",
    role: "Project Lead",
    company: "PT Bhinneka Alam Nusantara",
    quote:
      "Ndaru delivered clear design systems and prototypes that made engineering handoff significantly faster.",
    order: 0,
  },
];

export const BLOGS_DATA: Omit<BlogPost, "id">[] = [
  {
    title: "Draft post",
    slug: "draft-post",
    excerpt: "",
    content: "",
    published: false,
    order: 0,
  },
];

export const MEDIA_DATA: Omit<MediaItem, "id">[] = [
  {
    name: "Portfolio OG Image",
    url: "",
    type: "image",
    alt: "Portfolio preview",
  },
  {
    name: "Avatar",
    url: "/assets/img/My-Avatar.webp",
    type: "image",
    alt: "Ndaru avatar",
  },
];

export const NAVIGATION_DATA: Navigation = {
  items: [
    {
      id: "about",
      label: "About",
      href: "#about",
      order: 0,
      translations: { id: { label: "Tentang" }, en: { label: "About" } },
    },
    {
      id: "experience",
      label: "Experience",
      href: "#experience",
      order: 1,
      translations: { id: { label: "Pengalaman" }, en: { label: "Experience" } },
    },
    {
      id: "projects",
      label: "Projects",
      href: "#projects",
      order: 2,
      translations: { id: { label: "Proyek" }, en: { label: "Projects" } },
    },
    {
      id: "skills",
      label: "Skills",
      href: "#skills",
      order: 3,
      translations: { id: { label: "Keahlian" }, en: { label: "Skills" } },
    },
    {
      id: "contact",
      label: "Contact",
      href: "#contact",
      order: 4,
      translations: { id: { label: "Kontak" }, en: { label: "Contact" } },
    },
  ],
};

export const SETTINGS_DATA: Settings = {
  siteUrl: "https://ndaru-portfolio.web.app",
  defaultTheme: "dark",
  showCertificates: false,
  showTechStack: true,
  showTestimonials: false,
  contactEmail: "mailto:ndarulanggeng110@gmail.com",
};

export const SEO_DATA: SeoConfig = {
  siteName: "Ndaru Langgeng Santosa Portfolio",
  title: "Ndaru Langgeng Santosa | UI/UX Designer & Web Developer",
  description:
    "Portfolio of Ndaru Langgeng Santosa — UI/UX Designer and Web Developer based in Tangerang, Indonesia.",
  keywords: [
    "Ndaru Langgeng Santosa",
    "UI/UX Designer Tangerang",
    "Web Developer Indonesia",
    "Next.js Portfolio",
  ],
  ogImage: "",
  canonicalBase: "https://ndaru-portfolio.web.app",
  twitterHandle: "@ndaruls",
  locale: "id_ID",
};

export const RESUME_DATA: Resume = {
  options: [
    { id: "uiux", label: "UI/UX Designer", url: "/cv/cv-uiux.html?print=1" },
    {
      id: "software-engineer",
      label: "Software Engineer",
      url: "/cv/cv-dev.html?print=1",
    },
  ],
  updatedAt: "2026-08-11",
};

export const PROJECTS_DATA: { id: string; data: Project }[] = [
  {
    id: "arcore",
    data: {
      id: "arcore",
      title: "ArCore",
      industry: "Mining / Offshore",
      platform: "Web",
      discipline: "Frontend",
      client: "Arsari Tambang",
      role: "Frontend Engineer",
      status: "Completed",
      order: 0,
      featured: true,
      overview: {
        title: "Project Overview",
        description:
          "ArCore adalah platform operasi enterprise untuk client Arsari Tambang, dikerjakan melalui PT Tarung Bersama Teknologi sebagai vendor/IT consultant. Kontribusi frontend: antarmuka modul Data Offshore, Production & Cost, serta Timesheet & Equipment dengan Next.js 16, React 19, dan TypeScript.",
      },
      problem:
        "Pengguna operasi di client membutuhkan antarmuka yang konsisten dan mudah digunakan untuk pelaporan lapangan, biaya, dan peralatan lintas banyak halaman modul.",
      research:
        "Pemetaan kebutuhan UI bersama Tim Tarung dan stakeholder client untuk alur form, tabel, filter, dan dashboard pada modul Data Offshore, Production & Cost, dan Equipment Timesheet.",
      constraints:
        "Banyak modul UI dalam satu aplikasi enterprise, state lintas halaman yang kompleks, serta kebutuhan komponen tabel/form/chart yang reusable.",
      solution:
        "Membangun frontend enterprise Next.js 16 dengan komponen UI modular, state management Redux Toolkit, serta dashboard visualisasi interaktif untuk modul operasional utama.",
      engineeringDecision:
        "Next.js App Router + Redux Toolkit untuk state UI global, Axios untuk pemanggilan data, dan ApexCharts/ECharts untuk visualisasi dashboard.",
      responsibilities:
        "Frontend engineering: page/module UI, komponen tabel & form, state management, dan dashboard visualisasi.",
      challenges:
        "Menjaga konsistensi UX dan performa UI saat banyak alur operasional digabung dalam satu aplikasi frontend.",
      lessonsLearned:
        "Struktur modul UI yang jelas lebih berdampak daripada menambah ornamen visual di aplikasi enterprise.",
      impact: [
        { label: "UI Modules", value: "Offshore, Cost, Equipment" },
        { label: "Stack", value: "Next.js + Redux Toolkit" },
      ],
      duration: "Jan 2026 - Apr 2026",
      team: { size: 4, role: "Frontend Engineer" },
      links: {
        live: null,
        github: null,
        figma: null,
      },
      sections: [
        {
          id: "key-modules",
          title: "Frontend Modules",
          type: "list",
          layout: "grid",
          items: [
            {
              label: "Data Offshore UI",
              value:
                "Antarmuka form dan pelaporan LKH, LKS, dan LPS: input koordinat, cuaca, dan data kapal untuk tim maritime/survey.",
            },
            {
              label: "Production & Cost UI",
              value:
                "Halaman monitoring produksi dan biaya: tabel throughput, konsumsi BBM/listrik, penyesuaian kurs, serta tampilan cost code.",
            },
            {
              label: "Timesheet & Equipment UI",
              value:
                "Antarmuka timesheet operator dan status alat berat, termasuk tampilan downtime berdasarkan reason code & equipment group.",
            },
          ],
        },
        {
          id: "tech-architecture",
          title: "Frontend Architecture",
          type: "grid",
          layout: "grid",
          items: [
            {
              label: "Core Stack",
              value:
                "• Next.js 16 (App Router)\n• React 19\n• TypeScript",
            },
            {
              label: "UI State & Data Fetching",
              value:
                "• Redux Toolkit / Persist\n• Axios\n• TanStack Table",
            },
            {
              label: "UI & Visualization",
              value:
                "• Bootstrap 5 / Reactstrap\n• ApexCharts / ECharts\n• Remix Icons / Feather Icons",
            },
          ],
        },
      ],
      techStack: [
        tech("Next.js", "nextjs"),
        tech("React", "react"),
        tech("TypeScript", "typescript"),
        tech("Redux Toolkit", "redux"),
        tech("Bootstrap", "bootstrap"),
        tech("ApexCharts", "apexcharts"),
      ],
      thumbnail: "/assets/img/preview/Arcore-Login.webp",
      gallery: [
        "/assets/img/preview/Arcore-Login.webp",
        "/assets/img/preview/Arcore-Dashboard.webp",
      ],
    },
  },
  {
    id: "e-absensi",
    data: {
      id: "e-absensi",
      title: "E-Absensi",
      industry: "Education",
      platform: "Web",
      discipline: "Fullstack",
      client: "SDN Sunter Agung 12 PG",
      role: "Web Developer",
      status: "Completed",
      order: 1,
      featured: true,
      overview: {
        title: "Project Overview",
        description:
          "E-Absensi adalah ekstensi/modul tambahan Sadulas untuk digitalisasi absensi siswa di SDN Sunter Agung 12 PG (Jan–Feb 2026). Dibangun dengan pendekatan Offline-First, RBAC, dan ekspor laporan PDF resmi siap cetak.",
      },
      problem:
        "Pendataan dan rekap kehadiran siswa masih rentan terhadap jaringan tidak stabil, proses manual yang lambat, serta risiko manipulasi data setelah rekap selesai.",
      research:
        "Pemetaan alur guru, admin, dan kepala sekolah untuk input harian, penguncian rekap, hak akses per kelas, serta kebutuhan laporan PDF ber-kop surat resmi.",
      constraints:
        "Harus tetap usable offline, ringan tanpa framework berat, multi-role, dan siap production di Firebase Hosting.",
      solution:
        "Membangun aplikasi absensi web Offline-First dengan draf LocalStorage, sync queue + DLQ, RBAC bertingkat, statistik Chart.js, dan generator PDF (jsPDF) untuk laporan harian/bulanan.",
      engineeringDecision:
        "Vanilla JS modular + Tailwind CSS local build untuk footprint ringan; Firebase Auth/Firestore untuk auth dan data real-time; Service Worker + BroadcastChannel untuk keandalan offline dan multi-tab.",
      responsibilities:
        "Product/UI flows, offline sync architecture, RBAC, modul guru/admin, dan generator laporan PDF.",
      challenges:
        "Menjamin data absensi tidak hilang saat offline dan tetap konsisten setelah sync, termasuk isolasi kegagalan lewat Dead Letter Queue.",
      lessonsLearned:
        "Offline-first dan penguncian rekap lebih krusial daripada fitur visual tambahan untuk sistem absensi sekolah.",
      impact: [
        { label: "Reliability", value: "Offline-first attendance sync" },
        { label: "Reporting", value: "Print-ready PDF exports" },
      ],
      duration: "Jan 2026 - Feb 2026",
      team: { size: 1, role: "Solo Fullstack" },
      links: {
        live: "https://absensi-internal.web.app/",
        github: "https://github.com/Ndaru244/sistem-absensi-firebase",
        figma: null,
      },
      sections: [
        {
          id: "key-modules",
          title: "Key Modules",
          type: "list",
          layout: "grid",
          items: [
            {
              label: "Daily Attendance",
              value:
                "Input kehadiran per kelas (Hadir/Sakit/Izin/Alpa), auto-save draf, dan penguncian rekap untuk mencegah perubahan retrospektif.",
            },
            {
              label: "RBAC Access",
              value:
                "Peran Super Admin, Admin/Guru Piket, Guru, dan Viewer dengan otorisasi kelas melalui kelas_ids serta verifikasi user baru.",
            },
            {
              label: "PDF Reports",
              value:
                "Laporan harian dan rekap bulanan via jsPDF/AutoTable dengan kop surat dinamis dan kolom tanda tangan Kepala Sekolah.",
            },
          ],
        },
        {
          id: "tech-architecture",
          title: "Architecture",
          type: "grid",
          layout: "grid",
          items: [
            {
              label: "Frontend",
              value:
                "• HTML5 + Vanilla JS (ES6 modular)\n• Tailwind CSS (local build)\n• Lucide Icons + Chart.js",
            },
            {
              label: "Data & Auth",
              value:
                "• Firebase Auth (Google + Email/Password)\n• Cloud Firestore\n• Firebase Storage / Hosting",
            },
            {
              label: "Offline Reliability",
              value:
                "• LocalStorage drafts\n• Sync Queue + DLQ (retry 3x)\n• Service Worker + BroadcastChannel",
            },
          ],
        },
      ],
      techStack: [
        tech("Firebase", "firebase"),
        tech("Firestore", "firestore"),
        tech("JavaScript", "javascript"),
        tech("Tailwind CSS", "tailwind"),
        tech("Chart.js", "chartjs"),
        tech("jsPDF", "jspdf"),
      ],
      thumbnail: "/assets/img/preview/E-Absensi-Login.webp",
      gallery: [
        "/assets/img/preview/E-Absensi-Login.webp",
        "/assets/img/preview/E-Absensi-Dashboard.webp",
        "/assets/img/preview/E-Absensi-Attendance.webp",
        "/assets/img/preview/E-Absensi-Monthly.webp",
        "/assets/img/preview/E-Absensi-Admin.webp",
      ],
    },
  },
  {
    id: "sadulas",
    data: {
      id: "sadulas",
      title: "Sadulas",
      industry: "Education",
      platform: "Web",
      discipline: "Fullstack",
      client: "SDN Sunter Agung 12 PG",
      role: "Web Developer",
      status: "Completed",
      order: 2,
      featured: true,
      overview: {
        title: "Executive Summary",
        description:
          "Sadulas adalah sistem informasi sekolah terintegrasi yang mencakup portal publik dan dashboard admin untuk manajemen konten, surat, dan arsip siswa (Klapper). Platform kemudian diperluas dengan modul E-Absensi untuk absensi digital offline-first.",
      },
      problem:
        "Staf sekolah mengelola konten website, surat, dan data siswa melalui proses manual yang tersebar, sehingga pencarian data lambat dan risiko kesalahan tinggi.",
      research:
        "Requirement gathering bersama staf TU dan guru; mapping alur persuratan masuk/keluar serta kebutuhan arsip Klapper.",
      constraints:
        "Stack PHP/CodeIgniter 4, shared hosting, kebutuhan CMS tanpa intervensi developer, dan deadline singkat.",
      solution:
        "Membangun portal publik + admin CMS dengan modul Surat dan Klapper terintegrasi dalam satu dashboard.",
      engineeringDecision:
        "MVC CodeIgniter 4 dengan skema relasional terpisah per modul untuk skalabilitas dan audit trail sederhana.",
      responsibilities:
        "Architecture, database design, admin CRUD, authentication, SEO teknis, dan deployment production.",
      challenges:
        "Menyatukan alur administratif yang berbeda tanpa menambah beban belajar staf non-teknis.",
      lessonsLearned:
        "Admin UX yang sederhana lebih berharga daripada fitur kompleks untuk pengguna operasional harian.",
      impact: [
        { label: "Workflow", value: "Digitalized letter & student records" },
        { label: "Ops", value: "Single dashboard for staff" },
      ],
      duration: "Dec 2025 - Jan 2026",
      team: { size: 1, role: "Solo Fullstack" },
      links: {
        live: "https://sdnsunteragung12pg.sch.id/",
        github: null,
        figma: null,
      },
      sections: [
        {
          id: "core-modules",
          title: "Core Modules",
          type: "list",
          layout: "grid",
          items: [
            {
              label: "Public Portal & Company Profile",
              value:
                "Portal representasi digital yang menyajikan informasi profil sekolah, fasilitas, dan berita/artikel terkini kepada publik.",
            },
            {
              label: "Admin Dashboard (CMS)",
              value:
                "Pusat kendali dengan antarmuka intuitif untuk mengelola informasi website secara dinamis tanpa perlu intervensi kode.",
            },
            {
              label: "Manajemen Surat",
              value:
                "Modul digitalisasi alur persuratan (masuk/keluar) yang memudahkan staf tata usaha dalam pelacakan dan pengarsipan dokumen.",
            },
            {
              label: "Klapper Siswa",
              value:
                "Sistem arsip data induk siswa yang scalable, mempercepat pencarian data historis dan meminimalisir redundansi data administratif.",
            },
          ],
        },
        {
          id: "workflow",
          title: "Development Workflow",
          type: "timeline",
          layout: "timeline",
          items: [
            {
              label: "Phase 1: Architecture & Database",
              badge: "Planning",
              value:
                "• Analisis kebutuhan administratif bersama SDN Sunter Agung 12 PG.\n• Merancang skema database relasional untuk modul Surat dan Klapper.\n• Konfigurasi arsitektur MVC menggunakan CodeIgniter 4.",
            },
            {
              label: "Phase 2: Core Engineering",
              badge: "Development",
              value:
                "• Membangun Admin Dashboard dan CRUD Artikel, Profil, Data Siswa.\n• Validasi input dan manajemen sesi (Authentication).",
            },
            {
              label: "Phase 3: Security & Deployment",
              badge: "Release",
              value:
                "• Audit keamanan (CSP & HSTS), QA responsivitas, SEO teknis, deployment & caching.",
            },
          ],
        },
      ],
      techStack: [
        tech("CodeIgniter 4", "codeigniter"),
        tech("PHP", "php"),
        tech("MySQL", "mysql"),
        tech("Tailwind", "tailwind"),
        tech("JavaScript", "javascript"),
      ],
      thumbnail: "/assets/img/preview/Sadulas-Public.webp",
      gallery: [
        "/assets/img/preview/Sadulas-Public.webp",
        "/assets/img/preview/Sadulas-Dashboard.webp",
        "/assets/img/preview/Sadulas-Klapper.webp",
        "/assets/img/preview/Sadulas-SuratKeluar.webp",
        "/assets/img/preview/Sadulas-SuratMasuk.webp",
      ],
    },
  },
  {
    id: "solvera-revamp",
    data: {
      id: "solvera-revamp",
      title: "Solvera Corporate Revamp",
      industry: "Technology",
      platform: "Web",
      discipline: "UI/UX",
      client: "Solvera Global Teknologi",
      role: "UI/UX Designer",
      status: "Completed",
      order: 3,
      featured: true,
      overview: {
        title: "Project Overview",
        description:
          "Proyek ini bertujuan untuk mentransformasi identitas digital Solvera.id agar selaras dengan posisinya sebagai mitra teknologi global. Fokus utama adalah audit UI lama, merumuskan bahasa visual baru, serta memastikan IA yang optimal untuk konversi prospek bisnis.",
      },
      problem:
        "Website korporat terasa usang, inkonsisten secara visual, dan sulit menavigasi layanan utama.",
      research:
        "Heuristic evaluation, audit tipografi/navigasi, dan moodboarding arah visual profesional.",
      constraints:
        "Handoff ke developer eksternal, brand guideline yang masih longgar, dan timeline 3 bulan.",
      solution:
        "Revamp komponen UI, grid responsif, high-fidelity mockup, style guide, dan dokumentasi handoff Figma.",
      engineeringDecision:
        "Komponen-first design system ringan agar mudah diimplementasikan tanpa over-engineering.",
      responsibilities:
        "Audit, visual revamp, component library, handoff docs, Design QA.",
      challenges:
        "Menyeimbangkan modernitas visual dengan kepercayaan brand B2B.",
      lessonsLearned:
        "Dokumentasi handoff yang jelas mengurangi friction implementasi jauh lebih efektif daripada mockup saja.",
      impact: [
        { label: "Identity", value: "Modernized corporate UI" },
        { label: "Handoff", value: "Complete Figma style guide" },
      ],
      duration: "Oct 2025 - Dec 2025",
      team: { size: 2, role: "UI/UX Designer" },
      links: {
        live: "https://solvera.id",
        figma: null,
        github: null,
      },
      sections: [
        {
          id: "design-process",
          title: "Design Process",
          type: "timeline",
          layout: "timeline",
          items: [
            {
              label: "Heuristic Evaluation & Audit",
              badge: "Oct 2025",
              value:
                "• Evaluasi heuristik desain lama.\n• Identifikasi inkonsistensi navigasi & tipografi.\n• Moodboard arah visual baru.",
            },
            {
              label: "Visual Revamp & Components",
              badge: "Nov 2025",
              value:
                "• Redesign buttons, cards, inputs.\n• Grid sistem responsif.\n• Hi-fi mockup halaman utama & layanan.",
            },
            {
              label: "Handoff & Documentation",
              badge: "Dec 2025",
              value:
                "• Design handoff Figma.\n• Style guide warna & tipografi.\n• Design QA implementasi.",
            },
          ],
        },
      ],
      techStack: [
        tech("Figma", "figma"),
        tech("Design System", "design-system"),
        tech("Prototyping", "prototyping"),
        tech("Heuristic Evaluation", "research"),
        tech("Responsive Design", "responsive"),
      ],
      thumbnail: "/assets/img/preview/solvera.webp",
      gallery: [
        "/assets/img/preview/solvera-preview1.webp",
        "/assets/img/preview/solvera-preview2.webp",
        "/assets/img/preview/solvera-preview3.webp",
        "/assets/img/preview/solvera-userflow.webp",
      ],
    },
  },
  {
    id: "sialam-app",
    data: {
      id: "sialam-app",
      title: "SIALAM App",
      industry: "Outdoor / Tourism",
      platform: "Mobile",
      discipline: "UI/UX",
      client: "Bhinneka Alam Nusantara",
      role: "UI/UX Designer",
      status: "Completed",
      order: 4,
      featured: true,
      overview: {
        title: "Executive Summary",
        description:
          "SIALAM merupakan aplikasi pendaftaran pendakian gunung yang mempermudah proses administrasi bagi pendaki dan pengelola. Pengguna dapat membuat dan mengelola regu pendakian, termasuk menambahkan anggota via undangan tanpa input data manual.",
      },
      problem:
        "Pendaftaran pendakian masih fragmentasi antara proses manual dan sistem lama yang membebani admin & pendaki.",
      research:
        "Requirement gathering dengan PO & BA; validasi konsep via high-fidelity prototype.",
      constraints:
        "Ekosistem mobile-first, kebutuhan design system yang scalable, dan handoff ke multiple developers.",
      solution:
        "Design system + prototype alur regu/undangan, ekspansi ke landing web, dan dokumentasi handoff.",
      engineeringDecision:
        "Komponen reusable dan token visual agar desain tetap konsisten saat scale ke web.",
      responsibilities:
        "Discovery, design system, prototype, web landing, Design QA.",
      challenges:
        "Menjaga konsistensi visual selama iterasi panjang (2022–2024).",
      lessonsLearned:
        "Refactor design system lebih awal menghemat biaya iterasi di fase scale.",
      impact: [
        { label: "Usability", value: "25% better task completion" },
        { label: "System", value: "Scalable design system" },
      ],
      duration: "Sep 2022 - Oct 2024",
      team: { size: 4, role: "UI/UX Designer" },
      links: { live: null, github: null, figma: null },
      sections: [
        {
          id: "roadmap",
          title: "Development Roadmap",
          type: "timeline",
          layout: "timeline",
          items: [
            {
              label: "Phase 1: Discovery & Strategy",
              badge: "Sep 2022 - Mei 2023",
              value:
                "• Requirement gathering.\n• Design system & guidelines.\n• High-fidelity prototype.",
            },
            {
              label: "Phase 2: Web Ecosystem",
              badge: "Mei 2023 - Jul 2023",
              value:
                "• Landing page design.\n• Design handoff docs.\n• Design QA.",
            },
            {
              label: "Phase 3: Iteration & Scale",
              badge: "Sep 2023 - Jul 2024",
              value:
                "• Design system refactor.\n• UX improvements from test samples.\n• Navigation optimization.",
            },
          ],
        },
      ],
      techStack: [
        tech("Figma", "figma"),
        tech("Design System", "design-system"),
        tech("Prototyping", "prototyping"),
        tech("Mobile Apps", "mobile"),
      ],
      thumbnail: "/assets/img/preview/Sialam.webp",
      gallery: [
        "/assets/img/preview/Sialam-Preview-Flow.webp",
        "/assets/img/preview/Sialam-Preview-Product.webp",
      ],
    },
  },
  {
    id: "omhut-parkopi",
    data: {
      id: "omhut-parkopi",
      title: "Omhut Parkopi",
      industry: "Food & Beverage",
      platform: "Web",
      discipline: "Fullstack",
      client: "Omhut Parkopi",
      role: "Web Developer",
      status: "Completed",
      order: 5,
      featured: true,
      overview: {
        title: "Project Context",
        description:
          "Solusi digital untuk mengatasi inefisiensi operasional pada kedai kopi konvensional. Sistem mentransformasi pemesanan manual menjadi pengalaman Self-Service Kiosk berbasis web dengan sinkronisasi stok real-time.",
      },
      problem:
        "Antrian fisik dan pencatatan stok manual memperlambat layanan kedai.",
      research:
        "Observasi alur kasir & dapur; mapping kebutuhan menu, cart, dan status pesanan.",
      constraints:
        "Legacy PHP 7.4 / CodeIgniter 3, kebutuhan kiosk browser-based.",
      solution:
        "Self-service digital menu, cart async, order tracking, dan admin dashboard.",
      engineeringDecision:
        "AJAX-driven cart/order status untuk respons cepat tanpa SPA penuh.",
      responsibilities: "Fullstack implementation, admin modules, deployment.",
      challenges: "Menjaga UX kiosk sederhana di atas stack legacy.",
      lessonsLearned:
        "Optimasi alur pesan lebih berdampak daripada rewrite stack di fase awal.",
      impact: [
        { label: "Queue", value: "Reduced physical wait" },
        { label: "Stock", value: "Real-time sync" },
      ],
      duration: "4 Months",
      team: { size: 1, role: "Solo Developer" },
      links: {
        github: "https://github.com/Ndaru244/omhut",
        live: null,
      },
      sections: [
        {
          id: "architecture",
          title: "Technical Architecture",
          type: "grid",
          layout: "grid",
          items: [
            {
              label: "Core Stack",
              value:
                "• Language: PHP 7.4\n• Framework: CodeIgniter 3 MVC\n• Database: MySQL",
            },
            {
              label: "Frontend Engineering",
              value:
                "• Bootstrap 4\n• jQuery / AJAX\n• Custom CSS3 Variables",
            },
            {
              label: "Key Features",
              value:
                "• Self-Service Digital Menu\n• Real-time Shopping Cart\n• Order Status Tracking\n• Admin Dashboard",
            },
          ],
        },
      ],
      techStack: [
        tech("PHP", "php"),
        tech("CodeIgniter", "codeigniter"),
        tech("MySQL", "mysql"),
        tech("Javascript (AJAX)", "javascript"),
      ],
      thumbnail: "/assets/img/preview/Omhut.webp",
      gallery: [
        "/assets/img/preview/Omhut.webp",
        "/assets/img/preview/Omhut-Preview-1.webp",
        "/assets/img/preview/Omhut-Preview-2.webp",
      ],
    },
  },
  {
    id: "crooked-indonesia",
    data: {
      id: "crooked-indonesia",
      title: "Crooked Indonesia",
      industry: "Fashion",
      platform: "Web",
      discipline: "Backend",
      client: "Crooked Indonesia",
      role: "Web Developer",
      status: "Archived",
      order: 6,
      featured: true,
      overview: {
        title: "Project Overview",
        description:
          "Platform katalog digital untuk brand fashion lokal yang dirancang untuk skalabilitas produk tinggi. Fokus pada infrastruktur backend untuk inventaris dinamis, filtering kompleks, dan integrasi API ke frontend.",
      },
      problem:
        "Katalog produk tumbuh cepat tanpa fondasi backend yang efisien untuk filter dan inventaris.",
      research:
        "Sinkronisasi struktur data desain dengan kebutuhan frontend dan IA navigasi katalog.",
      constraints: "Kontrak 6 bulan, PHP/CodeIgniter, zero-downtime expectation.",
      solution:
        "Skema relasional + server logic untuk query produk cepat dan admin inventaris.",
      engineeringDecision:
        "Prioritaskan query performance dan maintenance rutin dibanding fitur visual baru.",
      responsibilities: "Backend architecture, design sync, monitoring & patches.",
      challenges: "Menjaga uptime sambil mengiterasi inventaris dinamis.",
      lessonsLearned:
        "Spesifikasi komponen yang siap-kode mempercepat delivery frontend secara signifikan.",
      impact: [
        { label: "Uptime", value: "Zero critical downtime" },
        { label: "Duration", value: "6 Months contract" },
      ],
      duration: "Mar 2022 - Aug 2022",
      team: { size: 3, role: "Web Developer Intern" },
      links: {
        github: "https://github.com/Ndaru244/crooked",
        live: null,
      },
      sections: [
        {
          id: "highlights",
          title: "Development Highlights",
          type: "list",
          layout: "single",
          items: [
            {
              label: "Backend Architecture",
              badge: "6 Months Contract",
              value:
                "Merancang skema database relasional dan logic server-side untuk performa query produk.",
            },
            {
              label: "Technical Design Sync",
              value:
                "• Sinkronisasi struktur data desain dengan Frontend.\n• Spesifikasi komponen & aset siap implementasi.\n• IA selaras dengan navigasi aplikasi.",
            },
            {
              label: "System Maintenance",
              value:
                "Monitoring server, patch keamanan, dan optimasi database selama kontrak aktif.",
            },
          ],
        },
      ],
      techStack: [
        tech("PHP", "php"),
        tech("CodeIgniter", "codeigniter"),
        tech("MySQL", "mysql"),
      ],
      thumbnail: "/assets/img/preview/crooked-1.webp",
      gallery: [
        "/assets/img/preview/crooked-1.webp",
        "/assets/img/preview/crooked-2.webp",
        "/assets/img/preview/crooked-3.webp",
        "/assets/img/preview/crooked-admin-1.webp",
      ],
    },
  },
  {
    id: "konter-print-helper",
    data: {
      id: "konter-print-helper",
      title: "Konter Print Helper",
      industry: "Retail / PPOB",
      platform: "Mobile",
      discipline: "Fullstack",
      client: "PPOB & Counter Owners",
      role: "Lead Developer & UI/UX Designer",
      status: "Live",
      order: 7,
      featured: true,
      overview: {
        title: "Project Overview",
        description:
          "Aplikasi utilitas untuk pemilik konter pulsa/PPOB yang mengekstrak data dari screenshot e-wallet via OCR dan memformat ulang ke layout thermal 58mm yang padat dan hemat kertas.",
      },
      problem:
        "Cetak struk dari screenshot e-wallet menghasilkan output blur dan boros kertas.",
      research:
        "Analisis bukti transaksi DANA/GoPay/SeaBank dan pola field yang dibutuhkan kasir.",
      constraints:
        "Flutter mobile, Bluetooth thermal printers, Android share intent integration.",
      solution:
        "OCR ML Kit + auto-parser + editable struk + ESC/POS Bluetooth printing.",
      engineeringDecision:
        "Method Channel untuk Share Intent native; Provider untuk state management ringan.",
      responsibilities: "Product design, Flutter engineering, hardware integration.",
      challenges:
        "Akurasi parser lintas format screenshot dan kompatibilitas printer Bluetooth.",
      lessonsLearned:
        "Editable correction layer sebelum print sangat krusial untuk kepercayaan user operasional.",
      impact: [
        { label: "Print", value: "Sharper thermal receipts" },
        { label: "Paper", value: "Optimized 58/80mm layouts" },
      ],
      duration: "Ongoing",
      team: { size: 1, role: "Lead Developer & Designer" },
      links: {
        github: "https://github.com/Ndaru244/konter-print-helper",
        live: null,
      },
      sections: [
        {
          id: "path",
          title: "Development Path",
          type: "grid",
          layout: "grid",
          items: [
            {
              label: "Smart OCR & Parser Engine",
              badge: "Phase 1",
              value:
                "• Google ML Kit OCR.\n• Auto-parser nominal/penerima.\n• Editable struk sebelum cetak.",
            },
            {
              label: "Native Integration & Hardware",
              badge: "Phase 2",
              value:
                "• Android Share Intent via Method Channel.\n• Bluetooth ESC/POS.\n• Layout 58mm & 80mm.",
            },
          ],
        },
      ],
      techStack: [
        tech("Flutter", "flutter"),
        tech("Dart", "dart"),
        tech("Google ML Kit", "mlkit"),
        tech("Android Method Channel", "android"),
        tech("Bluetooth ESC/POS", "bluetooth"),
        tech("Provider", "provider"),
      ],
      thumbnail: "/assets/img/preview/konter-print.webp",
      gallery: [
        "/assets/img/preview/home.webp",
        "/assets/img/preview/scan.webp",
        "/assets/img/preview/setting.webp",
        "/assets/img/preview/preview.webp",
        "/assets/img/preview/hasil.webp",
      ],
    },
  },
];

const PROJECT_EN_TRANSLATIONS: Record<string, ProjectTranslation> = {
  arcore: {
    industry: "Mining / Offshore",
    platform: "Web",
    discipline: "Frontend",
    client: "Arsari Tambang",
    status: "Completed",
    overview: {
      title: "Project Overview",
      description:
        "ArCore is an enterprise operations platform for client Arsari Tambang, delivered through PT Tarung Bersama Teknologi as IT vendor/consultant. Frontend contribution: UI for Data Offshore, Production & Cost, and Timesheet & Equipment with Next.js 16, React 19, and TypeScript.",
    },
    problem:
      "Client operations users needed consistent, easy-to-use interfaces for field reporting, cost views, and equipment workflows across many module pages.",
    research:
      "Mapped UI requirements with the Tarung team and client stakeholders for forms, tables, filters, and dashboards across Data Offshore, Production & Cost, and Equipment Timesheet.",
    constraints:
      "Many UI modules in one enterprise app, complex cross-page state, and a need for reusable table, form, and chart components.",
    solution:
      "Built a Next.js 16 enterprise frontend with modular UI components, Redux Toolkit state management, and interactive visualization dashboards for core operational modules.",
    engineeringDecision:
      "Used Next.js App Router with Redux Toolkit for global UI state, Axios for data fetching, and ApexCharts/ECharts for dashboard visualization.",
    responsibilities:
      "Frontend engineering for module pages, table and form components, state management, and dashboard visualization.",
    challenges:
      "Keeping UX consistency and UI performance while combining many operational flows in one frontend application.",
    lessonsLearned:
      "Clear UI module structure has more impact than visual extras in enterprise frontend delivery.",
    impact: [
      { label: "UI Modules", value: "Offshore, Cost, Equipment" },
      { label: "Stack", value: "Next.js + Redux Toolkit" },
    ],
    duration: "Jan 2026 - Apr 2026",
    team: { size: 4, role: "Frontend Engineer" },
    sections: [
      {
        id: "key-modules",
        title: "Frontend Modules",
        type: "list",
        layout: "grid",
        items: [
          {
            label: "Data Offshore UI",
            value:
              "Forms and reporting UI for LKH, LKS, and LPS, including coordinates, weather, and vessel fields for maritime/survey teams.",
          },
          {
            label: "Production & Cost UI",
            value:
              "Monitoring pages for production and cost: throughput tables, fuel/electricity usage, currency adjustments, and cost-code views.",
          },
          {
            label: "Timesheet & Equipment UI",
            value:
              "Operator timesheet and heavy-equipment status interfaces, including downtime views by reason code and equipment group.",
          },
        ],
      },
      {
        id: "tech-architecture",
        title: "Frontend Architecture",
        type: "grid",
        layout: "grid",
        items: [
          {
            label: "Core Stack",
            value: "Next.js 16 (App Router), React 19, and TypeScript.",
          },
          {
            label: "UI State & Data Fetching",
            value: "Redux Toolkit/Persist, Axios, and TanStack Table.",
          },
          {
            label: "UI & Visualization",
            value:
              "Bootstrap 5/Reactstrap, ApexCharts/ECharts, and Remix/Feather icons.",
          },
        ],
      },
    ],
  },
  "e-absensi": {
    industry: "Education",
    platform: "Web",
    discipline: "Full-stack",
    status: "Completed",
    overview: {
      title: "Project Overview",
      description:
        "E-Absensi is an extension module of Sadulas that digitizes student attendance for SDN Sunter Agung 12 PG (Jan–Feb 2026), with an offline-first approach, RBAC, and print-ready PDF reports.",
    },
    problem:
      "Attendance recording and monthly summaries were fragile on unstable networks, slow when done manually, and vulnerable to edits after lock.",
    research:
      "Mapped teacher, admin, and principal workflows for daily input, attendance locking, class-scoped permissions, and official letterheaded PDF reports.",
    constraints:
      "Must work offline, stay lightweight without a heavy framework, support multiple roles, and ship to Firebase Hosting.",
    solution:
      "Shipped an offline-first web attendance app with LocalStorage drafts, sync queue + DLQ, multi-tier RBAC, Chart.js stats, and jsPDF daily/monthly reports.",
    engineeringDecision:
      "Used modular Vanilla JS with a local Tailwind build for a small footprint, Firebase Auth/Firestore for realtime data, and Service Worker + BroadcastChannel for offline and multi-tab reliability.",
    responsibilities:
      "Product/UI flows, offline sync architecture, RBAC, teacher/admin modules, and PDF report generation.",
    challenges:
      "Keeping attendance data durable while offline and consistent after sync, including failure isolation through a Dead Letter Queue.",
    lessonsLearned:
      "Offline-first design and attendance locking matter more than extra visuals for school attendance systems.",
    impact: [
      { label: "Reliability", value: "Offline-first attendance sync" },
      { label: "Reporting", value: "Print-ready PDF exports" },
    ],
    duration: "Jan 2026 - Feb 2026",
    team: { size: 1, role: "Solo Full-stack Developer" },
    sections: [
      {
        id: "key-modules",
        title: "Key Modules",
        type: "list",
        layout: "grid",
        items: [
          {
            label: "Daily Attendance",
            value:
              "Per-class attendance input, realtime draft autosave, and lock controls to prevent retrospective edits.",
          },
          {
            label: "RBAC Access",
            value:
              "Super Admin, Admin/Duty Teacher, Teacher, and Viewer roles with class-scoped access via kelas_ids.",
          },
          {
            label: "PDF Reports",
            value:
              "Daily and monthly PDF reports via jsPDF/AutoTable with dynamic letterhead and principal signature fields.",
          },
        ],
      },
      {
        id: "tech-architecture",
        title: "Architecture",
        type: "grid",
        layout: "grid",
        items: [
          {
            label: "Frontend",
            value: "HTML5, modular Vanilla JS, Tailwind CSS, Lucide Icons, and Chart.js.",
          },
          {
            label: "Data & Auth",
            value: "Firebase Auth, Cloud Firestore, Storage, and Hosting.",
          },
          {
            label: "Offline Reliability",
            value: "LocalStorage drafts, Sync Queue + DLQ, Service Worker, and BroadcastChannel.",
          },
        ],
      },
    ],
  },
  sadulas: {
    industry: "Education",
    platform: "Web",
    discipline: "Full-stack",
    status: "Completed",
    overview: {
      title: "Executive Summary",
      description:
        "Sadulas is an integrated school information system with a public portal and admin dashboard for content, correspondence, and student records. The platform was later extended with E-Absensi for offline-first digital attendance.",
    },
    problem:
      "School staff managed website content, correspondence, and student records through disconnected manual processes, making retrieval slow and error-prone.",
    research:
      "Requirement-gathering sessions with administration staff and teachers, followed by workflow mapping for incoming and outgoing correspondence and student archives.",
    constraints:
      "PHP and CodeIgniter 4, shared hosting, a CMS usable without developer assistance, and a short delivery timeline.",
    solution:
      "A public portal and admin CMS with integrated correspondence and student-record modules in one dashboard.",
    engineeringDecision:
      "A CodeIgniter 4 MVC architecture with separate relational schemas per module for scalability and a straightforward audit trail.",
    responsibilities:
      "Architecture, database design, admin CRUD, authentication, technical SEO, quality assurance, and production deployment.",
    challenges:
      "Unifying different administrative workflows without increasing the learning burden for non-technical staff.",
    lessonsLearned:
      "A simple admin experience creates more value than complex features for daily operational users.",
    impact: [
      { label: "Workflow", value: "Digitized records" },
      { label: "Operations", value: "One staff dashboard" },
    ],
    duration: "Dec 2025 - Jan 2026",
    team: { size: 1, role: "Solo Full-stack Developer" },
    sections: [
      {
        id: "core-modules",
        title: "Core Modules",
        type: "list",
        layout: "grid",
        items: [
          {
            label: "Public Portal",
            value: "School profile, facilities, news, and public information.",
          },
          {
            label: "Admin CMS",
            value: "A central dashboard for managing content without code changes.",
          },
          {
            label: "Correspondence",
            value: "Tracking and archiving for incoming and outgoing letters.",
          },
          {
            label: "Student Records",
            value: "Searchable and scalable student master-data archives.",
          },
        ],
      },
      {
        id: "workflow",
        title: "Development Workflow",
        type: "timeline",
        layout: "timeline",
        items: [
          {
            label: "Architecture & Database",
            badge: "Planning",
            value: "Requirements analysis, relational schema design, and MVC setup.",
          },
          {
            label: "Core Engineering",
            badge: "Development",
            value: "Admin dashboard, CRUD modules, validation, and authentication.",
          },
          {
            label: "Security & Deployment",
            badge: "Release",
            value: "Security hardening, responsive QA, technical SEO, and deployment.",
          },
        ],
      },
    ],
  },
  "solvera-revamp": {
    industry: "Technology",
    platform: "Web",
    discipline: "UI/UX",
    status: "Completed",
    overview: {
      title: "Project Overview",
      description:
        "A corporate website transformation aligning Solvera.id's digital identity with its position as a global technology partner through UI auditing, a new visual language, and clearer information architecture.",
    },
    problem:
      "The corporate website felt dated, visually inconsistent, and made core services difficult to navigate.",
    research:
      "Heuristic evaluation, typography and navigation audits, and moodboarding for a professional visual direction.",
    constraints:
      "Handoff to an external development team, an evolving brand guideline, and a three-month timeline.",
    solution:
      "A refreshed component system, responsive grid, high-fidelity screens, style guide, and detailed Figma handoff.",
    engineeringDecision:
      "A lightweight component-first design system that developers could implement without unnecessary complexity.",
    responsibilities:
      "UX audit, visual redesign, component library, handoff documentation, and design QA.",
    challenges:
      "Balancing a modern visual direction with the trust expected from a B2B technology brand.",
    lessonsLearned:
      "Clear handoff documentation reduces implementation friction more effectively than mockups alone.",
    impact: [
      { label: "Identity", value: "Modern corporate UI" },
      { label: "Handoff", value: "Documented design system" },
    ],
    duration: "Oct 2025 - Dec 2025",
    sections: [
      {
        id: "design-process",
        title: "Design Process",
        type: "timeline",
        layout: "timeline",
        items: [
          {
            label: "Heuristic Evaluation & Audit",
            badge: "Oct 2025",
            value: "Audited navigation, typography, consistency, and visual direction.",
          },
          {
            label: "Visual Redesign & Components",
            badge: "Nov 2025",
            value: "Redesigned core components, responsive grids, and high-fidelity pages.",
          },
          {
            label: "Handoff & Documentation",
            badge: "Dec 2025",
            value: "Prepared Figma handoff, style guidelines, and implementation QA.",
          },
        ],
      },
    ],
  },
  "sialam-app": {
    industry: "Outdoor / Tourism",
    platform: "Mobile",
    discipline: "UI/UX",
    status: "Completed",
    overview: {
      title: "Executive Summary",
      description:
        "SIALAM simplifies mountain-climbing registration for hikers and operators. Users can create teams and invite verified members without repeatedly entering personal data.",
    },
    problem:
      "Climbing registration was fragmented between manual processes and a legacy system, burdening both administrators and hikers.",
    research:
      "Requirements gathering with the Product Owner and Business Analyst, followed by concept validation through high-fidelity prototypes.",
    constraints:
      "A mobile-first ecosystem, a scalable design system, and handoff across multiple developers.",
    solution:
      "A reusable design system and prototypes for team creation and invitations, extended to a supporting web landing page.",
    engineeringDecision:
      "Reusable components and visual tokens maintained consistency while scaling from mobile to web.",
    responsibilities:
      "Discovery, design system, prototyping, web landing design, handoff, and design QA.",
    challenges:
      "Maintaining visual consistency throughout a long product iteration cycle.",
    lessonsLearned:
      "Refactoring the design system early substantially reduces iteration costs during scale-up.",
    impact: [
      { label: "Usability", value: "25% better task completion" },
      { label: "System", value: "Scalable design system" },
    ],
    duration: "Sep 2022 - Oct 2024",
    sections: [
      {
        id: "roadmap",
        title: "Development Roadmap",
        type: "timeline",
        layout: "timeline",
        items: [
          {
            label: "Discovery & Strategy",
            badge: "Sep 2022 - May 2023",
            value: "Requirements, design-system foundations, and high-fidelity prototypes.",
          },
          {
            label: "Web Ecosystem",
            badge: "May 2023 - Jul 2023",
            value: "Landing page, design handoff, and implementation QA.",
          },
          {
            label: "Iteration & Scale",
            badge: "Sep 2023 - Jul 2024",
            value: "Design-system refactor, usability improvements, and navigation optimization.",
          },
        ],
      },
    ],
  },
  "omhut-parkopi": {
    industry: "Food & Beverage",
    platform: "Web",
    discipline: "Full-stack",
    status: "Completed",
    overview: {
      title: "Project Context",
      description:
        "A web-based self-service kiosk that replaces manual ordering, reduces physical queues, and synchronizes ingredient stock in real time.",
    },
    problem:
      "Physical queues and manual stock tracking slowed down café service.",
    research:
      "Observed cashier and kitchen workflows and mapped requirements for menus, carts, and order status.",
    constraints:
      "Legacy PHP 7.4 and CodeIgniter 3 with a browser-based kiosk requirement.",
    solution:
      "A self-service menu, asynchronous cart, order tracking, and administration dashboard.",
    engineeringDecision:
      "AJAX-based cart and order updates delivered responsive behavior without the cost of a full SPA rewrite.",
    responsibilities: "Full-stack implementation, administration modules, and deployment.",
    challenges: "Keeping the kiosk flow simple while working with a legacy stack.",
    lessonsLearned:
      "Improving the ordering flow created more immediate value than rewriting the technology stack.",
    impact: [
      { label: "Queue", value: "Reduced waiting time" },
      { label: "Stock", value: "Real-time synchronization" },
    ],
    duration: "4 Months",
    sections: [
      {
        id: "architecture",
        title: "Technical Architecture",
        type: "grid",
        layout: "grid",
        items: [
          {
            label: "Core Stack",
            value: "PHP 7.4, CodeIgniter 3 MVC, and MySQL.",
          },
          {
            label: "Frontend",
            value: "Bootstrap 4, jQuery/AJAX, and custom CSS variables.",
          },
          {
            label: "Key Features",
            value: "Digital menu, real-time cart, order tracking, and admin dashboard.",
          },
        ],
      },
    ],
  },
  "crooked-indonesia": {
    industry: "Fashion",
    platform: "Web",
    discipline: "Backend",
    status: "Archived",
    overview: {
      title: "Project Overview",
      description:
        "A scalable digital catalog for a local fashion brand, focused on dynamic inventory, complex filtering, and reliable frontend API integration.",
    },
    problem:
      "The product catalog grew without an efficient backend foundation for filtering and inventory.",
    research:
      "Aligned the design data structure with frontend requirements and catalog navigation.",
    constraints: "A six-month contract, PHP/CodeIgniter, and zero-downtime expectations.",
    solution:
      "A relational schema and server-side query layer for fast product lookup and inventory administration.",
    engineeringDecision:
      "Prioritized query performance and operational maintenance over non-essential visual features.",
    responsibilities: "Backend architecture, design synchronization, monitoring, and patches.",
    challenges: "Maintaining uptime while iterating on dynamic inventory.",
    lessonsLearned:
      "Implementation-ready component specifications significantly accelerate frontend delivery.",
    impact: [
      { label: "Uptime", value: "Zero critical downtime" },
      { label: "Duration", value: "6-month contract" },
    ],
    duration: "Mar 2022 - Aug 2022",
    sections: [
      {
        id: "highlights",
        title: "Development Highlights",
        type: "list",
        layout: "single",
        items: [
          {
            label: "Backend Architecture",
            badge: "6 Months",
            value: "Designed relational schemas and server logic for fast product queries.",
          },
          {
            label: "Technical Design Sync",
            value: "Aligned data, implementation-ready assets, and information architecture.",
          },
          {
            label: "System Maintenance",
            value: "Server monitoring, security patches, and database optimization.",
          },
        ],
      },
    ],
  },
  "konter-print-helper": {
    industry: "Retail / PPOB",
    platform: "Mobile",
    discipline: "Full-stack",
    status: "Live",
    overview: {
      title: "Project Overview",
      description:
        "A utility app for mobile-counter and PPOB owners that extracts e-wallet transaction data with OCR and reformats it into compact, paper-efficient 58mm thermal receipts.",
    },
    problem:
      "Printing e-wallet screenshots produced blurry receipts and wasted thermal paper.",
    research:
      "Analyzed DANA, GoPay, and SeaBank transaction receipts and the fields cashiers need.",
    constraints:
      "Flutter mobile, Bluetooth thermal printers, and Android Share Intent integration.",
    solution:
      "ML Kit OCR, automatic parsing, editable receipts, and ESC/POS Bluetooth printing.",
    engineeringDecision:
      "Used a Method Channel for native Share Intent integration and Provider for lightweight state management.",
    responsibilities: "Product design, Flutter engineering, parser logic, and hardware integration.",
    challenges:
      "Maintaining parser accuracy across screenshot formats and Bluetooth printer models.",
    lessonsLearned:
      "An editable correction step before printing is essential for operational user trust.",
    impact: [
      { label: "Print", value: "Sharper receipts" },
      { label: "Paper", value: "Optimized 58/80mm layouts" },
    ],
    duration: "Ongoing",
    sections: [
      {
        id: "path",
        title: "Development Path",
        type: "grid",
        layout: "grid",
        items: [
          {
            label: "OCR & Parser Engine",
            badge: "Phase 1",
            value: "ML Kit OCR, automatic field parsing, and editable receipts.",
          },
          {
            label: "Native & Hardware Integration",
            badge: "Phase 2",
            value: "Android Share Intent, Bluetooth ESC/POS, and 58/80mm layouts.",
          },
        ],
      },
    ],
  },
};

const STATUS_ID: Record<string, string> = {
  Completed: "Selesai",
  Live: "Live",
  Archived: "Diarsipkan",
  "In Progress": "Berjalan",
};

for (const project of PROJECTS_DATA) {
  const data = project.data;
  data.translations = {
    id: {
      title: data.title,
      industry: data.industry,
      platform: data.platform,
      discipline: data.discipline,
      client: data.client,
      role: data.role,
      status: STATUS_ID[data.status] || data.status,
      overview: data.overview,
      sections: data.sections,
      problem: data.problem,
      research: data.research,
      constraints: data.constraints,
      solution: data.solution,
      engineeringDecision: data.engineeringDecision,
      responsibilities: data.responsibilities,
      challenges: data.challenges,
      lessonsLearned: data.lessonsLearned,
      impact: data.impact,
      duration: data.duration,
      team: data.team,
    },
    en: PROJECT_EN_TRANSLATIONS[project.id],
  };
}
