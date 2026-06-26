import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CameraVideo,
  People,
  ChatDots,
  TelephoneX,
} from "react-bootstrap-icons";

function StudentOnlineClass() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        background: "#eef2f7",
      }}
    >
      {/* STEP 1 */}
      {step === 1 && (
        <div className="container py-5">

          <div className="card shadow border-0 rounded-4 p-5">

            <h2 className="fw-bold text-center mb-4">
              Join Online Class
            </h2>

            <div className="row">

              <div className="col-md-6">

                <h4>Combined Mathematics</h4>

                <p>
                  <strong>Teacher:</strong> Dinesh Arunashantha
                </p>

                <p>
                  <strong>Grade:</strong> Grade 12
                </p>

                <p>
                  <strong>Date:</strong> 29/03/2026
                </p>

                <p>
                  <strong>Time:</strong> 4:00 PM - 6:00 PM
                </p>

              </div>

              <div className="col-md-6 text-center">

                <CameraVideo
                  size={100}
                  className="text-primary mb-3"
                />

                <h5>
                  You are about to join the live class
                </h5>

              </div>

            </div>

            <div className="text-end mt-4">

              <button
                className="btn btn-secondary me-3"
              >
                Cancel
              </button>

              <button
                className="btn btn-primary"
                onClick={() => setStep(2)}
              >
                Join Class Now
              </button>

            </div>

          </div>

        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >

          <div
            className="card border-0 shadow rounded-4 p-5 text-center"
            style={{ width: "500px" }}
          >

            <CameraVideo
              size={100}
              className="text-primary mb-4"
            />

            <h2>Joining Class...</h2>

            <p className="text-muted">
              Please wait while we connect you.
            </p>

            <div
              className="spinner-border text-primary mt-3"
              role="status"
            ></div>

            <button
              className="btn btn-primary mt-4"
              onClick={() => setStep(3)}
            >
              Continue
            </button>

          </div>

        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div
          style={{
            background: "#111827",
            minHeight: "100vh",
            color: "white",
          }}
        >

          <div className="container-fluid">

            <div className="row">

              {/* Teacher Video */}

              <div className="col-lg-9 p-4">

                <div
                  className="rounded-4 d-flex justify-content-center align-items-center"
                  style={{
                    background: "#1f2937",
                    height: "80vh",
                  }}
                >

                  <div className="text-center">

                    <CameraVideo size={120} />

                    <h2 className="mt-4">
                      Teacher Live Video
                    </h2>

                    <p>
                      Combined Mathematics - Grade 12
                    </p>

                  </div>

                </div>

              </div>

              {/* Participants */}

              <div className="col-lg-3 p-4">

                <div
                  className="rounded-4 p-3"
                  style={{
                    background: "#1f2937",
                    height: "80vh",
                  }}
                >

                  <h4 className="mb-4">
                    <People className="me-2" />
                    Participants
                  </h4>

                  <p>Teacher</p>
                  <p>You</p>
                  <p>Student 01</p>
                  <p>Student 02</p>
                  <p>Student 03</p>

                </div>

              </div>

            </div>

            {/* Bottom Controls */}

            <div className="text-center pb-4">

              <button className="btn btn-secondary me-3">

                <ChatDots className="me-2" />
                Chat

              </button>

              <button
                className="btn btn-danger"
                onClick={() => setStep(4)}
              >

                <TelephoneX className="me-2" />
                Leave Class

              </button>

            </div>

          </div>

        </div>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            minHeight: "100vh",
          }}
        >

          <div
            className="card shadow border-0 rounded-4 p-5 text-center"
            style={{
              width: "700px",
            }}
          >

            <h1 className="text-success mb-4">
              ✓ Class Ended
            </h1>

            <h3>
              Thank you for attending the class
            </h3>

            <p className="text-muted">
              Recording will be available soon.
            </p>

            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/mycourses")}
            >
              Back To My Courses
            </button>

          </div>

        </div>
      )}
    </div>
  );
}

export default StudentOnlineClass;