import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading stage="04 · Train" title="Education & Certifications" />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-fog mb-5 flex items-center gap-2">
              <GraduationCap size={15} className="text-gold" />
              Education
            </h3>
            <div className="flex flex-col gap-6">
              {education.map((ed) => (
                <div key={ed.degree} className="border border-line rounded-2xl p-6 bg-surface">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h4 className="font-display font-semibold text-paper">{ed.degree}</h4>
                    <span className="font-mono text-xs text-gold whitespace-nowrap">
                      {ed.start} – {ed.end}
                    </span>
                  </div>
                  <p className="text-sm text-fog mt-1.5">
                    {ed.school} · {ed.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-fog mb-5 flex items-center gap-2">
              <Award size={15} className="text-gold" />
              Certifications
            </h3>
            <div className="flex flex-col gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="border border-line rounded-2xl p-6 bg-surface">
                  <h4 className="font-display font-semibold text-paper">{cert.name}</h4>
                  <p className="text-sm text-fog mt-1.5">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
