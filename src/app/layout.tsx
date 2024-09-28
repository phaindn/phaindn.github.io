import type { Metadata } from "next";
import "./globals.css";
import { manropeFont } from "./fonts";

export const metadata: Metadata = {
  title: "Felixx Nguyen",
  description: "This is Felixx Nguyen's portfolio site",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
