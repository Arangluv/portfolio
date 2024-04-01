import { vars } from "../theme.css";
import { style } from "@vanilla-extract/css";

export const project_wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 20fr 1fr",
  gridTemplateRows: "20fr 1fr",
  width: "100%",
  height: "100%",
  backgroundColor: vars.themeColor.color.contentBackGround,
  gap: 10,
  boxSizing: "border-box",
});
export const grid_item = style({
  border: "1px solid rgba(255,255,255,0.2)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const prev_btn_item = style([
  grid_item,
  {
    gridColumn: "1 / 2",
    gridRow: "1 / 3",
  },
]);
export const next_btn_item = style([
  grid_item,
  {
    gridColumn: "3 / 4",
    gridRow: "1 / 3",
  },
]);

export const main_content_wrapper = style({
  display: "grid",
  gridRow: "1 / 2",
  gridColumn: "2 / 3",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1.2fr 20fr",
  border: "1px solid red",
  gap: 10,
});
export const header_item = style([
  grid_item,
  {
    gridColumn: "1 / 3",
    gridRow: "1 / 2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
]);
export const picture_wrapper_item = style([grid_item, {}]);

export const introduction_item = style([grid_item, {}]);

export const progress_state_item = style([
  grid_item,
  {
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  },
]);
