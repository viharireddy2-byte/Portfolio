import { Download, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personal } from "../data/profile";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/viharireddy2",
    href: personal.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/viharireddy2-byte",
    href: personal.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32 border-t border-line bg-surface/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          stage="05 · Serve"
          title="Contact"
          description="Open to data engineering roles. The fastest way to reach me is email — happy to walk through any project on the call."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group border border-line rounded-2xl p-6 bg-surface hover:border-gold/40 transition-colors"
            >
              <Icon size={18} className="text-gold mb-4" />
              <div className="font-mono text-[10px] uppercase tracking-widest text-fog/70 mb-1">
                {label}
              </div>
              <div className="text-paper text-sm break-words group-hover:text-gold transition-colors">
                {value}
              </div>
            </a>
          ))}
        </div>

        <a
          href={personal.resumeFile}
          download
          className="inline-flex items-center gap-2 bg-gold text-ink font-medium px-6 py-3 rounded-full hover:bg-paper transition-colors"
        >
          <Download size={16} />
          Download resume (PDF)
        </a>
      </div>
    </section>
  );
}
