import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import {
  PersonFill,
  TelephoneFill,
  EnvelopeFill,
  GeoAltFill,
  CalendarFill,
  CreditCard2FrontFill,
  BookFill,
  CheckCircleFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

import maleTeacher from "../../assets/maleTeacher.png";

function AdminTeacherProfile() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    loadTeacher();
  }, []);

  const loadTeacher = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/teachers/${id}`
      );
      console.log(res.data);
      setTeacher(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  if (!teacher) {
    return (
      <div className="text-center mt-5">
        <h3>Loading Teacher...</h3>
      </div>
    );
  }

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
            title="Teacher Profile"
            subtitle="View teacher information"
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
                  src={
                    teacher.profileImage
                      ? `http://localhost:5000/uploads/${teacher.profileImage}`
                      : maleTeacher
                  }
                  alt={teacher.name}
                  className="rounded-circle shadow"
                  width="160"
                  height="160"
                  style={{
                    objectFit: "cover",
                    border: "5px solid #0d6efd",
                  }}
                />
                <h2 className="fw-bold mt-4 mb-2">
                  {teacher.name}
                </h2>
                <h5
                  style={{
                    color: darkMode ? "#d1d5db" : "#6c757d",
                  }}
                >
                  {teacher.subject} Teacher
                </h5>
                <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
                  <div className="d-flex align-items-center">
                    <EnvelopeFill className="me-2 text-primary" />
                    {teacher.email}
                  </div>
                  <div className="d-flex align-items-center">
                    <TelephoneFill className="me-2 text-success" />
                    {teacher.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= PERSONAL INFORMATION ================= */}
            <div
              className="card border-0 shadow rounded-4"
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
                      {teacher.name}
                    </p>
                  </div>

                  {/* NIC */}
                  <div className="col-md-6 mb-4">
                    <h6
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      <CreditCard2FrontFill className="me-2" />
                      NIC
                    </h6>
                    <p className="fs-5">
                      {teacher.nic}
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
                      {teacher.dob}
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
                      {teacher.phone}
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
                      {teacher.email}
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
                      {teacher.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <br />
            {/* ================= TEACHING INFORMATION ================= */}
            <div
              className="card border-0 shadow rounded-4 mb-4"
              style={{
                background: darkMode ? "#3a4047" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">
                  📚 Teaching Information
                </h4>
                <div className="row">
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
                    <span className="badge bg-primary fs-6 px-3 py-2">
                      {teacher.subject}
                    </span>
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
                    <span className="badge bg-success fs-6 px-3 py-2">
                      <CheckCircleFill className="me-2" />
                      {teacher.status}
                    </span>
                  </div>

                  {/* Grades */}
                  <div className="col-12">
                    <h6
                      className="fw-bold mb-3"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      Grades
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {teacher.grades.map((grade, index) => (
                        <span
                          key={index}
                          className="badge bg-primary px-3 py-2 fs-6"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="d-flex justify-content-end gap-3">
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
                onClick={() => navigate("/adminteachers")}
              >
                ← Back
              </button>

              {/* Edit */}
              <button
                className="btn btn-primary rounded-pill px-5 fw-bold"
                onClick={() =>
                  navigate(`/admin-edit-teacher/${teacher._id}`)
                }
              >
                ✏ Edit Teacher
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTeacherProfile;