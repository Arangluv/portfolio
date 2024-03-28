import { vars } from "../theme.css";
import { style, createVar } from "@vanilla-extract/css";

const gradient_1 = createVar();
const gradient_2 = createVar();

export const intro_wrapper = style({
  width: "100%",
  height: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 40,
});

export const main_title = style({
  color: vars.themeColor.color.mainFontColor,
  fontSize: vars.fontSize.XLarge,
  width: "100%",
  marginBottom: 20,
});

export const sub_title = style([
  main_title,
  {
    fontSize: vars.fontSize.regular,
    opacity: "0.9",
    marginBottom: 50,
  },
]);
export const paragraph_wrapper = style({
  vars: {
    [gradient_1]: "#765B87",
    [gradient_2]: "#73D661",
  },
  position: "relative",
  paddingLeft: 20,
  "::before": {
    content: " ",
    width: 2,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 3,
    background: `linear-gradient(to bottom, ${gradient_1} 0%, ${gradient_2} 100%)`,
  },
});
export const paragraph = style({
  lineHeight: 1.6,
  color: vars.themeColor.color.mainFontColor,
  padding: "5px 10px",
  //   borderLeft: `1px solid ${vars.themeColor.color.mainFontColor}`,
  fontWeight: vars.fontWeight.medium,

  //   borderImage: "linear-gradient(to right, red 0%, orange 100%)",
  //   borderImageSlice: 1,
});
