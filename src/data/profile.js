// Centralized content model — sourced from Vihari's current resume (Data Engineer, 2026).
// Edit this file to update personal info, stats, journey (work + education), skills, or certifications.
// Projects live separately in ./projects.js so new project entries don't require touching UI components.

export const personal = {
  name: "Vihari Reddy Aleti",
  firstName: "Vihari",
  lastName: "Reddy Aleti",
  badge: "DATA ENGINEERING • LAKEHOUSE • STREAMING",
  role: "Data Engineer",
  headline: "Data Engineer | Python, SQL, Spark",
  eduLine: "M.S. in Information Technology, Belhaven University (May 2026) · GPA 3.86/4.0",
  location: "Dallas, TX",
  relocation: "Open to relocation",
  email: "aleti.viharireddy@gmail.com",
  linkedin: "https://www.linkedin.com/in/viharireddy2/",
  github: "https://github.com/viharireddy2-byte",
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,
  summary:
    "Recent M.S. IT graduate with hands-on experience in Python, SQL, PySpark, Databricks, and AWS. I've built a PostgreSQL-to-Databricks pipeline with full loads and CDC ingesting 2M+ records, a Kafka-Flink streaming pipeline with stateful anomaly detection, and an ETL platform with data-quality checks and a read-only LLM SQL interface. Brings prior expereince, as a Consultant, where i traced reporting discrepancies to their sources and built validation rules and dashboards",
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
  { value: "2M+", label: "Records ingested across 4 tables (Lakeflow)" },
  { value: "3", label: "End-to-end data engineering projects" },
  { value: "400+", label: "Defects caught in pre-launch migration UAT" },
  { value: "3.86", label: "GPA, M.S. Information Technology" },
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
      "Led UAT for the migration of 2M+ customer records to a cloud warehouse; caught 400+ defects pre-launch, with zero critical issues in the first 90 days post-cutover.",
      "Investigated 230 reporting discrepancies in six months, traced 52% to inconsistent business definitions, and drove remediation that reduced repeat exceptions by 34%.",
      "Cut Weekly Business Review preparation by 4 hours per week by building QuickSight dashboards for operational trend analysis.",
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
      "Reduced reporting defects by 35% and shortened analytics turnaround by one week per cycle by establishing source-to-report mappings and data validation rules.",
      "Standardized calculation logic for 10+ enterprise KPIs by reconciling source data with performance reports, resolving conflicting metrics across stakeholder teams.",
      "Reduced client-requested data corrections from 11 to 6 per month by implementing missing-entry and duplicate-entry checks across eight business workflows.",
    ],
  },
  {
    id: "bs-ce",
    type: "education",
    start: "Aug 2016",
    end: "Sep 2020",
    duration: "4 Years",
    title: "Bachelor of Science in Computer Engineering",
    org: "Jawaharlal Nehru Technological University — Hyderabad, India",
  },
];

// Technical Skills grid — grouped to mirror the resume, each skill paired with a
// small emoji glyph (kept to generic emoji rather than brand logo assets).
export const skillCategories = [
  {
    label: "Languages",
    skills: [
      { icon: "🐍", name: "Python" },
      { icon: "🗄️", name: "SQL" },
      { icon: "☕", name: "Java" },
      { icon: "🔺", name: "Scala" },
    ],
  },
  {
    label: "Data Processing & Transformation",
    skills: [
      { icon: "⚡", name: "Apache Spark" },
      { icon: "🔥", name: "PySpark" },
      { icon: "🧱", name: "Databricks" },
      { icon: "🔧", name: "dbt" },
      { icon: "🐼", name: "Pandas" },
      { icon: "🐻‍❄️", name: "Polars" },
    ],
  },
  {
    label: "Streaming & Orchestration",
    skills: [
      { icon: "📡", name: "Apache Kafka" },
      { icon: "🌊", name: "Apache Flink" },
      { icon: "🌬️", name: "Apache Airflow" },
      { icon: "🔀", name: "Prefect" },
    ],
  },
  {
    label: "Data Platforms & Databases",
    skills: [
      { icon: "🧱", name: "Databricks" },
      { icon: "🔺", name: "Delta Lake" },
      { icon: "❄️", name: "Snowflake" },
      { icon: "🐘", name: "PostgreSQL" },
      { icon: "🐬", name: "MySQL" },
      { icon: "🦆", name: "DuckDB" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: "☁️", name: "AWS (S3, EMR)" },
      { icon: "🐳", name: "Docker" },
      { icon: "☸️", name: "Kubernetes" },
      { icon: "🌿", name: "Git" },
      { icon: "🚀", name: "GitHub Actions" },
    ],
  },
  {
    label: "BI & Visualization",
    skills: [
      { icon: "📊", name: "Power BI" },
      { icon: "📈", name: "QuickSight" },
    ],
  },
  {
    label: "Machine Learning & GenAI",
    skills: [
      { icon: "🤖", name: "Scikit-learn" },
      { icon: "✨", name: "LLMs" },
      { icon: "📚", name: "RAG" },
      { icon: "💬", name: "Prompt Engineering" },
    ],
  },
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
    date: "March 2026",
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
