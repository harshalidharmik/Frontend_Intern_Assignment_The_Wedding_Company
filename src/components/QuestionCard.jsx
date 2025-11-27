import React from "react";

export default function QuestionCard({ question, selected, onSelect }) {
  return (
    <section aria-labelledby={`q-${question.id}`}>
      <h2 id={`q-${question.id}`} className="question-text">
        {question.text}
      </h2>

      <div className="choices-wrap" role="list">
        {question.choices.map((choice, i) => {
          const isSelected = selected === i;
          return (
            <button
              key={i}
              role="listitem"
              className={`choice ${isSelected ? "selected" : ""}`}
              onClick={() => onSelect(i)}
              aria-pressed={isSelected}
            >
              {choice}
            </button>
          );
        })}
      </div>
    </section>
  );
}
