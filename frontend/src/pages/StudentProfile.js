import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";
import profile from "../assets/profile.png";

import {
  FaBell,
  FaUserCircle,
  FaUserGraduate,
  FaBook,
  FaCreditCard,
  FaChartBar,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaArrowLeft
} from "react-icons/fa";

function StudentProfile() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || {
  name: "Student"
};

  return (

    <div
      className="container-fluid p-0"
      style={{
        background: "#f4f4f4",
        minHeight: "100vh"
      }}
    >

      {/* Top Navbar */}

      <nav
        className="navbar navbar-expand-lg bg-white shadow-sm px-4"
        style={{ height: "80px" }}
      >

        <div className="ms-auto d-flex align-items-center">

          <FaBell
            size={24}
            className="me-4"
            color="#001e80"
          />

          <img
            src={profile}
            alt=""
            className="rounded-circle"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover"
            }}
          />

          <button
            className="btn dropdown-toggle fw-bold ms-3"
            data-bs-toggle="dropdown"
          >
            {user.name}
          </button>

          <ul className="dropdown-menu dropdown-menu-end">

            <li>

              <button
                className="dropdown-item"
                onClick={() => navigate("/studentprofile")}
              >
                My Profile
              </button>

            </li>

            <li>

              <button className="dropdown-item">
                Settings
              </button>

            </li>

            <li>

              <button
                className="dropdown-item text-danger"
                onClick={() => navigate("/")}
              >
                Logout
              </button>

            </li>

          </ul>

        </div>

      </nav>

      {/* Main Content */}

      <div className="row g-0">

        {/* Sidebar */}

        <div
          className="col-lg-3"
          style={{
            background:
              "linear-gradient(to bottom,#002ea7,#00145f)",
            minHeight: "100vh"
          }}
        >

          <div className="text-center py-4">

            <img
              src={logo}
              alt=""
              className="img-fluid"
              style={{
                width: "180px"
              }}
            />

          </div>

          <div className="px-3">

            <button
              className="btn btn-light w-100 text-start mb-3 py-3 fw-bold"
            >
              <FaUserGraduate className="me-3" />
              Teachers
            </button>

            <button
              className="btn btn-light w-100 text-start mb-3 py-3 fw-bold"
            >
              <FaBook className="me-3" />
              My Courses
            </button>

            <button
              className="btn btn-light w-100 text-start mb-3 py-3 fw-bold"
            >
              <FaCreditCard className="me-3" />
              Payment
            </button>

            <button
              className="btn btn-light w-100 text-start mb-3 py-3 fw-bold"
            >
              <FaChartBar className="me-3" />
              Results
            </button>

            <button
              className="btn btn-light w-100 text-start mb-3 py-3 fw-bold"
            >
              <FaClipboardList className="me-3" />
              Material Tracking
            </button>

            <button
              className="btn btn-dark w-100 text-start mb-3 py-3 fw-bold"
            >
              <FaCog className="me-3" />
              Settings
            </button>

            <button
              className="btn btn-danger w-100 py-3 fw-bold mt-5"
            >
              <FaSignOutAlt className="me-3" />
              Logout
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="col-lg-9 p-5">

          <h1
            className="fw-bold"
            style={{
              color: "#00145f",
              fontSize: "55px"
            }}
          >
            My Profile
          </h1>

          <p
            className="text-muted"
            style={{
              fontSize: "22px"
            }}
          >
            Manage your account information
          </p>
                    {/* Profile Section */}

          <div className="row mt-4">

            {/* Left Card */}

            <div className="col-lg-4 mb-4">

              <div className="card border-0 shadow rounded-4">

                <div className="card-body text-center p-5">

                  <img
                    src={profile}
                    alt=""
                    className="rounded-circle img-fluid border border-3 border-primary"
                    style={{
                      width: "170px",
                      height: "170px",
                      objectFit: "cover"
                    }}
                  />

                  <h2
                    className="fw-bold mt-4"
                    style={{
                      color: "#00145f"
                    }}
                  >
                    {user.name}
                  </h2>

                  <p
                    className="text-muted"
                    style={{
                      fontSize: "20px"
                    }}
                  >
                    Student
                  </p>

                  <button className="btn btn-dark w-100 mt-3 py-2">
                    Change Photo
                  </button>

                </div>

              </div>

            </div>

            {/* Right Card */}

            <div className="col-lg-8">

              <div className="card border-0 shadow rounded-4">

                <div className="card-body p-5">

                  <h3
                    className="fw-bold mb-4"
                    style={{
                      color: "#00145f"
                    }}
                  >
                    Personal Information
                  </h3>

                  <div className="row">

                    <div className="col-md-6 mb-4">

                      <label className="fw-bold mb-2">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control rounded-pill p-3"
                        placeholder="Enter full name"
                      />

                    </div>

                    <div className="col-md-6 mb-4">

                      <label className="fw-bold mb-2">
                        Email
                      </label>

                      <input
                        type="email"
                        className="form-control rounded-pill p-3"
                        placeholder="Enter email"
                      />

                    </div>

                    <div className="col-md-6 mb-4">

                      <label className="fw-bold mb-2">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        className="form-control rounded-pill p-3"
                        placeholder="Enter phone number"
                      />

                    </div>

                    <div className="col-md-6 mb-4">

                      <label className="fw-bold mb-2">
                        Grade
                      </label>

                      <input
                        type="text"
                        className="form-control rounded-pill p-3"
                        placeholder="Enter grade"
                      />

                    </div>

                  </div>

                  <button className="btn btn-dark px-5 me-3">
                    Save Changes
                  </button>

                  <button className="btn btn-outline-dark px-5">
                    Cancel
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* Academic Summary */}

          <div className="card border-0 shadow rounded-4 mt-5">

            <div className="card-body p-5">

              <h3
                className="fw-bold mb-5"
                style={{
                  color: "#00145f"
                }}
              >
                Academic Summary
              </h3>

              <div className="row text-center">

                <div className="col-md-4">

                  <h1
                    className="fw-bold"
                    style={{
                      color: "#002ea7",
                      fontSize: "55px"
                    }}
                  >
                    06
                  </h1>

                  <h5>Registered Classes</h5>

                </div>

                <div className="col-md-4">

                  <h1
                    className="fw-bold"
                    style={{
                      color: "#002ea7",
                      fontSize: "55px"
                    }}
                  >
                    92%
                  </h1>

                  <h5>Attendance</h5>

                </div>

                <div className="col-md-4">

                  <h1
                    className="fw-bold"
                    style={{
                      color: "#002ea7",
                      fontSize: "55px"
                    }}
                  >
                    25
                  </h1>

                  <h5>Quizzes Completed</h5>

                </div>

              </div>

            </div>

          </div>
                    {/* Change Password */}

          <div className="card border-0 shadow rounded-4 mt-5">

            <div className="card-body p-5">

              <h3
                className="fw-bold mb-4"
                style={{
                  color: "#00145f"
                }}
              >
                Change Password
              </h3>

              <div className="row">

                <div className="col-md-4 mb-4">

                  <label className="fw-bold mb-2">
                    Current Password
                  </label>

                  <input
                    type="password"
                    className="form-control rounded-pill p-3"
                    placeholder="Current Password"
                  />

                </div>

                <div className="col-md-4 mb-4">

                  <label className="fw-bold mb-2">
                    New Password
                  </label>

                  <input
                    type="password"
                    className="form-control rounded-pill p-3"
                    placeholder="New Password"
                  />

                </div>

                <div className="col-md-4 mb-4">

                  <label className="fw-bold mb-2">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="form-control rounded-pill p-3"
                    placeholder="Confirm Password"
                  />

                </div>

              </div>

              <button
                className="btn btn-dark px-5 py-2 mt-3"
              >
                Update Password
              </button>

            </div>

          </div>

          {/* Back Button */}

          <div className="mt-5 text-end">

            <button
              className="btn btn-outline-dark px-5 py-2"
              onClick={() => navigate("/dashboard")}
            >
              <FaArrowLeft className="me-2" />
              Back
            </button>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div
        className="py-4 mt-5"
        style={{
          background:
            "linear-gradient(to right,#0030a8,#00145f)"
        }}
      >

        <div className="container">

          <div className="row align-items-center text-center text-white">

            <div className="col-lg-4 mb-3">

              <img
                src={logo}
                alt="logo"
                className="img-fluid"
                style={{
                  height: "80px"
                }}
              />

            </div>

            <div className="col-lg-4 mb-3">

              <h5 className="fw-bold">
                Oguru Online Institute
              </h5>

              <p className="mb-0">
                Learn • Grow • Achieve
              </p>

            </div>

            <div className="col-lg-4">

              <button className="btn btn-light rounded-circle me-2">
                <FaBell />
              </button>

              <button className="btn btn-light rounded-circle me-2">
                <FaUserCircle />
              </button>

              <button className="btn btn-light rounded-circle">
                <FaCog />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default StudentProfile;