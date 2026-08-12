import { skillCategories } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-navy mb-16">
          Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="card-surface rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-extrabold uppercase tracking-wide text-blue pb-3 mb-4 border-b border-line">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 text-sm font-medium text-navy border border-line rounded-lg px-3 py-2"
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
