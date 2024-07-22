import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/features/header";
import { Footer } from "@/features/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resolvr",
  description: "Accelerated premium processing for reinsurance",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
