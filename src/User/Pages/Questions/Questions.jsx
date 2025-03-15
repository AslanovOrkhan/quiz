import React, { useEffect, useState } from "react";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [showAnswer, setShowAnswer] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const showAnswers = (id) => {
    setShowAnswer(id);
    setTimeout(() => {
      setShowAnswer(null);
    }, 4000);
  };
  return (
    <>
      <h1>Questions List</h1>
      <div className="questions-container">
        {questions.map((question) => (
          <div key={question.id}>
            <h2>Title:{question.title}</h2>
            <span>Diffucult:{question.difficulty}</span>
            <p>Categories:{question.category}</p>
            {showAnswer === question.id && <p>Answers: {question.answers}</p>}

            <button
              onClick={() => {
                showAnswers(question.id);
              }}
            >
              Show Answer
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
