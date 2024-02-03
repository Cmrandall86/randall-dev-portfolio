"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function NavBar() {
  const [toggleMobileNavLinks, setToggleMobileNavLinks] = useState(false);

  const handleClickHamburger = () => {
    setToggleMobileNavLinks(!toggleMobileNavLinks);
  };

  return (
    <div className="navWrapper">
      <div className="nav">
        <div className="logo-wrapper">
          <Link href="/" className="Logo">
            <Logo />
          </Link>
        </div>
        <div className="hamburger-wrapper">
          <HamburgerIcon onClick={handleClickHamburger} />
        </div>
        <ul className="desktop-nav-list">
          <li>
            <Link href="/" className="page-link">
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
      </div>

      <ul className="mobile-nav-list" style={{ display: toggleMobileNavLinks ? "block" : "none" }}>
        <li>
          <Link href="./" className="page-link" onClick={() => setToggleMobileNavLinks(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="./" className="page-link" onClick={() => setToggleMobileNavLinks(false)}>
            Resume
          </Link>
        </li>
        <li>
          <Link href="./" className="page-link" onClick={() => setToggleMobileNavLinks(false)}>
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
    </div>
  );
}

const HamburgerIcon = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        background: "transparent",
        padding: "0 10px",
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-menu-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </button>
  );
};
