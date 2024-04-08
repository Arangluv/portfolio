import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const header_wrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const icon = style({
  width: 30,
  height: 30,
  padding: 5,
  border: `1px solid ${vars.themeColor.color.mainFontColor}`,
  borderRadius: "100%",
  color: vars.themeColor.color.mainFontColor,
  opacity: 0.7,
  transition: "all .2s ease-in-out",
  ":hover": {
    opacity: 1,
    cursor: "pointer",
  },
  "@media": {
    "screen and (max-width:479px)": {
      width: 20,
      height: 20,
    },
  },
});
