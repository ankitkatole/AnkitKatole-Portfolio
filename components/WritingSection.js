import { personalInfo, publicationsData } from '../lib/data';
import { MediumIcon } from './SocialIcons';
import HandUnderline from './HandUnderline';

export default function WritingSection() {
  const publication = publicationsData[0];

  return (
    <section id="writing" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 pb-6 border-b border-bg-subtle">
          <span className="mono-label">Publications & Writing</span>
          <h2 className="section-heading mt-2 block">
            <span className="relative inline-block pb-1">
              Research publications & engineering writing
              <HandUnderline className="text-accent-copper" />
            </span>
          </h2>
        </div>

        {/* Medium Profile Showcase */}
        <div className="mb-10 relative overflow-hidden rounded-2xl border border-accent-border/70 bg-gradient-to-br from-[#1C1815] via-[#221C18] to-[#181512] p-6 sm:p-9 shadow-2xl">
          {/* Ambient copper glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent-copper/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent-copper/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-bg-surface border border-accent-border flex items-center justify-center text-accent-copper shadow-inner flex-shrink-0">
                  <MediumIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-accent-copper font-medium">
                      Medium
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-status-online" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
                    Visit my Medium
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                Read my engineering articles, architectural insights, and technical notes directly on Medium.
              </p>

              <div className="flex items-center gap-2 pt-1 text-xs font-mono">
                <span className="text-ink-faint">Medium:</span>
                <span className="text-ink-primary font-medium">@unemployedEngineer</span>
              </div>
            </div>

            {/* High-Contrast, Crystal Clear Call to Action Button */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 flex-shrink-0">
              <a
                href={personalInfo.links.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-accent-copper hover:bg-accent-hover rounded-xl transition-all duration-200 shadow-xl active:scale-95"
                title="Visit Ankit Katole's Medium Profile"
              >
                <MediumIcon className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white font-semibold">Visit my Medium</span>
                <span className="text-white transition-transform group-hover:translate-x-1 font-mono text-base">
                  →
                </span>
              </a>

              <span className="text-center sm:text-right text-[11px] font-mono text-ink-faint">
                medium.com/@unemployedEngineer
              </span>
            </div>
          </div>
        </div>

        {/* Peer-Reviewed Journal Publication Artifact */}
        {publication && (
          <div className="p-6 sm:p-8 bg-bg-surface border border-accent-border/70 rounded-2xl hover:border-accent-copper/60 transition-all duration-200 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase bg-accent-muted text-accent-copper px-2.5 py-0.5 rounded border border-accent-border font-medium">
                  {publication.type}
                </span>
                <span className="text-xs font-mono text-ink-faint">
                  {publication.journal} · {publication.volume}
                </span>
              </div>
              <span className="text-xs font-mono text-ink-faint">
                {publication.period}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-ink-primary mb-3 leading-snug">
              {publication.title}
            </h3>

            {/* Authors List (Clean, High-Contrast Typography without muddy background blocks) */}
            <div className="text-xs font-mono text-ink-muted mb-4 flex flex-wrap items-center gap-1.5 leading-relaxed">
              <span className="text-ink-faint">Authors:</span>
              {publication.authors.map((author, idx) => (
                <span key={idx} className="inline-flex items-center">
                  <span
                    className={
                      author.isHighlighted
                        ? 'text-ink-primary font-bold underline decoration-accent-copper decoration-2 underline-offset-4'
                        : 'text-ink-muted'
                    }
                  >
                    {author.name}
                  </span>
                  {idx < publication.authors.length - 1 && (
                    <span className="text-ink-faint mr-1">,</span>
                  )}
                </span>
              ))}
            </div>

            <p className="text-sm text-ink-muted leading-relaxed mb-6 font-normal">
              {publication.abstract}
            </p>

            {/* Tags and Action CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-bg-subtle">
              <div className="flex flex-wrap gap-1.5">
                {publication.keywords.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 bg-bg-elevated text-ink-faint rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Direct Website / PDF Link with High Contrast */}
              <a
                href={publication.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-accent-copper hover:bg-accent-hover rounded-lg transition-all duration-150 group shadow-md"
              >
                <span className="text-white">Read Journal Publication (PDF)</span>
                <span className="text-white transition-transform group-hover:translate-x-0.5 font-mono">↗</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
