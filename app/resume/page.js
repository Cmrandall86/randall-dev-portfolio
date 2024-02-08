"use client";

import React from "react";
import ResponsiveImage from "@components/Image";
import ResumePNG from "/public/Resume.png";

export default function Resume() {
  return (
    <div style={{ paddingTop: "50px" }}>
      <ResponsiveImage src={ResumePNG} alt="resume" customAspectRatio="150%" priority />
    </div>
  );
}
