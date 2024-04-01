import { vars } from "./theme.css";
import { style } from "@vanilla-extract/css";

export const main_frame = style({
  width: "95vw",
  height: "90vh",
  overflow: "hidden",
  padding: 40,
  boxSizing: "border-box",
  position: "relative",
});

export const main_wrapper = style({
  display: "grid",
  width: "100%",
  height: "100%",
  gridTemplateColumns: "3fr 1fr",
  gridTemplateRows: "2fr 2fr 6fr 2fr",
  gap: 20,
});
export const stop_start = style({
  transition: "all .2s ease-in-out",
  stopColor: vars.themeColor.color.gradient_start,
});
export const stop_middle = style({
  transition: "all .2s ease-in-out",
  stopColor: vars.themeColor.color.gradient_middle,
});
export const stop_end = style({
  transition: "all .2s ease-in-out",
  stopColor: vars.themeColor.color.gradient_end,
});

export const grid_item = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.themeColor.color.mainFontColor,
});
export const main_content_wrapper = style([
  grid_item,
  {
    gridColumn: "1 / 2",
    gridRow: "1 / 5",
  },
]);

export const grid_item_3 = style([
  grid_item,
  {
    position: "relative",
    borderTopLeftRadius: 10,
    backgroundColor: vars.themeColor.color.mainBackGround,
  },
]);
export const category_title = style({
  color: vars.themeColor.color.mainFontColor,
  fontSize: vars.fontSize.medium,
  width: "100%",
  height: "90%",
  display: "flex",
  alignItems: "flex-end",
  filter: "brightness(1.2)",
  fontWeight: vars.fontWeight.normal,
});
export const top_left_corner = style({
  position: "absolute",
  top: 0,
  left: 0,
});
export const top_left_category_corner = style({
  position: "absolute",
  top: -5,
  left: -5,
  width: 150,
  height: 150,
  borderTopLeftRadius: 10,
  transition: "all 3s ease-in-out",
  zIndex: -1,
  background: `linear-gradient(135deg, ${vars.themeColor.color.gradient_start} 0%, ${vars.themeColor.color.gradient_end} 50%, ${vars.themeColor.color.gradient_end} 100%)`,
});
export const bottom_right_corner = style({
  position: "absolute",
  bottom: 0,
  right: 0,
});
