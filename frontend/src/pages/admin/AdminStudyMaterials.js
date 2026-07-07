import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  EyeFill,
  FileEarmarkTextFill,
  CameraVideoFill,
  BoxSeamFill,
  CollectionFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminStudyMaterials() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Dummy Class Resource Data

  const [classes] = useState([

    {
      id: 1,
      className: "Combined Mathematics",
      teacher: "Kamal Silva",
      subject: "Mathematics",
      grade: "Grade 10",
      documents: 8,
      recordings: 12,
      printed: 4,
    },

    {
      id: 2,
      className: "ICT Revision",
      teacher: "Nimal Perera",
      subject: "ICT",
      grade: "Grade 11",
      documents: 6,
      recordings: 9,
      printed: 2,
    },

    {
      id: 3,
      className: "Science Paper Class",
      teacher: "Kasun Fernando",
      subject: "Science",
      grade: "Grade 9",
      documents: 10,
      recordings: 14,
      printed: 5,
    },

  ]);

  const filteredClasses = classes.filter(

    (item) =>

      item.className
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.teacher
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      item.subject
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
            title="Study Materials"
            subtitle="Manage learning resources by class"
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
            {classes.length}
          </h2>

          <small className="text-primary">
            Active Classes
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
          <CollectionFill size={30} color="white" />
        </div>

      </div>

    </div>

  </div>

  {/* Documents */}

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
            Documents
          </h6>

          <h2 className="fw-bold">
            {classes.reduce((sum, item) => sum + item.documents, 0)}
          </h2>

          <small className="text-success">
            PDF & Notes
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
          <FileEarmarkTextFill size={30} color="white" />
        </div>

      </div>

    </div>

  </div>

  {/* Recordings */}

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
            Recordings
          </h6>

          <h2 className="fw-bold">
            {classes.reduce((sum, item) => sum + item.recordings, 0)}
          </h2>

          <small className="text-danger">
            Video Lessons
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
          <CameraVideoFill size={30} color="white" />
        </div>

      </div>

    </div>

  </div>

  {/* Printed Materials */}

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
            Printed Materials
          </h6>

          <h2 className="fw-bold">
            {classes.reduce((sum, item) => sum + item.printed, 0)}
          </h2>

          <small className="text-warning">
            Physical Resources
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
          <BoxSeamFill size={30} color="white" />
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

  <div className="col-lg-3">

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

  <div className="col-lg-3">

    <select
      className="form-select rounded-4 py-3"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <option>All Subjects</option>
      <option>Mathematics</option>
      <option>ICT</option>
      <option>Science</option>
    </select>

  </div>

  {/* Grade */}

  <div className="col-lg-3">

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

</div>

{/* ================= CLASS RESOURCES TABLE ================= */}

<div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-0">

    <div className="table-responsive">

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
            <th className="text-center">Documents</th>
            <th className="text-center">Recordings</th>
            <th className="text-center">Printed</th>
            <th className="text-center">Action</th>
          </tr>

        </thead>

        <tbody>

          {filteredClasses.map((item) => (

            <tr
              key={item.id}
              style={{
                background: darkMode ? "#3a4047" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >

              <td className="ps-4 fw-bold">
                {item.className}
              </td>

              <td>
                {item.teacher}
              </td>

              <td>
                {item.subject}
              </td>

              <td>

                <span className="badge bg-primary px-3 py-2">
                  {item.grade}
                </span>

              </td>

              <td className="text-center">

                <span className="badge bg-success px-3 py-2">
                  {item.documents}
                </span>

              </td>

              <td className="text-center">

                <span className="badge bg-danger px-3 py-2">
                  {item.recordings}
                </span>

              </td>

              <td className="text-center">

                <span className="badge bg-warning text-dark px-3 py-2">
                  {item.printed}
                </span>

              </td>

              <td className="text-center">

                <button
                  className="btn btn-outline-primary"
                  onClick={() =>
                    navigate("/study-material-details")
                  }
                >
                  <EyeFill className="me-1" />
                  View
                </button>

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

    </div>

  );

}

export default AdminStudyMaterials;
     