/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundColor:{
        'main-100':"#E7ECEC",
        'main-200':"#DDE4E4",
        'main-300':"#CED9D9",
        'main-400':"#C0D8D8",
        'main-500':"#0E8080",
      },
      colors:{
        'main-100':"#E7ECEC",
        'main-200':"#DDE4E4",
        'main-300':"#CED9D9",
        'main-400':"#C0D8D8",
        'main-500':"#0E8080",
      },

      // Dùng để thay đổi slide 
      keyframes:{
         "slide-right" :{
            "0%" :{
              "-webkit-transform": "translateX(-500px)",
                transform: "translateX(-500px)"
            },
            "100%" :{
              "-webkit-transform": "translateX(0px)",
                transform: "translateX(0px)"
            }
          },

          "slide-left" :{
            "0%" :{
              "-webkit-transform": "translateX(500px)",
                transform: "translateX(500px)"
            },
            "100%" :{
              "-webkit-transform": "translateX(0px)",
                transform: "translateX(0px)"
            }
          },

          "slide-left1" :{
            "0%" :{
              "-webkit-transform": "translateX(-500px)",
                transform: "translateX(-500px)"
            },
            "100%" :{
              "-webkit-transform": "translateX(0px)",
                transform: "translateX(0px)"
            }
          }
      },
      animation:{
        'slide-right' : 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-left' : 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-left1' : 'slide-left1 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      }
    },
  },
  plugins: [],
}
