import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const archives_wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  height: "100%",
  gap: 10,
});

export const grid_item = style({
  display: "flex",
  border: "1px solid blue",
  alignItems: "center",
  justifyContent: "center",
});

export const archive_item_container = style({
  width: "80%",
  height: "40%",
  backgroundColor: vars.themeColor.color.contentBackGround,
  borderRadius: 20,
});
