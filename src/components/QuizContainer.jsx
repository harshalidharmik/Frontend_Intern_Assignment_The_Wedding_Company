import React, { useState, useEffect } from "react";
import { questions as qlist } from "../data/questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";
import Paw from "./Paw";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizContainer() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(() => qlist.map(() => null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (isSubmitted) return;
      if (e.key === "ArrowRight") setCurrent((c) => Math.min(qlist.length - 1, c + 1));
      else if (e.key === "ArrowLeft") setCurrent((c) => Math.max(0, c - 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isSubmitted]);

  const handleSelect = (qIndex, choiceIndex) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[qIndex] = choiceIndex;
      return copy;
    });
  };

  const goNext = () => setCurrent((c) => Math.min(qlist.length - 1, c + 1));
  const goPrev = () => setCurrent((c) => Math.max(0, c - 1));
  const submit = () => setIsSubmitted(true);
  const restart = () => {
    setAnswers(qlist.map(() => null));
    setCurrent(0);
    setIsSubmitted(false);
  };

  const score = answers.reduce((acc, ans, idx) => (ans === qlist[idx].correctIndex ? acc + 1 : acc), 0);

  if (isSubmitted) {
    const percent = Math.round((score / qlist.length) * 100);
    return (
      <div className="result-screen-root">
        <Result scorePercent={percent} onRestart={restart} />
      </div>
    );
  }

  return (
    <div className="outer-frame">
      <div className="quiz-card" style={{ position: "relative" }}>
        {/* Paw only on first page */}
        {current === 0 && <Paw />}

        <header className="text-center mb-8">
          <h1 className="h1-playfair text-5xl">Test Your Knowledge</h1>
          <div style={{ marginTop: 12 }}>
            <span className="pill">Answer all questions to see your results</span>
          </div>
        </header>

        <div className="progress-row" aria-hidden>
          {qlist.map((_, i) => (
            <div key={i} className={`progress-pill ${i === current ? "active" : ""}`} />
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <QuestionCard
                question={qlist[current]}
                selected={answers[current]}
                onSelect={(choice) => handleSelect(current, choice)}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="controls-row" aria-hidden>
          <button onClick={goPrev} disabled={current === 0} className="arrow-btn" aria-label="Previous">←</button>

          {current < qlist.length - 1 ? (
            <button onClick={goNext} className="arrow-btn" aria-label="Next">→</button>
          ) : (
            <button onClick={submit} className="submit-btn" aria-label="Submit Quiz">Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}
