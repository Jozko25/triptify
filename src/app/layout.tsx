import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

// Google Font
const inter = Manrope({
  subsets: ["latin"],
  weight: "400", // 700 corresponds to bold
});

// Metadata
export const metadata: Metadata = {
  title: "Triptify - AI Route Planning",
  description: "Plan your trip like never b4.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          {children}
          <Toaster />
        </body>
      </html>
  );
}
