"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import mediaQueries from "./Breakpoints";
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
    <NavWrapper>
      <Nav>
        <LogoWrapper>
          <Logo href="/" />
        </LogoWrapper>
        <HamburgerWrapper>
          <HamburgerIcon onClick={handleClickHamburger} />
        </HamburgerWrapper>
        <DesktopNavList>
          <PageLink href="./resume">Resume</PageLink>
        </DesktopNavList>
      </Nav>

      <MobileNavList $toggleMobileNavLinks={toggleMobileNavLinks}>
        <PageLink href="./resume">Resume</PageLink>
      </MobileNavList>
    </NavWrapper>
  );
}

const HamburgerIcon = ({ onClick }) => {
  return (
    <button onClick={onClick}>
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

const NavWrapper = styled.nav`
  height: 75px;
  position: fixed;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 1240px;
  margin-inline: auto;
`;

const LogoWrapper = styled.div`
  height: 50px;
  width: 190px;

  ${mediaQueries("min", "md")} {
    height: 50px;
    width: 317px;
  }
`;

const PageLink = styled(Link)`
  height: fit-content;
  &:hover {
    color: blue;
  }
`;

const HamburgerWrapper = styled.div`
  display: block;
  width: fit-content;
  padding-top: 10px;

  ${mediaQueries("min", "md")} {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  font-weight: bolder;
  height: 30vh;
  width: 100%;
  z-index: 1;
  line-height: 50px;
  position: relative;
  top: 60px;
  padding: 20px;
  background: white;
  position: absolute;

  display: ${({ $toggleMobileNavLinks }) => ($toggleMobileNavLinks ? "flex" : `none`)};
`;

const DesktopNavList = styled.ul.attrs({
  className: "flex relative",
})`
  padding-top: 10px;
  display: none;
  right: 10%;
  ${mediaQueries("min", "md")} {
    display: flex;
  }
`;
