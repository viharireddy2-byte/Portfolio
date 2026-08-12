import { useEffect, useRef, useState } from "react";
import { journey } from "../data/profile";

export default function Journey() {
  const lineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = lineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.5;
      // 0 when the line's top is at viewport center, 1 when its bottom reaches viewport center.
      const raw = (viewportCenter - rect.top) / (rect.height || 1);
      setProgress(Math.min(1, Math.max(0, raw)));
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
          {/* Base track */}
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-line hidden md:block"
          />
          <div className="absolute left-4 top-2 bottom-2 w-px bg-line md:hidden" />

          {/* Filled progress line — grows from the top as you scroll, tracking the ball */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-px bg-navy dark:bg-white transition-[height] duration-150 ease-out"
            style={{ height: `calc(${progress * 100}% - ${progress > 0 ? "4px" : "0px"})` }}
            aria-hidden="true"
          />
          <div
            className="md:hidden absolute left-4 top-2 w-px bg-navy dark:bg-white transition-[height] duration-150 ease-out"
            style={{ height: `calc(${progress * 100}% - ${progress > 0 ? "4px" : "0px"})` }}
            aria-hidden="true"
          />

          {/* Scroll-tracked marker — moves down the line as you read through the timeline */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue/25 border-2 border-blue z-20 transition-[top] duration-150 ease-out"
            style={{ top: `calc(${progress * 100}% - 8px)` }}
            aria-hidden="true"
          />
          <div
            className="md:hidden absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full bg-blue/25 border-2 border-blue z-20 transition-[top] duration-150 ease-out"
            style={{ top: `calc(${progress * 100}% - 8px)` }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-4 md:gap-5">
            {journey.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.id} className="relative md:grid md:grid-cols-2 md:gap-10 items-start">
                  <span
                    className="absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue border-2 border-white dark:border-[#0b1220] z-10"
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
  const highlighted = item.origin;

  return (
    <div
      className={`w-full rounded-2xl p-6 shadow-sm hover-lift ${
        highlighted ? "bg-blue text-white" : "card-surface"
      }`}
    >
      <span
        className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg mb-3 ${
          highlighted ? "bg-white/15 text-white" : "bg-chip text-blue"
        }`}
      >
        {item.start} – {item.end}
        {item.duration ? ` (${item.duration})` : ""}
      </span>

      <h3 className={`font-display font-bold text-xl ${highlighted ? "text-white" : "text-navy"}`}>
        {item.title}
      </h3>
      <p className={`text-sm mt-1 font-medium ${highlighted ? "text-white/85" : "text-slate"}`}>
        {item.org}
      </p>

      {item.description && (
        <p className={`text-sm mt-3 leading-relaxed ${highlighted ? "text-white/85" : "text-slate"}`}>
          {item.description}
        </p>
      )}

      {item.coursework && (
        <div className="mt-3">
          <p className={`text-sm font-semibold ${highlighted ? "text-white" : "text-navy"}`}>
            Relevant Coursework:
          </p>
          <p className={`text-sm mt-1 leading-relaxed ${highlighted ? "text-white/85" : "text-slate"}`}>
            {item.coursework.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
