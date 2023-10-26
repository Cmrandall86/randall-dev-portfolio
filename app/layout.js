"use client";

import React from "react";
import Theme_Provider from "providers/Theme_Provider";
import 'styles/globals.css'
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";

export default function layout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <main style={{ height: "100vh"}}>
            <Theme_Provider>
              <NavBar />
              {children}
              {/* <Footer/> */}
            </Theme_Provider>
        </main>
      </body>
    </html>
  );
}
