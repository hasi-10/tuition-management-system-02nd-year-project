import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Bell,
  PersonCircle,
  PlayFill,
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";

function QuizStart() {
  const navigate = useNavigate();
  const location = useLocation();

  const quizData = location.state || {
    subject: "Geography",
    duration: 30,
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
      }}
    >
      {/* ================= NAVBAR ================= */}

      <div
        className="d-flex justify-content-between align-items-center px-5"
        style={{
          height: "95px",
          background: "linear-gradient(90deg,#001a75,#0033cc)",
        }}
      >
        {/* Logo */}

        <img
          src={logo}
          alt="logo"
          style={{
            width: "120px",
          }}
        />

        {/* User */}

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

      {/* ================= BODY ================= */}

      <div className="container py-4">

        <h1
          className="text-center fw-bold mb-4"
          style={{
            color: "#0033cc",
            fontSize: "46px",
            letterSpacing: "2px",
          }}
        >
          ONLINE QUIZ
        </h1>

        <div
          className="card border-0 rounded-5 mx-auto"
          style={{
            maxWidth: "700px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          }}
        >
          <div className="card-body p-5">

            <div className="text-center">



              <h2
                className="fw-bold mb-3"
                style={{
                  color: "#001a70",
                }}
              >
                {quizData.subject} Quiz
              </h2>

              <p
                className="text-muted mb-5"
                style={{
                  fontSize: "18px",
                }}
              >
                Ready to start your online assessment
              </p>
                          {/* ================= DURATION CARD ================= */}

            <div className="d-flex justify-content-center mb-4">

              <div
                className="rounded-4 text-center py-4 px-5"
                style={{
                  background: "#eef3ff",
                  minWidth: "250px",
                }}
              >

                <h6
                  className="text-muted fw-bold mb-2"
                  style={{
                    letterSpacing: "1px",
                  }}
                >
                  TIME DURATION
                </h6>

                <h1
                  className="fw-bold mb-0"
                  style={{
                    color: "#0033cc",
                    fontSize: "48px",
                  }}
                >
                  {quizData.duration}
                </h1>

                <h5
                  className="text-muted mb-0"
                >
                  Minutes
                </h5>

              </div>

            </div>
            </div>

            {/* ================= SUBJECT CARD ================= */}

            <div
              className="rounded-4 p-4 mb-4"
              style={{
                background: "#f8f9fc",
                border: "1px solid #e9ecef",
              }}
            >

              <div className="row text-center">

                <div className="col-6">

                  <h6 className="text-muted fw-bold mb-2">
                    SUBJECT
                  </h6>

                  <h4
                    className="fw-bold"
                    style={{
                      color: "#001a70",
                    }}
                  >
                    {quizData.subject}
                  </h4>

                </div>

                <div className="col-6">

                  <h6 className="text-muted fw-bold mb-2">
                    STATUS
                  </h6>

                  <span
                    className="badge rounded-pill px-4 py-2"
                    style={{
                      background: "#28a745",
                      fontSize: "15px",
                    }}
                  >
                    Ready to Start
                  </span>

                </div>

              </div>

            </div>
                        {/* ================= BUTTONS ================= */}

            <div className="text-center mt-5">

              <button
                className="btn fw-bold rounded-pill shadow me-3"
                style={{
                  background: "#ffc107",
                  color: "#000",
                  fontSize: "20px",
                  padding: "12px 45px",
                  minWidth: "220px",
                }}
                onClick={() =>
                  navigate("/quiz-questions", {
                    state: quizData,
                  })
                }
              >
                ▶ Start Quiz
              </button>

              <button
                className="btn btn-outline-secondary fw-bold rounded-pill"
                style={{
                  fontSize: "20px",
                  padding: "12px 45px",
                  minWidth: "180px",
                }}
                onClick={() => navigate("/mycourses")}
              >
                Cancel
              </button>

            </div>

          </div>
        </div>

        {/* ================= BACK BUTTON ================= */}

        <div
          className="d-flex justify-content-end mt-3"
          style={{
            paddingRight: "80px",
          }}
        >

          <button
            className="btn btn-outline-secondary rounded-pill fw-bold"
            style={{
              padding: "8px 28px",
              fontSize: "16px",
              minWidth: "120px",
            }}
            onClick={() => navigate("/quiz-instructions")}
          >
            ← Back
          </button>

        </div>

      </div>

    </div>

  );
}

export default QuizStart;