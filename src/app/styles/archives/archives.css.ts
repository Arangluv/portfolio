import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";
import {
  introduction_sub_wrapper,
  intro_description,
} from "../projects/project.css";
export const archives_wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  height: "100%",
  gap: 10,
});

export const grid_item = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const archive_item_container = style({
  width: "60%",
  height: "60%",
  backgroundColor: vars.themeColor.color.contentBackGround,
  borderRadius: 10,
  padding: 20,
  position: "relative",
});

export const flex_box = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const flex_box_start = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const archive_sub_container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10,
});
export const icon = style({
  fill: vars.themeColor.color.mainFontColor,
  width: 80,
  height: 80,
});
export const archive_title = style({
  fontSize: vars.fontSize.large,
  marginTop: 30,
  fontWeight: vars.fontWeight.large,
});
export const description_box = style([
  flex_box,
  {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 60,
    padding: "0 10px",
  },
]);
export const archive_description = style([
  intro_description,
  flex_box,
  { marginBottom: 5 },
]);
export const archive_icon = style({
  marginRight: 10,
});
export const read_more = style({
  position: "absolute",
  transform: "translateX(-50%)",
  bottom: 30,
  backgroundColor: vars.themeColor.color.mainBackGround,
  padding: "15px 35px",
  borderRadius: 30,
  left: "50%",
  transition: "all .2s ease-in-out",
  ":hover": {
    cursor: "pointer",
    backgroundColor: vars.themeColor.color.mainFontColor,
  },
});
export const read_more_text = style({
  selectors: {
    [`${read_more}:hover &`]: {
      color: vars.themeColor.color.mainBackGround,
    },
  },
  fontWeight: vars.fontWeight.large,
  textDecoration: "none",
  color: vars.themeColor.color.mainFontColor,
});
