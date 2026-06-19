import React from "react";
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
} from "react-bootstrap-icons";

function PaymentOptions() {
  const navigate = useNavigate();

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
            background: "#f5f7fb",
            minHeight: "100vh",
          }}
        >

          {/* NAVBAR */}

          <div className="d-flex justify-content-between align-items-center p-4">

            <h2 className="fw-bold">
              Payment
            </h2>

            <div className="d-flex align-items-center">

              <Bell size={22} />

              <img
                src="https://i.pravatar.cc/100"
                alt=""
                className="rounded-circle ms-4"
                width="45"
                height="45"
              />

              
<div
  className="ms-3"
  style={{ cursor: "pointer" }}
  onClick={() => navigate("/studentprofile")}
>

  <h5 className="mb-0 fw-bold">

    Thusara Dilshan

  </h5>

  <small className="text-muted">

    Student

  </small>

</div>

              <ChevronDown className="ms-2" />

            </div>

          </div>
          {/* ================= PAYMENT OPTIONS ================= */}

<div className="container mt-4">

  <div className="text-center mb-5">

    <h1 className="fw-bold display-5 text-primary">
      Payment Options
    </h1>

    <p className="text-muted fs-5">
      Choose your preferred payment method
    </p>

  </div>

  <div className="row g-4">

    {/* ================= ONLINE PAYMENT ================= */}

    <div className="col-lg-6">

      <div className="card border-0 shadow-lg rounded-5 h-100">

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

          <p className="text-muted fs-5">

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

      <div className="card border-0 shadow-lg rounded-5 h-100">

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

          <p className="text-muted fs-5">

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