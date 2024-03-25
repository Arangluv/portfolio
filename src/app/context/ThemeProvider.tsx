"use client";

import { darkTheme, lightTheme } from "../styles/theme.css";
import { ThemeProvider } from "next-themes";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{ light: lightTheme, dark: darkTheme }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
