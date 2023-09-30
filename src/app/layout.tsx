import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./Providesr";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--space-mono",
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
      <body className={spaceMono.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
