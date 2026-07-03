import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  EyeFill,
  CalendarEventFill,
  PeopleFill,
  CheckCircleFill,
  GraphUp,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminClassAttendance() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Dummy Attendance Sessions

  const [sessions] = useState([
    {
      id: 1,
      className: "Combined Mathematics",
      teacher: "Kamal Silva",
      subject: "Mathematics",
      grade: "Grade 10",
      date: "25 June 2026",
      students: 32,
      present: 28,
    },
    {
      id: 2,
      className: "ICT Revision",
      teacher: "Nimal Perera",
      subject: "ICT",
      grade: "Grade 11",
      date: "26 June 2026",
      students: 25,
      present: 23,
    },
    {
      id: 3,
      className: "Science Paper Class",
      teacher: "Kasun Fernando",
      subject: "Science",
      grade: "Grade 9",
      date: "28 June 2026",
      students: 30,
      present: 27,
    },
  ]);

  const filteredSessions = sessions.filter(
    (session) =>
      session.className
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      session.teacher
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      session.subject
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
            title="Class Attendance"
            subtitle="Monitor attendance for each class session"
          />

          <div className="container-fluid p-4">
            {/* ================= SUMMARY CARDS ================= */}

<div className="row g-4 mb-4">

  {/* Total Classes */}

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
            Total Classes
          </h6>

          <h2 className="fw-bold">
            156
          </h2>

          <small className="text-primary">
            Conducted classes
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
          <CalendarEventFill
            size={30}
            color="white"
          />
        </div>

      </div>

    </div>

  </div>

  {/* Attendance Records */}

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
            Attendance Records
          </h6>

          <h2 className="fw-bold">
            4,820
          </h2>

          <small className="text-success">
            Student records
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
          <PeopleFill
            size={30}
            color="white"
          />
        </div>

      </div>

    </div>

  </div>

  {/* Average Attendance */}

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
            Average Attendance
          </h6>

          <h2 className="fw-bold">
            88%
          </h2>

          <small className="text-success">
            Overall attendance
          </small>

        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#20c997",
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

  {/* Monthly Classes */}

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
            This Month
          </h6>

          <h2 className="fw-bold">
            24
          </h2>

          <small className="text-warning">
            Classes conducted
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
          <GraphUp
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
        placeholder="Search class..."
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
      <option>Grade 9</option>
      <option>Grade 10</option>
      <option>Grade 11</option>
    </select>

  </div>

  {/* Month */}

  <div className="col-lg-3">

    <select
      className="form-select rounded-4 py-3"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <option>All Months</option>
      <option>June 2026</option>
      <option>July 2026</option>
      <option>August 2026</option>
    </select>

  </div>

</div>

{/* ================= ATTENDANCE TABLE ================= */}

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
          <th className="ps-4 py-3">Class</th>
          <th>Teacher</th>
          <th>Subject</th>
          <th>Grade</th>
          <th>Date</th>
          <th className="text-center">Students</th>
          <th className="text-center">Attendance</th>
          <th className="text-center">Rate</th>
          <th className="text-center">Action</th>
        </tr>

      </thead>

      <tbody>

        {filteredSessions.map((session) => {

          const rate = (
            (session.present / session.students) *
            100
          ).toFixed(1);

          return (

            <tr
              key={session.id}
              style={{
                background: darkMode ? "#3a4047" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >

              <td className="ps-4 fw-bold">
                {session.className}
              </td>

              <td>{session.teacher}</td>

              <td>{session.subject}</td>

              <td>
                <span className="badge bg-primary px-3 py-2">
                  {session.grade}
                </span>
              </td>

              <td>{session.date}</td>

              <td className="text-center">
                {session.students}
              </td>

              <td className="text-center fw-bold">
                {session.present} / {session.students}
              </td>

              <td className="text-center">

                <span
                  className={`badge ${
                    rate >= 85
                      ? "bg-success"
                      : rate >= 70
                      ? "bg-warning text-dark"
                      : "bg-danger"
                  } px-3 py-2`}
                >
                  {rate}%
                </span>

              </td>

              <td className="text-center">

                <button
                  className="btn btn-outline-primary"
                  onClick={() =>
                    navigate("/admin-attendance-details")
                  }
                >
                  <EyeFill className="me-1" />
                  View
                </button>

              </td>

            </tr>

          );

        })}

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

export default AdminClassAttendance;
    