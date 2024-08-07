import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mgagliardidev",
  description: "Portfolio of mgagliardidev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="mx-20 mt-6 mb-10 font-roboto max-sm:mx-6">
          {children}
        </div>
      </body>
    </html>
  );
}
