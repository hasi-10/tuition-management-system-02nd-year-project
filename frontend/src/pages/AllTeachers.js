

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  Book,
  PersonVideo
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import profile from "../assets/profile.png";
import maleTeacher from "../assets/maleTeacher.png";
import femaleTeacher from "../assets/femaleTeacher.png";
import StudentProfileDropdown from "../components/StudentProfileDropdown";
import API from "../services/api";

function AllTeachers() {

const [formData, setFormData] = useState({
  fullName: "",
  profileImage: "",
});

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

 


 const [teachers, setTeachers] = useState([]);

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
<div
  className="container-fluid p-0"
  style={{
    background: darkMode ? "#2f343a" : "#eef2f7",
    minHeight: "100vh",
  }}
>
      <div className="row g-0">

        {/* Sidebar */}

        <div
          className="col-lg-3 col-xl-2 d-flex flex-column justify-content-between"
          style={{
            background: "linear-gradient(to bottom,#001a70,#0033cc)",
            minHeight: "100vh"
          }}
        >
          <div>

            <div className="text-center py-4">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "180px"
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
<button
  className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  onClick={() => navigate("/payment-options")}
>
  <CreditCard className="me-3" />
  Payment
</button>

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

<button
  className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  onClick={() => navigate("/settings")}
>
  <Gear className="me-3" />
  Settings
</button>

            </div>

          </div>

          <div className="p-3">
            <button className="btn btn-light w-100 rounded-4 fw-bold p-3">
              <BoxArrowRight className="me-2" />
              Logout
            </button>
          </div>

        </div>

        {/* Main Content */}

        <div className="col">

          {/* Navbar */}
<div
  className="shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

            <h2 className="fw-bold mb-0">
              All Teachers
            </h2>

            <div className="d-flex align-items-center">

              <Bell size={28} className="me-4" />
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

                <div className="col-lg-6 mb-4" key={index}>
<div
  className="card border-0 rounded-4"
  style={{ cursor: "pointer" }}



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
  width="70"
  height="70"
/>

                        <div className="ms-4">

<span
  className="badge rounded-pill fs-6 mb-2"
  style={{
    backgroundColor: "#e8f0ff",
    color: "#0033cc",
    padding: "8px 15px"
  }}
>
  {teacher.subject}
</span>

                          <h6 className="fw-bold mb-0">
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
    </div>
  );
}

export default AllTeachers;