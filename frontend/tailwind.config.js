/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jmuPurple: '#450084',
        jmuGold: '#CBB677',
        jmuDarkGold: '#AD9C65',
        slateGray: '#333333',
        lightGold: '#F4EFE1',
        lightGray: '#D6D6D6',
        jmuOffWhite: '#FAFAFA',
        // JMU CS Colors
        csSlateGray: '#333333',
        csIceBlue: '#8EE4D7',
        csPurple: '#450084',
        csTeal: '#009698',
        csLightGold: '#F4EFE1',
        csDarkTeal: '#007A7C',
      },
      fontFamily: {
        'sans': ['Alliance No.2', 'Segoe UI', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        'alliance': ['Alliance No.2', 'Segoe UI', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        'heading': ['Alliance No.2', 'Segoe UI', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        'body': ['Alliance No.2', 'Segoe UI', 'Roboto', 'Arial', 'Helvetica', 'sans-serif'],
        'slab': ['Arvo', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}