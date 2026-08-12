import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl overflow-hidden card-surface shadow-sm flex flex-col hover-lift p-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-blue text-sm">{project.number}</span>
          <span className="text-[11px] font-semibold uppercase tracking-wide bg-chip text-blue px-2.5 py-1 rounded-md">
            {project.category}
          </span>
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

      <h3 className="font-display font-bold text-2xl text-navy mb-4">{project.title}</h3>

      <p className="text-[11px] font-bold tracking-widest text-blue mb-2">TECHNOLOGIES USED</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="text-xs font-medium text-navy border border-line rounded-md px-2.5 py-1 hover-lift cursor-default"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-[11px] font-bold tracking-widest text-blue mb-2">OBJECTIVE &amp; USE CASE</p>
      <p className="text-sm text-slate leading-relaxed">{project.objective}</p>

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
    </article>
  );
}
