import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  EyeFill,
  TrashFill,
  CheckCircleFill,
  PeopleFill,
  PersonCheckFill,
  MortarboardFill,
  CreditCardFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";


import maleStudent from "../../assets/maleStudent.png";
import femaleStudent from "../../assets/femaleStudent.png";

function AdminStudents() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Temporary Student Data
const [students, setStudents] = useState([
    {
      id: 1,
      image: femaleStudent,
      name: "Nethmi Perera",
      grade: "Grade 10",
      phone: "0712345678",
      status: "Active",
    },
    {
      id: 2,
      image: maleStudent,
      name: "Kavindu Silva",
      grade: "Grade 8",
      phone: "0779876543",
      status: "Active",
    },
    {
      id: 3,
      image: femaleStudent,
      name: "Hasini Fernando",
      grade: "Grade 11",
      phone: "0754567890",
      status: "Inactive",
    },
  ]);

  const handleStatus = (id) => {
  setStudents(
    students.map((student) =>
      student.id === id
        ? {
            ...student,
            status:
              student.status === "Active"
                ? "Inactive"
                : "Active",
          }
        : student
    )
  );
};

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.grade.toLowerCase().includes(search.toLowerCase())
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
            title="Manage Students"
            subtitle="Manage all registered students"
          />

          <div className="container-fluid p-4">

        {/* ================= SUMMARY CARDS ================= */}

<div className="row g-4 mb-4">

  {/* Total Students */}

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
            Total Students
          </h6>

          <h2 className="fw-bold">325</h2>

          <small className="text-success">
            +15 this month
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
          <PeopleFill size={30} color="white" />
        </div>

      </div>
    </div>

  </div>

  {/* Active Students */}

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
            Active Students
          </h6>

          <h2 className="fw-bold">310</h2>

          <small className="text-success">
            Active Accounts
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
          <PersonCheckFill size={30} color="white" />
        </div>

      </div>
    </div>

  </div>

  {/* Grades */}

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
            Grades
          </h6>

          <h2 className="fw-bold">6</h2>

          <small className="text-primary">
            Grade 6 - 11
          </small>
        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#fd7e14",
          }}
        >
          <MortarboardFill size={30} color="white" />
        </div>

      </div>
    </div>

  </div>

  {/* Pending Payments */}

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
            Pending Payments
          </h6>

          <h2 className="fw-bold">18</h2>

          <small className="text-danger">
            Need Verification
          </small>
        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#dc3545",
          }}
        >
          <CreditCardFill size={30} color="white" />
        </div>

      </div>
    </div>

  </div>

</div>

{/* ================= SEARCH ================= */}

<div className="row mb-4">

  <div className="col-md-12">

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
        className="form-control rounded-4 shadow-sm border-0 ps-5 py-3"
        placeholder="Search by student name or grade..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          background: darkMode ? "#3a4047" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
        }}
      />

    </div>

  </div>

</div>

{/* ================= STUDENTS TABLE CARD ================= */}

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
      <th className="ps-4 py-3">Photo</th>
      <th className="py-3">Student Name</th>
      <th className="py-3">Grade</th>
      <th className="py-3">Phone</th>
      <th className="py-3">Status</th>
      <th className="text-center py-3">Actions</th>
    </tr>
  </thead>

  <tbody>

    {filteredStudents.length === 0 ? (

      <tr>
        <td
          colSpan="6"
          className="text-center py-5"
        >
          No students found.
        </td>
      </tr>

    ) : (

      filteredStudents.map((student) => (

        <tr
          key={student.id}
          style={{
            background: darkMode ? "#3a4047" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >

          {/* Photo */}

          <td className="ps-4">

            <img
              src={student.image}
              alt={student.name}
              className="rounded-circle"
              width="60"
              height="60"
              style={{
                objectFit: "cover",
              }}
            />

          </td>

          {/* Name */}

          <td>

            <h6 className="fw-bold mb-1">
              {student.name}
            </h6>

          </td>

          {/* Grade */}

          <td>

            <span
              className="badge bg-primary px-3 py-2"
            >
              {student.grade}
            </span>

          </td>

          {/* Phone */}

          <td>

            {student.phone}

          </td>

          {/* Status */}

          <td>

            <span
              className={`badge ${
                student.status === "Active"
                  ? "bg-success"
                  : "bg-danger"
              } px-3 py-2`}
            >
              {student.status}
            </span>

          </td>

          {/* Actions */}

          <td className="text-center">

            <div className="d-flex justify-content-center gap-2">

              {/* View */}

              <button
                className="btn btn-outline-primary rounded-circle"
                title="View Student"
                onClick={() =>
                  navigate("/admin-student-profile")
                }
              >
                <EyeFill />
              </button>

              {/* Deactivate */}

<button
  className={`btn rounded-circle ${
    student.status === "Active"
      ? "btn-outline-danger"
      : "btn-outline-success"
  }`}
  title={
    student.status === "Active"
      ? "Deactivate Student"
      : "Activate Student"
  }
  onClick={() => {
    const message =
      student.status === "Active"
        ? `Deactivate ${student.name}?`
        : `Activate ${student.name}?`;

    if (window.confirm(message)) {
      handleStatus(student.id);
    }
  }}
>
  {student.status === "Active" ? (
    <TrashFill />
  ) : (
    <CheckCircleFill />
  )}
</button>

            </div>

          </td>

        </tr>

      ))

    )}

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

export default AdminStudents;
