'use client'

import React from "react";
import styled from "styled-components";
import Image from "next/image";

import ResumePNG from "/public/Resume.png";
import mediaQueries from "@components/Breakpoints";

export default function Resume() {
  return (
    <ResumeWrap>
      <Image src={ResumePNG} alt="resume" />
    </ResumeWrap>
  );
}

const ResumeWrap = styled.div`
  ${mediaQueries("max", "md")} {
    padding-top: 40px;
  }
`;
