import { vars } from "../theme.css";
import { createVar, style } from "@vanilla-extract/css";

export const totalContentWidth = createVar();
export const totalContentHeight = createVar();
export const imageContentWidth = createVar();
export const imageContentHeight = createVar();
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
  minWidth: totalContentWidth,
  height: totalContentHeight,
  display: "grid",
  gridRow: "1 / 2",
  gridColumn: "2 / 3",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "2fr 20fr",
  gap: 20,
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
  height: totalContentHeight,
  transition: "all .5s ease-in-out",
});

export const image_slider_moveable = style({
  display: "flex",
  height: imageContentHeight,
  position: "absolute",
  top: 0,
  left: 0,
  flexWrap: "nowrap",
  flexShrink: 0,
  transition: "all .5s ease-in-out",
});

export const picture_wrapper_item = style([
  grid_item,
  {
    position: "relative",
    overflow: "hidden",
    width: imageContentWidth,
    height: imageContentHeight,
  },
]);

export const introduction_item = style([
  grid_item,
  {
    overflow: "hidden",
    gap: 20,
  },
]);

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

// 이미지 내부 slider btn part

export const image_slider_btn_wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 2fr 1fr",
  position: "absolute",
  width: 200,
  height: 40,
  borderRadius: 30,

  bottom: 5,
  left: "50%",
  transform: "translateX(-50%)",
});

export const image_slider_btn_item = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.themeColor.color.mainBackGround,
  opacity: "0.8",
});

export const image_slider_prev_item = style([
  image_slider_btn_item,
  {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
]);
export const image_slider_next_item = style([
  image_slider_btn_item,
  {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
]);
export const image_size = style({
  width: imageContentWidth,
  height: imageContentHeight,
});
export const image_icon = style([
  btn_icon,
  {
    width: 30,
    height: 30,
    color: vars.themeColor.color.mainFontColor,
    ":hover": {
      opacity: 1,
      filter: "brightness(2)",
    },
  },
]);
export const image_icon_disable = style([
  image_icon,
  {
    opacity: 0.7,
    ":hover": {
      cursor: "default",
      opacity: 0.7,
      filter: "none",
    },
  },
]);
export const image_count_text = style({
  color: vars.themeColor.color.mainFontColor,
  fontWeight: vars.fontWeight.large,
});

// project 설명 part

export const project_introduction_wrapper = style({
  width: "100%",
  height: "100%",
  padding: 10,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
});

export const introduction_sub_wrapper = style({
  display: "grid",
  gridTemplateColumns: "2.5fr 8fr",
  marginBottom: 15,
  gap: 10,
});

export const seperated_wrapper = style([
  introduction_sub_wrapper,
  {
    paddingTop: 15,
    borderTop: "1px solid rgba(255,255,255, 0.2)",
  },
]);

export const introduction_front = style({});
export const introduction_rear = style({
  overflow: "hidden",
});
export const intro_sub_title = style({
  lineHeight: "1.6",
  opacity: 0.8,
});
export const intro_sub_title_accent = style({
  lineHeight: "1.6",
  color: "rgb(226,232,240)",
  fontWeight: vars.fontWeight.large,
});
export const intro_description = style({
  width: "100%",
  wordBreak: "break-all",
  whiteSpace: "pre-line",
  lineHeight: "1.6",
  display: "flex",
});

export const intro_description_link = style([
  intro_description,
  {
    fontWeight: vars.fontWeight.large,
    color: vars.themeColor.color.mainFontColor,
  },
]);
export const introduction_rear_skill = style({
  overflow: "hidden",
  display: "flex",
});
export const skill_wrapper = style({
  backgroundColor: vars.themeColor.color.mainFontColor,
  marginRight: 15,
  padding: "10px 15px",
  borderRadius: "30px",
});

export const skill_text = style({
  color: vars.themeColor.color.mainBackGround,
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.large,
});
