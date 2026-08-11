import { CheckCircle2, ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const tierStyles = {
  gold: { text: "text-gold", border: "border-gold/40", dot: "bg-gold" },
  silver: { text: "text-silver", border: "border-silver/40", dot: "bg-silver" },
  bronze: { text: "text-bronze", border: "border-bronze/40", dot: "bg-bronze" },
};

export default function ProjectCard({ project }) {
  const tier = tierStyles[project.tier] ?? tierStyles.gold;

  return (
    <article className="border border-line rounded-2xl bg-surface overflow-hidden hover:border-gold/30 transition-colors">
      <div className="p-6 md:p-8 border-b border-line flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`w-2 h-2 rounded-full ${tier.dot}`} />
            <span className="font-mono text-[10px] uppercase tracking-widest text-fog/70">
              {project.date}
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-emerald-400/90 ml-2">
              <CheckCircle2 size={12} />
              Validated
            </span>
          </div>
          <h3 className="font-display font-semibold text-2xl text-paper">{project.title}</h3>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider border border-line rounded-full px-3 py-1.5 text-paper hover:border-gold hover:text-gold transition-colors"
            >
              <GithubIcon size={13} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider border border-line rounded-full px-3 py-1.5 text-paper hover:border-gold hover:text-gold transition-colors"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-paper/85 leading-relaxed max-w-2xl">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-mono text-fog border border-line rounded-md px-2.5 py-1"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {project.highlights.map((h, i) => (
            <div key={i} className={`border-l-2 ${tier.border} pl-4`}>
              <div className={`font-display font-semibold text-lg ${tier.text}`}>{h.stat}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-fog/70 mt-0.5 mb-1.5">
                {h.label}
              </div>
              <p className="text-sm text-fog leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
