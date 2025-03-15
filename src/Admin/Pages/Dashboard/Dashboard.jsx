import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [questions, setQuestions] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    categories: {},
    difficulties: {},
  });

  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        calculateStats(data);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const calculateStats = (data) => {
    const total = data.length;

    // Kategoriyalar üzrə statistikalar
    const categories = data.reduce((acc, question) => {
      acc[question.category] = (acc[question.category] || 0) + 1;
      return acc;
    }, {});

    // Çətinlik səviyyəsi üzrə statistikalar
    const difficulties = data.reduce((acc, question) => {
      acc[question.difficulty] = (acc[question.difficulty] || 0) + 1;
      return acc;
    }, {});

    setStats({ total, categories, difficulties });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Questions</h3>
          <p>{stats.total}</p>
        </div>
        <div className="stat-card">
          <h3>Categories</h3>
          <ul>
            {Object.entries(stats.categories).map(([category, count]) => (
              <li key={category}>
                {category}: {count}
              </li>
            ))}
          </ul>
        </div>
        <div className="stat-card">
          <h3>Difficulty Levels</h3>
          <ul>
            {Object.entries(stats.difficulties).map(([difficulty, count]) => (
              <li key={difficulty}>
                {difficulty}: {count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
