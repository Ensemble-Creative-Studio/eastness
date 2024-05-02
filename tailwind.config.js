/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'readable': '65ch',
      },
      backgroundImage: {
        'bottom-gradient': "linear-gradient(to bottom,hsla(0, 0%, 0%, 0.41) 0%,hsla(0, 0%, 0%, 0.405) 8.1%,hsla(0, 0%, 0%, 0.39) 15.5%,hsla(0, 0%, 0%, 0.367) 22.5%,hsla(0, 0%, 0%, 0.338) 29%,hsla(0, 0%, 0%, 0.304) 35.3%,hsla(0, 0%, 0%, 0.266) 41.2%,hsla(0, 0%, 0%, 0.225) 47.1%,hsla(0, 0%, 0%, 0.185) 52.9%,hsla(0, 0%, 0%, 0.144) 58.8%,hsla(0, 0%, 0%, 0.106) 64.7%,hsla(0, 0%, 0%, 0.072) 71%,hsla(0, 0%, 0%, 0.043) 77.5%,hsla(0, 0%, 0%, 0.02) 84.5%,hsla(0, 0%, 0%, 0.005) 91.9%,hsla(0, 0%, 0%, 0) 100%)",
      }
    },
  },
  plugins: [],
};
