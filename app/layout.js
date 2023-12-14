"use client";

import React from "react";
import Theme_Provider from "providers/Theme_Provider";
import "styles/globals.css";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";

import { Poppins, Playfair_Display, Barlow_Semi_Condensed } from "next/font/google";

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
  weight: ["400", "500"],
  variable: "--font-barlow",
});

export default function layout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <main
          style={{ height: "100vh"}}
          className={`${poppins.variable} ${playfair.variable} ${barlow.variable} `}
        >
          <Theme_Provider>
            <NavBar />
            <div style={{ maxWidth: "1240px", margin: "0 auto"}}>{children}</div>
            {/* <Footer/> */}
          </Theme_Provider>
        </main>
      </body>
    </html>
  );
}
