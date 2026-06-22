import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../services/api";
import { ArrowLeft } from "react-bootstrap-icons";

function TeacherViewQuiz() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const res = await API.get(`/quizzes/${id}`);
      setQuiz(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!quiz) {
    return (
      <div className="container mt-5">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "#eef2f7",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        <button
          className="btn btn-light rounded-pill mb-4"
          onClick={() => navigate("/teacher-quizzes")}
        >
          <ArrowLeft className="me-2" />
          Back
        </button>

        <div className="card border-0 shadow rounded-5 p-4 mb-4">

          <h1 className="fw-bold">
            {quiz.title}
          </h1>

          <h5 className="text-muted">
            Subject: {quiz.subject}
          </h5>

          <h5 className="text-muted">
            Grade: {quiz.grade}
          </h5>

          <h5 className="text-muted">
            Duration: {quiz.duration} Minutes
          </h5>

        </div>

        {quiz.questions.map((question, index) => (
          <div
            key={index}
            className="card border-0 shadow rounded-5 p-4 mb-4"
          >
            <h4 className="fw-bold mb-3">
              Question {index + 1}
            </h4>

            <h5 className="mb-4">
              {question.question}
            </h5>

            <div className="mb-2">
              A. {question.optionA}
            </div>

            <div className="mb-2">
              B. {question.optionB}
            </div>

            <div className="mb-2">
              C. {question.optionC}
            </div>

            <div className="mb-2">
              D. {question.optionD}
            </div>

            <div
              className="mt-3 p-3 rounded"
              style={{
                background: "#d4edda",
              }}
            >
              <strong>
                Correct Answer:
              </strong>{" "}
              {question.correctAnswer}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default TeacherViewQuiz;