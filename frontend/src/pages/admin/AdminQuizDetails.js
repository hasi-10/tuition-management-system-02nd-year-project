import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  PatchQuestionFill,
  PersonFill,
  BookFill,
  ClockFill,
  CheckCircleFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminQuizDetails() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Dummy Quiz Data

  const quiz = {

    title: "Algebra Quiz",

    teacher: "Kamal Silva",

    subject: "Mathematics",

    grade: "Grade 10",

    duration: "30 Minutes",

    questions: 20,

    status: "Active",

    attempts: 125,

    average: "76%",

    highest: "100%",

    lowest: "28%",

    questionList: [

      {
        question: "What is 5 + 7 ?",
        options: ["10", "11", "12", "13"],
        answer: "12",
      },

      {
        question: "Solve: 8 × 6",
        options: ["42", "46", "48", "50"],
        answer: "48",
      },

      {
        question: "Square root of 81?",
        options: ["7", "8", "9", "10"],
        answer: "9",
      },

    ],

  };

  return (

<div className="container-fluid p-0">

<div className="row g-0">

<AdminSidebar />

<div
className="col-lg-9 col-xl-10"
style={{
background: darkMode ? "#2f343a" : "#eef2f7",
minHeight: "100vh",
}}
>

<AdminTopNavbar
title="Quiz Details"
subtitle="View quiz information"
/>

<div className="container-fluid p-4">

    {/* ================= QUIZ INFORMATION ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      📚 Quiz Information
    </h4>

    <div className="row">

      {/* Quiz Title */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <PatchQuestionFill className="me-2" />
          Quiz Title
        </h6>

        <p className="fs-5 fw-bold">
          {quiz.title}
        </p>

      </div>

      {/* Teacher */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <PersonFill className="me-2" />
          Teacher
        </h6>

        <p className="fs-5">
          {quiz.teacher}
        </p>

      </div>

      {/* Subject */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <BookFill className="me-2" />
          Subject
        </h6>

        <p className="fs-5">
          {quiz.subject}
        </p>

      </div>

      {/* Grade */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Grade
        </h6>

        <span className="badge bg-primary fs-6 px-3 py-2">
          {quiz.grade}
        </span>

      </div>

      {/* Duration */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <ClockFill className="me-2" />
          Duration
        </h6>

        <p className="fs-5">
          {quiz.duration}
        </p>

      </div>

      {/* Total Questions */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Total Questions
        </h6>

        <p className="fs-5 fw-bold">
          {quiz.questions}
        </p>

      </div>

      {/* Status */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Status
        </h6>

        <span
          className={`badge ${
            quiz.status === "Active"
              ? "bg-success"
              : "bg-danger"
          } fs-6 px-3 py-2`}
        >
          <CheckCircleFill className="me-2" />
          {quiz.status}
        </span>

      </div>

    </div>

  </div>

</div>
{/* ================= QUESTIONS ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      📝 Questions & Correct Answers
    </h4>

    {quiz.questionList.map((q, index) => (

      <div
        key={index}
        className="border rounded-4 p-4 mb-4"
        style={{
          background: darkMode ? "#495057" : "#f8f9fa",
        }}
      >

        <h5 className="fw-bold mb-3">
          Question {index + 1}
        </h5>

        <p className="fs-5 fw-semibold">
          {q.question}
        </p>

        <div className="mt-3">

          {q.options.map((option, optionIndex) => (

            <div
              key={optionIndex}
              className={`p-3 rounded-3 mb-2 ${
                option === q.answer
                  ? "bg-success text-white"
                  : ""
              }`}
              style={{
                background:
                  option === q.answer
                    ? ""
                    : darkMode
                    ? "#3a4047"
                    : "#ffffff",
                border:
                  option === q.answer
                    ? ""
                    : "1px solid #dee2e6",
              }}
            >

              <strong>
                {String.fromCharCode(65 + optionIndex)}.
              </strong>{" "}
              {option}

              {option === q.answer && (
                <span className="float-end fw-bold">
                  ✓ Correct Answer
                </span>
              )}

            </div>

          ))}

        </div>

      </div>

    ))}

  </div>

</div>
{/* ================= QUIZ STATISTICS ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      📊 Quiz Statistics
    </h4>

    <div className="row">

      <div className="col-md-3 mb-3">
        <div
          className="text-center rounded-4 p-4"
          style={{
            background: darkMode ? "#495057" : "#f8f9fa",
          }}
        >
          <h2 className="fw-bold text-primary">
            {quiz.attempts}
          </h2>
          <p className="mb-0 fw-semibold">
            Total Attempts
          </p>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div
          className="text-center rounded-4 p-4"
          style={{
            background: darkMode ? "#495057" : "#f8f9fa",
          }}
        >
          <h2 className="fw-bold text-success">
            {quiz.average}
          </h2>
          <p className="mb-0 fw-semibold">
            Average Score
          </p>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div
          className="text-center rounded-4 p-4"
          style={{
            background: darkMode ? "#495057" : "#f8f9fa",
          }}
        >
          <h2 className="fw-bold text-info">
            {quiz.highest}
          </h2>
          <p className="mb-0 fw-semibold">
            Highest Score
          </p>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div
          className="text-center rounded-4 p-4"
          style={{
            background: darkMode ? "#495057" : "#f8f9fa",
          }}
        >
          <h2 className="fw-bold text-danger">
            {quiz.lowest}
          </h2>
          <p className="mb-0 fw-semibold">
            Lowest Score
          </p>
        </div>
      </div>

    </div>

  </div>
</div>

{/* ================= ACTION BUTTONS ================= */}

<div className="d-flex justify-content-end gap-3 mb-4">

  {/* Back */}

  <button
    className="fw-bold rounded-pill border-0"
    style={{
      fontSize: "16px",
      padding: "10px 30px",
      minWidth: "140px",
      background: darkMode ? "#6c757d" : "#212529",
      color: "#ffffff",
    }}
    onClick={() => navigate("/adminquizzes")}
  >
    ← Back
  </button>

  {/* Activate / Deactivate */}

  <button
    className={`btn rounded-pill px-5 fw-bold ${
      quiz.status === "Active"
        ? "btn-danger"
        : "btn-success"
    }`}
    onClick={() => {
      if (
        window.confirm(
          quiz.status === "Active"
            ? "Deactivate this quiz?"
            : "Activate this quiz?"
        )
      ) {
        alert(
          quiz.status === "Active"
            ? "Quiz deactivated successfully!"
            : "Quiz activated successfully!"
        );
        navigate("/adminquizzes");
      }
    }}
  >
    {quiz.status === "Active"
      ? "Deactivate"
      : "Activate"}
  </button>

</div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminQuizDetails;
