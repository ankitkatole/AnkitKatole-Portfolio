/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./content/**/*.{js,jsx,md}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#141210',   // Deep warm walnut / near-black
          surface: '#1E1B18',   // Rich graphite warm surface
          elevated: '#282420',  // Elevated subtle layer
          subtle: '#332E29'     // Borders & structural dividers
        },
        ink: {
          primary: '#F2EFE9',   // Warm off-white for primary typography
          muted: '#B0A89C',     // Muted warm stone for secondary reading
          faint: '#7A7369'      // Faint metadata & subtle labels
        },
        accent: {
          copper: '#C48259',    // Restrained burnished copper
          hover: '#D4956D',     // Subtle copper warmth hover
          muted: 'rgba(196, 130, 89, 0.15)',
          border: 'rgba(196, 130, 89, 0.35)'
        },
        status: {
          online: '#488B67',    // Muted moss green (not neon)
          amber: '#C79A46'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'var(--font-mono)', 'monospace'],
        display: ['Manrope', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.04em',
        widest: '0.08em'
      }
    }
  },
  plugins: []
};
