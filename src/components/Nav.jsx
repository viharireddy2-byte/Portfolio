import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { personal, sections } from "../data/profile";

export default function Nav({ activeId }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-display font-semibold text-paper tracking-tight text-lg"
        >
          Vihari<span className="text-gold">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(s.id);
                }}
                className={`px-3 py-2 rounded-full transition-colors ${
                  activeId === s.id
                    ? "text-gold bg-gold/10"
                    : "text-fog hover:text-paper"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={personal.resumeFile}
            download
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider border border-line rounded-full px-4 py-2 text-paper hover:border-gold hover:text-gold transition-colors"
          >
            <Download size={14} strokeWidth={2} />
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-paper"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-line px-6 py-6 flex flex-col gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(s.id);
              }}
              className={`font-mono text-sm uppercase tracking-wider py-3 border-b border-line/60 ${
                activeId === s.id ? "text-gold" : "text-fog"
              }`}
            >
              {s.label}
            </a>
          ))}
          <a
            href={personal.resumeFile}
            download
            className="mt-4 inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider border border-gold rounded-full px-4 py-3 text-gold"
          >
            <Download size={14} strokeWidth={2} />
            Download resume
          </a>
        </div>
      )}
    </header>
  );
}
