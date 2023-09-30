"use client";

import { ReactNode } from "react";
import { GlobalStyles } from "@/app/globalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#ff0000",
    bg: "#ffffff",
    surface: "#ffffff",
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
