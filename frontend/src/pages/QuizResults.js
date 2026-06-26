import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Bell,
  PersonCircle,
  TrophyFill,
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import API from "../services/api";
import StudentProfileDropdown from "../components/StudentProfileDropdown";

function QuizResults() {

  const [formData, setFormData] = useState({
    fullName: "",
    profileImage: "",
  });
  

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);


  const location = useLocation();

  const result = location.state || {

    score: 8,
    total: 10,
    correct: 8,
    wrong: 2,
    subject: "Geography",
    timeTaken: "18:45",

  };

    const loadProfile = async () => {
  try {
    const email = localStorage.getItem("email");

    const res = await API.get(`/profile/${email}`);

    setFormData(res.data.data);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  const email = localStorage.getItem("email");

  if (email) {
    loadProfile();
  }
}, []);

  const percentage = Math.round(
    (result.score / result.total) * 100
  );

  let performance = "";
  let emoji = "";

  if (percentage >= 90) {

    performance = "Excellent!";
    emoji = "🏆";

  } else if (percentage >= 75) {

    performance = "Great Job!";
    emoji = "🎉";

  } else if (percentage >= 50) {

    performance = "Good Attempt!";
    emoji = "👍";

  } else {

    performance = "Keep Practicing!";
    emoji = "📚";

  }

  return (

<div
  className="container-fluid p-0"
  style={{
    background: darkMode ? "#2f343a" : "#eef2f7",
    minHeight: "100vh",
  }}
>
      {/* ================= NAVBAR ================= */}

<div
  className="shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
  style={{
    background: darkMode
      ? "#3a4047"
      : "linear-gradient(90deg,#001a75,#0033cc)",
    color: "#ffffff",
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

  <Bell size={28} className="me-4" />

  <StudentProfileDropdown
    fullName={formData.fullName}
    profileImage={formData.profileImage}
  />

</div>

      </div>

      {/* ================= BODY ================= */}

      <div className="container py-4">

        <h1
          className="text-center fw-bold"
          style={{
            color: darkMode ? "#ffffff" : "#000000",
            fontSize: "46px",
            letterSpacing: "2px",
          }}
        >
          ONLINE QUIZ
        </h1>

        <div
          className="card border-0 rounded-5 mx-auto mt-4"
          style={{
            background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
            maxWidth: "800px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          }}
        >

          <div className="card-body text-center p-5">

            <TrophyFill
              size={55}
              color="#ffc107"
              className="mb-3"
            />

            <h2
              className="fw-bold"
              style={{
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              Quiz Completed
            </h2>

            <div
              className="rounded-circle mx-auto my-4 d-flex flex-column justify-content-center align-items-center"
              style={{
                width: "180px",
                height: "180px",
                background: "#eef3ff",
                border: "8px solid #0033cc",
              }}
            >

              <h1
                className="fw-bold mb-0"
                style={{
                  color: "#0033cc",
                  fontSize: "48px",
                }}
              >
                {percentage}%
              </h1>

              <div
                className="fw-bold"
                style={{
                  color: "#666",
                }}
              >
                {result.score} / {result.total}
              </div>

            </div>

            <h3 className="fw-bold">

              {emoji} {performance}

            </h3>

            <p>

              You have successfully completed the quiz.

            </p>
                        {/* ================= RESULT CARDS ================= */}

            <div className="row mt-5 g-4">

              {/* Correct */}

              <div className="col-md-6">

      <div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>


                  <div className="card-body text-center py-4">

                    <div
                      style={{
                        fontSize: "40px",
                      }}
                    >
                      ✅
                    </div>

                    <h5 className="fw-bold mt-2">

                      Correct Answers

                    </h5>

                    <h2
                      className="fw-bold text-success mb-0"
                    >
                      {result.correct}
                    </h2>

                  </div>

                </div>

              </div>

              {/* Wrong */}

              <div className="col-md-6">

      <div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>


                  <div className="card-body text-center py-4">

                    <div
                      style={{
                        fontSize: "40px",
                      }}
                    >
                      ❌
                    </div>

                    <h5 className="fw-bold mt-2">

                      Wrong Answers

                    </h5>

                    <h2
                      className="fw-bold text-danger mb-0"
                    >
                      {result.wrong}
                    </h2>

                  </div>

                </div>

              </div>

              {/* Subject */}

              <div className="col-md-6">

      <div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>


                  <div className="card-body text-center py-4">

                    <div
                      style={{
                        fontSize: "40px",
                      }}
                    >
                      📚
                    </div>

                    <h5 className="fw-bold mt-2">

                      Subject

                    </h5>

                    <h4
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#1285cc" : "#001a70",
                      }}
                    >
                      {result.subject}
                    </h4>

                  </div>

                </div>

              </div>

              {/* Time */}

              <div className="col-md-6">

      <div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>


                  <div className="card-body text-center py-4">

                    <div
                      style={{
                        fontSize: "40px",
                      }}
                    >
                      ⏰
                    </div>

                    <h5 className="fw-bold mt-2">

                      Time Taken

                    </h5>

                    <h4
                      className="fw-bold"
                      style={{
                        color: "#19845d",
                      }}
                    >
                      {result.timeTaken}
                    </h4>

                  </div>

                </div>

              </div>

            </div>
                        {/* ================= BUTTONS ================= */}

            <div className="text-center mt-5">

              <button
                className="btn btn-warning fw-bold rounded-pill px-5 py-2 me-3"
                style={{
                  fontSize: "18px",
                }}
onClick={() =>
  navigate("/quiz-review", {
    state: {
      score: result.score,
      total: result.total,
      correct: result.correct,
      wrong: result.wrong,
      subject: result.subject,
      questions: result.questions,
    },
  })
}
              >
                📖 Review Answers
              </button>

              <button
                className="btn btn-primary fw-bold rounded-pill px-5 py-2"
                style={{
                  fontSize: "18px",
                }}
                onClick={() => navigate("/mycourses")}
              >
                Back to My Courses
              </button>

            </div>

          </div>

        </div>

        {/* ================= BACK BUTTON ================= */}

        <div
          className="d-flex justify-content-end mt-4"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >

<button
  className="fw-bold rounded-pill border-0"
  style={{
    fontSize: "16px",
    padding: "8px 28px",
    minWidth: "120px",
    background: darkMode ? "#6c757d" : "#212529",
    color: "#ffffff",
  }}
  onClick={() => navigate("/mycourses")}
>
  ← Back
</button>

        </div>

      </div>

    </div>

  );

}

export default QuizResults;