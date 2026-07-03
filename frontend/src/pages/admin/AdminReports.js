import React, { useState, useEffect } from "react";

import {
  PeopleFill,
  PersonVideo,
  CurrencyDollar,
  Truck,
  FileEarmarkPdfFill,
  PrinterFill,
  Search,
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
  PieChart,
  Pie,
  Cell,
} from "recharts";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminReports() {

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

  const attendanceData = [

    { name: "Present", value: 82 },
    { name: "Absent", value: 18 },

  ];

  const COLORS = [

    "#198754",
    "#dc3545",

  ];

  const reports = [

    {
      id: "REP001",
      title: "Monthly Revenue Report",
      date: "2026-06-30",
      status: "Completed",
    },

    {
      id: "REP002",
      title: "Attendance Report",
      date: "2026-06-29",
      status: "Completed",
    },

    {
      id: "REP003",
      title: "Quiz Performance Report",
      date: "2026-06-28",
      status: "Pending",
    },

    {
      id: "REP004",
      title: "Delivery Report",
      date: "2026-06-27",
      status: "Completed",
    },

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
title="Reports"
subtitle="System Reports & Analytics"
/>

<div className="container-fluid p-4">
    {/* ================= REPORT SUMMARY ================= */}

<div className="row g-4 mb-4">

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

          <PeopleFill
            size={34}
            color="white"
          />

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

          <PersonVideo
            size={34}
            color="white"
          />

        </div>

      </div>

    </div>

  </div>

  {/* Total Revenue */}

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
            Total Revenue
          </h6>

          <h2 className="fw-bold mt-2">
            Rs.865K
          </h2>

          <small className="text-success">
            +15%
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

          <CurrencyDollar
            size={34}
            color="white"
          />

        </div>

      </div>

    </div>

  </div>

  {/* Deliveries */}

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
            Deliveries
          </h6>

          <h2 className="fw-bold mt-2">
            112
          </h2>

          <small className="text-primary">
            Completed Orders
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

          <Truck
            size={34}
            color="white"
          />

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

{/* ================= ATTENDANCE ================= */}

<div className="row">

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
          Attendance Overview
        </h4>

        <ResponsiveContainer width="100%" height={300}>

          <PieChart>

            <Pie
              data={attendanceData}
              dataKey="value"
              outerRadius={95}
              label
            >

              {attendanceData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  </div>

  <div className="col-lg-8 mb-4">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >

      <div className="card-body d-flex justify-content-center align-items-center">

        <div className="text-center">

          <h2 className="fw-bold mb-3">
            Reports Overview
          </h2>

          <h5 className="text-muted">
            Revenue, student growth and attendance
            statistics are updated here.
          </h5>

        </div>

      </div>

    </div>

  </div>

</div>
{/* ================= RECENT REPORTS ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-4">

    <div className="d-flex justify-content-between align-items-center mb-4">

      <h4 className="fw-bold mb-0">

        Recent Reports

      </h4>

      <div className="input-group" style={{ width: "300px" }}>

        <span className="input-group-text">

          <Search />

        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Search Reports..."
        />

      </div>

    </div>

    <div className="table-responsive">

      <table className="table table-hover align-middle">

        <thead>

          <tr>

            <th>Report ID</th>

            <th>Report Name</th>

            <th>Date</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {reports.map((report) => (

            <tr key={report.id}>

              <td>{report.id}</td>

              <td>{report.title}</td>

              <td>{report.date}</td>

              <td>

                <span
                  className={`badge ${
                    report.status === "Completed"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >

                  {report.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

</div>

{/* ================= ACTION BUTTONS ================= */}

<div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
  }}
>

  <div className="card-body">

    <div className="d-flex justify-content-end gap-3">

      <button
        className="btn btn-danger rounded-pill px-4"
        onClick={() => alert("PDF generation will be connected later.")}
      >

        <FileEarmarkPdfFill className="me-2" />

        Download PDF

      </button>

      <button
        className="btn btn-primary rounded-pill px-4"
        onClick={() => window.print()}
      >

        <PrinterFill className="me-2" />

        Print Report

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

export default AdminReports;
