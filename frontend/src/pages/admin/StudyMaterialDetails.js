import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  PersonFill,
  BookFill,
  CollectionFill,
  FileEarmarkTextFill,
  CameraVideoFill,
  BoxSeamFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function StudyMaterialDetails() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    setDarkMode(savedTheme === "dark");

  }, []);

  // Dummy Class Resource Data

  const classData = {

    className: "Combined Mathematics",

    teacher: "Kamal Silva",

    subject: "Mathematics",

    grade: "Grade 10",

    documents: [

      "Trigonometry Notes.pdf",

      "Algebra Tutorial.pdf",

      "Past Paper 2025.pdf",

      "Revision Notes.pdf",

    ],

    recordings: [

      "Lesson 01 - Introduction",

      "Lesson 02 - Algebra",

      "Lesson 03 - Trigonometry",

      "Revision Class",

    ],

    printedMaterials: [

      "Printed Theory Book",

      "Tutorial Book",

      "Model Paper Book",

    ],

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
title="Class Resources"
subtitle="View study materials for this class"
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
      <CollectionFill className="me-2 text-primary" />
      Class Information
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
          📚 Class Name
        </h6>

        <p className="fs-5 fw-bold">
          {classData.className}
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
          {classData.teacher}
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
          {classData.subject}
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
          {classData.grade}
        </span>

      </div>

    </div>

  </div>

</div>
{/* ================= DOCUMENTS ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      <FileEarmarkTextFill className="me-2 text-success" />
      Documents
    </h4>

    <div className="list-group">

      {classData.documents.map((doc, index) => (

        <div
          key={index}
          className="list-group-item border-0 rounded-4 mb-3 shadow-sm d-flex justify-content-between align-items-center"
          style={{
            background: darkMode ? "#495057" : "#f8f9fa",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >

          <div>

            <FileEarmarkTextFill
              className="me-2 text-success"
            />

            {doc}

          </div>

          <div className="d-flex gap-2">

            <button className="btn btn-outline-primary btn-sm rounded-pill">
              👁 View
            </button>

            <button className="btn btn-success btn-sm rounded-pill">
              ⬇ Download
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>

{/* ================= RECORDINGS ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      <CameraVideoFill className="me-2 text-danger" />
      Recordings
    </h4>

    <div className="list-group">

      {classData.recordings.map((video, index) => (

        <div
          key={index}
          className="list-group-item border-0 rounded-4 mb-3 shadow-sm d-flex justify-content-between align-items-center"
          style={{
            background: darkMode ? "#495057" : "#f8f9fa",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >

          <div>

            <CameraVideoFill
              className="me-2 text-danger"
            />

            {video}

          </div>

          <button className="btn btn-danger btn-sm rounded-pill">
            ▶ Watch
          </button>

        </div>

      ))}

    </div>

  </div>

</div>

{/* ================= PRINTED MATERIALS ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      <BoxSeamFill className="me-2 text-warning" />
      Printed Materials
    </h4>

    <div className="list-group">

      {classData.printedMaterials.map((item, index) => (

        <div
          key={index}
          className="list-group-item border-0 rounded-4 mb-3 shadow-sm d-flex justify-content-between align-items-center"
          style={{
            background: darkMode ? "#495057" : "#f8f9fa",
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >

          <div>

            <BoxSeamFill
              className="me-2 text-warning"
            />

            {item}

          </div>

          <button className="btn btn-outline-warning btn-sm rounded-pill">
            View
          </button>

        </div>

      ))}

    </div>

  </div>

</div>
{/* ================= ACTION BUTTONS ================= */}

<div className="d-flex justify-content-end gap-3 mb-4">

  <button
    className="btn btn-outline-secondary rounded-pill px-4"
    onClick={() => navigate("/admin-study-materials")}
  >
    ← Back
  </button>

</div>

        </div>

      </div>

    </div>

</div>
  );

}

export default StudyMaterialDetails;
