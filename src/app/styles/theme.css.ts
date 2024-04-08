import {
  createThemeContract,
  createGlobalTheme,
  createTheme,
} from "@vanilla-extract/css";

// dark mode와 light mode 관계없이 적용되는 스타일들
export const global = createGlobalTheme(":root", {
  fontFamily: {
    notoSansKR: `var(--font-noto-szns-kr)`, // 추후 수정
  },
  fontSize: {
    XLarge: "48px",
    large: "36px",
    medium: "28px",
    regular: "22px",
    middleSmall: "18px",
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
    gradient_start: null,
    gradient_middle: null, // only use corner bottom right
    gradient_end: null,
  },
});

export const darkTheme_1 = createTheme(themeColor, {
  color: {
    mainBackGround: "#1D1D20",
    contentBackGround: "#2c2c2c",
    mainFontColor: "#CCCCCC",
    borderColor: "#b1b1b3",
    gradient_start: "#765B87",
    gradient_middle: "#6ca761",
    gradient_end: "#73D661",
  },
});

export const darkTheme_2 = createTheme(themeColor, {
  color: {
    mainBackGround: "#1D1D20",
    contentBackGround: "#2c2c2c",
    mainFontColor: "#CCCCCC",
    borderColor: "#b1b1b3",
    gradient_start: "#FCC476",
    gradient_middle: "#927FAD",
    gradient_end: "#5457CD",
  },
});

export const darkTheme_3 = createTheme(themeColor, {
  color: {
    mainBackGround: "#1D1D20",
    contentBackGround: "#2c2c2c",
    mainFontColor: "#CCCCCC",
    borderColor: "#b1b1b3",
    gradient_start: "#94E0DA",
    gradient_middle: "#907AF3",
    gradient_end: "#907AF3",
  },
});

export const darkTheme_4 = createTheme(themeColor, {
  color: {
    mainBackGround: "#1D1D20",
    contentBackGround: "#2c2c2c",
    mainFontColor: "#CCCCCC",
    borderColor: "#b1b1b3",
    gradient_start: "#F2017B",
    gradient_middle: "#680DB0",
    gradient_end: "#680DB0",
  },
});

export const vars = { ...global, themeColor };
