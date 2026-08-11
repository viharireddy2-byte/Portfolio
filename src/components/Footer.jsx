import { personal } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-fog/70">
        <span>© {new Date().getFullYear()} {personal.name}</span>
        <span>Built with React &amp; Tailwind · Deployed on GitHub Pages</span>
      </div>
    </footer>
  );
}
