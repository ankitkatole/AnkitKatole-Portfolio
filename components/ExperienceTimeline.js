'use client';

import { useState } from 'react';
import Image from 'next/image';
import { experienceData } from '../lib/data';
import HandUnderline from './HandUnderline';
import CertificateModal from './CertificateModal';

export default function ExperienceTimeline() {
  const [activeCertificate, setActiveCertificate] = useState(null);

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

      {/* Certificate Preview Modal Popup via Portal */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </section>
  );
}
