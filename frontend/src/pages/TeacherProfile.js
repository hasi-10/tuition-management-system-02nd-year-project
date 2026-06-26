import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { olTeachers, alTeachers } from "../data/teachers";

import {
  Bell,
  ChevronDown,
  HouseDoorFill,
  Calendar3,
  CreditCard,
  FileText,
  Folder,
  Gear,
  BoxArrowRight,
  PersonVideo,
  Book,
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import profile from "../assets/profile.png";
import teacher from "../assets/profile.png";
import StudentProfileDropdown from "../components/StudentProfileDropdown";

function Teachers() {
  const navigate = useNavigate();
  const location = useLocation();

  const teacherData = location.state || {
    name: "Teacher Name",
    subject: "Subject",
    image: teacher,
  };

  // Combine all teachers from data file
  const allTeachers = [...olTeachers, ...alTeachers];
  
  // Find the full teacher data based on name
  const selectedTeacher = allTeachers.find(
    (teacher) => teacher.name === teacherData?.name
  );

  // Use selectedTeacher data or fallback to teacherData
  const displayTeacher = selectedTeacher || teacherData;

  const schedules = [
    {
      day: "Monday",
      time: "08:00 - 10:00",
      grade: "Grade 6",
      amount: "Rs.1500.00",
    },
    {
      day: "Tuesday",
      time: "11:00 - 13:00",
      grade: "Grade 9",
      amount: "Rs.1500.00",
    },
    {
      day: "Wednesday",
      time: "14:00 - 16:00",
      grade: "Grade 10",
      amount: "Rs.1500.00",
    },
  ];

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
          className="col-lg-3 col-xl-2 d-flex flex-column justify-content-between"
          style={{
            background: "linear-gradient(to bottom,#001a70,#0033cc)",
            minHeight: "100vh",
          }}
        >
          <div>
            <div className="text-center py-4">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "180px",
                }}
              />
            </div>

            <div className="px-3">
              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/studentdashboard")}
              >
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
                onClick={() => navigate("/timetable")}
              >
                <Calendar3 className="me-3" />
                Timetable
              </button>

              <button className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3">
                <PersonVideo className="me-3" />
                Teachers
              </button>

              <NavLink
                to="/payment"
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <CreditCard className="me-3" />
                Payment
              </NavLink>

              <NavLink
                to="/results"
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <FileText className="me-3" />
                Results
              </NavLink>

              <NavLink
                to="/materialtracking"
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <Folder className="me-3" />
                Material Tracking
              </NavLink>

              <NavLink
                to="/settings"
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <Gear className="me-3" />
                Settings
              </NavLink>
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

        {/* Main Content */}

        <div className="col">
          {/* Top Navbar */}

          <div className="bg-white shadow-sm px-5 py-3 d-flex justify-content-between align-items-center">
            <h2 className="fw-bold mb-0">Teachers</h2>

            <div className="d-flex align-items-center">
              <Bell size={22} className="me-4" />

              <img
                src={profile}
                alt="profile"
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              <div
                className="ms-3"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/studentprofile")}
              >
                <h5 className="mb-0 fw-bold">User</h5>

                <small className="text-muted">Student</small>
              </div>

              <ChevronDown className="ms-3" />
            </div>
          </div>

          {/* Teacher Profile Section */}

          <div className="container-fluid p-4">
            <div className="card border-0 shadow rounded-4">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <img
                    src={displayTeacher.image || teacher}
                    alt="teacher"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="ms-4">
                    <h2 className="fw-bold mb-1">
                      {displayTeacher.name}
                    </h2>

                    <h5 className="text-primary mb-2">
                      {displayTeacher.subject}
                    </h5>

                    <h4 className="text-decoration-underline">
                      {displayTeacher.email}
                    </h4>

                    <h3>{displayTeacher.phone}</h3>
                  </div>
                </div>

                {/* Grade Buttons */}

                <div className="d-flex flex-wrap gap-3 mb-5">
                  <button className="btn btn-primary rounded-pill px-4">
                    Grade 6
                  </button>

                  <button className="btn btn-primary rounded-pill px-4">
                    Grade 7
                  </button>

                  <button className="btn btn-primary rounded-pill px-4">
                    Grade 8
                  </button>

                  <button className="btn btn-primary rounded-pill px-4">
                    Grade 9
                  </button>

                  <button className="btn btn-primary rounded-pill px-4">
                    Grade 10
                  </button>

                  <button className="btn btn-primary rounded-pill px-4">
                    Grade 11
                  </button>
                </div>

                <h2 className="fw-bold mb-4">Weekly Class Schedule</h2>

                {schedules.map((item, index) => (
                  <div
                    key={index}
                    className="card border-0 shadow rounded-4 mb-4"
                  >
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-lg-4">
                          <h3>{item.day}</h3>

                          <h4>{item.time}</h4>
                        </div>

                        <div className="col-lg-2">
                          <h4>{item.grade}</h4>
                        </div>

                        <div className="col-lg-2">
                          <h4>{item.amount}</h4>
                        </div>

                        <div className="col-lg-4 d-flex gap-3 justify-content-lg-end">
                          <button className="btn btn-outline-primary rounded-pill px-4">
                            Payment
                          </button>
                          <button
                            className="btn btn-primary rounded-pill px-4"
                            onClick={() =>
                              navigate("/bank-slip-upload", {
                                state: {
                                  teacher: displayTeacher.name,
                                  subject: displayTeacher.subject,
                                  grade: item.grade,
                                  amount: item.amount,
                                },
                              })
                            }
                          >
                            Upload Slip
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Back Button */}

                <div className="text-end mt-4">
                  <button
                    className="btn btn-outline-secondary rounded-pill px-5"
                    onClick={() => navigate(-1)}
                  >
                    ← Back
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* End Main Content */}
        </div>
      </div>
    </div>
  );
}

export default Teachers;