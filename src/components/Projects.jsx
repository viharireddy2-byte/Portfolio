import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 md:py-32 border-t border-line bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          stage="03 · Build"
          title="Projects"
          description="Two end-to-end data platforms — each one takes raw, messy input and gets it to something reliable enough to build on."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
