/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Very-dark-blue': "hsl(226, 43%, 10%)",
        "Dark-blue": "hsl(235, 46%, 20%)",
        "Desaturated-blue": "hsl(235, 45%, 61%)",
        "Pale-Blue": "hsl(236, 100%, 87%)",

        "Soft-orange-self-care": "hsl(43, 84%, 65%)",
        "Violet-social": "hsl(264, 64%, 52%)",
        "Lime-green-exercise": "hsl(145, 58%, 55%)",
        "Blue-main": "hsl(246, 80%, 60%)",
        "Light-red-work": "hsl(15, 100%, 70%)",
        "Soft-blue-play": "hsl(195, 74%, 62%)",
        "Light-red-study": "hsl(348, 100%, 68%)"
      },
    },
    container: {
      center: true,
      padding:{
        DEFAULT: "20px",
        md: "50px"
      }
    }
  },
  plugins: [],
}
