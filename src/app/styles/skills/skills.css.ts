import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  width: "100%",
  height: "100%",
  gap: 10,
});

export const grid_item = style({
  padding: 10,
  display: "flex",
  flexDirection: "column",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: 20,
  boxSizing: "border-box",
});

export const front_stack_item = style([
  grid_item,
  {
    gridColumn: "1 / 3",
    gridRow: "1 / 2",
  },
]);

export const back_stack_item = style([
  grid_item,
  {
    gridColumn: "1 / 3",
    gridRow: "2 / 3",
  },
]);

// grid item 내부에 있는 title

export const title = style({
  color: vars.themeColor.color.mainFontColor,
  fontSize: vars.fontSize.regular,
  fontWeight: vars.fontWeight.normal,
  marginBottom: 10,
});

// 내부에 담기는 icon container

export const icons_wrapper = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  flexWrap: "wrap",
});

export const icon_container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 120,
  width: "auto",
  height: 120,
});

export const icon_title = style({
  marginTop: 10,
  fontWeight: vars.fontWeight.large,
  color: vars.themeColor.color.mainFontColor,
});
export const icon_size = style({
  width: 80,
  height: 80,
});

// frontend icon
export const html_icon = style([icon_size, { fill: "#E34F26" }]);
export const css_icon = style([icon_size, { fill: "#1572B6" }]);
export const javascript_icon = style([icon_size, { fill: "#F7DF1E" }]);
export const typescript_icon = style([icon_size, { fill: "#3178C6" }]);
export const react_icon = style([icon_size, { fill: "#61DAFB" }]);
export const nextjs_icon = style([icon_size, { fill: "white" }]);
export const recoil_icon = style([icon_size, { fill: "#3578E5" }]);
export const react_query_icon = style([icon_size, { fill: "#FF4154" }]);
export const react_hook_form_icon = style([icon_size, { fill: "#EC5990" }]);
export const styledcomponents_icon = style([icon_size, { fill: "#FFCF44" }]);

// backend icon
export const nodejs_icon = style([icon_size, { fill: "#339933" }]);
export const expressjs_icon = style([icon_size, { fill: "#ffffff" }]);
export const mongodb_icon = style([icon_size, { fill: "#47A248" }]);
export const mongoose_icon = style([icon_size, { fill: "#880000" }]);

// depolyment icon
export const aws_icon = style([icon_size, { fill: "#FF9900" }]);
export const vercel_icon = style([icon_size, { fill: "#ffffff" }]);

//version control
export const git_icon = style([icon_size, { fill: "#F05032" }]);
export const github_icon = style([icon_size, { fill: "#ffffff" }]);
