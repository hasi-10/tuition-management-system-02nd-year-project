import React from "react";
import logo from "../assets/image-removebg-preview.png";import {
  HouseDoorFill,
  Book,
  Calendar3,
  CreditCard,
  FileText,
  Folder,
  Gear,
  BoxArrowRight,
  Bell,
  PersonCircle,
} from "react-bootstrap-icons";

function StudentDashboard() {
  return (
    <div className="container-fluid p-0 vh-100">

      <div className="row g-0 h-100">

        {/* ================= SIDEBAR ================= */}

        <div
          className="col-lg-3 col-xl-2 d-flex flex-column justify-content-between"
          style={{
            background: "linear-gradient(180deg,#001a75,#0033cc)",
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

              <button className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3">

                <HouseDoorFill className="me-3" />

                Dashboard

              </button>

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

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="col-lg-9 col-xl-10"
          style={{
            background: "#edf3fb",
            minHeight: "100vh",
          }}
        >

          {/* Navbar */}

          <div
            className="bg-white shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
          >

            <h1 className="fw-bold">

              Dashboard

            </h1>

            <div className="d-flex align-items-center">

              <div className="position-relative me-4">

                <Bell size={28} />

                <span
                  className="badge bg-warning rounded-pill position-absolute top-0 start-100 translate-middle"
                >

                  3

                </span>

              </div>

            

              <div>

                <h5 className="mb-0 fw-bold">

                  Thusara Dilshan

                </h5>

                <small className="text-muted">

                  Student

                </small>

              </div>

            </div>

          </div>

                    {/* ================= WELCOME SECTION ================= */}

          <div className="container-fluid p-4">

            <div
              className="row rounded-4 overflow-hidden shadow"
              style={{
                background:
                  "linear-gradient(135deg,#002c99 0%,#0047ff 100%)",
                minHeight: "250px",
              }}
            >

              {/* Left Side */}

              <div className="col-lg-8 d-flex flex-column justify-content-center p-5 text-white">

                <h1 className="fw-bold mb-3">

                  Welcome Back, Thusara! 👋

                </h1>

                <h4 className="fw-normal mb-4">

                  Stay focused and keep learning.

                </h4>

                <div className="d-flex align-items-center mb-4">

                  <Calendar3 size={24} className="me-3" />

                  <h5 className="mb-0">

                    You have 3 classes today

                  </h5>

                </div>

                <button
                  className="btn btn-light fw-bold px-5 py-3 rounded-4"
                  style={{
                    width: "250px",
                  }}
                >

                  View Timetable →

                </button>

              </div>

              {/* Right Side */}

              <div className="col-lg-4 d-flex justify-content-center align-items-end">

                

              </div>

            </div>

          </div>

          {/* ================= CALENDAR CARD ================= */}

          <div className="container-fluid px-4 pb-4">

            <div className="card border-0 shadow rounded-4">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                  <h2 className="fw-bold">

                    March 2026

                  </h2>

                  <button className="btn btn-outline-secondary rounded-4 px-4">

                    Today ▼

                  </button>

                </div>

                <table className="table table-bordered align-middle text-center">

                  <thead className="table-light">

                    <tr>

                      <th>Sun</th>
                      <th>Mon</th>
                      <th>Tue</th>
                      <th>Wed</th>
                      <th>Thu</th>
                      <th>Fri</th>
                      <th>Sat</th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                      <td>
                        3
                        <div className="badge bg-success mt-2 w-100">
                          G.C.E A/L Econ
                        </div>
                      </td>
                      <td>4</td>
                      <td>
                        5
                        <div className="badge bg-primary mt-2 w-100">
                          G.C.E O/L Econ
                        </div>
                        <div className="badge bg-warning text-dark mt-1 w-100">
                          A/L Econ
                        </div>
                      </td>
                      <td>
                        6
                        <div className="badge bg-success mt-2 w-100">
                          G.C.E O/L Physics
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        8
                        <div className="badge bg-warning text-dark mt-2 w-100">
                          G.C.E A/L Maths
                        </div>
                      </td>
                      <td>9</td>
                      <td>
                        10
                        <div
                          className="badge mt-2 w-100"
                          style={{ background: "#bf4ad8" }}
                        >
                          ICT
                        </div>
                      </td>
                      <td>11</td>
                      <td>12</td>
                      <td>
                        13
                        <div
                          className="badge mt-2 w-100"
                          style={{ background: "#bf4ad8" }}
                        >
                          ICT
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>
                        15
                        <div className="badge bg-primary mt-2 w-100">
                          English
                        </div>
                      </td>
                      <td>16</td>
                      <td>
                        17
                        <div className="badge bg-success mt-2 w-100">
                          Physics
                        </div>
                      </td>
                      <td>18</td>
                      <td>
                        19
                        <div
                          className="badge mt-2 w-100"
                          style={{ background: "#bf4ad8" }}
                        >
                          ICT
                        </div>
                        <div className="badge bg-warning text-dark mt-1 w-100">
                          A/L Maths
                        </div>
                      </td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>
                        22
                        <div className="badge bg-warning text-dark mt-2 w-100">
                          A/L Maths
                        </div>
                      </td>
                      <td>23</td>
                      <td>
                        24
                        <div className="text-center fs-5 mt-2">
                          📅
                        </div>
                      </td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>
                        28
                        <div
                          className="badge mt-2 w-100"
                          style={{ background: "#bf4ad8" }}
                        >
                          ICT
                        </div>
                      </td>
                      <td>29</td>
                      <td>30</td>
                      <td>
                        31
                        <div className="badge bg-success mt-2 w-100">
                          Physics
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;