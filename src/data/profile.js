// Centralized content model — sourced from Vihari's current resume (Data Engineer, 2026).
// Edit this file to update personal info, stats, journey (work + education), skills, or certifications.
// Projects live separately in ./projects.js so new project entries don't require touching UI components.

export const personal = {
  name: "Vihari Reddy",
  firstName: "Vihari",
  lastName: "Reddy",
  badge: "DATA ENGINEERING • ANALYSIS • BUSINESS INTELLIGENCE",
  role: "Data Engineer",
  headline: "Data Engineering, Analytics & Business Intelligence",
  eduLine: "M.S. in Information Technology, Belhaven University (May 2026) · GPA 3.86/4.0",
  location: "Dallas, TX",
  email: "viharireddy2@gmail.com",
  linkedin: "https://www.linkedin.com/in/vihari-reddy-389b38449/",
  github: "https://github.com/viharireddy2-byte",
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,
  summary: "I build data pipelines, analytics models, and dashboards with checks that make their results easier to trust. My projects span a 50M-event AWS lakehouse, product and purchase analytics, and BigQuery–Looker reporting.",

};

export const heroSkillChips = [
  "Python",
  "SQL",
  "Apache Spark",
  "Databricks",
  "Kafka",
  "Airflow",
  "dbt",
  "AWS",
  "Docker",
];

// Headline numbers shown under the hero. Every figure comes directly from the resume.
export const heroStats = [
  { value: "50M", label: "Events processed in 25 minutes · AWS project" },
  { value: "12.6M", label: "Events processed in 30 minutes · streaming project" },
  { value: "400+", label: "Defects identified before migration launch · UAT" },
  { value: "3.86/4.0", label: "M.S. Information Technology GPA" },
];

// A single reverse-chronological timeline mixing work experience and education.
// `highlights` renders as a bullet list inside each card.
export const journey = [
  {
    id: "ms-it",
    type: "education",
    start: "Jan 2025",
    end: "May 2026",
    duration: "Graduated",
    title: "Master of Science in Information Technology",
    org: "Belhaven University — Jackson, MS",
    highlights: ["GPA: 3.86 / 4.0"],
  },
  {
    id: "executive-consultant",
    type: "work",
    start: "Dec 2022",
    end: "Dec 2024",
    duration: "2 Years",
    title: "Executive Consultant, Business & Data",
    org: "IT World Web — Bengaluru, India",
    highlights: [
      "Built an AI-assisted QC validator for 25 leadership KPIs, cutting weekly validation from 2 hours to under 2 minutes through definition-based checks and AI-generated exception summaries.",
      "Led UAT for migration of 2M+ customer records to a cloud warehouse, identifying 400+ defects before launch, with zero critical issues in the first 90 days after cutover.",
      "Engineered a funnel analytics pipeline to identify conversion bottlenecks and analyze 500+ manual-review rules, driving automation that reduced review volume by 25%.",
    ],
  },
  {
    id: "associate-consultant",
    type: "work",
    start: "Apr 2021",
    end: "Nov 2022",
    duration: "1 Yr 8 Mos",
    title: "Associate Consultant, Business & Data",
    org: "Careernet Technologies — Bengaluru, India",
    highlights: [
      "Investigated 230 reporting discrepancies in six months, traced 52% to inconsistent business definitions, and drove remediation that reduced repeat exceptions by 34%.",
      "Engineered Amazon QuickSight dashboards for KPI tracking and operational reporting, reducing weekly Business Review preparation by 12 hours.",
      "Defined source-to-target mappings and data validation rules, reducing reporting defects by 35% and shortening analytics turnaround by one week per cycle.",
    ],
  },
  {
    id: "bs-ce",
    type: "education",
    start: "Aug 2016",
    end: "Sep 2020",
    duration: "4 Years",
    title: "Bachelor of Science in Computer Science",
    org: "Jawaharlal Nehru Technological University — Hyderabad, India",
  },
];

// Technical Skills grid — grouped to mirror the resume, each skill paired with a
// small emoji glyph (kept to generic emoji rather than brand logo assets).
export const skillCategories = [
  {
    "label": "Languages",
    "skills": [
      {
        "icon": "🐍",
        "name": "Python"
      },
      {
        "icon": "🗄️",
        "name": "SQL"
      },
      {
        "icon": "☕",
        "name": "Java"
      },
      {
        "icon": "📐",
        "name": "R"
      },
      {
        "icon": "🔺",
        "name": "Scala"
      },
      {
        "icon": "🧮",
        "name": "DAX"
      },
      {
        "icon": "🔄",
        "name": "Power Query (M)"
      }
    ]
  },
  {
    "label": "Data Engineering",
    "skills": [
      {
        "icon": "⚡",
        "name": "Apache Spark"
      },
      {
        "icon": "🔥",
        "name": "PySpark"
      },
      {
        "icon": "🔧",
        "name": "dbt"
      },
      {
        "icon": "🌬️",
        "name": "Airflow"
      },
      {
        "icon": "📡",
        "name": "Kafka"
      },
      {
        "icon": "🌊",
        "name": "Flink"
      },
      {
        "icon": "🧱",
        "name": "Databricks"
      },
      {
        "icon": "🔺",
        "name": "Delta Lake"
      },
      {
        "icon": "🧊",
        "name": "Apache Iceberg"
      },
      {
        "icon": "🔀",
        "name": "Prefect"
      }
    ]
  },
  {
    "label": "Analysis & Modeling",
    "skills": [
      {
        "icon": "🐼",
        "name": "Pandas"
      },
      {
        "icon": "🔢",
        "name": "NumPy"
      },
      {
        "icon": "🔎",
        "name": "Exploratory Analysis"
      },
      {
        "icon": "📊",
        "name": "Statistical Analysis"
      },
      {
        "icon": "🧪",
        "name": "Hypothesis Testing"
      },
      {
        "icon": "⚖️",
        "name": "A/B Testing"
      },
      {
        "icon": "🧩",
        "name": "Dimensional Modeling"
      },
      {
        "icon": "⭐",
        "name": "Star Schema"
      },
      {
        "icon": "✅",
        "name": "Data Validation"
      }
    ]
  },
  {
    "label": "BI & Visualization",
    "skills": [
      {
        "icon": "📊",
        "name": "Power BI"
      },
      {
        "icon": "📈",
        "name": "Tableau"
      },
      {
        "icon": "👁️",
        "name": "Looker"
      },
      {
        "icon": "📉",
        "name": "Looker Studio"
      },
      {
        "icon": "📈",
        "name": "Amazon QuickSight"
      },
      {
        "icon": "📗",
        "name": "Excel"
      }
    ]
  },
  {
    "label": "Databases & Cloud",
    "skills": [
      {
        "icon": "🔍",
        "name": "BigQuery"
      },
      {
        "icon": "❄️",
        "name": "Snowflake"
      },
      {
        "icon": "🔴",
        "name": "Redshift"
      },
      {
        "icon": "🐘",
        "name": "PostgreSQL"
      },
      {
        "icon": "🐬",
        "name": "MySQL"
      },
      {
        "icon": "🦆",
        "name": "DuckDB"
      },
      {
        "icon": "☁️",
        "name": "AWS (S3, EMR)"
      },
      {
        "icon": "🏛️",
        "name": "Athena"
      },
      {
        "icon": "🧵",
        "name": "Microsoft Fabric"
      },
      {
        "icon": "📨",
        "name": "Azure Event Hubs"
      }
    ]
  },
  {
    "label": "Delivery & Applied AI",
    "skills": [
      {
        "icon": "🐳",
        "name": "Docker"
      },
      {
        "icon": "🌿",
        "name": "Git"
      },
      {
        "icon": "🚀",
        "name": "GitHub Actions"
      },
      {
        "icon": "🏗️",
        "name": "Terraform"
      },
      {
        "icon": "🤖",
        "name": "Scikit-learn"
      },
      {
        "icon": "✨",
        "name": "LLMs"
      },
      {
        "icon": "📚",
        "name": "RAG"
      },
      {
        "icon": "💬",
        "name": "Prompt Engineering"
      }
    ]
  }
];

export const certifications = [
  {
    name: "Analytical SQL for Developers",
    issuer: "Oracle",
    date: "July 2026",
  },
  {
    name: "Data Engineering on AWS Foundations",
    issuer: "AWS",
    date: "April 2026",
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Training" },
  { id: "contact", label: "Contact" },
];
