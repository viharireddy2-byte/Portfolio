import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl overflow-hidden card-surface shadow-sm flex flex-col hover-lift">
      <div className="p-6 bg-gradient-to-br from-blue/10 to-blue/5 dark:from-blue/15 dark:to-transparent">
        <p className="text-[11px] font-bold tracking-widest text-blue mb-2">
          {project.preview.eyebrow}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h4 className="font-display font-bold text-xl text-navy max-w-xs">
            {project.preview.headline}
          </h4>
          <div className="card-surface rounded-xl p-4 text-xs max-w-[220px] shadow-sm">
            <p className="font-semibold text-navy mb-2">What you can do</p>
            <ul className="space-y-1.5 text-slate">
              {project.preview.bullets.map((b) => (
                <li key={b} className="flex gap-1.5">
                  <span className="text-blue">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-dark hover-pop transition-colors"
          >
            <GithubIcon size={14} />
            {project.preview.cta}
          </a>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <span className="font-display font-extrabold text-blue text-sm">{project.number}</span>
          <span className="text-[11px] font-semibold uppercase tracking-wide bg-chip text-blue px-2.5 py-1 rounded-md">
            {project.category}
          </span>
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
      </div>
    </article>
  );
}
