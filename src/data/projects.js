// Add new projects here — the Projects section renders this list automatically.
// Supported fields: title, tier ("gold" | "silver" | "bronze" — cosmetic accent only),
// description, tools, githubUrl, liveUrl, highlights, featured, date.
// Leave liveUrl unset if there is no deployed demo; the card will simply omit that link.

export const projects = [
  {
    id: "agentic-aegis",
    title: "Agentic Aegis AI Platform",
    tier: "gold",
    date: "2025",
    featured: true,
    description:
      "A self-healing ETL platform where autonomous agents profile, validate, and repair data as it moves through a Bronze–Silver–Gold warehouse — with a natural-language SQL interface layered on top.",
    tools: ["Python", "SQL", "Polars", "DuckDB", "AWS", "Prefect", "Docker", "Scikit-learn", "LLM"],
    githubUrl: "https://github.com/viharireddy2-byte/Agentic-Aegis",
    highlights: [
      {
        stat: "60%",
        label: "less manual intervention",
        detail:
          "Architected a self-healing ETL platform with 4 autonomous agents for data profiling, remediation, and anomaly detection across 8 validation categories.",
      },
      {
        stat: "Bronze → Silver → Gold",
        label: "lakehouse architecture",
        detail:
          "Built a Bronze-Silver-Gold data warehouse using DuckDB, Polars, and Prefect with automated pipelines, enabling full lineage auditability and reliable analytics.",
      },
      {
        stat: "NL → SQL",
        label: "guarded query interface",
        detail:
          "Developed an LLM-powered natural language to SQL interface with schema-aware prompting and query validation, restricting execution to read-only queries.",
      },
      {
        stat: "Docker · K8s",
        label: "containerized ops",
        detail:
          "Automated containerized deployment, orchestration, and monitoring using Docker, Kubernetes, and Prometheus, reducing environment setup time and deployment effort.",
      },
    ],
  },
  {
    id: "lakeflow-sync",
    title: "Lakeflow Data Ingestion Framework",
    tier: "silver",
    date: "2025",
    featured: true,
    description:
      "A metadata-driven ingestion framework that keeps Databricks Delta Lake in sync with PostgreSQL via WAL-based CDC — full-load and append-only, with CI/CD and integration tests baked in.",
    tools: ["Python", "PySpark", "Apache Spark", "Databricks", "Delta Lake", "PostgreSQL", "CI/CD"],
    githubUrl: "https://github.com/viharireddy2-byte/lakeflow-sync",
    highlights: [
      {
        stat: "WAL-based CDC",
        label: "full-load + append-only sync",
        detail:
          "Built a metadata driven ingestion framework enabling full-load and append-only CDC sync from PostgreSQL to Databricks Delta Lake using WAL, dlt, and Databricks Lakeflow.",
      },
      {
        stat: "80%",
        label: "less manual ETL effort",
        detail:
          "Built integration tests and reusable Python ingestion components for full-load and CDC pipelines, accelerating production readiness.",
      },
      {
        stat: "Auto CI/CD",
        label: "zero manual releases",
        detail:
          "Automated CI/CD with Databricks Asset Bundles and GitHub Actions, eliminating manual releases via end-to-end build, test, deploy workflows.",
      },
      {
        stat: "Insert · Update · Delete",
        label: "validated end-to-end",
        detail:
          "Validated PostgreSQL WAL-based CDC end-to-end, verifying INSERT, UPDATE, and DELETE propagation and soft-delete correctness in Delta Lake.",
      },
    ],
  },
];
