import { type Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "rgba(0, 31, 33, 1)",
        foreground: "#fff",
      },
      fontFamily: {
        sans: "var(--font-roboto), sans-serif",
        secondary: "var(--font-ribeye-marrow), cursive",
      },
    },
  },
  plugins: [],
};

export default config;
