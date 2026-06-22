import React from "react";
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
  CalendarEvent,
  PersonCircle,
  GraphUp,
  Cash,
  PersonPlus,
  Upload,
  Clock,
} from "react-bootstrap-icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import logo from "../../assets/image-removebg-preview.png";
import profile from "../../assets/profile.png";

const attendanceData = [
  { month: "Oct", attendance: 80 },
  { month: "Nov", attendance: 82 },
  { month: "Dec", attendance: 81 },
  { month: "Jan", attendance: 84 },
  { month: "Feb", attendance: 83 },
  { month: "Mar", attendance: 87 },
];

const revenueData = [
  { month: "Oct", revenue: 95000 },
  { month: "Nov", revenue: 105000 },
  { month: "Dec", revenue: 112000 },
  { month: "Jan", revenue: 108000 },
  { month: "Feb", revenue: 118000 },
  { month: "Mar", revenue: 124500 },
];

function TeacherDashboard() {
  const navigate = useNavigate();

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
                alt=""
                style={{
                  width: "180px",
                }}
              />
            </div>

            <div className="px-3">

              <button
                className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
              >
                <HouseDoorFill className="me-3" />
                Dashboard
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <Book className="me-3" />
                My Classes
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <People className="me-3" />
                Students
              </button>

<NavLink
  to="/teacher-quizzes"
  className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
>
  <PatchQuestion className="me-3" />
  Quizzes
</NavLink>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <Folder className="me-3" />
                Study Materials
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <CreditCard className="me-3" />
                Payments
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <BarChart className="me-3" />
                Results
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <PersonCircle className="me-3" />
                My Profile
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
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

        {/* Main Content */}

        <div className="col">

          {/* Navbar */}

          <div className="bg-white shadow-sm px-5 py-3 d-flex justify-content-between align-items-center">

            <div>

              <h2 className="fw-bold mb-0">
                Welcome back, Teacher
              </h2>

              <small className="text-muted">
                Manage your tuition classes efficiently
              </small>

            </div>

            <div className="d-flex align-items-center">

              <Bell size={22} className="me-4" />

              <img
                src={profile}
                alt=""
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              <div className="ms-3">

                <h5 className="mb-0 fw-bold">
                  User
                </h5>

              </div>

              <ChevronDown className="ms-3" />

            </div>

          </div>

          <div

  className="container-fluid p-4"
  style={{
    background: "#eef2f7",
    minHeight: "calc(100vh - 80px)",
  }}
>

            {/* Cards */}

            <div className="row">

              <div className="col-md-6 mb-4">
                <div
  className="card border-0 rounded-4 p-4"
  style={{
    background: "#f5f5f5",
  }}
>
    

                  <div className="d-flex justify-content-between">

                    <div>
                      <h4>248</h4>
                      <h5>Total Students</h5>
                      <span className="text-success">
                        +12% from last month
                      </span>
                    </div>

                   <div
  style={{
    background: "#3b82f6",
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }}
>
  <People size={28} />
</div>

                  </div>

                </div>
              </div>

              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow rounded-4 p-4">

                  <div className="d-flex justify-content-between">

                    <div>
                      <h4>42</h4>
                      <h5>Classes This Month</h5>
                      <span className="text-success">
                        +8% from last month
                      </span>
                    </div>

                    <div
  style={{
    background: "#22c55e",
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }}
>
  <CalendarEvent size={28} />
</div>

                  </div>

                </div>

              </div>

              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow rounded-4 p-4">

                  <div className="d-flex justify-content-between">

                    <div>
                      <h4>Rs.124,500</h4>
                      <h5>Revenue</h5>
                      <span className="text-success">
                        +15% from last month
                      </span>
                    </div>

                   <div
  style={{
    background: "#a855f7",
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }}
>
  <Cash size={28} />
</div>

                  </div>

                </div>

              </div>

              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow rounded-4 p-4">

                  <div className="d-flex justify-content-between">

                    <div>
                      <h4>87%</h4>
                      <h5>Attendance Rate</h5>
                      <span className="text-success">
                        +3% from last month
                      </span>
                    </div>

                   <div
  style={{
    background: "#ef4444",
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }}
>
  <GraphUp size={28} />
</div>

                  </div>

                </div>

              </div>

            </div>

            {/* Charts */}

            <div className="row">

              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow rounded-4 p-4">

                  <h5 className="fw-bold mb-4">
                    Attendance Trends
                  </h5>

<ResponsiveContainer width="100%" height={220}>
  <LineChart data={attendanceData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Line
      type="monotone"
      dataKey="attendance"
      stroke="#3b82f6"
      strokeWidth={3}
    />
  </LineChart>
</ResponsiveContainer>

                </div>

              </div>

              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow rounded-4 p-4">

                  <h5 className="fw-bold mb-4">
                    Monthly Revenue
                  </h5>

<ResponsiveContainer width="100%" height={220}>
  <BarChart data={revenueData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Bar
      dataKey="revenue"
      fill="#8b5cf6"
      radius={[5, 5, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>

                </div>

              </div>

            </div>

            {/* Upcoming Class */}

            <div className="card border-0 shadow rounded-4 p-4 mb-4">

              <div className="d-flex justify-content-between">

                <h4 className="fw-bold">
                  Upcoming Classes
                </h4>

                <button className="btn btn-light rounded-pill">
                  View All
                </button>

              </div>

              <h3 className="mt-4">
                Combined Mathematics
              </h3>

              <div className="d-flex justify-content-between align-items-center mt-3">

                <div>

                  <Clock className="me-2" />

                  Today, 4.00 PM - 6.00 PM | 32 Students

                </div>

                <button className="btn btn-warning rounded-pill px-4">
                  Start Class
                </button>

              </div>

            </div>

            {/* Quick Actions */}

            <div className="card border-0 shadow rounded-4 p-4">

              <h4 className="fw-bold mb-4">
                Quick Actions
              </h4>

              <div className="row text-center">

                <div className="col-md-3">

                  <button className="btn btn-light shadow rounded-4 p-4 w-100">

                    <Calendar3 size={30} />

                    <h6 className="mt-3">
                      Schedule Class
                    </h6>

                  </button>

                </div>

                <div className="col-md-3">

                  <button className="btn btn-light shadow rounded-4 p-4 w-100">

                    <PersonPlus size={30} />

                    <h6 className="mt-3">
                      Add Student
                    </h6>

                  </button>

                </div>

                <div className="col-md-3">

                  <button className="btn btn-light shadow rounded-4 p-4 w-100">

                    <PatchQuestion size={30} />

                    <h6 className="mt-3">
                      Create Quiz
                    </h6>

                  </button>

                </div>

                <div className="col-md-3">

                  <button className="btn btn-light shadow rounded-4 p-4 w-100">

                    <Upload size={30} />

                    <h6 className="mt-3">
                      Upload Materials
                    </h6>

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default TeacherDashboard;