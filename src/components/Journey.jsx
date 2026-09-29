import { useEffect, useRef, useState } from "react";
import { journey } from "../data/profile";

export default function Journey() {
  const lineRef = useRef(null);
  const dotRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const [passedIndices, setPassedIndices] = useState(new Set());

  useEffect(() => {
    const onScroll = () => {
      const el = lineRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight * 0.5;
        // 0 when the line's top is at viewport center, 1 when its bottom reaches viewport center.
        const raw = (viewportCenter - rect.top) / (rect.height || 1);
        setProgress(Math.min(1, Math.max(0, raw)));
      }

      const passed = new Set();
      dotRefs.current.forEach((dotEl, i) => {
        if (!dotEl) return;
        const dRect = dotEl.getBoundingClientRect();
        if (dRect.top < window.innerHeight * 0.5) passed.add(i);
      });
      setPassedIndices(passed);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="journey" className="scroll-mt-20 py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-navy mb-10">
          My Tech Journey
        </h2>

        <div className="relative">
          {/* Base track — the "unread" portion of the timeline */}
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[3px] rounded-full bg-line hidden md:block"
          />
          <div className="absolute left-4 top-2 bottom-2 w-[3px] rounded-full bg-line md:hidden" />

          {/* Filled line — grows from the top as you scroll, always in sync with scroll position */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-[3px] rounded-full bg-navy dark:bg-white transition-[height] duration-150 ease-out"
            style={{ height: `${progress * 100}%` }}
            aria-hidden="true"
          />
          <div
            className="md:hidden absolute left-4 top-2 w-[3px] rounded-full bg-navy dark:bg-white transition-[height] duration-150 ease-out"
            style={{ height: `${progress * 100}%` }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-4 md:gap-5">
            {journey.map((item, i) => {
              const isLeft = i % 2 === 0;
              const passed = passedIndices.has(i);
              return (
                <div key={item.id} className="relative md:grid md:grid-cols-2 md:gap-10 items-start">
                  <span
                    ref={(el) => (dotRefs.current[i] = el)}
                    className={`absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 w-4 h-4 rounded-full z-10 transition-colors duration-200 ${
                      passed
                        ? "bg-navy dark:bg-white border-2 border-navy dark:border-white"
                        : "bg-white dark:bg-[#0b1220] border-2 border-line"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="pl-12 md:pl-0 md:pr-14">
                    {isLeft && <JourneyCard item={item} />}
                  </div>

                  <div className="pl-12 md:pl-14">
                    {!isLeft && <JourneyCard item={item} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyCard({ item }) {
  return (
    <div className="group w-full rounded-2xl p-6 shadow-sm card-surface hover:bg-blue hover:border-blue transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-lg mb-3 bg-chip text-blue group-hover:bg-white/15 group-hover:text-white transition-colors duration-200">
        {item.start} – {item.end}
        {item.duration ? ` (${item.duration})` : ""}
      </span>

      <h3 className="font-display font-bold text-xl text-navy group-hover:text-white transition-colors duration-200">
        {item.title}
      </h3>
      <p className="text-sm mt-1 font-medium text-slate group-hover:text-white/85 transition-colors duration-200">
        {item.org}
      </p>

      {item.highlights && (
        <ul className="mt-3 space-y-2">
          {item.highlights.map((h) => (
            <li
              key={h}
              className="flex gap-2.5 text-sm leading-relaxed text-slate group-hover:text-white/85 transition-colors duration-200"
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full bg-blue group-hover:bg-white shrink-0 transition-colors duration-200"
                aria-hidden="true"
              />
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
