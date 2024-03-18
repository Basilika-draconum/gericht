import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Cormorant } from "next/font/google";

import "./globals.css";

const upright = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-upright",
});
const sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gericht",
  description: "Generated by create next app",
  icons: [
    {
      rel: "icon",
      type: "image/svg",
      media: "(prefers-color-scheme: dark)",
      url: "/icons/favicon-white.svg",
    },
    {
      rel: "icon",
      type: "image/svg",
      media: "(prefers-color-scheme: light)",
      url: "/icons/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${upright.className} ${sans.className}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
