import { vars } from "./theme.css";
import { style } from "@vanilla-extract/css";

export const main_frame = style({
  width: "95vw",
  height: "90vh",
  border: `1px solid red`,
  overflow: "hidden",
  padding: 25,
  boxSizing: "border-box",
  position: "relative",
});

export const main_wrapper = style({
  width: "100%",
  height: "100%",
  border: `1px solid blue`,
});

export const top_left_corner = style({
  position: "absolute",
  top: 0,
  left: 0,
});

export const bottom_right_corner = style({
  position: "absolute",
  bottom: 0,
  right: 0,
});
