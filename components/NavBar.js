import React, { useState } from "react";
import { NextImage } from "./Image";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import mediaQueries from "./Breakpoints";
import { css } from "@nextui-org/react";

export default function NavBar() {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [toggleMobileNavLinks, setToggleMobileNavLinks] = useState(false);

  const handleClickHamburger = () => {
    setToggleMobileNavLinks(!toggleMobileNavLinks);
  };

  return (
    <>
      <NavWrapper displayNav={openMobileNav}>
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
        toggleMobileNavLinks={toggleMobileNavLinks}
      >
        <PageLink href="./about">About</PageLink>
        <PageLink href="./resume">Resume</PageLink>
        <PageLink href="https://github.com/Cmrandall86">Github</PageLink>
      </MobileNavList>
    </>
  );
}

const HamburgerIcon = ({ onClick, css }) => {
  return (
    <Button onClick={onClick} light style={{minWidth:'100%'}}>
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

const NavWrapper = styled.nav.attrs({
  className: "flex justify-between items-center",
})`
  height: 75px;
  background: #ddd;
  position: fixed;
  opacity: 80%;
  width: 100%;
  z-index: 100;
`;

const LogoWrapper = styled.div`
  height: 30px;
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
  padding: 20px;

  ${mediaQueries("min", "md")} {
    display: none;
  }
`;

const MobileNavList = styled.ul.attrs({
  className: "flex flex-column items-center",
})`
  padding-top: 150px;
  font-weight: bolder;
  font-size: 2.2rem;
  height: 100vh;
  width: 100%;
  z-index: 11;
  line-height: 50px;

  display: ${(props) => (props.toggleMobileNavLinks ? "flex" : `none`)};

`;

const DesktopNavList = styled.ul.attrs({
  className: "flex",
})`

  display: none;

  ${mediaQueries('min', 'md')}{
    display: flex;
  }
  
  
`;