import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import {
  CalendarEventFill,
  PersonFill,
  BookFill,
 ClockFill,
  CameraVideoFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminAttendanceDetails() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Dummy Class Attendance Data

  const attendance = {

    className: "Combined Mathematics",

    teacher: "Kamal Silva",

    subject: "Mathematics",

    grade: "Grade 10",

    date: "25 June 2026",

    time: "6.00 PM - 7.30 PM",

    recording: "Available",

    attendanceMethod: "Automatic (Online Class Join)",

    students: [

      {
        id: 1,
        name: "Nethmi Perera",
        join: "6:00 PM",
        leave: "7:30 PM",
        duration: "1h 30m",
        status: "Present",
      },

      {
        id: 2,
        name: "Kavindu Silva",
        join: "--",
        leave: "--",
        duration: "0m",
        status: "Absent",
      },

      {
        id: 3,
        name: "Hasini Fernando",
        join: "6:03 PM",
        leave: "7:28 PM",
        duration: "1h 25m",
        status: "Present",
      },

      {
        id: 4,
        name: "Nimal Perera",
        join: "6:01 PM",
        leave: "7:30 PM",
        duration: "1h 29m",
        status: "Present",
      },

    ],

  };

  const downloadAttendancePDF = () => {

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("O'Guru Online Institute", 14, 20);

  doc.setFontSize(15);
  doc.text("Class Attendance Report", 14, 30);

  doc.setFontSize(11);

  doc.text(`Class : ${attendance.className}`, 14, 45);
  doc.text(`Teacher : ${attendance.teacher}`, 14, 53);
  doc.text(`Subject : ${attendance.subject}`, 14, 61);
  doc.text(`Grade : ${attendance.grade}`, 14, 69);
  doc.text(`Date : ${attendance.date}`, 14, 77);
  doc.text(`Time : ${attendance.time}`, 14, 85);

  autoTable(doc, {

    startY: 95,

    head: [[
      "Student",
      "Join",
      "Leave",
      "Duration",
      "Status"
    ]],

    body: attendance.students.map(student => [

      student.name,

      student.join,

      student.leave,

      student.duration,

      student.status

    ])

  });

  const present =
    attendance.students.filter(
      s => s.status === "Present"
    ).length;

  const absent =
    attendance.students.filter(
      s => s.status === "Absent"
    ).length;

  const percentage =
    ((present / attendance.students.length) * 100)
    .toFixed(1);

  const finalY = doc.lastAutoTable.finalY + 15;

  doc.text(`Present Students : ${present}`, 14, finalY);

  doc.text(`Absent Students : ${absent}`, 14, finalY + 8);

  doc.text(`Attendance Rate : ${percentage}%`, 14, finalY + 16);

  doc.save("Attendance_Report.pdf");

};

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
title="Attendance Details"
subtitle="View attendance for a class session"
/>

<div className="container-fluid p-4">
    {/* ================= CLASS INFORMATION ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      📚 Class Information
    </h4>

    <div className="row">

      {/* Class Name */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          📘 Class Name
        </h6>

        <p className="fs-5 fw-bold">
          {attendance.className}
        </p>

      </div>

      {/* Teacher */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <PersonFill className="me-2" />
          Teacher
        </h6>

        <p className="fs-5">
          {attendance.teacher}
        </p>

      </div>

      {/* Subject */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <BookFill className="me-2" />
          Subject
        </h6>

        <p className="fs-5">
          {attendance.subject}
        </p>

      </div>

      {/* Grade */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          🎓 Grade
        </h6>

        <span className="badge bg-primary fs-6 px-3 py-2">
          {attendance.grade}
        </span>

      </div>

      {/* Date */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <CalendarEventFill className="me-2" />
          Class Date
        </h6>

        <p className="fs-5">
          {attendance.date}
        </p>

      </div>

      {/* Time */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <ClockFill className="me-2" />
          Class Time
        </h6>

        <p className="fs-5">
          {attendance.time}
        </p>

      </div>

      {/* Recording */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          <CameraVideoFill className="me-2" />
          Recording
        </h6>

        <span className="badge bg-success fs-6 px-3 py-2">
          {attendance.recording}
        </span>

      </div>

      {/* Attendance Method */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Attendance Method
        </h6>

        <span className="badge bg-info text-dark fs-6 px-3 py-2">
          {attendance.attendanceMethod}
        </span>

      </div>

    </div>

  </div>

</div>
{/* ================= STUDENT ATTENDANCE ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      👥 Student Attendance
    </h4>

    <div className="table-responsive">

      <table className="table align-middle">

        <thead>

          <tr
            style={{
              background: darkMode ? "#495057" : "#f8f9fa",
            }}
          >
            <th>Student Name</th>
            <th>Join Time</th>
            <th>Leave Time</th>
            <th>Duration</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {attendance.students.map((student) => (

            <tr
              key={student.id}
              style={{
                background: darkMode ? "#3a4047" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >

              <td className="fw-bold">
                {student.name}
              </td>

              <td>
                {student.join}
              </td>

              <td>
                {student.leave}
              </td>

              <td>
                {student.duration}
              </td>

              <td>

                <span
                  className={`badge ${
                    student.status === "Present"
                      ? "bg-success"
                      : "bg-danger"
                  } px-3 py-2`}
                >
                  {student.status === "Present"
                    ? "✅ Present"
                    : "❌ Absent"}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

</div>
{/* ================= ATTENDANCE SUMMARY ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      📊 Attendance Summary
    </h4>

    {(() => {

      const present = attendance.students.filter(
        (student) => student.status === "Present"
      ).length;

      const absent = attendance.students.filter(
        (student) => student.status === "Absent"
      ).length;

      const percentage = (
        (present / attendance.students.length) * 100
      ).toFixed(1);

      return (

        <div className="row">

          <div className="col-md-4 mb-3">

            <div
              className="text-center rounded-4 p-4"
              style={{
                background: darkMode ? "#495057" : "#f8f9fa",
              }}
            >
              <h2 className="fw-bold text-success">
                {present}
              </h2>

              <p className="mb-0 fw-semibold">
                Present Students
              </p>

            </div>

          </div>

          <div className="col-md-4 mb-3">

            <div
              className="text-center rounded-4 p-4"
              style={{
                background: darkMode ? "#495057" : "#f8f9fa",
              }}
            >
              <h2 className="fw-bold text-danger">
                {absent}
              </h2>

              <p className="mb-0 fw-semibold">
                Absent Students
              </p>

            </div>

          </div>

          <div className="col-md-4 mb-3">

            <div
              className="text-center rounded-4 p-4"
              style={{
                background: darkMode ? "#495057" : "#f8f9fa",
              }}
            >
              <h2 className="fw-bold text-primary">
                {percentage}%
              </h2>

              <p className="mb-0 fw-semibold">
                Attendance Rate
              </p>

            </div>

          </div>

        </div>

      );

    })()}

  </div>

</div>

{/* ================= ACTION BUTTON ================= */}

<div className="d-flex justify-content-end gap-3 mb-4">

  <button
    className="btn btn-outline-secondary rounded-pill px-4"
    onClick={() => navigate("/admin-class-attendance")}
  >
    ← Back
  </button>

  <button
    className="btn btn-danger rounded-pill px-4"
    onClick={downloadAttendancePDF}
  >
    📄 Download PDF
  </button>

</div>

        </div>

      </div>

    </div>
    </div>

  );

}

export default AdminAttendanceDetails;
