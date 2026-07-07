import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Bell,
  HouseDoorFill,
  Calendar3,
  CreditCard,
  FileText,
  Folder,
  Gear,
  BoxArrowRight,
  PlayCircle,
  CameraVideo,
  PatchQuestion,
  Book,
  PersonVideo
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import StudentProfileDropdown from "../components/StudentProfileDropdown";
import API from "../services/api";

function MyCourses() {

  const [formData, setFormData] = useState({
    fullName: "",
    profileImage: "",
  });

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    loadCourses();
    loadProfile();
  }, []);

  const loadCourses = async () => {
    try {
      const email = localStorage.getItem("email");

      const response = await axios.get(
        `http://localhost:5000/api/enrollments/${email}`
      );

      setCourses(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const loadProfile = async () => {
    try {
      const email = localStorage.getItem("email");

      const res = await API.get(`/profile/${email}`);
      setFormData(res.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        background: darkMode ? "#2f343a" : "#eef2f7",
        minHeight: "100vh",
      }}
    >

      <div className="row g-0">

        {/* Sidebar */}
        <div className="col-lg-3 col-xl-2 d-flex flex-column justify-content-between"
          style={{ background: "linear-gradient(to bottom,#001a70,#0033cc)", minHeight: "100vh" }}
        >

          <div>
            <div className="text-center py-4">
              <img src={logo} alt="logo" style={{ width: "180px" }} />
            </div>

            <div className="px-3">

              <button className="btn btn-outline-light w-100 mb-3 p-3"
                onClick={() => navigate("/studentdashboard")}
              >
                <HouseDoorFill className="me-2" /> Dashboard
              </button>

              <button className="btn btn-light w-100 mb-3 p-3">
                <Book className="me-2" /> My Courses
              </button>

              <button className="btn btn-outline-light w-100 mb-3 p-3"
                onClick={() => navigate("/my-timetable")}
              >
                <Calendar3 className="me-2" /> Timetable
              </button>

            </div>
          </div>

        </div>

        {/* MAIN */}
        <div className="col">

          {/* TOP BAR */}
          <div className="shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
            style={{ background: darkMode ? "#3a4047" : "#fff" }}
          >
            <h2 className="fw-bold">My Courses</h2>

            <StudentProfileDropdown
              fullName={formData.fullName}
              profileImage={formData.profileImage}
            />
          </div>

          {/* CONTENT */}
          <div className="container-fluid px-4 py-4">

            {courses.length === 0 ? (
              <div className="text-center py-5">
                <h3>No Registered Courses</h3>
              </div>
            ) : (
              courses.map((course, index) => (
                <div key={index} className="card shadow mb-4 rounded-4">

                  {/* HEADER */}
                  <div className="p-3 text-white"
                    style={{ background: "#005eff" }}
                  >
                    <h4>{course.subject}</h4>
                    <small>Grade {course.grade}</small>
                  </div>

                  {/* BODY */}
                  <div className="p-4">

                    <p><b>Teacher:</b> {course.teacher}</p>

                    <p><b>Email:</b> {course.studentEmail}</p>

                    <hr />

                    <div className="d-flex gap-3">

                      <button className="btn btn-outline-primary">
                        <PlayCircle className="me-2" />
                        Recording
                      </button>

                      {/* ✅ FIXED JOIN BUTTON */}
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          if (course.meetingLink) {
                            window.open(course.meetingLink, "_blank");
                          } else {
                            alert("Class link not available yet");
                          }
                        }}
                      >
                        <CameraVideo className="me-2" />
                        Join Class
                      </button>

                      <button className="btn btn-success"
                        onClick={async () => {
                          const res = await axios.get(
                            `http://localhost:5000/api/quizzes/course/${course.subject}/${course.grade}/${course.teacher}`
                          );

                          if (res.data) {
                            navigate("/quiz-instructions", {
                              state: res.data,
                            });
                          } else {
                            alert("No quiz available");
                          }
                        }}
                      >
                        <PatchQuestion className="me-2" />
                        Quiz
                      </button>

                    </div>

                  </div>

                </div>
              ))
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default MyCourses;