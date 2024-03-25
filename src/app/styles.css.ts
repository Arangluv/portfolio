import { style } from "@vanilla-extract/css";

export const myBtn = style({
  display: "flex",
  width: 100,
  justifyContent: "center",
  alignItems: "center",
  border: "none",
  backgroundColor: "blue",
  color: "white",
  ":hover": {
    backgroundColor: "pink",
  },
  transition: "all .1s ease-in-out",
});
