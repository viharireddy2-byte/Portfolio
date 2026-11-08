import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projects, projectCategories } from "../data/projects";
import { personal } from "../data/profile";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [category, setCategory] = useState(projectCategories[0]);
  const visibleProjects = projects.filter(project => project.category === category);
  return (
    <section id="projects" className="scroll-mt-20 py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-navy mb-4">
          Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-8" role="group" aria-label="Filter projects by discipline">
          {projectCategories.map(item => (
            <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full px-5 py-3 text-sm font-semibold border transition-colors ${category === item ? "bg-blue text-white border-blue" : "card-surface text-navy hover:border-blue"}`}>
              {item} <span className="ml-1 opacity-75">({projects.filter(project => project.category === item).length})</span>
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
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
