import { Award } from "lucide-react";
import { certifications } from "../data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-navy mb-16">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="card-surface rounded-2xl p-6 shadow-sm flex items-start gap-4"
            >
              <span className="w-11 h-11 rounded-xl bg-chip text-blue flex items-center justify-center shrink-0">
                <Award size={20} />
              </span>
              <div>
                <h3 className="font-display font-bold text-navy leading-snug">{cert.name}</h3>
                <p className="text-sm text-slate mt-1">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
