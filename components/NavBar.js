"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [toggleMobileNavLinks, setToggleMobileNavLinks] = useState(false);
  const pathname = usePathname();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setToggleMobileNavLinks(false);
  }, [pathname]);

  return (
    <header className="nav-header">
      <nav className="nav-container">
        <div className="nav-logo">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <button
          className={`nav-toggle ${toggleMobileNavLinks ? 'active' : ''}`}
          type="button"
          aria-label="Toggle menu"
          onClick={handleClickHamburger}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className="nav-links desktop">
          <li>
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/resume" className={`nav-link ${pathname === '/resume' ? 'active' : ''}`}>
              Resume
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Cmrandall86" className="nav-link">
              Github
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`mobile-menu ${toggleMobileNavLinks ? 'active' : ''}`}>
        <ul className="nav-links mobile">
          <li>
            <Link 
              href="/" 
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
              onClick={() => setToggleMobileNavLinks(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/resume" 
              className={`nav-link ${pathname === '/resume' ? 'active' : ''}`}
              onClick={() => setToggleMobileNavLinks(false)}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}
              onClick={() => setToggleMobileNavLinks(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="https://github.com/Cmrandall86" 
              className="nav-link"
              onClick={() => setToggleMobileNavLinks(false)}
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
