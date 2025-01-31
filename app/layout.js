"use client";

import React from "react";
import "styles/globals.scss";
import "styles/_navbar.scss"
import styles from "./styles.module.scss";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";

import { Poppins, Playfair_Display, Barlow_Semi_Condensed, Roboto, Inter, Source_Serif_Pro } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "800"],  // Added more weights for flexibility
  variable: "--font-playfair",
  display: 'swap',
});

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["200", "400", "500"],
  variable: "--font-barlow",
  display: 'swap',
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: 'swap',
});

export default function RootLayout({ children }) {  // Renamed from layout to RootLayout
  return (
    <html lang="en" className={`
      ${poppins.variable} 
      ${playfair.variable} 
      ${barlow.variable} 
      ${roboto.variable} 
      ${inter.variable}
    `}>
      <body>
        <main className="flex">
            <NavBar/>
            <div style={{ maxWidth: "1240px", margin: "0 auto"}} className={styles.MobileCentering}>
              {children}
            </div>
            {/* <Footer/> */}
        </main>
      </body>
    </html>
  );
}
