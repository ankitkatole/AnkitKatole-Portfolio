export default function HandUnderline({ className = "text-accent-copper" }) {
  return (
    <svg
      className={`absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 pointer-events-none ${className}`}
      viewBox="0 0 280 14"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4 9.5C70 4 190 3 276 10"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M24 11.5C95 6.5 205 5.5 260 11"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
