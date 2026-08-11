import { sections } from "../data/profile";

// The site's signature element: a lineage rail styled after pipeline-lineage /
// DAG-monitoring views. As the reader scrolls, each stage node fills in like a
// pipeline run completing its stages — a visual metaphor pulled straight from
// the lineage-auditability work described in the Projects section, not a
// generic decorative index.
export default function LineageRail({ activeId, passedIds }) {
  return (
    <div
      className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col items-start"
      aria-hidden="true"
    >
      <div className="relative flex flex-col gap-10 pl-1">
        <div className="absolute left-[5px] top-2 bottom-2 w-px bg-line" />
        <div
          className="absolute left-[5px] top-2 w-px bg-gradient-to-b from-gold to-gold-dim transition-all duration-500 ease-out"
          style={{
            height: `${(Math.max(0, [...passedIds].length) / sections.length) * 100}%`,
          }}
        />
        {sections.map((s) => {
          const isPassed = passedIds.has(s.id);
          const isActive = activeId === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative flex items-center gap-3"
              aria-hidden="true"
              tabIndex={-1}
            >
              <span
                className={`relative z-10 block w-[11px] h-[11px] rounded-full border transition-colors duration-300 ${
                  isPassed || isActive
                    ? "bg-gold border-gold"
                    : "bg-ink border-line"
                }`}
              />
              <span
                className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${
                  isActive ? "text-gold" : isPassed ? "text-silver" : "text-fog/50"
                }`}
              >
                {s.stage}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
