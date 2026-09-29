import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl overflow-hidden card-surface shadow-sm flex flex-col hover-lift p-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-display font-extrabold text-blue text-sm">{project.number}</span>
          <span className="text-[11px] font-semibold uppercase tracking-wide bg-chip text-blue px-2.5 py-1 rounded-md">
            {project.category}
          </span>
          {project.dates && <span className="text-xs text-slate">{project.dates}</span>}
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-blue text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-blue-dark hover-pop transition-colors shrink-0"
          >
            <GithubIcon size={13} />
            View on GitHub
          </a>
        )}
      </div>

      <h3 className="font-display font-bold text-2xl text-navy">{project.title}</h3>
      {project.tagline && <p className="mt-2 text-sm text-slate leading-relaxed">{project.tagline}</p>}

      {project.metrics && (
        <div className="mt-5 flex flex-wrap gap-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-chip rounded-xl px-4 py-2.5">
              <span className="font-display font-extrabold text-lg text-blue">{m.value}</span>{" "}
              <span className="text-xs font-medium text-slate">{m.label}</span>
            </div>
          ))}
        </div>
      )}

      <p className="text-[11px] font-bold tracking-widest text-blue mt-6 mb-2">WHAT I BUILT</p>
      <ul className="space-y-2 mb-6">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 text-sm text-slate leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue shrink-0" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <p className="text-[11px] font-bold tracking-widest text-blue mb-2">TECHNOLOGIES USED</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-navy border border-line rounded-md px-2.5 py-1 hover-lift cursor-default"
            >
              {t}
            </span>
          ))}
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-blue font-semibold text-sm hover:underline hover:gap-2 transition-all"
          >
            View repository
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  );
}
