import { Download, Mail } from "lucide-react";
import { personal } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center gap-5">
          <h3 className="font-display font-bold text-2xl text-navy">Let's talk</h3>
          <p className="text-slate max-w-md">
            Seeking an entry-level Data Engineer role. Email is the fastest way to reach me, and I'm happy to walk through any project.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-navy border border-line rounded-full px-4 py-2 hover-swap transition-colors"
            >
              <Mail size={15} />
              {personal.email}
            </a>
            <a
              href={personal.resumeFile}
              download
              className="inline-flex items-center gap-2 text-sm font-medium text-navy border border-line rounded-full px-4 py-2 hover-swap transition-colors"
            >
              <Download size={15} />
              Resume
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy border border-line rounded-full px-4 py-2 hover-swap transition-colors"
            >
              <LinkedinIcon size={15} />
              LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy border border-line rounded-full px-4 py-2 hover-swap transition-colors"
            >
              <GithubIcon size={15} />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate">
          <span>© {new Date().getFullYear()} {personal.name}</span>
          <span>{personal.location} · {personal.relocation}</span>
        </div>
      </div>
    </footer>
  );
}
