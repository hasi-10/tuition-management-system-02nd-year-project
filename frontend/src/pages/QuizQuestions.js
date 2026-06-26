import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Bell,
  PersonCircle,
  ClockHistory,
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import API from "../services/api";
import StudentProfileDropdown from "../components/StudentProfileDropdown";

function QuizQuestions() {

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

const quizData = location.state;

const questions = quizData?.questions || [];


console.log("QUIZ DATA:", quizData);
console.log("QUESTIONS:", questions);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30 * 60);

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

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          navigate("/quiz-results");

          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, [navigate]);
  if (!quizData || !questions.length) {
  return (
    <div className="container py-5 text-center">
      <h3>No quiz data found</h3>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/mycourses")}
      >
        Back to Courses
      </button>
    </div>
  );
}



  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

    

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
               
    color: darkMode ? "#ffffff" : "#001a70",
            fontSize: "46px",
            letterSpacing: "2px",
          }}
        >
          ONLINE QUIZ
        </h1>

        <h3
          className="text-center mb-4"
          style={{
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >
          {quizData?.subject || "Quiz"}
        </h3>

        <div className="d-flex justify-content-between align-items-center mb-3">

<h5
  className="fw-bold"
  style={{
    color: darkMode ? "#ffffff" : "#001a70",
  }}
>
  Question {currentQuestion + 1} of {questions.length}
</h5>

          <div
            className="px-4 py-2 rounded-pill d-flex align-items-center"
            style={{
              background: "#eef3ff",
            }}
          >

            <ClockHistory
              className="me-2"
              color="#01030a"
            />

            <span className="fw-bold">

              {String(minutes).padStart(2, "0")}:

              {String(seconds).padStart(2, "0")}

            </span>

          </div>

        </div>

        <div
          className="progress mb-4"
          style={{
            height: "12px",
            borderRadius: "20px",
          }}
        >

<div
  className="progress-bar"
  style={{
    width: `${progress}%`,
    background: darkMode ? "#6ea8fe" : "#0033cc",
  }}
></div>

        </div>
                {/* ================= QUESTION CARD ================= */}

        <div
          className="card border-0 rounded-5 mx-auto"
          style={{
                background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
            maxWidth: "900px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          }}
        >

          <div className="card-body p-5">

            <h3
              className="fw-bold mb-4"
              style={{
                
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              {questions[currentQuestion].question}
            </h3>

            <div className="mt-4">

{[
  questions[currentQuestion].optionA,
  questions[currentQuestion].optionB,
  questions[currentQuestion].optionC,
  questions[currentQuestion].optionD,
].map((option, index) => (

                <label
                  key={index}
                  className="d-flex align-items-center p-3 rounded-4 mb-3"
style={{
  border: "2px solid #dee2e6",
  cursor: "pointer",
  background:
    answers[currentQuestion] === option
      ? "#eef3ff"
      : darkMode
      ? "#495057"
      : "#fff",
  transition: "0.3s",
}}
                >

                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    className="form-check-input me-3"
                    checked={
                      answers[currentQuestion] === option
                    }
                    onChange={() =>
                      setAnswers({
                        ...answers,
                        [currentQuestion]: option,
                      })
                    }
                  />

<span
  style={{
    fontSize: "18px",
    fontWeight: "500",
    color:
      answers[currentQuestion] === option
        ? "#000000"
        : darkMode
        ? "#ffffff"
        : "#000000",
  }}
>
  {option}
</span>

                </label>

              ))}

            </div>

          </div>

        </div>
                {/* ================= BUTTONS ================= */}

        <div
          className="d-flex justify-content-between align-items-center mt-4 mx-auto"
          style={{
            maxWidth: "900px",
          }}
        >

          {/* Previous */}

          <div>

            {currentQuestion > 0 && (

              <button
                className="btn btn-outline-secondary rounded-pill px-4 fw-bold"
                onClick={() =>
                  setCurrentQuestion(currentQuestion - 1)
                }
              >
                ← Previous
              </button>

            )}

          </div>

          {/* Next / Submit */}

          <div>

            {currentQuestion < questions.length - 1 ? (

              <button
                className="btn btn-primary rounded-pill px-5 fw-bold"
                disabled={!answers[currentQuestion]}
                onClick={() =>
                  setCurrentQuestion(currentQuestion + 1)
                }
              >
                Next →
              </button>

            ) : (

             <button
  className="btn btn-success rounded-pill px-5 fw-bold"
  onClick={async () => {

    let score = 0;

    questions.forEach((item, index) => {

if (
  answers[index] === item.correctAnswer
) {
  score++;
}

    });

    try {

      await API.post("/submissions", {
        studentName: localStorage.getItem("name"),
        quizId: quizData._id,

        score,

answers: questions.map((item, index) => ({
  question: item.question,
  selectedAnswer:
    answers[index] || "Not Answered",
  correctAnswer: item.correctAnswer,
}))
      });

    } catch (err) {

      console.log(err);

    }

    const reviewQuestions = questions.map((item, index) => ({
      question: item.question,
      userAnswer: answers[index] || "Not Answered",
      correctAnswer: item.correctAnswer,
    }));

    navigate("/quiz-results", {
      state: {
        score,
        total: questions.length,
        correct: score,
        wrong: questions.length - score,
        subject: quizData?.subject,
        questions: reviewQuestions,
      },
    });

  }}
>
  Submit Quiz
</button>

            )}

          </div>

        </div>

        {/* ================= BACK BUTTON ================= */}

        <div
          className="d-flex justify-content-end mt-3"
          style={{
            maxWidth: "900px",
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
  onClick={() => navigate("/quiz-start")}
>
  ← Back
</button>

        </div>

      </div>

    </div>

  );

}

export default QuizQuestions;