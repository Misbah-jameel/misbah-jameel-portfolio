import "./globals.css";
import { Montserrat } from "next/font/google";
import type React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "Misbah Jameel-Full Stack Developer",
  description: "Portfolio of Misbah Jameel, a full stack developer and GIAIC student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans bg-black text-white`}>
        
          <div className="flex">
            <main className="flex-1 transition-all duration-300 ease-in-out">
              <Navbar />
              {children}
              <Footer />
            </main>
          </div>
      
      </body>
    </html>
  );
}
