import React from "react";
import {
  House,
  Calendar3,
  CreditCard,
  BarChart,
  Folder,
  Person,
  Gear,
  BoxArrowRight,
  Bell,
  ChevronDown
} from "react-bootstrap-icons";

function StudentDashboard() {
  return (
    <div className="container-fluid p-0">

      <div className="row g-0 vh-100">

        {/* ================= SIDEBAR ================= */}

        <div
          className="col-md-2 d-flex flex-column justify-content-between p-4"
          style={{
            background: "linear-gradient(to bottom,#021B79,#0b4bdb)",
            color: "white"
          }}
        >
          <div>

            <div className="text-center mb-5">

              <img
                src="/logo.png"
                alt="logo"
                width="90"
              />

              <h4 className="fw-bold mt-2">
                O'Guru
              </h4>

            </div>

            <div
  className="d-flex align-items-center mb-4 px-3 py-3"
  style={{
    background: "white",
    color: "#021B79",
    borderRadius: "15px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 5px 15px rgba(0,0,0,0.15)"
  }}
>
  <House size={22} />

  <span className="ms-3">

    Dashboard

  </span>

</div>

            <div className="d-flex align-items-center mb-4">

              <Calendar3 size={20} />

              <span className="ms-3">
                Timetable
              </span>

            </div>

            <div className="d-flex align-items-center mb-4">

              <CreditCard size={20} />

              <span className="ms-3">
                Payments
              </span>

            </div>

            <div className="d-flex align-items-center mb-4">

              <BarChart size={20} />

              <span className="ms-3">
                Results
              </span>

            </div>

            <div className="d-flex align-items-center mb-4">

              <Folder size={20} />

              <span className="ms-3">
                Materials
              </span>

            </div>

            <div className="d-flex align-items-center mb-4">

              <Person size={20} />

              <span className="ms-3">
                Profile
              </span>

            </div>

            <div className="d-flex align-items-center">

              <Gear size={20} />

              <span className="ms-3">
                Settings
              </span>

            </div>

          </div>

          <div className="d-flex align-items-center">

            <BoxArrowRight size={20} />

            <span className="ms-3">
              Logout
            </span>

          </div>

        </div>

        {/* ================= MAIN ================= */}

        <div
          className="col-md-10"
          style={{
            background: "#f5f7fb"
          }}
        >

          {/* NAVBAR */}

          <div
            className="d-flex justify-content-between align-items-center p-4"
          >

            <h2 className="fw-bold">
              Dashboard
            </h2>

            <div className="d-flex align-items-center">

              <div
style={{

position:"relative"

}}
>

<Bell size={24}/>

<span

className="badge bg-danger"

style={{

position:"absolute",

top:"-8px",

right:"-8px"

}}

>

3

</span>

</div>

              <img
                src="https://i.pravatar.cc/100"
                alt=""
                className="rounded-circle ms-4"
                width="45"
                height="45"
              />

              <div className="ms-3">

                <div className="fw-bold">

                  Thusara Dilshan

                </div>

                <small className="text-muted">

                  Student

                </small>

              </div>

              <ChevronDown className="ms-2" />

            </div>

          </div>

          {/* WELCOME CARD */}

          <div className="container">

            <div
              className="row rounded-5 shadow-lg p-5 align-items-center"
              style={{
                background:
"linear-gradient(135deg,#021B79,#0d47ff,#3c7dff)"
               
              }}
            >

              <div className="col-md-7">

                <h1 className="fw-bold">

                  Welcome Back 👋

                </h1>

                <p
                  className="mt-3"
                  style={{
                    fontSize: "20px"
                  }}
                >

                  Ready to continue your learning journey?

                </p>

                <button
                  className="btn btn-warning mt-3 px-4 py-2 fw-bold rounded-pill"
                >

                  View Timetable

                </button>

              </div>

              <div className="col-md-5 text-end">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                  width="250"
                  alt=""
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;
{/* ================= CALENDAR ================= */}

<div className="container mt-5">

  <div
    className="shadow-lg rounded-5 p-4 bg-white"
  >

    <div className="d-flex justify-content-between align-items-center mb-4">

      <h3 className="fw-bold">

        Academic Calendar

      </h3>

      <button className="btn btn-primary rounded-pill">

        June 2026

      </button>

    </div>

    <table className="table text-center align-middle">

      <thead>

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

          <td className="text-muted">31</td>

          <td>
            <div className="fw-bold">1</div>

            <span className="badge bg-primary rounded-pill">
              ICT
            </span>

          </td>

          <td>

            <div className="fw-bold">2</div>

            <span className="badge bg-warning text-dark rounded-pill">
              Maths
            </span>

          </td>

          <td>

            <div className="fw-bold">3</div>

          </td>

          <td>

            <div className="fw-bold">4</div>

            <span className="badge bg-success rounded-pill">
              Physics
            </span>

          </td>

          <td>

            <div className="fw-bold">5</div>

          </td>

          <td>

            <div className="fw-bold">6</div>

          </td>

        </tr>

        <tr>

          <td>

            <div className="fw-bold">7</div>

          </td>

          <td>

            <div className="fw-bold">8</div>

            <span className="badge bg-danger rounded-pill">
              Chemistry
            </span>

          </td>

          <td>

            <div className="fw-bold">9</div>

          </td>

          <td>

            <div className="fw-bold">10</div>

            <span className="badge bg-info rounded-pill">
              English
            </span>

          </td>

          <td>

            <div className="fw-bold">11</div>

          </td>

          <td>

            <div className="fw-bold">12</div>

            <span className="badge bg-primary rounded-pill">
              ICT
            </span>

          </td>

          <td>

            <div className="fw-bold">13</div>

          </td>

        </tr>

        <tr>

          <td><div className="fw-bold">14</div></td>
          <td><div className="fw-bold">15</div></td>
          <td><div className="fw-bold">16</div></td>
          <td><div className="fw-bold">17</div></td>
          <td><div className="fw-bold">18</div></td>
          <td><div className="fw-bold">19</div></td>
          <td><div className="fw-bold">20</div></td>

        </tr>

        <tr>

          <td><div className="fw-bold">21</div></td>
          <td><div className="fw-bold">22</div></td>
          <td><div className="fw-bold">23</div></td>
          <td><div className="fw-bold">24</div></td>
          <td><div className="fw-bold">25</div></td>
          <td><div className="fw-bold">26</div></td>
          <td><div className="fw-bold">27</div></td>

        </tr>

        <tr>

          <td><div className="fw-bold">28</div></td>
          <td><div className="fw-bold">29</div></td>
          <td><div className="fw-bold">30</div></td>
          <td className="text-muted">1</td>
          <td className="text-muted">2</td>
          <td className="text-muted">3</td>
          <td className="text-muted">4</td>

        </tr>

      </tbody>

    </table>

  </div>

</div>
