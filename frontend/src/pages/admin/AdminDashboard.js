import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PeopleFill,
  PersonVideo,
  CurrencyDollar,
  BookFill,
  PersonPlusFill,
  CreditCard,
  FileEarmarkBarGraphFill,
} from "react-bootstrap-icons";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminDashboard() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  const revenueData = [
    { month: "Jan", income: 180000 },
    { month: "Feb", income: 220000 },
    { month: "Mar", income: 260000 },
    { month: "Apr", income: 240000 },
    { month: "May", income: 300000 },
    { month: "Jun", income: 340000 },
  ];

  const studentGrowth = [
    { month: "Jan", students: 120 },
    { month: "Feb", students: 145 },
    { month: "Mar", students: 170 },
    { month: "Apr", students: 205 },
    { month: "May", students: 240 },
    { month: "Jun", students: 285 },
  ];

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">

        <AdminSidebar />

        <div
          className="col-lg-9 col-xl-10"
          style={{
            background: darkMode ? "#2f343a" : "#eef2f7",
            minHeight: "100vh",
          }}
        >

          <AdminTopNavbar
            title="Dashboard"
            subtitle="Manage your tuition institute"
          />

          <div className="container-fluid p-4">
            {/* ================= DASHBOARD CARDS ================= */}

<div className="row g-4">

  {/* Total Students */}
  <div className="col-md-6 col-xl-3">
    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center p-4">
        <div>
          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Total Students
          </h6>

          <h2 className="fw-bold mt-2">
            325
          </h2>

          <small className="text-success">
            +18 this month
          </small>
        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "70px",
            height: "70px",
            background: "#0d6efd",
          }}
        >
          <PeopleFill size={34} color="white" />
        </div>
      </div>
    </div>
  </div>

  {/* Total Teachers */}
  <div className="col-md-6 col-xl-3">
    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center p-4">
        <div>
          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Total Teachers
          </h6>

          <h2 className="fw-bold mt-2">
            18
          </h2>

          <small className="text-primary">
            Active Teachers
          </small>
        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "70px",
            height: "70px",
            background: "#198754",
          }}
        >
          <PersonVideo size={34} color="white" />
        </div>
      </div>
    </div>
  </div>

  {/* Monthly Income */}
  <div className="col-md-6 col-xl-3">
    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center p-4">
        <div>
          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Monthly Income
          </h6>

          <h2 className="fw-bold mt-2">
            Rs.450K
          </h2>

          <small className="text-success">
            +12%
          </small>
        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "70px",
            height: "70px",
            background: "#ffc107",
          }}
        >
          <CurrencyDollar size={34} color="white" />
        </div>
      </div>
    </div>
  </div>

  {/* Active Classes */}
  <div className="col-md-6 col-xl-3">
    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center p-4">
        <div>
          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Active Classes
          </h6>

          <h2 className="fw-bold mt-2">
            42
          </h2>

          <small className="text-primary">
            Running Today
          </small>
        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "70px",
            height: "70px",
            background: "#dc3545",
          }}
        >
          <BookFill size={34} color="white" />
        </div>
      </div>
    </div>
  </div>

</div>
{/* ================= CHARTS ================= */}

<div className="row mt-4">

  {/* Monthly Revenue */}
  <div className="col-lg-8 mb-4">
    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body p-4">

        <h4 className="fw-bold mb-4">
          Monthly Revenue
        </h4>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#0d6efd"
              strokeWidth={4}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  </div>

  {/* Student Growth */}

  <div className="col-lg-4 mb-4">
    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body p-4">

        <h4 className="fw-bold mb-4">
          Student Growth
        </h4>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={studentGrowth}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="students"
              fill="#198754"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>

      </div>
    </div>
  </div>

</div>
{/* ================= RECENT ACTIVITIES & QUICK ACTIONS ================= */}

<div className="row">

  {/* Recent Activities */}

  <div className="col-lg-8 mb-4">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >

      <div className="card-body p-4">

        <h4 className="fw-bold mb-4">
          Recent Activities
        </h4>

        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <div>
            <h6 className="fw-bold mb-1">
              New Student Registered
            </h6>
            <small
              style={{
                color: darkMode ? "#d1d5db" : "#6c757d",
              }}
            >
              Kasun Perera joined Grade 10 Maths.
            </small>
          </div>

          <small
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            09:15 AM
          </small>
        </div>

        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <div>
            <h6 className="fw-bold mb-1">
              Teacher Added
            </h6>
            <small
              style={{
                color: darkMode ? "#d1d5db" : "#6c757d",
              }}
            >
              Mr. Kamal Silva account created.
            </small>
          </div>

          <small
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            10:30 AM
          </small>
        </div>

        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <div>
            <h6 className="fw-bold mb-1">
              Payment Approved
            </h6>
            <small
              style={{
                color: darkMode ? "#d1d5db" : "#6c757d",
              }}
            >
              June payment verified successfully.
            </small>
          </div>

          <small
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            11:45 AM
          </small>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <h6 className="fw-bold mb-1">
              Quiz Published
            </h6>
            <small
              style={{
                color: darkMode ? "#d1d5db" : "#6c757d",
              }}
            >
              New Grade 11 quiz has been published.
            </small>
          </div>

          <small
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            01:20 PM
          </small>
        </div>

      </div>

    </div>

  </div>

  {/* Quick Actions */}

  <div className="col-lg-4 mb-4">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >

      <div className="card-body p-4">

        <h4 className="fw-bold mb-4">
          Quick Actions
        </h4>

        <button className="btn btn-primary w-100 rounded-4 p-3 mb-3 fw-bold">
          <PersonPlusFill className="me-2" />
          Add Teacher
        </button>

        <button className="btn btn-success w-100 rounded-4 p-3 mb-3 fw-bold">
          <CreditCard className="me-2" />
          Verify Payments
        </button>

        <button className="btn btn-dark w-100 rounded-4 p-3 fw-bold">
          <FileEarmarkBarGraphFill className="me-2" />
          Generate Report
        </button>

      </div>

    </div>

  </div>

</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;