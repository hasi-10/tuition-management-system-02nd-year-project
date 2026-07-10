import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Bell,
  PlayCircle,
  CameraVideo,
  PatchQuestion,
} from "react-bootstrap-icons";

import StudentProfileDropdown from "../components/StudentProfileDropdown";
import StudentSidebar from "../components/StudentSlidebar";
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
    <div className="d-flex vh-100" style={{ overflow: "hidden" }}>
      {/* Sidebar */}
      <StudentSidebar />




      

      {/* Main Content */}
      <div
        className="flex-grow-1"
        style={{
          background: darkMode ? "#2f343a" : "#eef2f7",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        {/* TOP BAR */}
        <div
          className="shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
          style={{
            background: darkMode ? "#3a4047" : "#fff",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >
          <h2 className="fw-bold" style={{ color: darkMode ? "#ffffff" : "#000000" }}>
            My Courses
          </h2>

          <div className="d-flex align-items-center">
            <div className="position-relative me-4">
              <Bell size={28} color={darkMode ? "#ffffff" : "#000000"} />
            </div>
            <StudentProfileDropdown
              fullName={formData.fullName}
              profileImage={formData.profileImage}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="container-fluid px-4 py-4">
          {courses.length === 0 ? (
            <div className="text-center py-5">
              <h3 style={{ color: darkMode ? "#ffffff" : "#000000" }}>
                No Registered Courses
              </h3>
            </div>
          ) : (
            courses.map((course, index) => (
              <div
                key={index}
                className="card shadow mb-4 rounded-4"
                style={{
                  background: darkMode ? "#3a4047" : "#ffffff",
                  color: darkMode ? "#ffffff" : "#000000",
                }}
              >
                {/* HEADER */}
                <div
                  className="p-3 text-white"
                  style={{ background: "#005eff" }}
                >
                  <h4>{course.subject}</h4>
                  <small>Grade {course.grade}</small>
                </div>

                {/* BODY */}
                <div className="p-4">
                  <div className="row text-center text-md-start">
                    <div className="col-md-6 mb-3">
                      <h6
                        style={{
                          color: darkMode ? "#d1d5db" : "#6c757d",
                        }}
                      >
                        👨‍🏫 Teacher
                      </h6>
                      <h5 className="fw-bold">{course.teacher}</h5>
                    </div>

                    <div className="col-md-6 mb-3">
                      <h6
                        style={{
                          color: darkMode ? "#d1d5db" : "#6c757d",
                        }}
                      >
                        📧 Email
                      </h6>
                      <h6>{course.studentEmail}</h6>
                    </div>
                  </div>

                  <hr
                    style={{
                      borderColor: darkMode ? "#495057" : "#dee2e6",
                    }}
                  />

                  <div className="d-flex gap-3 flex-wrap">
                    <button className="btn btn-outline-primary">
                      <PlayCircle className="me-2" />
                      Recording
                    </button>

                    <button
                      className="btn btn-primary rounded-pill px-4"
                      onClick={() => navigate("/student-online-class")}
                    >
                      <CameraVideo className="me-2" />
                      Join Online Class
                    </button>

                    <button
                      className="btn btn-success rounded-pill px-4"
                      onClick={async () => {
                        try {
                          const email = localStorage.getItem("email");
                          const res = await axios.get(
                            `http://localhost:5000/api/quizzes/student/${course._id}/${email}`
                          );

                          if (!res.data) {
                            alert("No quiz available yet");
                            return;
                          }

                          navigate("/quiz-instructions", {
                            state: res.data,
                          });
                        } catch (err) {
                          console.log(err);
                          alert("No quiz available yet");
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
  );
}

export default MyCourses;