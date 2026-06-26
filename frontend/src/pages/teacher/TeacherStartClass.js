import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CameraVideo,
  Calendar3,
  Clock,
  Book,
} from "react-bootstrap-icons";

function TeacherStartClass() {
  const navigate = useNavigate();

  const [joined, setJoined] = useState(false);

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#eef2f7",
      }}
    >
      {!joined ? (
        <div
          className="card border-0 shadow rounded-4 p-5"
          style={{
            width: "900px",
          }}
        >
          <h2 className="fw-bold text-center mb-4">
            Start Online Class
          </h2>

          <div className="row">

            <div className="col-md-5 text-center">

              <CameraVideo
                size={120}
                className="text-primary mb-4"
              />

              <h5>
                You are about to start your online class
              </h5>

              <p className="text-muted">
                Click the button below to create and join
                the Zoom meeting.
              </p>

            </div>

            <div className="col-md-7">

              <div className="mb-3">
                <Book className="me-2" />
                <strong>Class :</strong> Combined Mathematics
              </div>

              <div className="mb-3">
                <Book className="me-2" />
                <strong>Grade :</strong> Grade 12
              </div>

              <div className="mb-3">
                <Calendar3 className="me-2" />
                <strong>Date :</strong> 29/03/2026
              </div>

              <div className="mb-3">
                <Clock className="me-2" />
                <strong>Time :</strong> 4.00 PM - 6.00 PM
              </div>

              <div className="alert alert-info mt-4">
                A new Zoom meeting will be created for
                this class.
              </div>

            </div>

          </div>

          <div className="text-end mt-4">

            <button
              className="btn btn-secondary me-3"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>

            <button
              className="btn btn-primary"
              onClick={() => setJoined(true)}
            >
              Start & Join Zoom
            </button>

          </div>
        </div>
      ) : (
        <div
          className="card border-0 shadow rounded-4 p-5 text-center"
          style={{
            width: "800px",
          }}
        >
          <h2 className="fw-bold mb-3">
            Joining Zoom Meeting...
          </h2>

          <CameraVideo
            size={100}
            className="text-primary mb-3"
          />

          <h1 className="text-primary fw-bold">
            ZOOM
          </h1>

          <p className="text-muted">
            Redirecting in 3 seconds...
          </p>

          <div className="card mt-4 p-4 text-start">

            <h5 className="fw-bold mb-3">
              Meeting Details
            </h5>

            <p>
              <strong>Meeting Topic:</strong>
              Combined Mathematics - Grade 12
            </p>

            <p>
              <strong>Meeting ID:</strong>
              87551234567
            </p>

            <p>
              <strong>Passcode:</strong>
              123456
            </p>

          </div>

          <div className="mt-4">

            <button
              className="btn btn-primary px-4"
            >
              Join Zoom Meeting Now
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherStartClass;