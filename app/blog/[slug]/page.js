import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '../../../lib/blog';
import { personalInfo } from '../../../lib/data';
import ArticleBody from '../../../components/ArticleBody';

export async function generateStaticParams() {
  const posts = getAllPosts({ includeDrafts: false });
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug, { includeDrafts: false });

  if (!post) {
    return {
      title: 'Article Not Found'
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} - Ankit Katole`,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [personalInfo.name],
      tags: post.tags,
      images: [
        {
          url: 'https://i.postimg.cc/MpssQPSL/image.png',
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['https://i.postimg.cc/MpssQPSL/image.png']
    }
  };
}

export default function ArticlePage({ params }) {
  const post = getPostBySlug(params.slug, { includeDrafts: false });

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: personalInfo.name,
      url: 'https://ankitkatole.dev'
    },
    publisher: {
      '@type': 'Person',
      name: personalInfo.name
    },
    keywords: post.tags.join(', ')
  };

  return (
    <article className="py-16 md:py-24">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <div className="max-w-3xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-10 flex items-center justify-between text-xs font-mono text-ink-muted">
          <Link
            href="/blog"
            className="hover:text-ink-primary inline-flex items-center gap-1.5 transition-colors"
          >
            <span>← Engineering Journal</span>
          </Link>
          <span>{post.readingTime}</span>
        </div>

        {/* Article Header */}
        <header className="mb-12 pb-8 border-b border-bg-subtle">
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono">
            <span className="text-accent-copper">{post.publishedAt}</span>
            <span className="text-ink-faint">·</span>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-bg-surface text-ink-muted rounded border border-bg-subtle text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-primary tracking-tight leading-[1.2] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
            {post.description}
          </p>

          <div className="mt-8 pt-6 border-t border-bg-subtle flex items-center justify-between text-xs font-mono text-ink-faint">
            <div>Author: {personalInfo.name}</div>
            <div>Capgemini · Software Engineer</div>
          </div>
        </header>

        {/* Article Content */}
        <main className="mb-16">
          <ArticleBody content={post.content} />
        </main>

        {/* Article Footer & Author Box */}
        <footer className="pt-10 border-t border-bg-subtle">
          <div className="p-6 bg-bg-surface border border-bg-subtle rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-ink-primary mb-1">
                Written by {personalInfo.name}
              </div>
              <p className="text-xs text-ink-muted max-w-md font-sans">
                Software Engineer focused on Java 8+, Spring Boot microservices, Kafka event streams, and production reliability.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/?scroll=projects"
                className="px-3 py-1.5 text-xs font-mono bg-bg-elevated hover:bg-bg-subtle text-ink-primary border border-bg-subtle rounded transition-colors"
              >
                View Projects →
              </Link>
              <Link
                href="/?scroll=contact"
                className="px-3 py-1.5 text-xs font-mono text-ink-muted hover:text-ink-primary transition-colors"
              >
                Discuss Post
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
