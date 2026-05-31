import { Particle, ScrollProgressIndicator, SvgObject } from "@/components/common";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TkymHrt Portfolio",
  description:
    "This is the portfolio of Takayama Haruto, who belongs to the information department of the Nagaoka University of Technology's Cultural Festival Executive Committee.",
  creator: "TkymHrt",
  icons: {
    icon: "/icon/FaMountainSun.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="antialiased">
      <body>
        {children}
        <SvgObject />
        <ScrollProgressIndicator />
        <Particle />
        <Analytics />
      </body>
    </html>
  );
}
