import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: "#EC4899", // Custom pink
        },
        purple: {
          500: "#A855F7", // Custom purple
        },
        sky: {
          500: "#0EA5E9", // Custom sky blue
        },
        backdropBlur: {
          lg: '11px',
          perspective: {
            1000: "1000px",
          },
          transformStyle: {
            "preserve-3d": "preserve-3d",
          },
          backfaceVisibility: {
            hidden: "hidden",
          },
          rotate: {
            180: "180deg",
          },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover"],
    },
  },
},
  plugins: [],
} satisfies Config;
