import { GithubIcon } from "./icons";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-2xl card-surface shadow-sm flex flex-col hover-lift p-6">
      <h3 className="font-display font-bold text-2xl text-navy">{project.title}</h3>
      <p className="text-[11px] font-bold tracking-widest text-blue mt-6 mb-3">WHAT I BUILT</p>
      <ul className="space-y-2 mb-6">
        {project.highlights.map(highlight => (
          <li key={highlight} className="flex gap-2.5 text-sm text-slate leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue shrink-0" aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>
      <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="mt-auto inline-flex items-center gap-2 self-start text-blue font-semibold text-sm hover:underline">
        <GithubIcon size={16} /> GitHub
      </a>
    </article>
  );
}
