// Centralized content model — sourced from Vihari's current resume (Data Engineer, 2026).
// Edit this file to update personal info, stats, journey (work + education), skills, or certifications.
// Projects live separately in ./projects.js so new project entries don't require touching UI components.

export const personal = {
  name: "Vihari Reddy Aleti",
  firstName: "Vihari",
  lastName: "Reddy Aleti",
  badge: "DATA ENGINEERING • ANALYSIS • BUSINESS INTELLIGENCE",
  role: "Data Engineer",
  headline: "Data Engineering, Analytics & Business Intelligence",
  eduLine: "M.S. in Information Technology, Belhaven University (May 2026) · GPA 3.86/4.0",
  location: "Dallas, TX",
  email: "viharireddy2@gmail.com",
  linkedin: "https://www.linkedin.com/in/vihari-reddy-389b38449/",
  github: "https://github.com/viharireddy2-byte",
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,
  summary: "I build data pipelines, analytics models, and dashboards with checks that make their results easier to trust. My projects span a 50M-event AWS lakehouse, product and purchase analytics, and BigQuery–Looker reporting. My professional background in business and data consulting includes KPI validation, migration UAT, and resolving reporting discrepancies.",

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
        "icon": "\u00b7",
        "name": "Python"
      },
      {
        "icon": "\u00b7",
        "name": "SQL"
      },
      {
        "icon": "\u00b7",
        "name": "Java"
      },
      {
        "icon": "\u00b7",
        "name": "R"
      },
      {
        "icon": "\u00b7",
        "name": "Scala"
      },
      {
        "icon": "\u00b7",
        "name": "DAX"
      },
      {
        "icon": "\u00b7",
        "name": "Power Query (M)"
      }
    ]
  },
  {
    "label": "Data Engineering",
    "skills": [
      {
        "icon": "\u00b7",
        "name": "Apache Spark"
      },
      {
        "icon": "\u00b7",
        "name": "PySpark"
      },
      {
        "icon": "\u00b7",
        "name": "dbt"
      },
      {
        "icon": "\u00b7",
        "name": "Airflow"
      },
      {
        "icon": "\u00b7",
        "name": "Kafka"
      },
      {
        "icon": "\u00b7",
        "name": "Flink"
      },
      {
        "icon": "\u00b7",
        "name": "Databricks"
      },
      {
        "icon": "\u00b7",
        "name": "Delta Lake"
      },
      {
        "icon": "\u00b7",
        "name": "Apache Iceberg"
      },
      {
        "icon": "\u00b7",
        "name": "Prefect"
      }
    ]
  },
  {
    "label": "Analysis & Modeling",
    "skills": [
      {
        "icon": "\u00b7",
        "name": "Pandas"
      },
      {
        "icon": "\u00b7",
        "name": "NumPy"
      },
      {
        "icon": "\u00b7",
        "name": "Exploratory Analysis"
      },
      {
        "icon": "\u00b7",
        "name": "Statistical Analysis"
      },
      {
        "icon": "\u00b7",
        "name": "Hypothesis Testing"
      },
      {
        "icon": "\u00b7",
        "name": "A/B Testing"
      },
      {
        "icon": "\u00b7",
        "name": "Dimensional Modeling"
      },
      {
        "icon": "\u00b7",
        "name": "Star Schema"
      },
      {
        "icon": "\u00b7",
        "name": "Data Validation"
      }
    ]
  },
  {
    "label": "BI & Visualization",
    "skills": [
      {
        "icon": "\u00b7",
        "name": "Power BI"
      },
      {
        "icon": "\u00b7",
        "name": "Tableau"
      },
      {
        "icon": "\u00b7",
        "name": "Looker"
      },
      {
        "icon": "\u00b7",
        "name": "Looker Studio"
      },
      {
        "icon": "\u00b7",
        "name": "Amazon QuickSight"
      },
      {
        "icon": "\u00b7",
        "name": "Excel"
      }
    ]
  },
  {
    "label": "Databases & Cloud",
    "skills": [
      {
        "icon": "\u00b7",
        "name": "BigQuery"
      },
      {
        "icon": "\u00b7",
        "name": "Snowflake"
      },
      {
        "icon": "\u00b7",
        "name": "Redshift"
      },
      {
        "icon": "\u00b7",
        "name": "PostgreSQL"
      },
      {
        "icon": "\u00b7",
        "name": "MySQL"
      },
      {
        "icon": "\u00b7",
        "name": "DuckDB"
      },
      {
        "icon": "\u00b7",
        "name": "AWS (S3, EMR)"
      },
      {
        "icon": "\u00b7",
        "name": "Athena"
      },
      {
        "icon": "\u00b7",
        "name": "Microsoft Fabric"
      },
      {
        "icon": "\u00b7",
        "name": "Azure Event Hubs"
      }
    ]
  },
  {
    "label": "Delivery & Applied AI",
    "skills": [
      {
        "icon": "\u00b7",
        "name": "Docker"
      },
      {
        "icon": "\u00b7",
        "name": "Git"
      },
      {
        "icon": "\u00b7",
        "name": "GitHub Actions"
      },
      {
        "icon": "\u00b7",
        "name": "Terraform"
      },
      {
        "icon": "\u00b7",
        "name": "Scikit-learn"
      },
      {
        "icon": "\u00b7",
        "name": "LLMs"
      },
      {
        "icon": "\u00b7",
        "name": "RAG"
      },
      {
        "icon": "\u00b7",
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
