import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import { Lato, Space_Mono } from "next/font/google";
import Providers from "./Providesr";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--space-mono",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["400", "700"],
  variable: "--body-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Not bad time",
  description: "Meetings made easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${lato.variable}`}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
