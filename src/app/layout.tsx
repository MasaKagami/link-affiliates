import type { Metadata } from "next";
import { montserrat } from "@/styles/fonts"; // Import Montserrat from fonts.ts
import "./globals.css";

export const metadata: Metadata = {
  title: "Link Affiliates",
  description: "The best platform for affiliate marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}