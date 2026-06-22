import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

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
  PlayCircle,
  CameraVideo,
  PatchQuestion,
  CalendarEvent,
  Book,
  PersonVideo
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import profile from "../assets/profile.png";

function MyCourses() {

  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  useEffect(() => {

    loadCourses();

  }, []);

  const loadCourses = async () => {

    try {

      const email = localStorage.getItem("email");

      const response = await axios.get(
        `http://localhost:5000/api/payment/${email}`
      );

      setCourses(response.data);

    } catch (error) {

      console.log(error);

    }

  };

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
  className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
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

<button
  className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
onClick={() => navigate("/allteachers")}
>
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

            <h2 className="fw-bold mb-0">

              My Courses

            </h2>

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

  <h5 className="mb-0 fw-bold">
    Thusara Dilshan
  </h5>

  <small className="text-muted">
    Student
  </small>

</div>

              <ChevronDown className="ms-3" />

            </div>

          </div>

          <div className="text-end p-4">

            <button className="btn btn-light shadow rounded-pill px-4 py-2 fw-bold">

              Upload Pdf

            </button>

          </div>

          <div className="container-fluid px-4">

            {courses.length === 0 ? (

              <div className="text-center py-5">

                <h3>No Registered Courses</h3>

                <p className="text-muted">

                  Complete a payment to see your courses.

                </p>

              </div>

            ) : (

              courses.map((course, index) => (

            <div
  key={index}
  className="card border-0 shadow-lg rounded-4 mb-4 overflow-hidden"
>

  {/* Header */}

  <div
    className="d-flex justify-content-between align-items-center px-4 py-3"
    style={{
      background: "linear-gradient(90deg,#0033cc,#005eff)",
      color: "white",
    }}
  >

    <div>

      <h3 className="fw-bold mb-1">

        📚 {course.subject}

      </h3>

      <small>

        Grade {course.grade}

      </small>

    </div>

    <span className="badge bg-success px-3 py-2 rounded-pill">

      Paid

    </span>

  </div>

  {/* Body */}

  <div className="p-4">

    <div className="row text-center text-md-start">

      <div className="col-md-6 mb-3">

        <h6 className="text-muted">

          👨‍🏫 Teacher

        </h6>

        <h5 className="fw-bold">

          {course.teacher}

        </h5>

      </div>

      <div className="col-md-6 mb-3">

        <h6 className="text-muted">

          📧 Email

        </h6>

        <h6>

          {course.email}

        </h6>

      </div>

    </div>

    <hr />

    <div className="d-flex justify-content-center gap-3 flex-wrap">

      <button className="btn btn-outline-primary rounded-pill px-4">

        <PlayCircle className="me-2" />

        Recording

      </button>

      <button className="btn btn-primary rounded-pill px-4">

        <CameraVideo className="me-2" />

        Join Online Class

      </button>
<button
  className="btn btn-outline-success rounded-pill px-4"
onClick={async () => {

  try {

    const res = await axios.get(
      `http://localhost:5000/api/quizzes/course/${course.subject}/${course.grade}/${course.teacher}`
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

            <div className="text-end py-4">

             

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default MyCourses;
                  