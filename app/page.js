"use client";

import mediaQueries from "@components/Breakpoints";
import styled from "styled-components";
import Grad from "../public/gradient.png";
import ProfilePic from "../public/fam.jpg";
import ResponsiveImage from "@components/Image";

export default function HomePage() {
  return (
    <HomePageWrapper>
      <BackgroundGradient />
      <Content>
        <LS>
          <SubTitle>
            HELLO, MY NAME IS
          </SubTitle>
          <Divider/>

          <Title>
            Chris Randall
          </Title>
        </LS>
        <RS>
          <ImageWrap>
            <ResponsiveImage src={ProfilePic} alt="profile picture" photoAspectRatio="square" />
          </ImageWrap>
        </RS>
      </Content>
    </HomePageWrapper>
  );
}

const LS = styled.div`
  width: 50%;
  display: flex;
  height: 100%;
  flex-direction: column;

  ${mediaQueries("max", "md")} {
    width: 100%;
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
  font-family: ${({ theme }) => theme.fonts.primary};
  height: 100vh;
  display: flex;
  justify-content: center;

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

  ${mediaQueries("range", null, "md", "xl")} {
    background-size: 450px auto;
  }

  ${mediaQueries("max", "md")} {
    background-size: 360px auto;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  border-radius: 100%;
  position: relative;
  padding-top: 150px;
  ${mediaQueries("range", null, "md", "xl")} {
    width: 80%;
    padding-top: 0;
  }

  ${mediaQueries("max", "md")} {
    width: 90%;
  }
`;


const SubTitle = styled.span`
  height: fit-content;
`

const Divider = styled.div`
  border-bottom: 2px solid grey;
  height: 2px;
  width: 60px;
  margin: 15px 0 30px 0;
`

const Title = styled.h2`
  font-size: 44px;
`