import Link from 'next/link';
import { getAllPosts, getAllTags } from '../../lib/blog';

export const metadata = {
  title: 'Engineering Journal & Writing',
  description:
    'Technical articles, architectural post-mortems, and engineering notes on Java, Spring Boot microservices, Kafka, and backend systems by Ankit Katole.'
};

export default function BlogIndexPage({ searchParams }) {
  const selectedTag = searchParams?.tag || null;
  const allPosts = getAllPosts({ includeDrafts: false });
  const allTags = getAllTags();

  const filteredPosts = selectedTag
    ? allPosts.filter((post) => post.tags.includes(selectedTag))
    : allPosts;

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="text-xs font-mono text-ink-muted hover:text-ink-primary inline-flex items-center gap-1.5 transition-colors"
          >
            <span>← Back to Portfolio</span>
          </Link>
        </div>

        {/* Editorial Heading */}
        <div className="mb-14 pb-8 border-b border-bg-subtle">
          <span className="mono-label">Engineering Journal</span>
          <h1 className="text-3xl sm:text-5xl font-semibold text-ink-primary mt-2 mb-4">
            Technical writing & architectural notes
          </h1>
          <p className="text-base text-ink-muted max-w-2xl leading-relaxed">
            Reflections on distributed systems, Spring Boot backend patterns, Apache Kafka event streaming, and lessons learned building production software.
          </p>

          {/* Tag Filter Pills */}
          {allTags.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="text-ink-faint mr-1">Filter topic:</span>
              <Link
                href="/blog"
                className={`px-2.5 py-1 rounded transition-colors ${
                  !selectedTag
                    ? 'bg-ink-primary text-bg-primary font-medium'
                    : 'bg-bg-surface text-ink-muted hover:text-ink-primary border border-bg-subtle'
                }`}
              >
                All ({allPosts.length})
              </Link>
              {allTags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${encodeURIComponent(tag)}`}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    selectedTag === tag
                      ? 'bg-ink-primary text-bg-primary font-medium'
                      : 'bg-bg-surface text-ink-muted hover:text-ink-primary border border-bg-subtle'
                  }`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Article Listing */}
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center bg-bg-surface border border-bg-subtle rounded-lg">
            <div className="text-sm font-semibold text-ink-primary mb-1">
              No articles found
            </div>
            <p className="text-xs font-mono text-ink-faint mb-4">
              {selectedTag
                ? `No published articles tagged with "${selectedTag}".`
                : 'No published articles currently available.'}
            </p>
            {selectedTag && (
              <Link
                href="/blog"
                className="text-xs font-mono text-accent-copper hover:underline"
              >
                Clear filter
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Article Card */}
            {featuredPost && (
              <article className="p-6 sm:p-8 bg-bg-surface border border-bg-subtle rounded-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase bg-accent-muted text-accent-copper px-2 py-0.5 rounded border border-accent-border">
                      Featured
                    </span>
                    <span className="text-xs font-mono text-ink-faint">
                      {featuredPost.publishedAt}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-ink-faint">
                    {featuredPost.readingTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-semibold text-ink-primary mb-3">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="hover:text-accent-copper transition-colors"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-sm text-ink-muted leading-relaxed mb-6">
                  {featuredPost.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-bg-subtle">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 bg-bg-elevated text-ink-muted rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="text-xs font-mono text-ink-primary hover:text-accent-copper inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read article</span>
                    <span>→</span>
                  </Link>
                </div>
              </article>
            )}

            {/* Supporting Articles List */}
            {regularPosts.length > 0 && (
              <div className="space-y-6 pt-4">
                <div className="text-xs font-mono text-ink-faint uppercase tracking-wider">
                  Additional Notes
                </div>
                {regularPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="p-6 bg-bg-surface border border-bg-subtle rounded-lg flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 hover:border-bg-subtle/80 transition-colors"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 text-xs font-mono text-ink-faint">
                        <span>{post.publishedAt}</span>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                      </div>

                      <h3 className="text-lg font-semibold text-ink-primary">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-accent-copper transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {post.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-1.5 py-0.5 bg-bg-elevated text-ink-faint rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-mono text-ink-muted hover:text-ink-primary self-start sm:self-auto shrink-0 transition-colors"
                    >
                      Read →
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
