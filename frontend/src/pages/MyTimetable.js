import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/MyTimetable.css";
import StudentSidebar from "../components/StudentSlidebar";

import {
  Calendar3,
  Clock,
  Person,
  CameraVideo,
  Bell,
} from "react-bootstrap-icons";

function MyTimetable() {
  const [timetable, setTimetable] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [student, setStudent] = useState({
    fullName: "",
    profileImage: "",
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
    loadTimetable();

    const interval = setInterval(() => {
      loadTimetable();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const loadTimetable = async () => {
    try {
      const email = localStorage.getItem("email");
      const res = await axios.get(
        `http://localhost:5000/api/my-timetable/${email}`
      );
      setTimetable(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Status logic
  const getStatus = (item) => {
    const now = new Date();
    const start = new Date(`${item.date} ${item.startTime}`);
    const end = new Date(`${item.date} ${item.endTime}`);

    if (now >= start && now <= end) return "live";
    if (now > end) return "ended";
    return "upcoming";
  };

  const getTimeRemaining = (date, startTime) => {
    const now = new Date();
    const start = new Date(`${date} ${startTime}`);

    const diff = start - now;
    if (diff <= 0) return null;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);

    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    return `${minutes}m`;
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <StudentSidebar />

      {/* Main Content */}
      <div
        className="flex-grow-1"
        style={{
          background: darkMode ? "#2f343a" : "#eef2f7",
          minHeight: "100vh",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        {/* Top Bar */}
        <div
          className="shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
          style={{
            background: darkMode ? "#3a4047" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >
          <h2
            className="fw-bold mb-0"
            style={{
              color: darkMode ? "#ffffff" : "#000000",
            }}
          >
            My Timetable
          </h2>

          <div className="d-flex align-items-center">
            <div className="position-relative me-4">
              <Bell size={28} color={darkMode ? "#ffffff" : "#000000"} />
            </div>
            <div
              className="rounded-circle bg-primary d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
            >
              <span className="text-white fw-bold">
                {student.fullName ? student.fullName.charAt(0).toUpperCase() : "S"}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-fluid py-4">
          <div className="container">
            {timetable.length === 0 ? (
              <div
                className="alert alert-info"
                style={{
                  background: darkMode ? "#3a4047" : "#ffffff",
                  color: darkMode ? "#ffffff" : "#000000",
                  border: darkMode ? "1px solid #495057" : "1px solid #dee2e6",
                }}
              >
                No classes available.
              </div>
            ) : (
              <div className="row">
                {timetable.map((item, index) => {
                  const status = getStatus(item);
                  const timeLeft = getTimeRemaining(item.date, item.startTime);

                  return (
                    <div className="col-lg-6 mb-4" key={index}>
                      <div
                        className="card shadow border-0 rounded-4 h-100"
                        style={{
                          background: darkMode ? "#3a4047" : "#ffffff",
                          color: darkMode ? "#ffffff" : "#000000",
                        }}
                      >
                        <div className="card-body">
                          {/* TITLE + STATUS */}
                          <div className="d-flex justify-content-between align-items-start">
                            <h4
                              className="fw-bold"
                              style={{
                                color: darkMode ? "#4da6ff" : "#0d6efd",
                              }}
                            >
                              {item.subject}
                            </h4>

                            <span
                              className={`badge px-3 py-2 ${
                                status === "live"
                                  ? "bg-danger"
                                  : status === "upcoming"
                                  ? "bg-primary"
                                  : "bg-secondary"
                              }`}
                            >
                              {status === "live"
                                ? "🔴 LIVE"
                                : status === "upcoming"
                                ? "🟡 UPCOMING"
                                : "⚫ ENDED"}
                            </span>
                          </div>

                          {/* TIMER */}
                          {status === "upcoming" && timeLeft && (
                            <div className="text-warning fw-bold mt-2">
                              ⏳ Starts in: {timeLeft}
                            </div>
                          )}

                          <hr
                            style={{
                              borderColor: darkMode ? "#495057" : "#dee2e6",
                            }}
                          />

                          {/* DETAILS */}
                          <p>
                            <Person className="me-2" />
                            <strong>Teacher :</strong> {item.teacher}
                          </p>

                          <p>
                            <Calendar3 className="me-2" />
                            <strong>Day :</strong> {item.day}
                          </p>

                          <p>
                            <Clock className="me-2" />
                            <strong>Time :</strong>{" "}
                            {item.startTime} - {item.endTime}
                          </p>

                          {/* JOIN BUTTON */}
                          <button
                            className="btn btn-primary rounded-pill mt-3"
                            disabled={status !== "live"}
                            onClick={() =>
                              window.open(item.meetingLink, "_blank")
                            }
                          >
                            <CameraVideo className="me-2" />
                            {status === "live"
                              ? "Join Live Class"
                              : "Not Available"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTimetable;