import { ArrowDown, Download, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personal } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center bg-grid overflow-hidden pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[420px] h-[420px] rounded-full bg-silver/5 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center w-full">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-6 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-gold" />
            Data Engineer · ETL &amp; Cloud Pipelines
          </p>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-paper text-glow">
            {personal.name}
          </h1>

          <p className="mt-6 text-lg text-fog max-w-xl leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-fog font-mono">
            <MapPin size={14} className="text-silver" />
            {personal.location} <span className="text-line">·</span> {personal.relocation}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-gold text-ink font-medium px-6 py-3 rounded-full hover:bg-paper transition-colors"
            >
              View projects
              <ArrowDown size={16} strokeWidth={2.5} />
            </a>
            <a
              href={personal.resumeFile}
              download
              className="inline-flex items-center gap-2 border border-line text-paper px-6 py-3 rounded-full hover:border-gold hover:text-gold transition-colors"
            >
              <Download size={16} />
              Resume
            </a>
            <div className="flex items-center gap-3 ml-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-fog hover:text-gold hover:border-gold transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-fog hover:text-gold hover:border-gold transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <PipelineSchematic />
      </div>
    </section>
  );
}

// Signature hero visual: raw data flowing through Bronze -> Silver -> Gold
// stages, echoing the medallion lakehouse architecture described in the
// Projects section. Built as static/animated SVG, no external image assets.
function PipelineSchematic() {
  const stages = [
    { key: "bronze", label: "Bronze", sub: "raw intake", color: "var(--color-bronze)", y: 40 },
    { key: "silver", label: "Silver", sub: "validated", color: "var(--color-silver)", y: 170 },
    { key: "gold", label: "Gold", sub: "analytics-ready", color: "var(--color-gold)", y: 300 },
  ];

  return (
    <div className="relative mx-auto w-full max-w-sm aspect-[4/5]">
      <svg
        viewBox="0 0 320 400"
        className="w-full h-full"
        role="img"
        aria-label="Diagram of a Bronze, Silver, Gold data pipeline with data flowing between stages"
      >
        <line x1="90" y1="60" x2="90" y2="330" stroke="var(--color-line)" strokeWidth="1.5" />

        {stages.map((s) => (
          <g key={s.key}>
            <rect
              x="20"
              y={s.y}
              width="140"
              height="72"
              rx="14"
              fill="var(--color-surface)"
              stroke="var(--color-line)"
              strokeWidth="1"
            />
            <circle cx="90" cy={s.y + 36} r="7" fill={s.color} />
            <text
              x="112"
              y={s.y + 32}
              fill="var(--color-paper)"
              fontSize="15"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="600"
            >
              {s.label}
            </text>
            <text
              x="112"
              y={s.y + 50}
              fill="var(--color-fog)"
              fontSize="10.5"
              fontFamily="IBM Plex Mono, monospace"
              letterSpacing="0.5"
            >
              {s.sub}
            </text>
          </g>
        ))}

        <path
          d="M 200 76 C 260 76, 260 140, 200 170"
          fill="none"
          stroke="var(--color-bronze)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.6"
        />
        <path
          d="M 200 206 C 260 206, 260 270, 200 300"
          fill="none"
          stroke="var(--color-silver)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.6"
        />

        {[0, 1, 2, 3].map((i) => (
          <circle key={`p1-${i}`} r="3" fill="var(--color-bronze)">
            <animateMotion
              dur="3.2s"
              begin={`${i * 0.8}s`}
              repeatCount="indefinite"
              path="M 200 76 C 260 76, 260 140, 200 170"
            />
          </circle>
        ))}
        {[0, 1, 2, 3].map((i) => (
          <circle key={`p2-${i}`} r="3" fill="var(--color-gold)">
            <animateMotion
              dur="3.2s"
              begin={`${0.4 + i * 0.8}s`}
              repeatCount="indefinite"
              path="M 200 206 C 260 206, 260 270, 200 300"
            />
          </circle>
        ))}

        <rect
          x="180"
          y="150"
          width="0"
          height="0"
        />
      </svg>

      <div className="absolute top-3 right-0 font-mono text-[10px] uppercase tracking-widest text-fog/70 border border-line rounded-full px-3 py-1 bg-surface/60">
        lineage: verified
      </div>
    </div>
  );
}
