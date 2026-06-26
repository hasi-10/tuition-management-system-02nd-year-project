import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";


import slip from "../../assets/payment-slip.jpg";

function PaymentDetails() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  // Temporary Payment Data
  const payment = {
    receipt: "REC001",
    student: "Nethmi Perera",
    teacher: "Kamal Silva",
    grade: "Grade 10",
    subject: "Mathematics",
    amount: 2500,
    method: "Bank Deposit",
    date: "25 June 2026",
    status: "Pending",
    slip: slip,
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
title="Receipt Details"
subtitle="View and verify payment"
/>

<div className="container-fluid p-4">

    {/* ================= PAYMENT INFORMATION ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>
  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      💳 Payment Information
    </h4>

    <div className="row">

      {/* Receipt */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Receipt Number
        </h6>

        <p className="fs-5 fw-bold">
          {payment.receipt}
        </p>

      </div>

      {/* Student */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Student
        </h6>

        <p className="fs-5">
          {payment.student}
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
          Teacher
        </h6>

        <p className="fs-5">
          {payment.teacher}
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
          Grade
        </h6>

        <span className="badge bg-primary fs-6 px-3 py-2">
          {payment.grade}
        </span>

      </div>

      {/* Subject */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Subject
        </h6>

        <p className="fs-5">
          {payment.subject}
        </p>

      </div>

      {/* Amount */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Amount
        </h6>

        <p
          className="fs-4 fw-bold text-success"
        >
          Rs. {payment.amount}
        </p>

      </div>

      {/* Payment Method */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Payment Method
        </h6>

        <span
          className={`badge ${
            payment.method === "Bank Deposit"
              ? "bg-warning text-dark"
              : "bg-success"
          } fs-6 px-3 py-2`}
        >
          {payment.method}
        </span>

      </div>

      {/* Payment Date */}

      <div className="col-md-6 mb-4">

        <h6
          className="fw-bold"
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          Payment Date
        </h6>

        <p className="fs-5">
          {payment.date}
        </p>

      </div>

    </div>

  </div>

</div>
{/* ================= BANK SLIP ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-4">

    <h4 className="fw-bold mb-4">
      🏦 Uploaded Bank Slip
    </h4>

    <div className="text-center">

      <img
        src={payment.slip}
        alt="Bank Slip"
        className="img-fluid rounded-4 shadow"
        style={{
          maxHeight: "650px",
          objectFit: "contain",
          border: darkMode
            ? "2px solid #495057"
            : "2px solid #dee2e6",
        }}
      />

    </div>

    <div className="text-center mt-4">

      <small
        style={{
          color: darkMode ? "#d1d5db" : "#6c757d",
        }}
      >
        Please verify the bank slip carefully before approving the payment.
      </small>

    </div>

  </div>

</div>
{/* ================= ACTION BUTTONS ================= */}

<div className="d-flex justify-content-end gap-3">

  {/* Back */}

  <button
    className="fw-bold rounded-pill border-0"
    style={{
      fontSize: "16px",
      padding: "10px 30px",
      minWidth: "140px",
      background: darkMode ? "#6c757d" : "#212529",
      color: "#ffffff",
    }}
    onClick={() => navigate("/adminpayments")}
  >
    ← Back
  </button>

  {/* Reject */}

  <button
    className="btn btn-danger rounded-pill px-5 fw-bold"
    onClick={() => {

      if (
        window.confirm(
          "Are you sure you want to reject this payment?"
        )
      ) {

        alert("Payment rejected successfully!");

        navigate("/adminpayments");

      }

    }}
  >
    Reject
  </button>

  {/* Approve */}

  <button
    className="btn btn-success rounded-pill px-5 fw-bold"
    onClick={() => {

      if (
        window.confirm(
          "Approve this payment?"
        )
      ) {

        alert("Payment approved successfully!");

        navigate("/adminpayments");

      }

    }}
  >
    Approve
  </button>

</div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default PaymentDetails;
