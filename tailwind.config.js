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
        "overlay-30" : "rgba(0,0,0,0.3)"
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
          },
          "rotate-center" :{
            "0%" :{
              "-webkit-transform": "rotate(0)",
                transform: "rotate(0)"
            },
            "100%" :{
              "-webkit-transform": "rotate(360deg)",
                transform: "rotate(360deg)"
            }
          },
          "rotate-center-pause" :{
            "0%" :{
              "-webkit-transform": "rotate(360deg)",
                transform: "rotate(360deg)",
                'border-radius':'99999px'
            },
            "100%" :{
              "-webkit-transform": "rotate(0)",
                transform: "rotate(0)"
            }
          },
          "scale-up-image" :{
            "0%" :{
              "-webkit-transform": "scale(1)",
                transform: "scale(1)",
            },
            "100%" :{
              "-webkit-transform": "scale(1.2)",
                transform: "scale(1.2)"
            }
          },
          "scale-down-image" :{
            "0%" :{
              "-webkit-transform": "scale(1.2)",
                transform: "scale(1.2)",
            },
            "100%" :{
              "-webkit-transform": "scale(1)",
                transform: "scale(1)"
            }
          }
      },
      animation:{
        'slide-right' : 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-left' : 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-left1' : 'slide-left1 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'rotate-center' : 'rotate-center 8s linear infinite',
        'rotate-center-pause' : 'rotate-center-pause 0.3s linear 2 both',
        'scale-up-image' : 'scale-up-image 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'scale-down-image' : 'scale-down-image 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      flex:{
        '4' : '4 4 0%',
        '6' : '6 6 0%',
        '3' : '3.5 3.5 0%',
        '7' : '6.5 6.5 0%',
      }
    },
    screens:{
      '1600':"1600px"
    }
  },
  plugins: [],
  mode:"jit"
}
