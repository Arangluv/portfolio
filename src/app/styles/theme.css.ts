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

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackGround: "#1d1d1d",
    contentBackGround: "#2c2c2c",
    mainFontColor: "#ffffff",
    borderColor: "#b1b1b3",
    gradient: "linear-gradient(#091236, #1E215D)",
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackGround: "#f7f9fa",
    contentBackGround: "#ffffff",
    mainFontColor: "#2c2c2c",
    borderColor: "#cbc9f9",
    gradient: "linear-gradient(#39598A, #79D7ED)",
  },
});

export const vars = { ...global, themeColor };