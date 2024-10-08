import type {Metadata} from "next";

import {Inter, Montserrat, Poppins} from "next/font/google";
import "./globals.css";
import React from "react";

import {cn} from "@/lib/utils";

const inter = Inter({subsets: ["latin"]});
const montesserat = Montserrat({
  subsets: ["latin"],
  variable: "--montesserat-variable",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--poppin-variable",
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
    <html className={cn(montesserat.variable, poppins.variable)} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
