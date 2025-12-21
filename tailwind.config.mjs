/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          'nova-bg': '#121110',
          'nova-surface': '#1c1b19',
          'nova-accent': '#cd5c2f',
          'nova-text': '#Eae8e3',
          'nova-muted': '#9c9891',
          'nova-line': 'rgba(234, 232, 227, 0.15)',
        },
        fontFamily: {
          sans: ['Manrope', 'sans-serif'],
          mono: ['Manrope', 'monospace'], // Usiamo Manrope anche per mono per coerenza stilistica se richiesto
        },
        transitionTimingFunction: {
          'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        },
        animation: {
          'fade-in-up': 'fadeInUp 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards',
          'scroll-wheel': 'scrollWheel 2s infinite',
          'ui-fade-in': 'uiFadeIn 1s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          scrollWheel: {
            '0%': { top: '8px', opacity: '1' },
            '100%': { top: '25px', opacity: '0' },
          },
          uiFadeIn: {
            '0%': { opacity: '0', transform: 'translateY(-50%) translateX(20px)' },
            '100%': { opacity: '1', transform: 'translateY(-50%) translateX(0)' },
          }
        }
      },
    },
    plugins: [],
  }