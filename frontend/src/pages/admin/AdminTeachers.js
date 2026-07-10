import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Search,
  PlusCircleFill,
  EyeFill,
  PencilSquare,
  TrashFill,
  PersonFill,
  BookFill,
  GridFill,
  TelephoneFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

import maleTeacher from "../../assets/maleTeacher.png";

function AdminTeachers() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedGrade, setSelectedGrade] = useState("All Grades");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/teachers");
      console.log("Teachers:", res.data);
      console.log("First Teacher:", res.data[0]);
      setTeachers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Get unique subjects for filter
  const subjects = ["All Subjects", ...new Set(teachers.map(t => t.subject).filter(Boolean))];
  const grades = ["All Grades", "6", "7", "8", "9", "10", "11", "12", "13"];

  const filteredTeachers = teachers.filter((teacher) => {
    const searchTerm = search.toLowerCase();
    const matchesSearch = (teacher.name || "")
      .toLowerCase()
      .includes(searchTerm) ||
      (teacher.subject || "")
        .toLowerCase()
        .includes(searchTerm);

    const matchesSubject = selectedSubject === "All Subjects" || teacher.subject === selectedSubject;
    const matchesGrade = selectedGrade === "All Grades" || 
      (teacher.grades && teacher.grades.includes(selectedGrade));

    return matchesSearch && matchesSubject && matchesGrade;
  });

  // Calculate stats
  const totalTeachers = teachers.length;
  const activeTeachers = teachers.filter(t => t.status === "Active").length;
  const uniqueSubjects = new Set(teachers.map(t => t.subject).filter(Boolean)).size;
  const allGrades = teachers.flatMap(t => t.grades || []);
  const gradeRange = allGrades.length > 0 ? 
    `${Math.min(...allGrades)}–${Math.max(...allGrades)}` : 
    "N/A";

  const StatCard = ({ icon: Icon, title, value, color, bgColor }) => (
    <div
      className="card border-0 shadow-sm rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body p-3 px-4">
        <div className="d-flex align-items-center gap-3">
          <div
            className="rounded-3 d-flex justify-content-center align-items-center"
            style={{
              width: "44px",
              height: "44px",
              background: bgColor,
              flexShrink: 0,
            }}
          >
            <Icon size={20} color={color} />
          </div>
          <div>
            <h6
              className="mb-0"
              style={{
                color: darkMode ? "#d1d5db" : "#6c757d",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {title}
            </h6>
            <h4 className="fw-bold mb-0">{value}</h4>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <AdminSidebar />
        <div
          className="col-lg-9 col-xl-10"
          style={{
            background: darkMode ? "#2f343a" : "#f0f2f5",
            minHeight: "100vh",
          }}
        >
          <AdminTopNavbar
            title="Manage Teachers"
            subtitle="Manage all teacher accounts"
          />

          <div className="container-fluid p-4">
            {/* ================= STATISTICS CARDS ================= */}
            <div className="row g-3 mb-4">
              <div className="col-md-6 col-xl-3">
                <StatCard
                  icon={PersonFill}
                  title="Total Teachers"
                  value={totalTeachers}
                  color="#0d6efd"
                  bgColor="#e7f1ff"
                />
              </div>
              <div className="col-md-6 col-xl-3">
                <StatCard
                  icon={PersonFill}
                  title="Active"
                  value={activeTeachers}
                  color="#198754"
                  bgColor="#d1e7dd"
                />
              </div>
              <div className="col-md-6 col-xl-3">
                <StatCard
                  icon={BookFill}
                  title="Subjects Covered"
                  value={uniqueSubjects}
                  color="#ffc107"
                  bgColor="#fff3cd"
                />
              </div>
              <div className="col-md-6 col-xl-3">
                <StatCard
                  icon={GridFill}
                  title="Grades Handled"
                  value={gradeRange}
                  color="#dc3545"
                  bgColor="#f8d7da"
                />
              </div>
            </div>

            {/* ================= SEARCH & FILTERS ================= */}
            <div className="row g-3 mb-4">
              <div className="col-lg-5">
                <div className="position-relative">
                  <Search
                    className="position-absolute"
                    style={{
                      top: "50%",
                      left: "14px",
                      transform: "translateY(-50%)",
                      color: "#6c757d",
                      fontSize: "16px",
                    }}
                  />
                  <input
                    type="text"
                    className="form-control rounded-3 border-0 shadow-sm ps-5 py-2"
                    placeholder="Search by teacher name or subject..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{
                      background: darkMode ? "#3a4047" : "#ffffff",
                      color: darkMode ? "#ffffff" : "#000000",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <select
                  className="form-select rounded-3 border-0 shadow-sm py-2"
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  style={{
                    background: darkMode ? "#3a4047" : "#ffffff",
                    color: darkMode ? "#ffffff" : "#000000",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="col-lg-2">
                <select
                  className="form-select rounded-3 border-0 shadow-sm py-2"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  style={{
                    background: darkMode ? "#3a4047" : "#ffffff",
                    color: darkMode ? "#ffffff" : "#000000",
                    fontSize: "14px",
                    cursor: "pointer",
                  }}
                >
                  {grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              <div className="col-lg-2 text-end">
                <button
                  className="btn btn-primary rounded-3 px-4 py-2 fw-bold shadow-sm d-flex align-items-center justify-content-center"
                  style={{ fontSize: "14px", width: "100%" }}
                  onClick={() => navigate("/admin-add-teacher")}
                >
                  <PlusCircleFill className="me-2" size={18} />
                  Add Teacher
                </button>
              </div>
            </div>

            {/* ================= TEACHERS GRID ================= */}
            <div className="row g-4">
              {filteredTeachers.length === 0 ? (
                <div className="col-12">
                  <div className="text-center py-5">
                    <PersonFill size={48} className="text-muted mb-3" />
                    <h5 className="text-muted">No teachers found</h5>
                    <small className="text-muted">Try adjusting your search or filters</small>
                  </div>
                </div>
              ) : (
                filteredTeachers.map((teacher, index) => {
                  // Generate teacher ID
                  const teacherId = `TCH-${String(index + 1).padStart(2, '0')}`;
                  
                  return (
                    <div className="col-lg-6 col-xl-4" key={teacher._id}>
                      <div
                        className="card border-0 shadow-sm rounded-4 h-100"
                        style={{
                          background: darkMode ? "#3a4047" : "#ffffff",
                          color: darkMode ? "#ffffff" : "#000000",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px)";
                          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div className="card-body p-4">
                          {/* Header with Avatar and Name */}
                          <div className="d-flex align-items-start gap-3 mb-3">
                            <img
                              src={
                                teacher.profileImage
                                  ? `http://localhost:5000/uploads/${teacher.profileImage}`
                                  : maleTeacher
                              }
                              alt={teacher.name}
                              className="rounded-circle"
                              width="52"
                              height="52"
                              style={{
                                objectFit: "cover",
                                border: darkMode ? "2px solid #495057" : "2px solid #e9ecef",
                                flexShrink: 0,
                              }}
                            />
                            <div className="flex-grow-1 min-width-0">
                              <h6 className="fw-bold mb-0 text-truncate" style={{ fontSize: "15px" }}>
                                {teacher.name || "Unnamed Teacher"}
                              </h6>
                              <small
                                className="text-muted"
                                style={{ fontSize: "11px" }}
                              >
                                Teacher ID: {teacherId}
                              </small>
                            </div>
                          </div>

                          {/* Subject & Grades */}
                          <div className="mb-3">
                            {teacher.subject ? (
                              <span
                                className="badge bg-primary rounded-pill px-3 py-2 me-1"
                                style={{ fontSize: "11px", fontWeight: 500 }}
                              >
                                {teacher.subject}
                              </span>
                            ) : (
                              <span
                                className="badge bg-secondary rounded-pill px-3 py-2 me-1"
                                style={{ fontSize: "11px", fontWeight: 500 }}
                              >
                                Not Assigned
                              </span>
                            )}
                            
                            {teacher.grades && teacher.grades.length > 0 ? (
                              teacher.grades.map((grade) => (
                                <span
                                  key={grade}
                                  className="badge bg-light text-dark rounded-pill px-3 py-2 me-1"
                                  style={{ 
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    background: darkMode ? "#495057" : "#f8f9fa",
                                    color: darkMode ? "#ffffff" : "#000000",
                                  }}
                                >
                                  Grade {grade}
                                </span>
                              ))
                            ) : (
                              <span
                                className="badge bg-light text-dark rounded-pill px-3 py-2"
                                style={{ 
                                  fontSize: "11px",
                                  fontWeight: 500,
                                  background: darkMode ? "#495057" : "#f8f9fa",
                                  color: darkMode ? "#ffffff" : "#000000",
                                }}
                              >
                                No grades assigned
                              </span>
                            )}
                          </div>

                          {/* Phone */}
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <TelephoneFill
                              size={13}
                              className="text-muted"
                            />
                            <span style={{ fontSize: "13px" }}>
                              {teacher.phone || "No phone"}
                            </span>
                          </div>

                          {/* Action Buttons */}
                          <div className="d-flex gap-2 pt-2" style={{
                            borderTop: darkMode ? "1px solid #495057" : "1px solid #e9ecef"
                          }}>
                            <button
                              className="btn btn-outline-primary btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
                              style={{ fontSize: "12px" }}
                              onClick={() => navigate(`/admin-teacher-profile/${teacher._id}`)}
                            >
                              <EyeFill size={13} />
                              View
                            </button>
                            <button
                              className="btn btn-outline-warning btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
                              style={{ fontSize: "12px" }}
                              onClick={() => navigate(`/admin-edit-teacher/${teacher._id}`)}
                            >
                              <PencilSquare size={13} />
                              Edit
                            </button>
                            <button
                              className="btn btn-outline-danger btn-sm rounded-pill px-3 d-flex align-items-center gap-1"
                              style={{ fontSize: "12px" }}
                              onClick={async () => {
                                if (!window.confirm(`Delete ${teacher.name}?`)) return;
                                try {
                                  await axios.delete(
                                    `http://localhost:5000/api/teachers/${teacher._id}`
                                  );
                                  alert("Teacher deleted successfully!");
                                  loadTeachers();
                                } catch (err) {
                                  console.log(err);
                                  alert("Failed to delete teacher.");
                                }
                              }}
                            >
                              <TrashFill size={13} />
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminTeachers;