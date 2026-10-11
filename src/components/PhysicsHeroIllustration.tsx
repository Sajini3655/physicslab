'use client';

import React from 'react';

interface PhysicsHeroIllustrationProps {
  className?: string;
}

export const PhysicsHeroIllustration: React.FC<PhysicsHeroIllustrationProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`relative w-full max-w-[500px] aspect-[16/11] flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      {/* Soft atmospheric gradient glow behind the composition */}
      <div className="absolute inset-0 bg-radial from-[#B7E7EC]/40 via-[#79B9E7]/15 to-transparent rounded-3xl filter blur-xl transform -translate-y-2 pointer-events-none" />

      <svg
        viewBox="0 0 520 360"
        className="w-full h-full relative z-10 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle grid pattern for scientific floor plane */}
          <pattern id="isometricGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#DFE8EF" strokeWidth="0.8" opacity="0.6" />
          </pattern>

          {/* Gradients for isometric platforms */}
          <linearGradient id="mainPlatformTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F0F7FC" />
          </linearGradient>

          <linearGradient id="mainPlatformLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D5E8F5" />
            <stop offset="100%" stopColor="#BCE0F2" />
          </linearGradient>

          <linearGradient id="mainPlatformRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9BCDEE" />
            <stop offset="100%" stopColor="#79B9E7" />
          </linearGradient>

          {/* Rail Gradient */}
          <linearGradient id="railGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B7E7EC" />
            <stop offset="50%" stopColor="#79B9E7" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>

          {/* Object block gradients */}
          <linearGradient id="objectTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
          <linearGradient id="objectSide" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#115E59" />
          </linearGradient>

          {/* Cyan Glow for velocity vector */}
          <filter id="vectorGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Drop shadow for floating elements */}
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#14243A" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* --- Background Floating Particles & Vectors --- */}
        <g opacity="0.6">
          {/* Scientific motion measurement markers */}
          <circle cx="80" cy="90" r="3" fill="#79B9E7" />
          <circle cx="95" cy="80" r="1.5" fill="#B7E7EC" />
          <circle cx="440" cy="110" r="2.5" fill="#79B9E7" />
          <circle cx="455" cy="95" r="4" fill="#B7E7EC" opacity="0.8" />
          
          {/* Subtle axis guides */}
          <path d="M 60 160 L 100 140" stroke="#79B9E7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
          <path d="M 430 230 L 470 210" stroke="#79B9E7" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
        </g>

        {/* --- Lower Floating Accent Platform (Left) --- */}
        <g filter="url(#softShadow)">
          {/* Top Face */}
          <path d="M 90 220 L 150 190 L 190 210 L 130 240 Z" fill="#E8F4FB" stroke="#DFE8EF" strokeWidth="1" />
          {/* Left Face */}
          <path d="M 90 220 L 130 240 L 130 252 L 90 232 Z" fill="#D2E8F7" />
          {/* Right Face */}
          <path d="M 130 240 L 190 210 L 190 222 L 130 252 Z" fill="#BCE0F2" />
        </g>

        {/* --- Lower Floating Accent Platform (Right High) --- */}
        <g filter="url(#softShadow)">
          {/* Top Face */}
          <path d="M 360 140 L 420 110 L 460 130 L 400 160 Z" fill="#EBF7F8" stroke="#DFE8EF" strokeWidth="1" />
          {/* Left Face */}
          <path d="M 360 140 L 400 160 L 400 170 L 360 150 Z" fill="#C9ECF0" />
          {/* Right Face */}
          <path d="M 400 160 L 460 130 L 460 140 L 400 170 Z" fill="#A5E0E7" />
          {/* Small pulse beacon on right pedestal */}
          <ellipse cx="410" cy="135" rx="10" ry="5" fill="#B7E7EC" opacity="0.6" />
          <circle cx="410" cy="132" r="3" fill="#0F766E" />
        </g>

        {/* --- MAIN CENTRAL ISOMETRIC STAGE --- */}
        <g filter="url(#softShadow)">
          {/* Base Platform Shadow */}
          <ellipse cx="260" cy="275" rx="180" ry="35" fill="#14243A" opacity="0.06" />

          {/* Left Side Face */}
          <path
            d="M 100 200 L 260 280 L 260 304 L 100 224 Z"
            fill="url(#mainPlatformLeft)"
            stroke="#DFE8EF"
            strokeWidth="0.5"
          />

          {/* Right Side Face */}
          <path
            d="M 260 280 L 420 200 L 420 224 L 260 304 Z"
            fill="url(#mainPlatformRight)"
            stroke="#DFE8EF"
            strokeWidth="0.5"
          />

          {/* Top Face (Spacious Isometric Plane) */}
          <path
            d="M 260 120 L 420 200 L 260 280 L 100 200 Z"
            fill="url(#mainPlatformTop)"
            stroke="#DFE8EF"
            strokeWidth="1.5"
          />

          {/* Precision Measurement Ticks on Platform Surface */}
          <path
            d="M 140 200 L 150 195 M 180 220 L 190 215 M 220 240 L 230 235 M 260 260 L 270 255 M 300 240 L 310 235 M 340 220 L 350 215 M 380 200 L 390 195"
            stroke="#BCE0F2"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* --- THE STRAIGHT MOTION RAIL (A/L Physics Vector Axis) --- */}
        <g>
          {/* Elevated Track Bed (White / Pale-Blue Raised Rail) */}
          <path
            d="M 150 185 L 370 225 L 370 231 L 150 191 Z"
            fill="#79B9E7"
            opacity="0.4"
          />
          <path
            d="M 150 185 L 370 225"
            stroke="url(#railGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Rail Center Guide Dash */}
          <path
            d="M 156 186 L 364 224"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="6 5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Origin Marker Post (Left) */}
          <g transform="translate(150, 185)">
            <ellipse cx="0" cy="0" rx="8" ry="4" fill="#0F766E" opacity="0.3" />
            <line x1="0" y1="0" x2="0" y2="-18" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" />
            <circle cx="0" cy="-18" r="4" fill="#0F766E" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="-8" y="-23" fill="#0F766E" fontSize="9" fontWeight="bold" fontFamily="monospace">x₀</text>
          </g>

          {/* Destination Axis Arrow Marker (Right) */}
          <g transform="translate(370, 225)">
            <ellipse cx="0" cy="0" rx="8" ry="4" fill="#79B9E7" opacity="0.3" />
            <line x1="0" y1="0" x2="0" y2="-18" stroke="#79B9E7" strokeWidth="2" strokeLinecap="round" />
            <polygon points="-4,-14 4,-14 0,-22" fill="#0F766E" />
            <text x="6" y="-14" fill="#14243A" fontSize="9" fontWeight="bold" fontFamily="monospace">+x</text>
          </g>
        </g>

        {/* --- MOTION OBJECT (Clean Dimensional Capsule/Block in Motion) --- */}
        <g transform="translate(250, 203)" filter="url(#softShadow)">
          {/* Dynamic Shadow underneath moving object */}
          <ellipse cx="0" cy="6" rx="18" ry="6" fill="#14243A" opacity="0.15" />

          {/* Object Isometric Cube / Cart */}
          {/* Left Face */}
          <path d="M -14 -6 L 0 2 L 0 16 L -14 8 Z" fill="url(#objectSide)" />
          {/* Right Face */}
          <path d="M 0 2 L 14 -6 L 14 8 L 0 16 Z" fill="#0D655E" />
          {/* Top Face */}
          <path d="M 0 -14 L 14 -6 L 0 2 L -14 -6 Z" fill="url(#objectTop)" stroke="#99F6E4" strokeWidth="0.8" />

          {/* Wheel Accents */}
          <ellipse cx="-7" cy="11" rx="3" ry="1.5" fill="#14243A" />
          <ellipse cx="7" cy="11" rx="3" ry="1.5" fill="#14243A" />

          {/* Velocity Vector Arrow u (Floating prominently forward above the object) */}
          <g transform="translate(4, -18)">
            {/* Soft Cyan Vector Trail */}
            <path
              d="M -12 -2 L 22 4"
              stroke="#0F766E"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#vectorGlow)"
            />
            {/* Arrowhead */}
            <polygon points="26,5 18,0 20,8" fill="#0F766E" />
            {/* Vector Label */}
            <rect x="0" y="-17" width="28" height="13" rx="4" fill="#FFFFFF" stroke="#DFE8EF" strokeWidth="0.8" />
            <text x="14" y="-8" fill="#0F766E" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              u →
            </text>
          </g>
        </g>

        {/* --- EQUATION MOTIF BADGE (s = u × t) --- */}
        <g transform="translate(205, 75)" filter="url(#softShadow)">
          <rect
            x="0"
            y="0"
            width="110"
            height="32"
            rx="16"
            fill="#FFFFFF"
            stroke="#DFE8EF"
            strokeWidth="1"
          />
          <circle cx="16" cy="16" r="6" fill="#F0FDFA" stroke="#99F6E4" strokeWidth="1" />
          <circle cx="16" cy="16" r="2.5" fill="#0F766E" />
          <text
            x="60"
            y="20"
            fill="#14243A"
            fontSize="12"
            fontWeight="bold"
            letterSpacing="0.05em"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
          >
            s = u × t
          </text>
        </g>

        {/* --- Floating Decorative Compass / Coordinate Indicator --- */}
        <g transform="translate(430, 240)" opacity="0.85">
          <circle cx="15" cy="15" r="16" fill="#FFFFFF" stroke="#DFE8EF" strokeWidth="1" />
          <line x1="15" y1="5" x2="15" y2="25" stroke="#79B9E7" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="15" x2="25" y2="15" stroke="#DFE8EF" strokeWidth="1.5" strokeLinecap="round" />
          <polygon points="15,4 12,10 18,10" fill="#0F766E" />
          <text x="15" y="38" fill="#64748B" fontSize="8" fontWeight="600" textAnchor="middle">
            AXIS
          </text>
        </g>
      </svg>
    </div>
  );
};
