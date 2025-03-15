import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);
  const showAnswer = (id) => {
    setVisibleAnswer(id);
    setTimeout(() => {
      setVisibleAnswer(null);
    }, 4000);
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => navigate("/questions")}>Questions</button>
      <button onClick={() => navigate("/favorites")}>Favorites</button>

      <h2>Questions List</h2>
      <div className="questions-container">
        {questions.map((question) => (
          <div key={question.id} className="question-card">
            <h3>{question.title}</h3>
            <p>Difficulty: {question.difficulty}</p>
            <p>Category: {question.category}</p>
            {visibleAnswer === question.id && (
              <p className="answer">{question.answers}</p>
            )}

            <button
              onClick={() => {
                showAnswer(question.id);
              }}
            >
              {" "}
              Show
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
