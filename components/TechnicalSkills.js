'use client';

import { useState } from 'react';
import SkillIcon from './SkillIcon';
import { skillsData } from '../lib/data';

export default function TechnicalSkills() {
  const [activeCategoryKey, setActiveCategoryKey] = useState('all');

  const categories = Object.entries(skillsData);

  const displayedCategories =
    activeCategoryKey === 'all'
      ? categories
      : categories.filter(([key]) => key === activeCategoryKey);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-bg-subtle">
          <div>
            <span className="mono-label">Capabilities & Core Stack</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-ink-primary mt-2">
              Technical proficiencies
            </h2>
          </div>
          <p className="text-sm font-mono text-ink-muted max-w-md">
            Direct competencies backed by production code, university rigor, and hands-on delivery.
          </p>
        </div>

        {/* Filter Pills: Fast Domain Filtering */}
        <div className="flex flex-wrap items-center gap-2 mb-12 text-xs font-mono">
          <span className="text-ink-faint mr-1 uppercase tracking-wider text-[11px]">Domain:</span>
          <button
            type="button"
            onClick={() => setActiveCategoryKey('all')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeCategoryKey === 'all'
                ? 'bg-ink-primary text-bg-primary font-medium'
                : 'bg-bg-surface text-ink-muted hover:text-ink-primary border border-bg-subtle'
            }`}
          >
            All Disciplines
          </button>
          {categories.map(([key, category]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategoryKey(key)}
              className={`px-3 py-1.5 rounded transition-colors ${
                activeCategoryKey === key
                  ? 'bg-ink-primary text-bg-primary font-medium'
                  : 'bg-bg-surface text-ink-muted hover:text-ink-primary border border-bg-subtle'
              }`}
            >
              {category.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Editorial Architectural Ledger (No 3-card generic grid) */}
        <div className="border-t border-bg-subtle divide-y divide-bg-subtle">
          {displayedCategories.map(([key, category]) => (
            <div
              key={key}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-bg-surface/30 transition-colors px-2 -mx-2 rounded"
            >
              {/* Left Column: Domain Meta (4 cols) */}
              <div className="lg:col-span-4 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-accent-copper">
                  Domain #{key.toUpperCase()}
                </span>
                <h3 className="text-xl font-semibold text-ink-primary">
                  {category.title}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed font-sans pt-1 max-w-sm">
                  {category.description}
                </p>
              </div>

              {/* Right Column: Detailed Competency Items (8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 bg-bg-surface/80 border border-bg-subtle/80 rounded transition-all duration-200 hover:border-accent-border/60 hover:bg-bg-elevated/40"
                  >
                    <div className="text-sm font-semibold text-ink-primary mb-1.5 flex items-center gap-2.5">
                      <div className="p-1 rounded bg-bg-elevated border border-bg-subtle/70 text-accent-copper shrink-0">
                        <SkillIcon name={skill.name} className="w-3.5 h-3.5 text-accent-copper" />
                      </div>
                      <span>{skill.name}</span>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed font-sans">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
