import { personalInfo } from '../lib/data';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] flex flex-col justify-center py-6 sm:py-10 border-b border-bg-subtle overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Primary Typographic Composition with Rich Copper Color Mix */}
        <div className="max-w-4xl space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-600">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-primary leading-[1.12]">
            Building robust backend systems with{' '}
            <span className="text-accent-copper font-medium border-b-2 border-accent-copper/70 pb-0.5">
              Java & Spring Boot
            </span>
            , REST APIs, and modern web applications.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-ink-muted max-w-2xl leading-relaxed font-normal">
            I engineer reliable backend services, distributed workflows, and responsive full-stack applications. Currently working at Capgemini with hands-on experience across Java, Spring Boot, MySQL, and the MERN stack.
          </p>
        </div>

        {/* Clean Technical Anchor Grid */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-bg-subtle grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-xs font-mono animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div>
            <div className="text-ink-faint uppercase tracking-wider mb-1">Backend</div>
            <div className="text-ink-primary font-medium">Java, Spring Boot</div>
          </div>
          <div>
            <div className="text-ink-faint uppercase tracking-wider mb-1">Architecture</div>
            <div className="text-ink-primary font-medium">Microservices & REST APIs</div>
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
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-5 duration-800">
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
