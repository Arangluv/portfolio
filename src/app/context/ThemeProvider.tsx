"use client";

import { darkTheme_1, darkTheme_2 } from "../styles/theme.css";
import { ThemeProvider } from "next-themes";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark_1"
      value={{ dark_1: darkTheme_1, dark_2: darkTheme_2 }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
