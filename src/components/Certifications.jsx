import { Award } from "lucide-react";
import { certifications } from "../data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-navy mb-10">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group card-surface hover:bg-blue hover:border-blue rounded-2xl p-6 shadow-sm flex items-start gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="w-11 h-11 rounded-xl bg-chip group-hover:bg-white/15 text-blue group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                <Award size={20} />
              </span>
              <div>
                <h3 className="font-display font-bold text-navy group-hover:text-white leading-snug transition-colors duration-200">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate group-hover:text-white/85 mt-1 transition-colors duration-200">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
