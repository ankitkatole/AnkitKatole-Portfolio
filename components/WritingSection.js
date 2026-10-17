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

        {/* Medium Profile Showcase (Bold, attractive card with proper icon & clear profile redirection) */}
        <div className="mb-10 relative overflow-hidden rounded-2xl border border-accent-border/70 bg-gradient-to-br from-[#1C1815] via-[#221C18] to-[#181512] p-6 sm:p-9 shadow-2xl">
          {/* Ambient copper glow effects */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent-copper/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent-copper/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-bg-surface border border-accent-border flex items-center justify-center text-accent-copper shadow-inner">
                  <MediumIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-accent-copper font-medium">
                      Medium Profile
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-status-online" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
                    Technical Articles on Medium
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                I write technical deep-dives on distributed systems, Spring Boot microservice patterns, Kafka event streaming, and clean backend architecture. Read my full catalog of articles directly on Medium.
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono">
                <span className="text-ink-faint">Publication handle:</span>
                <span className="text-accent-copper bg-accent-muted/80 px-2.5 py-0.5 rounded border border-accent-border/50">
                  @unemployedEngineer
                </span>
                <span className="text-ink-faint hidden sm:inline">·</span>
                <span className="text-ink-muted hidden sm:inline">Java 8+ · Microservices · Kafka · Spring AI</span>
              </div>
            </div>

            {/* Prominent Call to Action sending user to Medium page */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 flex-shrink-0">
              <a
                href={personalInfo.links.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 text-sm font-semibold text-bg-primary bg-ink-primary hover:bg-white rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95"
                title="Visit Ankit Katole's Medium Profile"
              >
                <MediumIcon className="w-5 h-5 text-bg-primary" />
                <span>Go to my profile</span>
                <span className="text-bg-primary transition-transform group-hover:translate-x-1 font-mono text-base">
                  →
                </span>
              </a>

              <span className="text-center sm:text-right text-[11px] font-mono text-ink-faint">
                Opens medium.com/@unemployedEngineer
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
                {publication.period} · {publication.pages}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-ink-primary mb-3 leading-snug">
              {publication.title}
            </h3>

            {/* Authors List */}
            <div className="text-xs font-mono text-ink-muted mb-4 flex flex-wrap items-center gap-1.5">
              <span className="text-ink-faint">Authors:</span>
              {publication.authors.map((author, idx) => (
                <span key={idx} className="inline-flex items-center">
                  <span
                    className={
                      author.isHighlighted
                        ? 'text-accent-copper font-semibold bg-accent-muted/60 px-1.5 py-0.5 rounded'
                        : 'text-ink-muted'
                    }
                  >
                    {author.name}
                  </span>
                  {idx < publication.authors.length - 1 && (
                    <span className="text-ink-faint ml-1">,</span>
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

              {/* Direct Website / PDF Link */}
              <a
                href={publication.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-bg-primary bg-accent-copper hover:bg-white rounded-lg transition-all duration-150 group shadow-md"
              >
                <span>Read Journal Publication (PDF)</span>
                <span className="transition-transform group-hover:translate-x-0.5 font-mono">↗</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
