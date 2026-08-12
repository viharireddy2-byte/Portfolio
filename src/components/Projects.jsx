import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projectCategories, projects } from "../data/projects";
import { personal } from "../data/profile";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-20 py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-center mb-10">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-blue text-blue font-semibold px-6 py-2.5 rounded-xl hover:bg-blue hover:text-white hover-pop transition-colors"
          >
            See All Projects
            <ArrowUpRight size={16} />
          </a>
        </div>

        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-navy mb-10">
          Projects
        </h2>

        <div className="flex justify-center gap-3 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover-pop ${
                filter === cat
                  ? "bg-blue text-white"
                  : "card-surface border border-line text-navy hover:border-blue"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
