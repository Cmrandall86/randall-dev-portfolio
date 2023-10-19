'use client'

import mediaQueries from "@components/Breakpoints";
import styled from "styled-components";
import StyledText from "@components/Text";
// import { Text } from "@nextui-org/react";



export default function HomePage() {
  return (
        <HomePageWrapper>
        <BackgroundGradient/>
            <CardWrapper>
            <Card>
                {/* <ImageWrapper>
                <Image src={"/pexels.jpg"} layout={"fill"} alt={"pic"} />
                <CardOverlayText>Chris Randall</CardOverlayText>
                </ImageWrapper> */}
            </Card>
            </CardWrapper>
            <HR />
            <TextWrap>
            {/* <Text as="p" weight="hairline" css={{ textAlign: "center", lineHeight: "1.2" }}>
                Hey! Im Chris, a front-end web developer based out of Albuquerque, New Mexico. I work mostly with React and
                NextJS using styled-components to create responsive and performant web applications. I'm passionate about
                growing as a software developer and am always looking for opportunities to learn and create work I can be
                proud of.
            </Text>
            </TextWrap>
            <TextWrap>
            <Text as="p" css={{ textAlign: "center", lineHeight: "1.2" }}>
                While my main skillset revolves around front-end web technologies (HTML/CSS/JS) I have some experience
                building back-ends using node.js/express. I have also built school projects using Wordpress, C#/.NET/Blazor,
                Python SQL, and PHP.
            </Text> */}
            </TextWrap>
            <HR />

        </HomePageWrapper>
  );
}


const HomePageWrapper = styled.main.attrs({ className: "flex flex-column items-center justify-center" })`
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const TextWrap = styled.div`
  margin: 30px 0;
`;

const BackgroundGradient = styled.div.attrs({ className: "absolute" })`
  background: linear-gradient(180deg, #F8F9FAff, #CFEEF4ff, #A5E2EFff, #7CD7E9ff, #53CBE3ff, #29C0DEff, #00B4D8ff);
  height: 80vh;
  width: 45vw;
  right: 0;
  top: 0;
  border-radius: 0 0 0 100%;
  z-index: -1;
  opacity: .3;

  
`;

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
