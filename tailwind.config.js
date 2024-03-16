/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      'screens': {
        '450': '450px',
        'phone': '500px',
        '550': '550px',
        '630': '630px',
        'tablet': '690px',
        '710': '710px',
        '735': '735px',
        '763': '763px',
        '768': '768px',
        '780': '780px',
        '795': '795px',
        '800': '800px',
        '836': '836px',
        '900': '900px',
        '920': '920px',
        'desktop': '1026px',
        '1150': '1150px',
        '1280':'1280px',
        '1350':'1350px',
        '1380':'1380px',
        '1550':'1550px',
        '1650':'1650px',
        '1830':'1830px',
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleX(0)'},
          '80%': {transform: 'scaleX(1.2)'},
          '100%': {transform: 'scaleX(1)'},
        },
        'render-page-red-to-white': {
          '0%': {transform:'scaleY(0)',backgroundColor: '#ba000d', color: 'white'},
          '100%': {transform:'scaleY(1)',backgroundColor: 'white',color: 'black'},
        },
        'render-page-white-to-red': {
          '0%': {transform:'scaleY(0)',backgroundColor: 'white',color: 'black'},
          '100%': {transform:'scaleY(1)',backgroundColor: '#ba000d',color: 'white'},
        },
        'render-page-white-to-gray': {
          '0%': {transform:'scaleY(0)',backgroundColor: 'white',color: 'black'},
          '100%': {transform:'scaleY(1)',backgroundColor: '#1b1b1b',color: 'white'},
        },
        'render-page-gray-to-white': {
          '0%': {transform:'scaleY(0)',backgroundColor: '#1b1b1b',color: 'white'},
          '100%': {transform:'scaleY(1)',backgroundColor: 'white',color: 'black'},
        },
        'scrollBar-home-initial': {
          '0%': {height:'0%',backgroundColor: 'white'},
          '100%': {height:'16.66%',backgroundColor: 'white'},
        },
        'scrollBar-experiences-to-home': {
          '0%': {height:'26.66%',backgroundColor: 'black'},
          '100%': {height:'16.66%',backgroundColor: 'white'},
        },
        'scrollBar-home-to-experiences': {
          '0%': {height:'23.33%',backgroundColor: 'white'},
          '100%': {height:'33.33%',backgroundColor: 'black'},
        },
        'scrollBar-experiences-to-technologies': {
          '0%': {height:'40%',backgroundColor: 'black'},
          '100%': {height:'50%',backgroundColor: 'white'},
        },
        'scrollBar-technologies-to-experiences': {
          '0%': {height:'43.33%',backgroundColor: 'white'},
          '100%': {height:'33.33%',backgroundColor: 'black'},
        },
        'scrollBar-technologies-to-myCareer': {
          '0%': {height:'56.66%',backgroundColor: 'white'},
          '100%': {height:'66.66%',backgroundColor: 'black'},
        },
        'scrollBar-myCareer-to-technologies': {
          '0%': {height:'60%',backgroundColor: 'black'},
          '100%': {height:'50%',backgroundColor: 'white'},
        },
        'scrollBar-myCareer-to-awards': {
          '0%': {height:'73.33%',backgroundColor: 'black'},
          '100%': {height:'83.33%',backgroundColor: 'white'},
        },
        'scrollBar-awards-to-myCareer': {
          '0%': {height:'76.66%',backgroundColor: 'white'},
          '100%': {height:'66.66%',backgroundColor: 'black'},
        },
        'scrollBar-awards-to-contactUs': {
          '0%': {height:'90%',backgroundColor: 'white'},
          '100%': {height:'100%',backgroundColor: 'black'},
        },
        'scrollBar-contactUs-to-awards': {
          '0%': {height:'93.33%',backgroundColor: 'black'},
          '100%': {height:'83.33%',backgroundColor: 'white'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.6s ease-in-out forwards',
        'render-page-red-to-white': 'render-page-red-to-white ease-in-out forwards 0.7s',
        'render-page-white-to-red': 'render-page-white-to-red ease-in-out forwards 0.7s',
        'render-page-white-to-gray': 'render-page-white-to-gray ease-in-out forwards 0.7s',
        'render-page-gray-to-white': 'render-page-gray-to-white ease-in-out forwards 0.7s',
        'scrollBar-home-initial': 'scrollBar-home-initial ease-in-out forwards 1.2s',
        'scrollBar-experiences-to-home': 'scrollBar-experiences-to-home ease-in-out forwards 1.4s',
        'scrollBar-home-to-experiences': 'scrollBar-home-to-experiences ease-in-out forwards 1.4s',
        'scrollBar-experiences-to-technologies': 'scrollBar-experiences-to-technologies ease-in-out forwards 1.4s',
        'scrollBar-technologies-to-experiences': 'scrollBar-technologies-to-experiences ease-in-out forwards 1.4s',
        'scrollBar-technologies-to-myCareer': 'scrollBar-technologies-to-myCareer ease-in-out forwards 1.4s',
        'scrollBar-myCareer-to-technologies': 'scrollBar-myCareer-to-technologies ease-in-out forwards 1.4s',
        'scrollBar-myCareer-to-awards': 'scrollBar-myCareer-to-awards ease-in-out forwards 1.4s',
        'scrollBar-awards-to-myCareer': 'scrollBar-awards-to-myCareer ease-in-out forwards 1.4s',
        'scrollBar-awards-to-contactUs': 'scrollBar-awards-to-contactUs ease-in-out forwards 1.4s',
        'scrollBar-contactUs-to-awards': 'scrollBar-contactUs-to-awards ease-in-out forwards 1.4s',

      },
    },
  },
  plugins: [],
}
