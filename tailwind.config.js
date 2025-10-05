/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    // FIX: Update content paths to match your structure
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    prefix: '',
    theme: {
      container: {
        center: 'true',
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        screens: {
          'dash-2xl': '1300px',
          tablet: '992px',
          '3xl': '1400px',
          alarmheader: 'calc(var(--fault-management-all-alarm-header))',
          dashAllAlarmHeader: 'calc(var(--dash-all-alarm-header))',
          dashUrgentOutagesHeader: 'calc(var(--dash-urgent-outages-header))',
        },
        colors: {
          border: '#2A2931',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          'bg-dark-primary': '#060610',
          'text-light-gray': '#9ca3af',
          'bg-dark-secondary': '#0D101A',
          'bg-dark-sidebar': '#17171C',
          primary: '#34EFF7',
          lavender: {
            100: '#bdc8ff',
            200: '#d4e4fe',
          },
          lightSlate: {
            100: '#00003B',
            200: '#01012E',
          },
          'bg-light': '#f2f2f2',
          firebrick: '#9D3737',
          'deep-carmine': '#EC3737',
          'congo-pink': '#F98880',
          golden: '#FCC400',
          'maya-blue': '#7BC0FF',
          'light-green': '#7BFF98',
          'dark-blue': '#00bfff',
          'dark-orange': '#ffa500',
          'dark-yellow': '#FFFF00',
          'dark-grey': '#ffffff',
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          header: {
            DEFAULT: 'hsl(var(--header))',
            foreground: 'hsl(var(--header-foreground))',
          },
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
          'caret-blink': {
            '0%,70%,100%': { opacity: '1' },
            '20%,50%': { opacity: '0' },
          },
          'fadeIn': {
            '0%': { opacity: '0', transform: 'translateY(4px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          // ADD: Custom animations for the header
          'fade-in-header': {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'fade-in-delayed': {
            '0%': { opacity: '0', transform: 'translateY(-10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          'caret-blink': 'caret-blink 1.25s ease-out infinite',
          'fade-in': 'fadeIn 0.4s ease-out',
          // ADD: Custom animations
          'fade-in-header': 'fade-in-header 1s ease-out',
          'fade-in-delayed': 'fade-in-delayed 1s ease-out 0.3s both',
        },
      },
    },
    plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  }