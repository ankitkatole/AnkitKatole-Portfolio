'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { personalInfo } from '../lib/data';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  const commands = [
    {
      category: 'Navigation',
      label: 'Go to Featured Projects',
      shortcut: 'P',
      action: () => router.push('/#projects')
    },
    {
      category: 'Diagnostics',
      label: 'Open System Telemetry Diagnostics',
      shortcut: '`',
      action: () => window.dispatchEvent(new CustomEvent('toggle-telemetry-drawer'))
    },
    {
      category: 'Navigation',
      label: 'View Professional Experience',
      shortcut: 'E',
      action: () => router.push('/#experience')
    },
    {
      category: 'Navigation',
      label: 'Inspect Technical Skills',
      shortcut: 'S',
      action: () => router.push('/#skills')
    },
    {
      category: 'Navigation',
      label: 'Explore Technical Writing (Blog)',
      shortcut: 'B',
      action: () => router.push('/blog')
    },
    {
      category: 'Navigation',
      label: 'About & Academic Roots',
      shortcut: 'A',
      action: () => router.push('/#about')
    },
    {
      category: 'Navigation',
      label: 'Contact Information',
      shortcut: 'C',
      action: () => router.push('/#contact')
    },
    {
      category: 'Actions',
      label: 'Copy Email Address (katoleankit06@gmail.com)',
      shortcut: '↵',
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopiedNotification(true);
        setTimeout(() => setCopiedNotification(false), 2000);
      }
    },
    {
      category: 'Actions',
      label: 'Download Resume PDF',
      shortcut: '↓',
      action: () => {
        window.open(personalInfo.resumePath, '_blank');
      }
    },
    {
      category: 'Profiles',
      label: 'Open GitHub Profile (@ankitkatole)',
      shortcut: 'G',
      action: () => window.open(personalInfo.links.github, '_blank')
    },
    {
      category: 'Profiles',
      label: 'Open LinkedIn Profile',
      shortcut: 'L',
      action: () => window.open(personalInfo.links.linkedin, '_blank')
    },
    {
      category: 'Profiles',
      label: 'Open LeetCode Profile',
      shortcut: 'LC',
      action: () => window.open(personalInfo.links.leetcode, '_blank')
    }
  ];

  // Easter egg triggers
  const easterEggs = {
    kafka: 'Kafka Tip: In Spring for Apache Kafka, pair @RetryableTopic with @DltHandler and an ExponentialBackOff to preserve consumer partition throughput without stalling broker commits.',
    capgemini: 'Current Focus: Order Process Management microservices in telecommunications, implementing scheduled cron tasks, Swagger contract documentation, and Spring Boot Actuator telemetry.',
    spring: 'Spring Boot Tip: ProblemDetail provides standardized error responses for REST APIs.',
    secret: 'Engineering Motto: Make the contracts explicit, the errors readable, and the message processing idempotent.'
  };

  const easterEggMessage = easterEggs[query.trim().toLowerCase()];

  // Filter commands by search query
  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle palette with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomToggle = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('toggle-command-palette', handleCustomToggle);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toggle-command-palette', handleCustomToggle);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const handleSelect = (cmd) => {
    cmd.action();
    setIsOpen(false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        handleSelect(filteredCommands[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-bg-surface border border-bg-subtle rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 border-b border-bg-subtle">
          <span className="text-ink-faint font-mono text-xs mr-2">⌘</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Search commands, sections, or type 'kafka'..."
            className="w-full bg-transparent py-3.5 text-sm font-sans text-ink-primary placeholder:text-ink-faint outline-none"
          />
          <kbd className="text-[10px] font-mono text-ink-faint bg-bg-elevated px-2 py-0.5 rounded border border-bg-subtle">
            ESC
          </kbd>
        </div>

        {/* Easter Egg Output */}
        {easterEggMessage && (
          <div className="p-3.5 bg-bg-elevated/70 border-b border-accent-border text-xs font-mono text-accent-copper leading-relaxed">
            {easterEggMessage}
          </div>
        )}

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.label}
                  type="button"
                  onClick={() => handleSelect(cmd)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded text-left text-xs font-mono transition-colors ${
                    isSelected
                      ? 'bg-bg-elevated text-ink-primary font-medium'
                      : 'text-ink-muted hover:bg-bg-elevated/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] text-ink-faint uppercase w-16">
                      {cmd.category}
                    </span>
                    <span className="text-ink-primary font-sans text-xs">
                      {cmd.label}
                    </span>
                  </div>
                  <span className="text-[10px] text-ink-faint bg-bg-primary px-1.5 py-0.5 rounded border border-bg-subtle">
                    {cmd.shortcut}
                  </span>
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs font-mono text-ink-faint">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2 bg-bg-elevated/30 border-t border-bg-subtle flex items-center justify-between text-[11px] font-mono text-ink-faint">
          <span>{copiedNotification ? '✓ Email copied to clipboard' : '↑↓ to navigate · Enter to select'}</span>
          <span>Ankit Katole Portfolio</span>
        </div>
      </div>
    </div>
  );
}
