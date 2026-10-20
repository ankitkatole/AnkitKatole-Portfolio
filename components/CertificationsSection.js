'use client';

import { useState } from 'react';
import { certificationsData } from '../lib/data';
import HandUnderline from './HandUnderline';
import CertificateModal from './CertificateModal';

export default function CertificationsSection() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { key: 'all', label: 'All Credentials' },
    { key: 'Professional Certification', label: 'Professional Certifications' },
    { key: 'Skill Assessment', label: 'Skill Assessments' },
    { key: 'Project Competition', label: 'Hackathons & Competitions' },
    { key: 'Academic Mentorship', label: 'Mentorship & Academic' }
  ];

  const filteredCerts =
    activeFilter === 'all'
      ? certificationsData
      : certificationsData.filter((c) => c.category === activeFilter);

  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-bg-subtle">
          <span className="mono-label">Verified Certifications</span>
          <h2 className="section-heading mt-2 block">
            <span className="relative inline-block pb-1">
              Licenses & credentials
              <HandUnderline className="text-accent-copper" />
            </span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-xs font-mono">
          <span className="text-ink-faint mr-1 uppercase tracking-wider text-[11px]">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveFilter(cat.key)}
              className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                activeFilter === cat.key
                  ? 'bg-ink-primary text-bg-primary font-medium'
                  : 'bg-bg-surface text-ink-muted hover:text-ink-primary border border-bg-subtle'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-bg-surface border border-bg-subtle hover:border-accent-copper/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Top Row: Issuer & Category */}
                <div className="flex items-center justify-between gap-3 mb-3 text-xs font-mono">
                  <span className="text-accent-copper font-medium tracking-wide">
                    {cert.issuer}
                  </span>
                  <span className="text-ink-faint text-[11px] px-2 py-0.5 rounded bg-bg-elevated border border-bg-subtle">
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-ink-primary mb-2 leading-snug group-hover:text-accent-copper transition-colors">
                  {cert.title}
                </h3>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-ink-faint mb-4">
                  <span>Issued: {cert.issueDate}</span>
                  {cert.expiryDate && (
                    <>
                      <span>·</span>
                      <span>Expires: {cert.expiryDate}</span>
                    </>
                  )}
                  {cert.credentialId && (
                    <>
                      <span>·</span>
                      <span className="text-ink-muted">ID: {cert.credentialId}</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-bg-subtle/70">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[11px] font-mono bg-bg-primary text-ink-muted rounded border border-bg-subtle"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(cert)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono text-ink-primary hover:text-white bg-bg-elevated hover:bg-[#25201c] border border-accent-copper/40 hover:border-accent-copper rounded-lg transition-all shadow-sm cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-copper" />
                    <span>View Certificate</span>
                    <span className="text-accent-copper">↗</span>
                  </button>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-ink-muted hover:text-ink-primary bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper/50 rounded-lg transition-colors"
                      title="Verify directly on official issuer site"
                    >
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
                      <span>Verify Credential</span>
                      <span className="text-accent-copper">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Popup via Portal */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </section>
  );
}
