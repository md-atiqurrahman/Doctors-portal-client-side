module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-banner': "url('/src/assets/images/bg.png')",
        'bg-appointment': "url('/src/assets/images/appointment.png')",
        'bg-footer': "url('/src/assets/images/footer.png')",
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          active: '#3A4256',
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}