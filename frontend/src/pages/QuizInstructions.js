import React, { useState, useEffect } from "react";

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
import StudentProfileDropdown from "../components/StudentProfileDropdown";
import API from "../services/api";

function QuizInstructions() {
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

  const location = useLocation();
const quizData = location.state;

  return (
<div
  className="container-fluid p-0"
  style={{
    background: darkMode ? "#2f343a" : "#eef2f7",
    minHeight: "100vh",
  }}
>
      {/* ===================== NAVBAR ===================== */}

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

<div className="d-flex align-items-center">

  <Bell size={28} className="me-4" />

  <StudentProfileDropdown
    fullName={formData.fullName}
    profileImage={formData.profileImage}
  />

</div>
      </div>

      {/* ===================== BODY ===================== */}

      <div className="container py-3">

        <h1
          className="text-center fw-bold mb-5"
          style={{
            color: darkMode ? "#ffffff" : "#001a70",
            fontSize: "46px",
            letterSpacing: "3px",
          }}
        >
          ONLINE QUIZ
        </h1>

<div
 className="card border-0 shadow rounded-4 mx-auto"
style={{
  background: darkMode ? "#3a4047" : "#ffffff",
  color: darkMode ? "#ffffff" : "#000000",
  maxWidth: "1000px",
}}
>
          <div className="card-body p-3">

            <div className="d-flex align-items-center justify-content-center mb-5">

<div
  style={{
    width: "60px",
    height: "3px",
    background: darkMode ? "#ffffff" : "#0d6efd",
  }}
></div>

<div
  className="mx-4 fw-bold"
  style={{
    fontSize: "24px",
    color: darkMode ? "#ffffff" : "#001a70",
  }}
>
  Quiz Instructions
</div>

<div
  style={{
    width: "60px",
    height: "3px",
    background: darkMode ? "#ffffff" : "#0d6efd",
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
    
  );
}


export default QuizInstructions;