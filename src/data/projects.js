// Content and metrics sourced from the three supplied resumes. Project dates are intentionally omitted.
export const projectCategories = ["Data Engineering", "Data Analysis", "Business Intelligence"];

export const projects = [
  {
    "id": "aws",
    "number": "01",
    "category": "Data Engineering",
    "title": "AWS Event Analytics Lakehouse",
    "githubUrl": "https://github.com/viharireddy2-byte/AWS-Event-Analytics-Lakehouse-",
    "tagline": "Incremental event processing with partition-aware replay and tested publication controls.",
    "metrics": [
      {
        "value": "50M",
        "label": "events in 25 minutes"
      },
      {
        "value": "30%",
        "label": "faster replay runtime"
      }
    ],
    "highlights": [
      "Orchestrated S3-to-Iceberg processing with Airflow, Athena SQL, incremental merges, and date-partitioned Parquet tables.",
      "Reduced one-day replay scan volume from 11.5 GB to 140 MB through event-date partitioning and partition-aware merges.",
      "Automated infrastructure and CI with Terraform and GitHub Actions; 49 regression tests validate quality gates, atomic snapshot publication, and lock recovery."
    ],
    "technologies": [
      "Python",
      "SQL",
      "AWS S3",
      "Athena",
      "Airflow",
      "Apache Iceberg",
      "Terraform",
      "GitHub Actions"
    ]
  },
  {
    "id": "lakeflow",
    "number": "02",
    "category": "Data Engineering",
    "title": "Lakeflow Ingestion Framework",
    "githubUrl": "https://github.com/viharireddy2-byte/lakeflow-sync",
    "tagline": "Metadata-driven PostgreSQL ingestion into Databricks with full loads and WAL-based CDC.",
    "metrics": [
      {
        "value": "2M+",
        "label": "records across 4 tables"
      },
      {
        "value": "70%",
        "label": "test-coverage gate"
      }
    ],
    "highlights": [
      "Preserved INSERT, UPDATE, and DELETE history through full loads and WAL-based change data capture.",
      "Added three-attempt exponential backoff and classified transient versus non-recoverable failures.",
      "Automated multi-environment CI/CD with GitHub Actions and Databricks Asset Bundles, enforcing linting, type checking, and test coverage."
    ],
    "technologies": [
      "Python",
      "PySpark",
      "PostgreSQL",
      "Databricks",
      "Delta Lake",
      "GitHub Actions"
    ]
  },
  {
    "id": "aegis",
    "number": "03",
    "category": "Data Engineering",
    "title": "AI Aegis \u2014 Automated ETL Pipeline",
    "githubUrl": "https://github.com/viharireddy2-byte/Agentic-Aegis",
    "tagline": "Bronze\u2013Silver\u2013Gold processing with auditable quality checks and governed natural-language queries.",
    "metrics": [
      {
        "value": "4",
        "label": "source types"
      },
      {
        "value": "8",
        "label": "data-quality issue categories"
      }
    ],
    "highlights": [
      "Integrated CSV, PostgreSQL, MySQL, and S3 with Prefect, Polars, and DuckDB to produce curated analytics tables.",
      "Combined profiling, weighted quality scores, and rule-based remediation to produce auditable cleaned data.",
      "Built an LLM-to-SQL interface with schema-scoped context, query validation, and read-only database access."
    ],
    "technologies": [
      "Python",
      "Prefect",
      "Polars",
      "DuckDB",
      "MySQL",
      "AWS S3",
      "LLMs",
      "Docker"
    ]
  },
  {
    "id": "streaming",
    "number": "04",
    "category": "Data Engineering",
    "title": "Real-Time Streaming Pipeline",
    "githubUrl": "https://github.com/viharireddy2-byte/Realtime-signal-intelligence-platform",
    "tagline": "Decoupled KPI aggregation, anomaly detection, and downstream consumers.",
    "metrics": [
      {
        "value": "12.6M",
        "label": "events in 30 minutes"
      },
      {
        "value": "3",
        "label": "stateful anomaly detectors"
      }
    ],
    "highlights": [
      "Engineered a Kafka\u2013Flink streaming platform for KPI aggregation and anomaly detection.",
      "Implemented Z-score, MAD, and EWMA detectors for sudden metric spikes and gradual drift.",
      "Combined Flink per-event aggregation and Spark 30-minute session windows for a 5-stage conversion funnel."
    ],
    "technologies": [
      "Python",
      "Java",
      "SQL",
      "Kafka",
      "Flink",
      "Spark"
    ]
  },
  {
    "id": "product",
    "number": "05",
    "category": "Data Analysis",
    "title": "Product Analytics Platform",
    "githubUrl": "https://github.com/viharireddy2-byte/Product-Analytics",
    "tagline": "Session models for conversion funnels, cohort retention, and Tableau reporting.",
    "metrics": [
      {
        "value": "50M",
        "label": "sessions modeled"
      },
      {
        "value": "75%",
        "label": "faster funnel queries"
      }
    ],
    "highlights": [
      "Built a date-partitioned, clustered BigQuery product analytics mart.",
      "Reduced funnel queries from 20s to 5s using precomputed ordered event timestamps and partition-filtered session aggregates.",
      "Protected refreshes with 6 prepublication validation gates, transactional partition replacement, snapshot recovery, and GitHub Actions."
    ],
    "technologies": [
      "SQL",
      "BigQuery",
      "Tableau",
      "Funnel Analysis",
      "GitHub Actions"
    ]
  },
  {
    "id": "ecommerce",
    "number": "06",
    "category": "Data Analysis",
    "title": "Ecommerce Sales Conversion Analytics",
    "githubUrl": "https://github.com/viharireddy2-byte/Ecommerce-sales-conversion-analytics",
    "tagline": "Session, order, and SKU models powering ecommerce reporting.",
    "metrics": [
      {
        "value": "50M",
        "label": "records processed"
      },
      {
        "value": "60%",
        "label": "lower query runtime"
      }
    ],
    "highlights": [
      "Powered 10 reports and 8 Looker Studio views with BigQuery analytics models.",
      "Reduced runtime from 50s to 20s by materializing date-filtered records once and reusing shared aggregates across 10 analyses.",
      "Built transactional report delivery with schema validation, audited refreshes, integrity-checked rollback, and 136 automated regression checks."
    ],
    "technologies": [
      "SQL",
      "BigQuery",
      "Looker Studio",
      "Data Modeling",
      "ETL",
      "GitHub Actions"
    ]
  },
  {
    "id": "ga4",
    "number": "07",
    "category": "Data Analysis",
    "title": "GA4 Purchase Prediction Analytics",
    "githubUrl": "https://github.com/viharireddy2-byte/GA4-Purchase-Prediction-Customer-Behavior-Analytics",
    "tagline": "Purchase-prediction features and batch inference with temporal validation.",
    "metrics": [
      {
        "value": "4.3M",
        "label": "events across 252K users"
      },
      {
        "value": "42\u00d7",
        "label": "faster feature aggregation"
      }
    ],
    "highlights": [
      "Built a BigQuery SQL and Scikit-learn purchase-prediction pipeline with temporal validation.",
      "Reduced feature aggregation from 11.84s to 0.28s on 1M events using NumPy vectorization and categorical encoding; reduced DataFrame memory 80%.",
      "Added SHA-256 model verification, atomic exports, drift monitoring, regression tests, and CLI checks."
    ],
    "technologies": [
      "Python",
      "SQL",
      "BigQuery",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Docker"
    ]
  },
  {
    "id": "retention",
    "number": "08",
    "category": "Data Analysis",
    "title": "E-commerce Funnel Retention Analytics",
    "githubUrl": "https://github.com/viharireddy2-byte/Commerce-funnel-retention-analytics",
    "tagline": "Python\u2013DuckDB models for funnel progression and retention.",
    "metrics": [
      {
        "value": "1M",
        "label": "events across 390K sessions"
      },
      {
        "value": "16.2s",
        "label": "model generation"
      }
    ],
    "highlights": [
      "Built an analytics pipeline generating funnel and retention models from event data.",
      "Reduced median funnel-summary query time from 5.69s to 1.81ms on 102K events by materializing SQL models and validating result equivalence.",
      "Added SHA-256 deduplication, quality gates, atomic publication, and 29 regression tests through GitHub Actions."
    ],
    "technologies": [
      "DuckDB",
      "Python",
      "SQL",
      "Apache Parquet",
      "pytest",
      "GitHub Actions"
    ]
  },
  {
    "id": "basketpulse",
    "number": "09",
    "category": "Business Intelligence",
    "title": "Basketpulse \u2014 Retail Analytics Platform",
    "githubUrl": "https://github.com/viharireddy2-byte/Basketpulse-Retail-Analytics-Platform",
    "tagline": "Nested transaction models powering three BigQuery\u2013Looker dashboards.",
    "metrics": [
      {
        "value": "50M",
        "label": "transactions generated"
      },
      {
        "value": "312M",
        "label": "line items generated"
      }
    ],
    "highlights": [
      "Generated 50M transactions and 312M line items in 21 minutes using Python.",
      "Avoided line-item expansion for basket-level KPIs with precomputed transaction totals, daily partitioning, and clustering by store, customer, and channel.",
      "Implemented atomic partition replacement, count/revenue reconciliation, retry-safe submission, and CI with pytest, static LookML checks, and smoke tests."
    ],
    "technologies": [
      "BigQuery",
      "Python",
      "Looker",
      "LookML",
      "Data Modeling",
      "GitHub Actions"
    ]
  },
  {
    "id": "manufacturing",
    "number": "10",
    "category": "Business Intelligence",
    "title": "Manufacturing Analytics Dashboard",
    "githubUrl": "https://github.com/viharireddy2-byte/Real-Time-Manufacturing-Analytics-Dashboard",
    "tagline": "Fabric telemetry and dashboard aggregates for manufacturing risk and ingestion monitoring.",
    "metrics": [
      {
        "value": "100K",
        "label": "events generated locally in 5.49s"
      },
      {
        "value": "4",
        "label": "dashboard tiles"
      }
    ],
    "highlights": [
      "Engineered a Microsoft Fabric telemetry pipeline across Event Hubs, Eventstream, and Eventhouse.",
      "Built KQL deduplication and hourly risk aggregates for manufacturing risk, modeled cost exposure, and ingestion-delay monitoring.",
      "Enabled resumable replay with atomic checkpoints after broker acknowledgment, workload checksum validation, and single-writer locks."
    ],
    "technologies": [
      "Python",
      "SQL",
      "Microsoft Fabric",
      "Azure Event Hubs",
      "KQL"
    ]
  },
  {
    "id": "web",
    "number": "11",
    "category": "Business Intelligence",
    "title": "Web Analytics BI Platform",
    "githubUrl": "https://github.com/viharireddy2-byte/Web-Analytics-Business-Intelligence-Platform.",
    "tagline": "Incremental session models for acquisition, retention, and conversion reporting.",
    "metrics": [
      {
        "value": "50M",
        "label": "events across 90 days"
      },
      {
        "value": "75%",
        "label": "lower median query time"
      }
    ],
    "highlights": [
      "Built a GA4\u2013BigQuery\u2013Looker platform with incremental session models.",
      "Reduced median dashboard query time from 12s to 3s and bytes scanned from 20GB to 2GB with session preaggregation, date partitioning, and clustering.",
      "Reduced refresh scope from 90 days to 3 days; validated correctness through 7 SQL assertions, Python reconciliation, and 5 benchmark query pairs."
    ],
    "technologies": [
      "SQL",
      "BigQuery",
      "Looker",
      "LookML",
      "Python",
      "GA4",
      "BigQuery ML"
    ]
  }
];
