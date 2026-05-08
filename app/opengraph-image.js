import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Chris Randall – Software Developer | Frontend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0f1624 0%, #1a2540 60%, #1e3060 100%)",
          padding: "80px 96px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            background: "#2b4c8c",
          }}
        />

        {/* URL badge */}
        <div
          style={{
            fontSize: "18px",
            color: "#6b7280",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          chrisrandall.dev
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: "700",
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "20px",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          Chris Randall
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: "500",
            color: "#7da4d8",
            marginBottom: "40px",
            letterSpacing: "0.01em",
            display: "flex",
          }}
        >
          Software Developer&nbsp;&nbsp;·&nbsp;&nbsp;Frontend Engineer
        </div>

        {/* Divider */}
        <div
          style={{
            width: "64px",
            height: "3px",
            background: "#2b4c8c",
            marginBottom: "36px",
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "#9ca3af",
            lineHeight: 1.5,
            maxWidth: "760px",
            display: "flex",
          }}
        >
          JavaScript · React · Node.js · AWS · SQL · AI-Assisted Workflows
        </div>
      </div>
    ),
    { ...size }
  );
}
