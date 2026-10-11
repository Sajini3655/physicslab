'use client';

import React from 'react';
import {
  ConfirmedUniformMotionScenario,
  getAnswerVisibilityPolicy,
} from '@/shared/scenarios/uniform-motion';
import { solveUniformMotion } from '../physics/engine';

interface SimulationTrackProps {
  scenario: ConfirmedUniformMotionScenario;
  currentDisplacementMetres: number;
  locale?: string;
  labels: {
    origin: string;
    startPoint: string;
    endPoint: string;
    object: string;
  };
}

export const SimulationTrack: React.FC<SimulationTrackProps> = ({
  scenario,
  currentDisplacementMetres,
  labels,
}) => {
  const candidate = scenario.scenario;
  const physical = solveUniformMotion(candidate);
  const targetDisplacement = physical.displacement;
  const velocity = physical.velocity;
  const visibilityPolicy = getAnswerVisibilityPolicy(candidate.target);
  const objectName = candidate.object;
  const axis = candidate.axis;

  // Viewbox dimensions
  const svgWidth = 800;
  const svgHeight = 230;
  const trackY = 145;
  const paddingX = 90;
  const availableTrackWidth = svgWidth - paddingX * 2;

  // Determine physical axis mapping to screen coordinates
  // Directions like "west", "left", "-x", "backward", "south" map positive to screen-left.
  // Standard directions ("east", "right", "+x", "forward", "north", etc.) map positive to screen-right.
  const normalizedDir = axis.direction.toLowerCase();
  const isScreenPositiveRight = !(
    normalizedDir.includes('left') ||
    normalizedDir.includes('west') ||
    normalizedDir.includes('-x') ||
    normalizedDir.includes('backward') ||
    normalizedDir.includes('south')
  );

  // Compute coordinate domain
  const minPhysical = Math.min(0, targetDisplacement);
  const maxPhysical = Math.max(0, targetDisplacement);
  const physicalSpan = maxPhysical - minPhysical;

  // Safe span to prevent division by zero for stationary / 0 displacement
  const effectiveSpan = physicalSpan > 0.001 ? physicalSpan : 10;
  const bufferRatio = 0.15; // 15% padding on each side of physical track
  const domainMin = minPhysical - effectiveSpan * bufferRatio;
  const domainMax = maxPhysical + effectiveSpan * bufferRatio;
  const domainSpan = domainMax - domainMin;

  // Map physical meters to SVG X pixel coordinates without applying direction signs twice
  const physicalToPixelX = (xMeters: number): number => {
    const fraction = (xMeters - domainMin) / domainSpan;
    if (isScreenPositiveRight) {
      return paddingX + fraction * availableTrackWidth;
    } else {
      return svgWidth - paddingX - fraction * availableTrackWidth;
    }
  };

  const originPixelX = physicalToPixelX(0);
  const currentPixelX = physicalToPixelX(currentDisplacementMetres);
  const targetPixelX = physicalToPixelX(targetDisplacement);

  // Formatting endpoint label without revealing hidden answer if target === 's'
  let endpointDisplayLabel = `${labels.endPoint}: ?`;
  if (!visibilityPolicy.hideDisplacementEndpoints && candidate.s.type === 'given') {
    endpointDisplayLabel = `${labels.endPoint} (${candidate.s.value > 0 ? '+' : ''}${candidate.s.value} ${candidate.s.unit})`;
  }

  // Velocity vector arrow label on object
  let velocityLabel = 'u = ?';
  if (!visibilityPolicy.hideVelocityBadge && candidate.u.type === 'given') {
    velocityLabel = `${candidate.u.value > 0 ? '+' : ''}${candidate.u.value} ${candidate.u.unit}`;
  } else {
    velocityLabel = 'u = ?';
  }

  const isMoving = Math.abs(velocity) > 1e-6;
  // Screen direction of motion:
  // If positive is right, velocity > 0 moves right, velocity < 0 moves left.
  // If positive is left, velocity > 0 moves left, velocity < 0 moves right.
  const isScreenMovingRight = isScreenPositiveRight ? velocity > 0 : velocity < 0;

  return (
    <div className="w-full bg-slate-950 rounded-xl p-3 sm:p-4 border border-slate-800 shadow-md overflow-hidden relative">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full h-auto select-none block"
        aria-label={`Simulation canvas for ${objectName}`}
        role="img"
      >
        <defs>
          {/* Arrowhead marker for axis and vectors */}
          <marker
            id="axis-arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8" />
          </marker>
          <marker
            id="velocity-arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
          </marker>
          {/* Gradients */}
          <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#334155" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e293b" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="trajectoryGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
          </linearGradient>
          {/* Pattern for background grid */}
          <pattern id="canvasGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.7" opacity="0.3" />
          </pattern>
        </defs>

        {/* Subtle engineering background grid */}
        <rect width={svgWidth} height={svgHeight} fill="url(#canvasGrid)" />

        {/* Top Axis Coordinate Line */}
        <g className="axis-header" opacity="0.9">
          <line
            x1={isScreenPositiveRight ? paddingX : svgWidth - paddingX}
            y1={32}
            x2={isScreenPositiveRight ? svgWidth - paddingX : paddingX}
            y2={32}
            stroke="#64748b"
            strokeWidth="1.75"
            markerEnd="url(#axis-arrow)"
          />
          <text
            x={isScreenPositiveRight ? svgWidth - paddingX + 12 : paddingX - 12}
            y={36}
            fill="#94a3b8"
            fontSize="12"
            fontWeight="bold"
            textAnchor={isScreenPositiveRight ? 'start' : 'end'}
          >
            {`+${axis.direction}`}
          </text>
          <text
            x={originPixelX}
            y={20}
            fill="#94a3b8"
            fontSize="11"
            fontWeight="500"
            textAnchor="middle"
          >
            {`${labels.origin} (0)`}
          </text>
        </g>

        {/* Main Track Highway */}
        <rect
          x={paddingX - 25}
          y={trackY - 14}
          width={availableTrackWidth + 50}
          height="28"
          rx="6"
          fill="url(#trackGrad)"
        />
        {/* Track center dash line */}
        <line
          x1={paddingX - 15}
          y1={trackY}
          x2={svgWidth - paddingX + 15}
          y2={trackY}
          stroke="#475569"
          strokeWidth="2"
          strokeDasharray="8 6"
        />

        {/* Trajectory Covered Path */}
        <line
          x1={originPixelX}
          y1={trackY}
          x2={currentPixelX}
          y2={trackY}
          stroke="url(#trajectoryGlow)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Origin (Start) Marker */}
        <g transform={`translate(${originPixelX}, ${trackY})`}>
          <circle r="6" fill="#10b981" />
          <circle r="10" fill="#10b981" opacity="0.2" />
          <line x1="0" y1="-26" x2="0" y2="26" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
          <text y="42" fill="#10b981" fontSize="11" fontWeight="600" textAnchor="middle">
            {labels.startPoint} (0)
          </text>
        </g>

        {/* Destination (Target) Marker */}
        {Math.abs(targetDisplacement) > 0.001 && (
          <g transform={`translate(${targetPixelX}, ${trackY})`}>
            <circle r="6" fill="#f59e0b" />
            <circle r="10" fill="#f59e0b" opacity="0.2" />
            <line x1="0" y1="-26" x2="0" y2="26" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
            <text y="42" fill="#f59e0b" fontSize="11" fontWeight="600" textAnchor="middle">
              {endpointDisplayLabel}
            </text>
          </g>
        )}

        {/* Animated Moving Object */}
        <g transform={`translate(${currentPixelX}, ${trackY - 26})`}>
          {/* Object vehicle / sphere body */}
          <rect
            x="-26"
            y="-14"
            width="52"
            height="26"
            rx="6"
            fill="#0284c7"
            stroke="#38bdf8"
            strokeWidth="2"
            className="filter drop-shadow-md"
          />
          {/* Windshield / accent */}
          <rect x="-14" y="-10" width="28" height="8" rx="2" fill="#bae6fd" opacity="0.4" />
          {/* Object wheels */}
          <circle cx="-16" cy="12" r="5" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
          <circle cx="16" cy="12" r="5" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />

          {/* Object Name Label */}
          <text
            x="0"
            y="4"
            fill="#ffffff"
            fontSize="10"
            fontWeight="bold"
            textAnchor="middle"
          >
            {objectName.slice(0, 9)}
          </text>

          {/* Velocity Vector Arrow */}
          {isMoving && (
            <g transform="translate(0, -24)">
              <line
                x1={isScreenMovingRight ? -16 : 16}
                y1="0"
                x2={isScreenMovingRight ? 26 : -26}
                y2="0"
                stroke="#38bdf8"
                strokeWidth="2.5"
                markerEnd="url(#velocity-arrow)"
              />
              <text
                x="0"
                y="-6"
                fill="#7dd3fc"
                fontSize="10"
                fontWeight="bold"
                textAnchor="middle"
              >
                {velocityLabel}
              </text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
