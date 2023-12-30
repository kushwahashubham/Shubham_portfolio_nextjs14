/* eslint-disable camelcase */
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const base = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-base",
});

export const metadata: Metadata = {
  title: "Shubham's Portfolio",
  description: "Nextjs Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={base.variable}>{children}</body>
    </html>
  );
}
