import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    screens: {
      sm:  '640px',
      md:  '768px',
      lg:  '1024px',
      xl:  '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        obsidian:  '#0a0908',
        charcoal:  '#161513',
        ash:       '#252320',
        ivory:     '#f5f0e8',
        mist:      '#8a8278',
        gold: {
          DEFAULT: '#c9a96e',
          light:   '#e8d5b0',
          dark:    '#9a7a45',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        expo:   'cubic-bezier(0.16, 1, 0.3, 1)',
        cinema: 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
}

export default config
