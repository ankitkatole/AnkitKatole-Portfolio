import { publicationsData, featuredArticle } from '../lib/data';
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
              Featured article & research publications
              <HandUnderline className="text-accent-copper" />
            </span>
          </h2>
        </div>

        {/* Featured Technical Article on Medium (Before Journal Publication) */}
        {featuredArticle && (
          <div className="mb-10 p-6 sm:p-8 bg-bg-surface border border-accent-border/70 rounded-2xl hover:border-accent-copper/60 transition-all duration-200 shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono uppercase bg-accent-muted text-accent-copper px-2.5 py-0.5 rounded border border-accent-border font-medium">
                  Featured Article
                </span>
                <span className="text-xs font-mono text-ink-faint flex items-center gap-1.5">
                  <MediumIcon className="w-3.5 h-3.5 text-accent-copper" />
                  <span>Medium · {featuredArticle.handle}</span>
                </span>
              </div>
              <span className="text-xs font-mono text-ink-faint">
                Architecture Deep-Dive
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-ink-primary mb-3 leading-snug">
              {featuredArticle.title}
            </h3>

            <p className="text-sm text-ink-muted leading-relaxed mb-6 font-normal">
              {featuredArticle.description}
            </p>

            {/* Tags and Action CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-bg-subtle">
              <div className="flex flex-wrap gap-1.5">
                {featuredArticle.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 bg-bg-elevated text-ink-faint rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Direct Link to Medium Article with High Contrast */}
              <a
                href={featuredArticle.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-accent-copper hover:bg-accent-hover rounded-lg transition-all duration-150 group shadow-md"
              >
                <MediumIcon className="w-4 h-4 text-white flex-shrink-0" />
                <span>Read on Medium</span>
                <span className="text-white transition-transform group-hover:translate-x-0.5 font-mono">↗</span>
              </a>
            </div>
          </div>
        )}

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
                <span>Read Journal Publication (PDF)</span>
                <span className="text-white transition-transform group-hover:translate-x-0.5 font-mono">↗</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
