import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { personal } from "../data/profile";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-navy mb-4">
          Projects
        </h2>
        <p className="text-center text-slate max-w-2xl mx-auto mb-10">
          Three end-to-end pipelines covering batch and CDC ingestion, data-quality automation, and real-time streaming.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-blue text-blue font-semibold px-6 py-2.5 rounded-xl hover:bg-blue hover:text-white hover-pop transition-colors"
          >
            See All Projects on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
