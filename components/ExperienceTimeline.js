'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { experienceData } from '../lib/data';
import HandUnderline from './HandUnderline';

export default function ExperienceTimeline() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCertificate(null);
      }
    };
    if (activeCertificate) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeCertificate]);

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-bg-subtle">
          <span className="mono-label">Career Progression</span>
          <h2 className="section-heading mt-2 block">
            <span className="relative inline-block pb-1">
              Professional experience
              <HandUnderline className="text-accent-copper" />
            </span>
          </h2>
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
              <ul className="space-y-2 mb-4 max-w-3xl">
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

              {/* Verified Certificate Badges (Opens interactive preview modal) */}
              {item.certificates && item.certificates.length > 0 && (
                <div className="mb-4 pt-1 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-ink-faint flex items-center gap-1 select-none">
                    <svg
                      className="w-3.5 h-3.5 text-accent-copper"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>Credentials:</span>
                  </span>
                  {item.certificates.map((cert) => (
                    <button
                      key={cert.id}
                      type="button"
                      onClick={() => setActiveCertificate(cert)}
                      className="group inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-ink-primary hover:text-white bg-bg-surface hover:bg-bg-elevated border border-accent-copper/40 hover:border-accent-copper rounded-lg transition-all duration-150 shadow-sm active:scale-95 cursor-pointer"
                      title={`View ${cert.title}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-copper group-hover:scale-125 transition-transform" />
                      <span>{cert.shortLabel}</span>
                      <span className="text-ink-faint group-hover:text-accent-copper transition-colors">↗</span>
                    </button>
                  ))}
                </div>
              )}

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

      {/* Certificate Preview Modal Popup */}
      {activeCertificate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeCertificate.title}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveCertificate(null)}
        >
          <div
            data-lenis-prevent="true"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-3xl max-h-[92vh] bg-[#161311] border border-accent-border/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-[#1F1B17] border-b border-bg-subtle flex items-center justify-between flex-shrink-0 select-none">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <div className="w-8 h-8 rounded-lg bg-bg-surface border border-accent-border flex items-center justify-center text-accent-copper flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase text-accent-copper font-medium">
                      {activeCertificate.issuer}
                    </span>
                    {activeCertificate.ref && (
                      <span className="text-ink-faint text-[10px] font-mono hidden sm:inline">
                        · {activeCertificate.ref}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-ink-primary truncate">
                    {activeCertificate.title}
                  </h3>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 flex-shrink-0">
                <a
                  href={activeCertificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-ink-primary hover:text-white bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper rounded transition-colors"
                  title="Open full resolution in new tab"
                >
                  <span>Open Full Image</span>
                  <span className="text-accent-copper">↗</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveCertificate(null)}
                  className="w-8 h-8 rounded-lg bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-ink-muted text-ink-muted hover:text-ink-primary flex items-center justify-center transition-colors text-base"
                  aria-label="Close Preview"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Certificate Image Display */}
            <div
              className="flex-1 w-full overflow-y-auto p-4 sm:p-6 bg-[#0E0C0B] flex items-center justify-center select-none"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(196, 130, 89, 0.4) transparent'
              }}
            >
              <div className="relative max-w-full max-h-[72vh] rounded-lg overflow-hidden border border-bg-subtle shadow-xl bg-white/5 flex items-center justify-center">
                <img
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  className="max-w-full max-h-[72vh] object-contain rounded"
                  loading="eager"
                />
              </div>
            </div>

            {/* Modal Bottom Description Bar */}
            <div className="px-5 py-3 bg-[#141210] border-t border-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-ink-faint select-none">
              <span className="text-center sm:text-left">{activeCertificate.description}</span>
              <span className="text-accent-copper font-medium flex-shrink-0">{activeCertificate.date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
