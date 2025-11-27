import React from "react";

export default function ProgressDots({ length, current, onDotClick, answers }) {
  return (
    <div className="flex justify-center gap-4">
      {Array.from({ length }).map((_, i) => {
        const answered = answers[i] !== null;
        const active = current === i;

        return (
          <button
            key={i}
            onClick={() => onDotClick(i)}
            className={`w-28 h-3 rounded-xl ${
              active
                ? "bg-[#112D4E]"
                : answered
                ? "bg-[#3F72AF]"
                : "bg-[#cfdff0]"
            }`}
          />
        );
      })}
    </div>
  );
}
