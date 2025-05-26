import type { Config } from "tailwindcss";

const config: Config = {
  // Content: Defines the paths to all files where Tailwind should 
  // look for class names. This prevents Tailwind from including 
  // unused styles in the production bundle, which keeps CSS file size small.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  //Theme: Used to extend Tailwind’s default theme settings.
  // You can add custom colors, fonts, spacing, breakpoints, etc.
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // Plugins: Add plugins for additional functionality 
  // like custom forms, typography, or animations.
  
  plugins: [],
};
export default config;
