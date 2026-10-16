'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('ankit_portfolio_cookie_consent');
    if (!consent) {
      // Small delay before showing so it doesn't jarringly pop on immediate page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (level) => {
    localStorage.setItem('ankit_portfolio_cookie_consent', level);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie & Session Preferences"
      className="fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] bg-bg-surface/95 border border-accent-border/60 rounded-xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <span className="text-xl select-none" aria-hidden="true">
          🍪
        </span>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-copper">
              Session & Telemetry
            </h4>
            <span className="text-[10px] font-mono text-ink-faint">Storage</span>
          </div>
          <p className="text-xs text-ink-muted leading-relaxed font-sans">
            We use local storage cookies strictly for developer telemetry, UI theme state, and session diagnostics. Zero third-party ad trackers.
          </p>
        </div>
      </div>

      <div className="mt-3.5 pt-3 border-t border-bg-subtle/70 flex items-center justify-end gap-2 text-xs font-mono">
        <button
          type="button"
          onClick={() => handleConsent('essential')}
          className="px-3 py-1.5 text-ink-muted hover:text-ink-primary bg-bg-elevated hover:bg-bg-subtle rounded border border-bg-subtle transition-colors"
        >
          Essential Only
        </button>
        <button
          type="button"
          onClick={() => handleConsent('all')}
          className="px-3.5 py-1.5 text-bg-primary bg-accent-copper hover:bg-white font-medium rounded transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
