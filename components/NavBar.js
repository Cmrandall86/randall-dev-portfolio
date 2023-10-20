'use client'

import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import mediaQueries from "./Breakpoints";

export default function NavBar() {
  const [toggleMobileNavLinks, setToggleMobileNavLinks] = useState(false);

  const handleClickHamburger = () => {
    setToggleMobileNavLinks(!toggleMobileNavLinks);
  };

  return (
    <>
      <NavWrapper>
        <LogoWrapper>
          <Logo href="./" />
        </LogoWrapper>
        <HamburgerWrapper>
          <HamburgerIcon onClick={handleClickHamburger}/>
        </HamburgerWrapper>
        <DesktopNavList>
          <PageLink href="./about">About</PageLink>
          <PageLink href="./resume">Resume</PageLink>
          <PageLink href="https://github.com/Cmrandall86">Github</PageLink>
        </DesktopNavList>
      </NavWrapper>
      <MobileNavList
        $toggleMobileNavLinks={toggleMobileNavLinks}
      >
        <PageLink href="./about">About</PageLink>
        <PageLink href="./resume">Resume</PageLink>
        <PageLink href="https://github.com/Cmrandall86">Github</PageLink>
      </MobileNavList>
    </>
  );
}

const HamburgerIcon = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
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
    </Button>
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

const LogoWrapper = styled.div`
  height: 50px;
  width: 190px;

  ${mediaQueries("min", "md")} {
    height: 50px;
    width: 317px;
  }
`;

const PageLink = styled.a`
  padding: 40px;

  &:hover{
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
  background: red;
  position: relative;
  top: 60px;

  display: ${({$toggleMobileNavLinks}) => $toggleMobileNavLinks ? "flex" : `none`};

`;

const DesktopNavList = styled.ul.attrs({
  className: "flex relative",
})`

  display: none;
  right: 10%;
  ${mediaQueries('min', 'md')}{
    display: flex;
  }
  
  
`;