import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/MyTimetable.css";

import {
  Calendar3,
  Clock,
  Person,
  CameraVideo,
} from "react-bootstrap-icons";

function MyTimetable() {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
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

  // 🔥 FIXED STATUS LOGIC (VERY IMPORTANT)
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
    <div
      className="container-fluid py-4"
      style={{ background: "#eef2f7", minHeight: "100vh" }}
    >
      <div className="container">
        <h2 className="fw-bold mb-4">My Timetable</h2>

        {timetable.length === 0 ? (
          <div className="alert alert-info">No classes available.</div>
        ) : (
          <div className="row">
            {timetable.map((item, index) => {
              const status = getStatus(item);
              const timeLeft = getTimeRemaining(item.date, item.startTime);

              return (
                <div className="col-lg-6 mb-4" key={index}>
                  <div className="card shadow border-0 rounded-4 h-100">
                    <div className="card-body">

                      {/* TITLE + STATUS */}
                      <div className="d-flex justify-content-between align-items-start">
                        <h4 className="fw-bold text-primary">
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

                      <hr />

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
  );
}

export default MyTimetable;