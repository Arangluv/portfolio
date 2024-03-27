import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const wrapper = style({
  width: "100%",
  height: "100%",
  padding: 40,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
});

export const list_item = style({
  marginBottom: 25,
  color: vars.themeColor.color.mainFontColor,
  fontSize: vars.fontSize.regular,
  transition: "all .3s ease-in-out",
  position: "relative",
  ":hover": {
    cursor: "pointer",
    filter: "brightness(1.3)",
  },
});
export const list_text = style({
  paddingBottom: 5,
  borderBottom: "1px solid transparent",
  borderImage: "linear-gradient(90deg, #765B87 0%, #73D661 100%)",
  borderImageSlice: 1,
});
