"use client";

import React from "react";
import ResponsiveImage from "@components/Image";
import ResumePNG from "/public/Resume.png";

export default function Resume() {
  return (
    <div style={{ width: '90vw', maxWidth: '1024px' }}>
      <ResponsiveImage src={ResumePNG} alt="resume" customAspectRatio="150%" priority />
    </div>
  );
}
