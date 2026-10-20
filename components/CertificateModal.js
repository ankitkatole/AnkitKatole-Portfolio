'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function CertificateModal({ certificate, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle Escape key, scroll lock, and pause Lenis
  useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Lock page scroll and stop Lenis smoothly
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.stop();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (typeof window !== 'undefined' && window.lenis) {
        window.lenis.start();
      }
    };
  }, [certificate, onClose]);

  // Reset zoom whenever certificate changes
  useEffect(() => {
    setIsZoomed(false);
  }, [certificate]);

  if (!mounted || !certificate) return null;

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={certificate.title}
      className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-150 select-none"
      onClick={onClose}
    >
      <div
        data-lenis-prevent="true"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl max-h-[96vh] bg-[#141210] border border-accent-border/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(196, 130, 89, 0.25)'
        }}
      >
        {/* Fixed Top Toolbar */}
        <div className="px-4 sm:px-6 py-3 bg-[#1C1815] border-b border-bg-subtle flex items-center justify-between gap-3 flex-shrink-0">
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase text-accent-copper font-semibold tracking-wider">
                {certificate.issuer}
              </span>
              {(certificate.ref || certificate.credentialId) && (
                <span className="text-ink-faint text-[10px] font-mono hidden sm:inline">
                  · {certificate.ref || `ID: ${certificate.credentialId}`}
                </span>
              )}
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-ink-primary truncate">
              {certificate.title}
            </h3>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Zoom / Fit Toggle */}
            <button
              type="button"
              onClick={() => setIsZoomed((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-ink-muted hover:text-ink-primary bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper/60 rounded-lg transition-colors cursor-pointer"
              title={isZoomed ? 'Fit full document to screen' : 'Zoom in to inspect details'}
            >
              <svg className="w-3.5 h-3.5 text-accent-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isZoomed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                )}
              </svg>
              <span className="hidden sm:inline">{isZoomed ? 'Fit View' : 'Zoom Details'}</span>
            </button>

            {/* Verification Link (if available) */}
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-ink-primary hover:text-white bg-bg-surface hover:bg-bg-elevated border border-accent-copper/60 hover:border-accent-copper rounded-lg transition-colors hidden sm:inline-flex"
                title="Verify directly on official issuer site"
              >
                <span>Verify</span>
                <span className="text-accent-copper">↗</span>
              </a>
            )}

            {/* Direct Image Link */}
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-ink-muted hover:text-ink-primary bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper/60 rounded-lg transition-colors"
              title="Open full resolution file in a separate tab"
            >
              <span className="hidden sm:inline">Open Original</span>
              <span className="text-accent-copper">↗</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-ink-muted text-ink-muted hover:text-ink-primary flex items-center justify-center transition-colors text-base cursor-pointer"
              aria-label="Close Preview"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Certificate Viewer Stage */}
        <div
          data-lenis-prevent="true"
          className={`flex-1 w-full bg-[#0A0908] p-3 sm:p-5 flex items-center justify-center overflow-auto ${
            isZoomed ? 'cursor-zoom-out items-start' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed((prev) => !prev)}
          style={{
            minHeight: '260px',
            maxHeight: 'calc(94vh - 120px)',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(196, 130, 89, 0.4) rgba(20, 18, 16, 0.5)'
          }}
        >
          <div className="relative inline-block rounded-md shadow-2xl overflow-hidden border border-white/10 bg-white">
            <img
              src={certificate.image}
              alt={certificate.title}
              className={`transition-all duration-200 select-none block ${
                isZoomed
                  ? 'w-full max-w-none h-auto'
                  : 'max-h-[72vh] max-w-full w-auto object-contain mx-auto'
              }`}
              loading="eager"
            />
          </div>
        </div>

        {/* Fixed Bottom Info Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#171412] border-t border-bg-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs flex-shrink-0">
          <p className="text-ink-muted text-xs leading-relaxed max-w-2xl line-clamp-2">
            {certificate.description}
          </p>
          <div className="flex items-center gap-3 text-ink-faint text-[11px] font-mono flex-shrink-0 self-end sm:self-auto">
            <span>{certificate.date || certificate.issueDate}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-status-online" />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
