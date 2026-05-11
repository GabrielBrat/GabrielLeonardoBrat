function SectionHeading({ kicker, title, description }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-500">{kicker}</p>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 dark:text-slate-200">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
