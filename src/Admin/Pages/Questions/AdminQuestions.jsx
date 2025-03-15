import React, { useEffect, useState } from "react";

const AdminQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/questions/${id}`, { method: "DELETE" })
      .then(() => {
        setQuestions(questions.filter((question) => question.id !== id));
      })
      .catch((error) => console.error("Error deleting question:", error));
  };

  return (
    <div>
      <h1>All Questions</h1>
      <table
        border="1"
        cellPadding="8"
        style={{ width: "100%", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {questions.length > 0 ? (
            questions.map((question) => (
              <tr key={question.id}>
                <td>{question.id}</td>
                <td>{question.title}</td>
                <td>{question.category}</td>
                <td>{question.difficulty}</td>
                <button
                  onClick={() => handleDelete(question.id)}
                  style={{ color: "red" }}
                >
                  Delete
                </button>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No questions found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminQuestions;
 
