import React from 'react';
import { Link } from 'react-router-dom';

/**
 * HotelPro Brand Logo Component
 * Modern luxury hospitality crest emblem with royal blue & champagne gold accents.
 */
export default function Logo({ size = 'md', to = '/', showText = true, className = '' }) {
  const sizeMap = {
    sm: { icon: 28, text: 'var(--text-base)', sub: '9px', gap: 'var(--space-2)' },
    md: { icon: 38, text: 'var(--text-xl)', sub: '10px', gap: 'var(--space-3)' },
    lg: { icon: 54, text: 'var(--text-3xl)', sub: '12px', gap: 'var(--space-3)' },
  };

  const current = sizeMap[size] || sizeMap.md;

  const content = (
    <div
      className={`hotelpro-logo-wrap ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: current.gap,
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      {/* Dynamic Animated Emblem */}
      <div
        className="hotelpro-logo-emblem"
        style={{
          width: current.icon,
          height: current.icon,
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 2px 6px rgba(99, 102, 241, 0.3))' }}
        >
          <defs>
            <rect id="hpShield" x="2" y="2" width="44" height="44" rx="12" />
          </defs>

          {/* Solid Shield Base */}
          <rect
            x="2"
            y="2"
            width="44"
            height="44"
            rx="12"
            fill="#7C3AED"
            stroke="#F59E0B"
            strokeWidth="1.5"
          />

          {/* Outer Geometric Frame */}
          <rect
            x="6"
            y="6"
            width="36"
            height="36"
            rx="8"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
            fill="none"
          />

          {/* Pillars */}
          <path
            d="M13 35V20M24 35V16M35 35V20"
            stroke="#F59E0B"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Roof */}
          <path
            d="M10 21L24 11L38 21"
            stroke="#F59E0B"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Luxury Arch Pediment */}
          <path
            d="M13 25C13 22 17 20 24 20C31 20 35 22 35 25"
            stroke="#FFFFFF"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Ground Base */}
          <path
            d="M11 35H37"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Top Diamond */}
          <polygon
            points="24,6 26.5,10 24,12 21.5,10"
            fill="#F59E0B"
          />
        </svg>
      </div>

      {/* Brand Wordmark & Subtitle */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span
            style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: current.text,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              display: 'inline-flex',
              alignItems: 'baseline',
            }}
          >
            Hotel<span style={{ color: 'var(--color-secondary)' }}>Pro</span>
          </span>
          <span
            style={{
              fontSize: current.sub,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
              marginTop: 2,
            }}
          >
            Luxury Hospitality
          </span>
        </div>
      )}
    </div>
  );

  if (to) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }} aria-label="HotelPro Home">
        {content}
      </Link>
    );
  }

  return content;
}
