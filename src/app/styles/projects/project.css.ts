import { vars } from "../theme.css";
import { createVar, style } from "@vanilla-extract/css";

export const computedWidth = createVar();
export const computedHeight = createVar();

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
  minWidth: computedWidth,
  height: computedHeight,
  display: "grid",
  gridRow: "1 / 2",
  gridColumn: "2 / 3",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1.2fr 20fr",
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
    fontSize: vars.fontSize.medium,
    fontWeight: vars.fontWeight.large,
  },
]);
export const slider_wrapper = style({
  overflow: "hidden",
  height: "100%",
});

export const slider_moveable = style({
  display: "flex",
  flexWrap: "nowrap",
  flexShrink: 0,
  width: `${Number(computedWidth) * 3}`,
  height: computedHeight,
  transition: "all .5s ease-in-out",
});
export const picture_wrapper_item = style([grid_item, {}]);

export const introduction_item = style([grid_item, {}]);

export const progress_state_item = style([
  grid_item,
  {
    gridColumn: "2 / 3",
    gridRow: "2 / 3",
  },
]);

// prev, next bnt

export const btn_icon = style({
  width: 50,
  height: 50,
  transition: "all .2s ease-in-out",
  ":hover": {
    cursor: "pointer",
    filter: "brightness(1.2)",
  },
});
export const unable_icon = style({
  filter: "brightness(0.5)",
  ":hover": {
    cursor: "default",
    filter: "brightness(0.5)",
  },
});
// 진행바 part

const progressive_dot = style({
  width: 10,
  height: 10,
  margin: "0 3px",
  borderRadius: "100%",
  backgroundColor: vars.themeColor.color.mainFontColor,
});
export const progressiv_dot_active = style([
  progressive_dot,
  {
    transform: "scale(1.5)",
    transition: "all .2s ease-in-out",
  },
]);
export const progressiv_dot_inactive = style([
  progressive_dot,
  {
    opacity: 0.7,
    transition: "all .2s ease-in-out",
  },
]);
