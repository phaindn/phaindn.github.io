import type { Metadata } from "next";
import "@/app/styles/portfolio.css";
import '@/app/styles/global.css'
import { poppinsFont } from "@/app/fonts";

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
        className={`${poppinsFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
