import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Bell,
  PersonCircle,
  ClipboardCheck,
  Clock,
  Award,
  HourglassSplit,
  SlashCircle,
  Window,
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import profile from "../assets/profile.png";

function QuizInstructions() {
  const navigate = useNavigate();
  const location = useLocation();
const quizData = location.state;

  return (
    <div
      className="container-fluid p-0"
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
      }}
    >
      {/* ===================== NAVBAR ===================== */}

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

        {/* Right Side */}

        <div className="d-flex align-items-center">

          <Bell
            size={24}
            color="white"
            className="me-4"
            style={{
              cursor: "pointer",
            }}
          />

          <PersonCircle
            size={48}
            color="white"
          />

          <div className="ms-3">

            <h5
              className="text-white fw-bold mb-0"
            >
              Thusara Dilshan
            </h5>

            <small
              className="text-white"
              style={{
                fontSize: "14px",
              }}
            >
              Student
            </small>

          </div>

        </div>
      </div>

      {/* ===================== BODY ===================== */}

      <div className="container py-3">

        <h1
          className="text-center fw-bold mb-5"
          style={{
            color: "#0033cc",
            fontSize: "46px",
            letterSpacing: "3px",
          }}
        >
          ONLINE QUIZ
        </h1>

        <div
          className="card border-0 shadow-lg rounded-5 mx-auto"
          style={{
            maxWidth: "700px",
          }}
        >
          <div className="card-body p-3">

            <div className="d-flex align-items-center justify-content-center mb-5">

              <div
                style={{
                  width: "60px",
                  height: "3px",
                  background: "#0d6efd",
                }}
              ></div>

              <div
                className="mx-4 fw-bold"
                style={{
                  fontSize: "24px",
                  color: "#001a70",
                }}
              >
                Quiz Instructions
              </div>

              <div
                style={{
                  width: "60px",
                  height: "3px",
                  background: "#0d6efd",
                }}
              ></div>

            </div>
                        {/* ===================== INSTRUCTIONS ===================== */}

            <div className="px-lg-4">

              {/* 1 */}

              <div className="d-flex align-items-center py-2 border-bottom">

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#eef3ff",
                  }}
                >
                  <ClipboardCheck size={18} color="#0033cc" />
                </div>

                <div className="ms-3"
style={{
  fontSize: "15px",
  fontWeight: "500",
}}>
                  Total Questions : 10
                </div>

              </div>

              {/* 2 */}

              <div className="d-flex align-items-center py-2 border-bottom">

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#eef3ff",
                  }}
                >
                  <Clock size={18} color="#0033cc" />
                </div>

                <div className="ms-3"
style={{
  fontSize: "15px",
  fontWeight: "500",
}}>
                  Time Duration : 30 Minutes
                </div>

              </div>

              {/* 3 */}

              <div className="d-flex align-items-center py-2 border-bottom">

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#eef3ff",
                  }}
                >
                  <Award size={18} color="#0033cc" />
                </div>

                <div className="ms-3"
style={{
  fontSize: "15px",
  fontWeight: "500",
}}>
                  Each question carries 1 mark.
                </div>

              </div>

              {/* 4 */}

              <div className="d-flex align-items-center py-2 border-bottom">

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#eef3ff",
                  }}
                >
                  <HourglassSplit size={18} color="#0033cc" />
                </div>

                <div className="ms-3"
style={{
  fontSize: "15px",
  fontWeight: "500",
}}>
                  Quiz will auto submit when time ends.
                </div>

              </div>

              {/* 5 */}

              <div className="d-flex align-items-center py-2 border-bottom">

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#eef3ff",
                  }}
                >
                  <SlashCircle size={18} color="#0033cc" />
                </div>

                <div className="ms-3"
style={{
  fontSize: "15px",
  fontWeight: "500",
}}>
                  Do not refresh the page.
                </div>

              </div>

              {/* 6 */}

              <div className="d-flex align-items-center py-3">

                <div
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "#eef3ff",
                  }}
                >
                  <Window size={18} color="#0033cc" />
                </div>

                <div className="ms-3"
style={{
  fontSize: "15px",
  fontWeight: "500",
}}>
                  Do not switch browser tabs.
                </div>

              </div>

            </div>
                        {/* ===================== BUTTON ===================== */}

            <div className="text-center mt-5">

              <button
                className="btn fw-bold rounded-pill shadow"
                style={{
                  background: "#ffc107",
                  color: "#000",
fontSize: "18px",
padding: "10px 40px",
minWidth: "230px",
                }}
                onClick={() =>
  navigate("/quiz-start", {
    state: quizData,
  })
}
              >
                ✓ &nbsp; I Understand
              </button>

            </div>

          </div>
        </div>

      </div>
      {/* Back Button */}



<div
  className="d-flex justify-content-end mt-3"
  style={{ paddingRight: "50px" }}
>
  <button
    className="btn btn-outline-secondary rounded-pill fw-bold"
    style={{
      padding: "8px 28px",
      fontSize: "16px",
      border: "2px solid #6c757d",
      background: "transparent",
      color: "#6c757d",
      minWidth: "120px",
    }}
    onClick={() => navigate("/mycourses")}
  >
    ← Back
  </button>
</div>

    </div>
    
  );
}


export default QuizInstructions;