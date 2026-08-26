import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#06182f",
        ink: "#10243f",
        aqua: "#00a7b5",
        lime: "#a6ce39",
        gold: "#f5b942",
        mist: "#eef7f6"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(6,24,47,.13)"
      }
    }
  },
  plugins: []
};

export default config;
