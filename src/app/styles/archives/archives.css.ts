import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";
import { intro_description } from "../projects/project.css";
export const archives_wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  height: "100%",
  gap: 10,
  "@media": {
    "screen and (max-width:479px)": {
      gridTemplateRows: "1fr 1fr",
      gridTemplateColumns: "none",
    },
  },
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
  "@media": {
    "screen and (min-width:1024px) and (max-width:1280px)": {
      width: "80%",
      height: "80%",
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      width: "80%",
      height: "90%",
    },
    "screen and (max-width:479px)": {
      width: "80%",
      height: "80%",
    },
  },
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
  "@media": {
    "screen and (min-width:1024px) and (max-width:1280px)": {
      width: 65,
      height: 65,
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      width: 50,
      height: 50,
    },
    "screen and (max-width:479px)": {
      width: 40,
      height: 40,
    },
  },
});
export const archive_title = style({
  fontSize: vars.fontSize.large,
  marginTop: 30,
  fontWeight: vars.fontWeight.large,
  "@media": {
    "screen and (min-width:1024px) and (max-width:1280px)": {
      fontSize: vars.fontSize.medium,
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      fontSize: vars.fontSize.regular,
      marginTop: 20,
    },
    "screen and (max-width:479px)": {
      margin: "10px 0",
      fontSize: vars.fontSize.middleSmall,
    },
  },
});
export const description_box = style([
  flex_box,
  {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 60,
    padding: "0 10px",
    "@media": {
      "screen and (min-width:768px) and (max-width:1023px)": {
        marginTop: 30,
      },
      "screen and (max-width:479px)": {
        marginTop: 10,
      },
    },
  },
]);
export const archive_description = style([
  intro_description,
  {
    display: "grid",
    gridTemplateColumns: "1fr 9fr",
    marginBottom: 5,
    "@media": {
      "screen and (min-width:768px) and (max-width:1023px)": {
        fontSize: vars.fontSize.micro,
      },
      "screen and (max-width:479px)": {
        fontSize: vars.fontSize.micro,
      },
    },
  },
]);
export const archive_icon = style({
  marginRight: 10,
});
export const archive_icon_container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
  "@media": {
    "screen and (min-width:1024px) and (max-width:1280px)": {
      bottom: 20,
      padding: "15px 20px",
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      bottom: 10,
      padding: "10px 20px",
    },
    "screen and (max-width:479px)": {
      bottom: 10,
      padding: "10px 10px",
    },
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
  "@media": {
    "screen and (min-width:1024px) and (max-width:1280px)": {
      fontSize: vars.fontSize.small,
    },
    "screen and (min-width:768px) and (max-width:1023px)": {
      fontSize: vars.fontSize.small,
    },
    "screen and (max-width:479px)": {
      fontSize: vars.fontSize.small,
    },
  },
});
