'use client';

import { useState, useEffect, useRef } from 'react';

const GLYPHS = ['0', '1', 'λ', '#', '{', '}', '/', '_', ':', '§', 'µ', '&'];

export default function UniqueTypewriter({
  phrases = [
    'Java 8+ & Spring Boot',
    'Kafka event streams',
    'Spring Cloud microservices',
    'telecom order workflows',
    'RFC-7807 REST contracts'
  ],
  typeSpeed = 45,
  scrambleRounds = 3,
  pauseDuration = 2800
}) {
  const [displayText, setDisplayText] = useState(phrases[0]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeoutId;
    let isMounted = true;

    const currentPhrase = phrases[phraseIndex];
    const nextIndex = (phraseIndex + 1) % phrases.length;
    const targetPhrase = phrases[nextIndex];

    // Wait during display pause
    timeoutId = setTimeout(() => {
      if (!isMounted) return;
      setIsScrambling(true);

      const maxLength = Math.max(currentPhrase.length, targetPhrase.length);
      let step = 0;
      const totalSteps = maxLength + scrambleRounds;

      const intervalId = setInterval(() => {
        if (!isMounted) {
          clearInterval(intervalId);
          return;
        }

        step++;

        // Build transitional string with resolving glyphs
        const resolvedChars = targetPhrase.slice(0, Math.max(0, step - scrambleRounds));
        const scrambleCount = Math.min(
          scrambleRounds,
          Math.max(0, targetPhrase.length - resolvedChars.length)
        );

        let scrambledPart = '';
        for (let i = 0; i < scrambleCount; i++) {
          const randomGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          scrambledPart += randomGlyph;
        }

        setDisplayText(resolvedChars + scrambledPart);

        if (step >= totalSteps) {
          clearInterval(intervalId);
          setDisplayText(targetPhrase);
          setIsScrambling(false);
          setPhraseIndex(nextIndex);
        }
      }, typeSpeed);
    }, pauseDuration);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [phraseIndex, phrases, typeSpeed, scrambleRounds, pauseDuration, prefersReducedMotion]);

  return (
    <span className="inline-block relative font-mono text-accent-copper tracking-normal select-none">
      <span className="border-b-2 border-accent-copper/80 pb-0.5">
        {displayText}
      </span>
      <span
        aria-hidden="true"
        className="inline-block w-[2px] h-[0.9em] ml-1 bg-accent-copper align-middle animate-pulse"
      />
    </span>
  );
}
