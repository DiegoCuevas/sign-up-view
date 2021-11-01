module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundPosition: {
        "t-rigth": "25px 0",
      },
      gridTemplateRows: {
        "2-custom": "1fr 300px",
      },
      backgroundColor: (theme) => ({
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        "ligth-blue": "#008DD8",
      }),
      backgroundImage: (theme) => ({
        "blue-img": "url('/src/assets/img/background.jpg')",
        quotes: "url('/src/assets/img/logos/quotes.svg')",
      }),
      backgroundSize: {
        "50%": "50% 100%",
      },
      fontFamily: {
        Karla: ["Karla"],
      },
      spacing: {
        "2xl": "80px",
        "5xl": "350px",
      },
      width: {
        card: "468px",
        input: "395px",
        message: "324px",
      },
      height: {
        input: "55px",
        card: "662px",
        message: "227px",
      },
      boxShadow: {
        card: "5px 6px 17px -1px rgba(0,0,0,0.58)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
