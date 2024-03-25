import { style, createVar } from "@vanilla-extract/css";
import { vars } from "./styles/theme.css";
const myVar = createVar();

const flexBox = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
});

export const myBtn = style([
  flexBox,
  {
    backgroundColor: "black",
    border: "none",
    color: vars.themeColor.color.mainFontColor,
  },
]);
