import { experienceData } from '../lib/data';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-bg-subtle">
          <div>
            <span className="mono-label">Career Progression</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-ink-primary mt-2">
              Professional experience
            </h2>
          </div>
          <p className="text-sm font-mono text-ink-muted max-w-md">
            Production engineering, enterprise integration, and client delivery record.
          </p>
        </div>

        {/* Editorial Timeline */}
        <div className="relative border-l border-bg-subtle ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-14">
          {experienceData.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Pin */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-bg-primary border-2 border-accent-copper" />

              {/* Role & Company Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-ink-primary">
                    {item.role}
                  </h3>
                  <div className="text-sm font-mono text-accent-copper mt-0.5">
                    {item.company} · <span className="text-ink-faint">{item.location}</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-ink-faint bg-bg-surface px-2.5 py-1 rounded border border-bg-subtle self-start sm:self-auto">
                  {item.period}
                </div>
              </div>

              {/* Summary Sentence */}
              <p className="text-sm sm:text-base text-ink-muted mb-4 max-w-3xl">
                {item.summary}
              </p>

              {/* Responsibility Bullet Points */}
              <ul className="space-y-2 mb-5 max-w-3xl">
                {item.bulletPoints.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-xs sm:text-sm text-ink-muted flex items-start gap-3"
                  >
                    <span className="text-accent-copper text-xs mt-1 select-none">―</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-mono bg-bg-surface text-ink-faint rounded border border-bg-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
