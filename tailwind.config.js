/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens:{
        'md':'0px',
        'd-first':{'max':'1440px'},
        'm-first':{'max':'991px'},
        'm-second':{'max':'768px'},
        'm-third':{'max':'600px'},
        'm-fourth':{'max':'480px'}
      }
    },
  },
  plugins: [],
}
