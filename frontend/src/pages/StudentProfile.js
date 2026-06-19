import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import API from "../services/api";

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
  ChevronDown,
  PersonCircle,
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import profile from "../assets/profile.png";

function StudentProfile() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    grade: "",
    profileImage: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email) {
      loadProfile();
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    console.log(formData);

    try {
      const res = await API.post("/profile", formData);

      alert("Saved successfully");
      console.log(res.data);
    } catch (error) {
      console.log("ERROR:", error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Failed to save profile");
    }
  };

  const handleImageUpload = async () => {
    try {
      const data = new FormData();
      data.append("profileImage", selectedImage);

      const res = await API.post("/profile/upload", data);

      setFormData((prev) => ({
        ...prev,
        profileImage: res.data.image,
      }));

      alert("Photo uploaded successfully!");
    } catch (error) {
      console.log(error);
      alert("Upload failed");
    }
  };

  const loadProfile = async () => {
    try {
      // Replace with logged-in user's email later
      const email = localStorage.getItem("email");

      const res = await API.get(`/profile/${email}`);

      setFormData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
const [student, setStudent] = useState({
  fullName: "",
  profileImage: "",
});


  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "#eef2f7",
        minHeight: "100vh",
      }}
    >
      <div className="row g-0">
        {/* ================= Sidebar ================= */}
        <div
          className="col-lg-3 col-xl-2 d-flex flex-column justify-content-between"
          style={{
            background: "linear-gradient(to bottom,#001a70,#0033cc)",
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
              <NavLink
                to="/studentdashboard"
                className={({ isActive }) =>
                  isActive
                    ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
                    : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                }
                style={{ textDecoration: "none" }}
              >
                <HouseDoorFill className="me-3" />
                Dashboard
              </NavLink>

              <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">

                <Book className="me-3" />

                My Courses

              </button>

              <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
                <Calendar3 className="me-3" />
                Timetable
              </button>

              <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">

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

        {/* ================= Right Content ================= */}
        <div
          className="col"
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* Top Navbar */}
          <div className="bg-white shadow-sm px-5 py-3 d-flex justify-content-between align-items-center">
            <div>
              <h2 className="fw-bold mb-0">My Profile</h2>
              <small className="text-muted">Manage your account information</small>
            </div>

            <div className="d-flex align-items-center">
              <Bell size={24} className="me-4" />

              <img
                src={
                  formData.profileImage
                    ? `http://localhost:5000/uploads/${formData.profileImage}`
                    : profile
                }
                alt="profile"
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #e5e5e5",
                }}
              />

              <div className="ms-3">
                <h6 className="mb-0 fw-bold">{formData.fullName}</h6>
                <small className="text-muted">Student</small>
              </div>

              <ChevronDown className="ms-3" size={20} />
            </div>
          </div>

          {/* Main Content */}
          <div
            className="container-fluid px-4 py-4"
            style={{
              maxWidth: "100%",
            }}
          >
            <div className="row">
              {/* ================= Profile Card ================= */}
              <div className="col-lg-4 mb-4">
                <div className="card border-0 shadow rounded-4">
                  <div className="card-body text-center p-4">
                    <img
                      src={
                        formData.profileImage
                          ? `http://localhost:5000/uploads/${formData.profileImage}`
                          : profile
                      }
                      alt="profile"
                      className="rounded-circle"
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "cover",
                      }}
                    />

                    <h2>{formData.fullName}</h2>
                    <p className="text-muted mb-4">Student</p>

                    <>
                      <input
                        type="file"
                        className="form-control mb-3"
                        accept="image/*"
                        onChange={(e) => setSelectedImage(e.target.files[0])}
                      />

                      <button
                        className="btn btn-dark w-100 fw-bold"
                        onClick={handleImageUpload}
                      >
                        Upload Photo
                      </button>
                    </>
                  </div>
                </div>
              </div>

              {/* ================= Personal Information ================= */}
              <div className="col-lg-8 mb-4">
                <div className="card border-0 shadow rounded-4">
                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-4">Personal Information</h3>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="fw-bold mb-2">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="form-control rounded-pill"
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label className="fw-bold mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control rounded-pill"
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label className="fw-bold mb-2">Phone Number</label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control rounded-pill"
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label className="fw-bold mb-2">Grade</label>
                        <input
                          type="text"
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          className="form-control rounded-pill"
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <button
                        className="btn btn-dark rounded-pill"
                        onClick={handleSave}
                      >
                        Save Changes
                      </button>

                      <button className="btn btn-outline-dark px-4 fw-bold rounded-pill">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= Academic Summary ================= */}
            <div className="card border-0 shadow rounded-4 mb-4">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Academic Summary</h3>

                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <div className="card bg-primary text-white border-0 rounded-4">
                      <div className="card-body">
                        <h1 className="fw-bold">12</h1>
                        <p className="mb-0">Registered Classes</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="card bg-success text-white border-0 rounded-4">
                      <div className="card-body">
                        <h1 className="fw-bold">96%</h1>
                        <p className="mb-0">Attendance</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="card bg-warning border-0 rounded-4">
                      <div className="card-body">
                        <h1 className="fw-bold">28</h1>
                        <p className="mb-0">Quizzes Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;