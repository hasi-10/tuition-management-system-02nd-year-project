import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

import {
  BoxSeamFill,
  PersonFill,
  GeoAltFill,
  Truck,
  CalendarEvent,
  Hash,
} from "react-bootstrap-icons";

function DeliveryDetails() {

  const navigate = useNavigate();

  const location = useLocation();

  const order = location.state;

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    setDarkMode(savedTheme === "dark");

  }, []);

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
title="Delivery Details"
subtitle="View complete order information"
/>

<div className="container-fluid p-4">
{/* ================= ORDER INFORMATION ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
  }}
>

  <div className="card-body p-4">

    <h3 className="fw-bold mb-4">

      <BoxSeamFill className="me-2 text-primary" />

      Order Information

    </h3>

    <div className="row">

      {/* Left Side */}

      <div className="col-lg-6">

        <p>

          <Hash className="me-2 text-secondary" />

          <strong>Order ID :</strong>

          {" "}

          {order.id}

        </p>

        <p>

          <Truck className="me-2 text-primary" />

          <strong>Status :</strong>

          {" "}

          <span
            className={`badge ${
              order.status === "Delivered"
                ? "bg-success"
                : order.status === "In Transit"
                ? "bg-primary"
                : order.status === "Processing"
                ? "bg-warning text-dark"
                : "bg-danger"
            }`}
          >

            {order.status}

          </span>

        </p>

        <p>

          <strong>Tracking Number :</strong>

          {" "}

          {order.tracking}

        </p>

      </div>

      {/* Right Side */}

      <div className="col-lg-6">

        <p>

          <CalendarEvent className="me-2 text-success" />

          <strong>Order Date :</strong>

          {" "}

          {order.orderDate}

        </p>

        <p>

          <CalendarEvent className="me-2 text-danger" />

          <strong>Expected Delivery :</strong>

          {" "}

          {order.expected}

        </p>

      </div>

    </div>

    <hr />

    <h4 className="fw-bold mt-4 mb-3">

      <PersonFill className="me-2 text-primary" />

      Student Details

    </h4>

    <div className="row">

      <div className="col-lg-6">

        <p>

          <strong>Student Name :</strong>

          {" "}

          {order.student}

        </p>

        <p>

          <strong>Ordered Material :</strong>

          {" "}

          {order.item}

        </p>

      </div>

      <div className="col-lg-6">

        <p>

          <GeoAltFill className="me-2 text-danger" />

          <strong>Delivery Address :</strong>

          {" "}

          Colombo, Sri Lanka

        </p>

        <p>

          <strong>Phone :</strong>

          {" "}

          077 123 4567

        </p>

      </div>

    </div>

  </div>

</div>
{/* ================= DELIVERY PROGRESS ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
  }}
>

  <div className="card-body p-4">

    <h3 className="fw-bold mb-4">

      <Truck className="me-2 text-primary" />

      Delivery Progress

    </h3>

    <div className="ps-3">

      {/* Order Placed */}

      <div className="d-flex">

        <div className="text-center">

          <div className="bg-success rounded-circle text-white d-flex justify-content-center align-items-center"
            style={{ width: 35, height: 35 }}>
            ✓
          </div>

          <div
            style={{
              width: "2px",
              height: "45px",
              background: "#198754",
              margin: "0 auto",
            }}
          ></div>

        </div>

        <div className="ms-3">

          <h6 className="fw-bold mb-1">
            Order Placed
          </h6>

          <small className="text-muted">
            {order.orderDate}
          </small>

        </div>

      </div>

      {/* Processing */}

      <div className="d-flex">

        <div className="text-center">

          <div className="bg-success rounded-circle text-white d-flex justify-content-center align-items-center"
            style={{ width: 35, height: 35 }}>
            ✓
          </div>

          <div
            style={{
              width: "2px",
              height: "45px",
              background: "#198754",
              margin: "0 auto",
            }}
          ></div>

        </div>

        <div className="ms-3">

          <h6 className="fw-bold mb-1">
            Processing
          </h6>

          <small className="text-muted">
            Package prepared for shipping
          </small>

        </div>

      </div>

      {/* In Transit */}

      <div className="d-flex">

        <div className="text-center">

          <div
            className={`rounded-circle text-white d-flex justify-content-center align-items-center ${
              order.status === "Pending"
                ? "bg-secondary"
                : "bg-primary"
            }`}
            style={{ width: 35, height: 35 }}
          >
            🚚
          </div>

          <div
            style={{
              width: "2px",
              height: "45px",
              background:
                order.status === "Pending"
                  ? "#ced4da"
                  : "#0d6efd",
              margin: "0 auto",
            }}
          ></div>

        </div>

        <div className="ms-3">

          <h6 className="fw-bold mb-1">
            In Transit
          </h6>

          <small className="text-muted">
            Courier is delivering the package
          </small>

        </div>

      </div>

      {/* Delivered */}

      <div className="d-flex">

        <div className="text-center">

          <div
            className={`rounded-circle text-white d-flex justify-content-center align-items-center ${
              order.status === "Delivered"
                ? "bg-success"
                : "bg-secondary"
            }`}
            style={{ width: 35, height: 35 }}
          >
            ✓
          </div>

        </div>

        <div className="ms-3">

          <h6 className="fw-bold mb-1">
            Delivered
          </h6>

          <small className="text-muted">
            Successfully delivered to the student
          </small>

        </div>

      </div>

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
        className="btn btn-outline-secondary rounded-pill px-4"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <button
        className="btn btn-warning rounded-pill px-4"
        onClick={() => alert("Status update feature will be connected to the database later.")}
      >
        🔄 Update Status
      </button>

      <button
        className="btn btn-success rounded-pill px-4"
        onClick={() => window.print()}
      >
        🖨 Print Delivery Slip
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

export default DeliveryDetails;

