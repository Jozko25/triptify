// app/layout.jsx
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@auth0/nextjs-auth0/client"
import { Spotlight } from "@/components/ui/spotlight";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <head>
          <link rel="icon" href="/loc.png" sizes="any" />
        </head>
        <body className={`${inter.className} animate-spotlight`}>
          {children}
          <Toaster />
        </body>
    </html>
  );
}
