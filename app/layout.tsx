import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "JPC Dubai | Pest Control, Cleaning & Facilities Maintenance",
  description: "Professional pest control, cleaning, sanitization, and facility maintenance services across Dubai, UAE.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jpcdubai.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  );
}
