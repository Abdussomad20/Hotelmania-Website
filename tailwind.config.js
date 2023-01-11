/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors:{
      transparent: 'transparent',
      'yellow': '#F2A852',
      'sub': '#18262D',
      'black': '#000000',
      'card': '#243644',
      'background': '#E5E5E5',
      'sub-text': '#DEBF8D',
      'textnow': '575757',
      'section': '#F4F5F7',
      'white': '#FFFFFF',
    },
    screens:{
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
}
