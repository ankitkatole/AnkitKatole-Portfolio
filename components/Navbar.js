'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo } from '../lib/data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: pathname === '/' ? '#projects' : '/#projects' },
    { label: 'Engineering', href: pathname === '/' ? '#engineering' : '/#engineering' },
    { label: 'Experience', href: pathname === '/' ? '#experience' : '/#experience' },
    { label: 'Skills', href: pathname === '/' ? '#skills' : '/#skills' },
    { label: 'Writing', href: '/blog' },
    { label: 'About', href: pathname === '/' ? '#about' : '/#about' }
  ];

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('toggle-command-palette'));
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-bg-primary/95 border-b border-bg-subtle backdrop-blur-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Name Anchor */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-ink-primary hover:text-ink-primary"
          aria-label="Ankit Katole, Home"
        >
          <span className="w-2 h-2 rounded-full bg-accent-copper inline-block" />
          <span className="font-semibold tracking-tight text-sm md:text-base">
            Ankit Katole
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-ink-faint border-l border-bg-subtle pl-3">
            SE · Capgemini
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-muted">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors duration-150 hover:text-ink-primary ${
                  isActive ? 'text-ink-primary font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions: Resume + Command Palette Trigger */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={openCommandPalette}
            className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-mono text-ink-muted bg-bg-surface hover:bg-bg-elevated border border-bg-subtle rounded transition-colors"
            title="Open Command Palette (Ctrl+K or ⌘K)"
            aria-label="Open command palette"
          >
            <span>Search</span>
            <kbd className="text-[10px] bg-bg-elevated text-ink-faint px-1.5 py-0.5 rounded border border-bg-subtle">
              ⌘K
            </kbd>
          </button>

          <a
            href={personalInfo.resumePath}
            download="Ankit_Katole_Software_Engineer_Resume.pdf"
            className="px-3 py-1.5 text-xs font-mono uppercase tracking-wide text-ink-primary bg-bg-elevated hover:bg-bg-subtle border border-bg-subtle hover:border-accent-copper rounded transition-colors"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={openCommandPalette}
            className="p-2 text-ink-muted hover:text-ink-primary"
            aria-label="Open command palette"
          >
            <span className="font-mono text-xs">⌘K</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink-muted hover:text-ink-primary focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-bg-surface border-b border-bg-subtle px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink-muted hover:text-ink-primary py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-bg-subtle flex items-center justify-between">
            <a
              href={personalInfo.resumePath}
              download="Ankit_Katole_Software_Engineer_Resume.pdf"
              className="text-xs font-mono uppercase tracking-wide text-ink-primary hover:text-accent-copper"
            >
              Download Resume (PDF) ↓
            </a>
            <span className="text-xs font-mono text-ink-faint">Bangalore, IN</span>
          </div>
        </div>
      )}
    </header>
  );
}
