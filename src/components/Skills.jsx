import { skillGroups } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 md:py-32 border-t border-line bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          stage="01 · Stack"
          title="Skills"
          description="The tools I reach for to move data from a raw source to something a team can trust and query."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="group relative border border-line rounded-2xl p-6 bg-surface hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-paper">{group.label}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-fog/60 border border-line rounded-full px-2 py-0.5">
                  {group.tag}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-silver bg-ink/60 border border-line rounded-md px-2.5 py-1.5"
                  >
                    {skill}
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
