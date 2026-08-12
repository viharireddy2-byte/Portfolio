// Centralized content model — all real information from Vihari's resume.
// Edit this file to update personal info, journey (work + education), skills, or certifications.
// Projects live separately in ./projects.js so new project entries don't require touching UI components.

export const personal = {
  name: "Vihari Reddy Aleti",
  firstName: "Vihari",
  lastName: "Reddy Aleti",
  badge: "DATA ENGINEERING • ETL PIPELINES • CLOUD",
  role: "Data Engineer",
  headline: "Data Engineer | ETL & Cloud Pipelines",
  eduLine: "MS in Information Technology, Belhaven University (Graduating Apr 2026)",
  location: "Dallas, TX",
  relocation: "Open to relocation",
  email: "aleti.viharireddy@gmail.com",
  linkedin: "https://www.linkedin.com/in/viharireddy2/",
  github: "https://github.com/viharireddy2-byte",
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,
  summary:
    "I build metadata-driven ETL pipelines and CDC ingestion frameworks that turn raw, inconsistent data into reliable, analytics-ready tables. My work spans Python, SQL, and Apache Spark, alongside designing and deploying data warehouses, orchestration, and cloud infrastructure. Recently, I've worked on self-healing lakehouse platforms and WAL-based CDC sync frameworks built for production reliability. I'm actively seeking full-time roles in Data Engineering, Analytics Engineering, or Cloud Data Platforms.",
};

export const heroSkillChips = [
  "Python",
  "SQL",
  "Apache Spark",
  "Apache Airflow",
  "dbt",
  "AWS",
  "Docker",
  "LLM / RAG",
];

// A single reverse-chronological timeline mixing work experience and education —
// mirrors the reference site's "Journey" section. The oldest entry (degree)
// is marked `origin: true` to receive the filled highlight-card treatment.
export const journey = [
  {
    id: "ms-it",
    type: "education",
    start: "Jan 2025",
    end: "May 2026",
    duration: "In progress",
    title: "Master of Science in Information Technology",
    org: "Belhaven University — Mississippi",
    coursework: [
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Software Engineering",
      "Distributed Systems",
      "Data Mining",
      "Artificial Intelligence",
      "Web Technologies",
    ],
  },
  {
    id: "executive-consultant",
    type: "work",
    start: "Dec 2022",
    end: "Dec 2024",
    duration: "2 Years",
    title: "Executive Consultant",
    org: "IT World Web — Bangalore, India",
    description:
      "Analyzed 10K+ operational records across 5 business functions to map bottlenecks and improve efficiency by 40%. Standardized 10+ enterprise KPIs, improving reporting accuracy and strategic planning.",
  },
  {
    id: "associate-consultant",
    type: "work",
    start: "Apr 2021",
    end: "Nov 2022",
    duration: "1.5 Years",
    title: "Associate Consultant",
    org: "Careernet Technologies — Bangalore, India",
    description:
      "Built executive dashboards consolidating operational metrics for faster performance tracking and leadership visibility. Investigated data discrepancies through root cause analysis to surface actionable insights.",
  },
  {
    id: "be-cs",
    type: "education",
    start: "Aug 2016",
    end: "Sep 2020",
    duration: "4 Years",
    title: "Bachelor of Engineering in Computer Science",
    org: "JNTUH — Hyderabad, India",
    origin: true,
  },
];

// Technical Skills grid — grouped into named cards, each skill paired with a
// small emoji glyph (kept to generic emoji rather than brand logo assets).
export const skillCategories = [
  {
    label: "Languages",
    skills: [
      { icon: "🐍", name: "Python" },
      { icon: "🗄️", name: "SQL" },
      { icon: "☕", name: "Java" },
      { icon: "💻", name: "Bash" },
    ],
  },
  {
    label: "Big Data & Libraries",
    skills: [
      { icon: "⚡", name: "Apache Spark" },
      { icon: "🔥", name: "PySpark" },
      { icon: "🐝", name: "Hive" },
      { icon: "🐼", name: "Pandas" },
      { icon: "🔢", name: "NumPy" },
    ],
  },
  {
    label: "Data Engineering",
    skills: [
      { icon: "🌬️", name: "Apache Airflow" },
      { icon: "🔧", name: "dbt" },
      { icon: "🔄", name: "ELT / ETL" },
      { icon: "🧹", name: "Data Cleaning" },
    ],
  },
  {
    label: "Databases & Warehousing",
    skills: [
      { icon: "🐘", name: "PostgreSQL" },
      { icon: "🐬", name: "MySQL" },
      { icon: "🟥", name: "Amazon Redshift" },
      { icon: "❄️", name: "Snowflake" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: "☁️", name: "AWS (S3, EC2)" },
      { icon: "🔷", name: "Azure" },
      { icon: "🐳", name: "Docker" },
      { icon: "☸️", name: "Kubernetes" },
    ],
  },
  {
    label: "Machine Learning & Gen AI",
    skills: [
      { icon: "🤖", name: "Scikit-learn" },
      { icon: "📈", name: "MLflow" },
      { icon: "🗣️", name: "NLP" },
      { icon: "✨", name: "LLM" },
      { icon: "🔗", name: "LangChain" },
      { icon: "📚", name: "RAG" },
    ],
  },
];

export const certifications = [
  {
    name: "Data Engineering on AWS Foundations",
    issuer: "AWS",
  },
  {
    name: "Analytical SQL for Developers",
    issuer: "Oracle",
  },
];

export const sections = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
];
