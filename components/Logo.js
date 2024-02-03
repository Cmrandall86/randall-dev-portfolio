import React from "react";

export default function Logo({ width = "100%", height = "100%", href = "./", ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_0_2" transform="scale(0.0025 0.015873)" />
        </pattern>
        <image
          id="image0_0_2"
          width={width}
          height={height}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
