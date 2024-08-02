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
            ash_background: {
                100: "#d2d2d5",
                200: "#a5a5ab",
                300: "#787882",
                400: "#4b4b58",
                500: "#1e1e2e",
                600: "#181825",
                700: "#12121c",
                800: "#0c0c12",
                900: "#060609",
            },
            ash_primary: {
                100: "#fbeff5",
                200: "#f6e0eb",
                300: "#f2d0e1",
                400: "#edc1d7",
                500: "#e9b1cd",
                600: "#ba8ea4",
                700: "#8c6a7b",
                800: "#5d4752",
                900: "#2f2329",
            },
            ash_secondary: {
                100: "#f5f7fc",
                200: "#ebeff8",
                300: "#e1e6f5",
                400: "#d7def1",
                500: "#cdd6ee",
                600: "#a4abbe",
                700: "#7b808f",
                800: "#52565f",
                900: "#292b30",
            },
        },
    },
},
  plugins: [],
};
export default config;
