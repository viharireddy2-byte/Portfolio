import { useEffect, useState } from "react";

// Tracks which section ids are currently visible/passed, so the nav and the
// lineage rail can show a live "pipeline progress" state as the user scrolls.
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const [passedIds, setPassedIds] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });

        setPassedIds((prev) => {
          const next = new Set(prev);
          for (const id of sectionIds) {
            const el = document.getElementById(id);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.4) {
              next.add(id);
            } else {
              next.delete(id);
            }
          }
          return next;
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { activeId, passedIds };
}
