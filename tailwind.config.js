/** @type {{ThemeUtil: {color: {greyColor_2: string; greyColor_1: string; blackColor: string; whiteColor: string; primaryColor: string}}}} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        onboarding: "url('/src/assets/image/onboarding.icon')",
      },
      fontFamily: {
        sans: ["darkerGrotesque-regular", ...defaultTheme.fontFamily.sans],
        "darkerGrotesque-regular": ["darkerGrotesque-regular"],
        "darkerGrotesque-medium": ["darkerGrotesque-medium"],
        "darkerGrotesque-bold": ["darkerGrotesque-bold"],
        "darkerGrotesque-semiBold": ["darkerGrotesque-semiBold"],
        "darkerGrotesque-black": ["darkerGrotesque-black"],
      },
      colors: {
        primaryColor: "#18ACE8",
        primaryColor_2: "#E8F8FF",
        blackColor: "#111110",
        whiteColor: "#FAFAFA",
        grayColor_1: "#606060",
        grayColor_2: "#7A7A7A",
        grayColor_3: "#F5F5F5",
        grayColor_4: "#C0C0C0",
        grayColor_5: "#F2F2F2",
        grayColor_6: "#F2F2F2",
        dangerColor: "#E33629",
        accent2: "#EBD0FF",
        accent4: "#F6F6F6",
        accent3: "#FFF6A4",
        accent5: "#F1F1F1",
        white: "#fff",
        
        primary: "#18ACE8",
        black: "#111110",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
};
