import Link from 'next/link';
import { personalInfo } from '../lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-subtle bg-bg-surface/50 text-ink-muted text-xs font-mono py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-bg-subtle">
          <div>
            <div className="text-ink-primary font-semibold text-sm mb-1">
              {personalInfo.name}
            </div>
            <p className="text-ink-faint text-xs font-sans max-w-sm">
              Software Engineer specializing in Java, Spring Boot microservices, and reliable backend engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs">
            <Link href="#experience" className="hover:text-ink-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-ink-primary transition-colors">
              Work
            </Link>
            <Link href="#skills" className="hover:text-ink-primary transition-colors">
              Skills
            </Link>
            <Link href="/blog" className="hover:text-ink-primary transition-colors">
              Writing
            </Link>
            <Link href="#about" className="hover:text-ink-primary transition-colors">
              About
            </Link>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-primary transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-primary transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-ink-faint text-[11px]">
          <div>
            © {currentYear} Ankit Katole. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-ink-muted">Press ⌘K for command palette</span>
            <span>·</span>
            <span>Press ` (backtick) for telemetry</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
