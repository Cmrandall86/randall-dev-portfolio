"use client";

import React from "react";
import styled from "styled-components";
import ResponsiveImage from "@components/Image";

import ResumePNG from "/public/Resume.png";

export default function Resume() {
  return (
    <ResumeWrap>
      <ResponsiveImage src={ResumePNG} alt="resume" photoAspectRatio="portrait" priority />
    </ResumeWrap>
  );
}

const ResumeWrap = styled.div`
  padding-top: 100px;
`;
