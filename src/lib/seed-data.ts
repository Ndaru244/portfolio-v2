import { Project } from "@/types/portfolio";

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
  },
};

export const SKILLS_DATA = [
  // UX Proficiency (With Percentage)
  {
    name: "Prototyping",
    category: "ux",
    percentage: 98,
    level: "Master",
    order: 1,
  },
  {
    name: "Wireframing",
    category: "ux",
    percentage: 90,
    level: "Expert",
    order: 2,
  },
  {
    name: "User Research",
    category: "ux",
    percentage: 80,
    level: "Advanced",
    order: 3,
  },
  {
    name: "Usability Testing",
    category: "ux",
    percentage: 67,
    level: "Intermediate",
    order: 4,
  },

  // Design Modules
  { name: "Figma", category: "design", order: 1 },
  { name: "UI Design", category: "design", order: 2 },
  { name: "Design System", category: "design", order: 3 },
  { name: "Interaction Design", category: "design", order: 4 },

  // Logic Core
  { name: "HTML/CSS", category: "tech", order: 1 },
  { name: "Next.js", category: "tech", order: 2 },
  { name: "PHP", category: "tech", order: 3 },
  { name: "CodeIgniter", category: "tech", order: 4 },
  { name: "MySQL", category: "tech", order: 5 },
  { name: "Flutter", category: "tech", order: 6 },
];

export const EXPERIENCE_DATA = [
  {
    company: "SDN Sunter Agung 12 PG",
    role: "Web Developer",
    period: "Des 2025 - Jan 2026",
    description:
      "Engineered an integrated school information system (Sadulas) featuring a public portal and a secure admin dashboard. Developed scalable modules for dynamic content management, digital letter processing, and student record tracking (Klapper), significantly optimizing administrative workflows and reducing cognitive load for staff.",
    type: "Contract",
    order: 0,
  },
  {
    company: "PT. Solvera Global Teknologi",
    role: "UI/UX Designer",
    period: "Oct 2025 - Dec 2025",
    description:
      "Executed a comprehensive revamp of the solvera.id corporate website. Modernized the visual identity, optimized mobile responsiveness, and improved information architecture to enhance user engagement and site performance.",
    type: "work",
    order: 1,
  },
  {
    company: "PT. Bhinneka Alam Nusantara",
    role: "UI/UX Designer",
    period: "Sep 2022 - Oct 2024",
    description:
      "Designed mobile UI patterns, created interactive prototypes, and conducted usability testing which improved task completion by 25%. Led the design system scalability.",
    type: "work",
    order: 2,
  },
  {
    company: "Crooked Indonesia",
    role: "Web Developer Intern",
    period: "Mar 2022 - Aug 2022",
    description:
      "Developed responsive catalog website using PHP (CodeIgniter) and Bootstrap. Zero critical downtime during the 6-month contract.",
    type: "internship",
    order: 3,
  },
];

export const PROJECTS_DATA: { id: string; data: Project }[] = [
  {
    id: "sadulas",
    data: {
      id: "sadulas",
      title: "Sadulas",
      category: "School Information System (SIS)",
      client: "SDN Sunter Agung 12 PG",
      role: "Web Developer",
      status: "Completed",
      order: 0,
      overview_label: "Executive Summary",
      overview_desc: `Sadulas adalah sistem informasi sekolah terintegrasi yang mencakup portal publik dan dashboard admin. Platform ini dirancang untuk mendigitalkan manajemen konten, persuratan administrasi, dan arsip data induk siswa (Klapper), sehingga mengurangi beban kognitif staf dan mengoptimalkan efisiensi operasional harian.`,

      sections: [
        {
          title: "Core Modules",
          type: "list",
          items: [
            {
              label: "Public Portal & Company Profile",
              value: "Portal representasi digital yang menyajikan informasi profil sekolah, fasilitas, dan berita/artikel terkini kepada publik."
            },
            {
              label: "Admin Dashboard (CMS)",
              value: "Pusat kendali dengan antarmuka intuitif untuk mengelola informasi website secara dinamis tanpa perlu intervensi kode."
            },
            {
              label: "Manajemen Surat",
              value: "Modul digitalisasi alur persuratan (masuk/keluar) yang memudahkan staf tata usaha dalam pelacakan dan pengarsipan dokumen."
            },
            {
              label: "Klapper Siswa",
              value: "Sistem arsip data induk siswa yang scalable, mempercepat pencarian data historis dan meminimalisir redundansi data administratif."
            }
          ],
        },
        {
          title: "Development Workflow",
          type: "timeline",
          items: [
            {
              label: "Phase 1: Architecture & Database",
              badge: "Planning",
              value: `• Analisis kebutuhan administratif (Requirement Gathering) bersama SDN Sunter Agung 12 PG.
• Merancang skema database relasional untuk modul Surat dan Klapper.
• Konfigurasi arsitektur MVC menggunakan CodeIgniter 4.`,
            },
            {
              label: "Phase 2: Core Engineering",
              badge: "Development",
              value: `• Membangun fungsionalitas Admin Dashboard untuk manajemen alur kerja sistem dan pengolahan data administratif secara terpusat.
• Implementasi modul CRUD untuk Artikel, Profil, dan Data Siswa.
• Menerapkan validasi input dan manajemen sesi (Authentication).`,
            },
            {
              label: "Phase 3: Security & Deployment",
              badge: "Release",
              value: `• Audit keamanan jaringan (implementasi CSP & optimasi HSTS).
• Pengujian (QA) untuk memastikan responsivitas UI dan fungsionalitas di berbagai perangkat.
• Konfigurasi teknis SEO untuk meningkatkan visibilitas dan indeksasi portal sekolah pada mesin pencari.
• Deployment ke production server (Niagahoster) dan optimasi caching .htaccess.`,
            },
          ],
        },
      ],

      tech_stack: ["CodeIgniter 4", "PHP", "MySQL", "Tailwind", "JavaScript"],
      thumbnail: "/assets/img/preview/Sadulas-Public.webp",
      gallery: [
        "/assets/img/preview/Sadulas-Public.webp",
        "/assets/img/preview/Sadulas-Dashboard.webp",
        "/assets/img/preview/Sadulas-Klapper.webp",
        "/assets/img/preview/Sadulas-SuratKeluar.webp",
        "/assets/img/preview/Sadulas-SuratMasuk.webp",
      ],
      demo_url: "https://sdnsunteragung12pg.sch.id/",
      repo_url: null,
    },
  },
  {
    id: "sialam-app",
    data: {
      id: "sialam-app",
      title: "SIALAM App",
      category: "UI/UX",

      client: "PT. Bhinneka Alam Nusantara",
      role: "UI/UX Designer",
      status: "Completed",
      order: 2,
      overview_label: "Executive Summary",
      overview_desc: `SIALAM merupakan aplikasi pendaftaran pendakian gunung yang mempermudah proses administrasi bagi pendaki dan pengelola.

Aplikasi ini memungkinkan pengguna untuk membuat dan mengelola regu pendakian secara efisien, termasuk menambahkan anggota tanpa perlu input data manual. Penambahan anggota dapat dilakukan melalui fitur undangan (invite) kepada sesama pengguna SIALAM yang sudah terverifikasi, sehingga proses menjadi lebih cepat, akurat, dan terintegrasi.`,

      sections: [
        {
          title: "Development Roadmap",
          type: "timeline",
          items: [
            {
              label: "Phase 1: Discovery & Strategy",
              badge: "Sep 2022 - Mei 2023",
              value: `• Sesi Requirement Gathering bersama Product Owner & Business Analyst.
• Merumuskan Design System dan Guidelines untuk menjaga konsistensi visual.
• Mengembangkan High-Fidelity Prototype untuk validasi konsep awal.`,
            },
            {
              label: "Phase 2: Web Ecosystem",
              badge: "Mei 2023 - Jul 2023",
              value: `• Ekspansi desain ke platform Web (Landing Page).
• Menyusun dokumentasi "Design Handoff" yang komprehensif untuk tim Developer.
• Melakukan Design QA (Quality Assurance) untuk memastikan implementasi sesuai piksel.`,
            },
            {
              label: "Phase 3: Iteration & Scale",
              badge: "Sep 2023 - Jul 2024",
              value: `• Refactoring Design System untuk skalabilitas jangka panjang.
• Peningkatan Usability (UX) berdasarkan sample data uji joba.
• Optimasi alur navigasi untuk mengurangi cognitive load pengguna.`,
            },
          ],
        },
      ],

      tech_stack: ["Figma", "Design System", "Prototyping", "Mobile Apps"],
      thumbnail: "/assets/img/preview/Sialam.webp",
      gallery: [
        "/assets/img/preview/Sialam-Preview-Flow.webp",
        "/assets/img/preview/Sialam-Preview-Product.webp",
      ],
      demo_url: null,
      repo_url: null,
    },
  },

  {
    id: "omhut-parkopi",
    data: {
      id: "omhut-parkopi",
      title: "Omhut Parkopi",
      category: "Self-Service Web App",

      client: "Omhut Parkopi",
      role: "Web Developer",
      status: "Completed",
      order: 4,
      overview_label: "Project Context",
      overview_desc: `Solusi digital untuk mengatasi inefisiensi operasional pada kedai kopi konvensional.

Sistem ini mentransformasi proses pemesanan manual menjadi pengalaman "Self-Service Kiosk" berbasis web. Hasilnya adalah pengurangan antrian fisik secara signifikan dan sinkronisasi stok bahan baku secara real-time.`,

      sections: [
        {
          title: "Technical Architecture",
          type: "grid",
          items: [
            {
              label: "Core Stack",
              value: `• Language: PHP 7.4 (Legacy Support)
• Framework: CodeIgniter 3 MVC
• Database: MySQL (Relational Design)`,
            },
            {
              label: "Frontend Engineering",
              value: `• Responsive Layout: Bootstrap 4
• Async Operations: jQuery / AJAX
• Styling: Custom CSS3 Variables`,
            },
            {
              label: "Key Features",
              value: `• Self-Service Digital Menu
• Real-time Shopping Cart Logic
• Order Status Tracking System
• Comprehensive Admin Dashboard`,
            },
          ],
        },
      ],

      tech_stack: ["PHP", "CodeIgniter", "MySQL", "Javascript (AJAX)"],
      thumbnail: "/assets/img/preview/Omhut.webp",
      gallery: [
        "/assets/img/preview/Omhut.webp",
        "/assets/img/preview/Omhut-Preview-1.webp",
        "/assets/img/preview/Omhut-Preview-2.webp",
      ],
      demo_url: null,
      repo_url: "https://github.com/Ndaru244/omhut",
    },
  },

  {
    id: "crooked-indonesia",
    data: {
      id: "crooked-indonesia",
      title: "Crooked Indonesia",
      category: "E-Catalog Website",

      client: "Crooked Indonesia",
      role: "Web Developer",
      status: "Archived",
      order: 5,
      overview_label: "Project Overview",
      overview_desc: `Platform katalog digital untuk brand fashion lokal yang dirancang untuk skalabilitas produk tinggi.

Fokus utama pengembangan adalah menciptakan infrastruktur backend yang mampu menangani manajemen inventaris dinamis, filtering produk yang kompleks, and integrasi API yang mulus ke sisi Frontend.`,

      sections: [
        {
          title: "Development Highlights",
          type: "list",
          items: [
            {
              label: "Backend Architecture",
              badge: "6 Months Contract",
              value:
                "Merancang skema database relasional dan logic server-side untuk memastikan performa query produk yang cepat dan akurat.",
            },
            {
              label: "Technical Design Sync",
              value:
                `• Melakukan sinkronisasi struktur data desain dengan kebutuhan tim Frontend.
• Menyiapkan spesifikasi komponen dan aset visual yang siap diimplementasikan langsung ke dalam kode.
• Memastikan Information Architecture (IA) selaras dengan alur navigasi aplikasi.`,
            },
            {
              label: "System Maintenance",
              value:
                "Melakukan monitoring server rutin, patch keamanan, dan optimasi database selama periode kontrak aktif.",
            },
          ],
        },
      ],

      tech_stack: ["PHP", "CodeIgniter", "MySQL"],
      thumbnail: "/assets/img/preview/crooked-1.webp",
      gallery: [
        "/assets/img/preview/crooked-1.webp",
        "/assets/img/preview/crooked-2.webp",
        "/assets/img/preview/crooked-3.webp",
        "/assets/img/preview/crooked-admin-1.webp",
      ],
      demo_url: null,
      repo_url: "https://github.com/Ndaru244/crooked",
    },
  },

  {
    id: "solvera-revamp",
    data: {
      id: "solvera-revamp",
      title: "Solvera Corporate Revamp",
      category: "UI/UX",

      client: "PT Solvera Global Teknologi",
      role: "UI/UX Designer",
      status: "Completed",
      order: 1,
      overview_label: "Project Overview",
      overview_desc: `Proyek ini bertujuan untuk mentransformasi identitas digital Solvera.id agar selaras dengan posisinya sebagai mitra teknologi global. 

Fokus utama saya adalah melakukan audit terhadap User Interface yang lama, merumuskan bahasa visual baru yang lebih modern, serta memastikan Information Architecture (IA) yang optimal untuk meningkatkan konversi prospek bisnis.`,

      sections: [
        {
          title: "Design Process",
          type: "timeline",
          items: [
            {
              label: "Heuristic Evaluation & Audit",
              badge: "Oct 2025",
              value:
                `• Menganalisis kelemahan pada desain web lama melalui evaluasi heuristik.
• Mengidentifikasi masalah pada konsistensi navigasi dan keterbacaan (typography).
• Menyusun moodboard untuk menentukan arah visual baru yang profesional.`,
            },
            {
              label: "Visual Revamp & Components",
              badge: "Nov 2025",
              value:
                `• Merancang ulang UI komponen (buttons, cards, inputs) dengan fokus pada kebersihan visual.
• Menerapkan grid sistem yang presisi untuk memastikan responsivitas antar perangkat.
• Membuat High-Fidelity mockup untuk halaman utama dan layanan utama.`,
            },
            {
              label: "Handoff & Documentation",
              badge: "Dec 2025",
              value: `• Menyiapkan dokumentasi Design Handoff yang detail di Figma untuk tim Developer.
• Menyusun panduan gaya (Style Guide) termasuk palet warna dan tipografi korporat.
• Melakukan peninjauan akhir (Design QA) guna memastikan implementasi sesuai dengan rancangan desain.`,
            },
          ],
        },
      ],

      tech_stack: ["Figma", "Design System", "Prototyping", "Heuristic Evaluation", "Responsive Design"],
      thumbnail: "/assets/img/preview/solvera.webp",
      gallery: [
        "/assets/img/preview/solvera-preview1.webp",
        "/assets/img/preview/solvera-preview2.webp",
        "/assets/img/preview/solvera-preview3.webp",
        "/assets/img/preview/solvera-userflow.webp",
      ],
      demo_url: "https://solvera.id",
      repo_url: null,
    },
  },

  {
    id: "konter-print-helper",
    data: {
      id: "konter-print-helper",
      title: "Konter Print Helper",
      category: "Mobile App",

      client: "PPOB & Counter Owners",
      role: "Lead Developer & UI/UX Designer",
      status: "Live",
      order: 5,
      overview_label: "Project Overview",
      overview_desc: `Konter Print Helper adalah aplikasi utilitas cerdas yang dirancang khusus untuk pemilik konter pulsa dan PPOB. Aplikasi ini menjembatani celah antara bukti transaksi digital (E-Wallet) dengan kebutuhan struk fisik yang profesional.

Masalah utama yang diselesaikan adalah rendahnya kualitas cetak gambar (blur) dan pemborosan kertas pada layout standar Android. Dengan mengimplementasikan teknologi OCR (Optical Character Recognition), aplikasi ini mampu mengekstraksi data teks dari screenshot secara presisi dan memformat ulang ke dalam layout thermal 58mm yang padat dan hemat biaya.`,

      sections: [
        {
          title: "Development Path",
          type: "grid",
          items: [
            {
              label: "Smart OCR & Parser Engine",
              badge: "Phase 1",
              value:
                `• Mengintegrasikan Google ML Kit untuk ekstraksi teks dari screenshot E-Wallet dengan akurasi tinggi.
• Membangun sistem Auto-Parser untuk memisahkan data sensitif (Nominal, Penerima) dari teks sampah secara otomatis.
• Mengimplementasikan fitur Editable Struk untuk koreksi manual sebelum proses pencetakan.`,
            },
            {
              label: "Native Integration & Hardware",
              badge: "Phase 2",
              value:
                `• Mengembangkan Android Share Intent (Method Channel) agar aplikasi dapat menerima data langsung dari tombol "Share" aplikasi pihak ketiga (DANA, GoPay, SeaBank).
• Mengintegrasikan protokol Bluetooth ESC/POS guna mendukung berbagai merek printer thermal Bluetooth universal.
• Melakukan optimasi layout khusus kertas 58mm & 80mm untuk meminimalkan whitespace.`,
            },
          ],
        },
      ],

      tech_stack: [
        "Flutter",
        "Dart",
        "Google ML Kit",
        "Android Method Channel",
        "Bluetooth ESC/POS",
        "Provider (State Management)"
      ],
      thumbnail: "/assets/img/preview/konter-print.webp",
      gallery: [
        "/assets/img/preview/home.webp",
        "/assets/img/preview/scan.webp",
        "/assets/img/preview/setting.webp",
        "/assets/img/preview/preview.webp",
        "/assets/img/preview/hasil.webp",
      ],
      demo_url: null,
      repo_url: "https://github.com/Ndaru244/konter-print-helper",
    },
  },
];
