'use client';

import { useState } from 'react';
import { projectsData } from '../lib/data';
import HandUnderline from './HandUnderline';

export default function SelectedProjects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-bg-subtle">
          <span className="mono-label">Software Projects</span>
          <h2 className="section-heading mt-2 block">
            <span className="relative inline-block pb-1">
              Systems & applications
              <HandUnderline className="text-accent-copper" />
            </span>
          </h2>
        </div>

        {/* Clean, Uniform Project Showcase Grid */}
        <div className="space-y-8">
          {projectsData.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="bg-bg-surface border border-bg-subtle rounded-lg p-6 sm:p-8 transition-colors hover:border-bg-subtle/80"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-bg-subtle/60">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-ink-faint">
                      {project.year}
                    </span>
                    <span className="text-ink-faint">·</span>
                    <span className="text-xs font-mono text-ink-faint">
                      {project.status}
                    </span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-ink-muted hover:text-ink-primary inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
                  >
                    <span>View Repository</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="max-w-3xl mb-5">
                  <h3 className="text-xl sm:text-2xl font-semibold text-ink-primary mb-1">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-accent-copper mb-3">
                    {project.subtitle}
                  </div>
                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 pt-4 border-t border-bg-subtle/50">
                  {project.architectureHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-muted">
                      <span className="text-accent-copper font-mono text-[11px] select-none">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Pills + Inspection Action */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-bg-subtle">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-bg-elevated text-ink-muted text-[11px] font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(project.id)}
                    className="text-xs font-mono text-ink-muted hover:text-accent-copper self-start sm:self-auto transition-colors"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? '[-] Hide Architecture Flow' : '[+] Inspect Architecture Flow'}
                  </button>
                </div>

                {/* Expandable Technical Deep Dive */}
                {isExpanded && (
                  <div className="mt-5 p-4 sm:p-5 bg-bg-elevated/70 border border-bg-subtle rounded text-xs font-mono space-y-3">
                    <div>
                      <span className="text-ink-primary font-semibold">Problem: </span>
                      <span className="text-ink-muted font-sans text-xs">
                        {project.technicalDeepDive.problem}
                      </span>
                    </div>
                    <div>
                      <span className="text-ink-primary font-semibold">Solution: </span>
                      <span className="text-ink-muted font-sans text-xs">
                        {project.technicalDeepDive.solution}
                      </span>
                    </div>
                    <div>
                      <div className="text-ink-primary font-semibold mb-1">Data Pipeline:</div>
                      <div className="p-2.5 bg-bg-primary rounded text-accent-copper overflow-x-auto text-[11px]">
                        <code>{project.technicalDeepDive.dataFlow}</code>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
