import React from "react";

export default function Logo() {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      userSelect: 'none',
    }}>
      <svg
        viewBox="0 0 42 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* < bracket */}
        <path
          d="M10 6L3 15L10 24"
          stroke="#4F46E5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* / slash */}
        <line
          x1="26" y1="6"
          x2="16" y2="24"
          stroke="#A5B4FC"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* > bracket */}
        <path
          d="M32 6L39 15L32 24"
          stroke="#4F46E5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          fontFamily: 'var(--font-inter)',
          color: '#0F172A',
          fontSize: '15px',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
        }}>
          Chris Randall
        </span>
        <span style={{ color: '#CBD5E1', fontSize: '14px', lineHeight: 1 }}>|</span>
        <span style={{
          fontFamily: 'var(--font-barlow)',
          color: '#64748B',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          Software Developer
        </span>
      </div>
    </div>
  );
}

