"use client";

import React from "react";
import "styles/globals.scss";
import "styles/_navbar.scss"
import styles from "./styles.module.scss";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";

import { Poppins, Playfair_Display, Barlow_Semi_Condensed, Roboto, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-playfair",
});

const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["200", "400", "500"],
  variable: "--font-barlow",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function layout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <main
          className={`${poppins.variable} ${playfair.variable} ${barlow.variable} ${roboto.variable} ${inter.variable} flex `}
        >
            <NavBar/>
            <div style={{ maxWidth: "1240px", margin: "0 auto"}} className={styles.MobileCentering}>{children}</div>
            {/* <Footer/> */}
        </main>
      </body>
    </html>
  );
}
