import {
  globalStyle,
  createThemeContract,
  createGlobalTheme,
  createTheme,
} from "@vanilla-extract/css";

export const global = createGlobalTheme(":root", {
  fontFamily: {
    notoSansKR: "app",
  },
  fontSize: {
    XLarge: "48px",
    large: "36px",
    medium: "28px",
    regular: "18px",
    small: "16px",
    micro: "14px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    large: "700",
  },
});

const themeColor = createThemeContract({
  color: {
    mainBackGround: null,
    contentBackGround: null,
    mainFontColor: null,
    borderColor: null,
    gradient: null,
  },
});

export const darkMode = createTheme(themeColor, {
  color: {
    mainBackGround: "#1d1d1d",
    contentBackGround: "#2c2c2c",
    mainFontColor: "#ffffff",
    borderColor: "#b1b1b3",
    gradient: "linear-gradient(#091236, #1E215D)",
  },
});

export const vars = { ...global, themeColor };
console.log("global var ?");
console.log(global);
console.log("theme color var?");
console.log(themeColor);
globalStyle("body", {
  fontSize: global.fontSize.large,
  margin: 0,
  backgroundColor: vars.themeColor.color.mainBackGround,
  transition: "all 0.1s ease-in-out",
});
