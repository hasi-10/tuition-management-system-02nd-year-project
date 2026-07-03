import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";


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
import API from "../services/api";

function Teachers() {
  const navigate = useNavigate();






 const { state } = useLocation();

const [teacherData, setTeacherData] = useState(null);

const loadTeacher = async () => {
  try {
    const res = await API.get(`/teachers/${state.teacherId}`);
    setTeacherData(res.data);
  } catch (error) {
    console.error("Error loading teacher:", error);
  }
};


useEffect(() => {
  if (state?.teacherId) {
    loadTeacher();
  }
}, []);


 

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
  src={teacher}
  alt="teacher"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="ms-4">
                   <h2 className="fw-bold mb-1">
  {teacherData?.name}
</h2>

                    <h5 className="text-primary mb-2">
  {teacherData?.subject}
</h5>

                   <h4 className="text-decoration-underline">
  {teacherData?.email}
</h4>

                   <h3>{teacherData?.phone}</h3>
                  </div>
                </div>

                {/* Grade Buttons */}

               


<div className="d-flex flex-wrap gap-3 mb-5">
  {teacherData?.grades?.map((grade, index) => (
    <button
      key={index}
      className="btn btn-primary rounded-pill px-4"
    >
      {grade}
    </button>
  ))}
</div>






                <h2 className="fw-bold mb-4">Weekly Class Schedule</h2>

                {teacherData?.schedule?.map((item, index) => (
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
                          <h4>Rs. {item.fee}</h4>
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
                                  teacher: teacherData?.name,
subject: teacherData?.subject,
                                  grade: item.grade,
                                  amount: item.fee,
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