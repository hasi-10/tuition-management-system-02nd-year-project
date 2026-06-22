import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import API from "../services/api";
import "../Styles/Calendar.css";

import React from "react";
import {
  HouseDoorFill,
  Book,
  Calendar3,
  CreditCard,
  FileText,
  Folder,
  Gear,
  BoxArrowRight,
  Bell,
  PersonVideo,
  PersonCircle
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";

function StudentDashboard() {

  


 


  // ✅ FIXED: Added navigate hook
  const navigate = useNavigate();
  const [student, setStudent] = useState({
  fullName: "",
  profileImage: "",
});

  const today = new Date();

  const monthYear = today.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const [date, setDate] = useState(new Date());
  useEffect(() => {
  loadProfile();
}, []);

const loadProfile = async () => {
  try {
    const email = localStorage.getItem("email");

    const res = await API.get(`/profile/${email}`);

    setStudent(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

  // Format today's date for display
  const todayDate = today.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="container-fluid p-0 vh-100">
      <div className="row g-0 h-100">
        {/* ================= SIDEBAR ================= */}
        <div
          className="col-lg-3 col-xl-2 d-flex flex-column justify-content-between"
          style={{
            background: "linear-gradient(180deg,#001a75,#0033cc)",
            minHeight: "100vh",
          }}
        >
          <div>
            {/* Logo */}
            <div className="text-center py-4">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "180px",
                }}
              />
            </div>

            {/* Menu */}
            <div className="px-3">
              <button className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3">
                <HouseDoorFill className="me-3" />
                Dashboard
              </button>

<button
  className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  onClick={() => navigate("/mycourses")}
>
  <Book className="me-3" />
  My Courses
</button>

              <button
  className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  onClick={() => navigate("/mycourses")}
>
  <Book className="me-3" />
  My Courses
</button>
<button
  className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  onClick={() => navigate("/payment-options")}
>
  <CreditCard className="me-3" />
  Payment
</button>

              <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
                <FileText className="me-3" />
                Results
              </button>

              <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
                <Folder className="me-3" />
                Material Tracking
              </button>

              <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
                <Gear className="me-3" />
                Settings
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="p-3">
            <button className="btn btn-light w-100 rounded-4 fw-bold p-3">
              <BoxArrowRight className="me-2" />
              Logout
            </button>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div
          className="col-lg-9 col-xl-10"
          style={{
            background: "#edf3fb",
            minHeight: "100vh",
          }}
        >
          {/* Navbar */}
          <div className="bg-white shadow-sm px-5 py-3 d-flex justify-content-between align-items-center">
            <h1 className="fw-bold">Dashboard</h1>

            <div className="d-flex align-items-center">
              <div className="position-relative me-4">
                <Bell size={28} />
                <span className="badge bg-warning rounded-pill position-absolute top-0 start-100 translate-middle">
                  3
                </span>
              </div>

              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/studentprofile")}
              >
                <h5 className="mb-0 fw-bold">
  {student.fullName || "Student"}
</h5>
                <small className="text-muted">Student</small>
              </div>
            </div>
          </div>

          {/* ================= WELCOME SECTION ================= */}
          <div className="container-fluid p-4">
            <div
              className="row rounded-4 overflow-hidden shadow"
              style={{
                background: "linear-gradient(135deg,#002c99 0%,#0047ff 100%)",
                minHeight: "250px",
              }}
            >
              {/* Left Side */}
              <div className="col-lg-8 d-flex flex-column justify-content-center p-5 text-white">
                <h1 className="fw-bold mb-3">
  Welcome Back, {student.fullName || "Student"}! 👋
</h1>
                <h4 className="fw-normal mb-4">Stay focused and keep learning.</h4>
                <div className="d-flex align-items-center mb-4">
                  <Calendar3 size={24} className="me-3" />
                  <h5 className="mb-0">You have 3 classes today</h5>
                </div>
                <button
                  className="btn btn-light fw-bold px-5 py-3 rounded-4"
                  style={{
                    width: "250px",
                  }}
                >
                  View Timetable →
                </button>
              </div>

              {/* Right Side */}
              <div className="col-lg-4 d-flex justify-content-center align-items-end"></div>
            </div>
          </div>

          {/* ================= CALENDAR CARD ================= */}
          <div className="container-fluid px-4 pb-4">
            <div className="card border-0 shadow rounded-4">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="fw-bold">{monthYear}</h2>
                  {/* ✅ Professional date display */}
                  <button className="btn btn-outline-secondary rounded-4 px-4">
                    📅 Today: {todayDate}
                  </button>
                </div>

                <div className="d-flex justify-content-center">
                  <Calendar
                    value={date}
                    onChange={setDate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;