/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          1: "#f5f5f5",
          2: "#e0e0e0",
          3: "#cccccc",
          4: "#b3b3b3",
          5: "#696969",
          6: "#f0f0f0",
          7: "#bdbdbd",
          8: "#757575",
          9: "#424242"
        },
        blue: {
          1: "#2682b4"
        }
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(-10%)"  },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out forwards",
      },
    },

    fontFamily: {
      sans: ["Nunito", "serif"]
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem"
    }
  },
  plugins: []
};
