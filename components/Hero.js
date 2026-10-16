import { personalInfo } from '../lib/data';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Sub-header and Location */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-bg-surface border border-bg-subtle rounded text-xs font-mono text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-status-online inline-block" />
            <span>Software Engineer at Capgemini</span>
          </div>

          <div className="text-xs font-mono text-ink-faint">
            India
          </div>
        </div>

        {/* Primary Typographic Composition with Original Styling */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-primary leading-[1.15]">
            Building backend systems with{' '}
            <span className="text-ink-primary border-b-2 border-accent-copper/70 pb-0.5">
              Java & Spring Boot
            </span>
            , REST APIs, and modern web applications.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-ink-muted max-w-2xl leading-relaxed font-normal">
            I build reliable backend services, REST APIs, and responsive full-stack applications. Currently working at Capgemini with hands-on experience across Java, Spring Boot, MySQL, and the MERN stack.
          </p>
        </div>

        {/* Clean Technical Anchor Grid */}
        <div className="mt-12 pt-8 border-t border-bg-subtle grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
          <div>
            <div className="text-ink-faint uppercase tracking-wider mb-1">Backend</div>
            <div className="text-ink-primary font-medium">Java, Spring Boot</div>
          </div>
          <div>
            <div className="text-ink-faint uppercase tracking-wider mb-1">APIs</div>
            <div className="text-ink-primary font-medium">RESTful APIs & Microservices</div>
          </div>
          <div>
            <div className="text-ink-faint uppercase tracking-wider mb-1">Frontend</div>
            <div className="text-ink-primary font-medium">React.js & Tailwind CSS</div>
          </div>
          <div>
            <div className="text-ink-faint uppercase tracking-wider mb-1">Databases</div>
            <div className="text-ink-primary font-medium">MySQL & MongoDB</div>
          </div>
        </div>

        {/* Primary Call to Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-bg-primary bg-ink-primary hover:bg-white rounded transition-colors"
          >
            <span>View Experience</span>
            <span aria-hidden="true">→</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono text-ink-primary bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper rounded transition-colors"
          >
            <span>Selected Projects</span>
          </a>

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
