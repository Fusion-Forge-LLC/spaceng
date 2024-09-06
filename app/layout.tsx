import type {Metadata} from "next";

import {Inter, Montserrat} from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({subsets: ["latin"]});
const montesserat = Montserrat({
  subsets: ["latin"],
  variable: "--montesserat-variable",
});

export const metadata: Metadata = {
  title: "SpaceNG",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={montesserat.variable} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
