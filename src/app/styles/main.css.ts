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
  gridTemplateRows: "1fr 6fr 1fr",
  gap: 20,
});

export const grid_item = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.themeColor.color.mainFontColor,
});
export const grid_item_2 = style([
  grid_item,
  {
    gridColumn: "1 / 2",
    gridRow: "1 / 4",
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

export const top_left_corner = style({
  position: "absolute", // 나이스
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
  zIndex: -1,
  background: "linear-gradient(135deg, #765B87 0%, #73D661 50%, #73D661 100%)",
});
export const bottom_right_corner = style({
  position: "absolute",
  bottom: 0,
  right: 0,
});
