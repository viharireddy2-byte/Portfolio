// Add new projects here — the Projects section renders this list automatically.
// `category` drives the filter tabs ("All" always shows everything).
// `preview` powers the card's top banner (headline + "what you can do" bullets + CTA).

export const projectCategories = ["All", "Data Engineering", "AI-Powered"];

export const projects = [
  {
    id: "agentic-aegis",
    number: "01",
    category: "AI-Powered",
    title: "Agentic Aegis AI Platform",
    githubUrl: "https://github.com/viharireddy2-byte/Agentic-Aegis",
    preview: {
      eyebrow: "SELF-HEALING DATA PLATFORM",
      headline: "Turn messy data into a trusted warehouse.",
      bullets: [
        "4 autonomous agents profile & repair data",
        "Bronze–Silver–Gold lakehouse with full lineage",
        "Ask questions in plain English, get validated SQL",
      ],
      cta: "View on GitHub",
    },
    technologies: ["Python", "SQL", "Polars", "DuckDB", "AWS", "Prefect", "Docker", "Scikit-learn", "LLM"],
    objective:
      "Architected a self-healing ETL platform with 4 autonomous agents for data profiling, remediation, and anomaly detection across 8 validation categories, cutting manual intervention 60%. Built a Bronze-Silver-Gold data warehouse using DuckDB, Polars, and Prefect with automated pipelines, enabling full lineage auditability and reliable analytics. Developed an LLM-powered natural language to SQL interface with schema-aware prompting and query validation, restricting execution to read-only queries. Automated containerized deployment, orchestration, and monitoring using Docker, Kubernetes, and Prometheus, reducing environment setup time and deployment effort.",
  },
  {
    id: "lakeflow-sync",
    number: "02",
    category: "Data Engineering",
    title: "Lakeflow Data Ingestion Framework",
    githubUrl: "https://github.com/viharireddy2-byte/lakeflow-sync",
    preview: {
      eyebrow: "METADATA-DRIVEN CDC PIPELINE",
      headline: "Keep your lakehouse in perfect sync.",
      bullets: [
        "Full-load and append-only CDC from PostgreSQL",
        "WAL-based sync into Databricks Delta Lake",
        "CI/CD releases, zero manual deploys",
      ],
      cta: "View on GitHub",
    },
    technologies: ["Python", "PySpark", "Apache Spark", "Databricks", "Delta Lake", "PostgreSQL", "CI/CD"],
    objective:
      "Built a metadata driven ingestion framework enabling full-load and append-only CDC sync from PostgreSQL to Databricks Delta Lake using WAL, dlt, and Databricks Lakeflow. Added automated data quality checks, retry logic, and structured alerting, cutting ingestion failure impact and improving pipeline reliability. Automated CI/CD with Databricks Asset Bundles and GitHub Actions, eliminating manual releases via end-to-end build, test, deploy workflows. Built integration tests and reusable Python ingestion components, cutting manual ETL effort by 80%. Validated PostgreSQL WAL-based CDC end-to-end, verifying INSERT, UPDATE, and DELETE propagation and soft-delete correctness in Delta Lake.",
  },
];
