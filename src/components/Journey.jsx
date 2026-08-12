import { journey } from "../data/profile";

export default function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center text-navy mb-16">
          My Tech Journey
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-line hidden md:block" />
          <div className="absolute left-4 top-2 bottom-2 w-px bg-line md:hidden" />

          <div className="flex flex-col gap-10">
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
      className={`w-full rounded-2xl p-6 shadow-sm ${
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
    </div>
  );
}
