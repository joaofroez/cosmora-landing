import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#8B5CF6",
          gold: "#D9B836",
          dark: "#1F2937",
          gray: "#6B7280",
          light: "#F9FAFB",
          dark2: "#1A1A1A", // Atualizado para o seu Hex preferido
          gray2: "#666666",
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
  
};
export default config;