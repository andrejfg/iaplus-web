import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: 'var(--body-font)',
        intro: 'var(--intro-font)',
      },
      colors: {
        iaplus: {
          green: '#45BEAC',
          blue: '#0023EF',
          button: '#4194F4',
          'dark-blue': '#06062C',
          eggshell: '#FEFEFE',
        },
      },
    },
  },
  plugins: [],
}
export default config
