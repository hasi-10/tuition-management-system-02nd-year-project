import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import StudentSidebar from "../components/StudentSlidebar";

import {
  Bell,
  ChevronDown,
  PersonCircle,
} from "react-bootstrap-icons";

import profile from "../assets/profile.png";
import StudentProfileDropdown from "../components/StudentProfileDropdown";

function Settings() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    grade: "",
    profileImage: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("account");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
      const email = localStorage.getItem("email");
      const res = await API.get(`/profile/${email}`);
      setFormData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleThemeChange = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const navigate = useNavigate();

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
        {/* Top Navbar */}
        <div
          className="shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
          style={{
            background: darkMode ? "#3a4047" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000"
          }}
        >
          <div>
            <h2
              className="fw-bold mb-0"
              style={{
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              Settings
            </h2>
            <small
              style={{
                color: darkMode ? "#d1d5db" : "#6c757d",
              }}
            >
              Manage your account settings
            </small>
          </div>

          <div className="d-flex align-items-center">
            <Bell size={28} className="me-4" color={darkMode ? "#ffffff" : "#000000"} />
            <StudentProfileDropdown
              fullName={formData.fullName}
              profileImage={formData.profileImage}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="container-fluid px-4 py-4">
          {/* Tabs */}
          <div
            className="card border-0 shadow rounded-4 mb-4"
            style={{
              background: darkMode ? "#1e1e1e" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
            }}
          >
            <div className="card-body">
              <div className="d-flex gap-3 flex-wrap">
                <button
                  className={`btn rounded-pill ${
                    activeTab === "account"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("account")}
                >
                  Account
                </button>
                <button
                  className={`btn rounded-pill ${
                    activeTab === "notifications"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  Notifications
                </button>
                <button
                  className={`btn rounded-pill ${
                    activeTab === "preferences"
                      ? "btn-primary"
                      : "btn-outline-primary"
                  }`}
                  onClick={() => setActiveTab("preferences")}
                >
                  Preferences
                </button>
              </div>
            </div>
          </div>

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="card border-0 shadow rounded-4">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Notification Settings</h3>
                <div className="form-check form-switch mb-4">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Email Notifications</label>
                </div>
                <div className="form-check form-switch mb-4">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Quiz Notifications</label>
                </div>
                <div className="form-check form-switch mb-4">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label">Class Reminders</label>
                </div>
                <button className="btn btn-dark rounded-pill px-4">
                  Save Notification Settings
                </button>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <div className="card border-0 shadow rounded-4">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Preferences</h3>
                <div className="mb-4">
                  <label className="fw-bold mb-2">Language</label>
                  <select className="form-select rounded-pill">
                    <option>English</option>
                    <option>Sinhala</option>
                  </select>
                </div>
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Theme</h5>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="darkMode"
                      checked={darkMode}
                      onChange={handleThemeChange}
                    />
                    <label className="form-check-label" htmlFor="darkMode">
                      Dark Mode
                    </label>
                  </div>
                </div>
                <button className="btn btn-dark rounded-pill px-4">
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* Account Tab */}
          {activeTab === "account" && (
            <div className="row">
              {/* Profile Card */}
              <div className="col-12 mb-4">
                <div
                  className="card border-0 shadow rounded-4"
                  style={{
                    background: darkMode ? "#1e1e1e" : "#ffffff",
                    color: darkMode ? "#ffffff" : "#000000",
                  }}
                >
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
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="col-12 mb-4">
                <div
                  className="card border-0 shadow rounded-4"
                  style={{
                    background: darkMode ? "#1e1e1e" : "#ffffff",
                    color: darkMode ? "#ffffff" : "#000000",
                  }}
                >
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
                        <select
                          className="form-select"
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                        >
                          <option value="6">Grade 6</option>
                          <option value="7">Grade 7</option>
                          <option value="8">Grade 8</option>
                          <option value="9">Grade 9</option>
                          <option value="10">Grade 10</option>
                          <option value="11">Grade 11</option>
                          <option value="12">Grade 12</option>
                          <option value="13">Grade 13</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-3">
                      <button
                        className="btn btn-dark rounded-pill me-2"
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

              {/* Change Password */}
              <div className="col-12 mb-4">
                <div
                  className="card border-0 shadow rounded-4"
                  style={{
                    background: darkMode ? "#1e1e1e" : "#ffffff",
                    color: darkMode ? "#ffffff" : "#000000",
                  }}
                >
                  <div className="card-body p-4">
                    <h3 className="fw-bold mb-4">Change Password</h3>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <label className="fw-bold mb-2">Current Password</label>
                        <input
                          type="password"
                          className="form-control rounded-pill"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="fw-bold mb-2">New Password</label>
                        <input
                          type="password"
                          className="form-control rounded-pill"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="col-md-4 mb-3">
                        <label className="fw-bold mb-2">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control rounded-pill"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                    <button className="btn btn-dark rounded-pill px-4">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;