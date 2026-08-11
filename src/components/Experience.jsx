import { Briefcase } from "lucide-react";
import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          stage="02 · Transform"
          title="Experience"
          description="Consulting roles where I worked at the intersection of raw operational data and the decisions leadership needed to make from it."
        />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />

          <div className="flex flex-col gap-14">
            {experience.map((job) => (
              <div key={job.company} className="relative">
                <span className="absolute -left-8 md:-left-10 top-1.5 w-[15px] h-[15px] rounded-full bg-ink border-2 border-gold" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                  <h3 className="font-display font-semibold text-xl text-paper">
                    {job.title}
                  </h3>
                  <span className="font-mono text-xs text-gold uppercase tracking-wider">
                    {job.start} – {job.end}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-fog mb-4">
                  <Briefcase size={14} className="text-silver" />
                  {job.company} <span className="text-line">·</span> {job.location}
                </div>

                <ul className="space-y-3">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-paper/85 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-silver shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
