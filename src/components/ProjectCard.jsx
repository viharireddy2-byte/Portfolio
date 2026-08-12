import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl overflow-hidden card-surface hover:bg-blue hover:border-blue shadow-sm flex flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-blue group-hover:text-white text-sm transition-colors duration-200">
            {project.number}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wide bg-chip group-hover:bg-white/15 text-blue group-hover:text-white px-2.5 py-1 rounded-md transition-colors duration-200">
            {project.category}
          </span>
        </div>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-blue group-hover:bg-white text-white group-hover:text-blue text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200 shrink-0"
          >
            <GithubIcon size={13} />
            View on GitHub
          </a>
        )}
      </div>

      <h3 className="font-display font-bold text-2xl text-navy group-hover:text-white mb-4 transition-colors duration-200">
        {project.title}
      </h3>

      <p className="text-[11px] font-bold tracking-widest text-blue group-hover:text-white mb-2 transition-colors duration-200">
        TECHNOLOGIES USED
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((t) => (
          <span
            key={t}
            className="text-xs font-medium text-navy group-hover:text-white border border-line group-hover:border-white/25 group-hover:bg-white/10 rounded-md px-2.5 py-1 transition-colors duration-200"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-[11px] font-bold tracking-widest text-blue group-hover:text-white mb-2 transition-colors duration-200">
        OBJECTIVE &amp; USE CASE
      </p>
      <p className="text-sm text-slate group-hover:text-white/85 leading-relaxed transition-colors duration-200">
        {project.objective}
      </p>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-blue group-hover:text-white font-semibold text-sm hover:underline hover:gap-2 transition-all duration-200"
        >
          View repository
          <ArrowUpRight size={15} />
        </a>
      )}
    </article>
  );
}
