import { vars } from "./theme.css";
import { style } from "@vanilla-extract/css";

export const main_frame = style({
  width: "95vw",
  height: "90vh",
  overflow: "hidden",
  padding: 40,
  boxSizing: "border-box",
  position: "relative",
  "@media": {
    "screen and (min-width:1024px) and (max-width:1279px)": {
      height: "95vh",
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      height: "95vh",
    },
    "screen and (min-width:480px) and (max-width:767px)": {
      height: "95vh",
    },
    "screen and (max-width:479px)": {
      width: "100vw",
      height: "100vh",
    },
  },
});

export const main_wrapper = style({
  display: "grid",
  width: "100%",
  height: "100%",
  gridTemplateColumns: "3fr 1fr",
  gridTemplateRows: "2fr 2fr 6fr 2fr",
  boxSizing: "border-box",
  gap: 20,
  "@media": {
    "screen and (max-width:479px)": {
      // 모바일
      gridTemplateRows: "20fr 1fr 1fr 1fr",
      gap: 5,
    },
  },
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
  boxSizing: "border-box",
  color: vars.themeColor.color.mainFontColor,
});
export const grid_order_first = style({
  "@media": {
    "screen and (max-width:479px)": {
      order: 1,
    },
  },
});
export const grid_order_second = style({
  "@media": {
    "screen and (max-width:479px)": {
      order: 2,
    },
  },
});
export const grid_order_third = style({
  "@media": {
    "screen and (max-width:479px)": {
      order: 3,
    },
  },
});
export const grid_order_last = style({
  "@media": {
    "screen and (max-width:479px)": {
      order: 3,
    },
  },
});
export const main_content_wrapper = style([
  grid_item,
  {
    gridColumn: "1 / 2",
    gridRow: "1 / 5",
    "@media": {
      "screen and (max-width:479px)": {
        gridColumn: "1 / 3",
        gridRow: "1 / 3",
        // 모바일
      },
    },
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
  "@media": {
    "screen and (min-width:1024px) and (max-width:1279px)": {
      // 테블릿 가로 & 노트북
      fontSize: vars.fontSize.regular,
    },

    "screen and (max-width:479px)": {
      // 모바일 세로
      fontSize: vars.fontSize.regular,
      alignItems: "center",
    },
  },
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
