import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  width: "100%",
  height: "100%",
});

export const text = style({
  ":first-child": {
    opacity: "0.7",
  },
  color: vars.themeColor.color.mainFontColor,
  marginBottom: 20,
});
