import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { sections } from "../data/profile";

export default function Nav({ activeId, theme, toggleTheme }) {
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
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 border-b ${
        scrolled
          ? "bg-white/90 dark:bg-[#0b1220]/90 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="font-display font-extrabold text-2xl text-navy dark:text-white hover:text-blue hover-pop transition-colors leading-none"
          aria-label="Home"
        >
          Va
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(s.id);
                }}
                className={`text-[15px] font-medium px-3 py-1.5 rounded-full transition-colors duration-200 inline-block ${
                  activeId === s.id
                    ? "bg-blue text-white"
                    : "text-navy dark:text-white hover:bg-blue hover:text-white"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-navy dark:text-white hover-swap transition-colors"
          >
            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            className="md:hidden text-navy dark:text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-[#0b1220] border-t border-line px-6 py-6 flex flex-col gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(s.id);
              }}
              className={`text-base font-medium py-3 px-3 rounded-lg border-b border-line transition-colors duration-200 ${
                activeId === s.id ? "bg-blue text-white" : "text-navy dark:text-white hover:bg-blue hover:text-white"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
