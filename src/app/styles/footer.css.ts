import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  width: "100%",
  height: "100%",
  "@media": {
    "screen and (min-width:1024px) and (max-width:1279px)": {
      alignItems: "flex-start",
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      alignItems: "flex-start",
    },
    "screen and (min-width:480px) and (max-width:767px)": {},
    "screen and (max-width:479px)": {
      alignItems: "flex-start",
    },
  },
});

export const text = style({
  ":first-child": {
    opacity: "0.7",
  },
  color: vars.themeColor.color.mainFontColor,
  marginBottom: 20,
  "@media": {
    "screen and (min-width:768px) and (max-width:1023px)": {
      marginBottom: 10,
    },
    "screen and (max-width:479px)": {
      marginBottom: 10,
    },
  },
});
