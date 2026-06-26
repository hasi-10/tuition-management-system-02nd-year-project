import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  PersonFill,
  TelephoneFill,
  EnvelopeFill,
  GeoAltFill,
  CalendarFill,
  MortarboardFill,
  BookFill,
  CheckCircleFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

import femaleTeacher from "../../assets/femaleTeacher.png";

function AdminStudentProfile() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Temporary student data
  const student = {
    image: femaleTeacher,
    fullName: "Nethmi Perera",
    grade: "Grade 10",
    dob: "2009-05-12",
    phone: "0712345678",
    parentPhone: "0779876543",
    email: "nethmi@gmail.com",
    address: "Kandy",
    subjects: ["Mathematics", "Science", "ICT"],
    attendance: "95%",
    paymentStatus: "Paid",
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
            title="Student Profile"
            subtitle="View student information"
          />

          <div className="container-fluid p-4">

            {/* ================= PROFILE HEADER ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body text-center py-5">

    <img
      src={student.image}
      alt={student.fullName}
      className="rounded-circle shadow"
      width="160"
      height="160"
      style={{
        objectFit: "cover",
        border: "5px solid #0d6efd",
      }}
    />

    <h2 className="fw-bold mt-4 mb-2">
      {student.fullName}
    </h2>

    <h5
      style={{
        color: darkMode ? "#d1d5db" : "#6c757d",
      }}
    >
      {student.grade}
    </h5>

    <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">

      <div className="d-flex align-items-center">
        <EnvelopeFill className="me-2 text-primary" />
        {student.email}
      </div>

      <div className="d-flex align-items-center">
        <TelephoneFill className="me-2 text-success" />
        {student.phone}
      </div>

    </div>

  </div>
</div>

{/* ================= PERSONAL INFORMATION ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      👤 Personal Information
    </h4>

    <div className="row">

      {/* Full Name */}

      <div className="col-md-6 mb-4">
        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <PersonFill className="me-2" />
          Full Name
        </h6>

        <p className="fs-5">
          {student.fullName}
        </p>
      </div>

      {/* Date of Birth */}

      <div className="col-md-6 mb-4">
        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <CalendarFill className="me-2" />
          Date of Birth
        </h6>

        <p className="fs-5">
          {student.dob}
        </p>
      </div>

      {/* Phone */}

      <div className="col-md-6 mb-4">
        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <TelephoneFill className="me-2" />
          Phone Number
        </h6>

        <p className="fs-5">
          {student.phone}
        </p>
      </div>

      
      {/* Email */}

      <div className="col-md-6 mb-4">
        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <EnvelopeFill className="me-2" />
          Email Address
        </h6>

        <p className="fs-5">
          {student.email}
        </p>
      </div>

      {/* Address */}

      <div className="col-md-6 mb-4">
        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <GeoAltFill className="me-2" />
          Address
        </h6>

        <p className="fs-5">
          {student.address}
        </p>
      </div>

    </div>

  </div>

</div>

<br />
{/* ================= ACADEMIC INFORMATION ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      📚 Academic Information
    </h4>

    <div className="row">

      {/* Grade */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <MortarboardFill className="me-2" />
          Grade
        </h6>

        <span className="badge bg-primary fs-6 px-3 py-2">
          {student.grade}
        </span>

      </div>

      {/* Payment Status */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Payment Status
        </h6>

        <span
          className={`badge ${
            student.paymentStatus === "Paid"
              ? "bg-success"
              : "bg-danger"
          } fs-6 px-3 py-2`}
        >
          <CheckCircleFill className="me-2" />
          {student.paymentStatus}
        </span>

      </div>

      {/* Subjects */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold mb-3"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <BookFill className="me-2" />
          Enrolled Subjects
        </h6>

        <div className="d-flex flex-wrap gap-2">

          {student.subjects.map((subject, index) => (

            <span
              key={index}
              className="badge bg-primary px-3 py-2 fs-6"
            >
              {subject}
            </span>

          ))}

        </div>

      </div>

      {/* Attendance */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Attendance
        </h6>

        <h3 className="text-success fw-bold">
          {student.attendance}
        </h3>

      </div>

    </div>

  </div>

</div>

{/* ================= BACK BUTTON ================= */}

<div className="d-flex justify-content-end">

  <button
    className="fw-bold rounded-pill border-0"
    style={{
      fontSize: "16px",
      padding: "10px 30px",
      minWidth: "140px",
      background: darkMode ? "#6c757d" : "#212529",
      color: "#ffffff",
    }}
    onClick={() => navigate("/adminstudents")}
  >
    ← Back
  </button>

</div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminStudentProfile;
      