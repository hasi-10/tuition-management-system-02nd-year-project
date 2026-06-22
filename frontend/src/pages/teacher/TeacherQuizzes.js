import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import {
  HouseDoorFill,
  Book,
  PersonVideo,
  Folder,
  CreditCard,
  Eye,
  Clock,
  Bell,
  ChevronDown,
  QuestionCircleFill,
} from "react-bootstrap-icons";
import API from "../../services/api";
import logo from "../../assets/image-removebg-preview.png";
import profile from "../../assets/profile.png";

function QuizManagement() {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const res = await API.get("/quizzes");
      setQuizzes(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this quiz?"
  );

  if (!confirmDelete) return;

  try {

    await API.delete(`/quizzes/${id}`);

    alert("Quiz Deleted Successfully");

    fetchQuizzes();

  } catch (err) {

    console.log(err);

    alert("Delete Failed");

  }

};

  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "#eef2f7",
        minHeight: "100vh",
      }}
    >
      <div className="row g-0">
        {/* Sidebar */}
        <div
          className="col-lg-3 col-xl-2"
          style={{
            background: "linear-gradient(to bottom,#001a70,#0033cc)",
            minHeight: "100vh",
          }}
        >
          <div className="text-center py-4">
            <img src={logo} alt="" style={{ width: "180px" }} />
          </div>

          <div className="px-3">
            <NavLink
              to="/teacher-dashboard"
              className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
            >
              <HouseDoorFill className="me-2" />
              Dashboard
            </NavLink>

            <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
              <Book className="me-2" />
              My Classes
            </button>

            <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
              <PersonVideo className="me-2" />
              Students
            </button>

            <button className="btn btn-light fw-bold w-100 text-start rounded-4 mb-3 p-3">
              Quiz Management
            </button>

            <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
              <Folder className="me-2" />
              Study Materials
            </button>

            <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
              <CreditCard className="me-2" />
              Payments
            </button>
          </div>
        </div>

        {/* Main */}
        <div className="col">
{/* Top Navbar */}

<div className="bg-white shadow-sm px-5 py-3 d-flex justify-content-between align-items-center">

  <div>
    <h2 className="fw-bold mb-0">
      Welcome back, Teacher
    </h2>

    <small className="text-muted">
      Manage your tuition classes efficiently
    </small>
  </div>

  <div className="d-flex align-items-center">

    <Bell size={22} className="me-4" />

    <img
      src={profile}
      alt="Profile"
      style={{
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        objectFit: "cover"
      }}
    />

    <div className="ms-3">
      <h5 className="fw-bold mb-0">
        User
      </h5>
    </div>

    <ChevronDown className="ms-3" />

  </div>

</div>

<div className="p-4">
            <div className="bg-white shadow-sm px-5 py-3 d-flex justify-content-between align-items-center mb-4">


 

</div>
<div className="row mb-4">

  <div className="col-md-3">
    <div className="card border-0 rounded-5 p-4 bg-primary text-white">
      <h4>Total Quizzes</h4>
      <h1 className="fw-bold">{quizzes.length}</h1>
      <h5>All time</h5>
    </div>
  </div>

  <div className="col-md-3">
    <div className="card border-0 rounded-5 p-4 bg-success text-white">
      <h4>Active Quizzes</h4>
      <h1 className="fw-bold">{quizzes.length}</h1>
      <h5>Currently open</h5>
    </div>
  </div>

  <div className="col-md-3">
    <div className="card border-0 rounded-5 p-4 bg-info text-white">
      <h4>Total Questions</h4>
<h1 className="fw-bold">
  {
    quizzes.reduce(
      (total, quiz) =>
        total + quiz.questions.length,
      0
    )
  }
</h1>
      <h5>All quizzes</h5>
    </div>
  </div>

  <div className="col-md-3">
    <div className="card border-0 rounded-5 p-4 text-white"
     style={{ background: "#6f42c1" }}>
<h4>Upcoming Quizzes</h4>

<h1 className="fw-bold">
  {
    quizzes.filter(
      quiz =>
        new Date(quiz.dueDate) > new Date()
    ).length
  }
</h1>

<h5>Not yet due</h5>
    </div>
  </div>

</div>
            <h1 className="fw-bold">Quiz Management</h1>
            <p className="text-muted">
              Create and manage quizzes and assessments
            </p>

            <div className="mb-4">
              <button
                className="btn btn-warning rounded-pill px-4 me-3 fw-bold"
                onClick={() => navigate("/teacher/create-quiz")}
              >
                Create Quiz
              </button>

              <button className="btn btn-warning rounded-pill px-4 fw-bold">
                Create Quiz based on AI
              </button>
            </div>

            {quizzes.map((quiz) => (
              <div
                key={quiz._id}
                className="card border-0 shadow rounded-5 p-4 mb-4"
              >
                <h2 className="fw-bold">{quiz.title}</h2>

                <div className="mb-3">
                  <span className="badge bg-primary me-2">
                    Active
                  </span>

                  <span className="badge bg-secondary">
                    {quiz.grade}
                  </span>
                </div>

                <p className="text-muted">
                  Subject - {quiz.subject}
                </p>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <QuestionCircleFill className="me-2" />
                    {quiz.questions?.length || 0} Questions
                  </div>

                  <div className="col-md-4">
                    <Clock className="me-2" />
                    {quiz.duration || 0} Minutes
                  </div>
                </div>

                <div
                  className="rounded-pill px-4 py-3 d-flex justify-content-between mb-3"
                  style={{
                    background: "#e8edf8",
                  }}
                >
                  <div>
                    {quiz.questions?.length || 0} Questions
                  </div>

                  <div>
                    Due: {quiz.dueDate?.split("T")[0]}
                  </div>
                </div>

<div className="row g-3">

  <div className="col-md-6">
    <button
      className="btn btn-light border w-100 rounded-pill py-3"
      onClick={() =>
        navigate(`/teacher/view-quiz/${quiz._id}`)
      }
    >
      <Eye className="me-2" />
      View Quiz
    </button>
  </div>

  <div className="col-md-6">
    <button
      className="btn btn-light border w-100 rounded-pill py-3"
      onClick={() =>
        navigate(`/teacher/submissions/${quiz._id}`)
      }
    >
      Submissions
    </button>
  </div>

  <div className="col-md-6">
    <button
      className="btn btn-outline-secondary w-100 rounded-pill py-3"
      onClick={() =>
        navigate(`/teacher/edit-quiz/${quiz._id}`)
      }
    >
      Edit
    </button>
  </div>

  <div className="col-md-6">
    <button
      className="btn btn-outline-danger w-100 rounded-pill py-3"
      onClick={() => handleDelete(quiz._id)}
    >
      Delete
    </button>
  </div>

</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizManagement;