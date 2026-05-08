import React from "react";
import "styles/globals.scss";
import "styles/_navbar.scss"
import styles from "./styles.module.scss";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";

import { Poppins, Playfair_Display, Barlow_Semi_Condensed, Roboto, Inter, Source_Serif_Pro } from "next/font/google";

export const metadata = {
  title: "Chris Randall | Software Developer | Frontend Engineer",
  description:
    "Software Developer with shipped production software for government agencies and enterprise clients. JavaScript, React, Node.js, SQL, AWS, and modern AI-assisted engineering workflows. Open to remote opportunities.",
  metadataBase: new URL("https://www.chrisrandall.dev"),
  keywords: [
    "Software Developer",
    "Frontend Engineer",
    "React Developer",
    "JavaScript",
    "Node.js",
    "Next.js",
    "Full Stack",
    "Remote Developer",
    "New Mexico",
    "Albuquerque",
  ],
  openGraph: {
    title: "Chris Randall | Software Developer | Frontend Engineer",
    description:
      "Shipped production software for government agencies and enterprise clients. JavaScript, React, Node.js, SQL, AWS, and AI-assisted engineering workflows.",
    url: "https://www.chrisrandall.dev",
    siteName: "Chris Randall",
    images: [
      {
        url: "/Chris_Randall.jpg",
        width: 800,
        height: 800,
        alt: "Chris Randall, Software Developer based in Albuquerque, NM",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Randall | Software Developer | Frontend Engineer",
    description:
      "Shipped production software for government agencies and enterprise clients. JavaScript, React, Node.js, SQL, AWS, and AI-assisted engineering workflows.",
    images: ["/Chris_Randall.jpg"],
  },
};

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
            <Footer/>
        </main>
      </body>
    </html>
  );
}
