import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dev E-Commerce",
  description: "Dev E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(inter.className, "bg-slate-700")}>
        <Navbar />
        <main className="h-screen p-16">
          {children}
        </main>
      </body>
    </html >
  );
}
