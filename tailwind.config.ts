import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
      },
      colors: {
        emerald: {
          50: '#FDF7F5',
          100: '#F4E7E1', // Peach
          200: '#EACCC2',
          300: '#DFB0A0',
          400: '#FF9B45', // Orange
          500: '#E87431',
          600: '#D5451B', // Rust
          700: '#A93615',
          800: '#7E2810',
          900: '#521C0D', // Maroon
          950: '#3D1509',
        },
        teal: {
          50: '#FDF7F5',
          100: '#F4E7E1',
          200: '#EACCC2',
          300: '#DFB0A0',
          400: '#FF9B45',
          500: '#E87431',
          600: '#D5451B',
          700: '#A93615',
          800: '#7E2810',
          900: '#521C0D',
          950: '#3D1509',
        },
        blue: {
          50: '#FDF7F5',
          100: '#F4E7E1',
          200: '#EACCC2',
          300: '#DFB0A0',
          400: '#FF9B45',
          500: '#E87431',
          600: '#D5451B',
          700: '#A93615',
          800: '#7E2810',
          900: '#521C0D',
          950: '#3D1509',
        },
        slate: {
          50: '#FAFAF9',
          100: '#F4E7E1', // Light Peach
          200: '#E9D5CC',
          300: '#DFBDB1',
          400: '#C79A88',
          500: '#A17361',
          600: '#865A4B',
          700: '#694337',
          800: '#5F392E',
          900: '#521C0D', // Maroon
          950: '#260B04',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          light: "hsl(var(--accent-light))",
          dark: "hsl(var(--accent-dark))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
          dark: "hsl(var(--gold-dark))",
        },
        royal: {
          DEFAULT: "hsl(var(--royal-blue))",
          light: "hsl(var(--royal-blue-light))",
          dark: "hsl(var(--royal-blue-dark))",
        },
        navy: "hsl(var(--navy))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "var(--shadow-md)",
        "card-hover": "var(--shadow-lg)",
        gold: "var(--shadow-gold)",
        forest: "var(--shadow-md)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px 0 rgba(16,185,129,0.3)" },
          "50%": { boxShadow: "0 0 40px 8px rgba(16,185,129,0.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-down": "fade-in-down 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "count-up": "count-up 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
