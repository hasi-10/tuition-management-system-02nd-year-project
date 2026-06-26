import React, { useState } from "react";
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
  People,
  PatchQuestion,
  PersonCircle,
  GraphUp,
  Clock,
  PlayCircle,
  Eye,
  Film,
  CalendarEvent,
} from "react-bootstrap-icons";

import logo from "../assets/image-removebg-preview.png";
import profile from "../assets/profile.png";

function ClassRecordings() {
  const navigate = useNavigate();

  const [recordings] = useState([
    {
      id: 1,
      teacherName: "Chalanka Karunanayake",
      subject: "Mathematics",
      grade: "Grade 12",
      date: "2026.02.02",
      day: "Sunday",
      startTime: "4pm",
      endTime: "6pm",
      duration: "1h 45m",
      views: 12,
      thumbnail: null,
    },
    {
      id: 2,
      teacherName: "Chalanka Karunanayake",
      subject: "Mathematics",
      grade: "Grade 12",
      date: "2026.02.06",
      day: "Thursday",
      startTime: "3pm",
      endTime: "5pm",
      duration: "1h 40m",
      views: 8,
      thumbnail: null,
    },
    {
      id: 3,
      teacherName: "Rashmika Chathurange",
      subject: "Science",
      grade: "Grade 10",
      date: "2026.02.22",
      day: "Saturday",
      startTime: "4pm",
      endTime: "6pm",
      duration: "1h 50m",
      views: 15,
      thumbnail: null,
    },
    {
      id: 4,
      teacherName: "Rashmika Chathurange",
      subject: "Science",
      grade: "Grade 10",
      date: "2026.03.02",
      day: "Sunday",
      startTime: "4pm",
      endTime: "6pm",
      duration: "1h 55m",
      views: 10,
      thumbnail: null,
    },
    {
      id: 5,
      teacherName: "Chalanka Karunanayake",
      subject: "Mathematics",
      grade: "Grade 12",
      date: "2026.02.02",
      day: "Sunday",
      startTime: "4pm",
      endTime: "6pm",
      duration: "1h 45m",
      views: 6,
      thumbnail: null,
    },
  ]);

  // Stats data
  const stats = [
    {
      icon: <Film size={28} />,
      value: "25",
      label: "Total Recordings",
      subLabel: "All time recordings",
      color: "#3b82f6",
    },
    {
      icon: <GraphUp size={28} />,
      value: "10",
      label: "This Month",
      subLabel: "Recordings uploaded",
      color: "#22c55e",
    },
    {
      icon: <Clock size={28} />,
      value: "18h 30m",
      label: "Total Watch Time",
      subLabel: "Time spent watching",
      color: "#a855f7",
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
                onClick={() => navigate("/teachers")}
              >
                <People className="me-3" />
                Teachers
              </button>

              <button
                className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
              >
                <Film className="me-3" />
                Class Recordings
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
            <div>
              <h2 className="fw-bold mb-0">Class Recordings</h2>
              <small className="text-muted">
                Watch and learn from your class recordings anytime.
              </small>
            </div>

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
              <div className="ms-3">
                <h5 className="mb-0 fw-bold">User</h5>
                <small className="text-muted">Student</small>
              </div>
              <ChevronDown className="ms-3" />
            </div>
          </div>

          {/* Page Content */}
          <div
            className="container-fluid p-4"
            style={{
              background: "#eef2f7",
              minHeight: "calc(100vh - 80px)",
            }}
          >
            {/* Stats Cards */}
            <div className="row mb-4">
              {stats.map((stat, index) => (
                <div key={index} className="col-md-4 mb-3">
                  <div className="card border-0 shadow rounded-4 p-4">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h2 className="fw-bold mb-1">{stat.value}</h2>
                        <p className="fw-bold mb-0">{stat.label}</p>
                        <small className="text-muted">{stat.subLabel}</small>
                      </div>
                      <div
                        style={{
                          background: stat.color,
                          width: "55px",
                          height: "55px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Recordings Section */}
            <div className="card border-0 shadow rounded-4 p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold mb-0">Recent Recordings</h3>
                <button className="btn btn-outline-primary rounded-pill px-4">
                  View All
                </button>
              </div>

              <div className="row">
                {recordings.map((recording) => (
                  <div key={recording.id} className="col-md-6 col-lg-4 mb-4">
                    <div className="card border-0 shadow-sm rounded-4 h-100">
                      <div
                        className="card-img-top rounded-top-4"
                        style={{
                          height: "180px",
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                        }}
                      >
                        <PlayCircle
                          size={64}
                          style={{
                            color: "white",
                            opacity: 0.9,
                            cursor: "pointer",
                          }}
                          onClick={() => alert(`Playing recording: ${recording.subject}`)}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            right: "10px",
                            background: "rgba(0,0,0,0.7)",
                            color: "white",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            fontSize: "12px",
                          }}
                        >
                          <Clock size={12} className="me-1" />
                          {recording.duration}
                        </div>
                      </div>

                      <div className="card-body p-3">
                        <h5 className="fw-bold mb-1">{recording.teacherName}</h5>
                        <p className="text-primary fw-bold mb-2">
                          {recording.subject} Teacher
                        </p>
                        <div className="text-muted small">
                          <div className="d-flex justify-content-between mb-1">
                            <span>
                              <Calendar3 size={12} className="me-1" />
                              {recording.date}
                            </span>
                            <span>
                              <Clock size={12} className="me-1" />
                              {recording.startTime} - {recording.endTime}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>
                              <Eye size={12} className="me-1" />
                              {recording.views} views
                            </span>
                            <span>
                              <span className="badge bg-primary">{recording.grade}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer bg-transparent border-0 pb-3">
                        <button
                          className="btn btn-primary w-100 rounded-pill"
                          onClick={() => alert(`Watching: ${recording.subject}`)}
                        >
                          <PlayCircle className="me-2" />
                          Watch
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back Button */}
            <div className="d-flex justify-content-end mt-4">
              <button
                className="btn btn-outline-secondary rounded-pill px-5"
                onClick={() => navigate("/studentdashboard")}
              >
                ← Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassRecordings;