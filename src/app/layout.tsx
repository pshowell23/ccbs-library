import type { Metadata } from "next";
import { Inter, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CCB's Library",
  description: "Sarah's home library, tracked.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable, fraunces.variable, geistMono.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
