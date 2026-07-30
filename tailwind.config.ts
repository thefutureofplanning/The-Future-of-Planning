import type { Config } from 'tailwindcss'

// Loaded with require() so the config type-checks whether or not the plugin
// ships its own declarations.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const typography = require('@tailwindcss/typography')

/**
 * Design tokens live in src/app/globals.css as space-separated RGB triplets so
 * that light/dark themes swap without duplicating the Tailwind scale.
 */
const color = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,mdx}', './content/**/*.{md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: color('paper'),
        surface: color('surface'),
        ink: color('ink'),
        graphite: color('graphite'),
        rule: color('rule'),
        horizon: color('horizon'),
        'horizon-soft': color('horizon-soft'),
      },
      fontFamily: {
        display: ['var(--font-display)', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Editorial display scale — tight leading, negative tracking.
        'display-sm': ['clamp(2rem, 1.4rem + 2.6vw, 2.9rem)', { lineHeight: '1.06', letterSpacing: '-0.022em' }],
        'display-md': ['clamp(2.5rem, 1.6rem + 4vw, 4.2rem)', { lineHeight: '1.02', letterSpacing: '-0.028em' }],
        'display-lg': ['clamp(3rem, 1.7rem + 5.6vw, 5.6rem)', { lineHeight: '0.98', letterSpacing: '-0.032em' }],
        micro: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        prose: '68ch',
        shell: '78rem',
      },
      spacing: {
        section: 'clamp(4.5rem, 3rem + 7vw, 9rem)',
      },
      borderRadius: {
        card: '1.125rem',
        panel: '1.75rem',
      },
      boxShadow: {
        lift: '0 1px 2px rgb(var(--ink) / 0.04), 0 12px 32px -12px rgb(var(--ink) / 0.12)',
        panel: '0 1px 2px rgb(var(--ink) / 0.04), 0 24px 60px -28px rgb(var(--ink) / 0.18)',
      },
      transitionTimingFunction: {
        horizon: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'none' },
        },
        draw: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        draw: 'draw 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--ink))',
            '--tw-prose-headings': 'rgb(var(--ink))',
            '--tw-prose-lead': 'rgb(var(--graphite))',
            '--tw-prose-links': 'rgb(var(--ink))',
            '--tw-prose-bold': 'rgb(var(--ink))',
            '--tw-prose-counters': 'rgb(var(--graphite))',
            '--tw-prose-bullets': 'rgb(var(--rule))',
            '--tw-prose-hr': 'rgb(var(--rule))',
            '--tw-prose-quotes': 'rgb(var(--ink))',
            '--tw-prose-quote-borders': 'rgb(var(--horizon))',
            '--tw-prose-captions': 'rgb(var(--graphite))',
            '--tw-prose-code': 'rgb(var(--ink))',
            '--tw-prose-pre-bg': 'rgb(var(--ink))',
            '--tw-prose-th-borders': 'rgb(var(--rule))',
            '--tw-prose-td-borders': 'rgb(var(--rule))',
            maxWidth: 'none',
          },
        },
      }),
    },
  },
  plugins: [typography],
}

export default config
