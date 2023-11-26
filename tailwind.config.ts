import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ["titillium", "-apple-system", "system-ui", "monospace"],
        "base-b": ["titillium-bold", "-apple-system", "system-ui", "monospace"],
        "base-black": [
          "titillium-black",
          "-apple-system",
          "system-ui",
          "monospace",
        ],
      },
      colors: {
        "solana-purple": "#9945FF",
        "solana-green": "#14F195",
      },
    },
  },
  plugins: [],
};
export default config;
