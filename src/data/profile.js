// Centralized content model — all real information from Vihari's resume.
// Edit this file to update personal info, experience, education, skills, or certifications.
// Projects live separately in ./projects.js so new project entries don't require touching UI components.

export const personal = {
  name: "Vihari Reddy Aleti",
  role: "Data Engineer",
  tagline: "Building reliable data pipelines from raw ingestion to trusted, analytics-ready tables.",
  location: "Dallas, TX",
  relocation: "Open to relocation",
  phone: "(940) 290-3394",
  email: "aleti.viharireddy@gmail.com",
  linkedin: "https://www.linkedin.com/in/viharireddy2/",
  github: "https://github.com/viharireddy2-byte",
  resumeFile: `${import.meta.env.BASE_URL}resume.pdf`,
  summary:
    "Master's graduate in Information Technology with experience in data-driven consulting. I build metadata-driven ETL pipelines and CDC ingestion frameworks using Python, SQL, Spark, and cloud platforms — turning raw, inconsistent data into reliable pipelines that teams can build analytics and decisions on top of.",
};

export const skillGroups = [
  {
    label: "Languages",
    tag: "core",
    skills: ["Python", "SQL", "Java", "Bash"],
  },
  {
    label: "Big Data & Libraries",
    tag: "compute",
    skills: ["Apache Spark", "PySpark", "Hive", "Pandas", "NumPy"],
  },
  {
    label: "Data Engineering",
    tag: "pipeline",
    skills: ["Apache Airflow", "dbt", "ELT / ETL Pipelines", "Data Cleaning"],
  },
  {
    label: "Databases & Warehousing",
    tag: "storage",
    skills: ["PostgreSQL", "MySQL", "Amazon Redshift", "Snowflake"],
  },
  {
    label: "Cloud & DevOps",
    tag: "infra",
    skills: ["AWS (S3, EC2)", "Azure", "Docker", "Kubernetes"],
  },
  {
    label: "Machine Learning & Gen AI",
    tag: "intelligence",
    skills: ["Scikit-learn", "MLflow", "NLP", "LLM", "LangChain", "RAG"],
  },
];

export const experience = [
  {
    title: "Executive Consultant",
    company: "IT World Web",
    location: "Bangalore, India",
    start: "Dec 2022",
    end: "Dec 2024",
    highlights: [
      "Analyzed 10K+ operational records across 5 business functions to identify process bottlenecks, map current-state workflows, and recommend changes that improved operational efficiency by 40%.",
      "Established and standardized 10+ enterprise KPIs by translating business requirements into measurable performance indicators, improving reporting accuracy and strategic planning.",
    ],
  },
  {
    title: "Associate Consultant",
    company: "Careernet Technologies",
    location: "Bangalore, India",
    start: "Apr 2021",
    end: "Nov 2022",
    highlights: [
      "Built executive dashboards by consolidating operational metrics from multiple functions, enabling faster performance tracking and improved leadership visibility.",
      "Investigated data and process level discrepancies through root cause analysis, identifying performance drivers and delivering actionable insights to cross-functional stakeholders.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Information Technology",
    school: "Belhaven University",
    location: "Mississippi",
    start: "Jan 2025",
    end: "Apr 2026",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "JNTUH",
    location: "Hyderabad, India",
    start: "Aug 2016",
    end: "Sep 2020",
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

// Section order for nav + the scroll-tracked lineage rail.
// "stage" is a short mono label carried through the nav and the rail —
// it mirrors how a pipeline run is actually staged (intake -> transform -> serve),
// not an arbitrary decorative index.
export const sections = [
  { id: "about", label: "About", stage: "INTAKE" },
  { id: "skills", label: "Skills", stage: "STACK" },
  { id: "experience", label: "Experience", stage: "TRANSFORM" },
  { id: "projects", label: "Projects", stage: "BUILD" },
  { id: "education", label: "Education", stage: "TRAIN" },
  { id: "contact", label: "Contact", stage: "SERVE" },
];
