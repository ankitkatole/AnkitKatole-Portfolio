'use client';

import { personalInfo } from '../lib/data';
import HandUnderline from './HandUnderline';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex flex-col justify-center py-6 sm:py-10 border-b border-bg-subtle overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Primary Typographic Composition with Rich Copper Color Mix */}
        <div className="max-w-4xl space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-600">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-primary leading-[1.14]">
            Building robust backend systems with{' '}
            <span className="relative inline-block text-accent-copper font-extrabold pb-1">
              Java & Spring Boot
              <HandUnderline className="text-accent-copper" />
            </span>
            , LLM integration, and modern web applications.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-ink-muted max-w-2xl leading-relaxed font-normal">
            I engineer reliable backend services, distributed workflows, and intelligent full-stack applications. Currently working at Capgemini with hands-on experience across Java, Spring Boot, RAG development, and LLM integrations.
          </p>
        </div>

        {/* Primary Call to Actions (Smooth scroll without URL hash routing) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-5 duration-800">
          <button
            type="button"
            onClick={() => scrollTo('experience')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-bg-primary bg-ink-primary hover:bg-white rounded transition-colors cursor-pointer"
          >
            <span>View Experience</span>
            <span aria-hidden="true">→</span>
          </button>

          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono text-ink-primary bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper rounded transition-colors cursor-pointer"
          >
            <span>Selected Projects</span>
          </button>

          <a
            href={personalInfo.resumePath}
            download="Ankit_Katole_Software_Engineer_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-mono text-ink-muted hover:text-ink-primary transition-colors"
          >
            <span>Resume (PDF) ↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
