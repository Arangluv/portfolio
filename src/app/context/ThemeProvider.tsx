'use client';

import { ThemeProvider } from 'next-themes';
import {
  darkTheme_1,
  darkTheme_2,
  darkTheme_3,
  darkTheme_4,
} from '../styles/theme.css';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark_1"
      value={{
        dark_1: darkTheme_1,
        dark_2: darkTheme_2,
        dark_3: darkTheme_3,
        dark_4: darkTheme_4,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
