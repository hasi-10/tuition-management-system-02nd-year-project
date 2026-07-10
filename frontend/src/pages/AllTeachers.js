import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  HouseDoorFill,
  Calendar3,
  CreditCard,
  FileText,
  Folder,
  Gear,
  BoxArrowRight,
  Book,
  PersonVideo
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import profile from "../assets/profile.png";
import maleTeacher from "../assets/maleTeacher.png";
import femaleTeacher from "../assets/femaleTeacher.png";
import StudentSidebar from "../components/StudentSlidebar";
import StudentProfileDropdown from "../components/StudentProfileDropdown";
import API from "../services/api";

function AllTeachers() {
  const [formData, setFormData] = useState({
    fullName: "",
    profileImage: "",
  });

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  const loadProfile = async () => {
    try {
      const email = localStorage.getItem("email");
      const res = await API.get(`/profile/${email}`);
      setFormData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadTeachers = async () => {
    try {
      const res = await API.get("/teachers");
      setTeachers(res.data);
    } catch (error) {
      console.error("Error loading teachers:", error);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      loadProfile();
    }
    loadTeachers();
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh", overflow: "hidden" }}>
      <StudentSidebar />

      <div
        className="flex-grow-1"
        style={{
          background: darkMode ? "#2f343a" : "#eef2f7",
          minHeight: "100vh",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        {/* Navbar */}
        <div
          className="shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
          style={{
            background: darkMode ? "#3a4047" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >
          <h2 className="fw-bold mb-0">All Teachers</h2>

          <div className="d-flex align-items-center h-100">
            <Bell size={28} className="me-4" color={darkMode ? "#ffffff" : "#000000"} />
            <StudentProfileDropdown
              fullName={formData.fullName}
              profileImage={formData.profileImage}
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="container-fluid px-5 py-4">
          <div className="d-flex justify-content-center gap-4 mb-5">
            <button
              className="btn rounded-pill fw-bold px-4 py-2"
              style={{
                backgroundColor: "#0033cc",
                color: "#ffffff",
                border: "none",
                minWidth: "170px"
              }}
            >
              All Teachers
            </button>

            <button
              className="btn fw-bold rounded-pill px-4 py-2"
              style={{
                backgroundColor: "#ffffff",
                color: "#0033cc",
                border: "2px solid #0033cc",
                minWidth: "170px"
              }}
              onClick={() => navigate("/olteachers")}
            >
              O/L Teachers
            </button>

            <button
              className="btn rounded-pill fw-bold px-4 py-2"
              style={{
                backgroundColor: "#ffffff",
                color: "#0033cc",
                border: "2px solid #0033cc",
                minWidth: "170px"
              }}
              onClick={() => navigate("/alteachers")}
            >
              A/L Teachers
            </button>
          </div>

          {/* Teacher Cards */}
          <div className="row">
            {teachers.map((teacher, index) => (
            <div className="col-lg-10 col-xl-8 mx-auto mb-3" key={index}>






<div
  className="card border-0 rounded-4 shadow-sm"
  style={{
    cursor: "pointer",
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    width: "800px",
    height: "240px",
    padding: "20px",
    transition: "0.3s",
    margin: "0 auto",
  }}
  onClick={() =>
    navigate("/teacherprofile", {
      state: {
        teacherId: teacher._id,
      },
    })
  }
>







                  <div className="card-body">
                    <div className="d-flex align-items-center">




<img
  src={maleTeacher}
  alt="Teacher"
  width="170"
  height="170"
  style={{
    objectFit: "cover",
    borderRadius: "20px",
  }}
/>





                      <div className="ms-6">
                       <span
  className="badge rounded-pill mb-2"
  style={{
    backgroundColor: "#e8f0ff",
    color: "#0033cc",
    padding: "6px 12px",
    fontSize: "29px",
    fontWeight: "600",
  }}
>
                          {teacher.subject}
                        </span>

                        <h6
  className="fw-bold mb-0"
  style={{
    fontSize: "30px",
  }}
>
  {teacher.name}
</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllTeachers;