import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Bell,
  PersonCircle,
  PlayFill,
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import API from "../services/api";
import StudentProfileDropdown from "../components/StudentProfileDropdown";

function QuizStart() {

const [formData, setFormData] = useState({
  fullName: "",
  profileImage: "",
});


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

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  const location = useLocation();

const quizData = location.state;

if (!quizData) {
  navigate("/mycourses");
  return null;
}

const checkAttempt = async () => {
  const res = await API.get(
    `/submissions/check/${quizData._id}/${localStorage.getItem("email")}`
  );

  if (res.data.attempted) {
    alert("You already attempted this quiz");
    navigate("/mycourses");
  }
};

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
          className="text-center fw-bold mb-4"
          style={{
            color: darkMode ? "#ffffff" : "#001a70",
            fontSize: "46px",
            letterSpacing: "2px",
          }}
        >
          ONLINE QUIZ
        </h1>

        <div
          className="card border-0 rounded-5 mx-auto"
          style={{
            background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
            maxWidth: "700px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          }}
        >
          <div className="card-body p-5">

            <div className="text-center">



<h2
  className="fw-bold mb-3"
  style={{
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  {quizData.title}
</h2>
              <p
                className=" mb-5"
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
                background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
                border: "1px solid #e9ecef",
                }}
              >

                <h6
                  className=" fw-bold mb-2"
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
                  className=" mb-0"
                >
                  Minutes
                </h5>

              </div>

            </div>
            <p className="fw-bold mt-3">
  Total Questions: {quizData.questions.length}
</p>
            </div>

            {/* ================= SUBJECT CARD ================= */}

            <div
              className="rounded-4 p-4 mb-4"
              style={{
                background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
                border: "1px solid #e9ecef",
              }}
            >

<div className="row text-center">

  <div className="col-md-4">

    <h6 className="fw-bold mb-2">
      SUBJECT
    </h6>

    <h4
      className="fw-bold"
      style={{ color: "#001a70" }}
    >
      {quizData.subject}
    </h4>

  </div>

  <div className="col-md-4">

    <h6 className="fw-bold mb-2">
      GRADE
    </h6>

    <h4
      className="fw-bold"
      style={{ color: "#001a70" }}
    >
      {quizData.grade}
    </h4>

  </div>

  <div className="col-md-4">

    <h6 className="fw-bold mb-2">
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
  className="fw-bold rounded-pill border-0"
  style={{
    fontSize: "20px",
    padding: "12px 45px",
    minWidth: "180px",
    background: darkMode ? "#6c757d" : "#212529",
    color: "#ffffff",
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
           
  className="fw-bold rounded-pill border-0"
  style={{
    fontSize: "16px",
    padding: "8px 28px",
    minWidth: "120px",
    background: darkMode ? "#6c757d" : "#212529",
    color: "#ffffff",
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