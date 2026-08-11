export default function SectionHeading({ stage, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-3 flex items-center gap-2">
        <span className="inline-block w-6 h-px bg-gold" />
        {stage}
      </p>
      <h2 className="font-display font-semibold text-3xl md:text-4xl text-paper tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-fog leading-relaxed">{description}</p>
      )}
    </div>
  );
}
