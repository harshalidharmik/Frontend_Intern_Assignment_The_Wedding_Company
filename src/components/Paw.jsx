import React from "react";

export default function Paw() {
  return (
    <div className="paw-wrap" aria-hidden>
      {/* speech sits to the left and slightly higher than the paw */}
      <div className="speech" role="note">Best of luck!</div>

      {/* paw-card holds an inner element (paw-inner) that animates pads separately */}
      <div className="paw-card" role="presentation" aria-hidden>
        <div className="paw-inner" aria-hidden>
          <svg viewBox="0 0 120 120" width="120" height="120" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <g transform="translate(6,6)">
              {/* big pad */}
              <ellipse cx="60" cy="72" rx="26" ry="18" fill="#fff1f6" stroke="#f6dfe6"/>
              {/* three toes */}
              <ellipse cx="42" cy="44" rx="12" ry="16" fill="#ffd9e6" stroke="#ffd9e6"/>
              <ellipse cx="60" cy="32" rx="12" ry="16" fill="#ffd9e6" stroke="#ffd9e6"/>
              <ellipse cx="78" cy="44" rx="12" ry="16" fill="#ffd9e6" stroke="#ffd9e6"/>
              {/* subtle paw contour */}
              <path d="M20 86 q20 -48 80 -10" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="2" />
            </g>
          </svg>
        </div>

        {/* shadow element under paw that scales with animation */}
        <div className="paw-shadow" aria-hidden />
      </div>
    </div>
  );
}
