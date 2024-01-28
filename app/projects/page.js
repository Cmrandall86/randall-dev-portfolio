"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Card } from "@mui/material";

export default function page() {
  return (
    <ProjectPageWrap>
      <NavHide/>
      <h2 style={{marginLeft: 20}}>Projects</h2>
      <ProjectCard>
        <CardTitle>NBA Scores App</CardTitle>
        <ToolsUsed>Tools used:</ToolsUsed>
        <ul>
          <li>React built with Vite</li>
          <li>Tailwind</li>
          <li>Material UI</li>
          <li>Balldontlie API (free basketball API)</li>
          <li>React Router</li>
          <br />
          <CardLink href={"https://crandall-nba-scores.netlify.app/"}>
            <li>Link to project: https://crandall-nba-scores.netlify.app/</li>
          </CardLink>
        </ul>
      </ProjectCard>
      <ProjectCard>
      <CardTitle>Country Data App</CardTitle>
        <ToolsUsed>Tools used:</ToolsUsed>
        <ul>
          <li>React built with Vite</li>
          <li>GraphQL</li>
          <li>Apollo Client</li>
          <li>Material UI</li>
          <li>Styled components</li>
          <br />
          <CardLink href={"https://graphql-countries.netlify.app/"}>
            <li>Link to project: https://graphql-countries.netlify.app/</li>
          </CardLink>
        </ul>
      </ProjectCard>
      <h2 style={{marginLeft: 20}}>Professional Work Examples</h2>
      <ProjectCard>
        <CardTitle>Oddly Reloved landing page and store pages</CardTitle>
        <ToolsUsed>Tools used:</ToolsUsed>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Styled components</li>
          <li>Carousel built with Swiper.js</li>
          <br />
          <CardLink href={"https://oddlyreloved.se/"}>
            <li>Link to store: https://oddlyreloved.se/</li>
          </CardLink>
        </ul>
      </ProjectCard>
      <ProjectCard>
        <CardTitle>Volant Collection landing page</CardTitle>
        <ToolsUsed>Tools used:</ToolsUsed>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Styled components</li>
          <br />
          <CardLink href={"https://volantcollection.com"}>
            <li>Link to store: https://volantcollection.com</li>
          </CardLink>
        </ul>
      </ProjectCard>
      <ProjectCard>
        <CardTitle>Ribbn.com onboarding form</CardTitle>
        <ToolsUsed>Tools used:</ToolsUsed>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Styled components</li>
          <br />
          <CardLink href={"https://myribbn.com/onboarding"}>
            <li>Link to store: https://myribbn.com/onboarding</li>
          </CardLink>
        </ul>
      </ProjectCard>
    </ProjectPageWrap>
  );
}

const ProjectCard = styled(Card)`
  padding: 20px;
  margin: 0 20px 30px 20px;

  ul {
    list-style: none;
    padding: 0 10px;
  }
`;

const CardTitle = styled.h3`

`;

const ToolsUsed = styled.h4``;

const ProjectPageWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  font-family: var(--font-poppins);
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const NavHide = styled.div`
  position: sticky;
  top:0;
  width: 100vw;
  background: white;
  height: 75px;

`