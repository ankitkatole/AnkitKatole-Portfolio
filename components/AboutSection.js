import Image from 'next/image';
import { educationData, personalInfo } from '../lib/data';
import HandUnderline from './HandUnderline';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-bg-subtle">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-bg-subtle">
          <span className="mono-label">Background & Principles</span>
          <h2 className="section-heading mt-2 block">
            <span className="relative inline-block pb-1">
              Engineering philosophy & roots
              <HandUnderline className="text-accent-copper" />
            </span>
          </h2>
        </div>

        {/* Narrative & Academic Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Direct Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
            <p>
              I am a Software Engineer who thrives on backend architecture, API contract design, and the discipline of resilient distributed services. Currently at Capgemini, my daily work centers on enterprise order workflows that coordinate complex telecommunication services.
            </p>

            <p>
              My approach prioritizes architectural clarity over fleeting trends. I care deeply about clean exception handling, database schema constraints, reliable messaging with Apache Kafka, and writing maintainable Java that respects memory, concurrency, and operational observability.
            </p>

            <p>
              Beyond the enterprise backend, I have shipped full-stack applications with React, Next.js, and Node.js for international clients, and experimented with cryptography and decentralized storage on Solana and IPFS. When integrating modern AI models, I look for deterministic boundaries, using Spring AI schema parsers to turn generative outputs into dependable application data.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono">
              <div className="p-3 bg-bg-surface border border-bg-subtle rounded flex-1 min-w-[200px]">
                <div className="text-ink-faint uppercase mb-1">Academic Metric</div>
                <div className="text-ink-primary font-semibold text-sm">
                  {educationData.cgpa} CGPA
                </div>
                <div className="text-ink-faint text-[11px] mt-0.5">B.Tech in Computer Science</div>
              </div>

              <div className="p-3 bg-bg-surface border border-bg-subtle rounded flex-1 min-w-[200px]">
                <div className="text-ink-faint uppercase mb-1">Peer Leadership</div>
                <div className="text-ink-primary font-semibold text-sm">
                  Kafka Peer Instructor
                </div>
                <div className="text-ink-faint text-[11px] mt-0.5">Distributed messaging workshops</div>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Education & Campus Activities (5 cols) */}
          <div className="lg:col-span-5 bg-bg-surface border border-bg-subtle rounded-lg p-6 sm:p-7">
            <span className="mono-label">Academic Credentials</span>
            <h3 className="text-lg font-semibold text-ink-primary mt-2 mb-1">
              {educationData.degree}
            </h3>
            <p className="text-xs font-mono text-accent-copper mb-4">
              {educationData.institution} · {educationData.location}
            </p>

            <div className="text-xs font-mono text-ink-faint mb-6">
              {educationData.period} · Graduation with Honors (9.61 CGPA)
            </div>

            <div className="border-t border-bg-subtle pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-ink-faint">
                Curriculum & Leadership Highlights
              </div>
              <ul className="space-y-2.5">
                {educationData.highlights.map((item, idx) => (
                  <li key={idx} className="text-xs text-ink-muted flex items-start gap-2.5">
                    <span className="text-accent-copper text-xs mt-0.5 select-none">•</span>
                    <span className="leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
