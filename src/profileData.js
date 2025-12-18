// src/profileData.js

// Gambar Placeholder (Ganti link ini dengan gambar Anda nanti di folder src/assets/)
// Contoh: import fireImg from './assets/fire-detection.png'; lalu gunakan 'image: fireImg'

import placeholderFire1 from './assets/fire1.png';
import placeholderFire2 from './assets/fire2.png';
import placeholderMap from './assets/land.png';
import placeholderSDLC from './assets/sdlc.png';
import placeholderFarm from './assets/petelur.png';

export const profileData = {
  header: {
    name: "Fadillah Siva",
    title: "Lecturer | Computer Vision Researcher | AI & LLM Specialist",
    location: "Indonesia",
    emailWork: "fadillahsiva.work@gmail.com",
    emailResearch: "fadillahsiva.research@gmail.com",
    linkedin: "https://linkedin.com/in/fadillah-siva",

  },
  about: {
    summary: "I am an Academic and Computer Vision Researcher with a strong foundation in Feature Extraction and Pattern Recognition, currently serving as a Lecturer at Universitas Sebelas Maret (UNS). I graduated Cum Laude with a Master’s degree in Computer Science from Universitas Gadjah Mada (UGM).",
    vision: "My research portfolio focuses on Hybrid Feature Extraction (Color, Texture, Motion) and Deep Learning architectures, demonstrated through publications in IEEE and SPIE. I am now seeking to transition these advanced methodologies into the domain of Medical Image Analysis to develop interpretative AI models for Computer-Aided Diagnosis (CAD)."
  },
  interests: [
    { title: "Medical Computer Vision", desc: "Histopathology image analysis, cell segmentation." },
    { title: "Multi-modal Learning", desc: "Fusion of visual data (MRI/CT) with clinical text (LLMs)." },
    { title: "Hybrid Feature Extraction", desc: "Robust pattern recognition using handcrafted & deep features." }
  ],
  experience: [
    {
      role: "Lecturer",
      company: "Universitas Sebelas Maret (UNS)",
      period: "Sep 2025 – Present",
      desc: "Delivering lectures in AI & Computer Vision. Conducting advanced research and supervising student theses."
    },
    {
      role: "Research Assistant",
      company: "Universitas Gadjah Mada (UGM)",
      period: "Feb 2025 – Present",
      desc: "Conducting experimental research on hybrid feature extraction methods and preparing manuscripts for international conferences."
    },
    {
      role: "Chief Executive Officer (CEO)",
      company: "Ekata Tech Indonesia",
      period: "Feb 2022 – Feb 2023",
      desc: "Strategic Leadership & R&D Management. Formulated long-term business strategies and spearheaded innovation efforts."
    },
    {
      role: "Network Area Intern",
      company: "PT Telkom Indonesia (Riau)",
      period: "Feb 2022 – May 2022",
      desc: "Developed a GIS-based website to optimize network monitoring processes."
    },
    {
      role: "Laboratory Assistant",
      company: "UIN Maulana Malik Ibrahim",
      period: "2021 – 2022",
      desc: "Facilitated practical sessions for Data Structures, Info Systems, and OOP. Mentored students on complex concepts."
    }
  ],
  education: [
    {
      degree: "Master of Computer Science (M.Cs.)",
      school: "Universitas Gadjah Mada (UGM)",
      period: "2024 – 2025",
      grade: "GPA: 3.91/4.00 (Cum Laude)",
      note: "Focus: Computer Vision & AI Research"
    },
    {
      degree: "Bachelor of Informatics (S.Kom.)",
      school: "UIN Maulana Malik Ibrahim Malang",
      period: "2019 – 2023",
      grade: "GPA: 3.71/4.00 (Cum Laude)"
    }
  ],
  publications: {
    international: [
      {
        title: "Real-Time Fire Detection Using Hybrid Feature Extraction: Color, Texture, and Motion Analysis",
        publisher: "IEEE (MVA 2025)",
        doi: "10.23919/MVA65244.2025.11175077",
        image: placeholderFire1 // Tambahkan gambar
      },
      {
        title: "Real-Time Fire Detection Using Hybrid Feature Extraction: Color, Texture, and Motion Analysis",
        publisher: "IEICE Proceedings",
        doi: "10.34385/proc.93.P1-7",
        image: placeholderFire2 // Tambahkan gambar
      },
      {
        title: "Feature Fusion for Advancing Land-Use Scene Classification",
        publisher: "SPIE (ICMVA 2025)",
        doi: "10.1117/12.3078902",
        image: placeholderMap // Tambahkan gambar
      }
    ],
    national: [
      {
        title: "Survei Metode-Metode Software Development Life Cycle dengan Metode Systematic Literature Review",
        publisher: "ILKOMNIKA Journal",
        doi: "10.28926/ilkomnika.v5i2.447",
        image: placeholderSDLC // Tambahkan gambar
      },
      {
        title: "Pemodelan Proses Bisnis Peternakan Ayam Petelur",
        publisher: "Jurnal INFORMATIKA",
        doi: "10.35316/jimi.v7i1.49-64",
        image: placeholderFarm // Tambahkan gambar
      }
    ]
  },
  certificates: [
    {
      category: "Professional Projects & Challenges",
      items: [
        { title: "Data Science Challenge with Python", issuer: "CT CORP" },
        { title: "Data Engineer Challenge with SQL", issuer: "Xeratic" },
        { title: "Data Analyst Project: Business Decision Research", issuer: "DQLab" },
        { title: "Project: Eksplorasi Data Ritel menggunakan R", issuer: "DQLab" },
        { title: "Analisis Data COVID-19 di Dunia & ASEAN", issuer: "DQLab" },
        { title: "Crypto Analysis Project", issuer: "DQLab" }
      ]
    },
    {
      category: "Applied Data Science Tracks",
      items: [
        { title: "Data Science in Finance: Credit Risk Analysis", issuer: "DQLab" },
        { title: "Data Science in Finance: Dimension Reduction", issuer: "DQLab" },
        { title: "Customer Churn Prediction using Machine Learning", issuer: "DQLab" },
        { title: "Data Science in Telco: Data Cleansing", issuer: "DQLab" },
        { title: "Market Basket Analysis (Retail System)", issuer: "DQLab" },
        { title: "Customer Segmentation with Python (Part 1 & 2)", issuer: "DQLab" },
        { title: "A Walk Into Sensory Science", issuer: "DQLab" }
      ]
    },
    {
      category: "Python Specialization",
      items: [
        { title: "Machine Learning with Python for Beginner", issuer: "DQLab" },
        { title: "Basic Feature Discovering for Machine Learning", issuer: "DQLab" },
        { title: "Python for Data Professional Beginner (Part 1-3)", issuer: "DQLab" },
        { title: "Data Visualization with Matplotlib (Part 1 & 2)", issuer: "DQLab" },
        { title: "Data Manipulation with Pandas (Part 1 & 2)", issuer: "DQLab" },
        { title: "Storytelling dengan Visualisasi menggunakan Python", issuer: "DQLab" },
        { title: "Mengolah Data Teks Unstructured dengan REGEX", issuer: "DQLab" },
        { title: "Mengenal Model Regresi Linear Pada Python", issuer: "DQLab" }
      ]
    },
    {
      category: "R Language Specialization",
      items: [
        { title: "R for Data Professional (Part 1, 2, & 3)", issuer: "DQLab" },
        { title: "Introduction to Data Science with R", issuer: "DQLab" },
        { title: "Advanced Data Visualization with ggplot2", issuer: "DQLab" },
        { title: "Data Visualization using Plotnine", issuer: "DQLab" },
        { title: "Linear Regression Model with R", issuer: "DQLab" },
        { title: "Bekerja dengan Data Teks pada R", issuer: "DQLab" },
        { title: "Data Preparation & Visualization in Data Science using R", issuer: "DQLab" }
      ]
    },
    {
      category: "SQL & Database Management",
      items: [
        { title: "Certificate Database Management", issuer: "Coding Studio" },
        { title: "Fundamental SQL (SELECT, FUNCTION, GROUP BY)", issuer: "DQLab" },
        { title: "Fundamental SQL (INNER JOIN, UNION)", issuer: "DQLab" },
        { title: "Menggunakan Subquery & Operator Logika pada SQL", issuer: "DQLab" },
        { title: "Menggunakan ORDER BY untuk Mengurutkan Data", issuer: "DQLab" },
        { title: "Mengolah Data Tanggal dan Jam Dasar dengan MySQL", issuer: "DQLab" }
      ]
    },
    {
      category: "Statistics & Analytics Foundations",
      items: [
        { title: "Certificate Intro To Data Analytics", issuer: "RevoU" },
        { title: "Data Analysis Fundamental & Tools", issuer: "MySkill" },
        { title: "Introduction to Data and Data Science", issuer: "365 Data Science" },
        { title: "Certificate of Data Science Fundamental & Intermediate", issuer: "Coding Studio" },
        { title: "Statistik: Ukuran Data (Pemusatan & Variasi)", issuer: "DQLab" },
        { title: "Statistik: Populasi, Sampel, & Distribusi Normal", issuer: "DQLab" },
        { title: "Mengenal Visualisasi Data Statistik", issuer: "DQLab" }
      ]
    },
    {
      category: "IT, Web & Network Security",
      items: [
        { title: "Certificate of Cyber Security Fundamental", issuer: "Coding Studio" },
        { title: "Certificate of Computer Network Fundamental", issuer: "Coding Studio" },
        { title: "Certificate of Digital Marketing Fundamental", issuer: "Coding Studio" },
        { title: "UI Fundamental Design", issuer: "Coding Studio" },
        { title: "Java Script & Advanced Java Script", issuer: "Programming Hub" },
        { title: "IT-Basics", issuer: "Programming Hub" }
      ]
    }
  ],
  projects: [
    "Data Science Challenge with Python – CT CORP",
    "Data Engineer Challenge with SQL – Xeratic",
    "Customer Churn Prediction (Machine Learning) – DQLab",
    "Data Analyst Project: Business Decision Research – DQLab",
    "Project: Retail Data Exploration using R – DQLab",
    "Data Science Project: COVID-19 Analysis (Global & ASEAN)"
  ],
  skills: [
    "Computer Vision", "Deep Learning", "Python (PyTorch/Scikit-Learn)",
    "R (ggplot2)", "SQL", "Strategic Management", "Lecturing"
  ],
  organization: [
    {
      role: "Chairman",
      name: "Himpunan Mahasiswa Pascasarjana Ilmu Komputer (HIMPASIKOM)",
      period: "2025 – Present"
    },
    {
      role: "Secretary",
      name: "Himpunan Mahasiswa Pascasarjana Ilmu Komputer (HIMPASIKOM)",
      period: "2024 – 2025"
    }
  ]
};