/** @type {{ThemeUtil: {color: {greyColor_2: string; greyColor_1: string; blackColor: string; whiteColor: string; primaryColor: string}}}} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'onboarding': "url('/src/assets/image/onboarding.icon')"
      },
      fontFamily:{
        "sans": ['darkerGrotesque-regular', ...defaultTheme.fontFamily.sans],
        "darkerGrotesque-regular": ['darkerGrotesque-regular'],
        "darkerGrotesque-medium": ['darkerGrotesque-medium'],
        "darkerGrotesque-bold": ['darkerGrotesque-bold'],
        "darkerGrotesque-semiBold": ['darkerGrotesque-semiBold'],
        "darkerGrotesque-black": ['darkerGrotesque-black'],
      },
      colors:{
        primaryColor: "#18ACE8",
        blackColor: "#111110",
        whiteColor: "#FAFAFA",
        grayColor_1: "#606060",
        grayColor_2: "#7A7A7A",
        grayColor_3: "#F5F5F5",
        grayColor_4: "#C0C0C0",
        grayColor_5: "#F2F2F2",
      }
    },
  },
  plugins: [],
}

