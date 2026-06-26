import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";
import axios from "axios";
import API from "../services/api";



import {
  HouseDoorFill,
  Book,
  Calendar3,
  CreditCard,
  FileText,
  Folder,
  Gear,
  BoxArrowRight,
  Bell,
  ChevronDown,
  Upload
} from "react-bootstrap-icons";

function BankSlipUpload() {

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  const location = useLocation();

  // Data coming from Teacher Profile
const classData = location.state || {};
const fromTeacher = !!classData.teacher;

  // Form Data
  const [formData, setFormData] = React.useState({
    studentName: "",
    email: "",
    subject: "",
    teacher: "",
    grade: "",
    month: "",
  });

  // Selected File


  // Auto Fill Details
React.useEffect(() => {

  const loadStudentDetails = async () => {

    try {

      const email = localStorage.getItem("email");

      const res = await API.get(`/profile/${email}`);

      const profile = res.data.data;

setFormData((prev) => ({

  ...prev,

  studentName: profile.fullName,
  email: profile.email,

  teacher: classData?.teacher || prev.teacher,

  subject: classData?.subject || prev.subject,

  grade: classData?.grade || prev.grade,

}));
    } catch (error) {

      console.log(error);

    }

  };

  loadStudentDetails();

}, [classData]);

const handleUpload = async () => {

  if (!selectedFile) {
    alert("Please select a file.");
    return;
  }

  try {

    const data = new FormData();

data.append("studentName", formData.studentName);
data.append("email", formData.email);
data.append("subject", formData.subject);
data.append("teacher", formData.teacher);
data.append("grade", formData.grade);
data.append("month", formData.month);
data.append("file", selectedFile);

    // MUST MATCH upload.single("file")
    

    const response = await axios.post(

      "http://localhost:5000/api/payment/upload-slip",

      data,

      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }

    );

alert(response.data.message);

// Go to Dashboard after successful upload
navigate("/studentdashboard");
  } catch (error) {

    console.log(error);

    alert("Upload Failed");

  }

};
const [selectedFile, setSelectedFile] = React.useState(null);


  return (

    <div className="container-fluid p-0">

      <div className="row g-0">

        {/* ================= SIDEBAR ================= */}

        <div
          className="col-lg-3 col-xl-2 d-flex flex-column justify-content-between"
          style={{
            background: "linear-gradient(180deg,#001a75,#0033cc)",
            minHeight: "100vh",
          }}
        >

          <div>

            <div className="text-center py-4">

              <img
                src={logo}
                alt="logo"
                style={{
                  width: "180px",
                }}
              />

            </div>

            <div className="px-3">

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/studentdashboard")}
              >
                <HouseDoorFill className="me-3" />
                Dashboard
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/mycourses")}
              >
                <Book className="me-3" />
                My Courses
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <Calendar3 className="me-3" />
                Timetable
              </button>

              <button
                className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
              >
                <CreditCard className="me-3" />
                Payment
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <FileText className="me-3" />
                Results
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <Folder className="me-3" />
                Material Tracking
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <Gear className="me-3" />
                Settings
              </button>

            </div>

          </div>

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
    background: darkMode ? "#343a40" : "#eef2f7",
    minHeight: "100vh",
  }}
>

          {/* TOP BAR */}

<div
  className="d-flex justify-content-end align-items-center p-4 border-bottom"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

            <Bell size={24} className="me-4" />

            <img
              src="https://i.pravatar.cc/100"
              alt=""
              width="60"
              height="60"
              className="rounded-circle"
            />

            <div className="ms-3">

              <h5 className="mb-0 fw-bold">

                Thusara Dilshan

              </h5>

              <small className="text-muted">

                Student

              </small>

            </div>

            <ChevronDown className="ms-3" />

          </div>
                    {/* ================= PAGE CONTENT ================= */}

          <div className="container py-5">

            {/* Heading */}

            <div className="text-center mb-5">

<div className="text-center mb-5">
<h1
  className="fw-bold display-5"
  style={{
    color: darkMode ? "#ffffff" : "#0d6efd",
  }}
>
  Upload Payment Slip
</h1>

<p
  className="fs-5"
  style={{
    color: darkMode ? "#d1d5db" : "#6c757d",
  }}
>
  Upload your bank payment slip for verification
</p>

</div>

            </div>

{/* ================= FORM CARD ================= */}

      <div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-5">

    <div className="row g-4">

      <div className="col-md-6">

        <label className="form-label fw-bold">
          Student Name
        </label>

<input
  type="text"
  className="form-control form-control-lg"
  value={formData.studentName}
  readOnly
/>

      </div>

      <div className="col-md-6">

        <label className="form-label fw-bold">
          Email
        </label>

<input
  type="email"
  className="form-control form-control-lg"
  value={formData.email}
  readOnly
/>

      </div>

      <div className="col-md-6">

        <label className="form-label fw-bold">
          Subject
        </label>

<input
  type="text"
  className="form-control form-control-lg"
  value={formData.subject}
  readOnly={fromTeacher}
  onChange={(e) =>
    setFormData({
      ...formData,
      subject: e.target.value,
    })
  }
/>
      </div>

      <div className="col-md-6">

        <label className="form-label fw-bold">
          Teacher Name
        </label>

<input
  type="text"
  className="form-control form-control-lg"
  value={formData.teacher}
  readOnly={fromTeacher}
  onChange={(e) =>
    setFormData({
      ...formData,
      teacher: e.target.value,
    })
  }
/>

      </div>

      <div className="col-md-6">

        <label className="form-label fw-bold">
          Grade
        </label>

{fromTeacher ? (

  <input
    type="text"
    className="form-control form-control-lg"
    value={formData.grade}
    readOnly
  />

) : (

  <select
    className="form-select form-select-lg"
    value={formData.grade}
    onChange={(e) =>
      setFormData({
        ...formData,
        grade: e.target.value,
      })
    }
  >
    <option value="">Select Grade</option>
    <option>Grade 6</option>
    <option>Grade 7</option>
    <option>Grade 8</option>
    <option>Grade 9</option>
    <option>Grade 10</option>
    <option>Grade 11</option>
    <option>Grade 12</option>
    <option>Grade 13</option>
  </select>

)}

      </div>

      <div className="col-md-6">

        <label className="form-label fw-bold">
          Month
        </label>

        <select
          className="form-select form-select-lg"
          value={formData.month}
          onChange={(e) =>
            setFormData({
              ...formData,
              month: e.target.value,
            })
          }
        >

          <option value="">Select Month</option>

          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>

        </select>

      </div>

    </div>

  </div>

</div>
{/* ================= UPLOAD CARD ================= */}

      <div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-5">

    <div
      className="border border-2 rounded-5 text-center p-5"
      style={{
        borderStyle: "dashed",
      }}
    >

      <div
        className="bg-primary rounded-circle d-inline-flex justify-content-center align-items-center mb-4"
        style={{
          width: "90px",
          height: "90px",
        }}
      >

        <Upload size={45} color="white" />

      </div>

      <h3 className="fw-bold">

        Upload Payment Slip

      </h3>

      <p className=" fs-5">

        Drop files here or click to browse

      </p>

      <input
        type="file"
        id="paymentSlip"
        className="d-none"
        onChange={(e) =>
          setSelectedFile(e.target.files[0])
        }
      />

      <label
        htmlFor="paymentSlip"
        className="btn btn-primary btn-lg px-5 rounded-pill"
      >

        Select File

      </label>

      {selectedFile && (

        <div className="alert alert-success mt-4 mb-0">

          <strong>Selected File:</strong>

          <br />

          {selectedFile.name}

        </div>

      )}

    </div>

  </div>

</div>

            {/* Back Button */}

       <div className="d-flex justify-content-between mt-4">

  <button
    className="btn btn-outline-secondary btn-lg rounded-pill px-5"
    onClick={() => navigate("/payment-options")}
  >

    ← Back

  </button>

 <button
  type="button"
  className="btn btn-primary btn-lg rounded-pill px-5"
  onClick={handleUpload}
>
  Submit Payment Slip
</button>

</div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default BankSlipUpload;