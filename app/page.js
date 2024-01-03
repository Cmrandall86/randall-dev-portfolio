"use client";

import mediaQueries from "@components/Breakpoints";
import styled from "styled-components";
import Grad from "../public/gradient.png";
import ProfilePic from "../public/Chris_Randall.jpg";
import ResponsiveImage from "@components/Image";
import LinkedIn_icon from "public/LinkedIn_icon";
import Mail_icon from "public/Mail_icon";
import Link from "next/link";

export default function HomePage() {
  return (
    <HomePageWrapper>
      <BackgroundGradient />
      <Content>
        <LS>
          <LSTextWrap>
            <PreTitle>HELLO, MY NAME IS</PreTitle>
            <Divider />

            <Title>Chris Randall</Title>
            <SubTitle>Web Developer</SubTitle>
            <Contact href="https://www.linkedin.com/in/chris-randall-1b2919167/">
              <LinkedIn_icon /> LinkedIn Profile
            </Contact>
            <Contact href="mailto:cmrandall86@gmail.com">
              <Mail_icon /> Cmrandall86@gmail.com
            </Contact>
          </LSTextWrap>
        </LS>
        <RS>
          <ImageWrap>
            <ResponsiveImage priority src={ProfilePic} alt="profile picture" photoAspectRatio="square" fill />
          </ImageWrap>
        </RS>
      </Content>
    </HomePageWrapper>
  );
}

const LSTextWrap = styled.div``;

const LS = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaQueries("max", "md")} {
    width: 100%;
    justify-content: start;
    align-items: start;
  }
`;

const RS = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  ${mediaQueries("max", "md")} {
    width: 100%;
    justify-content: center;
  }

  img {
    border-radius: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  max-width: 1240px;
  width: 100%;
  margin-inline: 30px;

  ${mediaQueries("max", "md")} {
    flex-direction: column-reverse;
  }
`;

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: var(--font-poppins);
`;

const BackgroundGradient = styled.div`
  background-image: url(${Grad.src});
  height: 100%;
  width: 100vw;
  right: 0;
  top: 0;
  opacity: 0.3;
  position: absolute;
  background-repeat: no-repeat;
  background-position: top right;
  transition: background 0.3s;

  ${mediaQueries("range", null, "md", "xl")} {
    background-size: 450px auto;
  }

  ${mediaQueries("max", "md")} {
    background-size: 360px auto;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  position: relative;
  padding-top: 100px;
  ${mediaQueries("range", null, "md", "xl")} {
    width: 80%;
    padding-top: 0;
  }

  ${mediaQueries("max", "md")} {
    width: 90%;
  }
`;

const PreTitle = styled.div`
  height: fit-content;
  color: #758398;
  font-family: var(--font-barlow);
  font-weight: 500;
`;

const SubTitle = styled.span`
  height: fit-content;
  font-size: 20px;
  font-family: var(--font-playfair);
  color: #758398;
  margin-bottom: 40px;
`;

const Divider = styled.div`
  border-bottom: 2px solid #758398;
  height: 2px;
  width: 60px;
  margin: 15px 0 30px 0;
`;

const Title = styled.h2`
  font-size: clamp(40px, 5.145vw, 64px);
  font-family: var(--font-playfair);
`;

const Contact = styled(Link)`
  font-size: 20px;
  font-family: var(--font-barlow);
  display: flex;
  cursor: pointer;
  gap: 30px;
  align-items: flex-end;
  text-transform: uppercase;
  position: relative;
  margin-top: 20px;
  z-index: 1200;
  text-decoration: none;
  align-items: center;
`;
