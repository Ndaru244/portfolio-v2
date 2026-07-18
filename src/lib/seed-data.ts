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

export const EXPERIENCE_DATA: Omit<Experience, "id">[] = [
  {
    company: "SDN Sunter Agung 12 PG",
    role: "Web Developer",
    period: "Des 2025 - Jan 2026",
    description:
      "Engineered an integrated school information system (Sadulas) featuring a public portal and a secure admin dashboard. Developed scalable modules for dynamic content management, digital letter processing, and student record tracking (Klapper), significantly optimizing administrative workflows and reducing cognitive load for staff.",
    type: "Contract",
    order: 0,
    translations: {
      id: {
        role: "Web Developer",
        period: "Des 2025 - Jan 2026",
        description:
          "Mengembangkan sistem informasi sekolah terintegrasi Sadulas yang mencakup portal publik, dashboard admin, manajemen surat digital, dan arsip data siswa untuk menyederhanakan alur kerja staf.",
      },
      en: {
        role: "Web Developer",
        period: "Dec 2025 - Jan 2026",
        description:
          "Engineered Sadulas, an integrated school information system with a public portal, secure admin dashboard, digital correspondence, and student records to streamline staff workflows.",
      },
    },
  },
  {
    company: "PT. Solvera Global Teknologi",
    role: "UI/UX Designer",
    period: "Oct 2025 - Dec 2025",
    description:
      "Executed a comprehensive revamp of the solvera.id corporate website. Modernized the visual identity, optimized mobile responsiveness, and improved information architecture to enhance user engagement and site performance.",
    type: "work",
    order: 1,
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
  {
    company: "PT. Bhinneka Alam Nusantara",
    role: "UI/UX Designer",
    period: "Sep 2022 - Oct 2024",
    description:
      "Designed mobile UI patterns, created interactive prototypes, and conducted usability testing which improved task completion by 25%. Led the design system scalability.",
    type: "work",
    order: 2,
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
  {
    company: "Crooked Indonesia",
    role: "Web Developer Intern",
    period: "Mar 2022 - Aug 2022",
    description:
      "Developed responsive catalog website using PHP (CodeIgniter) and Bootstrap. Zero critical downtime during the 6-month contract.",
    type: "internship",
    order: 3,
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
];

export const CERTIFICATES_DATA: Omit<Certificate, "id">[] = [
  {
    title: "Google UX Design Certificate",
    issuer: "Coursera / Google",
    date: "2023",
    credentialUrl: "https://coursera.org",
    order: 0,
    translations: {
      id: { title: "Sertifikat Google UX Design" },
      en: { title: "Google UX Design Certificate" },
    },
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    order: 1,
    translations: {
      id: { title: "Desain Web Responsif" },
      en: { title: "Responsive Web Design" },
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
    company: "PT. Bhinneka Alam Nusantara",
    quote:
      "Ndaru delivered clear design systems and prototypes that made engineering handoff significantly faster.",
    order: 0,
  },
];

export const BLOGS_DATA: Omit<BlogPost, "id">[] = [
  {
    title: "Designing for Administrative Workflows",
    slug: "designing-for-administrative-workflows",
    excerpt: "Lessons from building school information systems with real staff constraints.",
    content: "Draft post — manage via CMS. Public blog routes arrive in a later phase.",
    published: false,
    order: 0,
  },
];

export const MEDIA_DATA: Omit<MediaItem, "id">[] = [
  {
    name: "Portfolio OG Image",
    url: "/assets/img/preview/preview.webp",
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
      id: "projects",
      label: "Projects",
      href: "#projects",
      order: 0,
      translations: { id: { label: "Proyek" }, en: { label: "Projects" } },
    },
    {
      id: "about",
      label: "About",
      href: "#about",
      order: 1,
      translations: { id: { label: "Tentang" }, en: { label: "About" } },
    },
    {
      id: "experience",
      label: "Experience",
      href: "#experience",
      order: 2,
      translations: { id: { label: "Pengalaman" }, en: { label: "Experience" } },
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
  showCertificates: true,
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
  ogImage: "/assets/img/preview/preview.webp",
  canonicalBase: "https://ndaru-portfolio.web.app",
  twitterHandle: "@ndaruls",
  locale: "id_ID",
};

export const RESUME_DATA: Resume = {
  options: [
    { id: "uiux", label: "UI/UX Designer", url: "/cv-ui.pdf" },
    {
      id: "software-engineer",
      label: "Software Engineer",
      url: "/cv-dev.pdf",
    },
  ],
  updatedAt: "2026-01-01",
};

export const PROJECTS_DATA: { id: string; data: Project }[] = [
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
      order: 0,
      featured: true,
      overview: {
        title: "Executive Summary",
        description:
          "Sadulas adalah sistem informasi sekolah terintegrasi yang mencakup portal publik dan dashboard admin. Platform ini dirancang untuk mendigitalkan manajemen konten, persuratan administrasi, dan arsip data induk siswa (Klapper), sehingga mengurangi beban kognitif staf dan mengoptimalkan efisiensi operasional harian.",
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
      duration: "2 Months",
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
      client: "PT Solvera Global Teknologi",
      role: "UI/UX Designer",
      status: "Completed",
      order: 1,
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
      duration: "3 Months",
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
      client: "PT. Bhinneka Alam Nusantara",
      role: "UI/UX Designer",
      status: "Completed",
      order: 2,
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
      duration: "24 Months",
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
      order: 3,
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
      order: 4,
      featured: false,
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
      duration: "6 Months",
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
      order: 5,
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
  sadulas: {
    industry: "Education",
    platform: "Web",
    discipline: "Full-stack",
    status: "Completed",
    overview: {
      title: "Executive Summary",
      description:
        "Sadulas is an integrated school information system combining a public portal and an admin dashboard. It digitizes content management, administrative correspondence, and student master records to streamline daily operations.",
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
    duration: "2 Months",
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
    duration: "3 Months",
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
    duration: "24 Months",
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
    duration: "6 Months",
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
