// Add new projects here — the Projects section renders this list automatically.
// `category` drives the filter tabs ("All" always shows everything).

export const projectCategories = ["All", "Data Engineering"];

export const projects = [
  {
    id: "agentic-aegis",
    number: "01",
    category: "Data Engineering",
    title: "Agentic Aegis AI Platform",
    githubUrl: "https://github.com/viharireddy2-byte/Agentic-Aegis",
    technologies: ["Python", "SQL", "Polars", "DuckDB", "AWS", "Prefect", "Docker", "Scikit-learn", "LLM"],
    objective:
      "Self-healing ETL platform with 4 autonomous agents for data profiling, remediation, and anomaly detection, cutting manual intervention 60%. Built a Bronze-Silver-Gold warehouse with full lineage auditability, plus an LLM-powered natural language to SQL interface restricted to validated, read-only queries.",
  },
  {
    id: "lakeflow-sync",
    number: "02",
    category: "Data Engineering",
    title: "Lakeflow Data Ingestion Framework",
    githubUrl: "https://github.com/viharireddy2-byte/lakeflow-sync",
    technologies: ["Python", "PySpark", "Apache Spark", "Databricks", "Delta Lake", "PostgreSQL", "CI/CD"],
    objective:
      "Metadata-driven ingestion framework enabling full-load and append-only CDC sync from PostgreSQL to Databricks Delta Lake using WAL and Lakeflow. Automated CI/CD with GitHub Actions cut manual releases entirely, and reusable ingestion components cut manual ETL effort by 80%.",
  },
];
