'use client';

import { useState } from 'react';
import { personalInfo } from '../lib/data';
import { GitHubIcon, LinkedInIcon, MediumIcon, LeetCodeIcon, PhoneIcon, WhatsAppIcon } from './SocialIcons';
import HandUnderline from './HandUnderline';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');

    // Simulate sending and trigger direct mailto fallback
    setTimeout(() => {
      setFormStatus('sent');
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Hi Ankit,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-bg-subtle">
          <span className="mono-label">Get in Touch</span>
          <h2 className="section-heading mt-2 block">
            <span className="relative inline-block pb-1">
              Start a conversation
              <HandUnderline className="text-accent-copper" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-ink-primary mb-2">Direct Contact</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-sans">
                I check my inbox regularly for technical inquiries, engineering opportunities, and project feedback.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="bg-bg-surface border border-bg-subtle rounded-lg p-5">
              <div className="text-xs font-mono text-ink-faint uppercase mb-1">Direct Email</div>
              <div className="flex items-center justify-between gap-2 mt-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-mono text-ink-primary hover:text-accent-copper transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="px-2.5 py-1 text-xs font-mono bg-bg-elevated hover:bg-bg-subtle border border-bg-subtle text-ink-muted hover:text-ink-primary rounded transition-colors whitespace-nowrap"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Phone / Call Direct Card */}
            <div className="bg-bg-surface border border-bg-subtle rounded-lg p-5">
              <div className="text-xs font-mono text-ink-faint uppercase mb-1">Direct Phone / Call</div>
              <div className="flex items-center justify-between gap-2 mt-1">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm font-mono text-ink-primary hover:text-accent-copper transition-colors inline-flex items-center gap-2"
                >
                  <PhoneIcon className="w-4 h-4 text-accent-copper" />
                  <span>{personalInfo.phone}</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="px-2.5 py-1 text-xs font-mono bg-bg-elevated hover:bg-bg-subtle border border-bg-subtle text-ink-muted hover:text-ink-primary rounded transition-colors whitespace-nowrap"
                >
                  Call Now ↗
                </a>
              </div>
            </div>

            {/* WhatsApp Direct Card */}
            <div className="bg-bg-surface border border-bg-subtle rounded-lg p-5">
              <div className="text-xs font-mono text-ink-faint uppercase mb-1">Direct WhatsApp</div>
              <div className="flex items-center justify-between gap-2 mt-1">
                <a
                  href={personalInfo.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-ink-primary hover:text-accent-copper transition-colors inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-accent-copper" />
                  <span>{personalInfo.phone}</span>
                </a>
                <a
                  href={personalInfo.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-mono bg-bg-elevated hover:bg-bg-subtle border border-bg-subtle text-ink-muted hover:text-ink-primary rounded transition-colors whitespace-nowrap"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>

            {/* Verified Public Profiles with official SVG Icons */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-ink-faint uppercase">Verified Profiles</div>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper/60 rounded-lg text-ink-muted hover:text-ink-primary transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <GitHubIcon className="w-4 h-4 text-ink-primary group-hover:text-accent-copper transition-colors" />
                    <span className="text-ink-primary font-medium">GitHub</span>
                  </div>
                  <span className="text-ink-faint group-hover:text-accent-copper group-hover:translate-x-0.5 transition-all">↗</span>
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper/60 rounded-lg text-ink-muted hover:text-ink-primary transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedInIcon className="w-4 h-4 text-ink-primary group-hover:text-accent-copper transition-colors" />
                    <span className="text-ink-primary font-medium">LinkedIn</span>
                  </div>
                  <span className="text-ink-faint group-hover:text-accent-copper group-hover:translate-x-0.5 transition-all">↗</span>
                </a>

                <a
                  href={personalInfo.links.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper/60 rounded-lg text-ink-muted hover:text-ink-primary transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <MediumIcon className="w-4 h-4 text-ink-primary group-hover:text-accent-copper transition-colors" />
                    <span className="text-ink-primary font-medium">Medium</span>
                  </div>
                  <span className="text-ink-faint group-hover:text-accent-copper group-hover:translate-x-0.5 transition-all">↗</span>
                </a>

                <a
                  href={personalInfo.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-bg-surface hover:bg-bg-elevated border border-bg-subtle hover:border-accent-copper/60 rounded-lg text-ink-muted hover:text-ink-primary transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <LeetCodeIcon className="w-4 h-4 text-ink-primary group-hover:text-accent-copper transition-colors" />
                    <span className="text-ink-primary font-medium">LeetCode</span>
                  </div>
                  <span className="text-ink-faint group-hover:text-accent-copper group-hover:translate-x-0.5 transition-all">↗</span>
                </a>
              </div>
            </div>

            {/* Resume Callout */}
            <div className="p-4 bg-bg-elevated/40 border border-bg-subtle rounded-md flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-ink-primary">Offline Curriculum Vitae</div>
                <div className="text-[11px] font-mono text-ink-faint">
                  Compiled PDF version (ReportLab format)
                </div>
              </div>
              <a
                href={personalInfo.resumePath}
                download="Ankit_Katole_Software_Engineer_Resume.pdf"
                className="px-3 py-1.5 text-xs font-mono uppercase bg-bg-surface hover:bg-bg-elevated border border-bg-subtle text-ink-primary rounded"
              >
                Download ↓
              </a>
            </div>
          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-bg-surface border border-bg-subtle rounded-lg p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink-primary mb-5">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-ink-faint uppercase mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Jane Smith"
                  className="w-full bg-bg-primary border border-bg-subtle focus:border-accent-copper rounded px-3.5 py-2.5 text-sm text-ink-primary placeholder:text-ink-faint/50 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-ink-faint uppercase mb-1.5">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. jane@company.com"
                  className="w-full bg-bg-primary border border-bg-subtle focus:border-accent-copper rounded px-3.5 py-2.5 text-sm text-ink-primary placeholder:text-ink-faint/50 outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-ink-faint uppercase mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your project, team opportunity, or inquiry..."
                  className="w-full bg-bg-primary border border-bg-subtle focus:border-accent-copper rounded px-3.5 py-2.5 text-sm text-ink-primary placeholder:text-ink-faint/50 outline-none transition-colors resize-none"
                />
              </div>

              {formStatus === 'error' && (
                <div className="text-xs font-mono text-red-400 bg-red-950/20 border border-red-900/40 p-2.5 rounded">
                  Please complete all fields before sending.
                </div>
              )}

              {formStatus === 'sent' && (
                <div className="text-xs font-mono text-status-online bg-status-online/10 border border-status-online/30 p-2.5 rounded">
                  Thank you! Your mail client has been opened with your message.
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full py-3 text-xs font-mono uppercase tracking-wider font-semibold text-bg-primary bg-ink-primary hover:bg-white rounded transition-colors disabled:opacity-50"
              >
                {formStatus === 'sending' ? 'Composing...' : 'Submit via Email Client →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
