module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "350px",
      '2xs': '580px',
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      '2xl': "1440px",
    },
    colors: {
      black : {
        50: '#333333',
        100: '#141414',
      },
      red : {
        50: '#FF6142'
      },
      blue : {
        50: '#3D61B0'
      },
      navyBlue: {
        50: '#26458C'
      },
      yellow : {
        50: '#FFDB0A',
        100: '#FDCF0D',
      },
      blue : {
        50: '#3D61B0'
      },
      grey: {
        50: '#F6FAFC'
      },
      'white': '#FFFFFF'
    },

    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontSize: {
      xs: ['10px', {lineHeight: '16px',},],
      'xs-base': ['12px', {lineHeight: '18px',},],
      sm: ['15px', {lineHeight: '23px',},],
      'sm-normal': ['16px', {lineHeight: '22px',},],
      'sm-base': ['16px', {lineHeight: '25px',},],
      base: ['18px', {lineHeight: '27px',},],
      normal: ['24px', {lineHeight: '35px',},],
      lg: ['34px', {lineHeight: '62px',},],
      xl: ['44px', {lineHeight:  '62px',},],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      "semi-bold": 600,
      bold: 700,
    },

    extend: {
      spacing: {
        '2.75': '.688rem',
        '5.25': '1.313rem',
        '5.5'  : '1.375rem',
        '11.5': '2.761rem',
        '13'  : '3.25rem',
        '15.25': '3.813rem',
        '15.75': '3.938rem',
        '16.75': '4.188rem',
        '26'  : '6.5rem',
        '28.75': '7.188rem',
        '29'   : '7.25rem',
        '33.5': '8.37rem',
        '38.25': '9.563rem',
        '38.5' : '9.625rem',
        '38.75': '9.688rem',
        '40.75': '10.188rem',
        '41.5' : '10.375rem',
        '45'  : '11.25rem',
        '47.25': '11.813rem',
        '57.5': '14.375rem',
        '61'  : '15.25rem',
        '65'  : '16.25rem',
        '110' : '27.5rem',
        '110.5': '27.625rem',
        '144': '36rem',
        '160' : '40rem',
        '167' : '41.75rem',
        '168.5': '42.125rem',
        '180.5': '45.125rem',
        '185.75': '46.438rem',
        '203'  : '50.75rem',
        '410'  : '102.5rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': "34px",
      }
    }
  },
  plugins: [],
}
