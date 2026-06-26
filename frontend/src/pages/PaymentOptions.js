
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";
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
  PersonVideo
} from "react-bootstrap-icons";
import StudentProfileDropdown from "../components/StudentProfileDropdown";
import API from "../services/api";

function PaymentOptions() {
const [formData, setFormData] = useState({
  fullName: "",
  profileImage: "",
});

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  setDarkMode(savedTheme === "dark");
}, []);
 const loadProfile = async () => {
  try {
    const email = localStorage.getItem("email");

    const res = await API.get(`/profile/${email}`);

    setFormData(res.data.data);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  const email = localStorage.getItem("email");

  if (email) {
    loadProfile();
  }
}, []);


  return (
    <div className="container-fluid p-0">

      <div className="row g-0 vh-100">

    

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

      {/* Dashboard */}

      <button
        className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
        onClick={() => navigate("/studentdashboard")}
      >

        <HouseDoorFill className="me-3" />

        Dashboard

      </button>

      {/* My Courses */}

      <button
        className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
        onClick={() => navigate("/mycourses")}
      >

        <Book className="me-3" />

        My Courses

      </button>

      {/* Timetable */}

      <button
        className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
        onClick={() => navigate("/timetable")}
      >

        <Calendar3 className="me-3" />

        Timetable

      </button>

      <button
  className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
onClick={() => navigate("/allteachers")}
>
  <PersonVideo className="me-3" />
  Teachers
</button>

      {/* Payment - ACTIVE */}

      <button
        className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      >

        <CreditCard className="me-3" />

        Payment

      </button>

      {/* Results */}

      <button
        className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
      >

        <FileText className="me-3" />

        Results

      </button>

      {/* Material Tracking */}

      <button
        className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
      >

        <Folder className="me-3" />

        Material Tracking

      </button>

      {/* Settings */}

<button
  className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  onClick={() => navigate("/settings")}
>
  <Gear className="me-3" />
  Settings
</button>

    </div>

  </div>

  {/* Logout */}

  <div className="p-3">

    <button
      className="btn btn-light w-100 rounded-4 fw-bold p-3"
    >

      <BoxArrowRight className="me-2" />

      Logout

    </button>

  </div>

</div>

        {/* ================= MAIN ================= */}

        <div
          className="col-md-10"
          style={{
            background: darkMode ? "#2f343a" : "#eef2f7",
    minHeight: "100vh",
          }}
        >

<div
  className="shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div>
    <h2
      className="fw-bold mb-0"
      style={{
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      Payment
    </h2>

    <small
      style={{
        color: darkMode ? "#d1d5db" : "#6c757d",
      }}
    >
      Choose your preferred payment method
    </small>
  </div>

  <div className="d-flex align-items-center">
    <div className="position-relative me-4">
      <Bell size={28} />

    </div>

<StudentProfileDropdown
  fullName={formData.fullName}
  profileImage={formData.profileImage}
/>
  </div>
</div>
          {/* ================= PAYMENT OPTIONS ================= */}

<div className="container mt-4">

  <div className="text-center mb-5">

<h1
  style={{
    color: darkMode ? "#ffffff" : "#0d6efd"
  }}
>
  Payment Options
</h1>

<p
  style={{
    color: darkMode ? "#d1d5db" : "#6c757d"
  }}
>
  Choose your preferred payment method
</p>

  </div>

  <div className="row g-4">

    {/* ================= ONLINE PAYMENT ================= */}

    <div className="col-lg-6">

      <div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

        <div className="card-body text-center p-5">

          <div
            className="rounded-circle bg-primary bg-opacity-10 d-inline-flex justify-content-center align-items-center mb-4"
            style={{
              width: "100px",
              height: "100px"
            }}
          >

            <CreditCard
              size={50}
              className="text-primary"
            />

          </div>

          <h2 className="fw-bold mb-3">

            Online Payment

          </h2>

          <p className=" fs-5">

            Pay your class fees securely using
            Debit Card, Credit Card or Online Banking.

          </p>

         

          <button
            className="btn btn-primary btn-lg rounded-pill mt-4 px-5"
            onClick={() => navigate("/payment")}
          >

            Proceed to Online Payment

          </button>

        </div>

      </div>

    </div>

    {/* ================= BANK DEPOSIT ================= */}

    <div className="col-lg-6">

<div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

        <div className="card-body text-center p-5">

          <div
            className="rounded-circle bg-success bg-opacity-10 d-inline-flex justify-content-center align-items-center mb-4"
            style={{
              width: "100px",
              height: "100px"
            }}
          >

            <CreditCard
              size={50}
              className="text-success"
            />

          </div>

          <h2 className="fw-bold mb-3">

            Bank Deposit

          </h2>

          <p className=" fs-5">

            Deposit the payment to our bank account
            and upload your payment slip.

          </p>

         

         <button
  className="btn btn-success btn-lg rounded-pill mt-4 px-5"
  onClick={() => navigate("/bank-slip-upload")}
>
  Upload Bank Slip
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

export default PaymentOptions;