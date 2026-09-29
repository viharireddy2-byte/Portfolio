// Add new projects here — the Projects section renders this list automatically.
// All figures below come directly from the resume.
//
// Shape:
//   id, number, category, title, githubUrl, dates
//   tagline      one-line summary shown under the title
//   metrics      [{ value, label }] short headline numbers (optional)
//   highlights   bullet list of what was built / results
//   technologies list of tool names

export const projects = [
  {
    id: "lakeflow-sync",
    number: "01",
    category: "Batch & CDC",
    title: "Lakeflow Ingestion Framework",
    dates: "Mar 2026 – Present",
    githubUrl: "https://github.com/viharireddy2-byte/lakeflow-sync",
    tagline:
      "Metadata-driven PostgreSQL ingestion into the Databricks Lakehouse, supporting full loads and WAL-based CDC.",
    metrics: [
      { value: "2M+", label: "records ingested" },
      { value: "4", label: "tables" },
      { value: "3", label: "environments (dev / QA / Prod)" },
    ],
    highlights: [
      "Built a metadata-driven framework for full loads and WAL-based change data capture into a Databricks Lakehouse.",
      "Added three-attempt exponential backoff for transient failures, plus failure classification so non-recoverable errors are not retried.",
      "Validated CDC accuracy across INSERT, UPDATE, and DELETE using Dockerized PostgreSQL and live replication slots.",
      "Automated CI/CD across dev, QA, and Prod workspaces with GitHub Actions and Databricks Asset Bundles, enforcing linting, type-checking, and test-coverage gates.",
    ],
    technologies: ["Python", "PySpark", "Databricks", "PostgreSQL", "Delta Lake", "GitHub Actions"],
  },
  {
    id: "agentic-aegis",
    number: "02",
    category: "ETL & Data Quality",
    title: "Agentic Aegis – Self-Healing ETL Pipeline",
    dates: "Nov 2025 – Feb 2026",
    githubUrl: "https://github.com/viharireddy2-byte/Agentic-Aegis",
    tagline:
      "Bronze-Silver-Gold ETL pipeline with automated data-quality remediation and a governed natural-language SQL interface.",
    metrics: [
      { value: "4", label: "source types" },
      { value: "8", label: "issue categories checked" },
    ],
    highlights: [
      "Implemented a Bronze-Silver-Gold pipeline with Prefect, Polars, and DuckDB, integrating CSV, PostgreSQL, MySQL, and S3 sources into curated analytics tables.",
      "Automated data-quality checks across 8 issue categories using profiling, a weighted quality score, and rule-based remediation that produces auditable cleaned data.",
      "Built an LLM-powered SQL interface restricted through schema-only context, query validation, and read-only database access.",
      "Containerized services with Docker and exposed Prometheus metrics for pipeline duration, quality scores, and remediation activity.",
    ],
    technologies: ["Python", "Prefect", "Polars", "DuckDB", "MySQL", "AWS S3", "Scikit-learn", "LLM", "Docker"],
  },
  {
    id: "streaming-analytics",
    number: "03",
    category: "Streaming",
    title: "Real-Time Streaming Analytics Pipeline",
    dates: "Jul 2025 – Oct 2025",
    githubUrl: "https://github.com/viharireddy2-byte/Realtime-signal-intelligence-platform",
    tagline:
      "Kafka-Flink pipeline delivering live KPIs, anomaly detection, and funnel analytics over streaming events.",
    metrics: [
      { value: "10s", label: "metric refresh" },
      { value: "3", label: "anomaly detectors" },
      { value: "5", label: "funnel stages" },
    ],
    highlights: [
      "Built a Kafka-Flink pipeline that refreshes source-level counts, error rates, and latency percentiles every 10 seconds using 1-minute sliding windows.",
      "Developed 3 stateful anomaly detectors (Z-score, MAD, and EWMA) to catch sudden metric spikes and gradual drift.",
      "Designed dual-engine analytics for a 5-stage conversion funnel using Flink per-event aggregation and Spark 30-minute session windows.",
      "Delivered real-time KPI telemetry through Flink sliding windows, Redis hot storage, TimescaleDB historical data, and 2-second WebSocket pushes.",
    ],
    technologies: ["Python", "Java", "SQL", "Kafka", "Flink", "Spark", "Redis", "TimescaleDB", "Kubernetes"],
  },
];
