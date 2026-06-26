import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  EyeFill,
  CheckCircleFill,
  XCircleFill,
  PatchQuestionFill,
  PersonFill,
  BarChartFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminQuizzes() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Temporary Quiz Data

const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: "Algebra Quiz",
      teacher: "Kamal Silva",
      subject: "Mathematics",
      grade: "Grade 10",
      questions: 20,
      attempts: 125,
      status: "Active",
    },
    {
      id: 2,
      title: "ICT Basics",
      teacher: "Nimal Perera",
      subject: "ICT",
      grade: "Grade 11",
      questions: 15,
      attempts: 82,
      status: "Inactive",
    },
    {
      id: 3,
      title: "Science Revision",
      teacher: "Kasun Fernando",
      subject: "Science",
      grade: "Grade 9",
      questions: 25,
      attempts: 164,
      status: "Active",
    },
  ]);

  const handleStatus = (id) => {
  setQuizzes(
    quizzes.map((quiz) =>
      quiz.id === id
        ? {
            ...quiz,
            status:
              quiz.status === "Active"
                ? "Inactive"
                : "Active",
          }
        : quiz
    )
  );
};

  const filteredQuizzes = quizzes.filter(
    (quiz) =>
      quiz.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      quiz.teacher
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      quiz.subject
        .toLowerCase()
        .includes(search.toLowerCase())
  );

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
            title="Quiz Monitoring"
            subtitle="Monitor and manage quizzes"
          />

          <div className="container-fluid p-4">
            {/* ================= SUMMARY CARDS ================= */}

<div className="row g-4 mb-4">

  {/* Total Quizzes */}

  <div className="col-md-6 col-xl-3">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >

      <div className="card-body d-flex justify-content-between align-items-center p-4">

        <div>

          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Total Quizzes
          </h6>

          <h2 className="fw-bold">
            245
          </h2>

          <small className="text-primary">
            All quizzes
          </small>

        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#0d6efd",
          }}
        >
          <PatchQuestionFill
            size={30}
            color="white"
          />
        </div>

      </div>

    </div>

  </div>

  {/* Active Quizzes */}

  <div className="col-md-6 col-xl-3">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >

      <div className="card-body d-flex justify-content-between align-items-center p-4">

        <div>

          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Active Quizzes
          </h6>

          <h2 className="fw-bold">
            228
          </h2>

          <small className="text-success">
            Currently available
          </small>

        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#198754",
          }}
        >
          <CheckCircleFill
            size={30}
            color="white"
          />
        </div>

      </div>

    </div>

  </div>

  {/* Teachers Created */}

  <div className="col-md-6 col-xl-3">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >

      <div className="card-body d-flex justify-content-between align-items-center p-4">

        <div>

          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Teachers Created
          </h6>

          <h2 className="fw-bold">
            18
          </h2>

          <small className="text-info">
            Active teachers
          </small>

        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#17a2b8",
          }}
        >
          <PersonFill
            size={30}
            color="white"
          />
        </div>

      </div>

    </div>

  </div>

  {/* Total Attempts */}

  <div className="col-md-6 col-xl-3">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >

      <div className="card-body d-flex justify-content-between align-items-center p-4">

        <div>

          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Total Attempts
          </h6>

          <h2 className="fw-bold">
            4,520
          </h2>

          <small className="text-warning">
            Student submissions
          </small>

        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#ffc107",
          }}
        >
          <BarChartFill
            size={30}
            color="white"
          />
        </div>

      </div>

    </div>

  </div>

</div>
{/* ================= SEARCH & FILTERS ================= */}

<div className="row g-3 mb-4">

  {/* Search */}

  <div className="col-lg-3">

    <div className="position-relative">

      <Search
        className="position-absolute"
        style={{
          top: "50%",
          left: "18px",
          transform: "translateY(-50%)",
          color: "#6c757d",
        }}
      />

      <input
        type="text"
        className="form-control rounded-4 border-0 shadow-sm ps-5 py-3"
        placeholder="Search quiz..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          background: darkMode ? "#3a4047" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
        }}
      />

    </div>

  </div>

  {/* Teacher */}

  <div className="col-lg-2">

    <select
      className="form-select rounded-4 py-3"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <option>All Teachers</option>
      <option>Kamal Silva</option>
      <option>Nimal Perera</option>
      <option>Kasun Fernando</option>
    </select>

  </div>

  {/* Subject */}

  <div className="col-lg-2">

    <select
      className="form-select rounded-4 py-3"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <option>All Subjects</option>
      <option>Mathematics</option>
      <option>Science</option>
      <option>ICT</option>
    </select>

  </div>

  {/* Grade */}

  <div className="col-lg-2">

    <select
      className="form-select rounded-4 py-3"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <option>All Grades</option>
      <option>Grade 6</option>
      <option>Grade 7</option>
      <option>Grade 8</option>
      <option>Grade 9</option>
      <option>Grade 10</option>
      <option>Grade 11</option>
    </select>

  </div>

  {/* Status */}

  <div className="col-lg-3">

    <select
      className="form-select rounded-4 py-3"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <option>All Status</option>
      <option>Active</option>
      <option>Inactive</option>
    </select>

  </div>

</div>

{/* ================= QUIZ TABLE ================= */}

<div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

<div className="card-body p-0">

<table className="table align-middle mb-0">

<thead>

<tr
  style={{
    background: darkMode ? "#495057" : "#f8f9fa",
  }}
>
  <th className="ps-4 py-3">Quiz Title</th>
  <th>Teacher</th>
  <th>Subject</th>
  <th>Grade</th>
  <th>Questions</th>
  <th>Attempts</th>
  <th>Status</th>
  <th className="text-center">Actions</th>
</tr>

</thead>

<tbody>

{filteredQuizzes.map((quiz) => (

<tr
  key={quiz.id}
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

<td className="ps-4 fw-bold">
  {quiz.title}
</td>

<td>
  {quiz.teacher}
</td>

<td>
  {quiz.subject}
</td>

<td>

<span className="badge bg-primary px-3 py-2">
  {quiz.grade}
</span>

</td>

<td className="text-center">
  {quiz.questions}
</td>

<td className="text-center">
  {quiz.attempts}
</td>

<td>

<span
  className={`badge ${
    quiz.status === "Active"
      ? "bg-success"
      : "bg-danger"
  } px-3 py-2`}
>
  {quiz.status}
</span>

</td>

<td className="text-center">

<div className="d-flex justify-content-center gap-2">

<button
  className={`btn rounded-circle ${
    quiz.status === "Active"
      ? "btn-outline-danger"
      : "btn-outline-success"
  }`}
  title={
    quiz.status === "Active"
      ? "Deactivate Quiz"
      : "Activate Quiz"
  }
  onClick={() => {
    const message =
      quiz.status === "Active"
        ? `Deactivate "${quiz.title}"?`
        : `Activate "${quiz.title}"?`;

    if (window.confirm(message)) {
      handleStatus(quiz.id);
    }
  }}
>
  {quiz.status === "Active" ? (
    <XCircleFill />
  ) : (
    <CheckCircleFill />
  )}
</button>
<button
  className="btn btn-outline-primary"
  title="View Quiz"
  onClick={() => navigate("/admin-quiz-details")}
>
  <EyeFill className="me-1" />
  View
</button>

</div>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>
  </div>

</div>

          </div>

        </div>



  );
}

export default AdminQuizzes;
      