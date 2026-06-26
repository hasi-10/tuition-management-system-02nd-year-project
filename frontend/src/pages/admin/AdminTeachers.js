import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  PlusCircleFill,
  EyeFill,
  PencilSquare,
  TrashFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

import maleTeacher from "../../assets/maleTeacher.png";
import femaleTeacher from "../../assets/femaleTeacher.png";

function AdminTeachers() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Temporary teacher data
  const [teachers] = useState([
    {
      id: 1,
      image: maleTeacher,
      name: "Kamal Silva",
      subject: "Mathematics",
      grades: "6, 7, 8",
      phone: "0771234567",
    },
    {
      id: 2,
      image: femaleTeacher,
      name: "Nadeesha Fernando",
      subject: "Science",
      grades: "9, 10",
      phone: "0714567890",
    },
    {
      id: 3,
      image: maleTeacher,
      name: "Janith Pannila",
      subject: "ICT",
      grades: "10, 11",
      phone: "0759876543",
    },
    {
      id: 4,
      image: femaleTeacher,
      name: "Samadhi Sathsarani",
      subject: "Japanese",
      grades: "6, 7",
      phone: "0701231234",
    },
  ]);

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(search.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(search.toLowerCase())
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
            title="Manage Teachers"
            subtitle="Manage all teacher accounts"
          />

          <div className="container-fluid p-4">

            {/* ================= SEARCH & ADD BUTTON ================= */}

<div className="row mb-4">

  <div className="col-md-8 mb-3 mb-md-0">

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
        placeholder="Search by teacher name or subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          background: darkMode ? "#3a4047" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
        }}
      />

    </div>

  </div>

  <div className="col-md-4 text-md-end">

    <button
      className="btn btn-primary rounded-4 px-4 py-3 fw-bold shadow"
      onClick={() => navigate("/admin-add-teacher")}
    >
      <PlusCircleFill className="me-2" />
      Add Teacher
    </button>

  </div>

</div>

{/* ================= TEACHERS TABLE CARD ================= */}

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
      <th className="py-3">Name</th>
      <th className="py-3">Subject</th>
      <th className="py-3">Grades</th>
      <th className="py-3">Phone</th>
      <th className="text-center py-3">Actions</th>
    </tr>
  </thead>

  <tbody>

    {filteredTeachers.length === 0 ? (

      <tr>
        <td
          colSpan="6"
          className="text-center py-5"
        >
          No teachers found.
        </td>
      </tr>

    ) : (

      filteredTeachers.map((teacher) => (

        <tr
          key={teacher.id}
          style={{
            background: darkMode ? "#3a4047" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >

          {/* Photo */}

          <td className="ps-4">

            <img
              src={teacher.image}
              alt={teacher.name}
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
              {teacher.name}
            </h6>

          </td>

          {/* Subject */}

          <td>

            <span
              className="badge bg-primary px-3 py-2"
            >
              {teacher.subject}
            </span>

          </td>

          {/* Grades */}

          <td>

            {teacher.grades}

          </td>

          {/* Phone */}

          <td>

            {teacher.phone}

          </td>

          {/* Actions */}

          <td className="text-center">
            <div className="d-flex justify-content-center gap-2">

  {/* View */}
  <button
    className="btn btn-outline-primary rounded-circle"
    title="View Teacher"
    onClick={() => navigate("/admin-teacher-profile")}
  >
    <EyeFill />
  </button>

  {/* Edit */}
  <button
    className="btn btn-outline-warning rounded-circle"
    title="Edit Teacher"
    onClick={() => navigate("/admin-edit-teacher")}
  >
    <PencilSquare />
  </button>

  {/* Delete */}
  <button
    className="btn btn-outline-danger rounded-circle"
    title="Delete Teacher"
    onClick={() => {
      if (window.confirm(`Delete ${teacher.name}?`)) {
        alert("Teacher deleted successfully.");
      }
    }}
  >
    <TrashFill />
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

export default AdminTeachers;

