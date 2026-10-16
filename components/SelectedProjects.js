'use client';

import { useState } from 'react';
import { projectsData } from '../lib/data';

export default function SelectedProjects() {
  const [expandedId, setExpandedId] = useState('codecollab');

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const supportingProjects = projectsData.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-bg-subtle">
          <div>
            <span className="mono-label">Selected Software Systems</span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-ink-primary mt-2">
              Featured engineering projects
            </h2>
          </div>
          <p className="text-sm font-mono text-ink-muted max-w-md">
            Production microservices, cryptographic pipelines, and real-time distributed applications.
          </p>
        </div>

        {/* Featured Project: CodeCollab (Detailed Hero Architecture) */}
        <div className="bg-bg-surface border border-bg-subtle rounded-lg p-6 sm:p-8 md:p-10 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-accent-copper font-medium bg-accent-muted px-2.5 py-1 rounded border border-accent-border">
                Featured Architecture · {featuredProject.year}
              </span>
              <span className="text-xs font-mono text-ink-faint">
                {featuredProject.status}
              </span>
            </div>

            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-ink-muted hover:text-ink-primary inline-flex items-center gap-1.5 transition-colors"
            >
              <span>View Source on GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="max-w-3xl space-y-4 mb-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-ink-primary">
              {featuredProject.title} — {featuredProject.subtitle}
            </h3>
            <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
              {featuredProject.description}
            </p>
          </div>

          {/* Stack Pills */}
          <div className="mb-8">
            <div className="text-xs font-mono text-ink-faint uppercase tracking-wider mb-2.5">
              Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-bg-elevated border border-bg-subtle text-ink-primary text-xs font-mono rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-bg-subtle">
            {featuredProject.architectureHighlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-ink-muted">
                <span className="text-accent-copper font-mono text-xs mt-0.5 select-none">
                  0{idx + 1}.
                </span>
                <span className="leading-snug">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Expandable Technical Deep Dive */}
          <div className="mt-8 pt-6 border-t border-bg-subtle">
            <button
              type="button"
              onClick={() => toggleExpand(featuredProject.id)}
              className="inline-flex items-center gap-2 text-xs font-mono text-accent-copper hover:text-accent-hover font-medium transition-colors"
              aria-expanded={expandedId === featuredProject.id}
            >
              <span>
                {expandedId === featuredProject.id
                  ? '[-] Collapse Architecture Deep Dive'
                  : '[+] Expand Architecture Deep Dive & Data Flow'}
              </span>
            </button>

            {expandedId === featuredProject.id && (
              <div className="mt-4 p-5 bg-bg-elevated/70 border border-bg-subtle rounded-md text-xs font-mono space-y-4">
                <div>
                  <div className="text-ink-primary font-semibold mb-1">
                    Engineering Problem:
                  </div>
                  <p className="text-ink-muted font-sans text-sm">
                    {featuredProject.technicalDeepDive.problem}
                  </p>
                </div>
                <div>
                  <div className="text-ink-primary font-semibold mb-1">
                    Architectural Solution:
                  </div>
                  <p className="text-ink-muted font-sans text-sm">
                    {featuredProject.technicalDeepDive.solution}
                  </p>
                </div>
                <div>
                  <div className="text-ink-primary font-semibold mb-1">
                    Request / Event Pipeline:
                  </div>
                  <div className="p-3 bg-bg-primary rounded text-accent-copper overflow-x-auto">
                    <code>{featuredProject.technicalDeepDive.dataFlow}</code>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Supporting Projects (Asymmetrical 2-Column Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {supportingProjects.map((project) => (
            <div
              key={project.id}
              className="bg-bg-surface border border-bg-subtle rounded-lg p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-ink-faint">
                    {project.year} · {project.status}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-ink-muted hover:text-ink-primary inline-flex items-center gap-1"
                  >
                    <span>Source</span>
                    <span>↗</span>
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-ink-primary mb-2">
                  {project.title}
                </h3>
                <div className="text-xs font-mono text-accent-copper mb-4">
                  {project.subtitle}
                </div>

                <p className="text-sm text-ink-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Architecture Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.architectureHighlights.slice(0, 3).map((item, i) => (
                    <li
                      key={i}
                      className="text-xs text-ink-muted flex items-start gap-2"
                    >
                      <span className="text-accent-copper font-mono">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-bg-subtle mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-bg-elevated text-ink-muted text-[11px] font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Collapsible deep dive */}
                <button
                  type="button"
                  onClick={() => toggleExpand(project.id)}
                  className="text-xs font-mono text-ink-faint hover:text-ink-primary transition-colors"
                  aria-expanded={expandedId === project.id}
                >
                  {expandedId === project.id ? '[-] Hide Details' : '[+] Inspect Data Flow'}
                </button>

                {expandedId === project.id && (
                  <div className="mt-3 p-3 bg-bg-elevated rounded border border-bg-subtle text-xs font-mono">
                    <div className="text-ink-primary font-medium mb-1">Data Flow:</div>
                    <code className="text-accent-copper block text-[11px] overflow-x-auto">
                      {project.technicalDeepDive.dataFlow}
                    </code>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
