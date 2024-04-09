import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  width: "100%",
  height: "100%",
  gap: 10,
  "@media": {
    "screen and (min-width:768px) and (max-width:1023px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
    },
  },
});

export const grid_item = style({
  padding: 10,
  display: "flex",
  flexDirection: "column",
  borderRadius: 20,
  boxSizing: "border-box",
  backgroundColor: vars.themeColor.color.contentBackGround,
  "@media": {
    "screen and (min-width:768px) and (max-width:1023px)": {
      padding: 5,
    },
  },
});

export const front_stack_item = style([
  grid_item,
  {
    gridColumn: "1 / 3",
    gridRow: "1 / 2",
    "@media": {
      "screen and (min-width:768px) and (max-width:1023px)": {
        gridColumn: "1 / 2",
        gridRow: "1 / 3",
      },
    },
  },
]);

export const back_stack_item = style([
  grid_item,
  {
    gridColumn: "1 / 3",
    gridRow: "2 / 3",
    "@media": {
      "screen and (min-width:768px) and (max-width:1023px)": {
        gridColumn: "2 / 3",
        gridRow: "1 / 3",
      },
    },
  },
]);

// grid item 내부에 있는 title

export const title = style({
  color: "white",
  fontSize: vars.fontSize.regular,
  fontWeight: vars.fontWeight.normal,
  marginBottom: 10,
  paddingTop: 5,
  paddingLeft: 5,
  "@media": {
    "screen and (min-width:1024px) and (max-width:1280px)": {
      fontSize: vars.fontSize.regular,
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      fontSize: vars.fontSize.small,
    },
    "screen and (min-width:480px) and (max-width:767px)": {},
    "screen and (max-width:479px)": {
      fontSize: vars.fontSize.small,
    },
  },
});

// 내부에 담기는 icon container

export const icons_wrapper = style({
  display: "flex",
  alignItems: "center",

  width: "100%",
  height: "100%",
  flexWrap: "wrap",
  boxSizing: "border-box",
});

export const icon_container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 120,
  height: 120,
  "@media": {
    "screen and (min-width:1024px) and (max-width:1280px)": {
      minWidth: 70,
      height: 70,
      margin: 8,
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      minWidth: 50,
      height: 50,
      margin: 3,
    },
    "screen and (min-width:480px) and (max-width:767px)": {},
    "screen and (max-width:479px)": {
      minWidth: 50,
      height: 50,
      margin: 3,
    },
  },
});

export const icon_title = style({
  marginTop: 10,
  fontWeight: vars.fontWeight.large,
  color: "vars.themeColor.color.mainFontColor",
  "@media": {
    "screen and (min-width:1024px) and (max-width:1280px)": {
      fontSize: vars.fontSize.small,
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      fontSize: 11,
    },
    "screen and (min-width:480px) and (max-width:767px)": {},
    "screen and (max-width:479px)": {
      fontSize: vars.fontSize.micro,
    },
  },
});
export const icon_size = style({
  width: 80,
  height: 80,
  "@media": {
    "screen and (min-width:1024px) and (max-width:1280px)": {
      width: 40,
      height: 40,
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      width: 30,
      height: 30,
    },
    "screen and (min-width:480px) and (max-width:767px)": {},
    "screen and (max-width:479px)": {
      width: 30,
      height: 30,
    },
  },
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
export const mongoose_icon = style([icon_size, { fill: "#c70404" }]);

// depolyment icon
export const aws_icon = style([icon_size, { fill: "#FF9900" }]);
export const vercel_icon = style([icon_size, { fill: "#ffffff" }]);

//version control
export const git_icon = style([icon_size, { fill: "#F05032" }]);
export const github_icon = style([icon_size, { fill: "#ffffff" }]);
