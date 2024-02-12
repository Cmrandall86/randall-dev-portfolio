"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function NavBar() {
  const [toggleMobileNavLinks, setToggleMobileNavLinks] = useState(false);

  const handleClickHamburger = () => {
    setToggleMobileNavLinks(!toggleMobileNavLinks);
  };

  useEffect(() => {
    function handleResize() {
      // Set toggleMobileNavLinks to false when the window is resized
      setToggleMobileNavLinks(false);
    }

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navWrapper">
      <nav className="nav">
        <div className="logo-wrapper">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="hamburger-wrapper">
        <button
      className={`hamburger hamburger--3dx ${toggleMobileNavLinks ? 'is-active' : ''}`}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      onClick={handleClickHamburger}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
        </div>
        <ul className="desktop-nav-list">
          <li>
            <Link href="/" className="page-link" >
              Home
            </Link>
          </li>
          <li>
            <Link href="/resume" className="page-link">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/projects" className="page-link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Cmrandall86" className="page-link">
              Github
            </Link>
          </li>
        </ul>
      </nav>

      <ul className="mobile-nav-list" style={{ display: toggleMobileNavLinks ? "block" : "none" }}>
        <li>
          <Link href="/" className="page-link" onClick={() => setToggleMobileNavLinks(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/resume" className="page-link" onClick={() => setToggleMobileNavLinks(false)}>
            Resume
          </Link>
        </li>
        <li>
          <Link href="/projects" className="page-link" onClick={() => setToggleMobileNavLinks(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Cmrandall86"
            onClick={() => setToggleMobileNavLinks(false)}
            className="page-link"
          >
            Github
          </Link>
        </li>
      </ul>
    </header>
  );
}
