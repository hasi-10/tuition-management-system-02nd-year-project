import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Bell, PersonCircle } from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";

function QuizReview() {

  const navigate = useNavigate();
  const location = useLocation();

const reviewData = location.state || {
  score: 8,
  total: 10,
  correct: 8,
  wrong: 2,
  subject: "Geography",

  questions: [
    {
      question: "Which is the capital of Sri Lanka?",
      userAnswer: "Colombo",
      correctAnswer: "Colombo",
    },
    {
      question: "Which is the longest river in Sri Lanka?",
      userAnswer: "Kelani River",
      correctAnswer: "Mahaweli River",
    },
    {
      question: "Sri Lanka belongs to which continent?",
      userAnswer: "Asia",
      correctAnswer: "Asia",
    },
  ],
};

console.log("Location State:", location.state);
console.log("Review Data:", reviewData);
console.log("Questions:", reviewData.questions);

  const percentage = Math.round(
    (reviewData.correct / reviewData.total) * 100
  );

  return (

    <div
      className="container-fluid p-0"
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
      }}
    >

      {/* NAVBAR */}

      <div
        className="d-flex justify-content-between align-items-center px-5"
        style={{
          height: "95px",
          background:
            "linear-gradient(90deg,#001a75,#0033cc)",
        }}
      >

        <img
          src={logo}
          alt="logo"
          style={{
            width: "120px",
          }}
        />

        <div className="d-flex align-items-center">

          <Bell
            size={24}
            color="white"
            className="me-4"
          />

          <PersonCircle
            size={48}
            color="white"
          />

          <div className="ms-3">

            <h5 className="text-white fw-bold mb-0">
              Thusara Dilshan
            </h5>

            <small className="text-white">
              Student
            </small>

          </div>

        </div>

      </div>

      {/* BODY */}

      <div className="container py-4">

        <h1
          className="text-center fw-bold"
          style={{
            color: "#0033cc",
            fontSize: "46px",
          }}
        >
          ONLINE QUIZ
        </h1>

        <h2
          className="text-center fw-bold mb-4"
          style={{
            color: "#001a70",
          }}
        >
          Review Answers
        </h2>

        {/* SUMMARY */}

        <div
          className="card border-0 rounded-5 mx-auto mb-4"
          style={{
            maxWidth: "900px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          }}
        >

          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">

              📊 Review Summary

            </h3>

            <div className="row text-center">

              <div className="col-md-3">

                <h6>Score</h6>

                <h3 className="text-primary fw-bold">

                  {reviewData.correct}/{reviewData.total}

                </h3>

              </div>

              <div className="col-md-3">

                <h6>Correct</h6>

                <h3 className="text-success fw-bold">

                  {reviewData.correct}

                </h3>

              </div>

              <div className="col-md-3">

                <h6>Wrong</h6>

                <h3 className="text-danger fw-bold">

                  {reviewData.wrong}

                </h3>

              </div>

              <div className="col-md-3">

                <h6>Accuracy</h6>

                <h3 className="text-primary fw-bold">

                  {percentage}%

                </h3>

              </div>

            </div>

          </div>

        </div>
                {/* ================= QUESTION REVIEW ================= */}

        <div
          className="mx-auto"
          style={{
            maxWidth: "900px",
          }}
        >
        console.log(reviewData);
console.log(reviewData.questions);
          {(reviewData.questions || []).map((item, index) => {

            const isCorrect =
              item.userAnswer === item.correctAnswer;

            return (

              <div
                key={index}
                className="card border-0 rounded-5 mb-4"
                style={{
                  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  borderLeft: isCorrect
                    ? "8px solid #198754"
                    : "8px solid #dc3545",
                }}
              >

                <div className="card-body p-4">

                  <div className="d-flex justify-content-between align-items-center mb-3">

                    <h4
                      className="fw-bold mb-0"
                      style={{
                        color: "#001a70",
                      }}
                    >
                      Question {index + 1}
                    </h4>

                    <span
                      className={`badge rounded-pill px-3 py-2 ${
                        isCorrect ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {isCorrect ? "✔ Correct" : "✖ Incorrect"}
                    </span>

                  </div>

                  <h5 className="fw-bold mb-4">

                    {item.question}

                  </h5>

                  {/* Your Answer */}

                  <div
                    className="rounded-4 p-3 mb-3"
                    style={{
                      background: isCorrect
                        ? "#eafaf1"
                        : "#fdecec",
                    }}
                  >

                    <h6 className="fw-bold mb-2">

                      Your Answer

                    </h6>

                    <div
                      className={
                        isCorrect
                          ? "text-success fw-bold"
                          : "text-danger fw-bold"
                      }
                    >

                      {item.userAnswer}

                    </div>

                  </div>

                  {/* Correct Answer */}

                  <div
                    className="rounded-4 p-3"
                    style={{
                      background: "#eef4ff",
                    }}
                  >

                    <h6 className="fw-bold mb-2">

                      Correct Answer

                    </h6>

                    <div className="text-primary fw-bold">

                      {item.correctAnswer}

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>
                {/* ================= PERFORMANCE ================= */}

        <div
          className="card border-0 rounded-5 mx-auto mb-4"
          style={{
            maxWidth: "900px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">
              📈 Performance Analysis
            </h3>

            <div
              className="progress mb-3"
              style={{
                height: "14px",
                borderRadius: "20px",
              }}
            >
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{
                  width: `${percentage}%`,
                }}
              ></div>
            </div>

            <div className="d-flex justify-content-between">

              <span className="fw-bold">
                Accuracy
              </span>

              <span className="fw-bold text-primary">
                {percentage}%
              </span>

            </div>

            <div className="alert alert-primary rounded-4 mt-4 mb-0">

              <h5 className="fw-bold">

                {percentage >= 90
                  ? "🏆 Excellent Performance!"
                  : percentage >= 75
                  ? "🎉 Great Job!"
                  : percentage >= 50
                  ? "👍 Good Attempt!"
                  : "📚 Keep Practicing!"}

              </h5>

              <p className="mb-0">

                {percentage >= 90
                  ? "Outstanding work! You answered almost every question correctly."
                  : percentage >= 75
                  ? "Very good performance. Keep improving!"
                  : percentage >= 50
                  ? "Good effort! Practice a little more."
                  : "Review the lesson and try again for a better score."}

              </p>

            </div>

          </div>

        </div>

        {/* ================= BUTTONS ================= */}

        <div className="text-center mb-5">

          <button
            className="btn btn-primary rounded-pill fw-bold px-5 py-2 me-3"
            onClick={() => navigate("/quiz-results")}
          >
            Back to Results
          </button>

          <button
            className="btn btn-warning rounded-pill fw-bold px-5 py-2"
            onClick={() => navigate("/mycourses")}
          >
            Back to My Courses
          </button>

        </div>

        {/* ================= BACK BUTTON ================= */}

        <div
          className="d-flex justify-content-end"
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >

          <button
            className="btn btn-outline-secondary rounded-pill px-4 fw-bold"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

        </div>

      </div>

    </div>

  );

}

export default QuizReview;