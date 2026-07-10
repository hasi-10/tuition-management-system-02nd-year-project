import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminAddTeacher() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [darkMode, setDarkMode] = useState(false);




 useEffect(() => {

  const savedTheme = localStorage.getItem("theme");
  setDarkMode(savedTheme === "dark");

  loadTeacher();

}, []);


const [teacher, setTeacher] = useState({
  fullName: "",
  dob: "",
  nic: "",
  phone: "",
  email: "",
  address: "",
  subject: "",
  grades: [],
  bio: "",
  password: "",
  profileImage: null,
});

  const handleChange = (e) => {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value,
    });
  };








const loadTeacher = async () => {
  try {

    const res = await axios.get(
      `http://localhost:5000/api/teachers/${id}`
    );

    setTeacher({
      fullName: res.data.name || "",
      dob: res.data.dob || "",
      nic: res.data.nic || "",
      phone: res.data.phone || "",
      email: res.data.email || "",
      address: res.data.address || "",
      subject: res.data.subject || "",
      grades: res.data.grades || [],
      bio: res.data.bio || "",
      password: "",
      profileImage: null,
    });

  } catch (err) {
    console.log(err);
  }
};









  const handleGradeChange = (grade) => {










    if (teacher.grades.includes(grade)) {
      setTeacher({
        ...teacher,
        grades: teacher.grades.filter((g) => g !== grade),
      });
    } else {
      setTeacher({
        ...teacher,
        grades: [...teacher.grades, grade],
      });
    }
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
  title="Edit Teacher"
  subtitle="Update teacher information"
/>

          <div className="container-fluid p-4">

            <div
              className="card border-0 shadow rounded-4"
              style={{
                background: darkMode ? "#3a4047" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >

              <div className="card-body p-5">

                {/* ================= PERSONAL INFORMATION ================= */}

<h4 className="fw-bold mb-4">
  👤 Personal Information
</h4>

<div className="row">

  {/* Profile Picture */}

  <div className="col-12 text-center mb-5">

    <img
      src={
        teacher.profileImage
          ? URL.createObjectURL(teacher.profileImage)
          : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      }
      alt="Profile"
      className="rounded-circle border shadow"
      width="140"
      height="140"
      style={{
        objectFit: "cover",
      }}
    />

    <div className="mt-3">

      <input
        type="file"
        accept="image/*"
        className="form-control"
        style={{
          maxWidth: "320px",
          margin: "0 auto",
          background: darkMode ? "#495057" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
        }}
        onChange={(e) =>
          setTeacher({
            ...teacher,
            profileImage: e.target.files[0],
          })
        }
      />

    </div>

  </div>

  {/* Full Name */}

  <div className="col-md-6 mb-4">

    <label className="form-label fw-bold">
      Full Name
    </label>

    <input
      type="text"
      className="form-control rounded-3"
      name="fullName"
      value={teacher.fullName}
      onChange={handleChange}
      style={{
        background: darkMode ? "#495057" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />

  </div>

  {/* Date of Birth */}

  <div className="col-md-6 mb-4">

    <label className="form-label fw-bold">
      Date of Birth
    </label>

    <input
      type="date"
      className="form-control rounded-3"
      name="dob"
      value={teacher.dob}
      onChange={handleChange}
      style={{
        background: darkMode ? "#495057" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />

  </div>

  {/* NIC */}

  <div className="col-md-6 mb-4">

    <label className="form-label fw-bold">
      NIC
    </label>

    <input
      type="text"
      className="form-control rounded-3"
      name="nic"
      value={teacher.nic}
      onChange={handleChange}
      style={{
        background: darkMode ? "#495057" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />

  </div>

  {/* Phone */}

  <div className="col-md-6 mb-4">

    <label className="form-label fw-bold">
      Phone Number
    </label>

    <input
      type="text"
      className="form-control rounded-3"
      name="phone"
      value={teacher.phone}
      onChange={handleChange}
      style={{
        background: darkMode ? "#495057" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />

  </div>

  {/* Email */}

  <div className="col-md-6 mb-4">

    <label className="form-label fw-bold">
      Email Address
    </label>

    <input
      type="email"
      className="form-control rounded-3"
      name="email"
      value={teacher.email}
      onChange={handleChange}
      style={{
        background: darkMode ? "#495057" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />

  </div>

  {/* Address */}

  <div className="col-md-6 mb-4">

    <label className="form-label fw-bold">
      Address
    </label>

    <input
      type="text"
      className="form-control rounded-3"
      name="address"
      value={teacher.address}
      onChange={handleChange}
      style={{
        background: darkMode ? "#495057" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />

  </div>

</div>

<hr className="my-5" />
{/* ================= TEACHING INFORMATION ================= */}

<h4 className="fw-bold mb-4">
  📚 Teaching Information
</h4>

<div className="row">

  {/* Subject */}

  <div className="col-md-6 mb-4">

    <label className="form-label fw-bold">
      Subject
    </label>

   <input
  type="text"
  className="form-control rounded-3"
  name="subject"
  value={teacher.subject}
  onChange={handleChange}
  placeholder="Enter Subject"
  style={{
    background: darkMode ? "#495057" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
/>

  </div>

  {/* Grades */}

  <div className="col-md-6 mb-4">

    <label className="form-label fw-bold d-block">
      Grades
    </label>

    <div className="row">

      {["6", "7", "8", "9", "10", "11", "12", "13"].map((grade) => (

        <div className="col-4 mb-3" key={grade}>

          <div className="form-check">

            <input
              className="form-check-input"
              type="checkbox"
              checked={teacher.grades.includes(grade)}
              onChange={() => handleGradeChange(grade)}
              id={`grade${grade}`}
            />

            <label
              className="form-check-label"
              htmlFor={`grade${grade}`}
            >
              Grade {grade}
            </label>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>

<hr className="my-5" />

{/* ================= LOGIN INFORMATION ================= */}

<h4 className="fw-bold mb-4">
  🔐 Login Information
</h4>

<div className="row">

  {/* Password */}

  <div className="col-md-6 mb-4">

    <label className="form-label fw-bold">
      Password
    </label>

    <input
      type="password"
      className="form-control rounded-3"
      name="password"
      value={teacher.password}
      onChange={handleChange}
      placeholder="Enter temporary password"
      style={{
        background: darkMode ? "#495057" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    />

    <small
      style={{
        color: darkMode ? "#d1d5db" : "#6c757d",
      }}
    >
      Teacher will use the email address and this password to log in.
    </small>

  </div>

</div>

<hr className="my-5" />
{/* ================= BUTTONS ================= */}

<div className="d-flex justify-content-end gap-3">

  {/* Cancel */}

  <button
    type="button"
    className="fw-bold rounded-pill border-0"
    style={{
      fontSize: "16px",
      padding: "10px 30px",
      minWidth: "140px",
      background: darkMode ? "#6c757d" : "#212529",
      color: "#ffffff",
    }}
    onClick={() => navigate("/adminteachers")}
  >
    Cancel
  </button>

  {/* Save */}

  <button
    type="button"
    className="btn btn-primary rounded-pill px-5 fw-bold"






 onClick={async () => {

  try {

    await axios.put(
      `http://localhost:5000/api/teachers/${id}`,
      {
        name: teacher.fullName,
        email: teacher.email,
        phone: teacher.phone,
        subject: teacher.subject,
        grades: teacher.grades,
        bio: teacher.bio,
        dob: teacher.dob,
        nic: teacher.nic,
        address: teacher.address,
      }
    );

    alert("Teacher updated successfully!");

    navigate("/adminteachers");

  } catch (err) {

    console.log(err);

    alert("Update failed");

  }

}}





  >
    Update Teacher
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

export default AdminAddTeacher;
          