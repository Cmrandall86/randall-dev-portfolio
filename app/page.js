"use client";

import mediaQueries from "@components/Breakpoints";
import styled from "styled-components";
import Grad from "../public/gradient.png";
export default function HomePage() {
  return (
    <HomePageWrapper>
      <BackgroundGradient />
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.main.attrs({ className: "flex flex-column items-center justify-center" })`
  font-family: ${({ theme }) => theme.fonts.primary};
  height: 100vh;
`;

const BackgroundGradient = styled.div.attrs({ className: "absolute" })`
  background-image: url(${Grad.src});
  height: 100%;
  width: 100vw;
  right: 0;
  top: 0;
  opacity: 0.3;
  background-repeat: no-repeat; /* Prevent image from repeating */
  background-position: top right;
  transition: background 0.3s;

  ${mediaQueries('range', null, 'sm', 'lg')} {
    background-size: 450px auto;
  }

  ${mediaQueries("max", "sm")} {
    background-size: 360px auto;
  }
`;
