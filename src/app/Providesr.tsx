"use client";

import { ReactNode } from "react";
import { GlobalStyles } from "@/app/globalStyles";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
