import { skillCategories } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-navy mb-10">
          Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="group card-surface hover:bg-blue hover:border-blue rounded-2xl p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-blue group-hover:text-white pb-3 mb-4 border-b border-line group-hover:border-white/25 transition-colors duration-200">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 text-sm font-medium text-navy group-hover:text-white border border-line group-hover:border-white/25 group-hover:bg-white/10 rounded-lg px-3 py-2 transition-colors duration-200"
                  >
                    <span aria-hidden="true">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
