import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Open_Sans } from "next/font/google";
import { Cormorant_Upright } from "next/font/google";

import meta from "@/data/meta.json";

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

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { title, description, manifest, keywords, twitter, openGraph, icons } =
    meta;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
    manifest,
    keywords,
    twitter,
    openGraph: { ...openGraph, url: `${baseUrl}` },
    icons,
  };
}

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
