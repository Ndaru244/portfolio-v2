import { Project } from "@/types/portfolio";
// export const PROFILE_DATA = {
//   id: "main_profile",
//   data: {
//     name: "Ndaru L Santosa",
//     role: "UI/UX Designer & Web Developer",
//     location: "Tangerang, Indonesia",
//     status: "Available for Hire",
//     bio_short:
//       "Bridging the gap between creative design (Figma) and technical feasibility (Code).",
//     bio_long:
//       "I love digging into tough user problems with solid research and real data. Because I've been full-stack myself, I can design beautiful intuitive interfaces that actually make sense to build—clean handoffs, scalable systems, and faster delivery.",
//     socials: {
//       github: "https://github.com/Ndaru244",
//       linkedin: "https://linkedin.com/in/ndaru-langgeng-santosa-2b926b1a6/",
//       dribbble: "https://dribbble.com/ndaru244",
//       email: "mailto:ndarulanggeng110@gmail.com",
//       phone: "tel:+6285693784773",
//     },
//     resume_url: "/cv.pdf",
//     avatar_url: "/assets/img/My-Avatar.png",
//   },
// };

// export const SKILLS_DATA = [
//   // UX Proficiency (With Percentage)
//   {
//     name: "Prototyping",
//     category: "ux",
//     percentage: 98,
//     level: "Master",
//     order: 1,
//   },
//   {
//     name: "Wireframing",
//     category: "ux",
//     percentage: 90,
//     level: "Expert",
//     order: 2,
//   },
//   {
//     name: "User Research",
//     category: "ux",
//     percentage: 80,
//     level: "Advanced",
//     order: 3,
//   },
//   {
//     name: "Usability Testing",
//     category: "ux",
//     percentage: 67,
//     level: "Intermediate",
//     order: 4,
//   },

//   // Design Modules
//   { name: "Figma", category: "design", order: 1 },
//   { name: "UI Design", category: "design", order: 2 },
//   { name: "Design System", category: "design", order: 3 },
//   { name: "Interaction Design", category: "design", order: 4 },

//   // Logic Core
//   { name: "HTML/CSS", category: "tech", order: 1 },
//   { name: "Next.js", category: "tech", order: 2 },
//   { name: "PHP", category: "tech", order: 3 },
//   { name: "CodeIgniter", category: "tech", order: 4 },
//   { name: "MySQL", category: "tech", order: 5 },
//   { name: "Flutter", category: "tech", order: 6 },
// ];

// export const EXPERIENCE_DATA = [
//   {
//     company: "PT. Bhinneka Alam Nusantara",
//     role: "UI/UX Designer",
//     period: "Sep 2022 - Oct 2024",
//     description:
//       "Designed mobile UI patterns, created interactive prototypes, and conducted usability testing which improved task completion by 25%. Led the design system scalability.",
//     type: "work",
//     order: 1,
//   },
//   {
//     company: "Crooked Indonesia",
//     role: "Web Developer Intern",
//     period: "Mar 2022 - Aug 2022",
//     description:
//       "Developed responsive catalog website using PHP (CodeIgniter) and Bootstrap. Zero critical downtime during the 6-month contract.",
//     type: "internship",
//     order: 2,
//   },
// ];

export const PROJECTS_DATA: { id: string; data: Project }[] = [
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
      overview_desc: `SIALAM adalah inisiatif transformasi digital untuk meningkatkan standar keselamatan pendakian di Indonesia.

Proyek ini menjembatani kesenjangan informasi antara pengelola taman nasional dan pendaki melalui ekosistem aplikasi mobile yang intuitif, fitur pelacakan darurat (SOS), dan navigasi offline.`,

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
      thumbnail: "/assets/img/preview/Sialam.png",
      gallery: [
        "/assets/img/preview/Sialam-Preview-Flow.png",
        "/assets/img/preview/Sialam-Preview-Product.png",
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
      thumbnail: "/assets/img/preview/Omhut.png",
      gallery: [
        "/assets/img/preview/Omhut.png",
        "/assets/img/preview/Omhut-Preview-1.png",
        "/assets/img/preview/Omhut-Preview-2.png",
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

Fokus utama pengembangan adalah menciptakan infrastruktur backend yang mampu menangani manajemen inventaris dinamis, filtering produk yang kompleks, dan integrasi API yang mulus ke sisi Frontend.`,

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
      thumbnail: "/assets/img/preview/crooked-1.png",
      gallery: [
        "/assets/img/preview/crooked-1.png",
        "/assets/img/preview/crooked-2.png",
        "/assets/img/preview/crooked-3.png",
        "/assets/img/preview/crooked-admin-1.png",
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
      thumbnail: "/assets/img/preview/solvera.png",
      gallery: [
        "/assets/img/preview/solvera-preview1.png",
        "/assets/img/preview/solvera-preview2.png",
        "/assets/img/preview/solvera-preview3.png",
        "/assets/img/preview/solvera-userflow.png",
      ],
      demo_url: "https://solvera.id",
      repo_url: null,
    },
  },
];
