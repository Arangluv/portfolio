// .src/theme2.css.ts

import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    fontColor: "blue",
  },
});
