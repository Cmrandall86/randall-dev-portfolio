"use client";

import mediaQueries from "@components/Breakpoints";
import styled from "styled-components";
import Grad from "../public/gradient.png";
import ProfilePic from '../public/fam.jpg'
import Image from "next/image";

export default function HomePage() {
  return (
    <HomePageWrapper>
      <BackgroundGradient />
        <ProfilePicture 
        src={ProfilePic}
        alt='profile picture'
        // fill
        />

    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div`
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

const ProfilePicture = styled(Image)`
  border-radius: 100%;
  background: red;
  height: 50vw;
  width: 50vw;
  

`