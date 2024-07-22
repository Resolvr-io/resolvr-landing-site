import type { Config } from "tailwindcss";

const config = {
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
      fontSize: {
        "7.5xl": [
          "5rem",
          {
            lineHeight: "5rem",
            letterSpacing: "-3.2px",
          },
        ],
        "1.5xl": [
          "1.375rem",
          {
            lineHeight: "2.0625rem",
            letterSpacing: ".044px",
          },
        ],
        sectionTitle: [
          "4rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: "-.16px",
          },
        ],
        sectionHeading: [
          "1.16rem",
          { lineHeight: "1.75rem", letterSpacing: ".042px" },
        ],
        sectionContent: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: ".042px",
          },
        ],
      },
      padding: {
        "25": "6.25rem",
      },
      screens: {
        xl: "1440px",
      },
      colors: {
        border: "hsl(var(--border))",

        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        orange: "#FB923C",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        section: {
          dark: "#1E1E1E",
          light: "#EDEEEF",
          teal: "#1D5D73",
          black: "#1A1A1A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
