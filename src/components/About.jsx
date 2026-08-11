import { personal } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-start">
          <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0">
            <div className="absolute -inset-2 rounded-full border border-gold/30" />
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt={`Portrait of ${personal.name}`}
              className="w-full h-full rounded-full object-cover border border-line"
            />
          </div>

          <div>
            <SectionHeading stage="00 · Intake" title="About" />
            <p className="text-lg text-paper/90 leading-relaxed max-w-2xl -mt-6">
              {personal.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider text-fog">
              <span className="border border-line rounded-full px-3 py-1.5">
                MS, Information Technology
              </span>
              <span className="border border-line rounded-full px-3 py-1.5">
                {personal.location}
              </span>
              <span className="border border-line rounded-full px-3 py-1.5">
                {personal.relocation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
