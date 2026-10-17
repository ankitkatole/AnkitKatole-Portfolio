'use client';

import { personalInfo } from '../lib/data';
import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
  LeetCodeIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon
} from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-bg-subtle bg-[#0e0c0b] text-ink-muted pt-16 pb-12 overflow-hidden relative select-none">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Massive Bold Neo-Grotesk Display Name (Inspired by Aaftab Vijapura reference) */}
        <div className="py-8 sm:py-12 border-b border-bg-subtle/70">
          <h2
            className="text-[clamp(3.25rem,13vw,10.5rem)] font-black tracking-[-0.05em] uppercase text-white leading-[0.88] transition-colors"
            style={{
              fontFamily: 'Arial, "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            ANKIT KATOLE
          </h2>
        </div>

        {/* Action Row matching Abdalla Ahmed reference: Circular Back-to-Top + Circular Social Buttons */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Circular Back-to-top button on the left (as in screenshot) */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-bg-subtle bg-bg-surface hover:bg-bg-elevated hover:border-accent-copper flex items-center justify-center text-ink-muted hover:text-white transition-all group shadow-md"
              title="Back to top"
              aria-label="Back to top"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-y-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>

          {/* Centered Row of Circular Brand & Communication Icon Buttons (with flex-wrap for mobile responsiveness) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-full">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-bg-subtle bg-bg-surface hover:bg-bg-elevated hover:border-accent-copper flex items-center justify-center text-ink-muted hover:text-white transition-all shadow-md group flex-shrink-0"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-bg-subtle bg-bg-surface hover:bg-bg-elevated hover:border-accent-copper flex items-center justify-center text-ink-muted hover:text-white transition-all shadow-md group flex-shrink-0"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            <a
              href={personalInfo.links.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-bg-subtle bg-bg-surface hover:bg-bg-elevated hover:border-accent-copper flex items-center justify-center text-ink-muted hover:text-white transition-all shadow-md group flex-shrink-0"
              title="Medium Articles (@unemployedEngineer)"
              aria-label="Medium Articles"
            >
              <MediumIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            <a
              href={personalInfo.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-bg-subtle bg-bg-surface hover:bg-bg-elevated hover:border-accent-copper flex items-center justify-center text-ink-muted hover:text-white transition-all shadow-md group flex-shrink-0"
              title="LeetCode Profile"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            <a
              href={personalInfo.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-bg-subtle bg-bg-surface hover:bg-bg-elevated hover:border-accent-copper flex items-center justify-center text-ink-muted hover:text-white transition-all shadow-md group flex-shrink-0"
              title={`WhatsApp (${personalInfo.phone})`}
              aria-label="Direct WhatsApp Message"
            >
              <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-bg-subtle bg-bg-surface hover:bg-bg-elevated hover:border-accent-copper flex items-center justify-center text-ink-muted hover:text-white transition-all shadow-md group flex-shrink-0"
              title={`Call ${personalInfo.phone}`}
              aria-label="Direct Phone Call"
            >
              <PhoneIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-bg-subtle bg-bg-surface hover:bg-bg-elevated hover:border-accent-copper flex items-center justify-center text-ink-muted hover:text-white transition-all shadow-md group flex-shrink-0"
              title={`Email ${personalInfo.email}`}
              aria-label="Direct Email"
            >
              <MailIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Right Status / Open for Work indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-ink-muted">
            <span className="w-2 h-2 rounded-full bg-status-online animate-pulse" />
            <span>Open for roles</span>
          </div>
        </div>

        {/* Minimal Copyright Line (as in screenshot, with extra mobile bottom clearance for chat widget) */}
        <div className="mt-10 pt-6 border-t border-bg-subtle/50 text-center text-xs font-mono text-ink-faint pb-14 sm:pb-0">
          © {currentYear} Ankit Katole. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
