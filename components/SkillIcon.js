export default function SkillIcon({ name, className = 'w-4 h-4 text-accent-copper' }) {
  const normalized = name.toLowerCase();

  // Java & Spring
  if (normalized.includes('java 8') || normalized.includes('java')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    );
  }

  if (normalized.includes('spring boot') || normalized.includes('spring cloud') || normalized.includes('spring')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.6 8.4L12 15l5.4 5.4c2.8-1.8 4.6-4.9 4.6-8.4 0-5.5-4.5-10-10-10z" />
        <path d="M12 15V2" />
      </svg>
    );
  }

  // Microservices & APIs
  if (normalized.includes('microservice')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <path d="M8 5h8M8 19h8M5 8v8M19 8v8" />
      </svg>
    );
  }

  if (normalized.includes('rest') || normalized.includes('api')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    );
  }

  if (normalized.includes('websocket') || normalized.includes('stomp')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    );
  }

  if (normalized.includes('camunda') || normalized.includes('bpm')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M9 12h3l3-4M12 12l3 4" />
      </svg>
    );
  }

  // Databases & Messaging
  if (normalized.includes('mysql') || normalized.includes('sql') || normalized.includes('jpa') || normalized.includes('hibernate')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  if (normalized.includes('kafka')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.5" y1="10.5" x2="15.5" y2="6.5" />
        <line x1="8.5" y1="13.5" x2="15.5" y2="17.5" />
      </svg>
    );
  }

  if (normalized.includes('mongodb')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 6 9 6 14a6 6 0 0 0 12 0c0-5-6-12-6-12z" />
        <path d="M12 2v20" />
      </svg>
    );
  }

  if (normalized.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }

  // Frontend
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (normalized.includes('next.js') || normalized.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 16V8l8 10V8" />
      </svg>
    );
  }

  if (normalized.includes('javascript') || normalized.includes('js') || normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M15 9v5a2 2 0 0 1-2 2h-1" />
        <path d="M9 13a2 2 0 0 0 2 2h1a2 2 0 0 0 0-4h-2a2 2 0 0 1 0-4h1a2 2 0 0 1 2 2" />
      </svg>
    );
  }

  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 12c1-2 3-3 6-3 4.5 0 6 3 9 3 3 0 4.5-1.5 6-3-1 2-3 3-6 3-4.5 0-6-3-9-3-3 0-4.5 1.5-6 3z" />
        <path d="M1 18c1-2 3-3 6-3 4.5 0 6 3 9 3 3 0 4.5-1.5 6-3-1 2-3 3-6 3-4.5 0-6-3-9-3-3 0-4.5 1.5-6 3z" />
      </svg>
    );
  }

  // AI & LLMs
  if (normalized.includes('gemini') || normalized.includes('ai') || normalized.includes('openai') || normalized.includes('llm') || normalized.includes('rag')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
      </svg>
    );
  }

  // DevOps & Tools
  if (normalized.includes('docker')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14h16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
        <rect x="6" y="9" width="3" height="3" />
        <rect x="10" y="9" width="3" height="3" />
        <rect x="14" y="9" width="3" height="3" />
        <rect x="10" y="5" width="3" height="3" />
      </svg>
    );
  }

  if (normalized.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="9" r="3" />
        <line x1="6" y1="9" x2="6" y2="15" />
        <path d="M18 12a9 9 0 0 1-9 5" />
      </svg>
    );
  }

  // Default clean code symbol
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
