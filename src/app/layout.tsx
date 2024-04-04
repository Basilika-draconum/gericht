import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Open_Sans } from "next/font/google";
import { Cormorant_Upright } from "next/font/google";

import "./globals.css";

const upright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-upright",
});
const sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
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
      <body
        className={`${upright.className} ${sans.variable} bg-bg-main flex flex-col min-h-screen`}
      >
        <main>
          {children}
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                border: "solid",
                borderColor: "#fff",
                borderWidth: "1px",
                borderRadius: "10px",
                background: "#0C0C0C",
                color: "#fff",
              },
              duration: 3000,
            }}
          />
        </main>
      </body>
    </html>
  );
}
