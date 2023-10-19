'use client'

import mediaQueries from "@components/Breakpoints";
import styled from "styled-components";
import StyledText from "@components/Text";
// import { Text } from "@nextui-org/react";
import Grad from '../public/gradient.png'
import Image from "next/image";
export default function HomePage() {
  return (
        <HomePageWrapper>
              <BackgroundGradient/>
        </HomePageWrapper>
  );
}


const HomePageWrapper = styled.main.attrs({ className: "flex flex-column items-center justify-center" })`
  font-family: ${({ theme }) => theme.fonts.primary};
  height: 100vh;
`;

const TextWrap = styled.div`
  margin: 30px 0;
`;

const BackgroundGradient = styled.div.attrs({className: 'absolute'})`
  background-image: url(${Grad.src});
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  opacity: .3;
  background-repeat: no-repeat; /* Prevent image from repeating */
  background-position: top right;
  transition: background .3s,border-radius .3s,opacity .3s;

  ${mediaQueries("max", "md")} {
    background-size: 450px auto;
  }
  `
  ;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 75%;
`;

const Card = styled.div`
  position: relative;
  width: 100%;

  ${mediaQueries("min", "md")} {
    width: 100%;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 75px;
`;

const CardOverlayText = styled(StyledText)`
  position: absolute;
  bottom: 0;
  padding: 30px;
  font-weight: bold;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: #febd88;

  ${mediaQueries("min", "md")} {
    font-size: 2rem;
  }
`;

/* Gradient color1 - color2 - color1 */
const HR = styled.hr`
  border: 0;
  height: 2px;
  margin: 20px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
`;
