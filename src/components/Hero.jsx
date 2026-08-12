import { personal, heroSkillChips } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 border border-line rounded-full px-5 py-2 text-xs font-semibold tracking-wide text-slate uppercase card-surface">
              {personal.badge}
            </span>

            <h1 className="font-display font-extrabold text-5xl sm:text-6xl leading-[1.05] tracking-tight mt-6 text-navy">
              {personal.firstName} <span className="text-blue">{personal.lastName}</span>
            </h1>

            <p className="mt-5 text-2xl text-slate font-medium">{personal.headline}</p>

            <p className="mt-4 text-navy font-medium">{personal.eduLine}</p>

            <p className="mt-5 text-slate leading-relaxed max-w-xl">{personal.summary}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={personal.resumeFile}
                download
                className="inline-flex items-center justify-center border-2 border-blue text-blue font-semibold px-6 py-3 rounded-xl hover:bg-blue hover:text-white transition-colors"
              >
                Download Resume
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue text-blue font-semibold px-6 py-3 rounded-xl hover:bg-blue hover:text-white transition-colors"
              >
                <LinkedinIcon size={16} />
                View LinkedIn Profile
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue text-blue font-semibold px-6 py-3 rounded-xl hover:bg-blue hover:text-white transition-colors"
              >
                <GithubIcon size={16} />
                View GitHub Profile
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-blue/10 rotate-3" aria-hidden="true" />
            <div className="relative rounded-[2rem] overflow-hidden card-surface shadow-xl -rotate-1">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={`Portrait of ${personal.name}`}
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {heroSkillChips.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 rounded-full card-surface border border-line text-sm font-medium text-navy shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
