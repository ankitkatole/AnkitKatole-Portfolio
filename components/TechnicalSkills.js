import { skillsData } from '../lib/data';

export default function TechnicalSkills() {
  const categories = Object.values(skillsData);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-bg-subtle">
          <div>
            <span className="mono-label">Capabilities & Stack</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-ink-primary mt-2">
              Technical proficiencies
            </h2>
          </div>
          <p className="text-sm font-mono text-ink-muted max-w-md">
            Direct competencies backed by production code, university rigor, and hands-on delivery.
          </p>
        </div>

        {/* Skills Grid: Structured by Engineering Domain (2-column editorial split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-bg-surface border border-bg-subtle rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <div className="border-b border-bg-subtle pb-3 mb-4">
                  <h3 className="text-base font-semibold text-ink-primary">
                    {category.title}
                  </h3>
                  <p className="text-xs text-ink-faint font-mono mt-0.5">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="text-xs font-semibold text-ink-primary flex items-center justify-between">
                        <span>{skill.name}</span>
                      </div>
                      <div className="text-xs text-ink-muted font-sans mt-0.5 leading-snug">
                        {skill.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
