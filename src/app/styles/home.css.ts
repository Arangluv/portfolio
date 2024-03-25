import { vars } from "./theme.css";
import { style } from "@vanilla-extract/css";

export const btnStyle = style({
  color: vars.themeColor.color.mainFontColor,
  border: `1px solid ${vars.themeColor.color.borderColor}`,
});
