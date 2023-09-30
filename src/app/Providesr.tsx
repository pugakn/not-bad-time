"use client";

import { ReactNode } from "react";
import { GlobalStyles } from "@/app/globalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#6400e0",
    secondary: "#ff00c7",
    bg: "#FFFFFF",
    surface: "#F9F9FE",
  },
};

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
