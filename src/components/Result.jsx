import React, { useEffect, useRef, useState } from "react";

export default function Result({ scorePercent, onRestart }) {
  const [display, setDisplay] = useState(0);
  const [finished, setFinished] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();
    setFinished(false);

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      const value = Math.round(eased * scorePercent);
      setDisplay(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(Math.round(scorePercent));
        setFinished(true);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scorePercent]);

  // inline styles (priority over external CSS)
  const containerStyle = {
    minHeight: "calc(100vh - 160px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
  };

  const innerStyle = {
    width: "480px",
    maxWidth: "92%",
    textAlign: "center",
    margin: "0 auto",
    padding: "32px 12px",
    background: "transparent",
  };

  const pillStyle = {
    display: "inline-block",
    background: "#ffffff",
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid rgba(17,45,78,0.04)",
    color: "#112D4E",
    fontSize: 13,
    marginBottom: 18,
    boxShadow: "0 8px 20px rgba(63,114,175,0.03)",
  };

  const headingStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 40,
    color: "#112D4E",
    margin: "10px 0 8px 0",
    fontWeight: 700,
    letterSpacing: "-0.4px",
  };

  const numberWrapStyle = {
    position: "relative",
    display: "inline-block",
    marginTop: 8,
    padding: "8px 22px 0 22px",
    transform: `scale(${finished ? 1.02 : 0.985})`,
    transition: "transform 300ms cubic-bezier(.2,.9,.2,1)",
  };

  const numberStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: 112,
    lineHeight: 0.85,
    color: "#112D4E",
    fontWeight: 400,
    display: "inline-block",
    verticalAlign: "top",
  };

  const percentStyle = {
    position: "absolute",
    top: 6,
    right: -10,
    fontFamily: "'Playfair Display', serif",
    fontSize: 26,
    color: "#112D4E",
    lineHeight: 1,
    transform: "translateY(-6px)",
  };

  const buttonStyle = {
    background: "linear-gradient(180deg,#dff3ff,#cfe8ff)",
    color: "#112D4E",
    padding: "8px 18px",
    borderRadius: 10,
    border: "1px solid rgba(17,45,78,0.06)",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 26px rgba(63,114,175,0.04)",
    transition: "transform .18s ease, box-shadow .18s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={innerStyle}>
        <div style={pillStyle} aria-hidden>
          Keep Learning!
        </div>

        <h2 style={headingStyle}>Your Final score is</h2>

        <div
          style={numberWrapStyle}
          aria-live="polite"
          aria-atomic="true"
        >
          <span style={numberStyle}>{display}</span>
          <span style={percentStyle}>%</span>
        </div>

        <div style={{ marginTop: 30 }}>
          <button
            onClick={onRestart}
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            Start Again
          </button>
        </div>
      </div>
    </div>
  );
}
