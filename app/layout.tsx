"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import  CityProvider  from "@/context/CityContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <CityProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </CityProvider>
            </body>
        </html>
    );
}
